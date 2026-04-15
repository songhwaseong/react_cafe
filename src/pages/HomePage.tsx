import Carousel from "react-bootstrap/Carousel";
import { API_IMAGE_URL } from "../config/config";

function HomePage() {
    console.log('자바스크립트 코딩 영역');
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={`${API_IMAGE_URL}/고양이.png`} alt='고양이' />
                <Carousel.Caption>
                    <h3>아메리카노</h3>
                    <p>졸라 쓰네 먹지마삼</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={`${API_IMAGE_URL}/고양이2.png`} alt='고양이2' />
                <Carousel.Caption>
                    <h3>크로아상</h3>
                    <p>졸라 맛없음 먹지마삼</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={`${API_IMAGE_URL}/고양이3.png`} alt='고양이3' />
                <Carousel.Caption>
                    <h3>브리또</h3>
                    <p>졸라 달음 먹미자삼</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={`${API_IMAGE_URL}/고양이4.png`} alt='고양이4' />
                <Carousel.Caption>
                    <h3>화이트와인</h3>
                    <p>달달하네 먹지마삼</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={`${API_IMAGE_URL}/고양이5.png`} alt='고양이5' />
                <Carousel.Caption>
                    <h3>프렌치 바게트</h3>
                    <p>푸석푸석 먹지마삼</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomePage;
