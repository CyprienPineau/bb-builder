export function formatNumber(number)
{
    let x;
    let x1;
    number = number.toFixed(0) ;
    x = number.split(' ');
    x1 = x[0];
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    }
    return x1;
}