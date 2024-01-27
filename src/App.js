import React,{useState} from "react";
import ImageSearch from "./Components/ImageSearch";
import ImageGallery from "./Components/ImageGallery";






const App = ()=>{
  let[imageList,setImageList]=useState([]);




  return(
    <div>
      <h1>Image Bazzar</h1>
        <ImageSearch setImageList={setImageList}/>
        <ImageGallery imageList={imageList}/>
    </div>
  )
}



export default App;
