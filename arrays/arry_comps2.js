 var arr1=[10,20,30,40,50,60,70,80,90,100,110]
 var arr2=[11,20,30,41,51,60,70,80,90,100,110]
 let p1=0,p2=0
 var count=0;
 while (p1<arr1.length&&p2<arr2.length) {
     if (arr1[p1]==arr2[p2]) {
         console.log(`common element is ${arr1[p1]}`);
         p1++;p2++         
     }
     else if (arr1[p1]<arr2[p2]) {
         p1++;
     }
     else if (arr1[p1]>arr2[p2]) {
         p2++;
     }
     count++;
 }console.log(count);