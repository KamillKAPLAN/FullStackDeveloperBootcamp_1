const root = document.getElementById("root");

var app = {
    title: "ToDo App",
    description: "Lorem, ipsum.",
    items: [
        "Lorem.",
        "Lorem, ipsum.",
        "Lorem, ipsum dolor."
    ]
    //items: [];
};

function onFormSubmit(event) {
    event.preventDefault();
    /* document.getElementById("txtItem").value; 
       console.log(event);
     */
    var item = event.target.elements.txtItem.value;
    if (item != '') {
        app.items.push(item);
        event.target.elements.txtItem.value = "";
        render()
    } else {
        alert("item boş olamaz");
    }
}

function render() {
    var template =
        (
            <div>
                <div>{app.title}</div>
                <div>{app.description}</div>
                <ul>
                    {
                        app.items.map((item, index) =>
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
                <p>
                    <button onClick={() => {
                        app.items = [];
                        /* app.items.length = 0 
                           app.items.splice(0, app.items.length)
                        */
                        render();
                    }}>Clear Items</button>
                </p>
                <p>{app.items.length}</p>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="txtItem" id="txtItem" />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );
    ReactDOM.render(template, root);
}

render();

/* ES6 Const & Let */
var nameVar = "Kamil KAPLAN";
var nameVar = "Melih KAPLAN";
console.log(nameVar);

let nameLet = "Kamil KAPLAN";
//let nameLet = "Melih KAPLAN";
console.log(nameLet);

const nameConst = "Kamil KAPLAN";
//nameConst = "Kamil";
console.log(nameConst);

let age = 29;


function getAge() {
    let name = "Kamil";
    let age = 29;
    console.log("fuction scope : ", name, age);
}
getAge();