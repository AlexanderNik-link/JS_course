const array0 = [3, 2, 1];
const array1 = [3, 4, 2, 5];

function intersection(x, y)
{
    let s = new Set(y);
    return x.filter(item => s.has(item));
};
 
console.log(intersection(array0,array1))