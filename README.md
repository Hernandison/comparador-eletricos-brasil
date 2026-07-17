# ⚡ Elétricos no Brasil · Comparador 2026

Ferramenta gratuita para ajudar as pessoas a **escolher seu carro elétrico** no Brasil.
Compara **~80 versões** (todos os trims à venda) de 40+ modelos com preço, autonomia
(ciclo Inmetro), potência, recarga, porta-malas, **avaliação de suspensão/conforto**,
**Score Geral por carro** + score de custo-benefício, gráfico de mercado, comparador
lado a lado (até 4 carros), ranking e **simulador de economia** elétrico × combustível.

> **Score Geral (0–100)** — selo colorido em cada card: pondera km por R$ 1.000 (34%),
> preço acessível (22%), conforto/suspensão (18%), autonomia (16%) e recarga rápida (10%).
> Inclui o preço de propósito, para carros de R$ 1 milhão não liderarem o custo-benefício.

> Site 100% estático (HTML + CSS + JavaScript puro, **sem framework**). Roda abrindo o
> arquivo no navegador e hospeda de graça no Vercel, Netlify, GitHub Pages, etc.

## 📁 Estrutura

```
.
├── index.html                          # UI + estilos + lógica (é o que o Vercel serve)
├── cars.js                             # DADOS dos carros (fonte única de verdade)
├── comparador-eletricos-brasil-2026.html   # cópia de index.html (mesmo app)
├── vercel.json                         # config do Vercel (headers + clean URLs)
└── README.md
```

> **Baixo acoplamento:** os dados dos 48 modelos ficam isolados em [`cars.js`](cars.js)
> (`var CARS = [...]`), separados da apresentação/lógica em `index.html`, que os
> consome via `<script src="cars.js">`. Para adicionar/editar um carro, mexa **só no
> `cars.js`**. Optamos por um módulo `.js` em vez de `.json`+`fetch` para o site
> continuar funcionando tanto no Vercel quanto abrindo o arquivo direto (duplo-clique),
> sem precisar de servidor. Se um dia virar API, é trivial migrar para `cars.json`.

## 🚗 O que tem dentro

- **Catálogo** filtrável por categoria e origem (🇧🇷 nacional × importado 35%), ordenável.
- **Avaliação de suspensão**: arquitetura dianteira/traseira real de cada modelo + nota de
  conforto/rodagem de 0 a 5 ★. Eixo traseiro independente (multibraços) pontua mais que
  barra/eixo de torção. Ex.: o **MG4 Urban** (eixo de torção, 3,4★) × **MG4** tradicional
  (multibraços, 4,2★).
- **Comparador** lado a lado com destaque do melhor valor por linha + radar de 6 eixos
  (inclui "Conforto susp.").
- **Ranking** por 6 métricas (score, km/R$1.000, cv/R$1.000, autonomia, conforto, preço).
- **Simulador** de payback: economia de energia × gasolina.
- **Destaque do lançamento**: MG4 Urban nas 3 versões — Comfort 43 kWh (R$ 129.990),
  Luxury 43 kWh (R$ 139.990) e Luxury 54 kWh (R$ 149.990) — e o Leapmotor B10.

## 🚀 Como publicar no Vercel (grátis)

Você **não precisa de React**. É um site estático — o Vercel detecta o `index.html`
automaticamente. Escolha uma das opções:

### Opção A — Arrastar e soltar (mais fácil, sem conta técnica)
1. Acesse <https://vercel.com/new>.
2. Clique em **"Deploy"** e depois na opção de **upload** da pasta do projeto
   (ou use <https://vercel.com/import> → *Deploy a template / upload*).
3. Arraste esta pasta inteira. Pronto — em segundos você recebe uma URL pública.

### Opção B — CLI da Vercel (recomendada)
```bash
npm i -g vercel      # instala a CLI (uma vez)
cd caminho/da/pasta  # entre na pasta do projeto
vercel               # primeira vez: cria/loga na conta e faz o preview
vercel --prod        # publica na URL de produção
```

### Opção C — Via GitHub (deploy automático a cada commit)
1. Crie um repositório no GitHub e suba estes arquivos.
2. Em <https://vercel.com/new>, clique em **"Import Git Repository"** e selecione o repo.
3. **Framework Preset:** *Other* · **Build Command:** deixe vazio ·
   **Output Directory:** deixe vazio (raiz). Clique em **Deploy**.
4. Cada `git push` passa a gerar um novo deploy automaticamente.

## 🔧 Rodar localmente

Basta abrir o `index.html` no navegador (duplo clique). Se preferir servidor local:
```bash
npx serve .          # ou: python -m http.server 3000
```

## 📊 Metodologia (resumo)

- Preços de tabela "a partir de", coletados em **julho/2026** (mudam com promoções).
- Autonomia no **ciclo Inmetro (PBEV)** quando disponível; números só divulgados pela
  marca (CLTC/WLTP) recebem ajuste de **−22%** e aparecem com "≈/estim.".
- **Score custo-benefício** = km/R$1.000 (45%) + cv/R$1.000 (20%) + autonomia (20%) +
  recarga DC (15%), normalizado entre os modelos.
- **Nota de suspensão** = arquitetura (independente > semi-independente) + acerto conhecido
  e segmento do modelo. É orientação comparativa, **não** teste instrumentado.

Fontes citadas no rodapé da própria página. Valores sujeitos a alteração — não substitui
cotação oficial da montadora.
