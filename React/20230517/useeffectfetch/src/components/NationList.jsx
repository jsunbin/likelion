import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from "styled-components"

const Item = styled.div`
  margin: 60px auto;

  ul {
    padding: 10px;
  }

  li {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 10px;
    list-style: none;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  }
`

export default function NationList() {
  const [nations, setNations] = useState([])
  const [url, setUrl] = useState("http://localhost:3000/nations")

  // useEffect 처리 안하고, fetch만 사용하거나 dependency Array 선언 안하면 무한 호출이 될 수도 있음..
  // useEffect(() => {
  //   fetch("http://localhost:3000/nations")
  //     .then(response => {
  //       // http 상태코드가 200번대가 아닐 경우

  //       if (!response.ok) {
  //         throw new Error("네트워크 응답에 문제가 있습니다.")
  //       }

  //       return response.json()
  //     })
  //     .then(json => setNations(json))
  //     .catch((error) => {
  //       // catch: reject 또는 네트워크 통신에 문제가 생겼을 때 실행된다.
  //       console.error("데이터를 가져오는데 문제가 생겼습니다: ", error);
  //     })
  //   }, [])

    // asnyc await 활용하기
    // async function fetchData() {
    //   try {const response = await fetch("http://localhost:3000/nations")
    //   if (!response.ok) {
    //     throw new Error("네트워트 응답에 문제가 있습니다.");
    //   }

    //   const data = response.json();
    // } catch (error) {
    //   console.error("데이터를 가져오는데 문제가 생겼습니다: ", error);
    // }

    // }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("네트워트 응답에 문제가 있습니다.");
          }
  
          // response도 promise를 반환하기 때문에 await를 추가
          const json = await response.json();
  
          setNations(json);
        } catch (error) {
          console.error("데이터를 가져오는데 문제가 생겼습니다: ", error);
        }
      }
      fetchData();
    }, [url]);

    console.log(nations)

  return (
    <Item>
      <h2>나라 목록</h2>
      <ul>
        {nations.map((nation) => {
          return(
          <li key={nation.id}>
            <h3>나라 이름: {nation.title}</h3>
            <p>인구 수: {nation.population}</p>
          </li>
          )
        })}

        <div>
          <button onClick={() => {setUrl("http://localhost:3000/nations?loc=europe")}}>유럽 목록</button>
          <button onClick={() => {setUrl("http://localhost:3000/nations")}}>전체 목록</button>
        </div>
      </ul>
    </Item>
  )
}
