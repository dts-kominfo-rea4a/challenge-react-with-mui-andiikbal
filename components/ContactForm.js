import React, { useState } from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({ handleAddContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [name, setName] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const [phone, setPhone] = useState("");
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const [email, setEmail] = useState("");
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const [photoURL, setPhotoURL] = useState("");
  const handleChangePhotoURL = (event) => {
    setPhotoURL(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && phone !== "" && email !== "" && photoURL !== "") {
      const contactBaru = {
        name: name,
        phone: phone,
        email: email,
        photo: photoURL,
      };

      handleAddContact(contactBaru);
      setPhotoURL("");
      setEmail("");
      setPhone("");
      setName("");
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <form style={{ textAlign: "left" }} onSubmit={handleFormSubmit}>
            <TextField
              required
              label="Name"
              variant="filled"
              onChange={handleChangeName}
              value={name}
              fullWidth
            />
            <TextField
              required
              label="Phone"
              variant="filled"
              sx={{ marginTop: "1em" }}
              onChange={handleChangePhone}
              value={phone}
              fullWidth
            />
            <TextField
              required
              label="Email"
              variant="filled"
              sx={{ marginTop: "1em" }}
              onChange={handleChangeEmail}
              value={email}
              fullWidth
            />
            <TextField
              required
              label="Photo URL"
              variant="filled"
              sx={{ marginTop: "1em" }}
              onChange={handleChangePhotoURL}
              value={photoURL}
              fullWidth
            />
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
