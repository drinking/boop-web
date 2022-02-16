const METHODS = {

  'PickRow': {

    func: function(text) {

      var array = text.split('\n')
      if (array.length < 2) {
        return ""
      }

      var numbers = array[0].match(/\d+/g).map(Number);
      if (numbers.length < 2) {
        return ""
      }

      const row = numbers[0]
      const total = numbers[1]

      var result = []
      for (var i = 1; i < array.length; i++) {
        if (i % total == row) {
          result.push(array[i])
        }
      }

      return result.join('\n');
    },
    usage: "Pick the ith row from multi rows and repeat after n rows. params at first line: i/n"
  },

  'PickColumn': {
    func: function(text,argument) {
      var array = text.replace(/\s\s+/g, ' ').split('\n')
      const column = argument
      var result = []
      for (var i = 0; i < array.length; i++) {
        var t = array[i];
        result.push(t.split(' ')[column - 1])
      }

      return result.join('\n');
    },
    usage: "pick the ith column from a row, each column is seperated by space",
    argument : true
  }
}

export {
  METHODS
}