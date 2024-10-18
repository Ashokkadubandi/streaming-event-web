import Header from "../Header";
import Main from "../MainContent";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

const Home = () => {
  const token = Cookies.get("ACCESS");
  if (token === undefined) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
export default Home;
