import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        // response.then(json => { items: json }) - npm i axios
        const response = axios.get("https://jsonplaceholder.typicode.com/todos/")
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.data,
                });
                console.log(json);
            })
    }

    render() {
        const { error, isLoaded, items } = this.state;
        return (
            <div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <div className="my-3 p-3 bg-white rounded shadow-sm">
                                <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>
                                {
                                    items.map(item => (
                                        <div className="media text-muted pt-3" key={item.id}>
                                            <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    <strong className="text-gray-dark">{item.id} - {item.title}</strong>
                                                    <a href="#">Follow</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <small className="d-block text-right mt-3">
                                    <a href="#">All suggestions</a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}
ReactDOM.render(<App />, document.getElementById('root'));