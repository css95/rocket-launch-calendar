import './Header.css'

function Header ({ onViewChange }) {



    return (
        <header className="header">
            <nav>
                <h1>🚀 Rocket Launch Calendar</h1>
                <button className="btn-header" onClick={() => onViewChange('list')}>List View</button>
                <button className="btn-header" onClick={() => onViewChange('calendar')}>Calendar View</button>
            </nav>
        </header>
    )

}

export default Header