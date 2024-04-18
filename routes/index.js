var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let orders=[
    {
      name:"biriyani",
      price:199,
      image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oOlJVAyA2u6CNnJFpL-QhAHaHa%26pid%3DApi&f=1&ipt=7311ba3f8e460f882811c9331b54c81eaab42b725448a90a1aa3516f0f6327e2&ipo=images"
    },
    {
      name:"pizaa",
      price:299,
      image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NKmAoF64QqyV7oG8nfO6YgHaHa%26pid%3DApi&f=1&ipt=b11fea5f0f8d423c400ab2858d4bb47d5ce7fe65c4137e9c5cad29d85f8f2dc6&ipo=images"
    },
    {
      name:"documents",
      price:199,
      image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP._ggAiY-UeJVeSrObJG_QXwHaHa%26pid%3DApi&f=1&ipt=caa4aa0228f7a0fe283abe5aa794cf99c52fb0f1ca411ca0f320d103dea74606&ipo=images"
    }
  ]
  res.render('layout', { orders });
});

module.exports = router;
