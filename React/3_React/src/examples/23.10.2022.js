const root = document.getElementById("root");

/******************** CLASS ***********************/
//es5
var es5Person = function () {

}
// object create
const es5 = new es5Person();
console.log(es5);

//es6
class es6Person {
    constructor(name = "Misafir", year = new Date().getFullYear()) {
        this.name = name;
        this.year = year;
        console.log(this.name, this.year);
    }

    yasHesapla() {
        /*var hesap = new Date().getFullYear() - this.year;
        if(hesap == 0 || hesap < 0) {
            return `Yaşınız : ${hesap} dünyaya hoşgeldiniz`;
        } 
        return `Yaşınız : ${hesap}`;*/
        var hesap = new Date().getFullYear() - this.year;
        return hesap == 0 || hesap < 0 ? `Yaşınız : ${hesap} dünyaya hoşgeldiniz` : `Yaşınız : ${hesap}`;
    }

}

const es6p = new es6Person("Kamil", 1994);
// const es6p2 = new es6Person();
console.log(es6p, es6p.yasHesapla())
// console.log(es6p2, es6p2.yasHesapla())

/******************** CLASS KALITIM **********************/
class ES6Person {
    constructor(name = "Misafir", year = new Date().getFullYear()) {
        this.name = name;
        this.year = year;
        console.log(this.name, this.year);
    }

    yasHesapla() {
        var hesap = new Date().getFullYear() - this.year;
        return hesap == 0 || hesap < 0 ? `Yaşınız : ${hesap} dünyaya hoşgeldiniz` : `Yaşınız : ${hesap}`;
    }
}

class Teacher extends ES6Person {
    constructor(name, year, department) {
        super(name, year);
        this.department = department;
    }

    teach() {
        return "Öğretiyorum";
    }
}

class Student extends ES6Person {
    constructor(name, year, studentNumber) {
        super(name, year);
        this.studentNumber = studentNumber;
    }

    study() {
        return "Öğreniyorum";
    }

    greeting(text) {
        return `${text} Benim adım ${this.name}`
    }
}

class Employee extends Student {
    constructor(name, year, studentNumber, salary) {
        super(name, year, studentNumber);
        this.salary = salary;
    }

    metot() {
        return `${this.salary} maaşım.`
    }
}

const ES6Teacher = new Teacher("Kamil", 1994, "Yazılım");
console.log(ES6Teacher, ES6Teacher.yasHesapla(), ES6Teacher.teach());
const ES6Student = new Student("Melih", 1996, 14542025);
console.log(ES6Student, ES6Student.yasHesapla(), ES6Student.study(), ES6Student.greeting("Merhaba"));
const ES6Employee = new Employee("Mustafa", 1995, 14, 10000);
console.log(ES6Employee, ES6Employee.yasHesapla(), ES6Employee.metot())

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
        //console.log(this.props);
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
    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this)
    }

    clearItems() {
        console.log(this.props);
        console.log(this.props.items);
    }
    render() {
        //console.log(this.props.items);
        return (
            <div>
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
                            <TodoItem key={index} item={item} />
                        )
                    }
                    {/* <li>{this.props.items}</li> */}
                </ul>
                <p>
                    <button onClick={this.clearItems}>Clear Items</button>
                </p>
            </div>
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
    onFormSubmit(e) {
        e.preventDefault();
        //  getElementById        
        const item = e.target.elements.txtItem.value.trim();
        if(item) {
            console.log(item);
            e.target.elements.txtItem.value = "";
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
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

// STATE
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor1.bind(this);
        this.state = {
            brand: 'Opel',
            model: 'Astra',
            color: 'red',
            year: 2020
        }
    }

    changeColor1() {
        // console.log(this);
        /*this.state.color = "blue";*/
        this.setState({
            color: 'blue'
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.brand} {this.state.model}</h1>
                <p>Selected Color: <b>{this.state.color}</b></p>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

ReactDOM.render(<Car />, root);

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor1.bind(this);
        this.changeColorr = this.changeColorr1.bind(this);
        this.state = {
            brand: 'Opel',
            model: 'Astra',
            color: 'red',
            year: 2020,
            colors: ["red", "blue", "yellow", "black"]
        }
    }

    changeColor1() {
        // console.log(this);
        /*this.state.color = "blue";*/
        this.setState({
            color: 'blue'
        });
    }

    changeColorr1() {
        console.log(this);
    }

    render() {
        return (
            <div>
                <h1>{this.state.brand} {this.state.model}</h1>
                <div>
                    {
                        this.state.colors.map(item => (
                            <button key={item} onClick={this.changeColorr}>{item}</button>
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

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.artiBir = this.artiBir.bind(this);
        this.eksiBir = this.eksiBir.bind(this);
        this.reset = this.reset.bind(this);
        this.state = { count: 0 }
    }

    artiBir() {
        this.setState({ count: this.state.count + 1 });
    }

    eksiBir() {
        if (this.state.count == 0) {
            this.setState({
                count: 0
            })
            console.log("değer : " + this.state.count)
        } else {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    reset() {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>
                <h1>Number: {this.state.count}</h1>
                <button onClick={this.artiBir}>+1</button>
                <button onClick={this.eksiBir}>-1</button>
                <button onClick={this.reset}>0</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, root);

//ES6
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this); /* state aracılığıla */
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: ["item1", "item2", "item3"] /* props aracılığıla */
        };
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

class Header extends React.Component {
    render() {
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
        return (
            <div>
                <ul>
                    {
                        this.props.items.map((item, index) =>
                            <TodoItem deleteItem={this.props.deleteItem} key={index} item={item} />
                        )
                    }
                </ul>
                <p>
                    <button onClick={this.props.clearItems}>Clear Items</button>
                </p>
            </div>
        );
    }
}

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem() {
        console.log("delete")
        this.props.deleteItem(this.props.item)
    }

    render() {
        return (
            <li>
                {this.props.item}
                <button onClick={this.deleteItem}>X</button>
            </li>
        );
    }
}

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


ReactDOM.render(<TodoApp />, root);