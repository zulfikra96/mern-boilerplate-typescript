import Model from "./Model";


export default class Users extends Model{
    constructor(){
        super();
        this.collection = "users";
    }

    public async getUsers(params: Object){
        return this.findAll(params);
    }

    public async addUser(value: Object = {}){
        return this.insertOne(value)
    }

    public async deleteUser(value: any) {
        return this.deleteOne(value);
    }
}