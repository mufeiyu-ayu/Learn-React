import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import { routes } from './router/route'
import '@ant-design/v5-patch-for-react-19'
import './assets/tailwind.css'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {routes.map(route => (
          <Route key={route.key} path={route.key} element={route.element} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>,
)
