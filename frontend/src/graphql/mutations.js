import { gql } from '@apollo/client';

import { ME_DETAILS, REPOSITORY_DETAILS } from './fragments';

export const SIGN_IN = gql`
  mutation Authenticate(
    $credentials: AuthenticateInput
  ) {
    authenticate(
      credentials: $credentials
    ) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      user {
        ...MeDetails
      }
      repository {
        ...RepositoryDetails
      }
      userId
      repositoryId
      rating
      createdAt
      text
    }
  }
  ${ME_DETAILS}
  ${REPOSITORY_DETAILS}
`;

export const CREATE_USER = gql`
mutation CreateUser($user: CreateUserInput) {
  createUser(user: $user) {
    ...MeDetails
  }
}
${ME_DETAILS}
`;