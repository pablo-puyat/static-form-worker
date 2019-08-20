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
    const formSubmission = await request.formData()
    let formSubmissionObject = {}
    const message = await formatData(formSubmissionObject)
    await slack(message)
    return new Response('ok', { status: 200 })
  } catch (error) {
    return new Response(error.message, { status: 500 })
  }

}
