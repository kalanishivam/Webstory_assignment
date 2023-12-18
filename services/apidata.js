import axios from 'axios'


export const getData = async ()=>{
    const res = await axios.get("https://www.prabhatkhabar.com/api/v1/advanced-search?author=Meenakshi%20Rai&sort=latest-published&limit=35");
    // console.log(`the headline is ${res.data.items[0].seo["meta-title"]}`) // 
    // console.log(`news keywords are ${res.data.items[0].seo["meta-keywords"]}`);
    return res.data;
}



