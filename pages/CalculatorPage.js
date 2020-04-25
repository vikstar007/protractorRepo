let CalculatorPage = function(){
    
        let firstNumber = element(by.model('first')) ;
            
        let secondNumber = element(by.model('second')) ;
    
        let goButton = element(by.css('[ng-click="doAddition()"]')) ;

        this.goToPage = function (url){
            browser.get(url);
        }

        this.enterFirstNum = function(firstNum){
            firstNumber.sendKeys(firstNum); 
        }

        this.enterSecNum = function(secNum){
            secondNumber.sendKeys(secNum); 
        }

        this.clickGo = function(){
            goButton.click(); 
            browser.sleep(2000); 

        }

        this.verifyResult = function (result){

            
            let output = element(by.cssContainingText('.ng-binding', result));
            console.log(output); 
            expect(output.getText()).toEqual(result);   
        }
}; 

module.exports = new CalculatorPage();

