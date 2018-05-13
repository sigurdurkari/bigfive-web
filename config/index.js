'use strict'

module.exports = {
  dataUrl: process.env.DATA_URL || 'https://micro-bigfive-questions-povgkbxvth.now.sh/questions',
  generatorUrl: process.env.GENERATOR_URL || 'https://micro-bigfive-generator-ratkjmnozm.now.sh',
  defaultLanguage: process.env.DEFAULT_LANG || 'is',
  defaultLimit: parseInt(process.env.DEFAULT_LIMIT) || 5,
  defaultTest: process.env.DEFAULT_TEST || '120',
  ipCountryUrl: process.env.IP_COUNTRY_URL || 'https://api.ip2country.info/ip?'
}
