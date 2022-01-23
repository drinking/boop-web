var METHODS = {
  'Stringify': {
    func: function(text) {
      return JSON.stringify(text);
    },
    usage: "Trasform JSON text to string"
  },
  'JSONify': {
    func: function(text) {
      return JSON.parse(text);
    },
    usage: "Transform text to JSON"
  },
  'JSONFormat': {
    func: function(text) {
      try {
        return JSON.stringify(JSON.parse(text), null, 2);
      } catch (error) {
        return "error"
      }
    },
    usage: "Format JSON text"
  }
}

export {
  METHODS
}