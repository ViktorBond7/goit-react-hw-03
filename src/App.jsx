// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./componens/ContactList/ContactList";

// import contacts from "./contacts.json";

const indexp = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm />
        <SearchBox /> */}
      <ContactList contactUser={indexp} />
    </div>
  );
}

export default App;
