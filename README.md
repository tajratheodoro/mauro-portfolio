# 🎥 Mauro Junior - Portfólio Profissional

&nbsp;
<p align="center">
  <img src="https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 6" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Motion-12.2-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Motion" />
</p>

---

##  Sobre o Projeto

Este é um portfólio web premium desenvolvido sob medida para **Mauro Junior**, filmmaker e fotógrafo profissional baseado em Teresina - PI. O objetivo principal do projeto é consolidar sua identidade visual e apresentar produções audiovisuais e fotográficas de alto impacto (com foco nos nichos automotivo, corporativo e retratos), gerando conexão imediata, desejo e valor de marca para potenciais clientes.

A aplicação foi construída utilizando as tecnologias mais modernas do ecossistema Frontend, priorizando performance impecável, animações fluidas baseadas em física e uma experiência de usuário imersiva tanto em dispositivos móveis quanto em desktop.

---

##  Funcionalidades em Destaque (Diferenciais Técnicos)

**Otimização Avançada de Mídia (Preloading & Lazy Loading):** Mecanismo customizado via React Hooks para pré-carregamento assíncrono de imagens críticas da seção Hero em memória, mitigando problemas de *Layout Shift* (CLS) e telas brancas. Suporte nativo a elementos `eager` e `lazy` combinado com codecs modernos (`.webp` e `.mp4`).

**Sistema Dinâmico de Portfólio (Filtro Adaptável):** Layout fluido baseado em estado contínuo para transição de categorias (*All, Photography, Cinematography*). Renderização inteligente que distingue dinamicamente elementos de imagem e vídeo com atributos de otimização mobile (`playsInline`, `muted`, `preload="metadata"`).
**Modal de Exibição Imersiva (LightBox):** Tela cheia dinâmica integrada com controle estrito de ciclo de vida de mídia e isolamento de propagação de eventos do DOM, permitindo a reprodução automática de vídeos de alta fidelidade sob demanda.

**Animações Baseadas em Movimento Realista:** Transições de opacidade, rotação, escala e scroll-triggered configuradas cirurgicamente via `motion` (Framer Motion v12) com curvas de interpolação personalizadas (`easeOut` e bezier cúbico).

**Dark Mode & Design System Semântico:** Arquitetura visual contemporânea (*Cinematic Dark*) que utiliza as novas capacidades globais do **Tailwind CSS v4** para alternância suave de cores e tipografia focada em exibição de mídia.

---

## 🛠️ Tecnologias e Ferramentas

O projeto utiliza o estado da arte do desenvolvimento web moderno:

**React 19.0:** Utilização de novas otimizações de concorrência e renderização de componentes.
**Vite 6.2:** Ferramental de bundling ultrarrápido com Hot Module Replacement (HMR) otimizado.
**Tailwind CSS v4.1:** Nova geração do framework utilitário, operando com o novo compilador nativo via Vite, entregando arquivos CSS finais extremamente reduzidos.
**TypeScript 5.8:** Tipagem estática estrita garantindo segurança em tempo de compilação para estruturas de dados complexas de projetos.
**Motion (Framer Motion v12):** Engine de animações robusta para manipulação performática do DOM através de aceleração por hardware.
**Lucide React:** Conjunto de ícones vetoriais leves e totalmente customizáveis.

---

##  Arquitetura e Estrutura de Pastas

A estrutura segue o padrão de design modular de mercado, facilitando a escalabilidade do código e manutenabilidade:

```text
mauro-portfolio/
├── src/
│   ├── assets/             # Arquivos globais de estilo e fontes
│   ├── components/         # Componentes modulares e reutilizáveis da UI
│   │   ├── About.tsx       # Seção biográfica com métricas e localização
│   │   ├── Clients.tsx     # Grid de marcas e parceiros comerciais
│   │   ├── ContactFooter.tsx# Rodapé focado em conversão e canais de contato
│   │   ├── Hero.tsx        # Slider automatizado e otimizado com prefetch
│   │   ├── Navbar.tsx      # Navegação fluida e controle de acessibilidade
│   │   └── Portfolio.tsx   # Grid de mídia dinâmico com filtragem e modal
│   ├── images/             # Assets estáticos locais otimizados (.webp, .mp4)
│   ├── App.tsx             # Componente raiz organizador do layout principal
│   ├── index.css           # Configurações globais e diretivas do Tailwind v4
│   └── main.tsx            # Ponto de entrada da aplicação e bootstrap do React
├── package.json            # Manifesto de dependências e scripts do ecossistema
├── tsconfig.json           # Definições estritas do compilador TypeScript
└── vite.config.ts          # Configuração do bundler e plugins do ecossistema Vite
