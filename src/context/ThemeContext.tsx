import React, { Component, createContext } from 'react';
import type { Theme, ThemeContextType } from '../types';

// Create the context with default values
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeProviderState {
  theme: Theme;
}

// ThemeProvider class component
export class ThemeProvider extends Component<ThemeProviderProps, ThemeProviderState> {
  constructor(props: ThemeProviderProps) {
    super(props);

    // Get initial theme from localStorage or system preference
    const savedTheme = this.getSavedTheme();

    this.state = {
      theme: savedTheme,
    };

    // Apply theme class to document on initialization
    this.applyTheme(savedTheme);
  }

  // Get saved theme from localStorage or fall back to system preference
  getSavedTheme = (): Theme => {
    try {
      const saved = localStorage.getItem('replicate-ui-theme') as Theme | null;
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch (e) {
      // localStorage might not be available
      console.warn('Failed to read theme from localStorage:', e);
    }

    // Fall back to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  };

  // Apply theme class to document element
  applyTheme = (theme: Theme): void => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  // Save theme to localStorage
  saveTheme = (theme: Theme): void => {
    try {
      localStorage.setItem('replicate-ui-theme', theme);
    } catch (e) {
      console.warn('Failed to save theme to localStorage:', e);
    }
  };

  // Toggle theme between light and dark
  toggleTheme = (): void => {
    this.setState(
      (prevState) => ({
        theme: prevState.theme === 'light' ? 'dark' : 'light',
      }),
      () => {
        this.applyTheme(this.state.theme);
        this.saveTheme(this.state.theme);
      }
    );
  };

  render(): React.ReactNode {
    const { children } = this.props;
    const { theme } = this.state;

    const contextValue: ThemeContextType = {
      theme,
      toggleTheme: this.toggleTheme,
    };

    return (
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    );
  }
}
