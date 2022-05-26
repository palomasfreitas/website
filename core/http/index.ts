import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpClient {
  private client: AxiosInstance;

  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this.client = axios.create({
      baseURL,
      ...config
    });
  }

  async get<T>(url: string, config?: AxiosRequestConfig) {
    return this.client.get<T>(url, config);
  }

  async post(url: string, data: unknown, config?: AxiosRequestConfig) {
    return this.client.post(url, data, config);
  }

  async patch(url: string, data: unknown, config?: AxiosRequestConfig) {
    return this.client.patch(url, data, config);
  }

  async put(url: string, data: unknown, config?: AxiosRequestConfig) {
    return this.client.put(url, data, config);
  }

  async delete(url: string, config?: AxiosRequestConfig) {
    return this.client.delete(url, config);
  }
}