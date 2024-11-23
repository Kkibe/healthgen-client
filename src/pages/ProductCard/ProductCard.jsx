import React, { useEffect } from 'react';
import './ProductCard.scss';

const ProductCard = () => {

  return (
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card h-100">
            <div className="labels">
              <div className="label-new bg-success text-white text-center py-1">New</div>
            </div>
            <img src="https://picsum.photos/300/200" alt="Product" />
            <div className="card-body position-relative d-flex flex-column">
              <a href="#" className="add-to-cart bg-primary text-white" data-toggle="tooltip" data-placement="left" title="Add To Cart">
                <i className="fa fa-opencart" aria-hidden="true"></i>
              </a>
              <h3 className="text-success">$1120.00</h3>
              <div className="rating text-warning">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </div>
              <h4>Product Name</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</p>
              <a href="#" className="btn btn-success btn-block mt-auto">
                <i className="fa fa-eye" aria-hidden="true"></i>
                Product Detail
              </a>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card h-100">
            <div className="labels">
              <div className="label-sale bg-primary text-white text-center py-1">Sale</div>
            </div>
            <img src="https://picsum.photos/300/200" alt="Product" />
            <div className="card-body position-relative d-flex flex-column">
              <a href="#" className="add-to-cart bg-primary text-white" data-toggle="tooltip" data-placement="left" title="Add To Cart">
                <i className="fa fa-opencart" aria-hidden="true"></i>
              </a>
              <h3 className="text-success">$200.50</h3>
              <div className="rating text-warning">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
              <h4>Product Name</h4>
              <p>Excepteur sint occaecat cupidatat non proident...</p>
              <a href="#" className="btn btn-success btn-block mt-auto">
                <i className="fa fa-eye" aria-hidden="true"></i>
                Product Detail
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card h-100">
            <div className="labels">
              <div className="label-new bg-success text-white text-center py-1">New</div>
              <div className="label-sale bg-primary text-white text-center py-1">Sale</div>
            </div>
            <img src="https://picsum.photos/300/200" alt="Product" />
            <div className="card-body position-relative d-flex flex-column">
              <a href="#" className="add-to-cart bg-primary text-white" data-toggle="tooltip" data-placement="left" title="Add To Cart">
                <i className="fa fa-opencart" aria-hidden="true"></i>
              </a>
              <h3 className="text-success">$199.99</h3>
              <div className="rating text-warning">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
              <h4>Product Name</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="#" className="btn btn-success btn-block mt-auto">
                <i className="fa fa-eye" aria-hidden="true"></i>
                Product Detail
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
