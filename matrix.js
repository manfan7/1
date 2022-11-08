const w =  +prompt('ширина матрицы') // преобразуем + строку в значение
const h =  +prompt('высота мтрицы')

function matrix(w, h) {
let result = new Array(h).fill().map(() => new Array(w).fill(''))
return result
}
console.log(matrix(w, h))








//[
    [2, 43, 34, 656, 23] // это матрицаб её вид
    [3, 56, 8, 878, 4]
    [3444, 7787, 888]
]