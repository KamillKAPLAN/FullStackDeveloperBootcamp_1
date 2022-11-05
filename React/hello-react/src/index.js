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
        const response = axios.get("http://localhost:8586/api/Products")
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
                                            <img className='bd-placeholder-img flex-shrink-0 me-2 rounded' src={item.pictureUri} alt="" width={50} height={50}  />
                                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    <strong className="text-gray-dark">{item.name} - {item.description}</strong>
                                                    <a href="#">{item.price} Follow - {item.department}</a>
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