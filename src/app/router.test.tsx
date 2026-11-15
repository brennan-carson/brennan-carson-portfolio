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
    expect(screen.getByRole('heading', { level: 2, name: 'Education' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Software Engineer II, UPS/ })).toBeInTheDocument();
    expect(
      screen.getByText('Bachelor of Arts in Computer Science · GPA 3.7 / 4.0 · May 2025'),
    ).toBeInTheDocument();
    expect(screen.getByText('In Development')).toBeInTheDocument();
    expect(screen.getAllByText('Completed')).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: /LinkedIn/ })).toHaveLength(3);
    expect(screen.getAllByRole('link', { name: /LinkedIn/ })[0]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/robert-brennan-carson',
    );
    expect(screen.getAllByRole('link', { name: 'brennancarson3@gmail.com' })).toHaveLength(1);
    expect(screen.getAllByRole('link', { name: 'Email' })).toHaveLength(1);
    expect(screen.getByRole('link', { name: 'brennancarson3@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:brennancarson3@gmail.com',
    );
    expect(screen.queryByRole('link', { name: /resume/i })).not.toBeInTheDocument();
    expect(document.querySelector('a[href^="tel:"]')).not.toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/\b\d{3}[).\s-]+\d{3}[.\s-]+\d{4}\b/);
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
