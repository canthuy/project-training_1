import {Fragment} from 'react'
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Main from './components/Main';


function App() {
  return (
    <DndProvider backend = {HTML5Backend}>
        <Main />
   </DndProvider>
  )
}

export default App;
