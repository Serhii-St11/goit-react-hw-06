import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import clsx from "clsx";
import { FcPhone, FcReadingEbook } from "react-icons/fc";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={clsx(css.li)}>
      <p className={clsx(css.contact)}>
        <FcReadingEbook /> {contact.name}
      </p>
      <p className={clsx(css.contact)}>
        <FcPhone /> {contact.number}
      </p>
      <button
        className={clsx(css.button)}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
