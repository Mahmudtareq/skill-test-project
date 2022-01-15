function tokenReducer() {
var initialToken = 3
    function reduce() {
        initialToken--
        return initialToken >= 0 ? console.log(`You have ${initialToken}
        token remaining`) : console.log(`You have no token to use`);
        
    }
  return reduce
}
var token = tokenReducer();

function productPurchasing(){
console.log('You are purchasing a new product.')
    token();
}
productPurchasing()
productPurchasing()
productPurchasing()
productPurchasing()
productPurchasing()