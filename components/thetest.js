import React from 'react'
import Router from 'next/router'
import config from '../config'
import getData from '../lib/get-data'
import postData from '../lib/post-data'
import isAllChecked from '../lib/is-all-checked'
import appendToRadios from '../lib/append-to-radios'
import Progressbar from './progressbar'
import Questions from './questions'
import Languagebar from './languagebar'
import Loading from './loading'
import Navbuttons from './navbuttons'
import TimerExample from './timer'
import PersonInfo from './info'
import StartingPage from './information'

export default class TheTest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      choises: [],
      questions: [],
      languages: ['is'],
      radios: [],
      lang: config.defaultLanguage,
      choosenTest: '50',
      submitDisabled: false,
      now: Date.now(),
      age: '',
      gender: 'Male',
      salary: '',
      education: '',
      politicalParty: '',
      country: 'GB',
      buttonSubmitDisabled: false,
      hideMain: true,
      percent: 0,
      page: 1,
      from: 1,
      to: 5,
      totalQuestions: 50,
      started: false
    }
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.switchLanguage = this.switchLanguage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.buttonSubmit = this.buttonSubmit.bind(this)
    this.switchTest = this.switchTest.bind(this)
    this.startTest = this.startTest.bind(this)
  }

  async componentDidMount () {
    const ipCountry = await getData(`${config.ipCountryUrl}${this.props.ip}`)
    const country = ipCountry.countryCode || 'IS'
    const data = await getData(`${config.dataUrl}?lang=${this.state.lang}&testType=${this.state.choosenTest}&limit=${config.defaultLimit}`)
    var radioStore = appendToRadios(this.state.radios, data.from, data.questions);
    this.setState({ ...data, loading: false, country: country, radios: radioStore })
    console.log(this.state.radios);
  }

  async handleChange (e) {
    const name = e.target.name || e.target.getAttribute('name')
    const value = e.target.value || e.target.getAttribute('value')
    await this.setState({ [name]: value })
  }

  buttonSubmit (e) {
    e.preventDefault()
    window.scrollTo(0, 0)
    this.setState({ hideMain: false, now: Date.now() })
  }

  handleRadioChange (e) {
    let radioStore = this.state.radios
    const selectedName = parseInt(e.currentTarget.getAttribute('name'))
    const selectedValue = parseInt(e.currentTarget.getAttribute('value'))
    const {text, domain, facet} = this.state.questions.find(c => c.id === selectedName)
    radioStore[selectedName] = {score: selectedValue, domain: domain, question: text, facet: facet}
    this.setState({radios: radioStore})
    const percent = Math.round(this.countSelected(radioStore) / parseInt(this.state.totalQuestions) * 100)
    const allChecked = isAllChecked(radioStore, this.state.from, this.state.to)
    this.setState({percent: percent})
  }

  countSelected(radioStore) {
    var count = 0;
    for (var i=0; i<radioStore.length; i++){
      if (typeof radioStore[i] !== 'undefined' && radioStore[i].score > 0) count++;
    }
    return count;
  }

  async switchTest (e) {
    const selectedTest = e.target.getAttribute('id')
    const data = await getData(`${config.dataUrl}?page=1&lang=en&testType=${selectedTest}&limit=${config.defaultLimit}`)
    this.setState({ ...data, lang: 'en', choosenTest: selectedTest })
  }

  async switchLanguage (e) {
    const lang = e.target.getAttribute('name')
    const data = await getData(`${config.dataUrl}?page=${this.state.page}&lang=${lang}&testType=${this.state.choosenTest}&limit=${config.defaultLimit}`)
    this.setState({ ...data, lang: lang })
  }

  async prevPage (e) {
    if (this.state.previous && this.state.previous >= 0) {
      const data = await getData(`${config.dataUrl}?page=${this.state.previous}&lang=${this.state.lang}&testType=${this.state.choosenTest}&limit=${config.defaultLimit}`)
      this.setState({ ...data, submitDisabled: false, page: this.state.previous, previous: this.state.previous-1 })
    }
  }

  async handleSubmit (e) {
    e.preventDefault()
    var pagenr = this.state.page;
    if (pagenr * parseInt(config.defaultLimit) < this.state.info.totalQuestions) {
      this.setState({page: pagenr + 1})
      const data = await getData(`${config.dataUrl}?page=${pagenr+1}&lang=${this.state.lang}&testType=${this.state.choosenTest}&limit=${config.defaultLimit}`)
      const allChecked = isAllChecked(this.state.radios, data.from, data.to)
      var radioStore = this.state.radios;
      if ( !allChecked ) {
        radioStore = appendToRadios(radioStore, data.from, data.questions);
      }
      this.setState({ ...data, previous: pagenr, radios: radioStore })
      console.log(this.state.radios);
      window.scrollTo(0, 0) // Scrolls to top of page
    } else {
      this.setState({ submitDisabled: true, loading: true, hideMain: true })
      window.scrollTo(0, 0)
      this.state.radios.shift()
      console.log(this.state.radios);
      const answers = {
        timeElapsed: Math.round((Date.now() - this.state.now) / 1000),
        dateStamp: Date.now(),
        age: this.state.age,
        country: this.state.country,
        gender: this.state.gender,
        salary: this.state.salary,
        education: this.state.education,
        politicalParty: this.state.politicalParty,
        userAgent: this.props.userAgent,
        lang: this.state.lang,
        test: this.state.info.test,
        totalQuestions: this.state.totalQuestions,
        answers: this.state.radios
      }
      // console.log(JSON.stringify(answers, null, 2))
      const postRes = await postData(config.generatorUrl, answers)
      // console.log(postRes.id)
      Router.push(`/results?id=${postRes.id}`)
    }
  }

  async startTest () {
    this.setState({started: true});
  }

  render () {
    return (
      <div>
      {this.state.started ?
        <div>
          <Loading loading={this.state.loading} />
          <PersonInfo age={this.state.age} gender={this.state.gender} education={this.state.education} salary={this.state.salary} politicalParty={this.state.politicalParty} buttonSubmitDisabled={this.state.buttonSubmitDisabled} handleChange={this.handleChange} buttonSubmit={this.buttonSubmit} hideMain={this.state.hideMain} loading={this.state.loading} country={this.state.country} switchTest={this.switchTest} selectedTest={this.state.choosenTest} />
          <div id='main' style={{display: this.state.hideMain ? 'none' : 'block'}} >
            <form onSubmit={this.handleSubmit}>
              <Progressbar progress={this.state.percent} />
              {
                  this.state.questions.map(q =>
                    <Questions key={'Q' + q.id} {...q} radioSelected={this.state.radios} handleRadioChange={this.handleRadioChange} />
                  )
                }
              <Navbuttons prevPage={this.prevPage} previous={this.state.previous} submitDisabled={this.state.submitDisabled} />
              <style>
                {`
                  .choiseBox:hover {
                    cursor: pointer;
                  }
                  .checked-1 {
                    color: #e48585;
                  }
                  .checked-2 {
                    color: #e0b8b8;
                  }
                  .checked-3 {
                    color: #d3d898;
                  }
                  .checked-4 {
                    color: #bddebe;
                  }
                  .checked-5 {
                    color: #94d695;
                  }
                  .timer {
                    float: right;
                  }
                `}
              </style>
            </form>
          </div>
        </div>
      :
        <StartingPage start={this.startTest} />
      }
      </div>
    )
  }
}
