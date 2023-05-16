import { AppProps } from 'next/app'
import '../styles/global.css'
import { Provider } from 'react-redux'
import store from '../store/store'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({

  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'monospace'
  },
}
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
