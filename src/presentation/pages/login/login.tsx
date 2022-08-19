import React from 'react'
import Styles from './login-styles.scss'

import { Logo } from '@/presentation/components/logo/logo'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header>
        <Logo />
        <h1>
					Enquete para programadores
        </h1>
      </header>
      <form action="">
        <h2>Login</h2>

        <input type="email" name='email' placeholder='Informe o seu email' />
        <input type="password" name='password' placeholder='Informe a sua senha' />
        <button type="submit" className={Styles.submit}>Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <span className={Styles.error}>
						Usuário ou senha inválidos
          </span>
        </div>
      </form>
      <footer />
    </div>
  )
}

export default Login
