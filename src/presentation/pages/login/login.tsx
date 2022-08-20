import React from 'react'
import Styles from './login-styles.scss'

import Footer from '@/presentation/components/footer/footer'
import LoginHeader from '@/presentation/components/login-header/login-header'
import Input from '@/presentation/components/input/input'
import FormStatus from '@/presentation/components/form-status/form-status'

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
