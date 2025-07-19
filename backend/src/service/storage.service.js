var ImageKit = require("imagekit");
var mongoose = require('mongoose');
var imagekit = new ImageKit({
    publicKey : "public_MtufE6Y5qiEtGGGV+nJl3ve7fa4=",
    privateKey : "private_cMowpYQZPEPlY28ZyNgKTsaQrVo=",
    urlEndpoint : "https://ik.imagekit.io/https://ik.imagekit.io/risabh4/"
});


function uploadFile(file){
    return new Promise((resolve,reject)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:new mongoose.Types.ObjectId().toString(),
            folder:"c-audio"
        },(error,result)=>{
            if(error){
                 reject(error);
            }
             resolve(result);
        })
    })
}

module.exports = uploadFile;