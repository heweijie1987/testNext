import {Product} from "../../types/product"
import {db} from  "../db"
import { ResultSetHeader, RowDataPacket } from "mysql2";

export const create=( product:Product,callback:Function)=>{
    const queryString = "INSERT INTO Product (name, description, instock_quantity,price) VALUES (?, ?, ?,?)";
    db.query(queryString,[product.name,product.description,product.instockQuantity,product.price],(err,result)=>{
        if(err){
            callback(err);
        }
        const insertId = (<ResultSetHeader> result).insertId;
        callback(null,insertId);
    });
}