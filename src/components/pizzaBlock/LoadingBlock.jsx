import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
    return (
        <div>
            <ContentLoader
                className='pizza-block'
                speed={2}
                width={400}
                height={460}
                viewBox="0 0 280 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <circle cx="130" cy="123" r="116" />
                <rect x="0" y="250" rx="6" ry="6" width="460" height="23" />
                <rect x="0" y="284" rx="6" ry="6" width="480" height="86" />
                <rect x="0" y="375" rx="6" ry="6" width="70" height="36" />
                <rect x="126" y="375" rx="19" ry="19" width="151" height="50" />
            </ContentLoader>
        </div>
    );
};

export default LoadingBlock;