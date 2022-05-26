
export interface Address {
  cep: string;
  street: string;
  number?: string;
  complement?: string;
  district: string;
  state: string;
}

export interface SocialMedia {
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
}

export interface Person {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  phone: string;
  address?: Address;
  socialMedia?: SocialMedia;
}