import Login from '../components/Login';
import LoginHeader from '../components/LoginHeader';

export default function LoginPage() {
  return (
    <>
      <LoginHeader
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </>
  );
}
