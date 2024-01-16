import UserProfile from "./UserProfile";
import { useUserContext } from "./UserContext";

const SearchList = () => {
    const { isInputFocused }  = useUserContext();

  return ( isInputFocused && 
    <div className="flex flex-col gap-2 max-h-64 overflow-y-auto border rounded-md shadow-2xl z-10">
        <UserProfile />
    </div> 
  )
}

export default SearchList;