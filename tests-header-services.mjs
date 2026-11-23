import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
const jsx = readFileSync(new URL('./src/App.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('./src/App.css', import.meta.url), 'utf8')
test('announcement banner removed and navigation retained', () => {
  assert.doesNotMatch(jsx, /className="announcement"/)
  assert.match(jsx, /className="site-header"/)
  assert.match(jsx, /className="button button-outline header-cta"/)
})
test('DevSecOps joins the existing six services', () => {
  const block = jsx.match(/const services = \[([\s\S]*?)\]\s*const projects = \[/)
  assert.ok(block)
  assert.equal((block[1].match(/title: '/g) ?? []).length, 7)
  assert.match(block[1], /DevSecOps & cloud security/)
  assert.match(block[1], /specialist delivery partner/)
})
test('service cards use their own SVG iconography', () => {
  assert.match(jsx, /<ServiceIcon title=\{s\.title\} \/>/)
  assert.match(jsx, /function ServiceIcon\(/)
  assert.match(css, /\.service-icon-badge/)
})
test('contact form and project links remain available', () => {
  assert.match(jsx, /name="ckefa-enquiry"/)
  assert.match(jsx, /app\.tournamenthq\.co\.uk\/bhmff/)
  assert.match(jsx, /fcfs\.app\/home/)
})
