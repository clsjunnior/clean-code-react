import React from 'react'
import Styles from './login-styles.scss'

import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form action="">
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Informe o seu email" />
        <Input type="password" name="password" placeholder="Informe a sua senha" />
        <button type="submit" className={Styles.submit}>
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
