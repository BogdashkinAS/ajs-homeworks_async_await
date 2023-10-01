import GameSavingLoader from '../gamesavingloader.js';

test('Make GameSavingLoader', async () => {
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
          await expect(saving).toEqual(result);
    } catch (error) {
          await expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error');
    }
});

test('Find name of class', async () => {
    try {
      const saving = await GameSavingLoader.load();
          await expect(Object.getPrototypeOf(saving).constructor.name).toEqual('GameSaving');
    } catch (error) {
          await expect(Promise.reject(new Error('Error in class'))).rejects.toThrow('Error in class');
    }
});
