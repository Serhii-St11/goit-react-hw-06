import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <ul className={clsx(css.ul)}>
        {getFilteredContacts().map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
