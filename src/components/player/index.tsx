import Image from 'next/image';

import { useContext, useEffect, useRef, useState } from 'react';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import {PlayerContext} from '../../contexts/PlayerContext'


import styles from './styles.module.scss'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

export function Player () {

    const [progress, setProgress] = useState(0)

    const audioRef = useRef<HTMLAudioElement>(null);

    const { episodeList, currentEpisodeIndex, isPlaying, handleTogglePlay, handleKeyboardTogglePlay, handlePreviousEpisode, handleNextEpisode, isLooping, toogleLoop, handleToggleShuffle, isShuffling, handleClearPlayer } = useContext(PlayerContext);

    useEffect( () => {
        if(!audioRef.current){
            return;
        }
        if(isPlaying){
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    const episode = episodeList[currentEpisodeIndex]

    const setupProgressListener = () => {

        audioRef.current.currentTime = 0
        audioRef.current.addEventListener('timeupdate', () => {
            setProgress(Math.floor(audioRef.current.currentTime));
        })
        
    }

    const handleSliderValue = (amount: number) => {
        audioRef.current.currentTime = amount;
        setProgress(amount);
    }

    const nextEpisodeEndend = () => {
        if(isShuffling || (currentEpisodeIndex + 1 ) < episodeList.length){
            handleNextEpisode()
        } else {
            handleClearPlayer()
        }
    }

    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="tocando agor"/>
                <strong>Tocando agora</strong>
            </header>

            {episode ? (
                <div className={styles.currentEpisode}>
                    <Image width={592} height={592} src={episode.thumbnail} objectFit='cover'/>
                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>
                </div>
            ) : (
                <div className={styles.emptyPlayer}>
                    <strong>Selecione um podcast para ouvir</strong>
                </div>
            )}

            <footer className={!episode ? styles.empty : ''}>
                <div className={styles.progress}>
                    <span>{ convertDurationToTimeString(progress)}</span>
                    <div className={styles.slider}>
                        { episode ? (
                            <Slider value={progress} max={episode.duration} trackStyle={{ backgroundColor: '#84d361'}} handleStyle={{ borderColor: '#84d361', borderWidth: 4}} railStyle={{ backgroundColor: '#9f75ff'}} onChange={handleSliderValue}/>
                        ) : (
                            <div className={styles.emptySlider} />
                        )}
                    </div>
                    <span>{ convertDurationToTimeString(episode?.duration ?? 0)}</span>
                </div>

                {episode && (
                    <audio src={episode.url} autoPlay ref={audioRef} onPlay={() => handleKeyboardTogglePlay(true)} onPause={() => handleKeyboardTogglePlay(false)} loop={isLooping} onLoadedMetadata={() => setupProgressListener() } onEnded={nextEpisodeEndend} />
                )}

                <div className={styles.buttons}>
                    <button type="button" disabled={!episode || episodeList.length <= 1} onClick={() => handleToggleShuffle()} className={isShuffling && styles.active}>
                        <img src="/shuffle.svg" alt="aleatório"/>
                    </button>

                    <button type="button" disabled={!episode || currentEpisodeIndex == 0 ? true : false} onClick={() => handlePreviousEpisode()}>
                        <img src="/play-previous.svg" alt="tocar anterior"/>
                    </button>

                    <button type="button" className={styles.playerButton} disabled={!episode} onClick={() => handleTogglePlay()}>
                        <img src={isPlaying ? '/pause.svg' : "/play.svg"} alt="tocar"/>
                    </button>

                    <button type="button" disabled={!episode || currentEpisodeIndex + 1 >= episodeList.length ? true : false} onClick={() => handleNextEpisode()}>
                        <img src="/play-next.svg" alt="tocar próxima "/>
                    </button>

                    <button type="button" disabled={!episode} onClick={() => toogleLoop()} className={isLooping && styles.active}>
                        <img src="/repeat.svg" alt="repetir"/>
                    </button>

                </div>

            </footer>

        </div>
    );
}