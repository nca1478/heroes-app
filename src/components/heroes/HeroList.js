import React from 'react'
import { getHeroeByPublisher } from '../../selectors/getHeroByPublisher'

export const HeroList = ({ publisher }) => {
  const heroes = getHeroeByPublisher(publisher)

  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </ul>
  )
}
