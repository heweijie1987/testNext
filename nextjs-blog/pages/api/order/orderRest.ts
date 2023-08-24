import { NextApiRequest, NextApiResponse } from 'next'

import * as orderModel from "../../../service/models/order";
import {Order, BasicOrder} from "../../../types/order";

export default function get(req:NextApiRequest, res:NextApiResponse) {
    orderModel.findAll((err:Error,orders:Order[])=>{
        if (err) {
            return res.status(500).json({"errorMessage": err.message});
          }
      
          res.status(200).json({"data": orders});
    });
}
