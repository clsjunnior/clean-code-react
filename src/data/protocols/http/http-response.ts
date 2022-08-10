export enum HttpStatusCode {
  unauthorized = 401,
  notFound = 404,
  internalServerError = 500,
  ok = 200,
  noContent = 204
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
