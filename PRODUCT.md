# Reto 21 Días — Tai Chi en Silla

## Produto

Programa digital de bem-estar: 21 dias de Tai Chi adaptado a uma cadeira, pensado para mulheres com mais de 50 anos em Espanha. Acesso imediato após compra, entregue via Hotmart.

**Preço:** 9,90 € — pagamento único, sem subscrição.
**Plataforma de venda:** Hotmart (checkout externo).
**Deploy:** Landing page estática → Hotmart checkout.

## Audiência

- Mulheres de 50+ anos em Espanha
- Pouca ou nenhuma experiência em exercício
- Preferência por movimento suave, sem impacto, em casa
- Interesse em bem-estar geral (não treino de alta intensidade)

## Problema que resolve

Rigidez matinal, falta de mobilidade com a idade, intimidação perante ginásios ou aulas de yoga. O produto oferece um caminho acessível de regressar ao movimento.

## MVP — O que o produto entrega

1. **Guia PDF** — letra grande, ilustrações de cada movimento
2. **12 vídeos curtos** — para seguir os movimentos
3. **Plano 3 semanas** — Despertar / Fluir / Fortalecer
4. **Rotina express de 5 minutos** — para dias sem tempo
5. **Plano pós-dia 21** — para continuar depois do reto

## Fluxos críticos

1. Visitante acede à landing page
2. Lê headline → problema → solução → o que recebe → garantia
3. Clica em CTA → redireccionado para Hotmart (checkout externo)
4. Após compra: acesso imediato por email (gerido 100% pela Hotmart)

## Constrangimentos

- **Privacidade:** Páginas legais (aviso-legal, privacidad, cookies) não podem conter dados pessoais do titular — nome removido, referências ao suporte Hotmart.
- **Língua:** Espanhol castelhano da Espanha — natural, simples, caloroso para +50.
- **Sem backend:** Site 100% estático. Nenhum dado de utilizador é processado pelo site.
- **Testemunhos:** A secção de testemunhos contém placeholders — substituir por testemunhos reais antes de lançar tráfego pago.
- **Garantia Hotmart:** 15 dias — configurada na plataforma Hotmart.

## Suposições

- O checkout Hotmart está configurado e funcional.
- O Meta Pixel está ativo (ID: configurado em main.js, carregado apenas com consentimento).
- O EasyPanel faz auto-deploy a partir da branch `main` do GitHub.
