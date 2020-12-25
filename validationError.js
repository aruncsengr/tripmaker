module.exports = class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
    this.code = '007'
  }
    
  printMessage() {
    return `Validation failed :-( (details: ${this.message})`;
  }
}
