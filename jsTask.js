/* function adder(number)
{
  return function(number2)
  {
    console.log(number, number2)
  }
}

adder(5)(9);


const adder = (number) => (number2) => {
console.log(number, number2) 
}

adder(5)(6) */
// meet.google.com/uiu-jfxz-hap

/* console.log(addDashBetweenEven('025468')) */

// function addDashBetweenEven(number){
// 	var newNumber= number[0];
//   for(let i =1; i< number.length; i++)
//   {
  	
//   if(number[i]%2 === 0)
//   {
//   	if(number[i-1]%2 !==0)
//     {
//     	newNumber += number[i];
//     }
//     else
//     {
//     	newNumber += '-'+number[i];
//     }
  	
//   }
//   else
//   {
//   		newNumber += number[i];
//   }
  
//   }
//   return newNumber;
// }


function addDashBetweenEven(number){
	var newNumber= number[0];
  for(let i =1; i< number.length; i++)
  {
  	
  if(number[i]%2 === 0)
  {
  	// if(number[i-1]%2 !==0)
    // {
    //   newNumber += number.slice(i,i+1)+ ""+number.slice(i+1);
    // }
    // else
    // {
    //    newNumber += number.slice(i,i+1)+ "-"+number.slice(i+1);	
    // }
    
    newNumber += number.slice(0,i)+ "-" +number.slice(i)
  }
  }
  return newNumber;
}



console.log(addDashBetweenEven('025468'))