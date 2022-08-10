import "./ServiceInfo.css";

const ServiceInfo = () => {
  return (
    <div className="serviceInfo-container">
      <div className="info-items">
        <h3 className="info-title">About this service</h3>
        <div>inssa food is a service for...</div>
      </div>
      <div className="info-items">
        <h3 className="info-title">Way to use</h3>
        <div>이렇게 저렇게 쓰면 됩니다 라는 내용의 안내문서</div>
      </div>
    </div>
  );
};

export default ServiceInfo;
