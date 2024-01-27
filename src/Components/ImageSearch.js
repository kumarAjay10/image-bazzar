import React,{useState} from "react";
import axios from "axios";





const ImageSearch=({setImageList})=>{
 let[searchQuery,setSearchQuery]=useState("");

        
        function handleSearch (e){
           e.preventDefault()
        //    console.log(searchQuery);
        
        
axios.get("https://api.unsplash.com/search/photos?query=cat",
        
           {
            headers:{
                "Accept-Version": "v1",
                Authorization: "Client-ID Q8dwYHk59e8OBKr624VlSxxNKEPuYte6I_MKVFJ_3N0"
            },
            params: {
            query: searchQuery
            }
           }
           )
           .then((response)=>{
            console.log(response.data);
            setImageList(response.data.results);
           })
           .catch((err)=>{
            console.log(err);
           })
        }
        
        
        
        
        
        
        
        
            return(
                <div>
                     <form onSubmit={handleSearch}>
                          <input type="text" placeholder="search image"
                          value={searchQuery}
                          onChange={(e)=>setSearchQuery(e.target.value)}
                          
                          />
                          <button type="submit">Search</button>
                     </form>
                </div>
            )
        }





export default ImageSearch;