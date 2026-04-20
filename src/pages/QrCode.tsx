
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";

function App(product: Product) {
    const [image, setImage] = useState('');

    useEffect(() => {
        const url = 'http://192.168.0.36:5173/product/detail/' + product.id;
        setImage(`http://localhost:9000/qr/generate?text=${encodeURIComponent(url)}`);
    }, [product.id]);

    return (
        <>
            {image && <div style={{ textAlign: 'center' }}><img src={image} alt="QR Code" /></div>}
        </>
    );
}

export default App;