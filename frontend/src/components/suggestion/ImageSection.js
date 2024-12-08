import React from 'react';
import PropTypes from 'prop-types';
import './OutfitGenerationModal.css';
import { FaShoppingCart } from 'react-icons/fa';

const ImageSection = ({ outfit }) => {

  // Function to categorize links
  const categorizeLinks = () => {
    const categories = {
      Top: [],
      Bottom: [],
      Shoes: [],
      Outerwear: [],
      Set: [], // Added Set category
    };

    outfit.outfit_details.forEach(outfitComponents => {
      outfitComponents.forEach(component => {
        const { clothing_type, eBay_link } = component;
        if (
          clothing_type.toLowerCase().includes('top') ||
          clothing_type.toLowerCase().includes('sweater') ||
          clothing_type.toLowerCase().includes('t-shirt')
        ) {
          if (eBay_link && eBay_link.length > 0) {
            categories.Top.push(eBay_link[0]);
          }
        } else if (
          clothing_type.toLowerCase().includes('bottom') ||
          clothing_type.toLowerCase().includes('jeans') ||
          clothing_type.toLowerCase().includes('pants')
        ) {
          if (eBay_link && eBay_link.length > 0) {
            categories.Bottom.push(eBay_link[0]);
          }
        } else if (
          clothing_type.toLowerCase().includes('shoe') ||
          clothing_type.toLowerCase().includes('boots') ||
          clothing_type.toLowerCase().includes('sneakers')
        ) {
          if (eBay_link && eBay_link.length > 0) {
            categories.Shoes.push(eBay_link[0]);
          }
        } else if (
          clothing_type.toLowerCase().includes('jacket') ||
          clothing_type.toLowerCase().includes('coat') ||
          clothing_type.toLowerCase().includes('outerwear')
        ) {
          if (eBay_link && eBay_link.length > 0) {
            categories.Outerwear.push(eBay_link[0]);
          }
        } else if (
          clothing_type.toLowerCase().includes('set') // Handling Set category
        ) {
          if (eBay_link && eBay_link.length > 0) {
            categories.Set.push(eBay_link[0]);
          }
        }
      });
    });

    return categories;
  };

  const categories = categorizeLinks();

  return (
    <div className="image-section">
      <div className="section-header">Preview</div>
      <img src={outfit.image_url} alt="Generated Outfit" className="generated-image" />
      <p className="info-text">
        The image is AI-generated and the original clothing might not fully match what you are seeing now.
      </p>
    </div>
  );
};

ImageSection.propTypes = {
  outfit: PropTypes.object.isRequired,
};

export default ImageSection;