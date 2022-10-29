import React from 'react';

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            err: ''
        }
    }
    onFormSubmit(e) {
        e.preventDefault();
        const item = e.target.elements.txtItem.value.trim();

        const errr = this.props.addItem(item);
        this.setState({
            err: errr
        })

        e.target.elements.txtItem.value = "";
    }
    render() {
        return (
            <div>
                {this.state.err && <p style={{ color: "red" }}>{this.state.err}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="txtItem" id="txtItem" />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );
    }
}

export default Action;