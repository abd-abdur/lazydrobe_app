// src/components/suggestion/OutfitGenerationModal.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './OutfitGenerationModal.css';
import { FaMagic, FaArchive, FaShoppingCart, FaArrowLeft, FaCheckSquare, FaTimes, FaTrashAlt, FaTimesCircle } from 'react-icons/fa';
import OutfitGenSidebar from './OutfitGenSidebar';
import ImageSection from './ImageSection';

const CloseButton = ({ onClick }) => (
  <button className="outfit-modal-close-button" onClick={onClick}>
    <FaTimes className="close-icon" />
  </button>
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const OutfitGenerationModal = ({ outfit, closeModal }) => {

  if (!outfit) return null;

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
    <div className="outfit-modal-overlay" onClick={closeModal}>
      <div className="outfit-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="outfit-container" style={{ display: 'flex', height: '100%' }}>
          <ImageSection outfit={outfit} />
          <OutfitGenSidebar outfit={outfit} />
          <CloseButton onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

OutfitGenerationModal.propTypes = {
  outfit: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default OutfitGenerationModal;
