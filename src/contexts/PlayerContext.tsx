import { createContext, ReactNode, useState } from 'react';

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayerData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    isLooping: boolean;
    isShuffling: boolean;
    handlePlay: (episode: Episode) => void;
    handleTogglePlay: () => void;
    handleKeyboardTogglePlay: (state: boolean) => void;
    handlePlayList: (list: Episode[], index: number) => void;
    handleNextEpisode: () => void;
    handlePreviousEpisode: () => void;
    toogleLoop: () => void;
    handleToggleShuffle: () => void;
    handleClearPlayer: () => void;
}

type PlayerFuncProps = {
  children: ReactNode;
}

export const PlayerContext = createContext( {} as PlayerData )

export function PlayerFunc ({children}: PlayerFuncProps ) {
  const [episodeList, setEpisodeList] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

  const handleClearPlayer = () => {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  const handlePlay = (episode: Episode) => {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true)
  }

  const toogleLoop = () => {
    setIsLooping(!isLooping)
  }

  const handleToggleShuffle = () => {
    setIsShuffling(!isShuffling)
  }

  const handleNextEpisode = () =>{

    if(isShuffling){
      const randomIndex = Math.floor(Math.random() * episodeList.length)
      setCurrentEpisodeIndex(randomIndex)
    }
    else if (isShuffling || currentEpisodeIndex + 1 >= episodeList.length){
      return
    }else {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
    
  }

  const handlePreviousEpisode = () =>{

    if(isShuffling){
      const randomIndex = Math.floor(Math.random() * episodeList.length)
      setCurrentEpisodeIndex(randomIndex)
    }
    else if (isShuffling || currentEpisodeIndex > 0){
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
    
  }

  const handlePlayList = (list: Episode[], index: number) => {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true)
  }

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleKeyboardTogglePlay = (state: boolean) => {
    setIsPlaying(state)
  }

  return (
    <PlayerContext.Provider value={{ isLooping, isShuffling, episodeList, currentEpisodeIndex, isPlaying, handlePlay, handleTogglePlay, handleKeyboardTogglePlay, handlePlayList, handleNextEpisode, handlePreviousEpisode, toogleLoop, handleToggleShuffle, handleClearPlayer}}>
      {children}
    </PlayerContext.Provider>
  )

}