const fetch = require('node-fetch')

module.exports = async function (req, res) {
  const response = await fetch('https://httpbin.org/get')
  const json = await response.json()
  console.log(json)
  return json.example
}
