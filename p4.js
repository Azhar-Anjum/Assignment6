//Print the average of even numbers from 1 to 100 (both included)
var num=100;
var sum=0;
var count=0;
while(num>=1){
  if(num%2== 0){
  sum=sum + num;
  count++;
}
num--;
}
console.log(sum/count);