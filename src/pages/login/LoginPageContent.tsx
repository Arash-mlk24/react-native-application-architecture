import React from 'react'
import { View, Text, TextInput } from 'react-native'
import LoginPageContentProps from './model/LoginPageContentProps'

const LoginPageContent = ({
  processing,
  styles,
  usernameInputValue,
  usernameInputOnChange,
  passwordInputValue,
  passwordInputOnChange,
}: LoginPageContentProps) => {

  return (
    <View>
      {processing ?

        <View>
          loading
        </View> :

        <View>
          <TextInput
            value={usernameInputValue}
            onChangeText={usernameInputOnChange}
          />
          <TextInput
            value={passwordInputValue}
            onChangeText={passwordInputOnChange}
          />
        </View>
      }
    </View>
  )

}

export default LoginPageContent