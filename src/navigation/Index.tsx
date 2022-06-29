import {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

export const CartContext = createContext({});
export const AuthContext = createContext({});

const Index = () => {
  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co/',
    cache: new InMemoryCache(),
  });

  const [cart, setCart] = useState([]);
  const [photo, setPhoto] = useState();
  const [auth, setAuth] = useState(false);

  return (
        <ApolloProvider client={client}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </ApolloProvider>
  );
};

export default Index;
