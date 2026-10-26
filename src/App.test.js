// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenTape title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenTape/i);
    expect(titleElement).toBeInTheDocument();
});
