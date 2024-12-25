export class HttpService {
  public async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json() as Promise<T>;
  }
}

export const httpService = new HttpService();
