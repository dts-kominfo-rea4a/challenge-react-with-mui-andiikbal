import React, { useState } from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({ contacts, handleAddContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const handleInputChange = (event) => {
    setNewContact({ ...newContact, [event.target.name]: event.target.value });
  };

  // state untuk menampung pesan error
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  // function untuk memeriksa apakah ada No. telepon yang sama atau tidak
  const cekDuplikasiPhone = () => {
    return contacts.find((contact) => contact.phone === newContact.phone);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let pesanErrors = {};

    // validasi name
    if (newContact.name.trim() === "") {
      pesanErrors.name = "Name tidak boleh kosong";
    } else {
      pesanErrors.name = "";
    }

    // validasi phone
    if (newContact.phone.trim() === "") {
      pesanErrors.phone = "Phone tidak boleh kosong";
    } else if (!/^[0-9]{12}$/.test(newContact.phone)) {
      pesanErrors.phone = "Phone harus 12 karakter angka";
    } else if (cekDuplikasiPhone()) {
      pesanErrors.phone = "Phone sudah dipakai";
    } else {
      pesanErrors.phone = "";
    }

    // validasi email
    if (newContact.email.trim() === "") {
      pesanErrors.email = "Email tidak boleh kosong";
    } else {
      pesanErrors.email = "";
    }

    // validasi photo
    if (newContact.photo.trim() === "") {
      pesanErrors.photo = "URL Photo tidak boleh kosong";
    } else {
      pesanErrors.photo = "";
    }

    setErrors(pesanErrors);

    let formValid = true;
    for (let inputName in pesanErrors) {
      if (pesanErrors[inputName].length > 0) {
        formValid = false;
      }
    }

    if (formValid) {
      handleAddContact(newContact);
      setNewContact({
        name: "",
        phone: "",
        email: "",
        photo: "",
      });
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <form style={{ textAlign: "left" }} onSubmit={handleFormSubmit}>
            <TextField
              name="name"
              label="Name *"
              variant="filled"
              onChange={handleInputChange}
              value={newContact.name}
              type="text"
              fullWidth
            />
            {errors.name && (
              <small style={{ color: "red" }}>{errors.name}</small>
            )}
            <TextField
              name="phone"
              label="Phone *"
              variant="filled"
              sx={{ marginTop: "1em" }}
              onChange={handleInputChange}
              value={newContact.phone}
              type="text"
              fullWidth
            />
            {errors.phone && (
              <small style={{ color: "red" }}>{errors.phone}</small>
            )}
            <TextField
              name="email"
              label="Email *"
              variant="filled"
              sx={{ marginTop: "1em" }}
              onChange={handleInputChange}
              value={newContact.email}
              type="text"
              fullWidth
            />
            {errors.email && (
              <small style={{ color: "red" }}>{errors.email}</small>
            )}
            <TextField
              name="photo"
              label="Photo URL *"
              variant="filled"
              sx={{ marginTop: "1em" }}
              onChange={handleInputChange}
              value={newContact.photo}
              type="text"
              fullWidth
            />
            {errors.photo && (
              <small style={{ color: "red" }}>{errors.photo}</small>
            )}
            <br />
            <Button type="submit" variant="text" sx={{ marginTop: "1em" }}>
              Add New
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
