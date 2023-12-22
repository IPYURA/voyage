import React from "react";
import { useOutletContext } from "react-router-dom"; //부모요소가 아울렛을 통해서 준 children값을 찾아옴

interface IFollowersContext {
  nameOfMyUsers: string;
}

const Follower = () => {
  const { nameOfMyUsers } = useOutletContext<IFollowersContext>(); //함수의 타입정의
  return <div>Here are {nameOfMyUsers}의 followers</div>;
};

export default Follower;

//이런식으로 하면 props drilling을 하지 않아도 되며, redux나 useContext를 쓰지 않아도 된다.
//부모가 자식에게 값을 줄 수 있다.