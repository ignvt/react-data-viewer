import './ViewKey.css'

const ViewKey = ({ nodeName, nodeType, toggleExpanded, isCanBeExpanded, isExpanded, isInitial }) => {
  let separatorView = ':'

  if (nodeType === 'object') {
    if (isInitial) {
      separatorView = '{'
    } else {
      if (isCanBeExpanded) {
        if (isExpanded) {
          separatorView = '{'
        } else {
          separatorView = '{ ... }'
        }
      } else {
        separatorView = '{}'
      }
    }
  }

  if (nodeType === 'array') {
    if (isInitial) {
      separatorView = '['
    } else {
      if (isCanBeExpanded) {
        if (isExpanded) {
          separatorView = '['
        } else {
          separatorView = '[ ... ]'
        }
      } else {
        separatorView = '[]'
      }
    }

  }

  return (
    <div onClick={toggleExpanded} style={{ display: 'flex', alignItems: 'center' }}>
      {isCanBeExpanded && <div>{isExpanded ? '-' : '+'}</div>}
      {!isInitial && <div>{`"${nodeName}"`}</div>}
      <div className={`type ${nodeType}`}>{nodeType}</div>
      <div className={`separator ${nodeType}`}>{separatorView}</div>
    </div>
  )
}

export default ViewKey
