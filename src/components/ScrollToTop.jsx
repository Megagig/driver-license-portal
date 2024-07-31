import { useEffect } from "react";

const ScrollToTop = ({ dependency }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [dependency]);

    return null;
};

export default ScrollToTop;
