import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
    let navigate = useNavigate()
    return <>
        <ul className="navbar-nav bg-primary sidebar sidebar-dark accordion side-wrapper" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <div className="sidebar-brand d-flex align-items-center justify-content-center " >
                <div className="sidebar-brand-icon rotate-n-15">
                <i class="fa fa-book"></i>
                </div>
                <div className="sidebar-brand-text mx-3"> library</div>
            </div>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <Link to={'/home'}>
                <li className="nav-item active" style={{cursor:"pointer"}}>
                    <div className="nav-link">
                    <i class="fa-solid fa-house"></i>
                        <span>Show Books</span></div>
                </li>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
           

            


            <li className="nav-item" style={{cursor:"pointer"}} onClick={() => navigate('/create-blog')}>
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fa-solid fa-plus"></i>
                    <span>Create Library</span>
                </div>
            </li>


            <li className="nav-item" style={{cursor:"pointer"}} onClick={() => navigate('/manage-blog')}>
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fa-solid fa-list-check"></i>
                    <span>Manage  Library</span>
                </div>
            </li>

            {/* <li className="nav-item" style={{cursor:"pointer"}} onClick={() => navigate('/edit-blog')}>
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <span>Edit Blog</span>
                </div>
            </li> */}

        </ul>
    </>
}

export default Sidebar