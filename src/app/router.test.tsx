import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from './router';

function renderAt(path: string) {
  render(<RouterProvider router={createMemoryRouter(routes, { initialEntries: [path] })} />);
}

describe('app routing', () => {
  it('renders the home page with primary sections and navigation', () => {
    renderAt('/');

    expect(screen.getByRole('heading', { level: 1, name: 'Brennan Carson' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Projects' })).toBeInTheDocument();
    expect(screen.getAllByText('In Development').length).toBeGreaterThan(0);
  });

  it('renders a project detail page', () => {
    renderAt('/projects/watchtower');

    expect(screen.getByRole('heading', { level: 1, name: 'Watchtower' })).toBeInTheDocument();
  });

  it('renders the not-found page for unknown project slugs and routes', () => {
    renderAt('/projects/does-not-exist');
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('toggles the theme from the header', async () => {
    renderAt('/');

    await userEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));

    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(screen.getByRole('button', { name: 'Switch to dark theme' })).toBeInTheDocument();
  });
});
