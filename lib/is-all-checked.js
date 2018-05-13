'use strict'

import config from '../config'

module.exports = (radios, from, to) => {
  const currentQuestions = radios.slice(from, to+1)
  return Object.keys(currentQuestions).length === config.defaultLimit
}
