import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { NavLink } from "react-router-dom";
import Product from "./Product";
import "./App.css";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center m-5 pb-5 fw-bold ">
          <button
            className="btn btn-outline-dark me-2 fw-bold fs-4 "
            onClick={() => setFilter(data)}
          >
            ALL
          </button>
          <button
            className="btn btn-outline-dark me-2 fw-bold fs-4 "
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 fw-bold fs-4 "
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 fw-bold fs-4 "
            onClick={() => filterProduct("jewelery")}
          >
            Jewelry
          </button>
          <button
            className="btn btn-outline-dark me-2 fw-bold fs-4 "
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4 ">
              <div className="card h-60 text-center p-4" key={product.id}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="500px"
                />
                <div className="card-body">
                  <h3 className="card-title mb-0">
                    {product.title.substring(0, 12)}
                  </h3>
                  <h3 className="card-text lead fw-bold">$ {product.price}</h3>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark fw-bold fs-3"
                  >
                    Bay Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
        ;
      </>
    );
  };
  return (
    <div>
      {/* <div className="contanier my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5"></div>
          <h1 className="display-6 fw-border text-center">Latest Products</h1>
          <hr />
        </div>
      </div> */}
      <div className="row justify-content-center  bg-danger p-2 text-dark bg-opacity-25">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}
