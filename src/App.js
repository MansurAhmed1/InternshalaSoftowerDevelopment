
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Addevenet from './Components/AddEvenet/Addevenet';
import Dashboard from './Components/Dashboard';
import CreateEvent from '././Components/CreateEvent/CreateEvent'
import PreviewPage from './Components/PreviewPage/PreviewPage';

function App() {
  return (
    <div className="App">
     
<Routes>
<Route path='/' element={<Dashboard></Dashboard>}>
<Route index element={<Addevenet></Addevenet>}></Route>
</Route>
<Route path="/createEvent"  element={<CreateEvent></CreateEvent>}> </Route>
<Route path="/previewpage"  element={<PreviewPage></PreviewPage>}> </Route>
</Routes>

    </div>
  );
}

export default App;
