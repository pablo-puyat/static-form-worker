export default async dataObject => {
  let formattedData = ''
  for (let property in dataObject) {
    formattedData += `${property}: ${dataObject[property]}\n`
  }
  return formattedData
}

