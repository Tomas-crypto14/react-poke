import  { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/">Home</Link>
            </span>
            /
            <span>
                <Link to="/pokemon">Pokemon</Link>
            </span>
        </div>
    </nav>
  )
}

export default Header