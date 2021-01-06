import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext)

  const handleClick = () => {
    // history.push('/marvel')
    dispatch({
      type: types.login,
      payload: {
        name: 'Luke Skywalker'
      }
    })

    history.replace('/marvel')
  }

  return (
    <div className="container mt-2">
      <h1>Login</h1>
      <hr />

      <button onClick={handleClick} className="btn btn-primary">
        Login
      </button>
    </div>
  )
}
