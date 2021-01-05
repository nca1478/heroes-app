import React from 'react'

export const LoginScreen = ({ history }) => {
  const handleClick = () => {
    // history.push('/marvel')
    history.replace('/marvel')
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />

      <button onClick={handleClick} className="btn btn-primary">
        Login
      </button>
    </div>
  )
}
