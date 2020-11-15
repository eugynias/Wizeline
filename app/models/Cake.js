const mongoose =require ('mongoose');

const CakeSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    price : float,
    flavors : string ['']
})

const Cake = mongoose.model('Cake',CakeSchema);

module.exports = Cake;