import React, { useState } from 'react';
import '../style/ProductList.css';
import Button from './Button';
const products = [
    {
      name: 'Vintage Lamp',
      price: '$25',
      description: 'A beautiful vintage lamp in excellent condition.',
      img: '/assets/vintage-lamp.png'
    },
    {
      name: 'Handmade Pottery',
      price: '$15',
      description: 'Unique handmade pottery items.',
      img: '/assets/pottery.png'
    },
    {
      name: 'Used Books',
      price: '$5 each',
      description: 'A variety of used books in good condition.',
      img: '/assets/books.png'
    },
    {
      name: 'Bicycle',
      price: '$100',
      description: 'A well-maintained bicycle, perfect for city rides.',
      img: '/assets/bicycle.png'
    },
    {
      name: 'Old Records',
      price: '$10 each',
      description: 'A collection of old records, some rare finds.',
      img: '/assets/old-records.png'
    },
    
    
     
    
  ];
  

const ProductList = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };



  const closeModal = () => {
    setSelectedProduct(null);
  };
  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Show 5 more items
  };

  return (
    <div className="product-list">
    <div className="header">
      <h3>Items for Sale</h3>
      <Button onClick={handleViewMore}>View More</Button>
    </div>
    <div className="product-container">
      {products.slice(0, visibleCount).map((product, index) => (
        <div className="product-item" key={index} onClick={() => handleProductClick(product)}>
          <img src={product.img} alt={product.name} className="product-img" />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
    {selectedProduct && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <img src={selectedProduct.img} alt={selectedProduct.name} className="modal-img" />
          <h3>{selectedProduct.name}</h3>
          <p className="modal-price">{selectedProduct.price}</p>
          <p className="modal-description">{selectedProduct.description}</p>
        </div>
      </div>
    )}
  </div>
  );
};

export default ProductList;
