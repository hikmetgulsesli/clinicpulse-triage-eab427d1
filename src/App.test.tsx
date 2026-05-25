import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import App from './App';
import { CLINICPULSE_STORAGE_KEY } from './features/clinicpulse-triage/clinicpulse-triage.store';

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.history.pushState(null, '', '/');
    window.app = undefined;
  });

  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('routes top-bar notification and history actions to browser paths without changing the active screen', async () => {
    const user = userEvent.setup();
    render(<App />);

    const topBarActions = screen.getAllByRole('button').slice(1, 3);
    await user.click(topBarActions[0]);
    expect(window.location.pathname).toBe('/notifications');
    expect(window.app?.route).toBe('triage-board');

    await user.click(topBarActions[1]);
    expect(window.location.pathname).toBe('/history');
    expect(window.app?.route).toBe('triage-board');
  });

  it('passes live records into operations and supports search, select, edit, and cancel flows', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByText('Operations'));
    expect(window.app?.route).toBe('operations');
    expect(screen.getAllByText('Maya Chen').length).toBeGreaterThan(0);

    await user.type(screen.getByPlaceholderText('Search patients, IDs...'), 'fever');
    expect(screen.getByText('Owen Patel')).toBeInTheDocument();
    expect(screen.queryByText('patient-1024')).not.toBeInTheDocument();

    await user.click(screen.getByText('Owen Patel'));
    expect(window.app?.selectedRecord?.name).toBe('Owen Patel');

    await user.click(screen.getByText('View Full Record'));
    expect(window.app?.route).toBe('patient-editor');
    expect(screen.getByDisplayValue('Owen Patel')).toBeInTheDocument();

    await user.click(screen.getByText('Cancel Edit'));
    expect(window.app?.route).toBe('operations');
  });

  it('recovers corrupted persisted state onto the support panel', () => {
    window.localStorage.setItem(CLINICPULSE_STORAGE_KEY, '{not-json');
    render(<App />);

    expect(window.app?.storageStatus).toBe('recoverable-error');
    expect(window.app?.activePanel).toBe('support');
  });
});
