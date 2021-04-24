import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import { Player } from '../components/player'
import { Header } from '../components/header'
import { PlayerFunc } from '../contexts/PlayerContext'

function MyApp({ Component, pageProps }) {
  return(
    <PlayerFunc>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerFunc>
  )
}

export default MyApp
