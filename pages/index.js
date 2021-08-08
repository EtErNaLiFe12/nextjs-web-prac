import Head from 'next/head'
import Image from 'next/image'
import Br from '../src/components/Br'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
        <div>
          <div className={"mv_item mv_item2"}>
          <div className={"wrapper"}>
            <h1>
              유·아동 재능 발견
              <Br />
              콘텐츠 플랫폼
              <b>아이쿠카</b>
            </h1>
          </div>
                </div>
                <div className={"mv_item mv_item1"}>
          <div className={"wrapper"}>
            <h1>
              <b>
                유·아동 재능 발견 전문 <Br is={"mobile"} />
                크리에이터들의
              </b>
              특별한 프로그램을 <Br />
              집과 인터넷에서 배워요!
            </h1>
          </div>
                </div>
        </div>
  )
}
