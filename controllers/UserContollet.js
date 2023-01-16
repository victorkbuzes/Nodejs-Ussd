const User = require("../models/User");

module.exports.users =  async(req, res) => {
    const user = new User({
        name: req.body.name,
        number: req.body.number,
        group: req.body.group,
        county: req.body.county,
    
    });
    try {
        const saveUser = await user.save();
        res.json(saveUser)
        
    } catch (error) {
        res.json({ message: error})
        
    }
}

module.exports.getUser =   async(req, res) => {
    const user = await User.find({})
    // console.log(post);
    res.send(user)
   
}


module.exports.getUserByID = async(req, res) =>{
    const userByID = await User.find({  number: req.params.number})
    res.send(userByID)
    
}