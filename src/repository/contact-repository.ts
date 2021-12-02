import { AbstractRepository, EntityRepository } from "typeorm";
import {
  AddContactRepository,
  Contact,
  ContactModelRepository,
} from "./usecase/add-contact-repository";
import { ContactModel } from "../models/contact.model";

@EntityRepository(ContactModel)
export class ContactRepository
  extends AbstractRepository<ContactModel>
  implements AddContactRepository
{
  async add(contact: ContactModel): Promise<ContactModelRepository> {
    await this.repository.save(contact);
    return contact;
  }

  async edit(id: number, contact: ContactModel): Promise<void> {
    await this.repository.save({ id: id, ...contact });
  }

  async list(): Promise<ContactModelRepository[]> {
    const contacts = await this.repository.find({ order: { id: "DESC" } });

    return contacts;
  }

  async getOne(id: number) {
    const contact = await this.repository.findOneOrFail(id);
    return contact;
  }

  async remove(id: number) {
    await this.repository.delete({ id });
  }

  toModelType(contact: Contact): ContactModel {
    return this.repository.create(contact);
  }
}
