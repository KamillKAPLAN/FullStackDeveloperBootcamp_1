import PropTypes from 'prop-types';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-1">
                        <li className="nav-item active ml-md-auto">
                            <a className="nav-link" href="#">Anasayfa <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ml-md-auto">
                            <a className="nav-link" href="#">Hakkımızda</a>
                        </li>
                        <li className="nav-item ml-md-auto">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
};
Navbar.defaultProps = {
    title: "Default"
};
export default Navbar;