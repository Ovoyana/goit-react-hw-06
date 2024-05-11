import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { useSelector } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchContact = useSelector(selectNameFilter);


  console.log(searchContact);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchContact.trim().toLowerCase())
  );


    return (
      <ul className={css.list}>
        {filterContacts.map(contact => (
          <li className={css.item} key={nanoid()}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    );
  }
  
     