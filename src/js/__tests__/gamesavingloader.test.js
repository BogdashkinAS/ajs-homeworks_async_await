import GameSavingLoader from '../gamesavingloader.js';

test('Проверка работы GameSavingLoader - success', async () => {
    try {
        const result = {
            id: 9,
            created: 1546300800,
            userInfo: {
                id: 1,
                name: 'Hitman',
                level: 10,
                points: 2000,
            },
        };
      const saving = await GameSavingLoader.load();
          expect(saving).toEqual(result);
    } catch (error) {
          await expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error');
    }
});
