import http from 'k6/http';

export const options = {
    scenarios: {
        breakpoint: {
            executor: 'ramping-arrival-rate',
            preAllocatedVUs: 100,
            maxVUs: 1e7,
            stages: [
                { duration: '10m', target: 100000 },
            ]
        }
    },
    thresholds: {
        http_req_failed: [
            {
                threshold: 'rate<=0.01',
                abortOnFail: true,
            },
        ],
    },
};

export default () => {
    const res = http.get('http://localhost:8080/medico/1');
};
