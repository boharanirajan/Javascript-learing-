// function addTwoNummber(num1, num2){
//    console.log( num1+num2);
// }
// addTwoNummber(3,5)

function addTwoNummber(num1, num2){
    let result=num1+num2;
    return result;
 }
  const result=addTwoNummber(3,5)
  //console.log("Result:",result);

  function loginUserMessage(username){
    return `${username} just login in`;
  }
  //console.log(loginUserMessage("nirjan"))


  function calculateCartPrice(val1,val2,...num1){
     return num1
  }
  //console.log(calculateCartPrice(200,300,400,700))

  const user={
    username:"nirjan",
    price:333
  }
  function handleObject(anyobject)
  {
    console.log(`${anyobject.username} and price is ${anyobject.price}`)
  }
  handleObject(user)

  const mynewArray=[100,200,300,500,600];
  function returnsecondvalue(getArray){
    return getArray[2];
  }
  console.log(returnsecondvalue([200,333,44,44]))