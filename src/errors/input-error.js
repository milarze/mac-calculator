function InputError(message) {
  this.name = 'InputError'
  this.message = message
  this.stack = (new Error()).stack;
}
InputError.prototype = new Error;
export default InputError;
