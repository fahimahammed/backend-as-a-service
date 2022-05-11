const express = require('express');
const router = express.Router();
const Dish = require('../model/dishSchema');
const Favorite = require('../model/favoriteSchema');
const verifyToken = require('./verityToken');

router.post(('/:dishId'), verifyToken, async (req, res) => {
    //console.log(req.email);
    try {
        const dish = await Dish.findById(req.params.dishId);
        const favExists = await Favorite.findOne({ user: req.email, dishId: req.params.dishId});
        if (favExists) {
            res.status(401).json("Already Exists on your favorite list");
        } else {
            const favDish = new Favorite({
                dishId: dish._id,
                name: dish.name,
                price: dish.price,
                quantity: dish.quantity,
                user: req.email
            })
            try {
                const postDishes = await favDish.save();
                res.json(postDishes);
                console.log(res.statusCode);
            }
            catch (err) {
                console.log(err);
            }
        }

    }
    catch (err) {
        res.send(err.message);
        console.log(res.statusCode);
    }
})

router.get('/', verifyToken, async (req, res) => {
    try {
        const favDishes = await Favorite.find({user: req.email});
        res.json(favDishes);
    }
    catch (err) {
        res.send(err.message);
    }
})

router.delete(('/:dishId'), verifyToken, async (req, res)=>{
    try{
        const deleteDish = await Favorite.findOneAndDelete({dishId : req.params.dishId, user : req.email})
        res.send("Dish deleted....");
    }
    catch(err) {
        res.send(err.message);
    }
})

router.delete(('/'), verifyToken, async (req, res)=>{
    try{
        const deleteDish = await Favorite.deleteMany({user: req.email})
        res.send("Dish deleted....");
    }
    catch(err) {
        res.send(err.message);
    }
})


module.exports = router;

