const { gql } = require('apollo-server');

const typeDefs = gql`

  type WeatherResponse {
    unique_id__c: String
    series_color__c: String
    number_of_episodes:Int
    logo_url__c:String
    background_video_attract_loop__c:String
    card_image_url__c:String
    card_image_alt_text__c:String
    description__c:String
    play_btn_episode:String
    name:String
    publish_status__c:String
    sfid:String
    number_of_seasons:Int
  }

  type Query {
    weatherByCity(seriesIds: String): [WeatherResponse]
  }
`;

module.exports = typeDefs;
