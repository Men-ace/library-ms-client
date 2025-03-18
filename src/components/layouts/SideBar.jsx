import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

 export const Sidebar = ()=> {
  return (
    <Stack gap={1}>
        <div className="p-2">
            <Link className="nav-link"  to="/user" >DashBoard</Link>
        </div>

        <div className="p-2">
            <Link className="nav-link"  to= "/user/books">Book</Link>
        </div>

        <div className="p-2">
            <Link className="nav-link"  to= "/user/user-list">All User</Link>
        </div>

        <div className="p-2">
            <Link className="nav-link"  to="/user/borrow-history" >Borrow-History</Link>
        </div>

        <div className="p-2">
            <Link className="nav-link"  to="/user/profile" >profile</Link>
        </div>
    </Stack>
  );
}

export default Sidebar;