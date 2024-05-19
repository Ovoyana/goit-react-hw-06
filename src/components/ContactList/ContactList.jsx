import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter} from "../../redux/filtersSlice";



export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchContact = useSelector(selectNameFilter);
  



  // console.log(searchContact);
 

  const filterContacts =  contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchContact.toLowerCase());
});
    return (
    
      <ul className={css.list}>
        {filterContacts.map((contact) => (
          <li className={css.item} key={contact.id} >
            <Contact data={contact}/>
          </li>
        ))}
      </ul>
      
     
    );
  
  }
  
  

  
     