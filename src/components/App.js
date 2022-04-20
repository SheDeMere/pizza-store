import React from 'react';
import {Header} from './index'
import {Cart, Home} from './pages';
import {Route, Routes} from 'react-router-dom'

const App = () => {

    return (
        <div>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;