const { TestWatcher } = require("jest");

describe('ASCYC TEST', () => {

    const runtest = (done) => {
        expect('peanut butter').toBe('peanut butter');
        done();
    };

    xtest('done', runtest); //message, a callback function

    test('Promise Resolve without return', () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('peanut butter');
            }, 200);
        });

        const callbackFun = (data) => {
            expect(data).toBe('peanut butter'); //runs after 5 seconds
        }
        return promise.then((res) => { //return: will for promise to be resolved
            callbackFun(res);//calls after 5 secons
        });

        //last state will be executed immediately
    });

    test('Promise Resolve with return', () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('hello world');
            },1000);
        });

        return promise.then((data) => {
            expect(data).toBe('hello world');
        });
    });

    test('Fresh Dummy Test', () => {
        console.log('I have no expection');
    });
});