import { createContext } from 'react';

const AppContext = createContext({
  user: {},
  setUser: () => {},
  basket: {},
  setBasket: () => {}
});

export { AppContext }
