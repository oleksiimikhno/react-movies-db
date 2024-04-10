import { CssBaseline, AppBar, Toolbar, Link, ThemeProvider, createTheme, Typography } from '@mui/material'
import { LiveTvOutlined } from '@mui/icons-material'
import './App.scss'
import { Link as RouterLink, Outlet } from 'react-router-dom'

interface IHeaderLink {
  to: string;
  children: React.ReactNode | string;
}

function HeaderLink ({ to, children}: IHeaderLink) {
  return (
    <Link
      component={RouterLink}
      to={to}
      varian="button"
      color="inherit"
      sx={{ my: 1, mx: 1.5 }}
    >
      {children}
    </Link>
  );
}

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#008080"
    },
    secondary: {
      main: "#96800f"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <LiveTvOutlined sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit">
            The movie DB
          </Typography>
          <nav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/about">About</HeaderLink>
            <HeaderLink to="/movies">Movies</HeaderLink>
          </nav>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  )
}

export default App
