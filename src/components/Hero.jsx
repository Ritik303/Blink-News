import React, { useEffect, useState } from "react";
import axios from "axios"
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
const Hero=()=>{
    const[Data,setData]= useState("");
    const fetchData=async()=>{
        await axios.get(
            `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b4561c3900844539ba95c65d8d2b991f`
            ).then((res)=>setData(res.data.articles));
    };
    useEffect(() =>{
        fetchData();
    },[])
    // return <div className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column" style={{height:"50vh"}}><h1 style={{fontSize:"50px", color:"orangered"}}>BLINK News</h1>
    // {/* <h5>THIS WEBSITE IS BUILT BY THE HELP OF NEWS API.</h5> */}
    // </div>;
    return(
        <MDBCarousel showControls showIndicators>
            {/* {dt ? dt.map((items,index)=>( */}
            <>
 <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>fuck you</h5>
          <p>items.description</p>
        </MDBCarouselCaption>
      </MDBCarouselItem> 
       <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />

        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem> 
  </>
            
 {/* ):"LOADING...."}  */}
    </MDBCarousel>
        
    )
};
export default Hero;