import React from 'react'

export default ({ handleChange, salary }) => (
  <span>
    <p className='question'>
      Meðaltekjur á mánuði
    </p>
    <input name='salary' onChange={handleChange} className='salary' type='number' placeholder='Tekjur' pattern='\d*' min='0' step='1' />
    <style>
      {`
        .salary {
          font-size: 24px;
          background-color: #fff;
          color: #828282;
          width: 200px;
          text-align: center;
        }
      `}
    </style>
  </span>
)
