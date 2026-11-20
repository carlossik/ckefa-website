import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { test } from 'node:test'
import { resolve } from 'node:path'
const read = (name) => readFileSync(resolve(name), 'utf8')
const app = read('src/App.jsx')
const html = read('index.html')
const formDefinition = read('public/__forms.html')

test('the page uses CKEFA branding, not starter Vite icon', () => {
  assert.ok(existsSync('public/favicon.ico'))
  assert.ok(existsSync('public/ckefa-symbol.webp'))
  assert.doesNotMatch(html, /vite\.svg|favicon\.svg/)
  assert.match(html, /og:image/)
})

test('the homepage includes required portfolio and cybersecurity propositions', () => {
  for (const phrase of ['Cybersecurity & resilience','AI security & readiness','TournamentHQ','FCFS.app','De Franco Foundation','CKEFA Studio1','AssureLink Compliance','Black History Month Football Tournament']) {
    assert.ok(app.includes(phrase), `missing: ${phrase}`)
  }
})

test('Netlify form blueprint matches the client-side form fields', () => {
  assert.match(formDefinition, /data-netlify="true"/)
  assert.match(formDefinition, /name="ckefa-enquiry"/)
  assert.ok(app.includes("fetch('/__forms.html'"))
  assert.match(app, /formData\.set\('form-name', 'ckefa-enquiry'\)/)
  for (const field of ['fullName','email','organisation','service','message','bot-field']) {
    assert.match(formDefinition, new RegExp(`name="${field}"`))
    assert.match(app, new RegExp(`name="${field}"`))
  }
  assert.doesNotMatch(app, /formspree\.io/)
})

test('analytics is token-gated, not falsely presented as live', () => {
  assert.match(app, /VITE_CF_WEB_ANALYTICS_TOKEN/)
  assert.ok(existsSync('.env.example'))
})

test('the public website includes baseline compliance and SEO files', () => {
  for (const file of ['public/privacy.html','public/robots.txt','public/sitemap.xml','public/_headers','public/ckefa-social-preview.png']) assert.ok(existsSync(file), `missing: ${file}`)
  assert.match(html, /application\/ld\+json/)
  assert.match(app, /href="\/privacy\.html"/)
})
