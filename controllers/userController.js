const User = require('../models/User');


module.exports = {
    deleteUser : async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);

            res.status(200).json("Successfully deleted!")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    
    getUser : async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            const {password, __v, createdAt, updatedAt, ...userData} = user._doc;

            if(!user){
                return res.status(401).json("User doesn't exist")
            }

            res.status(200).json(userData)
        } catch (error) {
            res.status(200).json(error)
        }
    },
}