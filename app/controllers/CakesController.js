const Cakes = require  ('../models/Cakes');

function index(req,res){
    Cakes.find({})
        .then(products => {
            if(cakes.length) return res.status(200).send({cakes});
        }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return restart.status(500).send({error});
    if(req.body.cakes) return res.status(200).send({cakes});
    return res.status(404).send({message: 'NOT FOUND'});
}

function create(req,res){
    new Cakes(req.body).save().then(cake =>res.status(201).send({cake})).catch(error => res.status(500).send({error})); 
}

function update(req,res){
    if(req.body.error) return restart.status(500).send({error});
    if(!req.body.cakes) return res.status(404).send({message: 'NOT FOUND'});
    let cake = Object.assign(cake.req.body);
    cake.save().then(cake => res.status(200).send({message: 'UPDATED',cake})).catch(error => res.status(500).send({error}));
}

function remove(req.res){
    if(req.body.error) return restart.status(500).send({error});
    if(!req.body.cakes) return res.status(404).send({message: 'NOT FOUND'});
    req.body.cakes(0).remove().then(cake => res.status(200).send({message: 'REMOVED', cake})).catch(error => res.status(500).send({error}));
}

function find(req,res,next){
    let query ={};
    query(re.params.key) = re.params.value;
    Cakes.find(query).then(cakes => {
        if(!cakes.length) return next();
        req.body.cakes = cakes;
    }).catch(error => {
        req.body.error = error;
        next();
    })
}

module.exports ={
    index,
    show,
    create,
    update,
    remove
}