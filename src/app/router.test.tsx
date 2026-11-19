import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from './router';

function renderAt(path: string) {
  render(<RouterProvider router={createMemoryRouter(routes, { initialEntries: [path] })} />);
}

describe('app routing', () => {
  it('renders a minimal home page and primary navigation', () => {
    renderAt('/');

    expect(screen.getByRole('heading', { level: 1, name: 'Brennan Carson' })).toBeInTheDocument();
    expect(screen.getByText('Software Engineer', { selector: 'p' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects');
    expect(screen.queryByRole('heading', { name: 'Selected Projects' })).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: /Software Engineer II, UPS/ }),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /LinkedIn/ })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Email' })).not.toBeInTheDocument();
    expect(screen.queryByText(/Welcome to my portfolio/)).not.toBeInTheDocument();
  });

  it('renders the professional About page', () => {
    renderAt('/about');

    expect(screen.getByRole('heading', { level: 1, name: 'Brennan Carson' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Engineering Experience' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Technical Skills' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Engineering Interests' }),
    ).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 2, name: 'Education' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'brennancarson3@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:brennancarson3@gmail.com',
    );
    expect(screen.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/robert-brennan-carson',
    );
    expect(document.querySelector('a[href^="tel:"]')).not.toBeInTheDocument();
    expect(screen.queryByText(/150\+|70%|5,000\+|50\+|45%|25%/)).not.toBeInTheDocument();
  });

  it('lists projects with verified and unconfirmed statuses clearly separated', () => {
    renderAt('/projects');

    expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'In Development' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Status to Confirm' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Watchtower' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Alfred' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'FastAPI PDF Summarizer' })).toBeInTheDocument();
    expect(screen.getAllByText('In Development')).toHaveLength(2);
    expect(screen.getAllByText('Status to Confirm')).toHaveLength(3);
    expect(screen.queryByText('Completed')).not.toBeInTheDocument();
  });

  it('renders a project detail page', () => {
    renderAt('/projects/watchtower');

    expect(screen.getByRole('heading', { level: 1, name: 'Watchtower' })).toBeInTheDocument();
    expect(screen.getByText('In Development')).toBeInTheDocument();
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
