'use strict';

module.exports = function countSameElements(collection) {
    var arr=[];
    for(var i=0;i<collection.length;){
        var pos=0;
        var count=0;
        if(collection[i].length===1){
        for(var j=i;j<collection.length;j++){
            if(collection[j].length===1){
                if(collection[i]===collection[j]){
                    pos++;
                    count++;
                }
            }
            if(collection[j].length===3){
                if(collection[j][0]===collection[i]){
                    pos++;
                    count+=collection[j][2]-'0';
                }
            }
            if(collection[j].length===4){
                if(collection[i]===collection[j][0]){
                    pos++;
                    count+=collection[j][2]-'0';
                }
            }
            if(collection[j].length===5){
                if(collection[i]===collection[j][0]){
                    pos++;
                    count+=((collection[j][2]-'0')*10+(collection[j][3]-'0'));
                }
            }
        }
    }
    else {
        pos++;
        count=collection[i][2]-'0';
    }
        if(collection[i].length==1){
            arr.push({
                name:collection[i],
                summary:count})
                i+=pos;
        }
        else{
            arr.push({
                name:collection[i][0],
                summary:count})
                i+=pos;
        }
    }
        return arr;
}
