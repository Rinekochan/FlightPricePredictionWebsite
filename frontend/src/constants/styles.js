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
  transition: 'color 0.2s ease',
};

// Resuable normal button styles
export const normalButtonStyles = {
  width: '145px',
  height: '40px',
  borderRadius: '20px',
}

export const normalButtonHoverStyles = {
  transition: 'transform 0.3s ease', // Smooth transition for size change
  '&:hover': {
    transform: 'scale(1.1)', // Increase size on hover
  },
}