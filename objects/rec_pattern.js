var text="ABAAC";
var wl={};
var op=[]
// for(let count of text){
//     if (count in wl) {
//      wl[count]+=1; 
//      console.log("first recursive character is" ,count);  
//      break;
//     }
//     else{
//         wl[count]=1;
//     }
// }
text.split("").map(char=>char in wl?op.push(char):wl[char]=1)
console.log(op[0]);
