import { BookOpen, Play, Repeat, Sparkles } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    number: "1",
    title: "Leia o Guia",
    description:
      "Abra o eBook e escolha o treino do dia. Cada sessão tem instruções simples e ilustradas.",
  },
  {
    icon: Play,
    number: "2",
    title: "Treine Juntos",
    description:
      "Reserve 10-15 minutos e pratique os movimentos com seu filho. Sem pressa, sem julgamentos!",
  },
  {
    icon: Repeat,
    number: "3",
    title: "Repita e Evolua",
    description:
      "A cada dia, vocês dominam um novo movimento. Em semanas, já estarão jogando capoeira de verdade!",
  },
];

const miniTreino = [
  "🔥 Aquecimento: Pular no lugar (30 seg)",
  "🦵 Ginga básica: o movimento principal (2 min)",
  "🙌 Palmas e canto: ritmo da capoeira (1 min)",
  "🤸 Cocorinha: esquiva para baixo (1 min)",
  "🎉 Brincadeira livre: inventem juntos! (2 min)",
];

const HowToUseSection = () => {
  return (
    <section className="section-padding" style={{ background: "var(--gradient-warm)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Como Funciona? 📚
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simples, prático e pensado para a rotina corrida das famílias.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="w-20 h-20 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6 shadow-lg">
                <step.icon className="w-9 h-9" />
              </div>
              
              <div className="absolute top-10 left-1/2 w-full h-0.5 bg-border -z-10 hidden md:block last:hidden" 
                   style={{ display: index === steps.length - 1 ? 'none' : undefined }} />
              
              <span className="inline-block bg-accent text-accent-foreground w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center mx-auto -mt-3 mb-4">
                {step.number}
              </span>
              
              <h3 className="font-bold text-xl text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mini Treino Example */}
        <div className="max-w-2xl mx-auto">
          <div className="card-warm border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-xl text-foreground">
                Exemplo: Mini Treino de 7 Minutos
              </h3>
            </div>
            
            <ul className="space-y-3">
              {miniTreino.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg"
                >
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-sm mt-4 text-center">
              Este é apenas um dos muitos treinos do eBook. Cada dia traz algo novo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
