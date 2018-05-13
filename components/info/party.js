import React from 'react'

export default ({ handleChange, politicalParty }) => (
  <span className='choiseBox'>
    {new Date().getTime() < 1509181200000 ?
      <p className='question'>Hvaða stjórnmálaflokk hyggst þú kjósa í komandi alþingiskosningum?</p>
      :
      <p className='question'>
        {new Date().getTime() < 1509228000000 ?
          'Hvaða stjórnmálaflokk hyggst þú kjósa/kaust þú í alþingiskosningunum sem eru í dag? Minni alla á að mæta á kjörstað!' 
          : 
          'Hvaða stjórnmálaflokk kaust þú í seinustu alþingiskosningum?'
        }
      </p>
    }
    <select name='politicalParty' className='countries' value={politicalParty} onChange={handleChange}>
    	<option value="none">Óviss og/eða vil ekki svara</option>
    	<option value="A">Björt framtíð</option>
      <option value="F">Flokkur fólksins</option>
      <option value="B">Framsóknarflokkurinn</option>
      <option value="M">Miðflokkurinn</option>
      <option value="P">Píratar</option>
      <option value="S">Samfylkingin</option>
      <option value="D">Sjálfstæðisflokkurinn</option>
      <option value="V">Vinstrihreyfingin - grænt framboð</option>
      <option value="C">Viðreisn</option>
      <option value="other">Annað</option>
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