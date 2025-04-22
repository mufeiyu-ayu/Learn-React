import type { MenuProps } from 'antd'
import Page1 from '@/views/page1'
import Page2 from '@/views/page2'
import { AppstoreOutlined } from '@ant-design/icons'

export const routes = [
  {
    label: '121',
    icon: <AppstoreOutlined />,
    key: '/page1',
    element: <Page1 />,
  },
  {
    label: 'page2',
    icon: <AppstoreOutlined />,
    key: '/page2',
    element: <Page2 />,
  },
]
