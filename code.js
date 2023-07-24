//1
let sum=0
for(let a=10;a<30;a++){
    if (a%2!=0){
         sum+=a
    } 
    
} 
console.log(sum) 

//2

let ar=[4,6,8,9] 
s=0
for(let i of ar){
    s+=i
} 
console.log(s) 

//3

const ar2=[3,6,7,8] 
sum2=0 
n=0
for(let i of ar2){
    sum2+=i 
    n+=1
}  
let avg=sum2/n
console.log(avg) 