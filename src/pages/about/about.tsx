// @ts-ignore
import React, {Component, useState} from 'react'
import {View, Text} from '@tarojs/components'
import {AtTabBar} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入

import './about.scss'


export default function About() {

  return (
    <View className='about'>
      <Text>about</Text>
    </View>
  )
}
