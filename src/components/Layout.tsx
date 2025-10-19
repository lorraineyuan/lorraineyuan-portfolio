import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Research", path: "/research" },
  { name: "Teaching", path: "/teaching" },
  { name: "Contact", path: "/contact" },
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
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-lg py-2 transition-colors relative",
                  isActive 
                    ? "text-sidebar-text" 
                    : "text-sidebar-text/60 hover:text-sidebar-text"
                )}
              >
                {item.name}
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
