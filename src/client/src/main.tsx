import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hello World!</h1>
  </StrictMode>
)

// TODO: Opção de converter o tom de uma musica apenas e não salvar essa conversão.
// Mas oferecer a opção de o usuário poder se autenticar e salvar suas modificações