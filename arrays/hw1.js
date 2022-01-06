ser=[3,4,5,7,8,9];
i=0;
var op=[];
for(let elements of ser){
    if (elements<=5)
     {
     elements=elements-1; 
     op.push(elements)  ;
    }
    else if (elements>5) {
        elements=elements+1;
        op.push(elements);
    }
}console.log(op);