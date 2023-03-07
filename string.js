let a="beautiful";
console.log(a[0],a[2],a[3],a[4]);

const b="eat";
const food=`I was feeling hungry ${b} today`
console.log(food)

const story="The quick brown fox jumped on the lazy dog"
const quick=(story.match(/the/g)|| []).length;
const fox=(story.match(/brown/g)|| []).length;
console.log(quick);
console.log(fox);

const string1="We are now going to school";
const school=string1.search("now");
console.log(school);
const string2="The child was sitting on the table before it fell"
const child=string2.search("sitting")
console.log(child);

const big="Wonderful"
const biger=big.toUpperCase()
console.log(biger)

const small="amaizing"
const smaller=small.toLowerCase()
console.log(smaller)

const litle="BEneath"
const litle2=litle.toLowerCase()
console.log(litle2)

const head="A beautiful wedding"
const header=head.toLocaleUpperCase()
console.log(header)
