import { cn } from "@/lib/utils";
import { Menu, Mail, MapPin, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Research", hash: "#research" },
  { name: "Teaching", hash: "#teaching" },
  { name: "Service & Awards", hash: "#service-awards" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#about', '#research', '#teaching', '#service-awards'];
      const scrollPosition = window.scrollY + 120;

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', hash);
      setActiveSection(hash);
      setIsOpen(false);
    }
  };

  const renderNavItems = (vertical = false) => (
    <>
      {navigation.map((item) => {
        const isActive = activeSection === item.hash;
        return (
          <a
            key={item.hash}
            href={item.hash}
            onClick={(e) => handleNavClick(e, item.hash!)}
            className={cn(
              "uppercase tracking-[0.15em] text-xs sm:text-sm transition-colors relative whitespace-nowrap",
              vertical ? "py-3 text-base" : "py-2",
              isActive
                ? "text-foreground"
                : "text-foreground/55 hover:text-foreground"
            )}
          >
            {item.name}
            {isActive && !vertical && (
              <span className="absolute left-0 right-0 -bottom-1 h-px bg-foreground" />
            )}
          </a>
        );
      })}
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header — Le Labo style */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-foreground/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-6">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col leading-tight"
          >
            <span className="text-lg sm:text-xl font-bold tracking-[0.2em] uppercase">
              Lorraine Yuan
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-foreground/60 mt-0.5">
              Cornell Tech — New York
            </span>
          </a>

          {/* Desktop nav */}
          {!isMobile && (
            <nav className="flex items-center gap-7 lg:gap-10">
              {renderNavItems()}
            </nav>
          )}

          {/* Mobile menu trigger */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-foreground/5 transition-colors" aria-label="Open menu">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background text-foreground border-l border-foreground/15 w-72">
                <div className="flex flex-col gap-1 mt-8 h-full">
                  <div className="flex-1 flex flex-col">
                    {renderNavItems(true)}
                  </div>

                  <div className="border-t border-foreground/15 pt-4 space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Mail className="w-4 h-4 mt-0.5 text-foreground/60 flex-shrink-0" />
                      <a href="mailto:hy557@cornell.edu" className="text-foreground/70 hover:text-foreground transition-colors break-all">
                        hy557@cornell.edu
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.linkedin.com/in/huaibing-lorraine-yuan-cornell"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4 flex-shrink-0" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-foreground/60 flex-shrink-0" />
                      <p className="text-foreground/70">
                        Cornell Tech<br />
                        2 West Loop Road<br />
                        New York, NY 10044
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 bg-background pt-20 sm:pt-24">
        {children}
      </main>

      {/* Footer with contact (desktop) */}
      {!isMobile && (
        <footer className="border-t border-foreground/15 bg-background mt-16">
          <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-3 gap-8 text-sm">
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-foreground/60 flex-shrink-0" />
              <a href="mailto:hy557@cornell.edu" className="text-foreground/70 hover:text-foreground transition-colors">
                hy557@cornell.edu
              </a>
            </div>
            <div className="flex items-start gap-2">
              <Linkedin className="w-4 h-4 mt-0.5 text-foreground/60 flex-shrink-0" />
              <a
                href="https://www.linkedin.com/in/huaibing-lorraine-yuan-cornell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-foreground/60 flex-shrink-0" />
              <p className="text-foreground/70 leading-relaxed">
                Cornell Tech, 2 West Loop Road<br />
                New York, NY 10044
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
