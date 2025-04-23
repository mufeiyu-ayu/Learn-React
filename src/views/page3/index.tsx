import { getImageUrl } from './utils'

export default function Profile() {
  const a = 1
  return (
    <Card a={a}>
      <Avatar

        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
    </Card>
  )
}

function Avatar({ person, size }: { person: { name: string, imageId: string }, size: number }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

function Card({ children, a }: { children: React.ReactNode, a: number }) {
  console.log(a, 'a')

  console.log(children, 'children')
  return (
    <div className="card">
      {children}
    </div>
  )
}
