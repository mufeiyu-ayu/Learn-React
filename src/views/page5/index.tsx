import { Button } from 'antd'
import * as React from 'react'

export default function ChangeObjState() {
  const [state, setState] = React.useState({
    name: 'John',
    age: 30,
    city: 'New York',
    hobby: {
      play: 'basketball',
      watch: 'football',
      read: 'book',
    },
  })

  const changeName = () => {
    setState(() => Object.assign({}, state, { name: 'Jane' }))
  }
  const changeHobby = () => {
    setState(() => Object.assign({}, state, { hobby: { ...state.hobby, play: 'soccer' } }))
  }

  return (
    <>
      <div>
        <h1>Change Object State</h1>
        <div className="flex gap-4">
          <p>
            Name:
            {state.name}
          </p>
          <p>
            Age:
            {state.age}
          </p>
          <p>
            City:
            {state.city}
          </p>
        </div>
        <p>Hobby:</p>
        <ul>
          <li>
            Play:
            {state.hobby.play}
          </li>
          <li>
            Watch:
            {state.hobby.watch}
          </li>
          <li>
            Read:
            {state.hobby.read}
          </li>
        </ul>
        <div className="flex gap-4">
          <Button onClick={changeName}>changeName</Button>
          <Button>changeName</Button>
          <Button onClick={changeHobby}>changeHobby</Button>
          <Button>changeHobby</Button>
        </div>
      </div>
    </>
  )
}
