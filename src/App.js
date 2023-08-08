import {AuthProvider} from './context/Auth'
import Routes from './Routes'


function App() {
  return (
    <AuthProvider>
    <Routes/>
    </AuthProvider>
  )
}

export default App
