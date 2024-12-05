import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaCheck, FaTimes, FaTrash } from 'react-icons/fa'; // Import the icons

const WardrobeControls = ({
  openItemModal,
  openOutfitModal,
  selectAll,
  unselectAll,
  filter,
  setFilter,
  weatherFilter,
  setWeatherFilter,
  deleteSelectedItems,
  multiSelect
}) => {
  const isDisabled = multiSelect.length === 0;

  return (
    <div className='on-top'>
      <div className='left-controls'>
        <button onClick={() => openItemModal(null)} className='add-button'>
          <FaPlus /> Add Item
        </button>
        {/*<button onClick={() => openOutfitModal(null)} className={`create-button ${isDisabled ? 'greyed-out' : ''}`} disabled={isDisabled}>Create Outfit</button>*/}
        {/* This button ^ is commented out unless the custom outfits are added back */}
        <button onClick={selectAll} className='select-button'>
          <FaCheck /> Select All
        </button>
        {!isDisabled && (
          <>
            <button onClick={unselectAll} className='unselect-button'>
              <FaTimes /> Unselect All
            </button>
            <button onClick={deleteSelectedItems} className='delete-button'>
              <FaTrash /> Delete Selected
            </button>
          </>
        )}
      </div>
      <div className='filters'>
        <input 
          type="text" 
          placeholder="Filter by clothing type" 
          className="type-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select 
          value={weatherFilter} 
          onChange={(e) => setWeatherFilter(e.target.value)}
          className="weather-filter"
        >
          <option value="">Select weather filter</option>
          <option value="All Year Around">All Year Around</option>
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
          <option value="Rainy">Rainy</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
};

WardrobeControls.propTypes = {
  openItemModal: PropTypes.func.isRequired,
  openOutfitModal: PropTypes.func.isRequired,
  selectAll: PropTypes.func.isRequired,
  unselectAll: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  weatherFilter: PropTypes.string.isRequired,
  setWeatherFilter: PropTypes.func.isRequired,
  deleteSelectedItems: PropTypes.func.isRequired,
  multiSelect: PropTypes.array.isRequired,
};

export default WardrobeControls;