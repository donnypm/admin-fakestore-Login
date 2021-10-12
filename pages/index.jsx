import { userService } from "services";
import { Link } from "components";

export default Home;

function Home() {
  return (
    <div className="article">
      <h1>Welcome Admin {userService.userValue?.firstName}!</h1>
    </div>
  );
}
