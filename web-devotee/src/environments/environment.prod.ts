export const environment = {
  production: true,
  api:'https://apiv2.devotee.com.br/',
  urlImages: 'https://devote-v2.s3.sa-east-1.amazonaws.com/',
  urls: {
    login: 'api/login',
    registerUser: 'api/users',
    updateUser: 'api/users/update',
    listCards: 'api/cards',
    userProfile: 'api/users',
    getMatches: 'api/matches',
    getChat: 'api/match/messages',
    generateHash: 'api/create-hash',
    readHash: 'api/read-hash'
  },
  googleApis: {
    key: 'AIzaSyBRuDbRuGoy6vxVAYSPCRqTcKxnlTbZwVs',
    api: 'https://maps.googleapis.com/maps/',
    getAddrress: 'api/geocode/json',
    getPlacesAutocomplete: 'googleURL/api/place/autocomplete/json'
  }
};
