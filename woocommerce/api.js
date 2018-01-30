import WooCommerceAPI from './wooCommerceApi'
import Constants from './config'

var Api = new WooCommerceAPI({
  url: Constants.URL.root,
  consumerKey: Constants.Keys.ConsumeKey,
  consumerSecret: Constants.Keys.ConsumerSecret,
  wpAPI: true,
  per_page: 20,
  version: 'wc/v2',
  queryStringAuth: true
});

export default Api;