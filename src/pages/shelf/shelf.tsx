// @ts-ignore
import React, {Component, useState} from 'react'
import {View, Text, Image} from '@tarojs/components'

// @ts-ignore
import search from '../../assets/icon/ic_search.png'
// @ts-ignore
import history from '../../assets/icon/ic_history.png'

import './shelf.scss'

interface IconItem {
  icon: any,
  label: string,
  style: StyleData
}
interface StyleData{
  width: string,
  height: string
}

export default function Shelf() {

  const bookList = [
    {img: 'https://bookcover.yuewen.com/qdbimg/349573/1024969712/150', title: '开局签到如来神掌', sub: '第八百四十三章：都得死'},
    {img: 'https://bookcover.yuewen.com/qdbimg/349573/1024792501/150', title: '穿越八年才出道', sub: '第八百四十三章：都得死'},
    {img: 'https://bookcover.yuewen.com/qdbimg/349573/1024525575/150', title: '全球神祇时代', sub: '第八百四十三章：都得死'},
    {img: 'https://bookcover.yuewen.com/qdbimg/349573/1022282526/150', title: '全职艺术家', sub: '第八百四十三章：都得死'},
    {img: 'https://bookcover.yuewen.com/qdbimg/349573/1022282526/150', title: '全职艺术家', sub: '第八百四十三章：都得死'},
    {img: 'https://bookcover.yuewen.com/qdbimg/349573/1022282526/150', title: '全职艺术家', sub: '第八百四十三章：都得死'},
    {img: 'https://bookcover.yuewen.com/qdbimg/349573/1022282526/150', title: '全职艺术家', sub: '第八百四十三章：都得死'},
    {img: 'https://bookcover.yuewen.com/qdbimg/349573/1022282526/150', title: '全职艺术家', sub: '第八百四十三章：都得死'},
    {img: 'https://bookcover.yuewen.com/qdbimg/349573/1022282526/150', title: '全职艺术家', sub: '第八百四十三章：都得死'},
  ]
  const iconList: IconItem[] = [
    {icon: search, label: '搜索', style:  {
        width: '20px',
        height: '20px'
      }},
    {icon: history, label: '阅读历史', style: {
        width: '22px',
        height: '22px'
      }},
  ]

  const BookListView: any  = bookList.map(v => {
    return (
      <View className='book-item'>
        <Image src={v.img} className='book-img'  />
        <View className='book-content'>
          <Text className='title'>{v.title}</Text>
          <Text className='sub'>读到：{v.sub}</Text>
        </View>
      </View>
    )
  })

  const iconListView: any = iconList.map(v => {
    return(
      <View className='icon'>
        {/*<AtIcon value={v.icon} size={v.size} color='#000' />*/}
        <Image src={v.icon} style={v.style} />
        <Text className='icon-text'>{v.label}</Text>
      </View>
    )
  })

  return (
    <View className='shelf'>
      {/*<Text>首页</Text>*/}
      <View className='header'>
         <View className='title-name'>免费小说</View>
        <View className='right'>
          {iconListView}
        </View>
      </View>
      <View className='book'>
        {BookListView}
      </View>
    </View>
  )
}
