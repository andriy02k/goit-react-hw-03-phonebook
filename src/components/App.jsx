import { Component } from 'react'
import Form from './Form/Form'
import List from './List/List'
import Filter from './Filter/Filter'

export class App extends Component {
    state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
  }

  addContact = (contact) => {
    // перебрати масив контакиів і перевіряти чи ітеруємий елемент інклюдить contact.name.toLowerCase()
    if (this.state.contacts.some((el) => el.name.toLowerCase() === contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts.`);
      return
     }
    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((item) => item.id !== id)
    }))
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
        return (
          <>
            <h1>Phonebook</h1>
            <Form addContact={this.addContact} />
            <h2>Contacts</h2>            
            <Filter
              title='Filter contacts by name'
              filter={this.state.filter}
              handleFilterChange={this.handleFilterChange}
            />
            <List
              contacts={filteredContacts}
              deleteContact={this.deleteContact}
            />
          </>
        );
    };
}

// import { Component } from 'react'
// import { nanoid } from 'nanoid'
// import Form from './Form/Form'
// import List from './List/List'
// import Filter from './Filter/Filter'

// export class App extends Component {
//     state = {
//       contacts: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ],
//       filter: '',
//       name: '',
//       number: ''
//   }
  
//   handleChange = ({ target: { value, name } }) => {
//     this.setState((prev) => {
//       // console.log(value);
//       // console.log(name);
//     return { ...prev, [name]: value }
//     })
//   }

//   addContact = (e) => {
//     e.preventDefault();

//     const { name, number } = this.state;
//     const newContact = { id: nanoid(), name, number };
//     // console.log(newContact);
//     // console.log(this.state);
//     this.setState((prev) => ({ contacts: [...prev.contacts, newContact], name: '', number: '' }));
//   }

//   deleteContact = (id) => {
//     this.setState((prev) => ({
//       contacts: prev.contacts.filter((item) => item.id !== id)
//     }))
//   }

//   handleFilterChange = (e) => {
//     this.setState({ filter: e.target.value });
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const filteredContacts = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//         return (
//           <>
//             <h1>Phonebook</h1>
//             <Form
//               name={this.state.name}
//               number={this.state.number}
//               handleChange={this.handleChange}
//               addContact={this.addContact}
//             />
//             <h2>Contacts</h2>            
//             <Filter
//               title='Filter contacts by name:'
//               filter={this.state.filter}
//               handleFilterChange={this.handleFilterChange}
//             />
//             <List
//               contacts={filteredContacts}
//               deleteContact={this.deleteContact}
//             />
//           </>
//         );
//     };
// }