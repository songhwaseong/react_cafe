import { useState, useEffect } from "react";
import type { Fruit } from "../types/Fruit";
import { Table } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../config/config";
import { useLocation } from "react-router-dom";

function App() {

    const [fruit, setFruit] = useState<Fruit | null>(null);
    const location = useLocation();
    let url = `${API_BASE_URL}/api/fruit`;
    console.log(location.state.id);
    console.log(location.state.name);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = { withCredentials: true };
                await axios.get<Fruit>(url, config).then((response) => {
                    console.log(response.data);
                    setFruit(response.data)
                });
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <Table hover style={{ margin: '20px' }}>
                <tbody>
                    <tr>
                        <td>아이디</td>
                        <td>{fruit?.id}</td>
                    </tr>
                    <tr>
                        <td>상품명</td>
                        <td>{fruit?.name}</td>
                    </tr>
                    <tr>
                        <td>단가</td>
                        <td>{fruit?.price.toLocaleString()}원</td>
                    </tr>
                </tbody>
            </Table >
        </>
    )
}
export default App;