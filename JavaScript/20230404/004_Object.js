const human = {
  name: "hojun",
  age: 53,
  from: "korea",
  askingHim: function () {
      console.log("hello world!");
  },
  0: '01050442903'
};

console.log(human.name)
console.log(human.age)
console.log(human['name'])
console.log(human['age'])
// humane.0 // error
human['0'] // '01012345678'
human[0] // '01012345678'


// 유사배열객체는 실무에서도 사용하지 않기 때문에 기억 안해도 됨!
const arr = {
  o: 10,
  1: 20,
  2: 30,
  length: 3
}

arr[0]
arr[1]
arr[2]
arr.length

// 배열 X -> 유사배열객체
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠름

const human = {
  name: "sunbin",
  age: 25,
  from: "korea",
  askingHim: function(){
      console.log("hello world!");
  }
};

human.name = "bin"
human.name
human.askingHim()
delete human.job;

console.log('age' in human) // 주의: 안됨ㅠㅠ
// console.log(20 in [10, 20, 30, 40])
// console.log('length' in [10, 20, 30, 40])


const aespa = {
  members: ['카리나', '윈터', '지젤', '닝닝'],
  from: '광야',
  sing: function(){
      return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
  }
};

// 별표(**)
console.log(aespa.hasOwnProperty('itzy'))
console.log(aespa.hasOwnProperty('sing'))


// 별표(***)
// 다른 언어는 aespa.keys()와 같은 방식으로 사용합니다.
console.log(Object.keys(aespa)) // 불편한 코드
console.log(Object.values(aespa)) // 불편한 코드
