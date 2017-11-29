'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
var i;
var collection3=new Array();
for(i=0;i<collectionA.length-1;){
var count=0;
for(var j=i;j<collectionA.length-1;j++){
if(collectionA[i]==collectionA[j])
count++;}
collection3.push({
key:collectionA[i],
count:count})
i+=count;
}
collection3.push({
key:collectionA[i][0],
count:collectionA[i][2]-'0'})
for(i=0;i<collection3.length;i++)
for(j=0;j<objectB.value.length;j++){
if(collection3[i].key==objectB.value[j]&&collection3[i].count>=3)
collection3[i].count=collection3[i].count-Math.floor(collection3[i].count/3);
}
return collection3;
}
