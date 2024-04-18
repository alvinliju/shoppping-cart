var express = require('express');
var router = express.Router();

const products = [
  {
    name : "Iphone",
    category : "mobile",
    description : "Apple product",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cM3Aod0S7b1mbl_ItItivwHaH2%26pid%3DApi&f=1&ipt=ca6aba2201c4d86cdd74c1fedd153880c1b29cd14ff861043efb15a616c59923&ipo=images"
  },
  {
    name : "Samsung",
    category : "mobile",
    description : "Samsung product",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.B7deUWxm5BWRTeMbaxLkxAHaEK%26pid%3DApi&f=1&ipt=48f59cb13421b5a7143a744b4b98064de2114066d28e756a58d295a324df8dd2&ipo=images"
  },
  {
    name : "REDMI",
    category : "mobile",
    description : "Xiaomi product",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Qwub8H7mbsW3spe3Li_TpAHaEK%26pid%3DApi&f=1&ipt=76694eaf66f6561c837c4481508a1d806b515b1361c70c2562693a66bce12e3b&ipo=images"
  },
  {
    name : "One plus",
    category : "mobile",
    description : "Oneplus product",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.VqgbDrzsA8XUTTFwPfrPCgHaEK%26pid%3DApi&f=1&ipt=c01f2501d3ce9a4ad9949bb36a477e76a968ed802c7caf72b335a606b3caa0a3&ipo=images"
  },

]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shopping Cart',products });
});

module.exports = router;
