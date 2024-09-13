import { render, screen, within } from '@testing-library/react-native';

import RepositoryList from '../testComponents/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };      

      render(<RepositoryList repositories={repositories} />);

      const repositoryItems = screen.getAllByTestId('repositoryItem');
      const [firstRepository, secondRepository] = repositoryItems;

      const firstFullName = within(firstRepository).getByTestId('fullName');
      expect(firstFullName).toHaveTextContent('jaredpalmer/formik');
      const firstDescription = within(firstRepository).getByTestId('description');
      expect(firstDescription).toHaveTextContent('Build forms in React, without the tears');
      const firstLanguage = within(firstRepository).getByTestId('language');
      expect(firstLanguage).toHaveTextContent('TypeScript');
      const firstStargazersCount = within(firstRepository).getByTestId('stargazersCount');
      expect(firstStargazersCount).toHaveTextContent('21856');
      const firstForksCount = within(firstRepository).getByTestId('forksCount');
      expect(firstForksCount).toHaveTextContent('1619');
      const firstReviewCount = within(firstRepository).getByTestId('reviewCount');
      expect(firstReviewCount).toHaveTextContent('3');
      const firstRatingAverage = within(firstRepository).getByTestId('ratingAverage');
      expect(firstRatingAverage).toHaveTextContent('88');

      const secondFullName = within(secondRepository).getByTestId('fullName');
      expect(secondFullName).toHaveTextContent('async-library/react-async');
      const secondDescription = within(secondRepository).getByTestId('description');
      expect(secondDescription).toHaveTextContent('Flexible promise-based React data loader');
      const secondLanguage = within(secondRepository).getByTestId('language');
      expect(secondLanguage).toHaveTextContent('JavaScript');
      const secondStargazersCount = within(secondRepository).getByTestId('stargazersCount');
      expect(secondStargazersCount).toHaveTextContent('1760');
      const secondForksCount = within(secondRepository).getByTestId('forksCount');
      expect(secondForksCount).toHaveTextContent('69');
      const secondReviewCount = within(secondRepository).getByTestId('reviewCount');
      expect(secondReviewCount).toHaveTextContent('3');
      const secondRatingAverage = within(secondRepository).getByTestId('ratingAverage');
      expect(secondRatingAverage).toHaveTextContent('72');
    });
  });
});