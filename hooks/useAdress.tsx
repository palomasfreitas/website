import { useState } from 'react';
import { getAddressByCEP } from '../services/address';
import { Address } from '../types';

function useAddress() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const [address, setAddress] = useState<Address | null>(null);

  const getByCpf = async (cep: string): Promise<Address | null> => {
    setLoading(true);

    try {
      const result = await getAddressByCEP(cep);
      const address: Address = {
        cep: result.cep,
        street: result.logradouro,
        complement: result.complemento,
        district: result.bairro,
        state: result.uf
      };

      setAddress(address);
    } catch (error) {
      setError(error);
    }
    finally {
      setLoading(false);
    }

    return address;
  };

  return {
    loading,
    error,
    address,
    getByCpf,
  };
}

export default useAddress;