import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const onAboutClick = () => {
        navigate("/about")
    }

  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>이벤트 참여 방법 확인</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
