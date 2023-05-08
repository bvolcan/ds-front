import Routes from './routes'
import { AuthContextProvider } from './context/AuthContext'

function App() {
	return (
		<AuthContextProvider>
			<Routes />
		</AuthContextProvider>
	)
}

export default App
