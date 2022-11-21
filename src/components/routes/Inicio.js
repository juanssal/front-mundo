import React from "react";
import Blog from "../Blog";
import ParallaxPrincipal from "../ParallaxPrincipal";

import Helmet from "react-helmet"


export default function Inicio() {

  return (
    <div className="main-container">
      {/* Below Helmet allows to add dynamic metaData */}
      <Helmet>
        <title>Radio El Mundo</title>
        <meta name='description' content='En la frecuencia del Amor' />
        </Helmet> 
      <ParallaxPrincipal />

      
      <Blog />
    </div>
  );
}
