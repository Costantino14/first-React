import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MyNav from "./Components/MyNav";
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import fantasy from './Books/fantasy.json';
import history from './Books/history.json';
import romance from './Books/romance.json';
import horror from './Books/horror.json';
import scifi from './Books/scifi.json';
import { ThemeContext } from './Modules/Contexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetail from './Pages/BookDetail';
import NotFound from './Pages/NotFound';


function App() {

  const [form, setForm] = useState('');
  let [type, setType] = useState('fantasy');
  let [theme, setTheme] = useState('dark');
  console.log(type)

  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        

        <BrowserRouter>
        <MyNav form={form} setForm={setForm}/>
        <Container className="my-3">
          <Welcome setType={setType}/>
          <Routes>
              {type === 'history' && <Route index element={<AllTheBooks books={history} form={form}/>} />}
              {type === 'fantasy' && <Route index element={<AllTheBooks books={fantasy} form={form}/>} />}
              {type === 'horror' && <Route index element={<AllTheBooks books={horror} form={form}/>} />}
              {type === 'romance' && <Route index element={<AllTheBooks books={romance} form={form}/>} />}
              {type === 'scifi' && <Route index element={<AllTheBooks books={scifi} form={form}/>} />}

              <Route path='/details/:asin' element={<BookDetail type={type}/>} />
              <Route path='*' element={<NotFound />} />
          </Routes>

        </Container>
        <MyFooter />
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
    );
}

export default App;
