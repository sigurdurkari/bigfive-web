import React from 'react'
import Tests from './tests'
import TestInfo from './test-info'
import Age from './age'
import Gender from './gender'
import Countries from './countries'
import Salaries from './salaries'
import Education from './education'
import Party from './party'

export default ({ gender, age, country, education, salary, politicalParty, handleChange, buttonSubmitDisabled, buttonSubmit, hideMain, loading, switchTest, selectedTest }) => (
  <div style={{ display: hideMain && !loading ? 'block' : 'none' }}>
    {/*<TestInfo />*/}
    {/*<Tests switchTest={switchTest} selectedTest={selectedTest} />*/}
    <Age handleChange={handleChange} age={age} />
    <Gender handleChange={handleChange} gender={gender} />
    <Countries handleChange={handleChange} country={country} />
    <Education handleChange={handleChange} education={education} />
    <Salaries handleChange={handleChange} salary={salary} />
    <Party handleChange={handleChange} politicalParty={politicalParty} />
    <span>
      <p style={{marginTop: '50px'}}>
        <button className='navButton' onClick={buttonSubmit} disabled={buttonSubmitDisabled}>
          <i className='material-icons' style={{ fontSize: '40px' }}>navigate_next</i>
        </button>
      </p>
    </span>
  </div>
)
