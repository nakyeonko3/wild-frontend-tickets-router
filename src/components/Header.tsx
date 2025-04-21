import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header>
      <h1>Tickets</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tickets">Tickets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
