export default async dataObject => {
  let formattedData = ''
  for (let prop in dataObject) {
    formattedData += `${prop}: ${dataObject[prop]}\n`
  }
  return formattedData
}

