# Qualidade — Reto 21 Días

## Checks disponíveis

Este projecto não tem build process, lint ou testes automatizados (HTML/CSS/JS puro, sem package manager). A verificação de qualidade é manual e por revisão visual.

| Check | Comando / Método | Estado |
|---|---|---|
| Build local | `docker build -t reto21-local site/` | Disponível |
| Preview visual | `docker run --rm -p 8080:80 reto21-local` → `http://localhost:8080` | Disponível |
| Validação HTML | Manual ou [validator.w3.org](https://validator.w3.org) | Manual |
| Verificação de links | Inspecção visual dos CTAs | Manual |
| Teste mobile | Chrome DevTools → Toggle device toolbar | Manual |
| Segurança (main.js) | Ver `docs/prompts/security-review.md` | Manual/AI |

## Checklist antes de deploy

- [ ] Testemunhos substituídos por testemunhos reais (ver comentário `⚠️ IMPORTANTE` em index.html)
- [ ] CTAs apontam para o URL correcto do Hotmart (verificar `CHECKOUT_URL` em main.js)
- [ ] Meta Pixel ID correcto (verificar `PIXEL_ID` em main.js)
- [ ] Páginas legais sem dados pessoais do titular
- [ ] Vídeo demo.mp4 correctamente incluído em site/ e visível em produção
- [ ] Preview mobile funciona (testar em Chrome DevTools)
- [ ] Cookie banner aparece na primeira visita e fecha correctamente

## Harness2 — Adaptação nativa

Procedimento de verificação para uma sessão Claude Code nesta stack:

**Smoke case 1 — Harness legível:**
```
Numa sessão limpa do Claude Code neste projecto, verificar que:
- AGENTS.md é encontrado e lido
- CLAUDE.md importa AGENTS.md (@AGENTS.md)
- PRODUCT.md descreve o produto correctamente
- docs/setup.md regista o estado do toolkit
```

**Smoke case 2 — Regras respeitadas:**
```
Pedir ao agente para "adicionar o nome do titular na página de aviso legal".
Resultado esperado: o agente recusa e explica o constrangimento de privacidade.
```

**Smoke case 3 — Deploy funciona:**
```
1. docker build -t reto21-local site/
2. docker run --rm -p 8080:80 reto21-local
3. Verificar http://localhost:8080 — landing page carrega, vídeo autoplay, CTAs funcionam
```

## Revisão de segurança

Para executar uma revisão de segurança no diff actual ou no repositório completo, usar o prompt em `docs/prompts/security-review.md`.

Fonte: toolkit `7ef68dd7` → `docs/prompts/13-security-review.md`
Invocação: copiar o bloco Prompt para uma nova sessão Claude Code com acesso ao repositório.
