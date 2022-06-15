import React from "react";
import Blog from "../Blog";
import ParallaxPrincipal from "../ParallaxPrincipal";

import Helmet from "react-helmet"


export default function Inicio() {

  return (
    <div>
      {/* Below Helmet allows to add dynamic metaData */}
      <Helmet>
        <title>Radio El Mundo</title>
        <meta name='description' content='En la frecuencia del Amor' />
        </Helmet> 
      <ParallaxPrincipal />

      {/* 
      {
        isFirstTime ? 
      <CookieConsent debug={true} buttonText="Acepto" style={{ background: "#59C3C3" }} buttonStyle={{ color: "#59C3C3", background:"white", fontSize: "13px", fontWeight: "bold", margin: "20px" }} expires={150} onAccept={handleCookie}>Usamos cookies para mejorar nuestro sitio<img id="cookie" alt="cookie" src={cookie}/></CookieConsent>
      :
      ""
      } */}

      <Blog />
    </div>
  );
}
