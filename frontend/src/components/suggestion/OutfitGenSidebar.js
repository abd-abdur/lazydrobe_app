import React from 'react';
import PropTypes from 'prop-types';
import './OutfitGenSidebar.css';
import { FaShoppingCart } from 'react-icons/fa';

const ImageSection = ({ component }) => (
  <div className="item-image-container">
    <img
      src={component.image_url}
      alt={component.clothing_type}
      className="item-image"
      onClick={() => window.open(component.eBay_link[0], '_blank')}
    />
    <FaShoppingCart className="shopping-cart-icon" />
  </div>
);

ImageSection.propTypes = {
  component: PropTypes.object.isRequired,
};

const OutfitGenSidebar = ({ outfit }) => {
  return (
    <div className="sidebar-container">
      <div className="section-header">Shop the Look</div>
      <div className="item-list">
        {outfit.outfit_details.map((outfitComponents, index) => (
          <div key={index} className="item-card">
            {outfitComponents.map((component, idx) => (
              <div key={idx} className="item-details">
                <ImageSection component={component} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

OutfitGenSidebar.propTypes = {
  outfit: PropTypes.object.isRequired,
};

export default OutfitGenSidebar;