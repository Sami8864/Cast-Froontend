const rules = {
  required: val => !!val || 'Field is required',
  email: val => {
    if (val) {
      return val.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g) || 'Invalid email pattern'
    }
    return true;
  },
  limit_150: val => {
    if (val) {
      return model.value.length <= 150|| 'Invalid email pattern'
    }
    return true;
  },
  pk: val => {
    if (val === null || val2 === '') {
      return 'Please type your ssn';
    } else {
      
    }
    return true;
  }
}

export default rules;