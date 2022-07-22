import 'styled-components';

// Declare styled-components theme
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: '#ffffff';
      black: '#000000';

      slate: {
        6: string;
        8: string;
        9: string;
      };

      gray: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
      };

      red: {
        2: string;
        4: string;
        5: string;
        6: string;
        7: string;
      };

      orange: {
        1: string;
        2: string;
        5: string;
        6: string;
        7: string;
      };

      blue: {
        1: string;
        2: string;
        5: string;
        6: string;
      };

      emerald: {
        1: string;
        2: string;
        5: string;
        6: string;
        7: string;
      };
    };

    alpha: {
      90: string;
      80: string;
      50: string;
    };

    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };

    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  }
}
