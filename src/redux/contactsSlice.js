import { createSlice } from "@reduxjs/toolkit";
import { initialStateContacts } from "./availableContacts";

const initialState = {
    contacts: {
      items: initialStateContacts,
    },
  };

const slice = createSlice({
    name: 'contacts',
    initialState,
  
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(data) {
                return {
                  payload: {
                    name: data.name,
                    number: data.number,
                        id: crypto.randomUUID(),
                    }
                }
            }
        },
        
        deleteContact: (state, action) => {
            return state.filter(contact => contact.id !== action.payload);
        }
    }
    })


export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;

export const selectContacts = (state) => state.items;