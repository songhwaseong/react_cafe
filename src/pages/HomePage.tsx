import Carousel from "react-bootstrap/Carousel";
import { API_IMAGE_URL, API_PRODUCT_URL } from "../config/config";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import customAxios from "axios";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const [products, setProducts] = useState<Product[]>([]);

    const navigate = useNavigate();

    // 스프링 부트에 "상품 목록"을 요청하기
    useEffect(() => {
        const url = `${API_PRODUCT_URL}/list`;

        customAxios
            .get(url, {})
            .then((response) => {
                console.log('응답 받은 데이터');
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    console.log('자바스크립트 코딩 영역');
    return (
        <Carousel>
            {products.map((item) => (
                <Carousel.Item key={item.id}>
                    <Nav.Link onClick={() => navigate(`/product/detail/${item.id}`)}>
                        <img className="d-block w-100" src={`${API_IMAGE_URL}/${item.image}`} alt='${item.name}' />
                    </Nav.Link>
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default HomePage;
