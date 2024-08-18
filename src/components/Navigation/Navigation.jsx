import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default  function Navigation () {

	const isLoggedIn = useSelector(selectIsLoggedIn);
return (
<nav>
	<NavLink to="/" end>Home</NavLink> {/* end вместо exact */}
	{isLoggedIn && (<NavLink to="/contacts">
          Contacts
        </NavLink>
   )}
</nav>);
}
