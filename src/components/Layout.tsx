
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Footer from './Footer';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container-tight py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-heading font-bold text-xl text-green-600">Community Crop Exchange</span>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="p-2 md:hidden text-green-600" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium hover:text-green-500 transition-colors ${
                  location.pathname === '/' ? 'text-green-500' : 'text-foreground'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/browse" 
                className={`font-medium hover:text-green-500 transition-colors ${
                  location.pathname === '/browse' ? 'text-green-500' : 'text-foreground'
                }`}
              >
                Browse
              </Link>
              <Link 
                to="/list" 
                className={`font-medium hover:text-green-500 transition-colors ${
                  location.pathname === '/list' ? 'text-green-500' : 'text-foreground'
                }`}
              >
                List Items
              </Link>
              <Link 
                to="/about" 
                className={`font-medium hover:text-green-500 transition-colors ${
                  location.pathname === '/about' ? 'text-green-500' : 'text-foreground'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium hover:text-green-500 transition-colors ${
                  location.pathname === '/contact' ? 'text-green-500' : 'text-foreground'
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-border">
            <div className="container-tight py-4 flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium p-2 hover:bg-green-50 rounded-md transition-colors ${
                  location.pathname === '/' ? 'text-green-500' : 'text-foreground'
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/browse" 
                className={`font-medium p-2 hover:bg-green-50 rounded-md transition-colors ${
                  location.pathname === '/browse' ? 'text-green-500' : 'text-foreground'
                }`}
                onClick={closeMenu}
              >
                Browse
              </Link>
              <Link 
                to="/list" 
                className={`font-medium p-2 hover:bg-green-50 rounded-md transition-colors ${
                  location.pathname === '/list' ? 'text-green-500' : 'text-foreground'
                }`}
                onClick={closeMenu}
              >
                List Items
              </Link>
              <Link 
                to="/about" 
                className={`font-medium p-2 hover:bg-green-50 rounded-md transition-colors ${
                  location.pathname === '/about' ? 'text-green-500' : 'text-foreground'
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium p-2 hover:bg-green-50 rounded-md transition-colors ${
                  location.pathname === '/contact' ? 'text-green-500' : 'text-foreground'
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
