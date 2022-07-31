import AppError from '@common/error/AppError'
import React, { useState } from 'react'
import { ToastAndroid } from 'react-native'
import HomePageContent from './HomePageContent'
import HomePageProps from './model/HomePageProps'

const HomePage = ({
  controller,
  styles
}: HomePageProps) => {

  const [processing, setProcessing] = useState<boolean>(true)
  const [name, setName] = useState<string>('Arash')

  const getUserInfo = () => {
    controller.getName(2)
      .then(data => {
        setName(data);
      })
      .catch((error: AppError) => {
        ToastAndroid.show(error.message, 3000);
      })
      .catch((error) => {
        ToastAndroid.show('hi', 3000);
      })
  }

  return (
    <HomePageContent
      processing={processing}
      name={name}
      styles={styles}
    />
  )
}

export default HomePage