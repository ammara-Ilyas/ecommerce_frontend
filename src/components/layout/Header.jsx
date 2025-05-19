import Navbar from "./widgets/Navbar";
import TopNavbar from "./widgets/TopBar.jsx";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <TopNavbar />
      <Navbar />
    </header>
  );
}
