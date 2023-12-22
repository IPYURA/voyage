import React from "react";
import { useParams, Outlet, Link, useOutletContext } from "react-router-dom";
import { users } from "../db";
import Follower from "./Follower";

const User = () => {
  console.log(useOutletContext()); //이 콘솔을 통해 부모요소(Root)로부터 {darkmode : true}값이 전달되어올 수 있다는 것을 확인할 수 있다.
  const { userId } = useParams(); //params에는 parameter값이 들어온다.
  return (
    <div>
      <h1>
        User With it {userId} is name : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">see Followers</Link>
      <Outlet context={{ nameOfMyUsers: users[Number(userId) - 1].name }} />
    </div>
  );
};
//슬래쉬를 주어 절대경로가 되면 안되니까 슬래쉬를 주지 않는다!

export default User;

//이걸 활용해서 JSON의 데이터를 단순히 끌어오는 것에서 나아가,
//항목에 맞는 페이지도 구성할 수 있다.
