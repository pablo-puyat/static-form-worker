export default async request => {
  const endpoint = await CONFIG.get('cbrz.ca', 'json').path
  let content = `{"text":"${body}"}`
  let headers = {
    'Content-Type': 'application/json',
  }
  const init = {
    method: 'POST',
    headers: headers,
    body: content,
  }
  const response = await fetch(endpoint, init)
  return response
}
