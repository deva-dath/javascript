var text="hello hai welcome bye";
var wc={};
text.split(" ").map(word=>word in wc?wc[word]+=1:wc[word]=1);
console.log(wc);