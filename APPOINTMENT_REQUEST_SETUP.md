# Configuração do formulário da Lunelle Spa

O formulário envia uma notificação para `contact@lunellespa.com` com nome,
telefone, serviço e a data e o horário desejados, quando informados. A Lidiane consulta a agenda, combina o horário e confirma
o atendimento. A mensagem na página confirma apenas o recebimento da solicitação.

## 1. Configurar o remetente no Resend

1. Em **Domains → Add Domain**, adicione `notify.lunellespa.com`.
2. No provedor que gerencia o DNS de `lunellespa.com`, adicione os registros
   de envio que o Resend mostrar, copiando tipo, nome e valor. Alguns painéis
   acrescentam o domínio automaticamente. Use os registros do subdomínio e
   preserve os registros da caixa atual, especialmente os MX do domínio raiz.
3. Volte ao Resend e aguarde o status **Verified**. Deixe o recebimento do Resend
   e o rastreamento de abertura e cliques desativados.
4. Em **API Keys**, crie uma chave com permissão **Sending access** restrita
   ao domínio verificado. Salve a chave diretamente na Vercel.

Referência: [Domínios verificados](https://resend.com/docs/dashboard/domains/introduction)
e [chaves de API](https://resend.com/docs/dashboard/api-keys/introduction).

## 2. Criar o widget de segurança

1. No painel da Cloudflare, abra **Turnstile → Add widget** e escolha **Managed**.
2. Cadastre o hostname exato usado para a prévia. Para produção, configure
   outro widget com os hostnames públicos que realmente servem o formulário.
   Pre-clearance pode ficar desativado.
3. Copie **Site Key** e **Secret Key** para as variáveis correspondentes.

Referência: [Criação do widget](https://developers.cloudflare.com/turnstile/get-started/widget-management/).

## 3. Configurar a Vercel

Em **Project Settings → Environment Variables**, use o ambiente **Preview**
primeiro. Se houver vários ambientes de prévia, limite as chaves à branch de
teste. As variáveis públicas são incorporadas durante a compilação.

| Variável | Valor |
| --- | --- |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Site Key pública do widget de prévia |
| `TURNSTILE_SECRET_KEY` | Secret Key do mesmo widget, como variável sensível |
| `RESEND_API_KEY` | Chave de envio do Resend, como variável sensível |
| `APPOINTMENT_FROM_EMAIL` | `Lunelle Spa <appointments@notify.lunellespa.com>` |
| `APPOINTMENT_HOSTS` | Hostname HTTPS exato da prévia, sem protocolo ou caminho |

Em **Firewall → Configure → New Rule**, aplique **Rate Limit** ao caminho
`/api/appointment-request` e ao método **POST**. Comece com **5 requisições
por 60 segundos por IP**, janela fixa e resposta **429**. Confira a
disponibilidade e o preço no plano do projeto antes de salvar. Verifique o
escopo da regra para confirmar que ela protege a prévia e a produção.

Referências: [Variáveis de ambiente](https://vercel.com/docs/environment-variables)
e [Vercel WAF Rate Limiting](https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting).

## 4. Validar antes de liberar

1. Gere uma nova implantação de **Preview** após configurar as variáveis.
2. Envie uma solicitação com dados fictícios. Confirme que a interface mostra
   o recebimento e que a mensagem chegou a `contact@lunellespa.com`.
3. Repita a mesma solicitação e confira que chegou apenas um e-mail. A
   deduplicação do Resend se aplica a dados idênticos por 24 horas.
4. Confirme que uma requisição sem token válido é rejeitada e que o limite de
   frequência devolve 429. Confira que a falha preserva os campos na interface.
5. Após a revisão, configure as variáveis no ambiente **Production** com o
   widget de produção e seus hostnames. A ausência da Site Key mantém os
   caminhos de agendamento existentes. O modo simulado só roda em desenvolvimento.

As chaves privadas devem ficar na Vercel, fora do Git e do chat.
