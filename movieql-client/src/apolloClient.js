import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "https://movieql2.now.sh/"
});

export default client;