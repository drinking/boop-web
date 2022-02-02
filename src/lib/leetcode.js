var minDistance = function(word1, word2) {

    var rlen = word2.length+1
    var clen = word1.length+1
    let dp = new Array(rlen).fill(Number.MAX_SAFE_INTEGER).map(_ => new Array(clen).fill(Number.MAX_SAFE_INTEGER))

    for (var i = 0; i < rlen; i++) {
        dp[i][0] = i;
    }

    for (var j = 0; j < clen; j++) {
        dp[0][j] = j;
    }

    for (var i = 1; i < rlen; i++) {
        for (var j = 1; j < clen; j++) {

            var del = 1 + dp[i-1][j];

            var add = 1 + dp[i][j-1];
            var rep = 1 + dp[i-1][j-1];

            var min = Math.min(Math.min(del, add),rep);

            if(word2[i-1] === word1[j-1]) {
                dp[i][j] = Math.min(min, dp[i-1][j-1]);
            }else {
                dp[i][j] = min;
            }

        }
    }

    return dp[rlen-1][clen-1]

};


var METHODS = {
  'EditDistance': {
    func: function(text) {
    	var array = text.split('\n');
    	if(array.length != 2) {
    		return "Need two lines of word"
    	}

    	return "Edit Distance is :" + minDistance(array[0],array[1]);

    },
    usage: "Count the minimum edit distane of two words"
  }
}

export {
  METHODS
}