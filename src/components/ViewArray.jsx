import { useState } from 'react'
import { createRenderTree } from '../utils/tree'
import ViewKey from './ViewKey/ViewKey'

const ViewArray = ({ node, nodeName, isCanBeExpanded, isInitial }) => {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleExpanded = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsExpanded(prev => !prev)
  }

  return (
    <div className={`${isInitial ? 'initial' : 'array-block'}`}>
      <ViewKey
        nodeName={nodeName}
        nodeType={'array'}
        toggleExpanded={toggleExpanded}
        isCanBeExpanded={isCanBeExpanded}
        isExpanded={isExpanded}
        isInitial={isInitial}
      />
      {isCanBeExpanded && isExpanded &&
        <>
          {node.map((child, index) => createRenderTree(child, index))}
          <div>{']'}</div>
        </>}
    </div>
  )
}

export default ViewArray
