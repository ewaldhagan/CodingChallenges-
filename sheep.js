//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    var string = '';
    for (i = 1; i < num + 1; i++) {
      string += i + ' sheep...'
    }
    return string;
    }