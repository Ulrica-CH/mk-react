import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}
const MainLayout: FC<IProps> = () => {
  return (
    <div className="">
      <div>header</div>
      <div>
        <Outlet />
      </div>
      <div>footer</div>
    </div>
  )
}
export default MainLayout
