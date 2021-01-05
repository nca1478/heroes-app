import React, { useMemo } from 'react'
import { getHeroeByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher])

  return (
    <div className="card-columns">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  )
}
