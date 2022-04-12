import React from 'react';

function useDeviceResize() {
    const [width, setWidth] = React.useState("");

    function checkDeviceWidth() {
        return window.innerWidth >= 1280
          ? setWidth("1280")
          : window.innerWidth <= 457
          ? setWidth("457")
          : "";
    }
    
    function changeDeviceWidth() {
        function getDeviceWidth() {
            setTimeout(checkDeviceWidth, 2000);
        }
        window.addEventListener("resize", getDeviceWidth);
        return () => {
            window.removeEventListener("resize", getDeviceWidth);
        };
    }

    return {
        width,
        checkDeviceWidth,
        changeDeviceWidth,
    }
}

export default useDeviceResize;

