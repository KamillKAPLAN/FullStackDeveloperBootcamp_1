const root = document.getElementById("root");

//ES5
/*const Header = function() {
    return <h1>Merhaba benim adım Kamil</h1>;
}

var template = <h1>Merhaba benim adım Kamil KAPLAN</h1>;

ReactDOM.render(template, root);
ReactDOM.render(<Header />, root); */

//ES6
class TodoApp extends React.Component {
    render() {
        const title = "Todo Application";
        const description = "Lorem, ipsum.";

        var app = {
            title: "Todo Application BackEnd",
            description: "Lorem, ipsum 2.",
            items: ["item1", "item2", "item3"]
        };


        return (
            <>
                {/* <Header title="Todo Application" description="Lorem, ipsum." /> */}
                {/* <Header title={title} description={description} /> */}
                <Header title={app.title} description={app.description} />
                <TodoList items={app.items} />
                <Action />
            </>
        );
    }
}

/*const Header = function(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
        </div>
    );
} */

class Header extends React.Component {
    render() {
        console.log(this.props);
        /* return <h1>Merhaba benim adım Kamil KAPLAN</h1>; */
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.description}</div>
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        console.log(this.props.items);
        return (
            <ul>
                {/* <TodoItem />
                <TodoItem />
                <TodoItem /> */}
                {/* {
                    this.props.items.map((item, index) =>
                        <li key={index}>{item}</li>
                   )
                } */}
                {
                    this.props.items.map((item, index) =>
                        <TodoItem key={index} item={item}/>
                    )
                }
                {/* <li>{this.props.items}</li> */}
            </ul>
        );
    }
}

class TodoItem extends React.Component {
    render() {
        return (
            // <li>Todo Item</li>
            <li>{this.props.item}</li>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <button>Clear Items</button>
                </p>
                <form>
                    <input type="text" name="txtItem" id="txtItem" />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );
    }
}

const template = (
    /*<div>
        <Header />
        <Header />
        <Header />
        <Header />
    </div> */
    <>
        <Header />
        <TodoList />
        <Action />
    </>
);


ReactDOM.render(<TodoApp />, root);