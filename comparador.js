function comparador() {
    const op = document.getElementById('op').value;
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    let result;
    switch (op) {
        case '>':
            result = n1 > n2;
            break;
        case '<':
            result = n1 < n2;
            break;
        case '>=':
            result = n1 >= n2;
            break;
        case '<=':
            result = n1 <= n2;
            break;
        case '==':
            result = n1 == n2;
            break;
        case '!=':
            result = n1 != n2;
            break;

        default:
            break;
    }
    console.log(result);
    document.getElementById('result').innerHTML = result;
}