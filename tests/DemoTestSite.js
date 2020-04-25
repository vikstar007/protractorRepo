describe ('Demo Calculator', function(){

        it('Addition test', function(){
                
            browser.get('http://juliemr.github.io/protractor-demo/');
            
            element(by.model('first')).sendKeys(27);
            
            element(by.model('second')).sendKeys(20);
            
            element(by.css('[ng-click="doAddition()"]')).click();

            let result = element(by.cssContainingText('.ng-binding', '47'));

            expect(result.getText()).toEqual('47');     

            browser.sleep(3200); 

        }); 

});  