# Reto 21 Días — Tai Chi en Silla

Landing page de vendas para o programa digital **Reto 21 Días: Tai Chi en Silla**, vendido na Hotmart.

Ver [PRODUCT.md](PRODUCT.md) para descrição completa do produto, audiência e fluxos críticos.

## Stack

| Área | Tecnologia |
|---|---|
| Site | HTML + CSS + JS puros (sem framework, sem build) |
| Servidor | nginx:alpine via Docker |
| Deploy | EasyPanel — auto-deploy a partir de `main` no GitHub |
| Checkout | Hotmart (externo) |
| Tracking | Meta Pixel (carregado apenas com consentimento) |

## Estrutura do repositório

```
/
├── site/              ← Ficheiros servidos pelo nginx
│   ├── index.html     ← Landing page principal
│   ├── styles.css     ← Estilos
│   ├── main.js        ← Cookie consent + Meta Pixel + botões CTA
│   ├── aviso-legal.html
│   ├── privacidad.html
│   ├── cookies.html
│   ├── hero.jpg       ← Imagem principal
│   ├── mov-01..03.jpg ← Fotos dos movimentos
│   ├── demo.mp4       ← Vídeo demo (autoplay mudo em loop)
│   └── Dockerfile     ← Imagem nginx:alpine
├── imagens-hotmart/   ← Capas do produto na Hotmart
├── pagina-facebook/   ← Assets para página Facebook
├── brutos/            ← Brutos de imagem/vídeo (não versionados)
├── videos-movimentos/ ← Vídeos individuais de movimentos (não versionados)
├── PRODUCT.md         ← Descrição do produto
├── AGENTS.md          ← Instruções para agentes de IA
├── CLAUDE.md          ← Configuração Claude Code
└── docs/              ← Documentação técnica
```

## Deploy

O EasyPanel monitoriza a branch `main`. Cada push desencadeia um rebuild da imagem Docker e redeploy automático.

**URL de produção:** `https://app-saas-reto21-taichi.2hj7na.easypanel.host`

**Para forçar redeploy manual:** painel EasyPanel → aplicação → Redeploy.

## Fluxo de trabalho típico

```bash
# 1. Edita ficheiros em site/
# 2. Faz commit e push para main
git add site/
git commit -m "descrição da mudança"
git push origin main
# 3. EasyPanel faz redeploy automaticamente (~1-2 min)
```

## Adicionar novos ficheiros ao site

Graças ao `COPY . /usr/share/nginx/html/` no Dockerfile, qualquer ficheiro adicionado à pasta `site/` é incluído automaticamente no próximo deploy. Não é necessário editar o Dockerfile.

## Verificação local (opcional)

```bash
cd site
docker build -t reto21-local .
docker run -p 8080:80 reto21-local
# Abre http://localhost:8080
```
