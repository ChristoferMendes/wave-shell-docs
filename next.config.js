const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = {
  ...withNextra(),
  async headers() {
    return [
      {
        source: '/run',
        headers: [{ key: 'Cross-Origin-Embedder-Policy', value: 'require-corp', }, { key: 'Cross-Origin-Opener-Policy', value: 'same-origin', }]
      },
    ]
  }
}

