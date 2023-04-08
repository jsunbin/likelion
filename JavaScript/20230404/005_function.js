// 힘수
// 1. 재사용성이 높아진다.
// 2. 유지보수가 용이
// 3. 구조파악 용이


// 함수의 일반적인 형태
// 함수 선언문
function one(a, b) {
  let z = a + b
  return z ** 2
}

one(7, 3)

// 화살표 함수
const two = (a, b) => (a + b) ** 2

two(7, 3)

// 이름없이 선언하는 함수
const three = function(a, b) {
  let z = a + b
  return z ** 2
}

three(7, 3)

// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function four(a, b, c) {
  let z = c(a, b) + c(a, b)
  return z * 2
}

four(7, 3, one)

// 지양
function four(a, b) {
  let z = one(a, b) + one(a, b)
  return z * 2
}

four(7, 3)

// 함수
// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics
// return과 console.log를 헷갈려 한다

function hello(parms) {
  console.log(parms)
  console.log('hello')
  return 100
}
console.log(hello(10))

let x = console.log('hello')
x // undefinded

// 함수, 메서드(클래스 안에서 들어간 함수)
// .을 찍어 접근할 수 있는 함수다? => 메서드
// 함수를 호출할 수 있는 이름은 결국 변수이다.
let x = console.log
x('hello')

// 2번(아래 3개는 같은 코드: return undefined가 생략되어 있음)
function hello1() {
  console.log('hello')
}

function hello2() {
  console.log('hello')
  return
}

function hello3() {
  console.log('hello')
  return undefined
}


// return
function hello4 {
  console.log('hello')
  console.log('hello')
  console.log('hello')
  return
  console.log('hello')
  console.log('hello')
  console.log('hello')
}

hello4()

function hello5() {
  if (true) {
    if (true) { // 이 값을 true/false로 바꿔서 log 찍히는 지 확인해보세요
      if (true) {
        return
      }
    }
  }
  console.log('hello')
}

// return을 하더라도 1회 반복만 종료되는 것이지 전체 반복이 종료되는 것은 아니다.
const x = [10, 20, 30, 40];
x.forEach(function (el) {
  console.log(el)
  return
  console.log('world')
});

///////////////////////////////
function 함수1 (a, b, c){
  return a + b + c
}

함수1(10, 20, 30, 40) // error가 발생하지 않음
함수1(10, 20) // error가 발생하지 않음 -> NaN

// 초기값
function 함수1 (a = 10, b = 20, c = 30){
  return a + b + c
}
함수1(1, 1)

function 함수1 (a = 10, b = 20, c = 30){
  return a + b + c
}
// a와 c에 들어갈 것이라 생각했지만 a와 b에 들어감.
함수1(a = 1, c = 1)


// 아래와 같은 식별 이슈가 있을 경우 object로 넘긴다. = roro 기법
function runPython(user, time, code, level) {

}

runPython('sunbin', 100, 'def...', 3)

function runPython({user, time, code, level}) {

}

runPython({
  user: 'sunbin',
  time: 100,
  code: 'def...',
  level: 3
})

// 기본값 설정 
function runPython({
  user='',
  time=0,
  code='',
  level=0 
})


////////////////////////

// 화살표 함수의 다양한 예제(****)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
  return x + y
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = x => x + 10

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = x => x + 10

let 결과 = 함수3(2);

console.log(결과);


// 즉시 실행 함수
(function() {
  console.log('이 함수는 만들어지자마자 바로 실행됩니다!');
})();
