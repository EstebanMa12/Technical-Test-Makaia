import { FaRegBell } from "react-icons/fa6";
const Header = () => {
    return (
        <header className="flex
        justify-end
        items-center
        p-5
        gap-5
        ">
            <FaRegBell/>
            <button className="bg-pink-400 text-white rounded text-xs h-9 w-24 ml-6"> + New Project</button>
        </header>
    );
    }

export default Header;