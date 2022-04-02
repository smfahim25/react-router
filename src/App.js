import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Countries from './component/Countries/Countries';
import CountryDetail from './component/CountryDetail/CountryDetail';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Friends from './component/Friends/Friends';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import PostDetail from './component/PostDetail/PostDetail';
import Posts from './component/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail />}></Route>
        <Route path='/posts' element={<Posts />}>
          <Route path=':postId' element={<PostDetail />}></Route>
        </Route>
        <Route path='/countries' element={<Countries />}></Route>
        <Route path='/country/:countryName' element={<CountryDetail />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
