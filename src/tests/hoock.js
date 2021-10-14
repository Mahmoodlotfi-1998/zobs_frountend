import React, {useState , useEffect} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [totalReactPackages , setTotalReactPackages] = useState(null);


    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => setTotalReactPackages(data.total));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    return (
        <div className="App">
            {
                totalReactPackages
            }
        </div>
    );

}

export default App;
