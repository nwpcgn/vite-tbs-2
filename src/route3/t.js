let url = "#/hsp/1/";

const checkRoute = (str = 'hsp', int = '0') => {
    if (url.includes(str) && url.includes(int)) return true;
};

console.log(checkRoute('hsp', 1))