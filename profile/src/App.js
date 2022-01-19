import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import EditPage from './components/Edit/EditPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MakePost from './components/Posts/MakePost';
import Post from './components/Posts/Post';

function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpenPost] = useState(false);
  const loading = useSelector((state)=> state.user.loading);
  const erorr = useSelector((state)=> state.user.erorr);
  return (
    <div className="App">
      {isEdit ? (<EditPage setEdit={setEdit}/>) 
      : !isEdit && !isOpenPost ? 
      ( <>
        <Header setEdit={setEdit}/>
        <div className='post-container'>
          <Post/>
        </div>
        <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost}/>
      </>) : (
      <>
      <Header setEdit={setEdit} isEdit={isEdit}/>
      <MakePost   setOpenPost={setOpenPost}/>
      </>
      )}
      {!isEdit && erorr && (<p>Erorr when fetching data from server </p>)}
      {loading && erorr && (<p>Loading ...</p>)}
    </div>
  );
}

export default App;
