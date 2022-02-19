import { createTheme } from '@mui/material/styles';

// TODO: Come back and review if we're ever going to use these colors
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    twitch: Palette['primary'];
    youtube: Palette['primary'];
    trovo: Palette['primary'];
    facebook: Palette['primary'];
    tiktok: Palette['primary'];
    reddit: Palette['primary'];
  }

  interface PaletteOptions {
    twitch: PaletteOptions['primary'];
    youtube: PaletteOptions['primary'];
    trovo: PaletteOptions['primary'];
    facebook: PaletteOptions['primary'];
    tiktok: PaletteOptions['primary'];
    reddit: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  shape: {
    borderRadius: 5,
  },
  palette: {
    background: {
      paper: '#272727',
    },
    twitch: {
      main: '#a970ff',
    },
    youtube: {
      main: '#fd0001',
    },
    trovo: {
      main: '#19cd6d',
    },
    facebook: {
      main: '#1876f1',
    },
    tiktok: {
      main: '#65c1c8',
    },
    reddit: {
      main: '#fb3a05',
    },
    mode: 'dark',
  },
});
