import { NextApiRequest, NextApiResponse } from 'next'

import * as productModel from "../../service/models/productModel";
import {Product} from "../../types/product";


export default (req:NextApiRequest, res:NextApiResponse)=>{
    if(req.method=="POST"){
        let product:Product = {
            id:null,
            name:req.body.name,
            description:req.body.description,
            instockQuantity:req.body.instockQuantity,
            price:req.body.price
        };
        productModel.create(product,(err,id)=>{
            if (err) {
                return res.status(500).json({"errorMessage": err.message});
              }
          
              res.status(200).json({"data": id});
        });
    }else{
        res.status(200).json({"data": "你是谁？"});
    }

}