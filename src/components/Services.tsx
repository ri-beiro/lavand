import { Shirt, Wind, Bed, Truck } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Shirt,
      title: 'Lavagem e Secagem',
      description: 'Processo completo com produtos de alta qualidade para preservar suas roupas'
    },
    {
      icon: Wind,
      title: 'Passadoria',
      description: 'Suas roupas passadas com perfeição, prontas para usar'
    },
    {
      icon: Bed,
      title: 'Higienização de Edredons',
      description: 'Limpeza profunda de edredons, cobertores e peças grandes'
    },
    {
      icon: Truck,
      title: 'Coleta e Entrega Express',
      description: 'Buscamos e entregamos suas roupas no mesmo dia, sem você sair de casa'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-emerald-700 mb-4 text-4xl font-extrabold tracking-wide">Nossos Serviços</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferecemos serviços completos de lavanderia com a melhor qualidade de Guarulhos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-emerald-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
