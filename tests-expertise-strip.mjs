import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
const root = fileURLToPath(new URL('.', import.meta.url))
const jsx = readFileSync(join(root, 'src', 'App.jsx'), 'utf8')
const css = readFileSync(join(root, 'src', 'App.css'), 'utf8')

test('seven clickable services have native keyboard-ready controls', () => {
  const topics = jsx.match(/const expertiseTopics = \[([\s\S]*?)\]\s*const services = \[/)
  assert.ok(topics, 'topics must be immediately before the existing service list')
  assert.equal((topics[1].match(/id: '/g) || []).length, 7)
  assert.match(jsx, /<button key=\{topic.id\} type="button"/)
  assert.match(jsx, /aria-expanded=\{activeExpertise === topic.id\}/)
  assert.match(jsx, /aria-controls="expertise-detail"/)
  assert.match(jsx, /aria-labelledby="expertise-strip-label"/)
})
test('card content comes directly from the original seven services', () => {
  assert.match(jsx, /const selectedTopic = expertiseTopics\.find/)
  assert.match(jsx, /const selectedService = services\.find\(service => service\.title === selectedTopic\?\.title\)/)
  assert.match(jsx, /\{selectedService\.description\}/)
  assert.match(jsx, /\{selectedService\.title\}/)
  assert.match(jsx, /<ServiceIcon title=\{selectedService\.title\} \/>/)
})
test('click, same-button toggle, close button and Escape dismiss the panel', () => {
  assert.match(jsx, /hidden=\{!selectedService\}/)
  assert.match(jsx, /aria-label="Close service details"/)
  assert.match(jsx, /activeExpertise === topic\.id \? null : topic\.id/)
  assert.match(jsx, /event\.key === 'Escape'/)
  assert.match(jsx, /href="#services" onClick=\{\(\) => setActiveExpertise\(null\)\}/)
  assert.match(jsx, /href="#contact" onClick=\{\(\) => setActiveExpertise\(null\)\}/)
})
test('mobile horizontal scrolling, keyboard focus and reduced motion included', () => {
  assert.match(css, /CKEFA INTERACTIVE EXPERTISE STRIP/)
  assert.match(css, /\.expertise-topics\{display:flex/)
  assert.match(css, /\.expertise-disclosure\[hidden\]\{display:none!important\}/)
  assert.match(css, /\.expertise-trigger:focus-visible/)
  assert.match(css, /overflow-x:auto/)
  assert.match(css, /prefers-reduced-motion:reduce/)
})
test('contact form, portfolio links and original service cards remain present', () => {
  assert.match(jsx, /name="ckefa-enquiry"/)
  assert.match(jsx, /formData\.set\('form-name', 'ckefa-enquiry'\)/)
  assert.match(jsx, /app\.tournamenthq\.co\.uk\/bhmff/)
  assert.match(jsx, /fcfs\.app\/home/)
  assert.match(jsx, /services\.map\(s => <article className="service-card"/)
  assert.match(jsx, /DevSecOps & cloud security/)
})
