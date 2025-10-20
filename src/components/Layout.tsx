import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, User, FileText, GraduationCap, Award, FileDown, ChevronLeft, ChevronRight, Menu, Mail, MapPin, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", hash: "#home", icon: Home },
  { name: "About", hash: "#about", icon: User },
  { name: "Research", hash: "#research", icon: FileText },
  { name: "Teaching", hash: "#teaching", icon: GraduationCap },
  { name: "Service & Awards", hash: "#service-awards", icon: Award },
  { name: "Curriculum Vitae", path: "https://drive.google.com/file/d/1S8dvQgZZpCzePSpl0dXdSP8ks743VuQ5/view?usp=share_link", icon: FileDown, external: true },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#about', '#research', '#teaching', '#service-awards'];
      const scrollPosition = window.scrollY + 100; // offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL hash without jumping
      window.history.pushState(null, '', hash);
      setActiveSection(hash);
      setIsOpen(false); // Close mobile menu after navigation
    }
  };

  const renderNavItems = () => (
    <>
      {navigation.map((item) => {
        const Icon = item.icon;
        
        if (item.external) {
          return (
            <a
              key={item.path}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 text-base py-2 transition-colors text-sidebar-text/60 hover:text-sidebar-text",
                isMobile ? "" : isCollapsed && "justify-center"
              )}
              title={isCollapsed && !isMobile ? item.name : undefined}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {(!isCollapsed || isMobile) && <span>{item.name}</span>}
            </a>
          );
        }
        
        const isActive = activeSection === item.hash;
        
        return (
          <a
            key={item.hash}
            href={item.hash}
            onClick={(e) => handleNavClick(e, item.hash!)}
            className={cn(
              "flex items-center gap-3 text-base py-2 transition-colors relative",
              isActive 
                ? "text-sidebar-text" 
                : "text-sidebar-text/60 hover:text-sidebar-text",
              isMobile ? "" : isCollapsed && "justify-center"
            )}
            title={isCollapsed && !isMobile ? item.name : undefined}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            {(!isCollapsed || isMobile) && <span>{item.name}</span>}
            {isActive && !isCollapsed && !isMobile && (
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-sidebar-accent" />
            )}
            {isActive && isCollapsed && !isMobile && (
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-0.5 bg-sidebar-accent" />
            )}
          </a>
        );
      })}
    </>
  );

  return (
    <div className="flex min-h-screen">
      {/* Mobile Header */}
      {isMobile && (
        <header className="fixed top-0 left-0 right-0 h-16 bg-sidebar-dark text-sidebar-text flex items-center justify-between px-4 z-50 border-b border-sidebar-text/10">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Lorraine Yuan</h1>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-sidebar-text/10 rounded-md transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-sidebar-dark text-sidebar-text border-sidebar-text/10 w-64">
              <div className="flex flex-col gap-2 mt-8 h-full">
                <div className="flex-1">
                  {renderNavItems()}
                </div>
                
                {/* Contact Information for Mobile */}
                <div className="border-t border-sidebar-text/10 pt-4 space-y-3 text-base">
                  <div className="flex items-start gap-2">
                    <Mail className="w-5 h-5 mt-0.5 text-sidebar-text/60 flex-shrink-0" />
                    <a href="mailto:hy557@cornell.edu" className="text-sidebar-text/60 hover:text-sidebar-text transition-colors break-all">
                      hy557@cornell.edu
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <a 
                      href="https://www.linkedin.com/in/huaibing-lorraine-yuan-cornell" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sidebar-text/60 hover:text-sidebar-text transition-colors"
                    >
                      <Linkedin className="w-5 h-5 flex-shrink-0" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 mt-0.5 text-sidebar-text/60 flex-shrink-0" />
                    <p className="text-sidebar-text/60">
                      Cornell Tech<br />
                      2 West Loop Road<br />
                      New York, NY 10044
                    </p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </header>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside className={cn(
          "fixed left-0 top-0 h-screen bg-sidebar-dark text-sidebar-text flex flex-col p-8 transition-all duration-300",
          isCollapsed ? "w-20" : "w-64"
        )}>
          <div className="mb-12">
            {!isCollapsed && (
              <>
                <h1 className="text-2xl font-bold mb-1">Lorraine</h1>
                <h1 className="text-2xl font-bold">Yuan</h1>
              </>
            )}
            {isCollapsed && (
              <h1 className="text-xl font-bold text-center">LY</h1>
            )}
          </div>
          
          <nav className="flex flex-col gap-2 flex-1">
            {renderNavItems()}
          </nav>

          {/* Contact Information */}
          {!isCollapsed && (
            <div className="border-t border-sidebar-text/10 pt-4 mb-4 space-y-3 text-base">
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 text-sidebar-text/60 flex-shrink-0" />
                <a href="mailto:hy557@cornell.edu" className="text-sidebar-text/60 hover:text-sidebar-text transition-colors break-all">
                  hy557@cornell.edu
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.linkedin.com/in/huaibing-lorraine-yuan-cornell" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sidebar-text/60 hover:text-sidebar-text transition-colors"
                >
                  <Linkedin className="w-5 h-5 flex-shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 text-sidebar-text/60 flex-shrink-0" />
                <p className="text-sidebar-text/60">
                  Cornell Tech<br />
                  2 West Loop Road<br />
                  New York, NY 10044
                </p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="border-t border-sidebar-text/10 pt-4 mb-4 flex flex-col items-center gap-3">
              <a 
                href="mailto:hy557@cornell.edu" 
                title="Email"
                className="text-sidebar-text/60 hover:text-sidebar-text transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/huaibing-lorraine-yuan-cornell" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
                className="text-sidebar-text/60 hover:text-sidebar-text transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          )}

          {/* Toggle button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center justify-center py-3 text-sidebar-text/60 hover:text-sidebar-text transition-colors"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </aside>
      )}

      {/* Main content */}
      <main className={cn(
        "flex-1 bg-background transition-all duration-300",
        isMobile ? "pt-16" : isCollapsed ? "ml-20" : "ml-64"
      )}>
        {children}
      </main>
    </div>
  );
}
