# CLAUDE.md — Reto 21 Días

@AGENTS.md

## Notas Claude Code específicas

- **Idioma da conversa:** Responder sempre em português (Brasil) ao utilizador.
- **Idioma do código/docs/commits:** Português para nomes de ficheiros de doc e mensagens de commit; espanhol castelhano para todo o conteúdo do site.
- **Memória:** `.claude/projects/-Users-guilherme-Desktop-Reto21-TaiChi/memory/MEMORY.md` — verificar antes de responder a perguntas sobre contexto passado.

## Comportamento esperado

Quando se edita `site/index.html` ou `site/styles.css`:
1. Verificar que o espanhol está correcto para público +50 (castelhano da Espanha, vocabulário simples e caloroso).
2. Nunca adicionar dados pessoais do titular nas páginas legais.
3. Avisar se a secção de testemunhos ainda tiver texto placeholder antes de publicar.

Quando se edita `site/Dockerfile`:
- Manter `COPY . /usr/share/nginx/html/` — não reverter para lista manual de ficheiros.

Quando se faz push para `main`:
- O EasyPanel faz redeploy automático. Avisar o utilizador para aguardar ~1-2 min e fazer redeploy manual se necessário.
