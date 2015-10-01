var validate = require('validate.js');

var constraints = {
  owner: {
    presence: true
  },
  repo: {
    presence: true
  },
  pull: {
    presence: true,
    numericality: {
      onlyInteger: true,
      greaterThan: 0
    }
  },
  line: {
    numericality: {
      onlyInteger: true,
      greaterThan: 0
    }
  }
}

module.exports = function configurationValidator(config) {
  var errors = validate(config, constraints, { format: 'flat' });
  if (errors) {
    throw new Error('Invalid configuration: ' + errors.join(', '));
  }
};
