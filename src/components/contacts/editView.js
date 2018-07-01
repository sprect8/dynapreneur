import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from '../uielements/button';
import Scrollbars from '../utility/customScrollBar';
import { notification } from '../index';
import {
  ContactModal,
  PersonNameImg,
  Avatar,
  ContactViewModal,
  ModalView,
  ButtonGroup,
  IconButton,
  InputSearch,
} from './contact.style';

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import { Link } from 'react-router-dom';

const userData = [{
	"Operations": "9",
	"BIL": "1",
	"Management": "7",
	"Value Proposition": "9",
	"Customer Segment": "9",
	"Percent": "84.29%",
	"Marketing Model": "9",
	"Key Resources": "9",
	"NAMA PENUH": "Wan Azmalinda binti Wan Azemi",
	"Key Partnerships": "7",
	"Total": "59"
}, {
	"Operations": "6",
	"BIL": "2",
	"Management": "6",
	"Value Proposition": "7",
	"Customer Segment": "9",
	"Percent": "74.29%",
	"Marketing Model": "7",
	"Key Resources": "8",
	"NAMA PENUH": "Wan Norkhaziehan binti Mohd Jaafar",
	"Key Partnerships": "9",
	"Total": "52"
}, {
	"Operations": "6",
	"BIL": "3",
	"Management": "6",
	"Value Proposition": "7",
	"Customer Segment": "8",
	"Percent": "71.43%",
	"Marketing Model": "8",
	"Key Resources": "7",
	"NAMA PENUH": "Normarina binti Mohamad",
	"Key Partnerships": "8",
	"Total": "50"
}, {
	"Operations": "9",
	"BIL": "4",
	"Management": "8",
	"Value Proposition": "7",
	"Customer Segment": "7",
	"Percent": "70.00%",
	"Marketing Model": "5",
	"Key Resources": "6",
	"NAMA PENUH": "Nur Farhana binti Nor Sazali",
	"Key Partnerships": "7",
	"Total": "49"
}, {
	"Operations": "6",
	"BIL": "5",
	"Management": "6",
	"Value Proposition": "7",
	"Customer Segment": "7",
	"Percent": "68.57%",
	"Marketing Model": "8",
	"Key Resources": "6",
	"NAMA PENUH": "Siti Zaleha binti Mohammad Joha",
	"Key Partnerships": "8",
	"Total": "48"
}, {
	"Operations": "7",
	"BIL": "6",
	"Management": "8",
	"Value Proposition": "6",
	"Customer Segment": "6",
	"Percent": "67.14%",
	"Marketing Model": "6",
	"Key Resources": "6",
	"NAMA PENUH": "Sazaimah binti Saion",
	"Key Partnerships": "8",
	"Total": "47"
}, {
	"Operations": "9",
	"BIL": "7",
	"Management": "8",
	"Value Proposition": "5",
	"Customer Segment": "5",
	"Percent": "65.71%",
	"Marketing Model": "5",
	"Key Resources": "7",
	"NAMA PENUH": "Siti Noraziah binti Redzwan",
	"Key Partnerships": "7",
	"Total": "46"
}, {
	"Operations": "7",
	"BIL": "8",
	"Management": "7",
	"Value Proposition": "6",
	"Customer Segment": "7",
	"Percent": "65.71%",
	"Marketing Model": "5",
	"Key Resources": "8",
	"NAMA PENUH": "Nurulnurhuda binti Abu Samah",
	"Key Partnerships": "6",
	"Total": "46"
}, {
	"Operations": "8",
	"BIL": "9",
	"Management": "7",
	"Value Proposition": "6",
	"Customer Segment": "6",
	"Percent": "65.71%",
	"Marketing Model": "6",
	"Key Resources": "7",
	"NAMA PENUH": "Nor Bahiah binti Salleh",
	"Key Partnerships": "6",
	"Total": "46"
}, {
	"Operations": "6",
	"BIL": "10",
	"Management": "6",
	"Value Proposition": "6",
	"Customer Segment": "7",
	"Percent": "65.71%",
	"Marketing Model": "7",
	"Key Resources": "7",
	"NAMA PENUH": "Laili Binti Mat Ali",
	"Key Partnerships": "7",
	"Total": "46"
}, {
	"Operations": "6",
	"BIL": "11",
	"Management": "7",
	"Value Proposition": "8",
	"Customer Segment": "6",
	"Percent": "64.29%",
	"Marketing Model": "6",
	"Key Resources": "6",
	"NAMA PENUH": "Roziah binti Yaacob",
	"Key Partnerships": "6",
	"Total": "45"
}, {
	"Operations": "6",
	"BIL": "12",
	"Management": "6",
	"Value Proposition": "5",
	"Customer Segment": "8",
	"Percent": "61.43%",
	"Marketing Model": "6",
	"Key Resources": "5",
	"NAMA PENUH": "Nor Ashikin bin Kamarudin",
	"Key Partnerships": "7",
	"Total": "43"
}, {
	"Operations": "7",
	"BIL": "13",
	"Management": "6",
	"Value Proposition": "5",
	"Customer Segment": "8",
	"Percent": "60.00%",
	"Marketing Model": "5",
	"Key Resources": "6",
	"NAMA PENUH": "Nor Zahayu binti Zainuddin",
	"Key Partnerships": "5",
	"Total": "42"
}, {
	"Operations": "6",
	"BIL": "14",
	"Management": "6",
	"Value Proposition": "6",
	"Customer Segment": "5",
	"Percent": "58.57%",
	"Marketing Model": "6",
	"Key Resources": "5",
	"NAMA PENUH": "Noor Azwa binti Mat Noordin",
	"Key Partnerships": "7",
	"Total": "41"
}, {
	"Operations": "7",
	"BIL": "15",
	"Management": "7",
	"Value Proposition": "6",
	"Customer Segment": "5",
	"Percent": "58.57%",
	"Marketing Model": "5",
	"Key Resources": "5",
	"NAMA PENUH": "Azliza binti Ahmad",
	"Key Partnerships": "6",
	"Total": "41"
}, {
	"Operations": "6",
	"BIL": "16",
	"Management": "5",
	"Value Proposition": "6",
	"Customer Segment": "7",
	"Percent": "57.14%",
	"Marketing Model": "5",
	"Key Resources": "5",
	"NAMA PENUH": "Noor Aizzat binti Zakaria",
	"Key Partnerships": "6",
	"Total": "40"
}, {
	"Operations": "6",
	"BIL": "17",
	"Management": "5",
	"Value Proposition": "5",
	"Customer Segment": "6",
	"Percent": "55.71%",
	"Marketing Model": "6",
	"Key Resources": "5",
	"NAMA PENUH": "Nurhidayah binti Ash'ari",
	"Key Partnerships": "6",
	"Total": "39"
}, {
	"Operations": "5",
	"BIL": "18",
	"Management": "5",
	"Value Proposition": "6",
	"Customer Segment": "5",
	"Percent": "54.29%",
	"Marketing Model": "5",
	"Key Resources": "7",
	"NAMA PENUH": "Siti Zaridah binti Zainal",
	"Key Partnerships": "5",
	"Total": "38"
}, {
	"Operations": "6",
	"BIL": "19",
	"Management": "6",
	"Value Proposition": "5",
	"Customer Segment": "5",
	"Percent": "52.86%",
	"Marketing Model": "5",
	"Key Resources": "5",
	"NAMA PENUH": "Manisa Azlina binti Muhammad",
	"Key Partnerships": "5",
	"Total": "37"
}, {
	"Operations": "6",
	"BIL": "20",
	"Management": "5",
	"Value Proposition": "5",
	"Customer Segment": "5",
	"Percent": "51.43%",
	"Marketing Model": "5",
	"Key Resources": "5",
	"NAMA PENUH": "Siti Latifah binti Meor Azizul Rahman",
	"Key Partnerships": "5",
	"Total": "36"
}];

