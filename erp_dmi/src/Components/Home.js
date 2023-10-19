import logo from '../logo.svg';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <h1>Home</h1>
            <Link to="/pages/MedicalActs">Medical Acts</Link>
            <header className="Home-header">
                <img src={logo} className="Home-logo" alt="logo"/>
                <p>
                    Edit Piaf
                </p>
                <a
                    className="Home-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LLEANR
                </a>
            </header>
        </div>
    );
}

export default Home;
