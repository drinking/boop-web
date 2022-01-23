var METHODS = {
  'DateToTimestamp': {
    func: function(text) {
      let parsedDate = Date.parse(text)
      return parsedDate;
    },
    usage: "Convert date format like 2020-01-01 10:10:10 to timestamp"
  },
  'TimestampToDate': {
    func: function(text) {
      let unix_timestamp = text
      var date = new Date(unix_timestamp * 1000);
      return date.toLocaleDateString().replace(/\//g, "-") + " " + date.toTimeString().substr(0, 8);
    },
    usage: "Convert timestamp to Data format"
  }
}

export {
  METHODS
}