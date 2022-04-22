// есть обьект а с набором свойств, обьект b должен унаследовать свойства a

const a = {
    name: 'Alex',
    position: 'QA',
    languages: ['ua', 'eng'],
    hello: function () {
        console.log('Hello Alex')
    },
    age: 50
}

const b = Object.create(a)