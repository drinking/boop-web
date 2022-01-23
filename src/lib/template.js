var METHODS = {
  'Template': {
    func: function(text) {

      var array = text.split('\n')
      if (array.length < 2) {
        return ""
      }

      var result = []
      for (var i = 1; i < array.length; i++) {
        let params = array[i].split(" ");
        var template = array[0];
        for (var j = params.length - 1; j >= 0; j--) {
            template = template.replaceAll("$"+j,params[j])
        }
        result.push(template)
      }

      return result.join('\n');
    },
    usage: "params: write template in the first line and $i represent the ith column like $0 + $1 = $2 which will generate a equation sentense."
  }
}

export {
  METHODS
}