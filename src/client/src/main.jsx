import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalProvider } from './hooks/GlobalProvider';
import './main.css'

// Components
import Header from './components/header';
import ConverterForm from './components/ConverterForm';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <Header />
    </GlobalProvider>
  </StrictMode>,
)