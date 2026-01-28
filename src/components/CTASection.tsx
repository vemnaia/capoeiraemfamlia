import { ShieldCheck, CreditCard, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-foreground text-primary-foreground">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Pronto para Começar a Jornada? 🚀
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Transforme o tempo em família com capoeira. Seu filho vai agradecer por essas memórias!
          </p>

          <a
            href="https://pay.kiwify.com.br/OsM3esD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block text-xl mb-8"
          >
            Comprar Agora - Quero Treinar com Meu Filho!
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Compra 100% segura</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              <span>Pagamento via Kiwify</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>Acesso imediato por e-mail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
