import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Captcha from "./Captcha";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import ReusableModal from "./ReusableModal";
import Spinner from "./Spinner";

const Root = () => {
    const { state } = useNavigation();
    const isLoading = state === "loading";
    const [loading, setLoading] = useState(false)
    const auth = JSON.parse(sessionStorage.getItem("auth"));

    function handleAuth(args){
        console.log({args})
        setLoading(args)
    }
    return (
        <div className="grid grid-rows-[auto_1fr_auto] max-w-[100svw] overflow-hidden relative min-h-screen">
          { auth  || loading ?
          <>
           
            <header>
                <Header />
                <NavBar />
            </header>
            <main>
                <Outlet />
                <ReusableModal isOpen={isLoading}>
                    <Spinner />
                </ReusableModal>
            </main>
            
            <Footer />
            </>:
            <Captcha auth={auth} isLoading={handleAuth} />}
        </div>
    );
};

export default Root;
