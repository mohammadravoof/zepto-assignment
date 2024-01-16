import Heading from "./components/Heading";
import Fieldset from "./components/Fieldset";
import Chip from "./components/Chip";
import UserProfile from "./components/UserProfile";
import useravatar2 from "./assets/useravatar2.png"
import SearchList from "./components/SearchList";
import { UserProvider } from "./components/UserContext";


const App = () => {

  

  return (
    <UserProvider>
    <div className="flex flex-col items-center p-10 gap-10">
    <Heading />
    <Fieldset />
    </div>
    </UserProvider>
  
  )
}

export default App;
