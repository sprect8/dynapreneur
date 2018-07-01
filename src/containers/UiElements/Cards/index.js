import React, { Component } from "react";
import Scrollbars from '../../../components/utility/customScrollBar';
import {rawData, SpecifiedDomainRadarChart} from '../../../components/contacts/editView';
import Avatar from '../Avatars/avatars.style';
import { withStyles } from "material-ui/styles";
import IntlMessages from "../../../components/utility/intlMessages";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import { Row, HalfColumn, FullColumn } from "../../../components/utility/rowColumn";
import { Chip, Icon, Wrapper } from '../Chips/chips.style';
import Papersheet, {
  DemoWrapper
} from "../../../components/utility/papersheet";
import RecipeReviewCard from "./cardReview";
import SimpleCard from "./simpleCards";
import SimpleMediaCard from "./simpleMediaCards";
import UserProfileCard from "./userProfileCard";
import MediaControlCard from "./mediaControlCards";
import EnhancedTable from "./tableViewKpis";
const contact = {
  
  "Nature of business": "Produce goods from second hand jeans & opening a restaurant",
  "name": "Azliza binti Ahmad",
  "Business registration no.": "002369085-X",  
  "Business known as": "Dhiyamaya Enterprise",
  "Position": "Owner/Founder",    
  "Company name": "Dhiyamaya Enterprise",      
}
const userObj = {"Operations": "7",
"BIL": "15",
"Management": "7",
"Value Proposition": "6",
"Customer Segment": "5",
"Percent": "58.57%",
"Marketing Model": "5",
"Key Resources": "5",  
"Key Partnerships": "6",
"Total": "41"}



const styles = theme => ({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  flexGrow: {
    flex: "1 1 auto"
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  tableWrapper: {
    overflowX: 'auto'
  }
});
class CardsExample extends Component {
  render() {
    const { props } = this;
    const otherAttributes = Object.keys(contact);
    var dataObj = JSON.parse(JSON.stringify(rawData));
    dataObj.width=600;
    dataObj.height = 400;
    dataObj.cx = 350;
    dataObj.cy = 200;

    let rejected = ["BIL", "Total", "Percent", "NAMA PENUH"];

    dataObj.datas = Object.keys(userObj).filter(k=>{return rejected.indexOf(k) < 0}).map(k=>{
      return { subject: k, A: +userObj[k], fullMark:10}
    });


    return (
      <LayoutWrapper>
        <Row>          
          <HalfColumn>
          <Papersheet title={<div>Score:<Avatar className="orangeAvatar" style={{"display":"inline", "padding":"5px"}}>41</Avatar> (58.75%) </div>}>            
            <SpecifiedDomainRadarChart {...dataObj} />

            <Chip
        avatar={<Avatar className="orangeAvatar">15</Avatar>}
        label="Rank"
        onClick={()=>{}}
      />
      <Chip
        avatar={<Avatar className="orangeAvatar">6</Avatar>}
        label="Key Partnerships"
        onClick={()=>{}}
      />
      <Chip
        avatar={<Avatar className="orangeAvatar">5</Avatar>}
        label="Key Resources"
        onClick={()=>{}}
      />
      <Chip
        avatar={<Avatar className="orangeAvatar">5</Avatar>}
        label="Marketing Model"
        onClick={()=>{}}
      />
      <Chip
        avatar={<Avatar className="orangeAvatar">5</Avatar>}
        label="Customer Segment"
        onClick={()=>{}}
      />
<Chip
        avatar={<Avatar className="orangeAvatar">6</Avatar>}
        label="Value Proposition"
        onClick={()=>{}}
      />      
<Chip
        avatar={<Avatar className="greenAvatar">7</Avatar>}
        label="Management"
        onClick={()=>{}}
      />

        <div>
          Recommendations:<br/>
          <a href="marketing">Marketing Course</a><br/>
          <a href="marketing">Partnership Events - Catering/Restaurants</a>          
        </div>

            </Papersheet>
          </HalfColumn>
          <HalfColumn>
            <Papersheet title={<div>Rank:<Avatar className="orangeAvatar" style={{"display":"inline", "padding":"5px"}}>15</Avatar> Azliza binti Ahmad</div>}>
            <Row>
              <HalfColumn>
                <Scrollbars style={{ maxHeight: '60vh' }}>
                  {otherAttributes.map(
                    attr =>
                      contact[attr] ? (
                        <div className="contactInfo" key={attr}>
                          <h6>{attr}</h6>
                          <span>{contact[attr]}</span>
                        </div>
                      ) : (
                          <div key={attr} />
                        )
                  )}
                </Scrollbars>
              </HalfColumn>
              <HalfColumn>
                <img src="/images/entrepreneurs/Azliza-binti-Ahmad.png" />
              </HalfColumn>
            </Row>
            </Papersheet>
          </HalfColumn>
        </Row>        
        <Row>
          <FullColumn>
            <EnhancedTable {...props}/>
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
export default withStyles(styles, { withTheme: true })(CardsExample);
