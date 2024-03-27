import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <div className="container">
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Layout;
