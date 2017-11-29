'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
var i=0;
var j=0;
var k=0;
var collectionC=new Array();
for(i=0;i<=8;i++)
for(j=0;j<=3;j++){
if(collectionA[i]==collectionB[j]){
collectionC[k]=collectionA[i];
k++;
}
}
  return collectionC;
}
