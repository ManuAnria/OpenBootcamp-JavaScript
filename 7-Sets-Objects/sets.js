// Sets o conjuntos

const array = [1, 2, 3, 4, 5, 6, 2, 1, 3, { id: 5 }, { id: 5 }];

const miSet = new Set(array)
console.log(array)

// Sets no permite duplicados
console.log(miSet)

// .add()
miSet.add(9)
console.log(miSet)
miSet.add(5)    // No se agrega porque ya existe
console.log(miSet)

// .delete()
miSet.delete(6)
console.log(miSet)

// .clear()
/* miSet.clear()
console.log(miSet) */

// .has()
console.log(miSet.has(5))

// .size
console.log(miSet.size)

// .forEach()
miSet.forEach((value => {
    console.log(value)
}))

const it_miSet = miSet.values()
console.log(it_miSet)

// COnvertir un set a un array
const ar_miSet = [...miSet]
console.log(ar_miSet)