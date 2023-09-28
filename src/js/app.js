import GameSavingLoader from './gamesavingloader.js';

(async () => {
    const result = await GameSavingLoader.load();
    return result;
})();
