import type { MenuProps } from 'antd'
import Page1 from '@/views/page1'
import Page2 from '@/views/page2'
import Page3 from '@/views/page3'
import Page4 from '@/views/page4'
import { AppstoreOutlined } from '@ant-design/icons'

export const routes = [
  {
    label: '初学 react',
    icon: <AppstoreOutlined />,
    key: '/page1',
    element: <Page1 />,
  },
  {
    label: '九宫格',
    icon: <AppstoreOutlined />,
    key: '/page2',
    element: <Page2 />,
  },
  {
    label: 'page3',
    icon: <AppstoreOutlined />,
    key: '/page3',
    element: <Page3 />,
  },
  {
    label: 'page4',
    icon: <AppstoreOutlined />,
    key: '/page4',
    element: <Page4 />,
  },
]
