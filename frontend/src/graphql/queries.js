import { gql } from '@apollo/client';

import { ME_DETAILS, REPOSITORY_DETAILS } from './fragments';

export const GET_ME = gql`
  query Me {
    me {
      ...MeDetails
    }
  }
  ${ME_DETAILS}
`

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        cursor
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;
