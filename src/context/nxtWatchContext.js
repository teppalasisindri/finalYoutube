import React from 'react'

const NxtWatchContext = React.createContext({
  activeTheme: '',
  onThemeChange: () => {},
  saveList: [],
  onSave: () => {},
  save: '',
})
export default NxtWatchContext
