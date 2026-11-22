# Setup — Reto 21 Días

## Toolkit adoptado

| Campo | Valor |
|---|---|
| Toolkit | [Vibe Coding Toolkit](https://github.com/soumatheusgomes/vibe-coding-toolkit) |
| Revisão | `7ef68dd7b00ddfc5cd464458855e4ab66dd2128f` |
| Data | 2026-11-22 |
| Fonte | Clone temporário em `mktemp -d` durante a sessão de setup |

## Comandos canónicos

| Operação | Comando |
|---|---|
| Preview local | `cd site && docker build -t reto21-local . && docker run --rm -p 8080:80 reto21-local` |
| Deploy | `git push origin main` (EasyPanel auto-deploya) |
| Verificar ficheiros | `find site/ -type f \| sort` |
| Inspecionar HTML | Abertura manual em browser ou [validator.w3.org](https://validator.w3.org) |

Lint, tipos e testes: **não aplicável** — stack HTML/CSS/JS puro sem package manager.

## Cobertura do catálogo

### Implementados

| Componente | Estado | Localização | Notas |
|---|---|---|---|
| AGENTS.md | ✅ Criado | `AGENTS.md` | Comandos, stack, constrangimentos, ferramentas |
| CLAUDE.md | ✅ Criado | `CLAUDE.md` | Bridge Claude; importa AGENTS.md |
| PRODUCT.md | ✅ Criado | `PRODUCT.md` | Produto, audiência, MVP, constrangimentos |
| README.md | ✅ Criado | `README.md` | Visão geral, estrutura, deploy |
| docs/architecture.md | ✅ Criado | `docs/architecture.md` | Stack, Dockerfile, decisões |
| docs/quality.md | ✅ Criado | `docs/quality.md` | Checklist, smoke cases Harness2 |
| docs/onboarding.md | ✅ Criado | `docs/onboarding.md` | Pré-requisitos, fluxo de trabalho |
| docs/setup.md | ✅ Criado | `docs/setup.md` | Este ficheiro |
| docs/prompts/security-review.md | ✅ Criado | `docs/prompts/security-review.md` | Prompt auto-contido do toolkit |
| .gitignore | ✅ Criado | `.gitignore` | Exclui brutos/, videos-movimentos/ |
| Dockerfile | ✅ Melhorado | `site/Dockerfile` | `COPY .` em vez de lista manual |
| .dockerignore | ✅ Criado | `site/.dockerignore` | Exclui Dockerfile e .dockerignore do COPY |
| Segurança (main.js) | ✅ Revisto | `site/main.js` | Zero achados críticos/altos/médios; guard redundante removido |
| Memória Claude | ✅ Actualizada | `.claude/projects/.../memory/` | 3 ficheiros + MEMORY.md indexado |
| .claude/settings.json | ✅ Criado | `.claude/settings.json` | `curl -s raw.githubusercontent.com/*` permitido |
| Harness2 (nativo) | ✅ Estabelecido | `docs/quality.md` | 3 smoke cases documentados; sem CLI oficial |
| agent-browser / Chrome DevTools MCP | ✅ Em uso | Sessão activa | Registado; usado para diagnóstico de produção |

### Inaplicáveis (com razão)

| Componente | Razão |
|---|---|
| Superpowers | Plugin não instalado; requer `/plugin install superpowers@claude-plugins-official` |
| Ponytail | Plugin não instalado; requer `/plugin install ponytail@ponytail` |
| Caveman | Plugin não instalado; requer `/plugin install caveman@caveman` |
| RTK | CLI não instalado; requer `brew install rtk-ai/tap/rtk` |
| Context7 | MCP não configurado; fontes oficiais usadas directamente |
| Graphify | 3 ficheiros JS/CSS — grafo sem valor acrescentado; `uv tool install graphifyy` se necessário |
| ESLint / Biome / TypeScript / Vitest | Sem package manager, sem build process — stack HTML/CSS/JS puro |
| Vercel skills (Next.js, React, bundle) | Sem React/Next.js — stack incompatível |
| supabase-postgres-best-practices | Sem base de dados — produto sem persistência |
| gh-fix-ci | Sem GitHub Actions configurado |
| differential-review | Landing page estática — sem código de segurança sensível |
| shadcn/ui | Sem React/sistema de componentes |
| Sentry MCP | Sem conta Sentry autorizada |
| Obsidian memory | Sem destino autorizado; Claude memory cobre a necessidade |
| Harness2 CLI oficial | Requer autorização separada (benchmark deps, model access, custos, execução isolada) |

## Verificação do harness

Smoke cases documentados em `docs/quality.md`. Estado nesta sessão:

- **Smoke case 1 (harness legível):** ✅ AGENTS.md, CLAUDE.md, PRODUCT.md criados e legíveis
- **Smoke case 2 (regras respeitadas):** Verificação manual — testar noutra sessão
- **Smoke case 3 (deploy funciona):** Docker build verificado localmente; EasyPanel auto-deploy funcional

## Revisão de segurança baseline (2026-11-22)

Âmbito: `site/main.js`, `site/index.html`, páginas legais.
Achados: zero críticos/altos/médios. Um INFO removido (guard redundante em main.js linha 11).
Relatório completo: sessão de setup (não persistido externamente — site estático sem dados sensíveis).
Próxima revisão: invocar `docs/prompts/security-review.md` em caso de mudanças em main.js ou introdução de formulários/backend.

## Issues pendentes

| Issue | Causa | Próxima acção |
|---|---|---|
| Testemunhos placeholder em index.html | Produto novo, sem compradores ainda | Substituir pelos 3 cards antes de lançar tráfego pago |
| Plugins Superpowers/Ponytail/Caveman não instalados | Requerem instalação manual | `/plugin install superpowers@claude-plugins-official` numa sessão Claude Code |
| Verificação do smoke case 2 | Requer sessão limpa | Testar noutra sessão se necessário |
| Aviso legal LSSI | Nome removido por privacidade; formulação "persona física" pode não satisfazer auditoria formal | Considerar usar nome comercial ou NIF se necessário para conformidade |

## Manutenção

- Actualizar este ficheiro quando mudar a URL de checkout, o Pixel ID, ou a versão do toolkit.
- Repetir setup: clonar toolkit à revisão mais recente e executar prompt 12 novamente — customizações são preservadas.
- Novo ficheiro em `site/`: incluído automaticamente no próximo deploy (Dockerfile usa `COPY .`).
