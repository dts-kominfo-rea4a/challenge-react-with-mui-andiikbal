import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import "./App.css";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON);

  const handleAddContact = (contactBaru) => {
    const newContacts = [...contacts, contactBaru];
    setContacts(newContacts);
  };

  return (
    <div className="App">
      <Header />
      <Container sx={{ marginTop: "2.5em" }} fixed>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <ContactForm
              contacts={contacts}
              handleAddContact={handleAddContact}
            />
          </Grid>

          <Grid item xs={6}>
            <Contact data={contacts} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
