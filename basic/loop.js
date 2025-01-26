

// for(let i=0;i<10; i++)
// {
//     console.log(`Outer loop value ${i}`);  
//     for(let j=1;  i<=10;i++)
//     {
//       console.log(`Inner loop value:${j}`);
//     }
// }

// break and continue
// for(let i=0;i<20; i++)
// {
//     if(i==5){
//         continue;
//     }
//     console.log(`value of i is ${i}`);
// }



//  array type lool for of 
//["","",""]

const arr =[1,2,3,4,5,6];
for(const num of arr){
   // console.log(num);

}

const greetings="Hello wrold";

for (const greet of greetings)
{
//console.log(`Each char is ${greet}`);
}


// Maps 
// const map=new Map()
// map.set('N','Nepal');
// map.set('UAS','United states of America')
// console.log(map);

// for(const [key, value] of map)
// {
//     console.log(key,':-',value);
// }
const  myobj={
    js:'javascript',
    cpp:'C++',
    rb:'Ruby',
    swift:"swift by apple"
}

for(const key in myobj)
{
//console.log(myobj[key]);
}
// 
// const programming=["js","rb","py","java"];

// for(const key in programming)
// {
//     console.log(key);
// }

