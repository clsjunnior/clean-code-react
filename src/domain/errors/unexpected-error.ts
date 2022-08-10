export class UnexpectedError extends Error {
  constructor () {
    super('Erro ao processar sua requisição, tente novamente em breve.')
    this.name = 'UnexpectedError'
  }
}
