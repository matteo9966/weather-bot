export class CustomServerError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}
