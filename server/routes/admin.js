let express = require("express");
let router = express.Router();
const adminHelpers=require('../helpers/adminHelpers');
const jwt = require('jsonwebtoken')

router.post('/api/login',async(req,res)=>{
    
await adminHelpers.doAdminLogin(req.body).then((response)=>{
    if (response.status) {
        const token = jwt.sign(
          {
              name:response.user.name,
              email:response.user.email
          }, "zon1998");
        return res.json({ status: "ok", user: token });
      } else {
        return res.json({ status: "error", user: false });
      }

})
})







module.exports = router;