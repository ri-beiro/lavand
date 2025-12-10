import { Zap, Heart, CheckCircle } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Zap,
      title: 'Rapidez',
      description: 'Coleta e entrega no mesmo dia para sua comodidade'
    },
    {
      icon: Heart,
      title: 'Cuidado',
      description: 'Tratamento especial para cada tipo de tecido'
    },
    {
      icon: CheckCircle,
      title: 'Conveniência',
      description: 'Serviço completo sem você sair de casa'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-emerald-700 mb-4 text-4xl font-extrabold tracking-wide">Quem Somos</h2>
          <p className="text-gray-700 text-lg">
            A <strong>1Lavanderia Express</strong> é referência em Guarulhos pela agilidade e cuidado com cada peça. 
            Atendemos residências, empresas e condomínios com serviço de coleta e entrega rápida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-emerald-700 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
