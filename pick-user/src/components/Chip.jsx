import x from "../assets/x.png"
import { useUserContext } from "./UserContext";
import SearchList from "./SearchList";

const Chip = () => {

    const { completed, handleTodoClick, handleInputFocus } = useUserContext();

  return (
    <div className="flex flex-wrap gap-2">
        {completed.map((completedTodo) => (
            <div className="flex h-8 items-center bg-slate-300 rounded-full gap-2 pr-3 m-2"key={completedTodo.id}>
                <img className="aspect-square h-full rounded-full"  src={completedTodo.pic} />
                {completedTodo.name}
                <img className="aspect-square h-4 rounded-full" src={x} onClick={() => handleTodoClick(completedTodo)} />
            </div>
        ))}
        <div className="relative flex items-center">
            <input className="outline-none" placeholder="Add new user..." onFocus={handleInputFocus} />
                <div className="absolute top-12 left-0">
                    <SearchList />
                </div>
        </div>
    </div>
  )
}

export default Chip;