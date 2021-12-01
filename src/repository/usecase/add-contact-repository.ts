import {ContactModel} from "../../models/contact.model";

export type ContactModelRepository = {
  id?: number;
  nome: string;
  sobrenome: string;
  telefone: string;
  dataNascimento: Date;
  endereco: string;
  email: string;
};

export type Contact = Omit<ContactModelRepository, "id">;

export interface AddContactRepository {
  add: (contact: ContactModel) => Promise<ContactModelRepository>;
  edit: (id: number, contact: ContactModel) => Promise<void>
  list: () => Promise<ContactModelRepository[]>
}
