import axios from "axios";
const Baseurl="http://localhost:3200/"

export class getdata{
static async Fetchdata(){
    return(await axios.get(`${Baseurl}items`)).data;
}

static async createcart(product){
    return(await axios.post(`${Baseurl}basket`,product)).data
}

static async Deletecart(product){
    return(await axios.delete(`${Baseurl}basket/${product.id}`,product)).data
}

}