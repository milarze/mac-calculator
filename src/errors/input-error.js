export default class InputError extends Error {
  constructor(message) {
    this.name = 'InputError';
    this.message = message;
    this.stack = (new Error()).stack;
  }
}
