import { strict as assert } from 'node:assert'
import test from 'node:test'
import { enquiryText, sendEnquiry, type Enquiry } from './enquiry.ts'

const e: Enquiry = {
  name: 'Asha Patel',
  company: 'Acme Retail',
  email: 'asha@example.com',
  phone: '+91 98765 43210',
  product: 'Courier & Mailing Bags',
  quantity: '  ',
  message: '  Need 10x12 bags monthly.  ',
}

const reply = (status: number, body: unknown) =>
  (async () => new Response(JSON.stringify(body), { status })) as unknown as typeof fetch

test('body lists filled fields, skips blank ones, trims the message', () => {
  const text = enquiryText(e)
  assert.ok(text.includes('Product: Courier & Mailing Bags'))
  assert.ok(!text.includes('Quantity'))
  assert.ok(text.endsWith('Message:\nNeed 10x12 bags monthly.'))
})

test('sends to Web3Forms with key, subject and reply-to', async () => {
  let sent: Record<string, string> = {}
  const fake = (async (_url: string, init: RequestInit) => {
    sent = JSON.parse(String(init.body))
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  }) as unknown as typeof fetch
  await sendEnquiry(e, 'KEY', fake)
  assert.equal(sent.access_key, 'KEY')
  assert.equal(sent.replyto, e.email)
  assert.ok(sent.subject?.includes(e.product))
})

test('missing key, 200-with-success:false and HTTP errors all throw', async () => {
  await assert.rejects(sendEnquiry(e, '', reply(200, { success: true })), /not configured/)
  await assert.rejects(
    sendEnquiry(e, 'BAD', reply(200, { success: false, message: 'Invalid key' })),
    /Invalid key/,
  )
  await assert.rejects(sendEnquiry(e, 'KEY', reply(500, {})), /status 500/)
})