const colors = ['#BAA6CA', '#B7DCFA', '#FFE69A', '#788195'];
export class SpecifiedDomainRadarChart extends Component {
  render() {
    const {
      datas,
      width,
      height,
      colors,
      angle,
      domain,
      cx,
      cy,
      outerRadius
    } = this.props;
    return (
      <RadarChart
        cx={cx}
        cy={cy}
        outerRadius={outerRadius}
        width={width}
        height={height}
        data={datas}
      >
        <Radar
          name="Entrepreneur"
          dataKey="A"
          stroke={colors[0]}
          fill={colors[0]}
          fillOpacity={0.6}
        />
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={angle} domain={domain} />
      </RadarChart>
    );
  }
}

export const rawData = {
  componentName: 'SpecifiedDomainRadarChart',
  key: 'SpecifiedDomainRadarChart',
  title: 'Rating',
  width: 400,
  height: 400,
  colors,
  angle: 30,
  domain: [0, 10],
  cx: 200,
  cy: 200,
  outerRadius: 150,
  datas: [
    { subject: 'CustSegment', A: 120, B: 110, fullMark: 150 },
    { subject: 'ValueProp', A: 98, B: 130, fullMark: 150 },
    { subject: 'Partnership', A: 86, B: 130, fullMark: 150 },
    { subject: 'Resources', A: 99, B: 100, fullMark: 150 },
    { subject: 'Marketing', A: 85, B: 90, fullMark: 150 },
    { subject: 'Operations', A: 65, B: 85, fullMark: 150 },
    { subject: 'Management', A: 65, B: 85, fullMark: 150 },
  ],
};

