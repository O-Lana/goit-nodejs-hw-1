console.clear();
const contacts = require("./contacts");
// console.log(__dirname);

// const invokeAction = async ({ action, id, name, email, phone }) => {
//   switch (action) {
//     case "list":
//       const result = await contacts.listContacts();
//       console.log(result);

//       break;

//     default:
//       break;
//   }
// };

// invokeAction({ action: "list" });

// index.js
// const argv = require("yargs").argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const result = await contacts.listContacts();
      console.log(result);

      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case "add":
      // ... name email phone
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "1" });
invokeAction({
  action: "add",
  name: "Lana",
  email: "lana@mail.com",
  phone: "3-53-50",
});
