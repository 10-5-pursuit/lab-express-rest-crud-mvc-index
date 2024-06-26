const checkForNameKey = (req, res, next) => {
    if(req.body.hasOwnProperty('name')){
next();
    }else{
res.json({error: "Name of Location must be included"});
    }
};

module.exports = { checkForNameKey };