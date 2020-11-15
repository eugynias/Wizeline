const mongoose =require ('mongoose');

const CakesSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    price : float,
    flavors : string ['Chocalate,Strawberry']
})

const Cakes = mongoose.model('Cakes',CakesSchema);

module.exports = Cakes;