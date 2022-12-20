import { ApolloClient, InMemoryCache, ApolloProvider, gql, ApolloLink, createHttpLink, TypePolicies } from '@apollo/client';
import { SortDirection } from 'aws-amplify';
import {AuthOptions, createAuthLink,AUTH_TYPE} from 'aws-appsync-auth-link';
import {createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link'
import { useContext, useMemo } from 'react';
import config from '../aws-exports'
import { AuthContext } from '../context/AuthContext';

interface IClient{
    children:React.ReactNode;
}


const url=config.aws_appsync_graphqlEndpoint;
const region=config.aws_appsync_region;


const httpLink= createHttpLink({uri:url})



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





const  Client =({children}:IClient)=>{
  const {user}=useContext(AuthContext)
  const jwtToken = user?.getSignInUserSession()?.getAccessToken()?.getJwtToken() ||''; 

const client = useMemo(() =>{
  const auth:AuthOptions={
    type:config.aws_appsync_authenticationType as AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken,
  };

  const link = ApolloLink.from([
    createAuthLink({url,region,auth}),
    createSubscriptionHandshakeLink({url,region,auth}, httpLink),
  ])
  return new ApolloClient({
    link,
    cache: new InMemoryCache({typePolicies}),
  });
  
},[user])

  

  

   return <ApolloProvider client={client}>{children}</ApolloProvider>


}

export default Client