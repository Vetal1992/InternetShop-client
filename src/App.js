import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom'
import { Context } from './index';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(() => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [])

  if(loading){
    return <Spinner animation={"grow"} />
  }

  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
})

export default App;
