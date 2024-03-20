// ## 0902-Create two Object (person, details) and merage details object in person object.


const obj={
    name: 'john',
    age: 30
}

const obj1={
    city: 'new york',
    job: 'engineer'
}
const obj2=Object.assign(obj,obj1)
console.log(obj);
