import React from "react";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      {data.map((contact, i) => {
        return (
          <List sx={{ width: "100%", backgroundColor: "#d3fdc2" }} key={i}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={contact.name} src={contact.photo} />
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "block" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {contact.phone}
                    </Typography>
                    <Typography
                      sx={{ display: "block" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {contact.email}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
          </List>
        );
      })}
    </>
  );
};

export default Contact;
