import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from "prop-types";
import IntlMessages from "../../helpers/IntlMessages";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";
import InputLabel from "@material-ui/core/InputLabel";
// import { Input,Button } from '@material-ui/core';

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
          <Colxx xxs="6" className="mb-4">
            {/* <p><IntlMessages id="menu.profile"/></p> */}
            <form>
            <Row>
            <Colxx xxs="6">
              <Input type="text" placeholder="First Name"></Input>
            </Colxx>
            <Colxx xxs="6">
              <Input type="text" placeholder="Last Name"></Input>
            </Colxx>
            </Row>
            </form>
          </Colxx>
          <Colxx xxs="6" className="mb-4">
            {/* <p><IntlMessages id="menu.profile"/></p> */}
            Image Side
          </Colxx>
        </Row>
        
        <Row>
        <Colxx xxs="12">
        <Button  type="submit">Submit</Button>
        </Colxx>
        </Row>
      </Fragment>
    )
  }
}
