import React, { useState } from 'react'
import Styles from './login-styles.scss'

import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false
  })

  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, errorState }}>
        <form action="">
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Informe o seu email" />
          <Input type="password" name="password" placeholder="Informe a sua senha" />
          <button data-testid="submit" disabled type="submit" className={Styles.submit}>
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
