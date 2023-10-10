const funn = (a, b) => {
    return a + b;
}
const namee = 'Anything'

//single exports
// module.exports = funn;

//this type also we use
// module.exports.funn = funn;
// module.exports.funn = namee;

// multiple variable exports
// module.exports = {funn,namee};
module.exports = {'fun':funn,'name':namee,'static':"Hey I'm Static Value"};
