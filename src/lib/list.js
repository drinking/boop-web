var METHODS = {
  'SortCharacter': {
    func: function(text) {
      let sorted = text.replace(/\n$/, '').split('\n')
        .sort((a, b) => a.localeCompare(b)).join('\n');
      return sorted;
    },
    usage: "Sort character list "
  },
  'SortNumber': {
    func: function(text) {
      let sorted = text.replace(/\n$/, '').split('\n')
        .sort((a, b) => {
          return Number(a) - Number(b)
        }).join('\n');

      return sorted;
    },
    usage: "Sort number list "
  },
  'ReverseList': {
    func: function(text) {
      return text.replace(/\n$/, '').split('\n').reverse().join('\n');
    },
    usage: "Reverse element of list"
  },
  'UniqueList': {
    func: function(text) {
      var set = new Set(text.replace(/\n$/, '').split('\n'))
      return Array.from(set).join('\n');
    },
    usage: "Make elements in list is unique"
  },
  'CountList': {
    func: function(text) {
      return text.replace(/\n$/, '').split('\n').length
    },
    usage: "Count line number of a list"
  }
}

export {
  METHODS
}