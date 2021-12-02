import MainPage from "./pages/MainPage";
import {AuthProvider} from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import {Route, Router, Switch} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
    return (
        <AuthProvider>
            <Switch>
                <Route exact path={"/login"} component={LoginPage}/>
                <Route exact path={"/register"} component={RegisterPage}/>
                <Route path={"/main-page"} component={MainPage}/>
            </Switch>
        </AuthProvider>
    );
}

export default App;
