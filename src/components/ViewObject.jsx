import { useState } from 'react'
import { createRenderTree } from '../utils/tree'
import ViewKey from './ViewKey/ViewKey'

const ViewObject = ({ node, nodeName, isCanBeExpanded, isInitial }) => {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleExpanded = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsExpanded(prev => !prev)
  }

  return (
    <div className={`${isInitial ? 'initial' : 'object-block'}`}>
      <ViewKey
        nodeName={nodeName}
        nodeType={'object'}
        toggleExpanded={toggleExpanded}
        isCanBeExpanded={isCanBeExpanded}
        isExpanded={isExpanded}
        isInitial={isInitial}
      />
      {isCanBeExpanded && isExpanded &&
        <>
          {Object.keys(node).map(currentNodeName => createRenderTree(node[currentNodeName], currentNodeName))}
          <div>{'}'}</div>
        </>}
    </div>
  )
}

export default ViewObject
