// Eduardo Ariza Abad y Enrique Ibáñez Rico

import http from 'k6/http';

export const options = {
    stages: [
        { duration: '3m', target: 5725 }, // 50% de 11451
        { duration: '3m', target: 5725 }, // 50% de 11451
        { duration: '2m', target: 0 },
    ],
    thresholds: {
        http_req_failed: [
            {
                threshold: 'rate<=0.01',
                abortOnFail: true
            }
        ],
    },
};

export default () => {
    const res = http.get('http://localhost:8080/medico/1');
};
