import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import UsersTable from "../../components/UsersTable"
import Link from "../../components/Link"


const Home = () => {
    return (
        <div className="container flex flex-row">
            <Sidebar/>
            < div className="flex flex-col w-full h-screen
            p-14
            gap-10
            ml-64
            overflow-y-auto
            md:ml-72
            min-w-64
            ">
                <Header/>
                <Link/>
                <UsersTable/>
            </div>
        </div>
    )
}

export default Home