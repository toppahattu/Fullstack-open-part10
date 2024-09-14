import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    description
    forksCount
    fullName
    id
    language
    ownerAvatarUrl
    ratingAverage
    reviewCount
    stargazersCount
    url
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    createdAt
    id
    rating
    text
    user {
      id
      username
    }
  }
`;

export const ME_DETAILS = gql`
  fragment MeDetails on User {
    id
    username
  }
`;