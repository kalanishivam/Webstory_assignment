import { getData } from "../services/apidata.js";


const allData = await getData();
let index= -1;
for(let a = 0; a<=35; a++){
    // if(  allData.items[a]['updated-at']  == "1702653512512"){
    //     index = a;
    //     break;
    // }
    if(allData.items[a]['slug'] == "ampstories/webstories/peanuts-benefits-in-winter-for-strong-bone-and-glowing-skin-mungfali-khane-ke-fayde-hindi-mkh"){
        index = a;
        break;
    }
}
let currentCardIndex = 0

export const homePage = (req, res)=>{
    const currentCardIndexImage = 0;
   
    const ownerNameCover = allData.items[index]['owner-name'];
    const headlineCover = allData.items[index]['headline'];
    
    const baseUrl = "https://media.assettype.com/"
    const currentCardIndexHeadline = 0
    const currentCardIndexInfo = 0;
    res.render("webstory.ejs" , {allData : allData , index: index , currentCardIndex: currentCardIndex ,  ownerNameCover : ownerNameCover, headlineCover : headlineCover ,currentCardIndexHeadline : currentCardIndexHeadline, currentCardIndexInfo:currentCardIndexInfo, currentCardIndexImage : currentCardIndexImage, baseUrl : baseUrl})
}