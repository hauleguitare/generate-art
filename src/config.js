

const layersOrder = [
    { name: 'background', number: 12 },
    { name: 'skin', number: 12 },
    { name: 'glasses', number: 23 },
    { name: 'mouth', number: 7 },
    { name: 'headwear', number: 27 },
    { name: 'outer wear', number: 11 },
    { name: 'mouth', number: 20 },

];
//
const defaultEdition = 999;

const format = {
    width: 500,
    height: 500
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];


module.exports = { layersOrder, format, rarity, defaultEdition };