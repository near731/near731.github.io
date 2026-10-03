import { copyFileSync } from 'node:fs'

// GitHub Pages has no SPA fallback: serve index.html for unknown paths via 404.html.
copyFileSync('dist/index.html', 'dist/404.html')
