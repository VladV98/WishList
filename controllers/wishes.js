const mongoose = require('mongoose');
const Wish = mongoose.model('Wish');

exports.getAddWishesPage = (req,res) =>{
    res.render('add-wish', {
        pageTitle: "Add New Wish",
        path: "/admin/add-wish"
    });
}

exports.postAddWishes = (req, res) => {
    let userInput = req.body.name;
    let newWish = new Wish();
    newWish.name = userInput;
    newWish.save((error, response) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log(error);            
        }
    });
}

exports.getWishes = (req, res) => {    
    Wish.find((error, wishes) => {
        if(!error){
            res.render('wish', 
                {
                    pageTitle: 'My Wishes',
                    wishes: wishes,
                    path: '/'
                });
        } else {
            console.log("Failed to retrieve the data");
        }
    });  
}