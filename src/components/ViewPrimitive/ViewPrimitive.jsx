import { getNodeType } from '../../utils/tree'
import ViewKey from '../ViewKey/ViewKey'
import './ViewPrimitive.css'

const ViewPrimitive = ({ node, nodeName, isInitial }) => {
  const type = getNodeType(node)

  return (
    <div className="primitive-row">
      <ViewKey nodeName={nodeName} nodeType={type} isInitial={isInitial} />
      <div>{String(node)}</div>
    </div>
  )
}

export default ViewPrimitive
