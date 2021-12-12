'use strick'

const Detail = require('../models/Detail')

function getElements(req,res){
    Detail.find((err,result)=>{
        if(err){
            return res.status(500).json({"error":err.toString()})
        }

        return res.status(200).json(result)
    })
}

function getDetail(req,res){
    const {cant} = req.params
    console.log(cant)
    Detail.find({"cant":cant},(err,result)=>{
        if(err){
            return res.status(500).json({"error":err.toString()})
        }

        return res.status(200).json(result)
    })
}

function newDetail(req,res){
    const element = new Detail(req.body)
    element.save((err,result)=>{
        if(err){
            return res.status(500).json({"error":err.toString()})
        }

        return res.status(200).json({"result":result})
    })
}

module.exports.getElements = getElements
module.exports.newDetail = newDetail
module.exports.getDetail = getDetail
