//prizes on server
export const prizes = [
    {
        name: 'TV',
        code: 'AD890IE5'
    },
    {
        name: 'Phone',
        code: 'AD8dhajI'
    },
    {
        name: 'Radio',
        code: 'AC78371G'
    },
    {
        name: 'Computer',
        code: 'ACJJ787C'
    }
]

export const randomPrize = () => {
    let response = '';
    return new Promise((resolve) => {
        return setTimeout(() => {
            response = calculatePrize();
            resolve(response);
        }, 1500)
    })
}

export const fetchImage = () => {
    let response = '';
    return new Promise((resolve) => {
        setTimeout(() => {
            response = loadImage();
            resolve(response);
        }, 500) 
    });
}

//randomly decides prize to win, before wheel spin
const calculatePrize = () => {
    const randomNum = Math.random();
    const prizeIndex = Math.floor(randomNum * prizes.length + 1) - 1;
    const stopAt = (90 * Math.floor(randomNum * prizes.length + 1)) - Math.floor(Math.random() * 80 - 10);
    return {
        prize: prizes[prizeIndex],
        stopAt
    }
}

//returns image url
const loadImage = () => {
    return 'http://res.cloudinary.com/dviy2q8nb/image/upload/c_scale,w_500/v1525845455/clipart_wheel_ugmvfv.png';
}

export default calculatePrize;