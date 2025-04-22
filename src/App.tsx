import { Menu } from 'antd'
import React from 'react'
import { Outlet, useNavigate } from 'react-router'

import { routes } from './router/route'

const App: React.FC = () => {
  const navigate = useNavigate()

  const onClick = (e) => {
    navigate(e.key)
  }

  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex">
        <div>
          <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={routes}
          />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>

  )
}

export default App
