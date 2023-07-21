import { FC, useState } from 'react'
import { produce } from 'immer'
import QueryCard from './queryCard'

interface Question {
  id: string
  title: string
  isPublished: boolean
}

// TS 类型
const List: FC = () => {
  const [list, setList] = useState<Question[]>([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])

  const addQues = () => {
    setList(
      produce(draft => {
        draft.push({
          id: Math.random().toString().slice(-3),
          title: `问卷${Math.random().toString().slice(-3)}`,
          isPublished: false,
        })
      })
    )
  }

  const deleteQues = (id: string) => {
    setList(
      produce(draft => {
        const index = draft.findIndex(q => q.id === id)
        if (index !== -1) {
          draft.splice(index, 1)
        }
      })
    )
  }

  const editQues = (id: string) => {
    setList(
      produce(draft => {
        const question = draft.find(q => q.id === id)
        if (question) {
          question.isPublished = true
        }
      })
    )
  }

  return (
    <div>
      <h1>问卷列表页1</h1>
      <div>
        {list.map(question => {
          const { id, title, isPublished } = question
          return (
            <QueryCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              deleteQues={deleteQues}
              editQues={editQues}
            />
          )
        })}
      </div>
      <button onClick={addQues}>add</button>
    </div>
  )
}

export default List
