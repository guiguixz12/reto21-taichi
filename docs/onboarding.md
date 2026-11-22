# Onboarding — Reto 21 Días

## Pré-requisitos

| Ferramenta | Para quê | Obrigatório? |
|---|---|---|
| Git | Versionamento e deploy | Sim |
| Docker Desktop | Build e preview local | Opcional (só para preview local) |
| Claude Code | Assistência de IA | Opcional |

Não são necessários Node.js, npm ou qualquer runtime além de Git.

## Clonar o projecto

```bash
git clone https://github.com/guiguixz12/reto21-taichi.git
cd reto21-taichi
```

## Preview local

```bash
cd site
docker build -t reto21-local .
docker run --rm -p 8080:80 reto21-local
# Abre http://localhost:8080
```

## Estrutura que precisas de conhecer

- `site/index.html` — toda a landing page; edições de copy aqui
- `site/main.js` — `CHECKOUT_URL` e `PIXEL_ID` configurados nas primeiras linhas
- `site/styles.css` — todos os estilos; variáveis de cor em `:root`
- `site/Dockerfile` — imagem de deploy; não editar a menos que seja necessário

## Regras importantes antes de editar

1. **Páginas legais** — nunca adicionar nome/NIF/email do titular em `aviso-legal.html`, `privacidad.html` ou `cookies.html`.
2. **Testemunhos** — a secção de testemunhos em `index.html` tem um comentário `⚠️ IMPORTANTE` a avisar que são placeholders. Substituir antes de lançar tráfego pago.
3. **Dockerfile** — manter `COPY . /usr/share/nginx/html/`; não listar ficheiros manualmente.
4. **Língua** — todo o conteúdo do site em espanhol castelhano da Espanha, natural para público +50.

## Deploy

```bash
git add site/
git commit -m "descrição da mudança"
git push origin main
# EasyPanel faz redeploy automático em ~1-2 min
# Se não atualizar: painel EasyPanel → aplicação → Redeploy
```

## Adicionar imagens ou vídeos ao site

1. Copia o ficheiro para `site/`
2. Referencia-o no HTML por nome de ficheiro (ex: `src="nova-imagem.jpg"`)
3. Faz commit e push — incluído automaticamente no próximo deploy

## Configurar checkout URL ou Pixel

Edita as primeiras linhas de `site/main.js`:

```js
const CHECKOUT_URL = "https://pay.hotmart.com/XXXXX"; // URL do produto Hotmart
const PIXEL_ID = "XXXXXXXXXXXXX";                      // ID do Meta Pixel
```
