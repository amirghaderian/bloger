import Image from "next/image"
import circle from "../../public/images/circle.svg"
const Example5 = () => {
  return (
    <div>
    <div className="row">
      <div className="col-sm-6">
     
        <div className="ih-item circle effect20 bottom_to_top"><a href="#">
            <div className="Image"><Image src={circle} alt="Image"/></div>
            <div className="info">
              <div className="info-back">
                <h3>Heading here</h3>
                <p>Description goes here</p>
              </div>
            </div></a></div>
     
      </div>
      <div className="col-sm-6">
     
        <div className="ih-item circle colored effect20 bottom_to_top"><a href="#">
            <div className="Image"><Image src={circle} alt="Image"/></div>
            <div className="info">
              <div className="info-back">
                <h3>Heading here</h3>
                <p>Description goes here</p>
              </div>
            </div></a></div>     
      </div>
    </div></div>)}

export default Example5