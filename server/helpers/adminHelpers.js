const db = require("../config/connection");
const collection = require("../config/collection");
const { response } = require("express");

module.exports = {
  doAdminLogin: (adminData) => {
    return new Promise(async(resolve, reject) => {
        const admin= await db.get().collection(collection.ADMIN_COLLECTION).findOne({email:adminData.email})
        if(admin){
            if(adminData.password==admin.password){
                response.user=admin
                response.status=true
                resolve(response)
            }else{
                resolve({status:false})
            }
        }else{
            resolve({status:false})
        }
        
    });
  },
};
