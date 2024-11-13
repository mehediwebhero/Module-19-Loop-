let i=10,sum=0;
for(i=0;i<=10;i++){
    console.log("%d",i);
    if(i%2==0){
        console.log("even number is",i)
        sum=sum+i;
        console.log("even summation number is",sum)
    }
    else{
        console.log("odd number is",i)
    }
}