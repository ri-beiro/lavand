import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av. José Antônio Cabral, 532 – Vila Rosalia, Guarulhos – SP, 07081-000'
    },
    {
      icon: Phone,
      title: 'Telefone e WhatsApp',
      content: '(11) 98920-0527',
      link: 'https://wa.me/5511989200527'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: 'Segunda a Domingo: 06h às 23h'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-emerald-700 mb-4 text-4xl font-extrabold tracking-wide">Localização e Contato</h2>
          <p className="text-gray-600 text-lg">
            Estamos prontos para atender você!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-emerald-700 mb-2">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-emerald-600 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-700">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="pt-4">
                <Button
                  onClick={() => window.open('https://wa.me/5511989200527', '_blank')}
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.0820741949825!2d-46.51831892377642!3d-23.469099778808464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef5a8f0a1e4b5%3A0x5f3c3c5a5e5f5e5f!2sAv.%20Jos%C3%A9%20Ant%C3%B4nio%20Cabral%2C%20532%20-%20Vila%20Rosalia%2C%20Guarulhos%20-%20SP%2C%2007081-000!5e0!3m2!1spt-BR!2sbr!4v1698765432109!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização 1Lavanderia Express"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
