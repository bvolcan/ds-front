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
	// eslint-disable-next-line
	const [isAdmin, setIsAdmin] = useState(false)

	const login = async (email, password) => {
		try {
			const { data } = await loginRequest(email, password)
			localStorage.setItem('userName', data.user.name)
			setUserData(data)
			setIsLogged(true)
			localStorage.setItem('isProfessor', false)
			if (data.user.admin) {
				setIsAdmin(true)
				localStorage.setItem('isAdmin', true)
			} else if (data.user.professor) {
				setIsAdmin(false)
				setIsProfessor(true)
				localStorage.setItem('isAdmin', false)
				localStorage.setItem('isProfessor', true)
			} else {
				setIsAdmin(false)
				setIsProfessor(false)
				localStorage.setItem('isAdmin', false)
				localStorage.setItem('isProfessor', false)
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
