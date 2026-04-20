
import { useEffect, useState } from "react";

function App() {
    const [image, setImage] = useState('');

    useEffect(() => {

        setImage(`http://localhost:9000/qr/generate`);
        //fetchData();
    }, []);

    return (
        <>
            {image && <div style={{ textAlign: 'center' }}><img src={image} alt="QR Code" /></div>}
        </>
    );
}

export default App;