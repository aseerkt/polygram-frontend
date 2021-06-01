import Navbar from '../Navbar';
import BottomNav from '../BottomNav';
import RightSideBar from '../RightSideBar';
import Snackbar from '../../common/Snackbar';
import LoginModal from '../../common/LoginModal';
import SignUpModal from '../../common/SignUpModal';
import useUserData from '../../../hooks/useUserData';
import OfflineBanner from '../../common/OfflineBanner';
import useThemeChange from '../../../hooks/useThemeChange';
import useIsUserLoggedIn from '../../../hooks/useIsUserLoggedIn';
import ForgetPasswordModal from '../../common/ForgetPasswordModal';

const Layout = ({ children }) => (
  <>
    <GlobalDataFetch />
    <OfflineBanner />
    <Navbar />
    <div className="page">{children}</div>
    <RightSideBar />
    <BottomNav />
    <ForgetPasswordModal />
    <SignUpModal />
    <LoginModal />
    <Snackbar />
  </>
);

const GlobalDataFetch = () => {
  useUserData();
  useThemeChange();
  useIsUserLoggedIn();
  return <></>;
};

export default Layout;
