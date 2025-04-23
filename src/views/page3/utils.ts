export function getImageUrl(person: { imageId: string }, size = 's') {
  return (
    `https://i.imgur.com/${
      person.imageId
    }${size
    }.jpg`
  )
}
