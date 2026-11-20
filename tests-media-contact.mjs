import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
const app=readFileSync('src/App.jsx','utf8')
const html=readFileSync('index.html','utf8')
const form=readFileSync('public/__forms.html','utf8')
const css=readFileSync('src/App.css','utf8')
test('CKEFA Media has a booking website and video channel',()=>{
  assert.match(app, /href: 'https:\/\/ckefamedia.com', label: 'Visit website & book'/)
  assert.match(app, /secondaryHref: 'https:\/\/www.youtube.com\/@CKEFAMedia'/)
  assert.match(app, /project.secondaryHref/)
  assert.match(css, /project-link-secondary/)
})
test('Vite local preview never attempts to send an enquiry',()=>{
  assert.match(app,/localHostnames.includes\(window.location.hostname\)/)
  assert.match(app,/setStatus\('preview'\)/)
  assert.match(app,/the enquiry has not been sent/)
})
test('Dedicated static Netlify form matches React fields and POST destination',()=>{
  assert.ok(app.includes("fetch('/__forms.html'"))
  assert.match(form, /data-netlify="true"/)
  assert.match(form, /netlify-honeypot="bot-field"/)
  for (const key of ['fullName','email','organisation','service','message','bot-field']) {
    assert.match(form,new RegExp(`name="${key}"`))
    assert.match(app,new RegExp(`name="${key}"`))
  }
  assert.doesNotMatch(html,/data-netlify="true"/)
})
