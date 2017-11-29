'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
var i;
var j;
var k=0;
var collectionC=new Array();
for(i=0;i<collectionA.length;i++)
for(j=0;j<objectB.value.length;j++){
if(collectionA[i]==objectB.value[j]){
collectionC[k]=collectionA[i];
k++;}
}
  return collectionC;
}
