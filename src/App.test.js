import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

afterEach(() => {
  delete window.emailjs;
});

function loadEmailService(send = jest.fn().mockResolvedValue({})) {
  window.emailjs = { init: jest.fn(), send };
  const script = document.querySelector('script[src*="@emailjs/browser"]');
  fireEvent.load(script);
  return window.emailjs;
}

function fillForm() {
  fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Alex' } });
  fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'alex@example.com' } });
  fireEvent.change(screen.getByLabelText('Your message'), { target: { value: 'Hello there' } });
}

test('shows project links, prototype status and direct email', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /visit z axis customs/i })).toHaveAttribute('href', 'https://zaxiscustoms.netlify.app/');
  expect(screen.getByRole('img', { name: /z axis customs logo/i })).toHaveAttribute('src', 'https://zaxiscustoms.netlify.app/icons/logo2.png');
  expect(screen.getByText(/The prototype is currently offline while updates are underway\./i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /ask about this project/i })).toHaveAttribute('href', '#contact');
  expect(document.querySelector('a[href*="tohu.netlify.app"], a[href*="tohuhq.nz"]')).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /paul@tohukorero.com/i })).toHaveAttribute('href', 'mailto:paul@tohukorero.com');
});

test('sends the existing EmailJS payload and clears the form on success', async () => {
  render(<App />);
  const emailjs = loadEmailService();
  fillForm();
  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  await waitFor(() => expect(emailjs.send).toHaveBeenCalledWith(
    'service_rtncsgq',
    'template_zzoq2ji',
    {
      from_name: 'Alex',
      from_email: 'alex@example.com',
      message: 'Hello there',
      to_email: 'paustudylaptop@gmail.com'
    }
  ));
  expect(emailjs.init).toHaveBeenCalledWith('FkQY2Ii4rpYWSwujD');
  expect(await screen.findByRole('status')).toHaveTextContent('Your message has been sent');
  expect(screen.getByLabelText('Your message')).toHaveValue('');
});

test('preserves the message and offers direct email when sending fails', async () => {
  const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
  render(<App />);
  loadEmailService(jest.fn().mockRejectedValue(new Error('Send failed')));
  fillForm();
  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  expect(await screen.findByRole('alert')).toHaveTextContent('Your message could not be sent');
  expect(screen.getByLabelText('Your message')).toHaveValue('Hello there');
  expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
  consoleError.mockRestore();
});

test('offers direct email if the EmailJS script fails to load', () => {
  const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
  render(<App />);
  act(() => fireEvent.error(document.querySelector('script[src*="@emailjs/browser"]')));
  expect(screen.getByRole('alert')).toHaveTextContent('The contact form is unavailable');
  expect(screen.getByRole('button', { name: /send message/i })).toBeDisabled();
  expect(screen.getAllByRole('link', { name: /paul@tohukorero.com/i })).toHaveLength(2);
  consoleError.mockRestore();
});
