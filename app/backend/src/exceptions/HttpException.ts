class HttpException extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export default HttpException;

// criei basedo no exercicio do course so dia 9.4
