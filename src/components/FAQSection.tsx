import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter experiência em capoeira?",
    answer:
      "Não! O eBook foi criado para famílias sem nenhuma experiência. Tudo é explicado passo a passo, com linguagem simples e ilustrações. Vocês vão aprender juntos!",
  },
  {
    question: "Serve para crianças de qual idade?",
    answer:
      "O conteúdo foi pensado para crianças de 4 a 10 anos, mas pode ser adaptado. Crianças menores podem fazer movimentos mais simples, e as maiores podem evoluir mais rápido.",
  },
  {
    question: "Quanto tempo preciso dedicar por dia?",
    answer:
      "Apenas 10 a 15 minutos! Os treinos são curtos e podem ser feitos a qualquer hora: de manhã, após a escola, ou antes de dormir.",
  },
  {
    question: "Preciso de algum equipamento especial?",
    answer:
      "Não precisa de nada! Apenas um espaço livre em casa (pode ser a sala), roupas confortáveis e disposição para se divertir.",
  },
  {
    question: "Como recebo o eBook após a compra?",
    answer:
      "Imediatamente após a confirmação do pagamento, você recebe o acesso por e-mail. É só baixar e começar a treinar!",
  },
  {
    question: "Posso pedir reembolso se não gostar?",
    answer:
      "Sim! Você tem 7 dias de garantia. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso pela plataforma Kiwify.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Perguntas Frequentes 🤔
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas antes de começar essa jornada!
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-6 bg-muted rounded-2xl">
          <p className="text-foreground font-medium mb-2">
            💡 Lembre-se: este é um guia para famílias!
          </p>
          <p className="text-muted-foreground text-sm">
            Não é necessário ter experiência prévia em capoeira. O eBook foi feito para pais e filhos
            descobrirem juntos essa arte brasileira incrível.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
