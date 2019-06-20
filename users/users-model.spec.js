const db = require('../data/dbConfig.js');

const { insert, remove, getAll } = require('./users-model.js');

describe('users-model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
      });

    describe('insert()', () => {
        it('should insert users', async () => {
            await insert({ name: "leo"})

            const users = await db('users');

            expect(users).toHaveLength(1);
        })
        
        it('should insert the provided user', async () => {
            let user = { name: "leo"};
            let inserted = await insert(user);

            expect(inserted.name).toBe(user.name);

        })

    })

    describe('remove()', () => {
        it('should remove user', async () => {
             let user = await insert({ name: "leo"})
            await remove(1)
            const users = await db('users');
            expect(users).toHaveLength(0)
        })
    })
})