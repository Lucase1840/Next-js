// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Container from '../components/container/Container'
import Toggle from '../components/Toggle/Toggle'

export default function Home() {

  return (
    <Container>
      <h1>My page</h1>
      <h1>Change backgorund color with toogle</h1>
      <Toggle />
    </Container>
  )
}

