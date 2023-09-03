import ViewArray from "../components/ViewArray"
import ViewObject from "../components/ViewObject"
import ViewPrimitive from "../components/ViewPrimitive/ViewPrimitive"

export const getData = (data) => {
  const definitionData = data
  if (typeof definitionData === 'string') {
    try {
      const jsonData = JSON.parse(definitionData)
      if (getNodeType(jsonData) === 'object') {
        return jsonData
      } else {
        return String(definitionData)
      }
    } catch (e) {
      console.error(definitionData, 'Invalid convert string to object')
      return definitionData
    }

  }
  return definitionData
}

const isEmptyObject = (object) => {
  return getNodeType(object) === 'object' && !Object.keys(object).length
}

export const isEx = (node) => {
  switch (getNodeType(node)) {
    case 'array': return !!node.length
    case 'object': return !isEmptyObject(node)
    default: return Boolean(node)
  }
}

export const nodeIsCanBeExpanded = (type, node) => {
  if (type === 'object' || type === 'array') {
    if (isEx(node)) {
      return true
    }
  }
  return false
}

export const getNodeType = (node) => {
  if (node === null) return 'null'
  if (Array.isArray(node)) return 'array'
  if (!node && typeof node !== 'undefined' && isNaN(node)) return 'NaN'
  if (node instanceof Date) return 'date'
  if (node instanceof RegExp) return 'regexp'
  return typeof node
}

export const createTree = (source) => {
  return getData(source)
}

export const createRenderTree = (currentNode, nodeName) => {
  const type = getNodeType(currentNode)
  const isCanBeExpanded = nodeIsCanBeExpanded(type, currentNode)
  const isInitial = nodeName === 'initial'

  if (type !== 'array' && type !== 'object') {
    return <ViewPrimitive node={currentNode} nodeName={nodeName} isInitial={isInitial} />
  }
  if (type === 'object') {
    return <ViewObject node={currentNode} nodeName={nodeName} isCanBeExpanded={isCanBeExpanded} isInitial={isInitial} />
  }
  if (type === 'array') {
    return <ViewArray node={currentNode} nodeName={nodeName} isCanBeExpanded={isCanBeExpanded} isInitial={isInitial} />
  }
}


