import AppError from '@common/error/AppError'
import React, { useState } from 'react'
import { ToastAndroid } from 'react-native'
import LoginPageContent from './LoginPageContent'
import LoginPageProps from './model/LoginPageProps'

const HomePage = ({
  controller,
  styles
}: LoginPageProps) => {

  // ---------------------------------------------  states and variables  ---------------------------------------------
  const [processing, setProcessing] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('Arash');
  const [password, setPassword] = useState<string>('Arash');

  // ---------------------------------------------  functions  ---------------------------------------------
  const login = () => {
    controller.login(username, password)
      .then(data => {
      })
      .catch((error: AppError) => {
        ToastAndroid.show(error.message, 3000)
      })
      .catch((error) => {
        ToastAndroid.show('hi', 3000)
      })
  }

  // ---------------------------------------------  handlers  ---------------------------------------------
  const handleUsernameInputChange = (text: string) => {
    setUsername(text);
  }

  const handlePasswordInputChange = (text: string) => {
    setPassword(text);
  }

  // ---------------------------------------------  component render  ---------------------------------------------
  return (
    <LoginPageContent
      processing={processing}
      styles={styles}
      usernameInputValue={username}
      usernameInputOnChange={handleUsernameInputChange}
      passwordInputValue={password}
      passwordInputOnChange={handlePasswordInputChange}
    />
  )

}

export default HomePage