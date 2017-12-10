import WooCommerceAPI from 'woocommerce-api';

const WooCommerce = new WooCommerceAPI({
  url: 'https://indresser.com',
  consumerKey: 'ck_10916d3bb1dc8bffa116d4b808b450715f2d447b',
  consumerSecret: 'cs_fd9a38cc4d4588dadca6ef639a1b9e7b2bed62b3',
  wpAPI: true,
  version: 'wc/v2',
});

export default WooCommerce;
