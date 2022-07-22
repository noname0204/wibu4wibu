import type { DefaultTheme } from 'styled-components';

/** Theme from tailwindcss */
const theme: DefaultTheme = {
  color: {
    white: '#ffffff',
    black: '#000000',

    slate: {
      6: '#475569',
      8: '#1e293b',
      9: '#0f172a',
    },

    gray: {
      1: '#f3f4f6',
      2: '#e5e7eb',
      3: '#d1d5db',
      4: '#9ca3af',
      5: '#6B7280',
      6: '#52525b',
      7: '#334155',
    },

    red: {
      2: '#fecaca',
      4: '#f87171',
      5: '#ef4444',
      6: '#dc2626',
      7: '#b91c1c',
    },

    orange: {
      1: '#ffedd5',
      2: '#fed7aa',
      5: '#f97316',
      6: '#ea580c',
      7: '#c2410c',
    },

    blue: {
      1: '#dbeafe',
      2: '#bfdbfe',
      5: '#3b82f6',
      6: '#2563eb',
    },

    emerald: {
      1: '#d1fae5',
      2: '#bbf7d0',
      5: '#10b981',
      6: '#059669',
      7: '#047857',
    },
  },

  alpha: {
    90: 'e6',
    80: 'cc',
    50: '80',
  },

  breakpoints: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

export default theme;
