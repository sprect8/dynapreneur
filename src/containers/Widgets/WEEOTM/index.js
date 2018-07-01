import React, { Component } from "react";
import Scrollbars from '../../../components/utility/customScrollBar';
import {rawData, SpecifiedDomainRadarChart} from '../../../components/contacts/editView';
import Avatar from '../../UiElements/Avatars/avatars.style';
import { withStyles } from "material-ui/styles";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import { Row, HalfColumn, FullColumn } from "../../../components/utility/rowColumn";
import { Chip, Icon, Wrapper } from '../../UiElements/Chips/chips.style';
import Papersheet, {
  DemoWrapper
} from "../../../components/utility/papersheet";
const contact = {
	"Nature of business": "Catering & equipment rentals",
	"name": "Wan Azmalinda binti Wan Azemi",
	"Business registration no.": "KT0204312-X",	
	"Business known as": "Citarasa Linda Katering (CLK)",
	"Position": "Owner/Founder",	
	"Company name": "Citarasa Linda Katering"
}

const userObj = {
	"Operations": "9",
	"BIL": "1",
	"Management": "7",
	"Value Proposition": "9",
	"Customer Segment": "9",
	"Percent": "84.29%",
	"Marketing Model": "9",
	"Key Resources": "9",
	"Key Partnerships": "7",
	"Total": "59"
}



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

/*
<HalfColumn>
          <Papersheet title={<div>Score:<Avatar className="greenAvatar" style={{"display":"inline", "padding":"5px"}}>59</Avatar> (84.29%) </div>}>            
            <SpecifiedDomainRadarChart {...dataObj} />
            <Chip
        avatar={<Avatar className="greenAvatar">1</Avatar>}
        label="Rank"
        onClick={()=>{}}
      />
      <Chip
        avatar={<Avatar className="orangeAvatar">7</Avatar>}
        label="Key Partnerships"
        onClick={()=>{}}
      />
      <Chip
        avatar={<Avatar className="greenAvatar">9</Avatar>}
        label="Key Resources"
        onClick={()=>{}}
      />
      <Chip
        avatar={<Avatar className="greenAvatar">9</Avatar>}
        label="Marketing Model"
        onClick={()=>{}}
      />
      <Chip
        avatar={<Avatar className="greenAvatar">9</Avatar>}
        label="Customer Segment"
        onClick={()=>{}}
      />
<Chip
        avatar={<Avatar className="greenAvatar">9</Avatar>}
        label="Value Proposition"
        onClick={()=>{}}
      />      
<Chip
        avatar={<Avatar className="orangeAvatar">7</Avatar>}
        label="Management"
        onClick={()=>{}}
      />

        <div>
          Recommendations:<br/>
          <a href="marketing">Management Course</a><br/>
          <a href="marketing">Partnership Events - Catering/Restaurants</a>          
        </div>

            </Papersheet>
          </HalfColumn>
*/
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
          <Papersheet title={<div>Rank:<Avatar className="greenAvatar" style={{"display":"inline", "padding":"5px"}}>1</Avatar> Wan Azmalinda binti Wan Azemi</div>}>
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
                <img src="/images/entrepreneurs/Wan-Azmalinda-binti-Wan-Azemi.png" />
              </HalfColumn>
            </Row>            
            </Papersheet>
          </HalfColumn>
          <HalfColumn>
          <iframe style={{"float":"left", "padding":"5px"}} width="400" height="215" src="https://www.youtube.com/embed/kt7HsUHk30g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <p>
                The NIACC Pappajohn Center and North Iowa Area SBDC are proud to recognize Brad and Angie Barber of Cabin Coffee as the Pappajohn Center Entrepreneur of the Month for January 2018. Cabin Coffee was founded in 2002 in Clear Lake, Iowa by Brad and Angie Barber. Cabin Coffee is an excellent example of hometown success. Brad and Angie founded Cabin Coffee not just because they wanted to start a business, but with the clear intention of growing their North Iowa roots and connecting more deeply with the community.
                </p><p>
In 15 years, Cabin Coffee has grown from a single location in Clear Lake to 15 stores around the United States. Brad and Angie successfully franchised Cabin Coffee by focusing on quality: the quality of their coffee, their culture, and their customer service makes it attractive to both franchisees and customers. The steady, sustained growth of Cabin Coffee has had a positive economic impact for North Iowa. Creating and retaining jobs, and driving business back into Iowa from around the nation is the kind of entrepreneurial drive that makes our local entrepreneurs so vital to the health of our communities.
</p><p>
Brad and Angie won the America’s SBDC Iowa 2018 Neal Smith Entrepreneur of the Year Award and have been nominated for the SBA 2018 Small Business Person of the Year Award (results to be announced Spring 2018).
</p><p>
Every month, the Pappajohn Center recognizes the North Iowa entrepreneurs who make our region a success. To self-nominate or nominate a business for Pappajohn Center Entrepreneur of the Month click here.
                  </p>
          </HalfColumn>
        </Row>   
        </LayoutWrapper>
    );
  }
}
export default withStyles(styles, { withTheme: true })(CardsExample);
