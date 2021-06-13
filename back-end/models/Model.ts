import {  noSql } from "../config/database"

export default class Model {

    protected table_name:string = ""
    protected collection:string = ""

    constructor(){

    }
    
    protected async findOne(args:Object){  
        return new Promise((resolve, reject) => {
            noSql((db, client) => {
                const collection = db.collection(this.collection)
                collection.findOne(args,(err, result) => {
                    if(err) return reject(err)
                    client.close()
                    resolve(result);
                })
            })    
            
        })
    }

    protected async findAll(args: Object = {}){
        return new Promise((resolve, reject) => {
            noSql((db, client) => {
                const collection = db.collection(this.collection)
                collection.find(args).toArray((err,result) => {
                    if(err) return reject(err)
                    client.close()
                    return resolve(result)
                })
            })    
        })
    }

    protected update(){

    }

    protected deleteOne(){

    }

    protected insertOne(value:object){
        return new Promise((resolve, reject) => {
            noSql(async (db, client) => {
                const collection = await db.collection(this.collection);
                const response = await collection.insertOne(value)
                client.close()
                resolve(response)
            })
        })
    }

    protected addMany(){

    }
   
}