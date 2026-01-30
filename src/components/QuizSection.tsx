import { useState } from "react";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const emailSchema = z.string().trim().email("E-mail inválido").max(254, "E-mail muito longo");

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    text: string;
    profile: "sintonia" | "energia" | "foco";
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "O que mais falta no dia a dia da sua família?",
    options: [
      { label: "A", text: "Momentos de conexão e diversão juntos", profile: "sintonia" },
      { label: "B", text: "Atividades físicas para gastar energia", profile: "energia" },
      { label: "C", text: "Momentos de calma e concentração", profile: "foco" },
    ],
  },
  {
    id: 2,
    text: "Como seu filho costuma reagir a atividades novas?",
    options: [
      { label: "A", text: "Adora quando fazemos juntos", profile: "sintonia" },
      { label: "B", text: "Mergulha de cabeça, cheio de energia", profile: "energia" },
      { label: "C", text: "Precisa de calma para se adaptar", profile: "foco" },
    ],
  },
  {
    id: 3,
    text: "Qual seu maior desafio como pai/mãe hoje?",
    options: [
      { label: "A", text: "Encontrar tempo de qualidade com os filhos", profile: "sintonia" },
      { label: "B", text: "Canalizar a energia das crianças", profile: "energia" },
      { label: "C", text: "Ajudar meu filho a se concentrar", profile: "foco" },
    ],
  },
  {
    id: 4,
    text: "O que mais te atrairia na capoeira para sua família?",
    options: [
      { label: "A", text: "Fazer algo diferente e divertido juntos", profile: "sintonia" },
      { label: "B", text: "Uma atividade física saudável", profile: "energia" },
      { label: "C", text: "Disciplina e foco de forma leve", profile: "foco" },
    ],
  },
  {
    id: 5,
    text: "Como você descreveria os finais de semana da família?",
    options: [
      { label: "A", text: "Buscamos atividades para fazer juntos", profile: "sintonia" },
      { label: "B", text: "As crianças têm energia de sobra!", profile: "energia" },
      { label: "C", text: "Tentamos equilibrar diversão e descanso", profile: "foco" },
    ],
  },
  {
    id: 6,
    text: "O que você espera que a capoeira traga para seu filho?",
    options: [
      { label: "A", text: "Memórias incríveis com a família", profile: "sintonia" },
      { label: "B", text: "Saúde, coordenação e disposição", profile: "energia" },
      { label: "C", text: "Mais foco, presença e autocontrole", profile: "foco" },
    ],
  },
];

const profileResults = {
  sintonia: {
    title: "🎉 Família em Sintonia!",
    color: "bg-sintonia",
    description:
      "Vocês valorizam momentos juntos e buscam atividades que fortaleçam o vínculo familiar. A capoeira é perfeita para vocês! Com movimentos em dupla, cantigas para cantar juntos e brincadeiras que aproximam, o eBook 'Capoeira em Família' vai transformar seus 15 minutos diários em memórias inesquecíveis.",
  },
  energia: {
    title: "⚡ Família em Busca de Energia e Saúde!",
    color: "bg-energia",
    description:
      "Vocês têm muita energia para gastar e buscam atividades que movimentem o corpo de forma divertida. A capoeira combina perfeitamente! Com golpes, esquivas e movimentos que trabalham todo o corpo, o eBook vai ajudar sua família a canalizar essa energia de forma saudável e alegre.",
  },
  foco: {
    title: "🧘 Família Buscando Foco e Presença!",
    color: "bg-foco",
    description:
      "Vocês buscam equilíbrio entre diversão e concentração. A capoeira é uma arte que ensina foco através do movimento! Com exercícios de respiração, movimentos que exigem atenção e rituais que acalmam, o eBook vai ajudar sua família a encontrar presença de forma leve e prazerosa.",
  },
};

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<"sintonia" | "energia" | "foco" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleAnswer = (profile: string) => {
    const newAnswers = [...answers, profile];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowEmailCapture(true);
    }
  };

  const calculateResult = () => {
    const counts = answers.reduce((acc, profile) => {
      acc[profile] = (acc[profile] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const maxProfile = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    return maxProfile as "sintonia" | "energia" | "foco";
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(null);
    
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      setEmailError(validation.error.errors[0]?.message || "E-mail inválido");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate submission - email is validated but not sent anywhere currently
    setTimeout(() => {
      setResult(calculateResult());
      setIsSubmitting(false);
    }, 800);
  };

  const skipEmail = () => {
    setResult(calculateResult());
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowEmailCapture(false);
    setEmail("");
    setEmailError(null);
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section id="quiz" className="section-padding bg-muted">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Descubra o Perfil da Sua Família 🎯
          </h2>
          <p className="text-muted-foreground text-lg">
            Responda 6 perguntas rápidas e descubra como a capoeira pode ajudar vocês!
          </p>
        </div>

        <div className="card-warm">
          {!showEmailCapture && !result && (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="animate-fade-in" key={currentQuestion}>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  {questions[currentQuestion].text}
                </h3>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleAnswer(option.profile)}
                      className="quiz-option w-full text-left flex items-center gap-4"
                    >
                      <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">
                        {option.label}
                      </span>
                      <span className="text-foreground font-medium">{option.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {showEmailCapture && !result && (
            <div className="animate-scale-in text-center py-8">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Quase lá! Onde enviamos seu resultado?
              </h3>
              <p className="text-muted-foreground mb-6">
                Receba seu perfil familiar e dicas exclusivas sobre capoeira em família.
              </p>

              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(null);
                    }}
                    className={`h-14 text-lg text-center ${emailError ? 'border-destructive' : ''}`}
                    maxLength={254}
                    required
                  />
                  {emailError && (
                    <p className="text-destructive text-sm mt-2">{emailError}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? "Analisando..." : "Ver meu resultado! 🎉"}
                </button>
              </form>

              <button
                onClick={skipEmail}
                className="text-muted-foreground text-sm mt-4 hover:text-foreground transition-colors"
              >
                Pular e ver resultado
              </button>
            </div>
          )}

          {result && (
            <div className="animate-scale-in text-center py-8">
              <div
                className={`inline-block px-6 py-3 rounded-full text-white font-bold text-xl mb-6 ${profileResults[result].color}`}
              >
                {profileResults[result].title}
              </div>

              <p className="text-foreground text-lg leading-relaxed mb-8">
                {profileResults[result].description}
              </p>

              <div className="bg-muted rounded-xl p-6 mb-8">
                <p className="text-foreground font-bold mb-2">
                  O eBook "Capoeira em Família" foi feito para vocês!
                </p>
                <p className="text-muted-foreground text-sm">
                  Treinos de 10-15 minutos • Sem experiência necessária • Para crianças de 4 a 10 anos
                </p>
              </div>

              <a
                href="https://pay.kiwify.com.br/OsM3esD"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-block mb-4"
              >
                Quero o eBook agora! →
              </a>

              <button
                onClick={restartQuiz}
                className="block mx-auto text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Refazer quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
