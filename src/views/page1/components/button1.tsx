import { Button } from 'antd'

interface Button1Props {
  /** 当前计数 */
  count: number
  /** 设置计数 */
  setCount: (count: number) => void
}
export default function Button1(res: Button1Props) {
  return (
    <>
      <Button onClick={() => res.setCount(res.count + 1)}>+1</Button>

    </>
  )
}
