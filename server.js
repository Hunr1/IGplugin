var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();


// help links 
// https://fullstackopen.com/en/part3/saving_data_to_mongo_db
app.use(express.static(__dirname+'/public'));

app.set('view engine','ejs');

app.get('/',function(req,res){
    
    ig.user_self_media_recent(function(err,medias,pagina,remaining,limit){
        res.render('pages/index',{ grams:medias });
    });
});

app.listen(8080);
console.log("App started http://localhost:8080");

ig.use({
    access_token: '',
});
