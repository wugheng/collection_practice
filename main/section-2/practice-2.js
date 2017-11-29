'use strict';

module.exports = function countSameElements(collection) {
var i;
var collection3=new Array();
for(i=0;i<collection.length-1;){
var count=0;
for(var j=i;j<collection.length-1;j++){
if(collection[i]==collection[j])
count++;}
collection3.push({
key:collection[i],
count:count})
i+=count;
}
collection3.push({
key:collection[i][0],
count:collection[i][2]-'0'})
return collection3;
}
