import React, { createContext, useContext, useState } from 'react'
import { loginRequest } from '../services'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
	// eslint-disable-next-line
	const [userData, setUserData] = useState({})
	// eslint-disable-next-line
	const [isLogged, setIsLogged] = useState(false)
	// eslint-disable-next-line
	const [authLoading, setAuthLoading] = useState(true)
	// eslint-disable-next-line
	const [isProfessor, setIsProfessor] = useState(false)

	const login = async (email, password) => {
		try {
			const { data } = await loginRequest(email, password)
			setUserData(data)
			setIsLogged(true)
			localStorage.setItem('isProfessor', false)
			if (data.user.professor) {
				setIsProfessor(true)
				localStorage.setItem('isProfessor', true)
			}
			localStorage.setItem('token', data.token)
			localStorage.setItem('userEmail', data.user.email)
			setAuthLoading(false)
			return data
		} catch (error) {
			setAuthLoading(false)
			return false
		}
	}

	const logout = () => {
		localStorage.removeItem('token')
		setUserData({})
		setIsLogged(false)
	}

	return (
		<AuthContext.Provider
			value={{
				login,
				logout
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
