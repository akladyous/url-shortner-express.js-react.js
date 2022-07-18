import { Outlet } from "react-router-dom"

export default function UsersHome() {

    return (
        <>
            <div className="container" style={{ height: '100px', background: 'green' }}>
                <h1>users home</h1>
            </div>
            <Outlet />
        </>
    );
}
