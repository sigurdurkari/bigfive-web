import React from 'react'

export default ({ switchLanguage, selectedLanguage, languages }) => (
  <div>
    {
      languages.map(l =>
        <span key={l} name={l} onClick={switchLanguage} className={selectedLanguage === l ? 'languageSelected' : 'language'}>
          {l}
        </span>
      )
    }
    <style>
      {`
        .language {
          padding: 5px;
          margin-left: 4px;
          color: #fff;
        }
        .languageSelected {
          font-weight: bold;
          padding: 2px;
          margin-left: 4px;
          border-radius: 10px;
          padding: 5px;
          background-color: #fff;
          color: #fff;
        }
      `}
    </style>
  </div>
)
