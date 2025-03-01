
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VoiceAssistant from '@/components/VoiceAssistant';
import { useAssistant } from '@/context/AssistantContext';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);
  
  // Navigation items
  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="h-4 w-4" /> },
    { path: '/physics', label: 'Physics', icon: <BookOpen className="h-4 w-4" /> },
  ];
  
  // Close menu when route changes
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full glass border-b shadow-soft">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-xl">OLabs</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center text-sm font-medium transition-all-200 hover:text-primary gap-1 ${
                  location.pathname === item.path ? 'text-primary underline underline-offset-4' : 'text-muted-foreground'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>
      
      {/* Mobile navigation */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 z-30 glass animate-fade-in md:hidden">
          <nav className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center text-lg font-medium py-2 transition-all-200 hover:text-primary gap-2 ${
                  location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
      
      {/* Main content */}
      <main className="flex-1 container py-6 fade-slide-in">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} OLabs. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Voice assistant - always present */}
      <VoiceAssistant />
    </div>
  );
};

export default Layout;
