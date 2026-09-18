import heroImage from "@/assets/hero-family-capoeira.jpg";

const HeroSection = () => {
  const scrollToQuiz = () => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Família praticando capoeira juntos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl animate-fade-in">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-6">
            📖 eBook Capoeira em Família
          </span>
          
          <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-primary-foreground/70 text-sm line-through">R$ 57,00</span>
            <span className="text-accent font-bold text-sm">R$ 17,70</span>
            <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full font-bold">
              69% OFF
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Treine capoeira em casa, fortaleça o vínculo com seus filhos e
            <span className="block text-accent"> divirtam-se juntos!</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Um guia passo a passo para pais e crianças de 4 a 10 anos. 
            Apenas <strong>10 a 15 minutos por dia</strong> para criar memórias inesquecíveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToQuiz}
              className="btn-primary text-lg"
            >
              Descobrir meu perfil familiar →
            </button>
            
            <a
              href="https://pay.kiwify.com.br/OsM3esD"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              Quero treinar com meu filho!
            </a>
          </div>

          <p className="text-primary-foreground/70 text-sm mt-6">
            ✓ Sem experiência prévia necessária &nbsp;•&nbsp; ✓ Para toda a família
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-8 h-12 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
