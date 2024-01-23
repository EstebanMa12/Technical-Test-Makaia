import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import UsersTable from "../../components/UsersTable"
import Link from "../../components/Link"
import ModalForm from "../../components/ModalForm"
import { useState } from "react"


const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <>
        <div className="container flex flex-row overflow-y-hidden">
            <Sidebar/>
            < div className="flex flex-col w-full h-screen
            p-14
            gap-10
            ml-64
            overflow-y-auto
            md:ml-60
            sm:ml-48
            scrollbar-hide
            ">
                <Header/>
                <Link/>
                <UsersTable onOpenModal={openModal}/>
            </div>
        </div>
        {isModalOpen && <ModalForm closeModal={closeModal}/> }
        </>
    )
}

export default Home