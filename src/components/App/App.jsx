import css from './App.module.css';
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import array from "../../../contacts.json";
import { PiBookOpenTextLight } from "react-icons/pi";


export default function App() {
 
  return (
    <div className={css.box}>
      <h1 className={css.title}><PiBookOpenTextLight className={css.icon}/>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList  contactList={array}/>
    </div>
  );
}