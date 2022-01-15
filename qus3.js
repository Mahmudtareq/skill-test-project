var baseSKU = 'kf1097'
var variationOptions = [
{
name: 'size',
options: [40, 41, 42, 43]
},
{
name: 'color',
options: ['black', 'brown', 'chocolate']
}
]
function prepareCode(base, options) {
    for (let i = 0; i < options.length; i++) {
    const res = base+ "-" + options[i]["options"][i] +"-"+ options[i]["options"][i];
    console.log(res);
    
    // console.log(base)
    // console.log(options[1]["options"][0])
    // console.log(options[0]["options"][0])

    }
    // const val = base+ "-" + options[1]["options"][0] +"-"+ options[0]["options"][0];
    // console.log(val);
    
}
prepareCode(baseSKU, variationOptions)

// console.log(baseSKU);
// function prepareCode(baseSKU , )

