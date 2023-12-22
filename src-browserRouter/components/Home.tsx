import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

const Home = () => {
  const [readSearchParams, setSearchParams] = useSearchParams(); //useSearchParams는 2개의 값을 반환한다.
  //readSearchParams는 setSearchParam으로 변동시킬 수 있다.
  console.log(readSearchParams.get("geo"));

  // setTimeout(() => {
  //   setSearchParams({ day: "today", tomorrow: "123" });
  // }, 3000);
  //Home에 들어간 후 3초 후에 파라미터값을 세팅해준다.

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
//유저이름을 클릭하면 유저아이디를 갖고있는 파라미터값으로 가도록.
export default Home;
