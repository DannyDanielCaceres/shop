import NavBar from "./Navbar";

export default function Layout({ children }) {
  const containerStyle = {
    width: "90%",
    margin: "100px auto",
  };
  return (
    <div>
      <NavbarComponent/>
      <div style={containerStyle}>{children}</div>
    </div>
  );
}
