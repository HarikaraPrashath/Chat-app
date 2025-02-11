import React from 'react';

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  const handleGenderChange = (gender) => {
    // Toggle gender selection
    onCheckboxChange(gender === selectedGender ? '' : gender);
  };

  return (
    <div className='flex'>
      <div className="form-control">
        <label
          htmlFor="male"
          className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}
        >
          <span className='label-text'>Male</span>
          <input
            type="checkbox"
            className='checkbox border-slate-900'
            checked={selectedGender === "male"}
            onChange={() => handleGenderChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          htmlFor="female"
          className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}
        >
          <span className='label-text'>Female</span>
          <input
            type="checkbox"
            className='checkbox border-slate-900'
            checked={selectedGender === "female"}
            onChange={() => handleGenderChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
