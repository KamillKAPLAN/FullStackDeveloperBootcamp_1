/* Stateless function component + Hook =
    Class Component(state)
 */
// ES5
function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
        </div>
    );

}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <div>{this.props.description}</div>
//             </div>
//         );
//     }
// }

export default Header;