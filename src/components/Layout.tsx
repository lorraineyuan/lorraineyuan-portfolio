import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, User, FileText, GraduationCap, Mail, Award } from "lucide-react";

const navigation = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Research", path: "/research", icon: FileText },
  { name: "Teaching", path: "/teaching", icon: GraduationCap },
  { name: "Service & Awards", path: "/service-awards", icon: Award },
  { name: "Contact", path: "/contact", icon: Mail },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

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
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
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
              </Link>
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
