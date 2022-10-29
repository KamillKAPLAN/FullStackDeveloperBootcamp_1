import { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Action from './Action';

export default class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this); /* state aracılığıla */
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: ["item1", "item2", "item3"] /* props aracılığıla */
        };
    }

    componentDidMount() {
        const json = localStorage.getItem('items');
        const items = JSON.parse(json);

        if (items) {
            this.setState({
                items: items
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.items.length != this.state.items.length) {
            const json = JSON.stringify(this.state.items);
            localStorage.setItem('items', json);
        }

    }

    componentWillUnmount() {
        console.log("component silindi");
    }

    clearItems() {
        this.setState({
            items: []
        });
    }

    addItem(item) {
        if (!item) {
            return "boş değer ekleyemezsiniz";
        } else if (this.state.items.includes(item)) {
            return "aynı elemanı ekleyemezsiniz";
        }

        this.setState((prevState) => {
            return { items: prevState.items.concat(item) }
        })
    }

    deleteItem(item) {
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i;
            })
            return {
                items: arr
            };
        })
    }

    render() {
        const title = "Todo Application";
        const description = "Lorem, ipsum.";

        var app = {
            title: "Todo Application BackEnd",
            description: "Lorem, ipsum 2."
        };
        return (
            <>
                <Header title={app.title} description={app.description} />
                <TodoList deleteItem={this.deleteItem} items={this.state.items} clearItems={this.clearItems} />
                <Action addItem={this.addItem} />
            </>
        );
    }
}


