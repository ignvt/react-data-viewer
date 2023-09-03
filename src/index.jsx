import React from 'react'
import { createTree } from './utils/tree'
import { createRenderTree } from './utils/tree'
import './styles/style.css'

const ReactDataViewer = ({ source }) => {
  const RootTree = createTree(source)
  const RenderTree = createRenderTree(RootTree, 'initial')
  return <div id='react18-data-viewer'>{RenderTree}</div>
}

export default ReactDataViewer
