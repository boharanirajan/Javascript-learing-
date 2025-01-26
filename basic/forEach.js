const coding=["js","ruby","java","python","cpp"];
coding.forEach(function (item){
  //  console.log(item);
});
arr=[1,2,3,4,5,6,7,8]
coding.forEach((item, index, arr) => {
   // console.log(item, index, arr);
});

// const myCoding=[
//     {
//         language:"javascript",
//         languageFileName:"js"
//     },
//     {
//         language:"java",
//         languageFileName:"java"
//     },
//     {
//         language:"python",
//         languageFileName:"py"
//     },
// ];
// myCoding.forEach((item)=>{
//    // console.log(item.language);
// })


// // const values=coding.forEach((item)=>{
// //     console.log(item);
// // })

// const myNums=[1,2,3,4,5,6,7];
// const newnums=myNums.filter((num)=>{
//    return num>4
// })
// //console.log(newnums);

// const newnums1=[];
// myNums.forEach((num)=>{
//     if(num> 4)
//     {
//     newnums1.push(num);
//     }
// })
// console.log(newnums1);


// const books=[
//     {
//         title:'Book one',genre:'Non-fiction',publish:2011,edition:1980
//     },
//     {
//         title:'Book two',genre:'fiction',publish:2012,edition:1989
//     },
//     {
//         title:'Book three',genre:'Science',publish:2013,edition:1990
//     },
// ];
// let userBooks=books.filter((bk)=>bk.genre==='Science')

// userBooks=books.filter((bk)=>{
//     return bk.publish>=2000 && bk.genre==='Science'
// })

// console.log(userBooks)

// map in array

const myNumber=[1,2,3,4,5,6,7,8,9];
//const newnums=myNumber.map((num)=>
    // {  return num+10
    // })
//console.log(newnums);

// const newnums=myNumber.map((num)=>num *10)
//                       .map((num)=>num+1)
//                       .filter((num)=> num>=40);
    
//     console.log(newnums);


// reduce mathod

const mynums=[1,2,3,4,5];

// const total=mynums.reduce(function(acc,currVal){
//     console.log(`acc ${acc} and currVal ${currVal}`);
//     return acc+currVal;
// },0)
// console.log(total);

const myTotal=mynums.reduce((acc, currVal)=>acc+currVal,0);
console.log(myTotal);

const shoppingCard=[
    {
        itemName:"js course",
        price:2999,
    },{
        itemName:"java course",
        price:3009,
    },
    {
        itemName:"Python course",
        price:4099,
    }
]
 const price2=shoppingCard.reduce((acc,item)=>acc+item.price,0)
 console.log(price2)