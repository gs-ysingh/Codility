function solution() {
    var maxDepth = -1;
    $('ul, ol').each(function (item) {
        var current = $(this);
        var parent = current;
        
        var c = 1;
        while (1) {
            var parent = $(parent).parent();
            if (parent[0].tagName == 'BODY') {
                break;
            }
            if (parent[0].tagName == 'UL' || parent[0].tagName == 'OL') {
                c++;
            }
        }
        if (c > maxDepth) {
            maxDepth = c;
        }
    });

    return maxDepth;
}

console.log(solution());