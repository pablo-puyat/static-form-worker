export default async message => {
  const endpoint = await CONFIG.get('cbrz.ca', 'json')
  const blocks = [
    { 'type': 'section', 'text': { 'type': 'plain_text', 'text': 'New form submission' } },
    { 'type': 'section', 'text': { 'type': 'plain_text', 'text': message } },
    { type: 'divider' },
  ]
  const init = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: 'New form submission', blocks }),
  }
  return await fetch(endpoint.endpoint, init)
}
