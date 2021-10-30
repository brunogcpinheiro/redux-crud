import { useEffect } from "react";
import { Routes } from "./routes";
import { useAppDispatch, useAppSelector } from "./store/app/hook";
import { fetchAllUsers } from "./store/features/users/users-slice";

import { Loader } from "./components/Loader";

const App = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.users.status);
  const users = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <div>
      Header
      {status === "pending" ? (
        <div>
          <Loader />
        </div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.name}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
      {status === "error" && <p>Algo deu errado</p>}
      <Routes />
    </div>
  );
};

export default App;
