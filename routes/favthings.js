let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let fav = require('../models/favthings');

/* GET Contact List page - READ Operation */
router.get('/', (req, res, next) =>{
    fav.find((err, fList) => {
        if(err) {
            return console.error(err);
        }
        else {
            console.log("test");
           console.log(fList);

            res.render('fav/index', {
                title: 'Fav Things',
                favList: fList
            });
            
        }
    });
});

module.exports = router;