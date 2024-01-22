// import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import UsersTable from "../../components/UsersTable"
import Link from "../../components/Link"


const Home = () => {
    return (
        < div className="flex flex-col
        p-14
        gap-10
        ">
            <Header/>
            <Link/>
            <UsersTable/>
        </div>
    )
}

export default Home