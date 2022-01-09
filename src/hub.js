
const METHODS = {
  'UpperCase': function(text){
    return text.toUpperCase()
  },
  'SplitBySpace': function(text){
    return text.split(' ').join('\n');
  },
  'RemoveSpace': function(text){
    return text.replace(/\s/g,'');
  }
}

function loadFuncs() {
	return ['UpperCase', 'SplitBySpace','RemoveSpace'];
}

function mapFunc(name) {
	return METHODS[name]
}

export {
	loadFuncs, mapFunc
}