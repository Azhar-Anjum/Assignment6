//Print the sum of all the multiples of 3 from 0 to given limit
var limit=7;
var sum=0;
while(limit>0){
  if(limit%3==0){
   sum=sum+limit;
    
  }
  limit--;
}
console.log(sum);
