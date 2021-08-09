import Head from 'next/head'
import Image from 'next/image'
import Slider from '../src/components/Slider'
import Br from '../src/components/Br'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
        <div>
          <Head>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          </Head>

            <Slider/>
        </div>
  )
}
