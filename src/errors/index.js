
export class WrongArgumentsError extends Error {
  constructor(message) {
    super(message)
    this.code = 400
    this.message = `Wrong arguments : ${this.message}`
  }
}
