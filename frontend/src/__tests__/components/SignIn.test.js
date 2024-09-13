import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';

import SignIn from '../testComponents/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      render(<SignIn onSubmit={onSubmit} />);
      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'jouko');
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'kissa123');
      fireEvent.press(screen.getByText('Sign in'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({ username: 'jouko', password: 'kissa123' });
      });
    });
  });
});