import Products from "./components/Products/Products";
import Header from "./components/Layout/Header"
import Subheader from "./components/Layout/Subheader";
import AuthIndex from "./components/Auth";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import { useEffect } from "react";
import { checkIsLoggedIn } from "./actions/auth";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(checkIsLoggedIn(() => { }))
  }, [])



  return (
    <div>
      <Header />
      <Subheader />
      <Routes>
        {
          !authState.idToken &&
          <Route path="/login" exact element={<AuthIndex type={"login"} />} />

        }
        {
          !authState.idToken &&
          <Route path="/signup" exact element={<AuthIndex type={"signup"} />} />

        }

        <Route path="*" element={<Navigate to="/" replace />} />

        <Route path="/404" exact element={<h1>Not Found</h1>} />
        <Route path="/" exact element={<Products />} />

        <Route path="/:category" element={<Products />} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>

    </div>
  );
}

export default App;
