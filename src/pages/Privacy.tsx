import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openCookieSettings } from "@/components/AdvertisingConsent";
import { NOTICE } from "@/lib/advertising";

const Privacy = () => (
  <main className="container mx-auto max-w-3xl px-4 py-12 text-foreground">
    <Link to="/" className="text-primary underline">Voltar ao Capoeira em Família</Link>
    <h1 className="font-display text-4xl mt-8 mb-6">Política de Privacidade</h1>
    <p className="mb-6 text-muted-foreground">Atualizada em 16 de outubro de 2026.</p>
    <h2 className="font-display text-2xl mb-3">Quiz e contato</h2>
    <p className="mb-6">As respostas e o e-mail informado no quiz são processados no seu navegador para apresentar seu perfil. Atualmente, o formulário não envia nem armazena esses dados em nossos servidores e não envia mensagens por e-mail. Ao abrir o WhatsApp, você passa a utilizar esse serviço e suas políticas.</p>
    <h2 className="font-display text-2xl mb-3">Publicidade e medição</h2>
    <p className="mb-4">{NOTICE.text}</p>
    <p className="mb-4">Nas regiões que exigem consentimento, a tag do Google Ads só é carregada após sua aceitação. Se a região não puder ser identificada, também pedimos consentimento. Em outras regiões, a medição comum pode estar ativa, respeitando recusas salvas e sinais de privacidade do navegador. Não ativamos conversões otimizadas nem compartilhamos identificadores pessoais para correspondência de clientes.</p>
    <p className="mb-6">Sua escolha é registrada neste navegador com identificador aleatório, data, região, texto do aviso e opções apresentadas. A recusa posterior preserva o histórico da aceitação. Você pode retirar o consentimento a qualquer momento abaixo ou no rodapé; a alteração vale imediatamente e é sincronizada com outras abas deste site. Eventos bloqueados não são enviados depois. Se apagar os dados do navegador, o registro local será removido e uma nova escolha poderá ser solicitada.</p>
    <Button variant="outline" onClick={openCookieSettings}>Configurações de cookies</Button>
    <h2 className="font-display text-2xl mt-8 mb-3">Checkout e pagamento</h2>
    <p className="mb-4">O pagamento é processado pela Kiwify. Os parâmetros de campanha UTM e o identificador de clique gclid recebidos na URL são repassados aos links de checkout, preservando parâmetros já existentes. A conversão de compra é configurada na Kiwify somente para pagamento aprovado; responder ao quiz, enviar e-mail ou clicar no checkout não dispara compra neste site. O tratamento no checkout segue as políticas e os controles de consentimento da Kiwify.</p>
    <p className="mb-6">Saiba mais nas <a className="text-primary underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">políticas de privacidade do Google</a> e nos <a className="text-primary underline" href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">controles de anúncios do Google</a>. Para dúvidas, utilize o botão de contato do WhatsApp no site.</p>
  </main>
);
export default Privacy;