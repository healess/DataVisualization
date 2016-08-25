var MongoClient = require('mongodb').MongoClient
var mongo  = require('mongodb')
var url = 'mongodb://localhost:27017/test';

  // Connection URL
  // Use connect method to connect to the Server
module.exports.callDb =  function(res) {
    MongoClient.connect(url, function(err, db) {
      console.log("Connected correctly to server");
      var myCollection = db.collection('test');
      //var cursor = myCollection.find({"title" : "First data", "user" : "king"});
      var cursor = myCollection.find();
      var returnValue="";
      cursor.each(function(err, doc) {
        if(err){
          console.log("document err:");
          throw err;
        }
        if(doc == null){
          console.log("document null:");
                return;
            }
            console.log("document find:");
            console.log(doc.title);
        });
      /*
        myCollection.insert({"title" : "First data5", "user" : "king5" }, function(err, result) {
        if(err)
            throw err;
        console.log("entry saved");
      });*/
      db.close();
    });
};

