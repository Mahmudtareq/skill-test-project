// qus 1
function add(a) {
return function(b){
return a + b;
    }
}
const res = add(5)(98)
// const res = add(5, 98);
console.log(res)