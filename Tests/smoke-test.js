// Eduardo Ariza Abad y Enrique Ibáñez Rico

import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 5,
    duration: '1m',
    thresholds: {
        http_req_failed: [
            {
                threshold: 'rate==0',
                abortOnFail: true
            }
        ],
        http_req_duration: [
            {
                threshold: 'avg<500',
                abortOnFail: true
            }
        ]
    },
};

export default () => {
    const res = http.get('http://localhost:8080/medico/1');

    check(res, {
        'response code was 200': (res) => res.status === 200,
    });

    sleep(1);
};
