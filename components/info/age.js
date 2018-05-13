import React from 'react'

export default ({ handleChange, age }) => (
  <span>
    <p className='question'>
      Aldur
    </p>
    <input name='age' onChange={handleChange} className='age' type='text' placeholder='Aldur' pattern='\d*' maxLength='3' min='10' max='200' />
    <style>
      {`
        .age {
          font-size: 24px;
          background-color: #fff;
          color: #828282;
          width: 100px;
          text-align: center;
        }
      `}
    </style>
  </span>
)
