import { Button } from 'antd'
import { useState } from 'react'

export default function Page4() {
  const [count, setCount] = useState(0)
  return (
    <div>

      <div className="flex gap-4">
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
        <Button onClick={() => {
          setCount(() => count + 3)
        }}
        >
          Click me
        </Button>
      </div>

      <p>
        Count:
        {count}
      </p>
    </div>
  )
}
