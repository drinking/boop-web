var METHODS = {
  'UpperCase': function(text){
    return text.toUpperCase()
  },
  'LowerCase': function(text){
    return text.toLowerCase()
  },
  'SplitBySpace': function(text){
    return text.split(' ').join('\n');
  },
  'RemoveSpace': function(text){
    return text.replace(/\s/g,'');
  },
  'Stringify': function(text) {
    return JSON.stringify(text);
  },
  'JoinLines': function(text) {
    return text.replace(/\n/g, '');
  },
  'JoinLinesWithComma': function(text) {
    return text.replace(/\n/g, ',');
  },
  'JoinLinesWithSpace': function(text) {
    return text.replace(/\n/g, ' ');
  },
  'DateToTimestamp': function(text) {
    let parsedDate = Date.parse(text)
    text = parsedDate / 1000
    return text.replace(/\n/g, ' ');
  },
  'TimestampToDate': function(text) {
    let unix_timestamp = text
    var date = new Date(unix_timestamp * 1000);
    return date.toLocaleDateString().replace(/\//g, "-") + " " + date.toTimeString().substr(0, 8); 
  },
  'Run': function (text) {
    const script = text.replace(/\n\n\/\/ Result:[\s\S]*$/, '');
    let output = '';
    try {
        output = eval(script);
        if (typeof output !== 'string') {
            output = JSON.stringify(output, null, 2);
        }
    } catch (e) {
        output = 'error'
    }

    return output;
  },
  'FormatJSON': function(text) {
      try {
        return  JSON.stringify(JSON.parse(text), null, 2);
      }catch(error) {
        return "error"
      }
  },
  'Sort':function(text) {
      let sorted = text.replace(/\n$/, '').split('\n')
      .sort((a, b) => a.localeCompare(b))
      .join('\n');

      if (sorted === text) {
        sorted = sorted.split('\n').reverse().join('\n');
      }
      return sorted;
  }
}

export {METHODS}