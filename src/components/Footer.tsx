import { Droplet, Instagram, Facebook, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/lavanderiaexpress_gru?igsh=NGVoeWFrN2d6aHpz',
      label: 'Instagram'
    },
    {
      icon: Facebook,
      href: 'https://facebook.com',
      label: 'Facebook'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/5511989200527',
      label: 'WhatsApp'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo and Slogan */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white">1Lavanderia Express</h3>
            </div>
            <p className="text-emerald-200">
              Rapidez e cuidado em cada lavagem
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-2xl border-t border-emerald-700 my-6"></div>

          {/* Copyright */}
          <p className="text-emerald-200 text-sm">
            Copyright {currentYear} © Todos os direitos reservados. 
          </p>
        </div>
      </div>
    </footer>
  );
}
