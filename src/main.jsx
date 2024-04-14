import React,{useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, useTheme } from "./context/Theme"

const BodyThemeStyles = () => {
  const { mode } = useTheme();

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  // return null; 
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <BodyThemeStyles/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
