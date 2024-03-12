const express = require('express')
const router = express.Router()
let packets = require('../../users.js')

router.get("/",(req,res) => {
    res.json(packets)
});


router.get("/:id",(req,res)=>{
    const found = packets.some(user=> user.id === parseInt(req.params.id))
    console.log(found)
    if(found){
        res.json(packets.filter(user=>user.id === parseInt(req.params.id)))
    }
    else{
        res.sendStatus(400);
    }
})

router.post('/',(req,res)=>{
    const n_id = packets.length + 1
    const n_entry={
        id:n_id,
        name: req.body.name,
        source: req.body.source
    }
    if(!n_entry.name || !n_entry.source){
        return res.sendStatus(400)
    }
    packets.push(n_entry)
    res.json(
        {
            "msg": "posted",
            "new entry":n_entry
        }
    )
})

router.put('/:id',(req,res)=>{
    const found = packets.some(user=>user.id === parseInt(req.params.id))
    if(found){
        const updateUser = req.body
        packets.forEach(
            user => {
                if(user.id === parseInt(req.params.id)){
                    user.name = updateUser.name?updateUser.name:user.name;
                    user.source = updateUser.source?updateUser.source:user.source;
                    res.json({
                        "msg":"updated",
                        "new entry": user
                    })
                }
            }
        )
    }
})

router.delete('/:id',(req,res)=>{
    const found = packets.some(user => user.id === parseInt(req.params.id))

    if(found){
        packets = packets.filter(user => user.id !== parseInt(req.params.id))
        res.json({
            "msg": "deleted",
            "users": packets
        })
    }
    else{
        res.sendStatus(400)
    }
})
module.exports=router