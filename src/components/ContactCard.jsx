import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeContact } from '../store/contacts/contact-actions';

export default function ContactCard({ item }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ width: 245, marginBottom: '45px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.imageUrl}
          alt="alt image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.phoneNumber}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => dispatch(removeContact(item.id))}
          size="small"
          color="primary"
          variant="contained"
        >
          Delete
        </Button>
        <Button size="small" variant="contained" color="primary">
          Update
        </Button>
      </CardActions>
    </Card>
  );
}
