export default async message => {
  const endpoint = await CONFIG.get('cbrz.ca', 'json').path
  let content = `{"text":"${message}"}`
  let headers = {
    'Content-Type': 'application/json',
  }
  const init = {
    method: 'POST',
    headers: headers,
    body: content,
  }
//  return await fetch(endpoint, init)
  return endpoint + ' ' + content
}
