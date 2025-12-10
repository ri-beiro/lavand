import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToPlans = () => {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1596433904747-e8b061219a71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGZvbGRlZCUyMGxhdW5kcnl8ZW58MXx8fHwxNzYxODEwNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Roupas limpas e dobradas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-700/80"></div>
      </div>

      {/* Decorative bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 text-4xl font-bold leading-snug">
            Lavamos suas roupas com rapidez e qualidade!
          </h1>
          <p className="text-white/90 mb-6 text-4xl font-semibold tracking-wide">
            Serviço de lavanderia express em Guarulhos  Coleta e entrega no mesmo dia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToPlans}
              size="lg"
              variant="outline"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Ver Planos
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/5511989200527', '_blank')}
              size="lg"
              variant="outline"
              className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
