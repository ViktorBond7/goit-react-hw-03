import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";

const ContactList = ({ contactUser, onDelete }) => {
  return (
    <ul>
      {contactUser.map((item) => (
        <li key={nanoid()}>
          <Contact contacts={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
