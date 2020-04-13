const gradient = (color1, color2, min, max, number) => {

    const percent = 1 - percentLog(min,  max, number);

    const hex = function (x) {
        x = x.toString(16);
        return (x.length === 1) ? '0' + x : x;
    };

    const r = Math.ceil(parseInt(color1.substring(0, 2), 16) * percent + parseInt(color2.substring(0, 2), 16) * (1 - percent));
    const g = Math.ceil(parseInt(color1.substring(2, 4), 16) * percent + parseInt(color2.substring(2, 4), 16) * (1 - percent));
    const b = Math.ceil(parseInt(color1.substring(4, 6), 16) * percent + parseInt(color2.substring(4, 6), 16) * (1 - percent));

    return hex(r) + hex(g) + hex(b);
};

const percentLog = (min, max, number) => {

    min = min === 0 ? 0 : Math.log(min);
    max = max === 0 ? 0 : Math.log(max);
    number = number === 0 ? 0 : Math.log(number);

    return (number - min) / (max - min);
};

export {gradient, percentLog};