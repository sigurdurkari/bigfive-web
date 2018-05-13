import React from 'react'

export default ({ handleChange, gender }) => (
  <span>
    <p className='question'>
      Kyn
    </p>
    <span className='choiseBox' name='gender' value={gender} onClick={handleChange}>
      <i name='gender' className='material-icons checked-male' value='Male'>{gender === 'Male' ? 'radio_button_checked' : 'radio_button_unchecked'}</i> <label name='gender' value='Male'>Karlkyn</label>
      <i name='gender' className='material-icons checked-female' value='Female'>{gender === 'Female' ? 'radio_button_checked' : 'radio_button_unchecked'}</i> <label name='gender' value='Female'>Kvenkyn</label>
      <i name='gender' className='material-icons checked-other' value='Other'>{gender === 'Other' ? 'radio_button_checked' : 'radio_button_unchecked'}</i> <label name='gender' value='Other'>Annað</label>
    </span>
    <style>
      {`
        .checked-female {
          color: #dfa7e8;
          vertical-align: bottom;
          padding-left: 10px;
        }
        .checked-male {
          color: #a7cfe8;
          vertical-align: bottom;
        }
        .checked-other {
          color: gray;
          vertical-align: bottom;
          padding-left: 10px;
        }
    `}
    </style>
  </span>
)
