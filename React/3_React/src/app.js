const root = document.getElementById("root");

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.changeColorr = this.changeColorr.bind(this);
        this.state = {
            brand: 'Opel',
            model: 'Astra',
            color: 'red',
            year: 2020,
            colors: ["red", "blue", "yellow", "black"]
        }
    }

    changeColor() {
        this.setState({
            color: 'blue'
        });
    }

    changeColorr(e) {
        console.log(e.target.value);
        this.setState({
            color: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.brand} {this.state.model}</h1>
                <div>
                    <select onChange={this.changeColorr}>
                        {this.state.colors.map((item) => (
                            <option key={item} value={item} >{item}</option>
                        ))}
                    </select>
                </div>
                <div>
                    {
                        this.state.colors.map((item) => (
                            <button key={item} onClick={this.selectItem}>{item}</button>
                        ))
                    }
                </div>
                <p>Selected Color: <b>{this.state.color}</b></p>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}
ReactDOM.render(<Car />, root);