import { DICTIONARY, GAME_MODES } from "../constants"
const generateTable = (gameMode) => {
    const {TYPES} = GAME_MODES[gameMode];
    TYPES.forEach((matchType) => {
        const [aspect1, aspect2] = matchType;
        console.log({aspect1, aspect2});
    })
}

export default generateTable;