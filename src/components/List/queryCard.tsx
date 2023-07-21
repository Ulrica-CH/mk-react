import { FC, ReactNode } from 'react'

interface IProps {
  id: string
  title: string
  isPublished: boolean
  deleteQues: (id: string) => void
  editQues: (id: string) => void
  children?: ReactNode
}

const QueryCard: FC<IProps> = ({ id, title, isPublished, deleteQues, editQues }) => {
  return (
    <div key={id} className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {/* 条件判断 */}
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button onClick={() => editQues(id)}>编辑问卷</button>
      <button onClick={() => deleteQues(id)}>删除问卷</button>
    </div>
  )
}

export default QueryCard
