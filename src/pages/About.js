import React from "react";

const About = () => {
  return (
    <div className="container padding">
      <div className="col-md-12">
        <div className="row mx-0">
        <h2 style={{fontFamily: "Dawning of a New Day", textDecoration:"underline", fontWeight:"bolder"}}>Blogger</h2>
          <img src="https://resume-builder-rho-beryl.vercel.app/assets/images/logo.png" style={{width:"450px", display:"block", marginLeft:"auto", marginRight:"auto" , marginTop:"50px", marginBottom:"50px"}}></img>
          <p style={{fontFamily: "Dawning of a New Day", textAlign:"center", fontSize:"40px", lineHeight:"35px", fontWeight:"bolder"}}>
   The currency of blogging is authenticity and trust.
          </p>
          <div style={{display:"inline-block"}}>
          <h2 style={{fontFamily: "Dawning of a New Day", textAlign:"right"}}>- Jason Calacanis</h2>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHdaSnycVJEbA/profile-displayphoto-shrink_800_800/0/1654568431069?e=1670457600&v=beta&t=KZ-4-kUNqSvtlhh3sjsXGVEKeD-vkizDvRZWuqrVj0w" alt="Sanket Banerjee" style={{width:"120px", borderRadius:"25%", display:"block", marginRight:"auto" ,marginLeft:"auto", marginTop:"30px", marginBottom:"30px"}}></img>
          <h2 style={{fontFamily: "Dawning of a New Day", display:"inline-block",fontWeight:"bolder", fontSize:"25px", textAlign:"center", paddingLeft:"35px"}}>Made by Sanket Banerjee</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
