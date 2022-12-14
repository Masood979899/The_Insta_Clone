import { ApolloClient, InMemoryCache, ApolloProvider, gql, ApolloLink, createHttpLink, TypePolicies } from '@apollo/client';
import { SortDirection } from 'aws-amplify';
import {AuthOptions, createAuthLink,AUTH_TYPE} from 'aws-appsync-auth-link';
import {createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link'
import config from '../aws-exports'

interface IClient{
    children:React.ReactNode;
}


const url=config.aws_appsync_graphqlEndpoint;
const region=config.aws_appsync_region;
const auth:AuthOptions={
  type:config.aws_appsync_authenticationType as AUTH_TYPE.API_KEY,
  apiKey:config.aws_appsync_apiKey,
};

const httpLink= createHttpLink({uri:url})

const link = ApolloLink.from([
  createAuthLink({url,region,auth}),
  createSubscriptionHandshakeLink({url,region,auth}, httpLink),
])

const typePolicies:TypePolicies={
  Query:{
    fields:{
      CommentsForPostByUser:{
        keyArgs:['postID','createdAt',"sortDirection",'filter'],
        merge:(existing ={} , incoming)=>{
          return {
            ...existing,
            ...incoming,
            items:[...(existing?.items||[]), ...(incoming.items||[])],
          }
        },
      },
    },
  },
};

const client = new ApolloClient({
    link,
    cache: new InMemoryCache({typePolicies}),
  });



const  Client =({children}:IClient)=>{
   return <ApolloProvider client={client}>{children}</ApolloProvider>


}

export default Client