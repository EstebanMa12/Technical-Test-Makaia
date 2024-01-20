import { Navigate, Outlet } from "react-router-dom"

const PublicRoutes = ({ isAuthenticated, redirectPath = "/Login", children }: { isAuthenticated: boolean, redirectPath?: string, children: React.ReactNode }) => {
    if (isAuthenticated) {
        return <Navigate to={redirectPath} replace />
    }
    
    return <div>{children ? children : <Outlet />}</div>
    }



export default PublicRoutes