

const Company = {
    name2: 'GP',
    ceo: { id1: 111, age1: 30, height: '5 fit 6 inc' },
    web: {
        work: 'web development', framwork: 'react',
        tack:
            { first: 'html', second: 'css' }
    },

}

const { first, second } = Company?.websit?.tack; // ? chainung ?mark ar ta true hola nest option jja jaba

console.log(first);