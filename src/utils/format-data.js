export default async dataObject => {
  if (dataObject === null || typeof dataObject !== 'object') {
    throw new Error('Must be an object')
  }
  let formattedData = ''
  for (let property in dataObject) {
    formattedData += `${property}: ${dataObject[property]}\n`
  }
  return formattedData
}
