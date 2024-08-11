import { Routes,Route} from 'react-router-dom';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import Layout from './components/Layout';

function App() {
  return (
    // <Routes>
    //   <Route path='/signup' element={<SignUp />} />
    //   <Route path='/signin' element={<SignIn />} />
    // </Routes>
    <Routes>
        <Route element={<Layout />}  >

        </Route>
    </Routes>
    
  );
}

export default App;
