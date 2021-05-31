
import TodoHome from './pages/todo/todohome';
import Navigation from './components/navigation';
import Counter from './pages/counter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { object } from 'prop-types';
import Theme from './components/theme';

function App() {
  const [page, setPage] = useState({
    todoHome: false,
    counterHome : false,
  });
  
  const [pagge, setPagge] = useState('counterHome');

  const onPageChange = (pagekey) => {
    const updateActivePage = { ...page };
    let newPagge = '';
    Object.keys(updateActivePage).forEach((key) => {
      if(key===pagekey) {
        updateActivePage[pagekey]=true;
        newPagge = pagekey;
      }
      else {
        updateActivePage[key] = false;
      }
    });
    setPagge(newPagge);
    setPage(updateActivePage);
  }
  
  
  return (
    <div className="container">
      <Navigation onPageChange={onPageChange} pages={page}/>
      <Theme page={pagge}>
        {page.todoHome && <TodoHome/>}
        {page.counterHome &&<Counter/>}
      </Theme>
    </div>
  );
}

export default App;
