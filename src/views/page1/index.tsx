import { Button } from 'antd'
import { useState } from 'react'
import Button1 from './components/button1'
import Button2 from './components/button2'

export default function Page1() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="w-full flex gap-2 items-center">
        <Button1 count={count} setCount={setCount} />
        <Button2 count={count} setCount={setCount} />
        <span>{count}</span>
      </div>
    </div>
  )
}
