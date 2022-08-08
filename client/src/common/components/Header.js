import './Header.css';
import lflogo from './lflogo.jpg';

const Header = () => {
  return (
    <header className='p-3 text-bg-dark header-container'>
      <div>
        <img src={lflogo} alt='logo' style={{ height: '200px', width: '200px' }} />
      </div>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <a href='/' className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'>
            <svg className='bi me-2' width='40' height='32' role='img' aria-label='Bootstrap'>
              <use></use>
            </svg>
          </a>

          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <a href='#' className='nav-link px-2 text-white'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-white'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-white'>
                Search
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-white'>
                History
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-white'>
                About
              </a>
            </li>
          </ul>

          <div className='text-end'>
            <button type='button' className='btn btn-outline-light me-2'>
              Login
            </button>
            <button type='button' className='btn btn-warning'>
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
