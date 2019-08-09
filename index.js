import slack from './src/notifiers/slack'
import formatData from './src/utils/format-data'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  try {
	let object = {}
	const formSubmission = await request.formData()
	const blah = await formSubmission.keys()
	formSubmission.foreach((value, key) => { object[key] = value})
    //const message = await formatData(postData)
    //const blah = await slack(message)
    return new Response(JSON.stringify(formSubmission), { status: 200 })
  } catch (error) {
    return new Response(error.message, { status: 500 })
  }

}
