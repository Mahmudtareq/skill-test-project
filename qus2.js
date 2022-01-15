const myFriendsIncome = [
{
"name": 'Rashid',
"income": 3500
},
{
"name": "Rahat",
"income": 2450
},
{
"name": "You",
"income": 9500
},
{
"name": "Rofik",
"income": 7480
}
]

const arr = [];
// console.log(myFriendsIncome)
var result = myFriendsIncome.map((x) => {
    if (x.income < 9500) {
        const arr = arr.push('');
        return arr;
    }
    else {
        return 0;
        
    }
});
console.log(arr);