import { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
     <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div>
            <h1 className="text-xl font-semibold">Portfolio</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-stone-700 cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-stone-700 cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-stone-700 cursor-pointer"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-stone-700 cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-stone-700 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}   

export default Header;