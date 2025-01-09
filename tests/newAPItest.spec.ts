const {test, expect, request } = require('@playwright/test');

test.describe('Testing API pertemuan ke empat', async() => {
    test('contoh Method GET', async ({}) => {
        const apiContext = await request.newContext();
        const respond = await apiContext.get('https://reqres.in/api/users?page=2');
        expect(respond.status()).toBe(200);
        const respondBody = await respond.json();
        console.log(respondBody);
        expect(respondBody.page).toBe(2);
        expect(respondBody.per_page).toBe(6);
    });

    test('contoh POST', async({}) => {
        const apiContext = await request.newContext();
        const postData = {
                "name": "morpheus",
                "job": "leader"
        };
        const res = await apiContext.post('https://reqres.in/api/users', {
            data : postData
        });
        expect(res.status()).toBe(201);
        const respondBody = await res.json();
        console.log(respondBody);
        expect(respondBody.name).toBe('morpheus');
        expect(respondBody.job).toBe('leader');
    });

    test('contoh PUT', async({}) => {
        const apiContext = await request.newContext();
        const putData = {
            "name": "morpheus",
            "job": "zion resident"
        };
        const res = await apiContext.put('https://reqres.in/api/users/2', {
            data : putData
        });
        expect(res.status()).toBe(200);
        const respondBody = await res.json();
        console.log(respondBody);
        expect(respondBody.name).toBe('morpheus');
        expect(respondBody.job).toBe('zion resident');
    });

    test('contoh DELETE', async({}) => {
        const apiContext = await request.newContext();
        const res = await apiContext.delete('https://reqres.in/api/users/2');
        expect(res.status()).toBe(204);
    }); 

    test('contoh POST Register', async({}) => {
        const apiContext = await request.newContext();
        const postData = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        };
        const res = await apiContext.post('https://reqres.in/api/register', {
            data : postData
        });
        expect(res.status()).toBe(200);
        const respondBody = await res.json();
        console.log(respondBody);
        expect(respondBody.email).toBe('eve.holt@reqres.in');
        expect(respondBody.password).toBe('pistol');
    });
});