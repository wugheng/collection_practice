'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
var i;
var j;
var k=0;
var collectionC=new Array();
for(i=0;i<=8;i++)
for(j=0;j<=3;j++){
if(collectionA[i].key==objectB.value[j]){
collectionC[k]=collectionA[i].key;
k++;}
}
  return collectionC;
}
