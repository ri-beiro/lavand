import { Droplet, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-emerald-700">1Lavanderia Express</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('planos')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Planos
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => window.open('https://wa.me/5511989200527', '_blank')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Agendar Retirada
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
              Início
            </button>
            <button onClick={() => scrollToSection('planos')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
              Planos
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
              Serviços
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
              Contato
            </button>
            <Button 
              onClick={() => window.open('https://wa.me/5511989200527', '_blank')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
            >
              Agendar Retirada
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
