import { act, renderHook } from '@testing-library/react';
import { useTheme } from './useTheme';

describe('useTheme', () => {
  it('defaults to dark and applies it to the document', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.dataset['theme']).toBe('dark');
  });

  it('toggles the theme and persists the choice', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('restores a stored theme', () => {
    localStorage.setItem('theme', 'light');

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
  });
});
