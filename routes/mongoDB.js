import express from 'express';
import monk from 'monk';

let router = express.Router();
let db = monk('mongodb://localhost:27017/test');

router.get('/list', (req, res, next)=> {
	db.get('test').find({},(err,doc)=>{
		if(err) console.log('err');
		res.send(doc);
	});
});

router.get('/get/user/:user', (req, res, next)=> {
	let user = req.params.user
    console.log('rest api : '+ user);
	db.get('test').findOne({'user':user},(err,doc)=>{
		if(err) console.log('err');
		res.send(doc);
	});
});

router.post('/insert', (req, res, next)=> {
	let userid = req.body.userid;
	let sex = req.body.sex;
	let city = req.body.city;
	db.get('test').insert({'userid':userid,'sex':sex,'city':city},(err,doc)=>{
	       if(err){
	    	   console.log(err);
	    	   res.status(500).send('update error');
	    	   return;
	       }
	       res.status(200).send("Inserted");
	       
	   });
});

router.post('/delete', (req, res, next)=> {
	let userid = req.body.userid;
	db.get('test').remove({'userid':userid},(err,doc)=>{
	       if(err){
	    	   console.log(err);
	    	   res.status(500).send('update error');
	    	   return;
	       }
	       res.status(200).send("Removed");
	       
	   });
});
router.post('/update', (req, res, next)=> {
	let userid = req.body.userid;
	let sex = req.body.sex;
	let city = req.body.city;
	db.get('test').update({userid:userid},{'userid':userid,'sex':sex,'city':city},(err,doc)=>{
	       if(err){
	    	   console.log(err);
	    	   res.status(500).send('update error');
	    	   return;
	       }
	       res.status(200).send("Updated");
	   });
});

module.exports = router;