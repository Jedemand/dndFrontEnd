import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';


import PostCharacter from "./Post/postCharacter";
import GetCharacter from "./Get/getCharacter";


function App() {

    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/addCharacter">Create A New Character</Link></li>
            <li><Link to="/findCharacter">Find a Character</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/addCharacter" component={PostCharacter}/>
          <Route path="/findCharacter" component={GetCharacter}/>
        </Switch>
      </BrowserRouter>
      
    );
}


export default App


      
        
          