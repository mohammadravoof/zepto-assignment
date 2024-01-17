import x from "../assets/x.png"
import { useUserContext } from "./UserContext";
import SearchList from "./SearchList";

const Chip = () => {

    const { completed, handleTaskClick, handleInputFocus, searchTerm, setSearchTerm } = useUserContext();

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchTerm(query);
      };

  return (
    <div className="flex flex-wrap gap-2">
        {completed.map((completedTask) => (
            <div className="flex h-8 items-center bg-slate-300 rounded-full gap-2 pr-3 m-2"key={completedTask.id}>
                <img className="aspect-square h-full rounded-full"  src={completedTask.pic} />
                {completedTask.name}
                <img className="aspect-square h-4 rounded-full" src={x}  onClick={() => handleTaskClick(completedTask)} />
            </div>
        ))}
        <div className="relative flex items-center ml-2 ">
            <input className="outline-none " placeholder="Add new user..." onFocus={handleInputFocus} value={searchTerm}
                onChange={handleSearch} />
                <div className={`absolute top-12 left-0 `}>
                    <SearchList />
                </div>
        </div>
    </div>
  )
}

export default Chip;