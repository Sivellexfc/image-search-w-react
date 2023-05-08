import axios from 'axios'

const searchImages = async (term)=>{
    
    const response = await axios.get("https://api.unsplash.com/search/photos",{
      headers:{
        Authorization:'Client-ID 3SzX3InWwi5eTHQXv_T7R2gCRJ14KAiDMoTY7JYj1a0',
      },
      params: {
        query: term
      }
      
    })
    console.log(term)
    console.log(response)
    return response.data.results

  }

  export default searchImages