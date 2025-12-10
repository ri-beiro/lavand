import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Check } from 'lucide-react';

export function Plans() {
  const plans = [
    {
      emoji: '🩳',
      name: 'Plano Solteiro',
      price: 'R$ 175,00',
      description: 'Ideal para quem mora sozinho',
      features: [
        '20 a 25 Peças (Por Semana)',
        '8 Ciclos Mensais (Lavagem e Secagem)',
        'Retirada e Entrega 1x (1 Cesto p/ Semana)',
        'Benefícios Exclusivos P/ Moradores',
      ],  
      highlighted: false
    },
    {
      emoji: '👔',
      name: 'Plano Família',
      price: 'R$ 410,00',
      description: 'Perfeito para Familia toda!',
      features: [
        '60 a 75 Peças (Por Semana)',
        '24 Ciclos Mensais (Lavagem e Secagem)',
        'Retirada e Entrega 1x (3 Cestos p/ Semana)',
        'Ganhe um BRINDE Exclusivo',
        'Benefícios Exclusivos P/ Moradores'
      ],
      highlighted: true
    },
    {
      emoji: '🧥',
      name: 'Plano Casal',
      price: 'R$ 300,00',
      description: 'Melhor opção para Casais',
      features: [
        '40 a 50 Peças (Por Semana)',
        '16 Ciclos Mensais (Lavagem e Secagem)',
        'retirada e Entrega 1x (2 Cestos p/ Semana)',
        'Benefícios Exclusivos P/ Moradores'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="planos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-emerald-700 mb-4 text-4xl font-extrabold tracking-wide">Escolha o plano ideal para você</h2>
          <p className="text-gray-600 text-lg">
            Planos flexíveis que cabem no seu bolso e atendem suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.highlighted
                  ? 'border-emerald-500 border-2 shadow-xl scale-105'
                  : 'hover:scale-105'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 text-sm">
                  Mais Popular
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="text-5xl mb-4">{plan.emoji}</div>
                <CardTitle className="text-emerald-700">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl text-emerald-600">{plan.price}</span>
                  <span className="text-gray-500">/mês</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() => window.open('https://wa.me/5511989200527', '_blank')}
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-emerald-600 hover:bg-emerald-700'
                      : 'bg-emerald-500 hover:bg-emerald-600'
                  } text-white`}
                >
                  Assinar Agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
