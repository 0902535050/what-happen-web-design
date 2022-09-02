import React from "react";
import { productListImgItems } from "../data";

const ProductList = () => {
  return (
    <div className="productList">
      <div className="productList__menu">
        {productListImgItems.map((item, index) => {
          return (
            <div className="productList__item" key={item.id}>
              <div className="productList__item-card">
                <img src={item.img} alt="" />
                <div className="card__title">
                  <span>[what happen] How to create</span>
                </div>
                <div className="card__info">
                  <div className="card__info-left">
                    <span>2,500 won</span>
                  </div>
                  <div className="card__info-right">
                    <i class="bi bi-heart-fill"></i>
                    <span>236</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="productList__button">
        <button className="button">
          <span>SEE MORE</span>
        </button>
      </div>
    </div>
  );
};

export default ProductList;
