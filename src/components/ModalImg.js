import React from "react";
import { Icon, Row, Col, Modal } from "antd";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { loadPicById, loadPreviousPicById } from "../redux/actions";
import "./css/ModalImg.css";
const ModalImg = ({
  loadPicById,
  imageObject,
  pic,
  index1,
  index2,
  loadPreviousPicById,
  indexPrev1,
  indexPrev2
}) => {
  let { state = {} } = useLocation();
  let { id } = useParams();
  let history = useHistory();
  let back = e => {
    e.stopPropagation();
    history.goBack();
  };
  const modal = true;
  let secId = id ? -1 : id;
  return (
    <div>
      {modal ? (
        <div>
          <Modal
            className="whole-modal"
            visible={modal}
            onCancel={() => history.push("/")}
          >
            <Row>
              <Col md={24} sm={0} xs={0}>
                <Row>
                  <Col span={14}>
                    <img
                      className="pic-inside-modal"
                      src={imageObject !== null ? imageObject.urls.raw : ""}
                      alt={imageObject !== null ? imageObject.alt : ""}
                    ></img>
                  </Col>
                  <Col span={10}>
                    <Row
                      type="flex"
                      justify="start"
                      align="middle"
                      className="min-prof-pic-text"
                    >
                      <Col span={5}>
                        <img
                          className="prof-pic-min"
                          src="https://www.ixxiyourworld.com/media/1738957/Disney-Icon-Bambi.jpg?mode=crop&width=562&height=562"
                          alt="profile pic"
                        ></img>
                      </Col>
                      <Col span={19}>
                        <strong>
                          <p>ebsintegrator . Following</p>
                        </strong>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row type="flex" justify="center" align="middle">
                      <Col span={24}>
                        <div className="text-for-img">
                          <p>
                            <strong> ebsintegrator </strong>
                            Greetings from <a href="#kh">
                              #ebsintegrator's
                            </a>{" "}
                            new office!
                            <a href="#kh">#newoffice</a>{" "}
                            <a href="#kh">#ebsoffice</a>{" "}
                            <a href="#kh">#officelife</a>
                            <a href="#kh">#officestyle</a>{" "}
                            <a href="#kh">#EBSteam</a>{" "}
                            <a href="#kh">#meetings</a>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md={0} sm={24} xs={24}>
                <Row>
                  <Col>
                    <Row
                      type="flex"
                      justify="start"
                      align="middle"
                      className="min-prof-pic-text"
                    >
                      <Col span={5}>
                        <img
                          className="prof-pic-min"
                          src="https://www.ixxiyourworld.com/media/1738957/Disney-Icon-Bambi.jpg?mode=crop&width=562&height=562"
                          alt="profile pic"
                        ></img>
                      </Col>
                      <Col span={19}>
                        <strong>
                          <p>ebsintegrator . Following</p>
                        </strong>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <img
                      className="pic-inside-modal"
                      src={imageObject !== null ? imageObject.urls.raw : ""}
                      alt={imageObject !== null ? imageObject.alt : ""}
                    ></img>
                  </Col>
                  <Col span={24}>
                    <Row type="flex" justify="center" align="middle">
                      <Col span={24}>
                        <div className="text-for-img">
                          <p>
                            <strong> ebsintegrator </strong>
                            Greetings from <a href="#kh">
                              #ebsintegrator's
                            </a>{" "}
                            new office!
                            <a href="#kh">#newoffice</a>{" "}
                            <a href="#kh">#ebsoffice</a>{" "}
                            <a href="#kh">#officelife</a>
                            <a href="#kh">#officestyle</a>{" "}
                            <a href="#kh">#EBSteam</a>{" "}
                            <a href="#kh">#meetings</a>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            {pic.length ? (
              <div className="modal-right-button">
                <a
                  onClick={() =>
                    loadPicById(pic[index1][index2].id, pic, secId)
                  }
                >
                  <Icon type="right" />
                </a>
              </div>
            ) : (
              ""
            )}
            <Row>
              {pic.length ? (
                <div className="modal-left-button">
                  <a
                    onClick={() =>
                      loadPreviousPicById(pic[indexPrev1][indexPrev2].id, pic)
                    }
                  >
                    <Icon type="left" />
                  </a>
                </div>
              ) : (
                ""
              )}
            </Row>
          </Modal>
        </div>
      ) : (
        undefined
      )}
    </div>
  );
};
const putStateToProps = state => {
  return {
    imageObject: state.getPic.imageObject,
    pic: state.getPic.pic,
    index1: state.getPic.index1,
    index2: state.getPic.index2,
    indexPrev1: state.getPic.indexPrev1,
    indexPrev2: state.getPic.indexPrev2
  };
};
export default connect(putStateToProps, { loadPicById, loadPreviousPicById })(
  ModalImg
);
