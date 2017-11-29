'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
var i;
var j;
var k=0;
var collectionC=new Array();
for(i=0;i<collectionA.length;i++)
for(j=0;j<collectionB[0].length;j++){
if(collectionA[i]==collectionB[0][j]){
collectionC[k]=collectionA[i];
k++;
}
}
  return collectionC;
}
