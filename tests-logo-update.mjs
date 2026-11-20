import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'

const app = readFileSync('src/App.jsx','utf8')
const css = readFileSync('src/App.css','utf8')

test('official logo images are present for four live portfolio identities',()=>{
 for (const name of ['tournamenthq-wordmark.webp','tournamenthq-emblem.webp','fcfs.webp','de-franco-foundation.webp','ckefa-media.webp'])
   assert.ok(existsSync(`src/assets/products/${name}`), `Missing ${name}`)
 for (const name of ['tournamentHqWordmark','fcfsLogo','deFrancoLogo','ckefaMediaLogo'])
   assert.match(app,new RegExp(`logo: ${name}\\b`))
 assert.match(app,/project\.logo \? <div className="project-logo-shell">/)
 assert.match(app,/project\.emblem/)
})

test('selected clients are clearly presented as real engagements',()=>{
 assert.match(app,/SELECTED CLIENTS/)
 assert.match(app,/Trusted experience/)
 assert.match(app,/Proven delivery/)
 assert.match(app,/wider portfolio of engagements/)
 assert.doesNotMatch(app,/do not imply endorsement or a direct CKEFA client relationship/i)
 for (const name of ['IKEA','INSHUR','QinetiQ','Ministry of Defence','Department for Education','HMRC','Nasdaq','Grosvenor Technology'])
   assert.ok(app.includes(name),name)
})

test('selected-client logo layout is larger and responsive',()=>{
 assert.match(css,/\.logo-grid \{grid-template-columns:repeat\(4/)
 assert.match(css,/\.logo-tile \{min-height:154px/)
 assert.match(css,/\.logo-tile img \{max-width:92%/)
 assert.match(css,/grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/)
})
