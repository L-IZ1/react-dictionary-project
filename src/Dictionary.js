import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkeyword);
  let [results, setResults] = useState(null);
  let [loaded,setLoaded] = useState(false);
  let [photos,setPhotos] =useState(null);

function handleResponse(response) {
    setResults(response.data[0]);
  }
function handlePexelResponse(response){
  setPhotos(response.data.photos);
};

function search(){
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);


   
   let pexelApiKey="pEHzSWySobVX9zr2OB2w6tKTPv3s92jluvrR7xiXDvJjVYlEN8fLqjem";
   let pexelApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`; 
   let headers= {Authorization: `${pexelApiKey}`};
       axios.get(pexelApiUrl, {headers: headers,}).then(handlePexelResponse);
  }


  function handleSubmit(event) {
    event.preventDefault();
    search();}
  

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

if (loaded){
  return (
    <div className="Dictionary">
      <section>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange}  defaultValue={props.defaultKeyword}/>
      </form>
      <div className="hint">Ideas of words to search: climate, ecology, recycle</div></section>
      <Results results={results} />
      <Photos photos={photos}/>
    </div>
  );}else{load(); return "Loading";}
}


