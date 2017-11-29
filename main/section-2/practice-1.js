'use strict';

module.exports = function countSameElements(collection) {
var i;
var collection3=new Array();
for(i=0;i<collection.length;){
var count=0;
for(var j=i;j<collection.length;j++){
if(collection[i]==collection[j])
count++;}
collection3.push({
key:collection[i],
count:count})
i+=count;
}
return collection3;
}

