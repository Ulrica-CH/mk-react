import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const NotFound: FC<IProps> = () => {
  return <div className="">404</div>
}
export default NotFound
