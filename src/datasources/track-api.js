const { RequestOptions, RESTDataSource } = require('apollo-datasource-rest');

const CLIENT_ID = 'd022bd47df88469792743d0de1d6aefc'
const CLIENT_SECRET = 'f049944BFbCf4aA9914761CDA03b7162'
const API_URL = 'https://bt-bxp-sapi-mylist-series-v1-uw2-qa.us-w2.cloudhub.io/api/content/'

class WeatherAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = API_URL
  }

  async withCity(sfid) {
    const data = await this.get('series', { seriesIds: sfid },
    
    {
    headers: {
        'client_id': CLIENT_ID,
        'client_secret':CLIENT_SECRET
      },
    }
    
    )
    return data;
  }
}

module.exports = WeatherAPI;
