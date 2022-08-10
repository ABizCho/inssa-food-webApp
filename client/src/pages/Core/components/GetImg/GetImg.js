import "./GetImg.css";
const GetImg = () => {
  return (
    <div className="getImg-container">
      <div className="input-box">
        <DropDownMenu logicName="메뉴판 사진" />
        <DropDownMenu logicName="음식사진" />
      </div>
    </div>
  );
};

export default GetImg;

// 하위 Components
const DropDownMenu = (props) => {
  const { logicName } = props;
  return (
    <div className="dropdown">
      <span className="dropbtn">{logicName}</span>
      <div className="dropdown-content">
        <a href="#">사진 찍기</a>
        <a href="#">사진 업로드</a>
      </div>
    </div>
  );
};
