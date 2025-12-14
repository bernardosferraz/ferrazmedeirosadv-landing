# Ferraz & Medeiros Advogados - Website

Website institucional do escritório de advocacia Ferraz & Medeiros, especializado em Direito Previdenciário (INSS).

## 📁 Estrutura de Arquivos

```
├── advogados-2k.jpg      # Foto dos advogados (seção Sobre)
├── hero-bg-2k.jpg        # Background do hero section
├── icon.png              # Ícone do site (favicon e Apple Touch Icon)
├── logo.png              # Logo do navbar
├── logo-footer.png       # Logo do rodapé
├── reference.png         # Imagem de referência
├── index.html            # Página principal
├── style.css             # Estilos CSS
├── script.js             # JavaScript (menu mobile, accordion, carousel)
├── robots.txt            # Configurações para bots de busca
├── sitemap.xml           # Mapa do site para SEO
└── README.md             # Este arquivo
```

## 🎨 Seções do Site

1. **Navbar** - Navegação fixa no topo
2. **Hero** - Seção principal com CTA
3. **Serviços** - Áreas de atuação (6 cards)
4. **Sobre** - Apresentação do escritório e advogados
5. **Metodologia** - Como trabalhamos (3 passos)
6. **Depoimentos** - Carousel de reviews do Google
7. **FAQ** - Perguntas frequentes (accordion)
8. **Footer** - Rodapé com contatos e redes sociais

## 🔧 Como Editar

### Alterar Textos
- Edite diretamente no `index.html`

### Alterar Estilos
- Edite o `style.css`
- Variáveis CSS estão no `:root` (linha 31-57)

### Alterar Cores Principais
```css
:root {
    --primary-color: #0f172a;    /* Azul escuro */
    --accent-color: #b08d55;      /* Dourado */
}
```

### Alterar Imagens
- Substitua os arquivos de imagem na raiz do projeto
- Mantenha os mesmos nomes ou atualize as referências

## 📱 Responsividade

- Desktop: > 900px
- Mobile/Tablet: ≤ 900px
- Breakpoints no final do `style.css`

## 🚀 Para Rodar Localmente

```bash
cd "F&M | Site"
python3 -m http.server 8080
```

Acesse: http://localhost:8080

## 📝 Notas Técnicas

- **Fontes**: Outfit e Playfair Display (Google Fonts)
- **Ícones**: Font Awesome 6.4
- **Imagens grandes**: Considere comprimir `advogados-2k.jpg` e `hero-bg-2k.jpg` para melhor performance

---

**Última atualização**: Dezembro 2025
