var up=100,low=1,num=3;
for(i=1;i<=up;i++){
    let res=i**num;
    if ((res>=low) && (res<=up)) {
        console.log(i);
        console.log(res);
    }
}
