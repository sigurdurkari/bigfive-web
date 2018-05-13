'use strict'

import config from '../config'

module.exports = (radios, from, questions) => {
  for (var i = 0; i<questions.length; i++) {
  	if ( typeof radios[from+i] === 'undefined' || radios[from+i] == null ) {
	  const {text, domain, facet} = questions[i];
	  radios[from + i] = {score: 0, domain: domain, question: text, facet: facet};
	}
  }
  return radios;
}
