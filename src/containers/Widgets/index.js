import React, { Component } from "react";
import LayoutWrapper from "../../components/utility/layoutWrapper";
import CardsExample from "./WEEOTM";
import {
  Row,
  OneThirdColumn,
  TwoThirdColumn,
  FullColumn,
  HalfColumn
} from "../../components/utility/rowColumn";
import InstagramFeed from "./InstagramFeed";
import Contacts from "../Contact/contactBox";
import Statistics from "./Statistics";
import Transaction from "./Transactions";
import SalesProgress from "./SaleProgress";
import SalesStats from "./Sales";
import SaleChart from "./SaleCharts";
import TableWidget from "./TableWidget";
import CircularWidget from "./CircularWidgets";
import Visitors from "./WEOVERVIEW";
import LMap from "./WEACTIONS/mapWithMarkerCluster";
import { data, data2, data3 } from "./Transactions/config";
import { userData } from "./WEOVERVIEW/config";
import WidgetBox from "./WidgetBox"
class Widget extends Component {
  render() {
    return (
      <LayoutWrapper>        

        <Row>
          <HalfColumn md={12}>
            <Visitors title="Entrepreneur Rankings" stretched />
          </HalfColumn>

          <HalfColumn style={{ paddingTop: 0, paddingBottom: 0 }} md={12}>
            <Row>
              <FullColumn sm={6} md={12}>
              <WidgetBox title="Entrepreneurs">
              <LMap/>
              </WidgetBox>
              </FullColumn>
            </Row>
          </HalfColumn>
        </Row>
        <Row>
          <FullColumn>
            <WidgetBox title="Entrepreneurs Of the Month">
            <CardsExample/>
            </WidgetBox>
          </FullColumn>
        </Row>

        <Row>
          <FullColumn sm={12} md={6}>
            <Contacts title="Entrepreneurs" widgetHeight={410} stretched />
          </FullColumn>
        </Row>        
      </LayoutWrapper>
    );
  }
}

export default Widget;
