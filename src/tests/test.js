import React, {useState , useEffect} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const API_KEY = "3585775f387b0d0cba6c5b3dc41b8167";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            totalReactPackages:null
        }
    }
    states = {
        id: null,
        title: null,
        pic: null
    };

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
        // Simple GET request using fetch
        // fetch("http://adverservice.ir/zoobs/api/category", this.myInit)
        //     .then(response => response.json())
        //     .then(data => this.setState({ totalReactPackages: data.total }));

        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.total }));
    }

    // test = async () => {
    //   const response = await
    //   const jsonData = await response.json();
    //   console.log(jsonData);
    //   alert('hi');
    //   // this.states = {
    //   //   id: jsonData.id,
    //   //   title: jsonData.title,
    //   //   pic: jsonData.pic
    //   // }
    //   // console.log(this.states)
    // }

    render() {
        const { totalReactPackages } =this.state;

        return (
            <div className="App">
                {
                    totalReactPackages
                }
                {

                    // JSON.stringify(this.states)

                }
            </div>
        );
    }

}

// function App() {
//   // const {data: people, meta: {total}} = response;
//   // setState({data: {people, total});
//   var data_send = {
//     'Content-Type': 'application/json'
//   }
//
//   state={
//     mahmood:null,
//
//   }
//
//   var post = {
//     "action": "parents",
//     "mikhay": "hi"
//   };
//
//   var myInit = {
//     method: 'POST',
//     mode: 'cors',
//     headers: data_send,
//     body: JSON.stringify(post)
//   };
//
//   var test = async () => {
//     alert('hi')
//     const response = await fetch('http://adverservice.ir/zoobs/api/category', myInit);
//     const jsonData = await response.json();
//     console.log(jsonData);
//     this.state={
//
//     }
//   }
//
//   return (
//       <div className="App">
//         {
//           // response && response.length>0 && response.map((item)=><p>{item}</p>)
//           // data
//           test
//         }
//
//       </div>
//   );
// }

export default App;
