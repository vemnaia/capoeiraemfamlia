import { Heart, Zap, Target, PartyPopper } from "lucide-react";
import familyImage from "@/assets/family-benefits.jpg";

const benefits = [
  {
    icon: Heart,
    title: "Vínculo Familiar",
    description:
      "Crie memórias inesquecíveis treinando lado a lado com seu filho. A capoeira aproxima através do movimento e da música.",
  },
  {
    icon: Zap,
    title: "Saúde e Energia",
    description:
      "Movimente o corpo, melhore a coordenação e gaste energia de forma divertida. Bom para crianças e adultos!",
  },
  {
    icon: Target,
    title: "Foco e Disciplina",
    description:
      "A capoeira ensina concentração, respeito e autocontrole de forma lúdica, sem sermões ou cobranças.",
  },
  {
    icon: PartyPopper,
    title: "Diversão Garantida",
    description:
      "Chega de telas! Cantem, joguem e brinquem juntos. A capoeira transforma o treino em festa.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Por que Capoeira em Família? 💪
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais do que um esporte, a capoeira é uma forma de conexão, cultura e alegria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-5 p-4 rounded-2xl hover:bg-muted transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
            <img
              src={familyImage}
              alt="Família praticando capoeira juntos"
              className="relative rounded-2xl shadow-xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-lg shadow-lg">
              10-15 min/dia ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
