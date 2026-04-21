//설정파일 (backEnd url , port)

//const API_HOST = 'localhost';
const API_HOST = '192.168.0.227';   //학원 와이파이
//const API_HOST = '192.168.0.36';   //집 와이파이

const API_PORT = '9000';
const REACT_PORT = '5173';

export const REACT_BASE_URL = `http://${API_HOST}:${REACT_PORT}`;
export const API_BASE_URL = `http://${API_HOST}:${API_PORT}`;
export const API_IMAGE_URL = `http://${API_HOST}:${API_PORT}/images`;
export const API_MEMBER_URL = `http://${API_HOST}:${API_PORT}/member`;
export const API_PRODUCT_URL = `http://${API_HOST}:${API_PORT}/product`;
export const API_CART_URL = `http://${API_HOST}:${API_PORT}/cart`;

