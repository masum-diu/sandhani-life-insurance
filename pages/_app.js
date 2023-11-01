
import '@/styles/globals.css'
import { Box, ThemeProvider } from '@mui/material'
import theme from './theme'

export default function App({ Component, pageProps }) {
  return <Box>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>

  </Box>
}
