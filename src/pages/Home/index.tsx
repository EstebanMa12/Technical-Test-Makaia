import Sidebar from "../../components/Sidebar"
// import Header from "../../components/Header"
import UsersTable from "../../components/UsersTable"
const Home = () => {
    return (
        <div className="flex ">
            <Sidebar/>
            <div className="flex-grow"><UsersTable/></div>
        </div>
    )
}

export default Home