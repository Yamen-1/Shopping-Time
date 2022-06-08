import React, { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";

export default function Product({ cardItems, setCardItems, handleAddProduct }) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          {" "}
          <Skeleton height={300} />
        </div>
        <div className="col-md-6">
          <Skeleton height={100} />
          <Skeleton height={100} />

          <Skeleton height={100} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="card mb-3 max-width: 540px bg-danger p-2 text-dark bg-opacity-25">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.image}
                className="img-fluid rounded-start"
                alt={product.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> {product.title}</h5>
                <p className="card-text">
                  Rating {product.rating && product.rating.rate}{" "}
                  <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
                <p className="card-text">
                  <small className="text-muted">{product.description}</small>
                </p>
                <button
                  onClick={() => handleAddProduct(product)}
                  className="btn btn-dark ms-2 px-3 py-2"
                >
                  Add to Cart
                </button>

                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                  Go to Cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
