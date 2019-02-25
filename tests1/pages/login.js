module.exports = {
    url: function () {
      return "https://google.com";//this.api.launch_url + '/login';
    },
    elements: {
        searchItem: 'input[type=text]',
      emailField: 'input[name="email"]',
      passwordField: 'input[name="password"]',
      submitButton: 'button[type="submit"]'
    }
  };