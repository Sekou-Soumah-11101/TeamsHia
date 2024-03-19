import '../Styles/bg_nav.css';
import NavBarFunctionality from './NavBars/Nav-Fonctionnalite';
import SingleDate from './NavBars/SigleData_NavBar';
import UserGuest_NavBar from './NavBars/UserGuest_NavBar';

function Bare_Navigation() {
  return (
    <div className='nav_div'>
      <UserGuest_NavBar />
      <SingleDate />
      <NavBarFunctionality />
    </div>
  );
}

export default Bare_Navigation;
