
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { toast } = useToast();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/forms', label: 'Forms' },
    { path: '/tables', label: 'Tables' },
    { path: '/cards', label: 'Cards' },
    { path: '/charts', label: 'Charts' },
    { path: '/animations', label: 'Animations' },
  ];

  const handleNavClick = (label: string) => {
    toast({
      title: `Navigating to ${label}`,
      description: `You clicked on the ${label} navigation item`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Test Pages App</h1>
            <nav className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `
                    px-3 py-2 rounded-md transition-all
                    ${isActive ? 'bg-white/20 font-medium' : 'hover:bg-white/10'}
                  `}
                  onClick={() => handleNavClick(link.label)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <nav className="md:hidden">
              <select 
                className="bg-primary text-primary-foreground border border-white/20 rounded-md px-2 py-1"
                onChange={(e) => {
                  const path = e.target.value;
                  const link = navLinks.find(link => link.path === path);
                  if (link) {
                    handleNavClick(link.label);
                    window.location.href = path;
                  }
                }}
                value={window.location.pathname}
              >
                {navLinks.map((link) => (
                  <option key={link.path} value={link.path}>{link.label}</option>
                ))}
              </select>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto py-6 px-4 animate-fade-in">
        {children}
      </main>
      
      <footer className="bg-muted py-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>React Test Pages App - {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
