'use client';
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
    typography: {
        fontFamily: 'var(--font-roboto), sans-serif',
    },
});

export default theme;