import { BrowserRouter, Route } from "react-router-dom";
import Person from "./Person";
import CV from "./CV";

export default function App() {
    return (
        <BrowserRouter>
            <div className="main-wrapper">
                <Route path="/" exact>
                    <Person />
                </Route>
                <Route path="/cv">
                    <CV />
                </Route>
            </div>
        </BrowserRouter>
    );
}
