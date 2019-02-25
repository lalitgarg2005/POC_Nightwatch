//import login from 'pages/login.js';
//var login=require('pages/login.js');
module.exports = {
    tags: ['google'],
    before : function(browser) {
        console.log('Setting up...');
      },
    
      after : function(browser) {
        console.log('Closing down...');
      },
  'step one: navigate to Google' : function (client) {
    const page = client.page.login();

    //console.log("Name " +browser);
    //page.navigate()
    client
      .url('https://www.google.com')
      //.expect.element('body').to.be.visible
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      //.assert.visible(searchItem)
      //.setValue('input[type=text]', 'nightwatch')
      .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      .pause(1000)
      //.assert.containsText('#main', 'Night watch')
      .end();
  }  
};
/*
module.exports = {
    'Demo test' : function (browser) {
        browser
            .url('https://google.com')
            .waitForElementVisible('body', 1000)
            .pause(5000)
            .end();
    }
}
*/