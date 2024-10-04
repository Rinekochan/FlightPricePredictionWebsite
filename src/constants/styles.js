import { createTheme } from "@mui/material";

export const fonts = createTheme({
  typography: {
    fontFamily: [
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

// Reusable nav buttons styles
export const navButtonHoverStyles = {
  backgroundColor: 'inherit',
  color: '#E4BB97',
  textDecoration: 'underline',
  transition: 'color 0.3s ease',
};