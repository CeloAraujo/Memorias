import { Link } from "react-router-dom";

export const Navbar = () => {
  return <nav>
    <h2><Link to="/">Memorias</Link></h2>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/add-memory">Add memórias</Link>
        </li>
    </ul>
  </nav>;
};
