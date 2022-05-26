import { HttpClient } from '../../core/http';
import { AddressResponse } from './types';

const http = new HttpClient('https://viacep.com.br/ws');

export async function getAddressByCEP(cep: string) {
  const { data } = await http.get<AddressResponse>(`/${cep}/json/`);
  return data;
}
