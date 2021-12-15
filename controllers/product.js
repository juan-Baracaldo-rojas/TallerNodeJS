'use strict'

const Product = require('../models/Product')

function getProducts(req,res){
    Product.find((err,result)=>{
        if(err){
            return res.status(500).json({"error":err.toString()})
        }

        return res.status(200).json(result)
    })
}

function getProduct(req,res){
    const {idProduct} = req.params
    console.log(idProduct)
    Product.find({"idProduct":idProduct},(err,result)=>{
        if(err){
            return res.status(500).json({"error":err.toString()})
        }

        return res.status(200).json(result)
    })
}

function newProduct(req,res){
    const element = new Product(req.body)
    element.save((err,result)=>{
        if(err){
            return res.status(500).json({"error":err.toString()})
        }

        return res.status(200).json({"result":result})
    })
}

module.exports.getProducts = getProducts
module.exports.newProduct = newProduct
module.exports.getProduct = getProduct
