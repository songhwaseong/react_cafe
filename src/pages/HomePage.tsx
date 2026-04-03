import Carousel from "react-bootstrap/Carousel";
import { API_IMAGE_URL } from "../config/config";

function HomePage() {
    console.log('자바스크립트 코딩 영역');
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={`${API_IMAGE_URL}/americano01_bigsize.png`} alt='아메리카노' />
                <Carousel.Caption>
                    <h3>아메리카노</h3>
                    <p>졸라 쓰네 먹지마삼</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={`${API_IMAGE_URL}/croissant_03_bigsize.png`} alt='크로아상' />
                <Carousel.Caption>
                    <h3>크로아상</h3>
                    <p>졸라 맛없음 먹지마삼</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={`${API_IMAGE_URL}/brioche_04_bigsize.png`} alt='브리또' />
                <Carousel.Caption>
                    <h3>브리또</h3>
                    <p>졸라 달음 먹미자삼</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={`${API_IMAGE_URL}/whitewine01_bigsize.png`} alt='화이트와인' />
                <Carousel.Caption>
                    <h3>화이트와인</h3>
                    <p>달달하네 먹지마삼</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={`${API_IMAGE_URL}/french_baguette_01_bigsize.png`} alt='프렌치 바게트' />
                <Carousel.Caption>
                    <h3>프렌치 바게트</h3>
                    <p>푸석푸석 먹지마삼</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomePage;
