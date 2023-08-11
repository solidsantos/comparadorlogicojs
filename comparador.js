function comparador() {
    const op = document.getElementById('op').value;
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    let result;
    switch (op) {
        case 'maior':
            result = n1 > n2;
            break;
        case 'menor':
            result = n1 < n2;
            break;
        case 'maiorIgual':
            result = n1 >= n2;
            break;
        case 'menorIgual':
            result = n1 <= n2;
            break;
        case 'igualdade':
            result = n1 == n2;
            break;
        case 'diferente':
            result = n1 != n2;
            break;

        default:
            break;
    }
    if (result) {
        document.getElementById('result').style.display = 'inline';
        document.getElementById('result').style.color = '#2b9348';
        document.getElementById('result').innerHTML = 'Verdadeiro';
    }
    else {
        document.getElementById('result').style.display = 'inline';
        document.getElementById('result').style.color = '#d62828';
        document.getElementById('result').innerHTML = 'Falso';
    }
}