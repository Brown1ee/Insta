import React, { Component } from "react";
import { Layout, Icon, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import IMG from "./IMG";
import { connect } from "react-redux";
import {
  getPic,
  loadPic,
  loadProfImg,
  loadMore,
  loadPicById,
  handleScroll
} from "../redux/actions";
import "antd/dist/antd.css";
import "./css/ProfilePage.css";

class ProfilePage extends Component {
  componentDidMount = () => {
    this.props.loadMore(this.props.per, this.props.page);
    this.props.loadProfImg();
    this.scrollListener = window.addEventListener("scroll", e => {
      this.props.handleScroll(
        e,
        this.props.scrolling,
        this.props.totalPages,
        this.props.per,
        this.props.page
      );
    });
  };

  render() {
    const { Header, Content } = Layout;
    const { Search } = Input;
    const { pic, profImage, loadPicById } = this.props;

    return (
      <Layout className="page-layout">
        <Header className="nav-header">
          <Row type="flex" justify="center" align="middle">
            <Col xl={8} lg={8} sm={8} xs={12}>
              <Row type="flex" justify="center" align="middle">
                <Col>
                  <Icon className="icon-size" type="instagram" />
                </Col>
                <Col>
                  <div className="vertical-line"></div>
                </Col>
                <Col>
                  <h1>Instagram</h1>
                </Col>
              </Row>
            </Col>
            <Col xl={8} lg={0} sm={0} xs={0}>
              <Row type="flex" justify="center" align="middle">
                <Col>
                  <Search
                    className="color-input"
                    placeholder="input search text"
                    onSearch={value => value}
                    style={{ width: 200 }}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 8 }}
              sm={{ span: 8, offset: 8 }}
              xs={{ span: 8, offset: 2 }}
            >
              <Row type="flex" justify="center" align="middle">
                <Col lg={4} sm={7} xs={8}>
                  <Icon className="icon-size" type="compass" />
                </Col>
                <Col lg={4} sm={7} xs={8}>
                  <Icon className="icon-size" type="heart" />
                </Col>
                <Col lg={4} sm={7} xs={8}>
                  <Icon className="icon-size" type="user" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content className="content-margin">
          <Row type="flex" justify="center" align="top">
            <Col
              xl={{ span: 3, offset: 3 }}
              lg={{ span: 4, offset: 4 }}
              sm={{ span: 6, offset: 3 }}
              xs={{ span: 6, offset: 0 }}
            >
              <img className="prof-pic" src={profImage} alt="profile pic"></img>
            </Col>
            <Col
              lg={{ span: 10, offset: 1 }}
              sm={{ span: 10, offset: 2 }}
              xs={{ span: 0, offset: 0 }}
            >
              <Row>
                <Col lg={12}>
                  <h1>ebsintegrator</h1>
                </Col>
              </Row>
              <Row type="flex" justify="start" align="top">
                <Col xl={5} lg={6} sm={6}>
                  <h4>48 posts</h4>
                </Col>
                <Col xl={5} lg={6} sm={9}>
                  <h4>113 followers</h4>
                </Col>
                <Col xl={5} lg={6} sm={9}>
                  <h4>130 following</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Folowed by{" "}
                    <strong>neluarseni, kiselev_grigor, vasile.diaconuu</strong>{" "}
                    +16 more
                  </p>
                </Col>
              </Row>
            </Col>
            <Col
              lg={{ span: 0, offset: 0 }}
              sm={{ span: 0, offset: 0 }}
              xs={{ span: 10, offset: 2 }}
            >
              <Row>
                <Col lg={12}>
                  <h1>ebsintegrator</h1>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            type="flex"
            justify="center"
            align="top"
            className="content-margin"
          >
            <Col
              lg={{ span: 0, offset: 0 }}
              sm={{ span: 0, offset: 0 }}
              xs={{ span: 20, offset: 2 }}
            >
              <Row type="flex" justify="start" align="top">
                <Col xs={6}>
                  <h4>48 posts</h4>
                </Col>
                <Col xs={9}>
                  <h4>113 followers</h4>
                </Col>
                <Col xs={9}>
                  <h4>130 following</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Folowed by{" "}
                    <strong>neluarseni, kiselev_grigor, vasile.diaconuu</strong>{" "}
                    +16 more
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row
            className="two-buttons-content"
            type="flex"
            justify="center"
            align="top"
          >
            <Col className="tagged-button" lg={2} sm={3} xs={5}>
              <Link
                to={{
                  pathname: `/home`,
                  state: { modal: true }
                }}
              >
                <Icon type="table" /> POSTS
              </Link>
            </Col>
            <Col
              className="tagged-button"
              lg={{ span: 2, offset: 1 }}
              sm={{ span: 3, offset: 2 }}
              xs={{ span: 5, offset: 2 }}
            >
              <Icon type="idcard" /> TAGGED
            </Col>
          </Row>

          <Row type="flex" justify="center" align="top">
            <Col lg={14} sm={17}>
              <Row type="flex" justify="center" align="top" className="select">
                {pic.map(item =>
                  item.map((el, index) => (
                    <Col key={el.id} lg={8} sm={8} xs={8}>
                      <IMG
                        itemSrc={el.urls.raw}
                        itemKey={el.id}
                        pic={item.map(it => it)}
                        index={index}
                        alt={el.alt_description}
                        getImageId={() => loadPicById(el.id, pic)}
                      ></IMG>
                    </Col>
                  ))
                )}
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

const putStateToProps = state => {
  return {
    pic: state.getPic.pic,
    profImage: state.getPic.profImage,
    per: state.getPic.per,
    page: state.getPic.page,
    nextImage: state.getPic.nextImage,
    scrolling: state.getPic.scrolling,
    totalPages: state.getPic.totalPages
  };
};

export default connect(putStateToProps, {
  getPic,
  loadPic,
  loadProfImg,
  loadMore,
  loadPicById,
  handleScroll
})(ProfilePage);
