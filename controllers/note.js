const Note =  require('../models').Note;

//CRUD for notes.

module.exports = {
    
    create: (req,res) =>{
        Note.create({
            name: req.body.name,
            category: req.body.category,
            content: req.body.content
        }).then(result=>{
            res.json(result);
        }).catch(err=>{
            console.log(err);
            res.json(err);
        })
    },

    update:(req,res)=>{
        Note.update({
            name: req.body.name,
            category: req.body.category,
            content: req.body.content
        },{
            where:{
                id: req.params.id
            }
        }).then((response)=>{
            res.json(response);
        })
    },

    delete: (req,res)=>{
        Note.destroy({
            where: {
                id: req.params.id
            }
        }).then(response => {
            res.json(response)
        })
    },
    
    showAll: (req,res) =>{
        Note.findAll().then((notes)=>{
            res.json(notes);
        })
    },

    show: (req,res) =>{
        Note.findById(req.params.id).then((notes) =>{
            res.json(notes);
        });
    }
};