import { Link } from 'react-router-dom'

export function AppHeader() {

    return <header className="app-header">
        <ul className="main-layout clean-list flex j-between a-center">
            <div className="logo">Gift Store</div>
            <div>
                <Link to="/" className="link">Our Catalogue</Link>
                <Link to="/about" className="link">About</Link>
            </div>
        </ul>
    </header>
}