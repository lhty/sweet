import React, { useContext } from 'react';
import { Context } from '../Providers/Provider';
import { Link } from 'react-router-dom';

import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { ThumbnailUrl, cartDispath } = useContext(Context);
  return product ? (
    product.map(product => (
      <div key={product.id} className="ProductCard-wrapper">
        <div className="ProductCard-description">
          <p className="ProductCard-title">{product.title}</p>
          <div className="hover-buttons">
            <button
              className="hbutton"
              onClick={() => {
                cartDispath({
                  type: 'CART_ADD',
                  payload: {
                    id: parseInt(product.id),
                    quantity: 1,
                    title: product.title,
                    image: ThumbnailUrl(product),
                    price: product.price
                  }
                });
              }}
            >
              В корзину
            </button>
          </div>
        </div>
        <Link to={product.id + '/' + product.title}>
          <img
            className="ProductCard-thumbnail"
            src={ThumbnailUrl(product)}
            alt=""
          />
        </Link>
      </div>
    ))
  ) : (
    <></>
  );
};

export default ProductCard;
