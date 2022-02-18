const METHODS = {

  'PickRows': {
    func: function(text,argument) {
      var numbers = argument.match(/\d+/g).map(Number);
      if (numbers.length < 2) {
        return ""
      }

      const row = numbers[0]
      const total = numbers[1]

      var result = []
      var array = text.replace(/\s\s+/g, ' ').split('\n')
      for (var i = 0; i < array.length; i++) {
        if ((i+1) % total == row) {
          result.push(array[i])
        }
      }

      return result.join('\n');
    },
    usage: "Pick the ith row from multi rows and repeat after n rows. params at first line: i/n",
    argument : true
  },

  'PickColumns': {
    func: function(text,argument) {
      var array = text.replace(/\s\s+/g, ' ').split('\n')
      const indices = argument.split(',').map(Number)
      var result = []
      for (var i = 0; i < array.length; i++) {
        var t = array[i];

        var line = ''
        const cols = t.split(' ')
        for (var j = 0; j < indices.length; j++) {
          line += cols[indices[j]-1] + ' '
        }
        result.push(line);
      }

      return result.join('\n');
    },
    usage: "Pick columns by their indices e.g. 1,3,5.",
    argument : true
  }
}

export {
  METHODS
}