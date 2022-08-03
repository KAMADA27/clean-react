import React, { useState } from 'react'
import Styles from './signup-styles.scss'
import { Footer, FormStatus, LoginHeader, Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const SignUp: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    nameError: 'Campo obrigatório',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })

  return (
    <div className={ Styles.signup }>
      <LoginHeader />
      <Context.Provider value={{ state }}>
        <form className={ Styles.form }>
          <h2>Criar conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
          <button
            data-testid="submit"
            className={ Styles.submit }
            type="submit"
            disabled
          >
            Entrar
          </button>
          <span className={ Styles.link }>Voltar para o login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default SignUp