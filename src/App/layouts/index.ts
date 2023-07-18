import { UserRoleEnum } from '~/App/constants/userRoles';
import { useSelector } from 'react-redux';

const ManagerPrivateLayout = ({ children }) => {
	const user = useSelector((state) => state.auth?.user);
	return user.role === UserRoleEnum.MANAGER ? children : <Navigate to='/' replace={true} />;
};

export default ManagerPrivateLayout;