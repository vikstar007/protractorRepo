let homePage = require('../pages/CalculatorPage'); 

describe ('Demo Calculator Page Test', function(){
    it('Addition test', function(){
                
    homePage.goToPage('http://juliemr.github.io/protractor-demo/'); 

    homePage.enterFirstNum('27'); 
    homePage.enterSecNum('33'); 
    homePage.clickGo(); 
    homePage.verifyResult('60'); 

    //homePage.sleep(3000); 
});

});
