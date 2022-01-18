
import { METHODS as pickerMethods } from './lib/picker.js'
import { METHODS as simpleMethods } from './lib/simple.js'

var hub = {}

function loadFuncs() {

  hub = Object.assign({}, pickerMethods, simpleMethods);
  return Object.keys(hub);
}

function mapFunc(name) {
	return hub[name]
}

export {
	loadFuncs, mapFunc
}