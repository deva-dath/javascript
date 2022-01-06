var row=10;
for(i=0;i<=row;i++){
    let str="";
    for(k=1;k<=(row-i);k++){
        str+=" ";
    }
    for(j=1;j<i;j++){
        str+="* ";
    }
    console.log(str);
}