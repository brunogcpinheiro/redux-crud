import { Link } from "react-router-dom";

const Home = () => (
  <>
    <h1>Home</h1>
    <Link to="/create">
      <button>Create User</button>
    </Link>
  </>
);

export default Home;
