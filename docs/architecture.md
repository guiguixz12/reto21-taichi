# Arquitectura — Reto 21 Días

## Visão geral

Site estático de uma página (landing page de vendas) sem backend próprio. Todo o processamento de pagamentos e entrega do produto é delegado à Hotmart.

## Stack

| Camada | Tecnologia | Decisão |
|---|---|---|
| Conteúdo | HTML + CSS + JS puros | Sem framework — produto simples de landing page, sem necessidade de React/Next.js |
| Servidor | nginx:alpine | Leve, rápido para servir estáticos |
| Containerização | Docker | Portabilidade e deploy reproduzível |
| Hosting | EasyPanel (auto-deploy do GitHub) | Simples, sem gestão de infraestrutura |
| Checkout / entrega | Hotmart (externo) | Gestão de pagamentos, emails e acessos delegada |
| Tracking | Meta Pixel (carregado com consentimento) | Medir conversões de tráfego pago |

## Estrutura de ficheiros (site/)

```
site/
├── index.html          ← Landing page (única página de conteúdo)
├── styles.css          ← Todos os estilos (sem pré-processador)
├── main.js             ← Cookie consent + Meta Pixel + URLs dos CTAs
├── aviso-legal.html    ← Página legal (sem dados pessoais do titular)
├── privacidad.html     ← Política de privacidade
├── cookies.html        ← Política de cookies
├── hero.jpg            ← Imagem principal do hero
├── mov-01..03.jpg      ← Fotos dos movimentos (secção solução)
├── demo.mp4            ← Vídeo demo (autoplay mudo em loop)
├── Dockerfile          ← Imagem nginx:alpine
└── .dockerignore       ← Exclui Dockerfile e .dockerignore do COPY
```

## Dockerfile

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html/
EXPOSE 80
```

**Decisão:** `COPY .` em vez de lista manual de ficheiros. Um `COPY` manual causou bug em produção (demo.mp4 esquecido). O `.dockerignore` exclui Dockerfile e .dockerignore de serem servidos pelo nginx.

## Fluxo de deploy

```
Edição local → git push origin main → EasyPanel deteta push
  → docker build (nginx:alpine + COPY .)
  → container substituído
  → site disponível em ~1-2 min
```

## Rastreamento e privacidade

- O Meta Pixel **só carrega** após consentimento explícito do utilizador (cookie banner).
- A escolha é guardada em `localStorage` (chave `tai_chi_cookie_consent`).
- Nenhum dado pessoal é processado pelo site — tudo delegado à Hotmart.
- Páginas legais não contêm nome/NIF/email do titular.

## Decisões registadas

| Decisão | Alternativa considerada | Razão |
|---|---|---|
| HTML puro | Next.js | Produto simples; overhead desnecessário |
| `COPY .` no Dockerfile | Lista manual | Bug de produção por ficheiro esquecido |
| Autoplay mudo para demo.mp4 | `controls` apenas | Browsers bloqueiam autoplay com som; muted obrigatório |
| Testemunhos como placeholder | Sem secção | Estrutura pronta para substituição por testemunhos reais |
