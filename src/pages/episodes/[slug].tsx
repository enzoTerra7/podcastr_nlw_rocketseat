import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import { api } from '../../services/api';

import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import styles from './episode.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';


type EpisodeType = {
    id: string;
    title: string;
    members: string;
    publishedAt: string;
    thumbnail: string;
    duration: number;
    url: string;
    durationString: string;
    description: string;
}

type EpisodeProps = {
    episode: EpisodeType
}

export default function Episode ({ episode }: EpisodeProps) {

    const { handlePlay } = useContext(PlayerContext);

    return (
        <div className={styles.episode}>

            <Head>
                <title>Podcastr - {episode.title}</title>
            </Head>
            <div className={styles.thumbnailContainer}>
                <Link href='/'>
                    <button type="button">
                        <img src="/arrow-left.svg" alt="Voltar"/>
                    </button>
                </Link>
                <Image width={700} height={160} src={episode.thumbnail} objectFit="cover"/>
                <button type="button" onClick={() => handlePlay(episode)}>
                    <img src="/play.svg" alt="Ouvir podcast"/>
                </button>
            </div>

            <header>
                <h1>{episode.title}</h1>
                <span>{episode.members}</span>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationString}</span>
            </header>

            <div className={styles.description} dangerouslySetInnerHTML={{ __html: episode.description }} />

        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const { data } = await api.get('episodes', {
        params: {
            _limimt: 2,
            _sort: 'published_at',
            _order: 'desc',
        }
    })

    const paths = data.map( e => {
        return {
            params: {
                slug: e.id
            }
        }
    })

    return{
        paths,
        fallback: 'blocking',
    }
};

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { slug } = ctx.params
    
    const { data } = await api.get(`/episodes/${slug}`)

    const episode = {
      id: data.id,
      title: data.title,
      thumbnail: data.thumbnail,
      members: data.members,
      publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(data.file.duration),
      durationString: convertDurationToTimeString(Number(data.file.duration)),
      description: data.description,
      url: data.file.url,
    }
    
    return{
        props: {
            episode,
        },
        revalidate: 60 * 60 * 12,
    }
}