const theme = createMuiTheme({
  overrides: {
    MuiDialog: {
      root: {
        zIndex: 1500,
      },
      paperWidthSm: {
        width: '100%',
        margin: 15,
      },
    },
    MuiAvatar: {
      img: {
        "objectPosition":"top"
      }
    }
  },
});

const getContact = (seletedContact, otherAttributes) => {
  const contact = {
    id: seletedContact.id,
    avatar: seletedContact.avatar,
  };
  otherAttributes.forEach(attr => {
    contact[attr.value] = seletedContact[attr.value];
  });
  return contact;
};
export default class extends Component {
  state = {
    contact: getContact(this.props.seletedContact, this.props.otherAttributes),
    isFresh: this.props.seletedContact.isFresh,
    view: this.props.seletedContact.isFresh ? 'edit' : 'display',
  };
  showModal = () => {
    this.props.setSelectedContact();
  };
  handleCancel = e => {
    this.props.setSelectedContact();
  };
  handleDelete = e => {
    const { contacts, updateContacts } = this.props;
    const { contact } = this.state;
    const newContacts = [];
    contacts.forEach(singleContact => {
      if (contact.id !== singleContact.id) {
        newContacts.push(singleContact);
      }
    });
    notification('error', `${contact.name || 'No Name'} Detelted`);
    updateContacts(newContacts);
  };
  handleSave = () => {
    const { contacts, updateContacts } = this.props;
    const { contact, isFresh } = this.state;
    const newContacts = [];
    contacts.forEach(singleContact => {
      if (contact.id === singleContact.id) {
        newContacts.push(contact);
      } else {
        newContacts.push(singleContact);
      }
    });
    if (isFresh) {
      newContacts.push(contact);
    }
    updateContacts(newContacts);
  };
  EditView = () => {
    const { contact, isFresh } = this.state;
    const { otherAttributes } = this.props;
    return (
      <ModalView>
        <Scrollbars style={{ maxHeight: '60vh' }}>
          {otherAttributes.map(attr => (
            <div className="contactInfo" key={attr.value}>
              <InputSearch
                alwaysDefaultValue
                onChange={value => {
                  contact[attr.value] = value;
                  this.setState({ contact });
                }}
                defaultValue={contact[attr.value]}
                placeholder={attr.title}
              />
            </div>
          ))}
        </Scrollbars>        
        <ButtonGroup>
          {isFresh ? (
            ''
          ) : (
            <Button color="secondary" onClick={this.handleDelete}>
              Delete
            </Button>
          )}
          <IconButton onClick={this.handleCancel}>clear</IconButton>
          <Button color="primary" onClick={this.handleSave}>
            Save
          </Button>
        </ButtonGroup>
      </ModalView>
    );
  };
  DetailView = () => {
    const { contact, isFresh } = this.state;
    const { otherAttributes } = this.props;
    let userObj = userData.filter(x=>{return x["NAMA PENUH"].toUpperCase() == contact.name.toUpperCase()})[0];
    var dataObj = JSON.parse(JSON.stringify(rawData));
    console.log(userObj);
    //{ subject: 'Management', A: 65, B: 85, fullMark: 150 },
    dataObj.datas = [];

    let rejected = ["BIL", "Total", "Percent", "NAMA PENUH"];

    dataObj.datas = Object.keys(userObj).filter(k=>{return rejected.indexOf(k) < 0}).map(k=>{
      return { subject: k, A: +userObj[k], fullMark:10}
    });

    return (
      <ModalView>
        <Scrollbars style={{ maxHeight: '60vh' }}>
          {otherAttributes.map(
            attr =>
              contact[attr.value] ? (
                <div className="contactInfo" key={attr.value}>
                  <h6>{attr.value}</h6>
                  <span>{contact[attr.value]}</span>
                </div>
              ) : (
                <div key={attr.value} />
              )
          )}          
        </Scrollbars>
        <SpecifiedDomainRadarChart
                {...dataObj}
              />
        <ButtonGroup>          
          <Link to="/dashboard/cards" 
            color="primary">          
            Details
          </Link>
        </ButtonGroup>
      </ModalView>
    );
  };
  render() {
    const { contact, view } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <ContactViewModal
          title="Contact"
          open={true}
          className="contactViewModal"
          onClose={this.handleCancel}
        >
          <ContactModal className={view === 'edit' ? 'editView' : ''}>
            <PersonNameImg>
              <label htmlFor="inputUpload">
                <Avatar alt={contact.name} src={contact.avatar} />
                {view === 'edit' ? (
                  <input
                    type="file"
                    id="inputUpload"
                    name="inputUpload"
                    className="inputUpload"
                  />
                ) : (
                  ''
                )}
              </label>
              {view === 'edit' ? '' : <h2>{contact.name || 'No Name'}</h2>}
            </PersonNameImg>
            {view === 'edit' ? <this.EditView /> : <this.DetailView />}
          </ContactModal>
        </ContactViewModal>
      </MuiThemeProvider>
    );
  }
}
