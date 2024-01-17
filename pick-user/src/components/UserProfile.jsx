import sample from "../assets/useravatar2.png";
// import { profiledata } from "../components/data";
import { useUserContext } from "./UserContext";


const UserProfile = () => {
    const { datas, handleTaskClick, searchTerm } = useUserContext();

    const filteredItems = datas.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    

  return (
    <div >        
        <ul>
        {filteredItems.map((data,index) =>
         <li key={index} onClick={() => handleTaskClick(data)}>
            <div className="flex h-14 py-1 px-4 gap-4 items-center bg-slate-100">
                <img className="aspect-square h-full rounded-full" src={data.pic} />
                <span className=" w-36">{data.name}</span>
                <span className=" w-64 text-slate-500">{data.email}</span>
            </div>
        </li>)}
        </ul>
    </div>
  )
}

export default UserProfile;