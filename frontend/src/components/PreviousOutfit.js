// src/components/PreviousOutfit.js

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './suggestion/PreviousOutfit.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import PreviousOutfitItem from './suggestion/PreviousOutfitItem';
import PreviousOutfitsControls from './suggestion/PreviousOutfitControls';
import PreviousOutfitPreviews from './suggestion/PreviousOutfitPreviews';
import { FaShoppingCart, FaMagic, FaArchive, FaArrowLeft, FaCheckSquare, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom'; 
const PreviousOutfit = ({ outfits, setOutfitSuggestions, userId }) => {
  const history = useHistory(); 
  const [multiSelect, setMultiSelect] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);
  const [currentOutfitIndex, setCurrentOutfitIndex] = useState(0);

  useEffect(() => {
    console.log('Outfits:', outfits);
    setCurrentOutfitIndex(0); // Ensure the most recent outfit is shown first
  }, [outfits]);

  const reversedOutfits = [...outfits].reverse(); // Reverse the outfits array

  const openConfirmationModal = (deleteAll = false) => {
    setDeleteAll(deleteAll);
    setIsModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = async () => {
    closeConfirmationModal();
    try {
      if (deleteAll) {
        await axios.delete(`/outfits/suggestions/all`, { params: { user_id: userId } });
        setOutfitSuggestions([]);
        toast.success("All outfit suggestions deleted successfully.");
      }
      else{
        await axios.delete(`/outfits/suggestions/`, { data: { suggestion_id: multiSelect } });
        setOutfitSuggestions((previousSuggestions) => 
          previousSuggestions.filter((suggestion) => !multiSelect.includes(suggestion.item_id))
        );
      }
      setMultiSelect([]);
    } catch (err) {
      console.error("Failed to delete outfit suggestions:", err);
      toast.error("Failed to delete outfit suggestions.");
    }
  };

  const selectAll = () => {
    setMultiSelect(reversedOutfits.map(outfit => outfit.suggestion_id));
  };

  const unselectAll = () => {
    setMultiSelect([]);
  };

  const handleNextOutfit = () => {
    setCurrentOutfitIndex((prevIndex) => (prevIndex + 1) % reversedOutfits.length);
  };

  const handlePrevOutfit = () => {
    setCurrentOutfitIndex((prevIndex) => (prevIndex - 1 + reversedOutfits.length) % reversedOutfits.length);
  };

  if (!reversedOutfits || reversedOutfits.length === 0) {
    return (
      <div className="previous-outfits-page">
        <p>No previous outfits found.</p>
      </div>
    );
  }

  return (
    <div className="previous-outfits-page">
      <div className="previous-outfits-header">
        <PreviousOutfitsControls
          selectAll={selectAll}
          unselectAll={unselectAll}
          openConfirmationModal={openConfirmationModal}
          multiSelect={multiSelect}
          outfits={reversedOutfits} // Use reversed outfits
        />
      </div>
      <div className="outfit-carousel">
        <PreviousOutfitPreviews
          outfits={reversedOutfits} // Use reversed outfits
          currentOutfitIndex={currentOutfitIndex}
          setCurrentOutfitIndex={setCurrentOutfitIndex}
        />
        <button onClick={handlePrevOutfit} className="carousel-button">{"<"}</button>
        <PreviousOutfitItem
          outfit={reversedOutfits[currentOutfitIndex]} // Use reversed outfits
          isSelected={multiSelect.includes(reversedOutfits[currentOutfitIndex].suggestion_id)}
          onSelect={() => setMultiSelect([...multiSelect, reversedOutfits[currentOutfitIndex].suggestion_id])}
          onUnselect={() => setMultiSelect(multiSelect.filter(id => id !== reversedOutfits[currentOutfitIndex].suggestion_id))}
        />
        <button onClick={handleNextOutfit} className="carousel-button">{">"}</button>
      </div>
      {isModalOpen && (
        <div className="previous-outfits-modal-overlay">
          <div className="previous-outfits-modal-content">
            <p className="modal-message">
              Are you sure you want to delete {deleteAll ? 'all' : 'selected'} outfit suggestions? This action cannot be undone.
            </p>
            <div className="modal-buttons">
              <button onClick={confirmDelete} className="confirm-button">
                Yes
              </button>
              <button onClick={closeConfirmationModal} className="cancel-button">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

PreviousOutfit.propTypes = {
  outfits: PropTypes.array.isRequired,
  setOutfitSuggestions: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

export default PreviousOutfit;
