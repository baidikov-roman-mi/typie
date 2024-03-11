import { createServer } from 'node:http';
let port = 3000;

let serve = createServer((req, res) => {
    console.log('req :>> ', req);
    console.log('res :>> ', res);
    console.log('http://localhost:'+ port);
});

serve.listen(3000);


