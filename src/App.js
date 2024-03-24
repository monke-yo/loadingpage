// App.js
import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching (replace with your actual logic)
        setTimeout(() => {
            setIsLoading(false);
        }, 200000000); // Adjust timeout as needed
    }, []);

    return (
        <div>
            {isLoading ? <Loading /> : (
                <p>app</p>
            )
            }
        </div>
    );
};

export default App;