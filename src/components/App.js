import React, {useEffect, useState} from 'react';
import {Header} from './index'
import {Cart, Home} from './pages';
import {Route, Routes} from 'react-router-dom'
import axios from "axios";

const App = () => {
    const [pizzas, setPizzas] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3000/db.json').then(({ data }) => {
          setPizzas(data.pizzas)
        })
    }, [])

    return (
        <div>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home items={pizzas} />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;