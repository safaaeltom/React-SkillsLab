import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders the todo list title', () => {
  render(<TodoList />);

  const todoElement = screen.getByText(/My todo list/i);
  expect(todoElement).toBeInTheDocument();
});