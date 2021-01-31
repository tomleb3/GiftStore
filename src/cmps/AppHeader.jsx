import { Link } from 'react-router-dom'

export function AppHeader() {

    return <header className="app-header">
            <ul className="nav-pages">
                <div className="logo">Gift Store</div>
                <Link to="/" className="link">Our Catalogue</Link>
                <Link to="/about" className="link">About</Link>
            </ul>
    </header>
}