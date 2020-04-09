const Wish = require('../models/wish');

exports.getAddWishesPage = 
    (req, res) => {
    res.render('add-wish', {
        pageTitle: "Add New Wish",
        path: "/admin/add-wish"
    });
}

exports.postAddWishes = (req, res) => {
    console.log(req.body.title);
    //products.push({title: req.body.title});
    const wish = new Wish(req.body.title);
    wish.saveWish();
    res.redirect('/');
}

exports.getWishes = (req, res) => {
    
    Wish.fetchAllWishes((wish)=>{
        res.render('wish', {
        pageTitle: 'Welcome to My Shop!',
        wishes: wish,
        path: '/'
        });
    })
}