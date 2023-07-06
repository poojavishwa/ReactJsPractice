// const heading1 = React.createElement("h1",{id:"xyz"},"hello world!!")
// const root1 = ReactDOM.createRoot(document.getElementById("root"))
// root1.render(heading1);

const heading = React.createElement("div",{id:"paret"},[
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"i am h1 tag"),
    React.createElement("h2",{},"i am h2 tag"),
    ]),
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"i am h2 tag"),])
    ])
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);