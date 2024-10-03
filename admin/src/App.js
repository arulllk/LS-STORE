import { Routes,Route} from 'react-router-dom';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import Layout from './components/Layout';
import Home from './page/Home';
import AddBlog from './page/AddBlog';
import BlogList from './page/BlogList';
import ImageUpload from './PracticePages/ImageUpload';


function App() {
  return (
    // <Routes>
    //   <Route path='/signup' element={<SignUp />} />
    //   <Route path='/signin' element={<SignIn />} />
    // </Routes>
    <Routes>
        <Route element={<Layout />}  >
          <Route path="admin" element={<Home />} />         
          <Route path='admin/blog' element={<BlogList />} />
          <Route path='admin/blog/new' element={<AddBlog /> } />


          <Route path="admin/image/upload" element={<ImageUpload />} />
        </Route>
        <Route path="admin/signup" element={<SignUp />} />
    </Routes>
    
  );
}

export default App;
