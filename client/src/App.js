
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Nav from './components/nav/nav';
import Home from './components/pages/Home';
import AddAlbum from './components/pages/AddAlbum';
import Dashboard from './components/pages/Dashboard';
import GetAlbums from './components/pages/GetAlbums';
import UpdateAlbum from './components/pages/UpdateAlbum';
import {Provider} from 'react-redux';
import { store} from './redux/store';


function App() {




  return (
    <>
    <Provider store={store}>
        <Router>

         <Nav />
         <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/getalbums" element={<GetAlbums />}/>
            <Route exact path="/admin" element={<Dashboard />}/>
            <Route exact path="/addalbum" element={<AddAlbum />}/>
            <Route exact path="/albums/:id" element={<UpdateAlbum />}/>
            
            
           

            

         </Routes>


        </Router>
    </Provider>
    
    </>
  );
}

export default App;

