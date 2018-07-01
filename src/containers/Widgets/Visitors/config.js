/* * * * * * * * * * * * * * * * * * * *
              Charts Config
* * * * * * * * * * * * * * * * * * * */
/*const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Regular",
      data: [350, 456, 404, 590, 705, 970],
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      yAxisID: "y-axis-1"
    },
    {
      label: "New",
      data: [200, 185, 590, 921, 250, 800],
      borderColor: "rgb(153, 102, 255)",
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      yAxisID: "y-axis-2"
    }
  ]
};*/
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
	"NAMA PENUH": "Sazaimah binti Sai'on",
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
	"NAMA PENUH": "Siti Noraziah bt Redzwan",
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
	"NAMA PENUH": "Nor Ashikin binti Kamarudin",
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

const data = {
  labels: userData.map(x=>{return x["NAMA PENUH"].split(" ").slice(0, 2)}),
  datasets: [
    {
      label: "LastMonth",
      data:userData.map(x=>{return +x["Total"] - Math.random()*2}),
      borderColor: "rgb(54,162,235)",
      backgroundColor:"rbga(54,162,235, 0.5)",
      yAxisID:"y-axis-1"
    },
    {
      label: "ThisMonth",
      data:userData.map(x=>{return +x["Total"]}),
      borderColor: "rgb(153, 102, 255)",
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      yAxisID: "y-axis-1"
    }
  ]
}

const options = {
  responsive: true,
  type: "bar",
  legend: {
    display: true
  },
  tooltips: {
    mode: "label"
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    yAxes: [
      {
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "left",
        id: "y-axis-1"
      },
      {
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          drawOnChartArea: false
        }
      }
    ]
  }
};

const plugins = [
  {
    afterDraw: (chartInstance, easing) => {
      const ctx = chartInstance.chart.ctx;
      ctx.fillText("", 100, 100);
    }
  }
];

export { data, options, plugins, userData };
