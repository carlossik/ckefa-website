import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync,existsSync} from 'node:fs'
import {join} from 'node:path'
import {fileURLToPath} from 'node:url'
const folder=fileURLToPath(new URL('.',import.meta.url))
const jsx=readFileSync(join(folder,'src','App.jsx'),'utf8')
const css=readFileSync(join(folder,'src','App.css'),'utf8')
test('approved hero artwork is present and accessible',()=>{assert.match(jsx,/ckefa-secure-globe\.webp/);assert.match(jsx,/alt="Digital globe/);assert.ok(existsSync(join(folder,'public','ckefa-secure-globe.webp')))})
test('lighter dark-slate palette and readable services are in place',()=>{assert.match(css,/CKEFA BALANCED THEME 2026-11-23/);assert.match(css,/#0d202a/);assert.match(jsx,/Technology expertise for a more secure/);assert.match(jsx,/OUR SERVICES/)})
test('all seven services and contact handler are retained',()=>{assert.match(jsx,/DevSecOps & cloud security/);assert.match(jsx,/Cybersecurity & resilience/);assert.match(jsx,/name="ckefa-enquiry"/);assert.match(jsx,/formData\.set\('form-name', 'ckefa-enquiry'\)/)})
test('portfolio destinations are retained',()=>{assert.match(jsx,/https:\/\/app\.tournamenthq\.co\.uk\/bhmff/);assert.match(jsx,/https:\/\/fcfs\.app\/home/);assert.match(jsx,/ckefamedia\.com/)})
