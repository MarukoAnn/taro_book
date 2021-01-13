// @ts-ignore
import React, {Component, useState} from 'react'
import {View, Text} from '@tarojs/components'
import {AtTabBar} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入

import './sort.scss'


export default function Sort() {

  return (
    <View className='sort'>
      <Text>分类</Text>
    </View>
  )
}
