import React, { useState } from 'react'
import { ToastAndroid } from 'react-native'
import AppError from '@common/error/AppError'
import HomePageContent from './HomePageContent'
import HomePageProps from './model/HomePageProps'
import IHomeController from '@core/controller/IHomeController'
import HomeStyles from './HomeStyles'

const HomePage = ({
  route
}: HomePageProps) => {

  const controller: IHomeController = route.params.controller;
  const styles: HomeStyles = route.params.styles;

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