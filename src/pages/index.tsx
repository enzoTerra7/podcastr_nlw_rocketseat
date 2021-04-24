import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link'

import { api } from '../services/api';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

import styles from './home.module.scss';
import { useContext } from 'react';
import {PlayerContext} from '../contexts/PlayerContext'

type Episode = {
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  thumbnail: string;
  duration: number;
  url: string;
  durationString: string;
}

type HomeProps = {
  latestEpisodes: Episode[];
  allEpisodes
}

export default function Home({latestEpisodes, allEpisodes} : HomeProps) {

  const { handlePlayList } = useContext(PlayerContext);

  const episodeList = [...latestEpisodes, ...allEpisodes]

  return (
    <div className={styles.homepage}>

    <Head>
      <title>Podcastr | O melhor para você ouvir sempre

 </title>
    </Head>

      <section className={styles.latestEpisodes}>
        <h2>Últimos lançamentos</h2>
        <ul>
          {latestEpisodes.map( (ep, index) => {
            return(
              <li key={ep.id}>
                <Image width={192} height={192} src={ep.thumbnail} alt={ep.title} objectFit="cover" />

                <div className={styles.episodesDetails}>
                  <Link href={`/episodes/${ep.id}`}>
                    <a>{ep.title}</a>
                  </Link>
                  <p>{ep.members}</p>
                  <span>{ep.publishedAt}</span>
                  <span>{ep.durationString}</span>
                </div>

                <button type="button" onClick={ () => handlePlayList(episodeList, index)}>
                  <img src="/play-green.svg" alt="ouvir o podcast"/>
                </button>

              </li>
            )
          })}
        </ul>
      </section>

      <section className={styles.allEpisodes}>
        <h2>Todos os episódios</h2>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
          
            {allEpisodes.map( (ep, index) => {
              return(
                <tr key={ep.id}>
                  <td style={{ width: 100 }}>
                    <Image width={120} height={120} src={ep.thumbnail} alt={ep.title} objectFit="cover"/>
                  </td>
                  <td>
                    <Link href={`/episodes/${ep.id}`}>
                      <a>{ep.title}</a>
                    </Link>
                  </td>
                  <td>{ep.members}</td>
                  <td style={{ width: 100 }}>{ep.publishedAt}</td>
                  <td>{ep.durationString}</td>
                  <td>
                    <button type="button">
                      <img src="/play-green.svg" alt="Ouvir podcast" onClick={ () => handlePlayList(episodeList, index + latestEpisodes.length)}/>
                    </button>
                  </td>
                </tr>
              )
            })}
          
          </tbody>

        </table>
      </section>

    </div>
  )
}
export const getStaticProps: GetStaticProps = async () =>{
  const { data } = await api.get('episodes', {
    params: {
      _limimt: 12,
      _sort: 'published_at',
      _order: 'desc',
    }
  })

  const episodes = data.map(ep => {
    return {
      id: ep.id,
      title: ep.title,
      thumbnail: ep.thumbnail,
      members: ep.members,
      publishedAt: format(parseISO(ep.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(ep.file.duration),
      durationString: convertDurationToTimeString(Number(ep.file.duration)),
      url: ep.file.url,
    }
  })

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length)

  return{
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  }

}