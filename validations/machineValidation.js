const checkForPurchasedKey = (req, res, next) => {
    if(req.body.hasOwnProperty('purchased') && req.body["purchased"] < 2022){
next();
    }else{
res.json({error: "The purchased year must be less than 2022"});
    }
};

module.exports = { checkForPurchasedKey };