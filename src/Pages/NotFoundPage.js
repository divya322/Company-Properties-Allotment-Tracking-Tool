import React, { useEffect } from 'react';

const NotFoundPage = () => {
    useEffect(() => {
        // Redirect to external website
        window.location.href = "https://pkfrom.github.io/404/404.html";
    }, []);

    // You can also return some JSX if needed
    return (
        <div>
            Redirecting...
        </div>
    );
};

export default NotFoundPage;