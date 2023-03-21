const COLOR = "COLOR";
const SHAPE = "SHAPE";

export const DICTIONARY = {
    COLORS: ["RED", "YELLOW", "PURPLE", "PINK"],
    SHAPES: ["HEART", "CLUB", "DIAMOND", "SPADE"]
}

const COLOR_TO_COLOR = [COLOR, COLOR];
const SHAPE_TO_SHAPE = [SHAPE, SHAPE];
const COLOR_TO_SHAPE = [COLOR, SHAPE];

export const GAME_MODES = Object.freeze({
    EASY: {
        TYPES: [COLOR_TO_COLOR]
    },
    MEDIUM: {
        TYPES: [COLOR_TO_COLOR, SHAPE_TO_SHAPE]
    },
    HARD: {
        TYPES: [COLOR_TO_COLOR, SHAPE_TO_SHAPE, COLOR_TO_SHAPE]
    },
})