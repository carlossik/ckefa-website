import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'
const app = readFileSync('src/App.jsx','utf8')
const css = readFileSync('src/App.css','utf8')

test('BHMFF case study goes to its own tournament site, not the product homepage', () => {
  assert.match(app, /href="https:\/\/app\.tournamenthq\.co\.uk\/bhmff"[^>]*>Visit the BHMFF 2026 website/)
  assert.match(app, /href: 'https:\/\/tournamenthq\.co\.uk', label: 'Explore TournamentHQ'/)
})
test('FCFS portfolio button links to the public home page', () => {
  assert.match(app, /href: 'https:\/\/fcfs\.app\/home', label: 'Explore FCFS'/)
})
test('clients with white-backed source logos use dark-theme transparent assets', () => {
  for (const name of ['inshur','qinetiq','nasdaq','grosvenor']) {
    assert.ok(existsSync(`src/assets/logos/${name}-dark.png`))
    assert.ok(app.includes(`./assets/logos/${name}-dark.png`))
  }
  assert.match(css,/\.experience-block \.logo-tile \{/)
  assert.match(css,/background:linear-gradient\(144deg,#1b3640/)
})
