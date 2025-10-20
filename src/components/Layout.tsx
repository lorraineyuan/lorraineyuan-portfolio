import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, User, FileText, GraduationCap, Mail, Award, FileDown } from "lucide-react";

const navigation = [
  { name: "Home", hash: "#home", icon: Home },
  { name: "About", hash: "#about", icon: User },
  { name: "Research", hash: "#research", icon: FileText },
  { name: "Teaching", hash: "#teaching", icon: GraduationCap },
  { name: "Service & Awards", hash: "#service-awards", icon: Award },
  { name: "Contact", hash: "#contact", icon: Mail },
  { name: "Curriculum Vitae", path: "https://drive.google.com/file/d/1S8dvQgZZpCzePSpl0dXdSP8ks743VuQ5/view?usp=share_link", icon: FileDown, external: true },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL hash without jumping
      window.history.pushState(null, '', hash);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar-dark text-sidebar-text flex flex-col p-8">
        <div className="mb-12">
          <h1 className="text-2xl font-bold mb-1">Lorraine</h1>
          <h1 className="text-2xl font-bold">Yuan</h1>
        </div>
        
        <nav className="flex flex-col gap-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            
            if (item.external) {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base py-2 transition-colors text-sidebar-text/60 hover:text-sidebar-text"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              );
            }
            
            const isActive = location.hash === item.hash || (item.hash === '#home' && !location.hash);
            
            return (
              <a
                key={item.hash}
                href={item.hash}
                onClick={(e) => handleNavClick(e, item.hash!)}
                className={cn(
                  "flex items-center gap-3 text-base py-2 transition-colors relative",
                  isActive 
                    ? "text-sidebar-text" 
                    : "text-sidebar-text/60 hover:text-sidebar-text"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-sidebar-accent" />
                )}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 bg-background">
        {children}
      </main>
    </div>
  );
}
