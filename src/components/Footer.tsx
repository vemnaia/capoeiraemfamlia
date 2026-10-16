import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openCookieSettings } from "@/components/AdvertisingConsent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground/70 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-primary-foreground mb-1">
              Capoeira em Família
            </p>
            <p className="text-sm">
              © {currentYear} Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <Link to="/privacidade" className="hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </Link>
            <Button variant="link" onClick={openCookieSettings} className="h-auto p-0 text-inherit hover:text-primary-foreground">Configurações de cookies</Button>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="mailto:contato@capoeiraemfamilia.com" className="hover:text-primary-foreground transition-colors">
              Contato
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary-foreground/10 text-center text-xs">
          <p>
            Este produto é vendido pela plataforma Kiwify. Pagamento seguro e processado com criptografia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
