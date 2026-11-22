# Reto 21 Días — Tai Chi en Silla

## Produto e stack

- Produto e âmbito: `PRODUCT.md`
- Stack: HTML + CSS + JS puros, nginx:alpine, Docker, EasyPanel
- Setup e decisões: `docs/setup.md`
- Arquitectura: `docs/architecture.md`

## Comandos canónicos

Este projecto não tem package manager nem build process. Os "comandos" são operações Git e Docker.

- **Instalar dependências:** não aplicável — sem package manager
- **Desenvolver (local):** `cd site && docker build -t reto21-local . && docker run -p 8080:80 reto21-local`
- **Lint:** não aplicável — HTML/CSS/JS puro sem toolchain de lint
- **Tipos:** não aplicável — sem TypeScript
- **Testes:** não aplicável — sem framework de testes
- **Build:** `docker build -t reto21-local site/`
- **Deploy:** `git push origin main` → EasyPanel faz redeploy automático
- **Verificar fundação:** inspecção visual em `http://localhost:8080` após build local

## Regras de trabalho

- Ler o código e as instruções relevantes antes de editar. Declarar suposições que afectem comportamento ou âmbito.
- Fazer a menor mudança suficiente. Reutilizar padrões e componentes existentes.
- Preservar mudanças locais, validação, acessibilidade e requisitos explícitos.
- Não criar abstracções, dependências ou funcionalidades não pedidas.
- Publicar (push), mensagens a terceiros e acções destrutivas requerem autorização explícita.
- Instalar ferramentas não autoriza as suas acções.

## Constrangimentos críticos do projecto

- **Privacidade:** As páginas legais (`aviso-legal.html`, `privacidad.html`, `cookies.html`) NÃO podem conter dados pessoais do titular. Nunca adicionar nome, NIF, email ou morada nessas páginas.
- **Língua:** Todo o texto do site é em espanhol castelhano da Espanha — natural e caloroso para público +50.
- **Testemunhos:** A secção de testemunhos em `index.html` (linhas com comentário `⚠️ IMPORTANTE`) contém placeholders — avisar o utilizador para substituir antes de lançar tráfego pago.
- **Sem backend:** Site 100% estático. Não processar dados de utilizador no lado do servidor.
- **Dockerfile:** Usar `COPY . /usr/share/nginx/html/` — não listar ficheiros manualmente (causa bugs quando se adicionam novos ficheiros).

## Dockerfile e deploy

- O `site/Dockerfile` constrói a imagem nginx:alpine.
- O `site/.dockerignore` exclui o próprio Dockerfile da pasta servida.
- EasyPanel faz pull do GitHub (`main`) e rebuilda automaticamente.
- Para forçar redeploy: painel EasyPanel → Redeploy.

## Continuidade de execução

- Durante trabalho autorizado, responder a perguntas de estado e retomar as acções restantes.
- Um bloqueio afecta apenas as tarefas dependentes; completar as independentes.
- Verificar sempre o estado actual do ficheiro antes de editar (não confiar em memória de sessão anterior).

## Ferramentas disponíveis

- **Browser automation:** MCP `claude-in-chrome` activo — útil para verificar o site em produção.
- **Memória:** `.claude/projects/.../memory/` — índice em `MEMORY.md`, detalhes em ficheiros individuais.
- **Superpowers / Ponytail / Caveman / RTK / Context7 / Graphify:** não instalados neste projecto. Se necessários, o utilizador instala manualmente via `/plugin install`.

## Git e colaboração

- Não adicionar push blockers em `main`, requisitos de branch/worktree, ou hooks `pre-commit`/`pre-push`.
- Commits em português são aceitáveis; mensagens de commit devem ser claras e descritivas.
