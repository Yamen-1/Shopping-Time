import React from "react";
import Products from "./Products";
export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://image.gala.de/22183258/t/zR/v7/w1440/r1.5/-/teaser-gala-xmas-shopping.jpg"
          className="card-img"
          alt="background"
          height="1170px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-start">
          <div className="container"></div>
          <h5 className="card-title display-2 fw-bolder mb-2 ">
            S H O P P I N G..... TIME{" "}
          </h5>
          <p className="card-text  lead fw-bolder fs-2">
            CHECK OUT AND ENJOY WITH US
          </p>
        </div>
      </div>
      {/* <Products /> */}
    </div>
  );
}
