'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
var i;
var collectionC=new Array();
for(i=0;i<collectionA.length;){
var count=0;
for(var j=i;j<collectionA.length;j++){
if(collectionA[i]==collectionA[j])
count++;}
collectionC.push({
key:collectionA[i],
count:count})
i+=count;
}
for(i=0;i<collectionC.length;i++)
for(j=0;j<objectB.value.length;j++){
if(collectionC[i].key==objectB.value[j]&&collectionC[i].count>=3)
collectionC[i].count=collectionC[i].count-Math.floor(collectionC[i].count/3);
}
return collectionC;
}
