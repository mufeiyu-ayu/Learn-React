import { Button } from 'antd'

export default function Button2({ count, setCount }: { count: number, setCount: (count: number) => void }) {
  return <Button onClick={() => setCount(count - 1)}>点击-1</Button>
}
