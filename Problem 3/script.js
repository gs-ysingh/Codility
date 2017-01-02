/**
 * Created by YSingh on 30/12/16.
 */

function solution(N, S, T) {
    var marks = T.split(" ");
    var spaces = S.split(",");
    var current;
    var arr = [];
    var hit = 0;
    var sunk = 0;
    var flag = 0;
    var final = [];
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    for(var i = 1; i <= N; i++) {
        for(var j = 1; j <= N; j++) {
            final.push(i + alphabet[j - 1]);
        }
    }

    for(var i = 0; i < spaces.length; i++) {
        current = spaces[i];
        arr = getPoints(spaces[i], final, alphabet);
        flag = 0;
        for(var j = 0; j < arr.length; j++) {
            if(marks.indexOf(arr[j]) == -1) {
                hit++;
                flag = 1;
                break;
            }
        }
        if(!flag) {
            sunk++;
        }
    }

    return hit + "," + sunk;
}

function getPoints(val, final, alphabet) {
    var values = val.split(" ");
    var x = values[0];
    var y = values[1];
    var result = [];
    for(var i = 0; i < final.length; i++) {
        if(parseInt(final[i].charAt(0)) >= parseInt(x.charAt(0))
            && parseInt(final[i].charAt(0)) <= parseInt(y.charAt(0))
            && alphabet.indexOf(final[i].charAt(1)) >=  alphabet.indexOf(x.charAt(1))
            && alphabet.indexOf(final[i].charAt(1)) <=  alphabet.indexOf(y.charAt(1))) {
            result.push(final[i]);
        }
    }
    return result;
}

var S = "1B 2C,2D 4D";
var T = "2B 2D 3D 4D 4A";
var N = 4;
console.log(solution(N, S, T))