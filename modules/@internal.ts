import { NhostClient } from '@nhost/nhost-js'

const nhost = new NhostClient({
    subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
    region: process.env.NEXT_PUBLIC_NHOST_REGION || ''
});

const auth = nhost.auth;
const grapql = nhost.graphql;


export const timeOfDayMessage = () => {
    var data = [
        [18, 'Good evening,'],
        [12, 'Good afternoon,'],
        [5, 'Good morning,'],
        [0, 'Whoa, early bird! Good morning,']
    ],
        hr = new Date().getHours();
    for (var i = 0; i < data.length; i++) {
        if (hr >= data[i][0]) {
            return data[i][1];
        }
    }
}
