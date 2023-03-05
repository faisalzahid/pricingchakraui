'use client'


import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import Pricing from './components/Pricing'
import Features from './components/Features'

export default function Home() {
  return (
    <>
    <Header/>
    <Pricing/>
    <Features/>
    </>
  )
}
