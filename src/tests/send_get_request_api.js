import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    data_send = {
        'Content-Type': 'application/json'
    }

    post = {
        "action": "parents",
        "mikhay": "hi"
    };

    myInit = {
        method: 'POST',
        mode: 'cors',
        headers: this.data_send,
        body: JSON.stringify(this.post)
    };

    componentDidMount() {
        fetch("https://adverservice.ir/zoobs/api/category", this.myInit)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            });
    }

    render() {
        const { items } = this.state;
        if (!this.state.isLoaded) {
            return <div>Loading ... </div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <img alt={item.title} src={item.pic}/>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}
export default App;