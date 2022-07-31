import React from 'react'
import { View, Text } from 'react-native'
import HomePageContentProps from './model/HomePageContentProps'

const HomePageContent = ({
  processing,
  name,
  styles,
}: HomePageContentProps) => {

  return (
    <View>
      {processing ?

        <View>
          loading
        </View> :

        <View>
          <Text>
            {name}
          </Text>
        </View>
      }
    </View>
  )

}

export default HomePageContent