//first function, label even or odd

let num_1 = 1
let num_2 = 1


function value(num_1,num_2){
  
  for ( let i = num_1; i <= num_2; i++ )
{
  if ( i % 2 !== 0 )
  {
    console.log( i + " Odd" );
  }
  else if ( i % 2 === 0) 
  {
    console.log(i+ " Even" );
  }
  else
  {
    console.log(i);
  }
}
}


value(1,10)
