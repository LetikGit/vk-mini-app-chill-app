import React, { useState, useEffect } from 'react'
import Button from '@vkontakte/vkui/dist/components/Button/Button';

const useMultiAudio = (urls, volume) => {
  const [sources] = useState(
    urls.map(url => {
      return {
        url,
        audio: new Audio(url),
      }
    }),
  )

  const [players, setPlayers] = useState(
    urls.map(url => {
      return {
        url,
        playing: true,
      }
    }),
  )

  const toggle = targetIndex => () => {
    const newPlayers = [...players]
    const currentIndex = players.findIndex(p => p.playing === true)
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false
      newPlayers[targetIndex].playing = true
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false
    } else {
      newPlayers[targetIndex].playing = true
    }
    setPlayers(newPlayers)
  }

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause()
      source.audio.volume = volume
    })
  }, [sources, players, volume])

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener('ended', () => {
        source.audio.play()
      })
    })
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener('ended', () => {
          const newPlayers = [...players]
          newPlayers[i].playing = false
          setPlayers(newPlayers)
        })
      })
    }
  }, [])

  return [players, toggle]
}

const MultiPlayer = ({ urls, volume }) => {
  const [players, toggle] = useMultiAudio(urls, volume)
    
  return (
    <div>
      {players.map((player, i) => (
        <Player key={i} player={player} toggle={toggle(i)} />
      ))}
    </div>
  )
}

const Player = ({ player, toggle }) => (
  <div>
    <Button onClick={toggle} mode={player.playing ? 'destructive' : 'commerce'}>{player.playing ? 'Отключить' : 'Включить'}</Button>
  </div>
)


export default MultiPlayer