import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/nxtWatchContext'
import LoginForm from './component/LoginForm'
import Home from './component/Home'
import ProtectedRoute from './component/ProtectedRoute'
import SavedVideos from './component/SavedVideos'
import Trending from './component/Trending'
import Gaming from './component/Gaming'
import VideoItemDetails from './component/VideoItemDetails'
import NotFound from './component/NotFound'

// Replace your code here
class App extends Component {
  state = {activeTheme: true, saveList: [], save: false}

  onRemove = () => {}

  onThemeChange = () => {
    this.setState(prevState => ({
      activeTheme: !prevState.activeTheme,
    }))
  }

  onSave = video => {
    const {saveList} = this.state
    const {details} = video
    const {id} = details
    const item = saveList.filter(each => each.id === id)
    this.setState(prevState => ({save: !prevState.save}))
    if (item.length === 0) {
      this.setState(prevState => ({saveList: [...prevState.saveList, details]}))
    } else {
      const updatedItems = saveList.filter(each => each.id !== id)
      this.setState({saveList: updatedItems})
    }
  }

  render() {
    const {activeTheme, saveList, save} = this.state
    return (
      <>
        <NxtWatchContext.Provider
          value={{
            activeTheme,
            onThemeChange: this.onThemeChange,
            saveList,
            onSave: this.onSave,
            save,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </NxtWatchContext.Provider>
      </>
    )
  }
}

export default App
