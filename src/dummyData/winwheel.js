export const prizes = [
    {
        name: 'meal #1',
        code: 'AD890IE5'
    },
    {
        name: 'meal #2',
        code: 'AD8dhajI'
    },
    {
        name: 'drink #1',
        code: 'AC78371G'
    },
    {
        name: 'drink #2',
        code: 'ACJJ787C'
    }
]

const calculatePrize = () => {
    const prizeIndex = Math.floor(Math.random() * prizes.length + 1) - 1;
    const stopAt = (90 * Math.floor(Math.random() * prizes.length + 1)) - Math.floor(Math.random() * 80 + 10);
    return {
        prize: prizes[prizeIndex],
        stopAt
    }
}

export default calculatePrize;