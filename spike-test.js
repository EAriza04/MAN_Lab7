import http from 'k6/http';

export const options = {
    stages: [
        { duration: '1m', target: 4580 }, // 40% de 11451
        { duration: '1m', target: 0 },
    ],
    thresholds: {
        http_req_failed: [
            {
                threshold: 'rate<=0.005',
                abortOnFail: true,
            },
        ],
    },
};

export default () => {
    const res = http.get('http://localhost:8080/medico/1');
};
