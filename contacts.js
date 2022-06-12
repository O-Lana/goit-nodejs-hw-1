const fs = require("fs/promises");
const path = require("path");
// const { nanoid } = require("nanoid");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");
// console.log(contactsPath);

// contacts.js

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// TODO: задокументировать каждую функцию
async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(id) {
  // ...твой код
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === id);
  if (!result) {
    return null;
  }
  return result;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(idx, 1);
  return removeContact;
  // ...твой код
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    name,
    email,
    phone,
    id: v4(),
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
  // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
