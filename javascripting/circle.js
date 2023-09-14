var area = function (r) {
    return 3.14 * Math.pow(r, 2);
    }
var circumference = function (r) {
    return 2 * 3.14 * r;
    }
    // los meetodos o atributos en el modulo que dice EXPORTS puede ser exportado y utilizado en otro codigo
    module.exports = {
    area: area,
    circumference: circumference
}
    