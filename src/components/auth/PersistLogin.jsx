import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import newAccessTokenAction from '../../redux/actions/newAccessToken';
import BLoader from '../ui/BarLoader';

const PersisLogin = () => {
  const user = useSelector((state) => state.user);
  const newAccessToken = useSelector((state) => state.newAccessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
    if (!user?.accessToken) {
      dispatch(newAccessTokenAction());
    }
  }, [user]);

  return (
    <>
      {!user?.accessToken && newAccessToken?.isLoading && <BLoader isLoading={true} />}
      {!user?.accessToken && !newAccessToken?.isLoading && <Navigate to="/login" />}
      {user?.accessToken && <Outlet />}
    </>
  );
};

export default PersisLogin;
