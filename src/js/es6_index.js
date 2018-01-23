import 'string.prototype.at'

{
    let a = 10 //let只能再它所在的作用域有效
    var b = 1
}
console.log(b)
// console.log(a)
console.log('--------------')
var a = []
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i)
    }
}

// a[6]()for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i)
//     }
// }
//
a[6]()

// console.log(foo)
// var foo = 3
// console.log(bar)
// let bar = 3

var tmp = 123
// if(true) {
//     let tmp
//     tmp = 'abc'
// }
// console.log(tmp)
console.log('--------------')
if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}

// 报错
function func() {
    let a = 10;
}

var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

f(); // undefined
console.log('----------------')

function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}

f1()

// 情况一
if (true) {
    function f() {
    }
}

// 情况二
try {
    function f() {
    }
} catch (e) {
    // ...
}

function f() {
    console.log('I am outside!');
}

(function () {
    if (false) {
        // 重复声明一次函数f
        function f() {
            console.log('I am inside!');
        }
    }

    f();
}());
const PI = 3.1415
const foo = {}
foo.prop = 123
console.log(foo.prop)
const bar = Object.freeze({})
// bar.prop = 123
// console.log(bar.prop)
let [aa, bb, cc] = [1, 2, 3]
let [head, ...tail] = [1, 2, 3, 4]
console.log(head)
console.log(tail)
let {log, sin, cos} = Math
console.log(sin(Math.PI / 2))
let arr = [1, 2, 3, 4, 5]
let {0: first, [arr.length - 1]: last} = arr
console.log(first)
console.log(last)
const [A, B, C, D] = 'hell'
console.log(A)
let {length: len} = 'hello'
console.log(len)
let {toString: ss} = 123;
console.log(ss === Number.prototype.toString) // true

let {toString: s} = true;
console.log(s === Boolean.prototype.toString) // true
{
    let a = [[1, 2], [3, 4]].map(([a, b]) => a + b)
    console.log(a)
}
{
    const map = new Map()
    map.set('first', 'hello')
    map.set('second', 'world')
    for (let [key, value] of map) {
        console.log(key + " is " + value)
    }
}
console.log("------------")
console.log("\u{20BB7}")

{
    let s1 = "𠮷";
    console.log(s1.length)
    let s = '𠮷a';

    console.log(s.codePointAt(0).toString(16)) // 134071
    console.log(s.codePointAt(1).toString(16)) // 57271

    console.log(s.codePointAt(2).toString(16)) // 97
    console.log('----------')
    for (let ch of s) {
        console.log(ch)
        console.log(ch.codePointAt(0).toString(16));
        console.log(String.fromCodePoint(ch.codePointAt(0)))
    }

    function is32Bit(c) {
        return c.codePointAt(0) > 0xFFFF;
    }

    console.log(s[2])
    console.info(is32Bit("𠮷")) // true
    console.log(is32Bit("a")) // false
    console.log(s.at(0))
    console.log(s.at(2))
}
{
    let s = 'Hello world!';

    console.log(s.startsWith('Hello')) // true
    console.log(s.endsWith('!')) // true
    console.log(s.includes('o')) // true
}

{
//    模板字符串
    let s = `hello world ${PI} aa:${head}`
    s = `
      <h1>
      sdaf
</h1>`.trim()
    console.log(s)
}
{
    let x = 1;
    let y = 2;

    console.log(`${x} + ${y} = ${x + y}`)
// "1 + 2 = 3"

    console.log(`${x} + ${y * 2} = ${x + y * 2}`)
// "1 + 4 = 5"

    let obj = {x: 1, y: 2};
    console.log(`${obj.x + obj.y}`)

    function fn() {
        return "Hello World";
    }

    console.log(`foo ${fn()} bar`)
}

const data = [
    {first: '<Jane>', last: 'Bond'},
    {first: 'Lars', last: '<Croft>'},
];
{


    const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;

    const data = [
        {first: '<Jane>', last: 'Bond'},
        {first: 'Lars', last: '<Croft>'},
    ];

    console.log(tmpl(data));
}
{
    // 写法一
    let str = 'return ' + '`Hello ${name}!`';
    let func = new Function('name', str);
    console.log(func('Jack')) // "Hello Jack!"

// 写法二
    str = '(name) => `Hello ${name}!`';
    func = eval.call(null, str);
    console.log(func('Jack'))// "Hello Jack!"
}
{
    let template = `
<ul>
  <% for(let i=0; i < data.length; i++) { %>
    <li><%= data[i]['first'] %></li>
  <% } %>
</ul>
`;
    console.log`123`
    tag1`First line\nSecond line`

    function tag1(strings) {
        console.log(strings.raw[0]);
        // strings.raw[0] 为 "First line\\nSecond line"
        // 打印输出 "First line\nSecond line"
    }
}
{
    console.log(new RegExp(/abc/ig, 'i').flags)
    console.log(/abc/ig.source)
    console.log(2 ** 5)
    if (/ac/ig instanceof RegExp) {
        console.log(true)
    } else {
        console.log(false)
    }
    console.log(Math.abs.length)
    let hello = (a = 1, b = 1) => console.log('a')
    console.log(hello.length)

    function f(y = x) {
        let x = 2;
        console.log(y);
    }

    f()

    function bar(func = () => foo123) {
        let foo123 = 'inner';
        console.log(func());
    }

    bar()

    function add(...values) {
        let sum = 0;

        for (var val of values) {
            sum += val;
        }

        return sum;
    }

    console.log(add(2, 5, 3)) // 10
    console.log(typeof add.name)
}
{
    // function foo() {
    //     setTimeout(() => {
    //         console.log('id:', this.id);
    //     }, 100);
    // }
    //
    // var id = 21;
    // foo.call({id: 42});
}
// window.s2 = 0
// {
//     function Timer() {
//         this.s1 = 0;
//         this.s2 = 0;
//         // 箭头函数
//         setInterval(() => this.s1++, 1000);
//         // 普通函数
//         setInterval(function () {
//             this.s2++;
//         }, 1000);
//     }
//
//     // var timer = new Timer();
//     //
//     // setTimeout(() => console.log('s1: ', timer.s1), 3100);
//     // setTimeout(() => console.log('s2: ', timer.s2, window.s2), 3100);
// }
{
    let str = "aaaadfsaf"
    let jsonData;
    try {
        jsonData = JSON.parse(str);
    } catch (error) {
        jsonData = "hello";
    }
    console.log(jsonData)
}
{
    console.log(...[1,2,3])
}
{
    function f(x,y,z) {
        console.log("x="+x)
        console.log("y="+y)
        console.log("z="+z)
    }
    var arg = [0,1,2]
    f.apply(null,arg)
    f(...arg)
}

