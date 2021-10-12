import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";

import { NavLink } from ".";
import { userService } from "services";

export { Nav };

function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show nav when logged in
  if (!user) return null;

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#ff9d21" }}
      >
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <NavLink href="/" exact className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink href="/users" className="nav-item nav-link">
              Admin
            </NavLink>
          </ul>
          <NavLink
            href={`/users/edit/${userService.userValue?.id}`}
            className="nav-item nav-link"
          >
            {userService.userValue?.firstName}
          </NavLink>
        </div>
      </nav>

      <div className={styles.sidenav}>
        <a href="../Products">Products</a>
        <a href="../User">User</a>
        <a href="../Carts">Cart User</a>
        <a
          onClick={logout}
          className="nav-item nav-link"
          style={{ color: "red", cursor: "pointer" }}
        >
          Logout
        </a>
      </div>
    </div>
  );
}
