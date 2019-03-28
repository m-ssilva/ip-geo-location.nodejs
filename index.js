const request = require('request')
const url = 'http://ip-api.com/json'
let info = {}

const infoParser = (obj, body) => {
    const parsedBody = JSON.parse(body)
    obj = {
        ip: parsedBody.query,
        country: parsedBody.country,
        city: parsedBody.city,
        region: parsedBody.region,
        latitude: parsedBody.lat,
        longitude: parsedBody.lon,
        organization: parsedBody.org
    }
    return obj
}

request(url, (err, res, body) =>
    err ? console.log(`error: ${err}`) : console.log(infoParser(info, body)))