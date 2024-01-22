const UsersTable = () => {
    return (
        <div className=" overflow-x-auto shadow-md sm:rounded-lg
        w-1064
        ">
            <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white ">

                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search for users"/>
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            User
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Projects
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Permissions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b  hover:bg-gray-50 ">
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                            <img className="w-10 h-10 rounded-full" src="" alt="Jese image"/>
                            <div className="ps-3">
                                <div className="text-base font-semibold">Neil Sims</div>
                                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>  
                        </th>
                        <td className="px-6 py-4">
                            React Developer
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 hover:underline">Edit user</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b  hover:bg-gray-50 ">
                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            <img className="w-10 h-10 rounded-full" src="" alt="Jese image"/>
                            <div className="ps-3">
                                <div className="text-base font-semibold">Bonnie Green</div>
                                <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            Designer
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600  hover:underline">Edit user</a>
                        </td>
                    </tr>                    
                </tbody>
            </table>
        </div>
    )    
}
export default UsersTable;
