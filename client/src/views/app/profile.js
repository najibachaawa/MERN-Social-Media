import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import PropTypes from "prop-types";
import IntlMessages from "../../helpers/IntlMessages";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";


export default class ProfilePage extends Component {
  render() {
    return (
        <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.profile" match={this.props.match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <p><IntlMessages id="menu.profile"/></p>
          </Colxx>
        </Row>
      </Fragment>
    )
}
}
