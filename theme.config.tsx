import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/wave-shell.png" width={40} />
      <span style={{
        marginLeft: '10px',
      }}>Wave Shell</span>
    </>
  ),
  project: {
    link: "https://github.com/ChristoferMendes/wave-shell",
  },
  docsRepositoryBase:
    "https://github.com/ChristoferMendes/wave-shell-docs/tree/main",
  footer: {
    text: "Wave Shell Docs",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Wave Shell",
      
    };
  },
  faviconGlyph: "🌊",
  head: (
    <>
      <meta
        name="description"
        content="Wave Shell - A simple and beautiful shell for your terminal"
      />
      <meta name="og:title" content="Wave Shell" />
    </>
  )
};

export default config;
