/**
 * Created by YSingh on 30/12/16.
 */

function solution(arr) {
    var obj = {};
    for(var i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = 1;
        }
    }
    var result = [];
    for(var key in obj) {
        result.push(key);
    }

    return result;
}

