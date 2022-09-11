import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';


const SubscriptionBasket = () => {

const SUBSCRIPTIONS = [
  'Netflix - $40.00',
  'Disney Plus - $24.99',
  'Hulu - $4.99',
  'HBO Max - $14.99',
  'Spotify - $4.99',
];

function renderItem({ item, handleRemoveSubscription }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveSubscription(item)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item} />
    </ListItem>
  );
}

  const [subscriptionsBasket, setSubscriptionsBasket] = React.useState(SUBSCRIPTIONS.slice(0, 3));

  const handleAddSubscription = () => {
    const nextHiddenItem = SUBSCRIPTIONS.find((i) => !subscriptionsBasket.includes(i));
    if (nextHiddenItem) {
        setSubscriptionsBasket((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const handleRemoveSubscription = (item) => {
    setSubscriptionsBasket((prev) => [...prev.filter((i) => i !== item)]);
  };

  const addSubscriptionButton = (
    <Button
      variant="contained"
      disabled={subscriptionsBasket.length >= SUBSCRIPTIONS.length}
      onClick={handleAddSubscription}
    >
      Add Subscription
    </Button>
  );

  return (
    <div>
      {addSubscriptionButton}
      <Box sx={{ mt: 1 }}>
        <List>
          <TransitionGroup>
            {subscriptionsBasket.map((item) => (
              <Collapse key={item}>
                {renderItem({ item, handleRemoveSubscription })}
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
      </Box>
    </div>
  );
}

export default SubscriptionBasket;
