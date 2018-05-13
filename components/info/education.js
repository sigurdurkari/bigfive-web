import React from 'react'

export default ({ handleChange, education }) => (
  <span className='choiseBox'>
    <p className='question'>
      Hvert er hæsta menntunarstig sem þú hefur lokið?
    </p>
    <select name='education' className='countries' value={education} onChange={handleChange}>
    	<option value="G">Grunnskólapróf</option>
    	<option value="F">Framhaldsskólapróf</option>
    	<option value="I">Iðnmenntun</option>
    	<option value="D">Díplómanám</option>
    	<option value="GH">Grunnám á háskólastigi</option>
    	<option value="FH">Framhaldsnám á háskólastigi</option>
    	<option value="DH">Doktorsnám á háskólastigi</option>
    </select>
    <style>
      {`
        .countries {
          font-size: 24px;
          background-color: #fff;
          color: #828282;
          width: 400px;
        }
      `}
    </style>
  </span>
)