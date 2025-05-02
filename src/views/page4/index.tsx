import { useState } from 'react'
import { sculptureList } from './data'

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  const hasNext = index < sculptureList.length - 1

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1)
    }
    else {
      console.log(index)
      setIndex(0)
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore)
  }

  const sculpture = sculptureList[index]
  return (
    <>
      {index}
      ==index
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>
          {sculpture.name}
          {' '}
        </i>
        by
        {' '}
        {sculpture.artist}
      </h2>
      <h3>
        (
        {index + 1}
        {' '}
        of
        {' '}
        {sculptureList.length}
        )
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'}
        {' '}
        details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  )
}
