import React from 'react'
import './App.css'
import { createTree } from './utils/tree'
import { createRenderTree } from './utils/tree'

import './styles/style.css'

const _source = {
  regexp: /123/,
  date: new Date(),
  string: "privet mir =)",
  number: 1337,
  boolean: true,
  null: null,
  NaN: NaN,
  undefined: undefined,
  arrayempty: [],
  object: {
    string: "privet mir =)",
    number: 1337,
    array: [],
    objectInObject: {
      array: [],
      boolean: true,
      null: null,
    },
  },
  array: [1, 2, "3"],
  objectsArray: [
    {
      a: 1,
      b: "2"
    },
    {
      a: 2,
      objectInObject: {
        array: [],
        boolean: true,
        null: null,
      }
    }
  ],
  emptyObject: {}
}

const App = () => {
  const RootTree = createTree(_source)
  const RenderTree = createRenderTree(RootTree, 'initial')
  return (
    <div>
      {RenderTree}
    </div>
  )
}

export default App
