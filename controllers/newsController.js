import { getData } from "../services/apidata.js";


const allData = await getData();
let index= -1;
for(let a = 0; a<=35; a++){
    if(allData.items[a]['slug'] == "ampstories/webstories/peanuts-benefits-in-winter-for-strong-bone-and-glowing-skin-mungfali-khane-ke-fayde-hindi-mkh"){
        index = a;
        break;
    }
}
let currentCardIndex = 0

export const homePage = (req, res)=>{
    const baseUrl = "https://media.assettype.com/"
    res.render("webstory.ejs" , {allData : allData , index: index, baseUrl : baseUrl})
}
