import kakaLoginButtonImg from "../../img/kakao_login_medium.png";

const Header = () => {

    // ---------------------------------- kakao oauth
    // -----------------------------------

    const REST_API_KEY = "cf28dbb409df1bda73557662b941eda0";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";

    //1번
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (

        <header className="p-3 text-bg-dark header-container">
            <div className="container">
                <div
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg
                            className="bi me-2"
                            width="40"
                            height="32"
                            role="img"
                            aria-label="Bootstrap">
                            <use></use>
                        </svg>
                    </a>

                    <ul
                        className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a href="#" className="nav-link px-2 text-secondary">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-white">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-white">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-white">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-white">
                                About
                            </a>
                        </li>
                    </ul>

                    <div className="text-end">
                      
                            {/* <img src={'/img/kakao_login_small.png'} /> */}
                            <a href={KAKAO_AUTH_URI}>
                                <img src={kakaLoginButtonImg}/>
                            </a>
                            
                        <button type="button" className="btn btn-outline-light me-2">
                            Login
                        </button>
                        <button type="button" className="btn btn-warning">
                            Sign-up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
