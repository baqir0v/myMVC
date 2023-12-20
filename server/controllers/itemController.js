import Item from "../models/itemModel"

const itemController ={
    getAllItems:async (req,res)=>{
        try {
            const items = await Item.find()
            res.json(items)
        } catch (error) {
            res.status(500).json({message:error})
        }
    },
    getItembyId:async (req,res)=>{
        try {
            const itemId = req.params.id
            const item = await Item.findById(itemId)
            res.json(item)
        } catch (error) {
            res.status(500).json({message:error})
        }
    },
    createItem:async (req,res)=>{
        try {
            const newItem = new Item({
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
            })
            await newItem.save()
            res.send("Okey")
        } catch (error) {
            res.status(500).json({message:error})
        }
    }
}

module.exports =itemController