// json generator
// https://json-generator.com/
//json

let 회원정보 = 
[
  {
    "_id": "642a62222ff0a5392aed070d",
    "index": 0,
    "age": 21,
    "eyeColor": "blue",
    "name": "Lindsey Foster",
    "gender": "female",
    "company": "ROCKYARD"
  },
  {
    "_id": "642a6222a51f006d09cfd72c",
    "index": 1,
    "age": 24,
    "eyeColor": "brown",
    "name": "Horn Burt",
    "gender": "male",
    "company": "BLEEKO"
  },
  {
    "_id": "642a6222a44eae14cf7800fb",
    "index": 2,
    "age": 28,
    "eyeColor": "brown",
    "name": "Valentine Trevino",
    "gender": "male",
    "company": "SUPPORTAL"
  },
  {
    "_id": "642a6222c75fe67f16635aa9",
    "index": 3,
    "age": 38,
    "eyeColor": "blue",
    "name": "Mavis Buckner",
    "gender": "female",
    "company": "DAYCORE"
  },
  {
    "_id": "642a6222502d32c08d880813",
    "index": 4,
    "age": 30,
    "eyeColor": "brown",
    "name": "Rivers Hines",
    "gender": "male",
    "company": "ZILLIDIUM"
  }
]

회원정보[0]
회원정보[0]['name']
회원정보[1]['company']

// 모르셔도 됩니다.
let 나이평균 = (회원정보[0]['age'] + 회원정보[1]['age'] + 회원정보[2]['age'] + 회원정보[3]['age'] + 회원정보[4]['age'] + 회원정보[5]['age']) / 6
console.log(나이평균)
