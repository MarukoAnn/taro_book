// @ts-ignore
import React, {Component, useState} from 'react'
import {View, Text} from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/icon.scss"
import "taro-ui/dist/style/components/badge.scss";
import './index.scss'


export default function Index() {

  return (
    <View className='index'>
      <View className='body'>
         <Text>书城</Text>
      </View>
    </View>
  )
}
