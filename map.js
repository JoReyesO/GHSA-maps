var data_dict = {};
var map = new Datamap({
  element: document.getElementById('container'),
  fills: {
            defaultFill: '#e5e6e5', // Any hex, color name or rgb/rgba value
			 'bubble': '#000080'
		},
	bubblesConfig: {
        borderWidth: .3,
        borderOpacity: 1,
        borderColor: '#FFFFFF',
		popupOnHover: true,
	},

    scope: 'world',
    geographyConfig: {
        popupOnHover: false,
        highlightOnHover: true,
    },
	arcConfig: {
    strokeWidth: 3,
    animationSpeed: 1200,
  },
  done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', countryClicked)
 },
 
  geographyConfig: {
    popupTemplate: function(geo, data) { // This function should just return a string
      return '<div class="hoverinfo">' +
               '<h3>' + geo.properties.name + '</h3>' +
               'Amount given: $' + data_dict[geo.id]["given"] +
             '</div>';
    }
  }
});



var bubbles = [{
        name: 'Mexico',
		country: "MEX",
        radius: 5.42,
        amount_received: 555271,
        latitude: 23.20,
        longitude: -103.10,
		fillKey: 'bubble'
      },{
        name: 'Myanmar',
        radius: 16.0,
        amount_received: 21514817,
        latitude: 19.8,
        longitude: 96.15,
		fillKey: 'bubble'
      },{
        name: 'Guatemala',
        radius: 24.8,
        amount_received: 33190810,
        latitude: 14.61666667,
        longitude: -90.516667,
		fillKey: 'bubble'
      },{
        name: 'Liberia',
        radius: 38.36,
        amount_received: 510006538,
        latitude: 6.3,
        longitude: -10.8,
		fillKey: 'bubble'
      },{
        name: 'Zimbabwe',
        radius: 27.92,
        amount_received: 74234140,
        latitude: -17.816666667,
        longitude: 31.033333,
		fillKey: 'bubble'
      },{
        name: 'Georgia',
        radius: 3.57,
        amount_received: 1515547,
        latitude: 41.683333333,
        longitude: 43.833333,
		fillKey: 'bubble'
      },{
        name: 'Pakistan',
        radius: 42.9,
        amount_received: 114044556,
        latitude: 25.68333333,
        longitude: 73.05,
		fillKey: 'bubble'
      },{
        name: 'Tajikistan',
        radius: 6.26,
        amount_received: 6091705,
        latitude: 38.55,
        longitude: 71.766667,
		fillKey: 'bubble'
      },{
        name: 'Kenya',
        radius: 75,
        amount_received: 265864479,
        latitude: -1.283333333,
        longitude: 	36.816667,
		fillKey: 'bubble'
      }
/*	  ,{
        name: 'Mexico',
        radius: 2.1,
        amount_received: 555271,
        latitude: 19.20,
        longitude: -99.10,
		fillKey: 'bubble'
      },{
        name: 'Mexico',
        radius: 2.1,
        amount_received: 555271,
        latitude: 19.20,
        longitude: -99.10,
		fillKey: 'bubble'
      }
	  */
    ];
	
	function drawBubbles(geo){
        //console.log(geo);
        //draw bubbles for amount given
        for (var i in bubbles) {
            var bubble = bubbles[i];
            if (bubble.name == geo.properties.name) {
          //      console.log(bubble.name);
                map.bubbles([bubble],
                        {
                                popupTemplate: function (data) {
                                      return '<div class="hoverinfo">' +
                                               '<h3>' + data.name + '</h3>' +
                                               'Amount given: $' + data.amount_received +
                                             '</div>';
                                    }

                        });
            }
        }
}


/*
 buckets: 1) public commitments made to improve national capacity; 
 2) public commitments made to improve others’ capacity; 
 3) public commitments made to undergo or support JEEs.
*/

'use strict'
//Depends on version of datamaps w/ country code conversion in handleArcs (http://datamaps.github.io)

/*var data_dict = {};
var map = new Datamap({
  element: document.getElementById('container'),
  fills: {
            defaultFill: '#e5e6e5' // Any hex, color name or rgb/rgba value
        },
  // projection: 'mercator',
arcConfig: {
    strokeWidth: 3,
    animationSpeed: 1200,
  },
*/  
  
  var usa = {
  id: "USA",
  
  destination_countries: [
 /*   
	{
      id:"ALB",
      amount_given:297711
	},
    {
      id:"AFG",
	  amount_given:71421886
	},	
	{
	  id:"AGO",
	  amount_given:43531837
	},
    {
	  id:"ATG",
	  amount_given:3780
	},
	{
	  id:"ARM",
	  amount_given:3752654
	},
	{
	  id:"ASN",
	  amount_given:8056544
	},
	{
	  id:"BGD",
	  amount_given:91567573
	},
	{
	  id:"BRB",
	  amount_given:4593
	},
	{
	  id:"BLZ",
	  amount_given:1258162
	},
	{
	  id:"BEN",
	  amount_given:23070427
	},
	{
	  id:"BWA",
	  amount_given:13507566
	},
	{
	  id:"BFA",
	  amount_given:2519722
	},
 */	
	{
	  id:"MMR",
	  amount_given:21514817
	},
/* 	
	{
	  id:"BDI",
	  amount_given:22789793
	},
	{
	  id:"CPV",
	  amount_given:3003913
	},
	{
	  id:"KHM",
	  amount_given:40987533
	},
	{
	  id:"CMR",
	  amount_given:22712035
	},
	{
	  id:"COD",
	  amount_given:102253241
	}, 
	{
	  id:"COL",
	  amount_given:2861
	},
	{
	  id:"CIV",
	  amount_given:26680429
	},
	{
	  id:"DJI",
	  amount_given:1377725
	},
	{
	  id:"EGY",
	  amount_given:17333150
	},
	{
	  id:"ECU",
	  amount_given:857418
	},
	{
	  id:"GNQ",
	  amount_given:5171
	},
	{
	  id:"ETH",
	  amount_given:178766198
	},
	{
	  id:"FJI",
	  amount_given:650255
	}, 
	{
	  id:"GAB",
	  amount_given:41318
	}, 
	{
	  id:"GMB",
	  amount_given:41318
	}, 
	{
	  id:"GEO",
	  amount_given:1515547
	}, 
	{
	  id:"GHA",
	  amount_given:1515547
	}, 
*/	
	{
	  id:"GTM",
	  amount_given:33190810
	}, 
/*	
	{
	  id:"GIN",
	  amount_given:29542977
	}, 
	{
	  id:"GNB",
	  amount_given:2956445
	}, 
	{
	  id:"GUY",
	  amount_given:2051656
	}, 
	{
	  id:"HTI",
	  amount_given:107094887
	}, 
	{
	  id:"HND",
	  amount_given:4973542
	}, 
	{
	  id:"IND",
	  amount_given:50831175
	}, 
	{
	  id:"IDN",
	  amount_given:50526132
	}, 
	{
	  id:"ISR",
	  amount_given:2629412
	},
	{
	  id:"JAM",
	  amount_given:2641014
	},
	{
	  id:"JOR",
	  amount_given:46248790
	}, 
	{
	  id:"KAZ",
	  amount_given:103602
	},
	{
	  id:"DOM",
	  amount_given:6774365
	},
*/	
	{
	  id:"KEN",
	  amount_given:265864479
	}, 
/*	
	{
	  id:"KOR",
	  amount_given:15
	}, 
	{
	  id:"PKR",
	  amount_given:6026
	}, 
	{
	  id:"KGZ",
	  amount_given:6308950
	}, 
	{
	  id:"LAO",
	  amount_given:12161273
	}, 
	{
	  id:"LBN",
	  amount_given:14193753
	},
*/	
	{
	  id:"LBR",
	  amount_given:51006538
	},
/*	
	{
	  id:"MDG",
	  amount_given:52536624
	}, 
	{
	  id:"MWI",
	  amount_given:100050265
	},
	{
	  id:"MLI",
	  amount_given:61459325
	},
*/	
	{
	  id:"MEX",
	  amount_given:555271
	},
/*	
	{
	  id:"FSM",
	  amount_given:153230
	},
	{
	  id:"MDA",
	  amount_given:453683
	},
	{
	  id:"MNG",
	  amount_given:292108
	},
	{
	  id:"MOZ",
	  amount_given:144647824
	},
	{
	  id:"NAM",
	  amount_given:19477547
	},
	{
	  id:"NPL",
	  amount_given:46727551
	},
	{
	  id:"NIC",
	  amount_given:8737978
	},
	{
	  id:"NER",
	  amount_given:1150724
	},
	{
	  id:"NGA",
	  amount_given:233164259
	},
*/	
	{
	  id:"PAK",
	  amount_given:114044556
	},
	/*	
	{
	  id:"PAN",
	  amount_given:1064424
	},
	{
	  id:"PNG",
	  amount_given:4834781
	},
	{
	  id:"PRY",
	  amount_given:1377086
	},
	{
	  id:"PER",
	  amount_given:3915338
	},
	{
	  id:"PHL",
	  amount_given:3915338
	},
	{
	  id:"POL",
	  amount_given:6345
	},
	{
	  id:"QAT",
	  amount_given:19334
	},
	{
	  id:"RUS",
	  amount_given:22867
	},
	{
	  id:"RWA",
	  amount_given:60402868
	},
	{
	  id:"WSM",
	  amount_given:335704
	},
	{
	  id:"SEN",
	  amount_given:55880953
	},
	{
	  id:"SLE",
	  amount_given:20321601
	},
	{
	  id:"SOM",
	  amount_given:366611
	},
	{
	  id:"ZAF",
	  amount_given:245723942
	},
	{
	  id:"SSD",
	  amount_given:38245044
	}, 
	{
	  id:"LKA",
	  amount_given:144057
	},
	{
	  id:"SDF",
	  amount_given:344989
	},
	{
	  id:"SWZ",
	  amount_given:31303330
	},
*/	
	{
	  id:"TJK",
	  amount_given:6019705
	},
	{ id: "GEO",
	  amount_given: 1515547
	},
/*	
	{
	  id:"TZA",
	  amount_given:205860920
	},
	{
	  id:"THA",
	  amount_given:139414
	},
	{
	  id:"TLS",
	  amount_given:2788938
	},
	{
	  id:"TGO",
	  amount_given:883366
	},
	{
	  id:"TKM",
	  amount_given:252479
	},
	{
	  id:"UKR",
	  amount_given:21754488
	},
	{
	  id:"UZB",
	  amount_given:3570549
	},
	{
	  id:"VUT",
	  amount_given:1038951
	},
	{
	  id:"VNM",
	  amount_given:15674056
	},
	{
	  id:"PSE",
	  amount_given:60370661
	},
	{
	  id:"WLD",
	  amount_given:60370661
	},
	{
	  id:"YEM",
	  amount_given:765585
	},
	{
	  id:"ZMB",
	  amount_given:142695546
	},
*/	
	{
	  id:"ZWE",
	  amount_given:74234140
	},
/*	
	{
	  id:"CHN",
	  amount_given:1164167
	},
	{
	  id:"DJI",
	  amount_given:1377725
	},
	{
	  id:"SWZ",
	  amount_given:31303330
	},
*/	
  ]
};


var countries = {};
countries[usa.id] = usa;
loadCountry("USA");
console.log(map);
console.log(countries);



function loadCountry(country) {
  var country = countries[country];
  if (country == undefined) return;
  var data = [];
  data_dict = {};  


  	
  map.arc(data);

for (var j in country.destination_countries) {
    var destination_country = country.destination_countries[j];
    var link = {
      origin: country.id,
      destination: destination_country.id,
/*	strokeWidth: destination_country.id == "VUT"? 2 : 1 && 
				destination_country.id == "PAN"? 2 : 1 &&
				destination_country.id == "NER"? 2 : 1 &&
				destination_country.id == "CHN"? 2 : 1 &&
				destination_country.id == "BLZ"? 2 : 1 &&
				destination_country.id == "PRY"? 2 : 1 &&
				destination_country.id == "DJI"? 2 : 1 &&
				destination_country.id == "GEO"? 2 : 1 &&
				destination_country.id == "ISR"? 2 : 1 &&
				destination_country.id == "JAM"? 2 : 1 &&
				destination_country.id == "TLS"? 2 : 1 &&
				destination_country.id == "GNB"? 2 : 1 &&
				destination_country.id == "CPV"? 2 : 1 &&
				destination_country.id == "UZB"? 2 : 1 &&
				destination_country.id == "ARM"? 2 : 1 &&
				destination_country.id == "PER"? 2 : 1 &&
				destination_country.id == "PNG"? 2 : 1 &&
				destination_country.id == "HND"? 2 : 1 &&
				destination_country.id == "TJK"? 2 : 1 &&
				destination_country.id == "KGZ"? 2 : 1 &&
				destination_country.id == "DOM"? 2 : 1 &&
				destination_country.id == "NIC"? 2 : 1 &&
				destination_country.id == "LAO"? 2 : 1 &&
				destination_country.id == "BWA"? 2 : 1 &&
				destination_country.id == "LBN"? 2 : 1 &&
				
				
				destination_country.id == "VNM"? 4 : 1 &&
				destination_country.id == "EGY"? 4 : 1 &&
				destination_country.id == "NAM"? 4 : 1 &&
				destination_country.id == "SLE"? 4 : 1 &&
				destination_country.id == "MMR"? 4 : 1 &&
				destination_country.id == "UKR"? 4 : 1 &&
				destination_country.id == "CMR"? 4 : 1 &&
				destination_country.id == "BDI"? 4 : 1 &&
				destination_country.id == "BEN"? 4 : 1 &&
				destination_country.id == "LSO"? 4 : 1 &&
				destination_country.id == "BFA"? 4 : 1 &&
				destination_country.id == "CIV"? 4 : 1 &&
				destination_country.id == "GIN"? 4 : 1 &&
				destination_country.id == "SWZ"? 4 : 1 &&
				destination_country.id == "GTM"? 4 : 1 &&
				destination_country.id == "PHL"? 4 : 1 &&
				destination_country.id == "SSD"? 4 : 1 &&
				destination_country.id == "KHM"? 4 : 1 &&
				destination_country.id == "AGO"? 4 : 1 &&
				destination_country.id == "JOR"? 4 : 1 &&
				destination_country.id == "NPL"? 4 : 1 &&
				
				destination_country.id == "IDN"? 6 : 1 &&
				destination_country.id == "IND"? 6 : 1 &&
				destination_country.id == "LBR"? 6 : 1 &&
				destination_country.id == "MDG"? 6 : 1 &&
				destination_country.id == "SEN"? 6 : 1 &&
				destination_country.id == "PSE"? 6 : 1 &&
				destination_country.id == "RWA"? 6 : 1 &&
				destination_country.id == "MLI"? 6 : 1 &&
				destination_country.id == "GHA"? 6 : 1 &&
				destination_country.id == "AFG"? 6 : 1 &&
				destination_country.id == "ZWE"? 6 : 1 &&
				destination_country.id == "BDG"? 6 : 1 &&
				
				destination_country.id == "MWI"? 8 : 1 &&
				destination_country.id == "COD"? 8 : 1 &&
				destination_country.id == "HTI"? 8 : 1 &&
				destination_country.id == "PAK"? 8 : 1 &&
				destination_country.id == "ZMB"? 8 : 1 &&
				destination_country.id == "MOZ"? 8 : 1 &&
				destination_country.id == "ETH"? 8 : 1 &&
				destination_country.id == "UGA"? 8 : 1 &&
				destination_country.id == "TZA"? 8 : 1 &&
				destination_country.id == "NGA"? 8 : 1 &&
				destination_country.id == "ZAF"? 8 : 1 &&
				destination_country.id == "KEN"? 8 : 1, 
*/				
    strokeColor: destination_country.id == "VUT"? '#009999' : '#DD1C77' &&
				destination_country.id == "PAN"? '#009999' : '#DD1C77' &&
				destination_country.id == "NER"? '#009999' : '#DD1C77' &&
				destination_country.id == "CHN"? '#009999' : '#DD1C77' &&
				destination_country.id == "BLZ"? '#009999' : '#DD1C77' &&
				destination_country.id == "PRY"? '#009999' : '#DD1C77' &&
				destination_country.id == "DJI"? '#009999' : '#DD1C77' &&
				destination_country.id == "GEO"? '#e05267' : '#DD1C77' &&
				destination_country.id == "ISR"? '#009999' : '#DD1C77' &&
				destination_country.id == "JAM"? '#009999' : '#DD1C77' &&
				destination_country.id == "TLS"? '#009999' : '#DD1C77' &&
				destination_country.id == "GNB"? '#009999' : '#DD1C77' &&
				destination_country.id == "CPV"? '#009999' : '#DD1C77' &&
				destination_country.id == "UZB"? '#009999' : '#DD1C77' &&
				destination_country.id == "ARM"? '#009999' : '#DD1C77' &&
				destination_country.id == "PER"? '#009999' : '#DD1C77' &&
				destination_country.id == "PNG"? '#009999' : '#DD1C77' &&
				destination_country.id == "HND"? '#009999' : '#DD1C77' &&
				destination_country.id == "TJK"? '#cc0000' : '#DD1C77' &&
				destination_country.id == "KGZ"? '#009999' : '#DD1C77' &&
				destination_country.id == "DOM"? '#009999' : '#DD1C77' &&
				destination_country.id == "NIC"? '#009999' : '#DD1C77' &&
				destination_country.id == "LAO"? '#009999' : '#DD1C77' &&
				destination_country.id == "BWA"? '#009999' : '#DD1C77' &&
				destination_country.id == "LBN"? '#f6a2c8' : '#DD1C77' &&
				destination_country.id == "MEX"? '#e05267' : '#DD1C77' &&
				
				destination_country.id == "MWI"? '#4C9900' : '#DD1C77' &&
				destination_country.id == "COD"? '#4C9900' : '#DD1C77' &&
				destination_country.id == "HTI"? '#4C9900' : '#DD1C77' &&
				destination_country.id == "PAK"? '#f6a2c8' : '#DD1C77' &&
				destination_country.id == "ZMB"? '#4C9900' : '#DD1C77' &&
				destination_country.id == "MOZ"? '#4C9900' : '#DD1C77' &&
				destination_country.id == "ETH"? '#4C9900' : '#DD1C77' &&
				destination_country.id == "UGA"? '#4C9900' : '#DD1C77' &&
				destination_country.id == "TZA"? '#4C9900' : '#DD1C77' &&
				destination_country.id == "NGA"? '#4C9900' : '#DD1C77' &&
				destination_country.id == "ZAF"? '#4C9900' : '#DD1C77' &&
				destination_country.id == "KEN"? '#e05267' : '#DD1C77' &&
				
				destination_country.id == "IDN"? '#660066' : '#DD1C77' &&
				destination_country.id == "IND"? '#660066' : '#DD1C77' &&
				destination_country.id == "LBR"? '#cc0000' : '#DD1C77' &&
				destination_country.id == "MDG"? '#660066' : '#DD1C77' &&
				destination_country.id == "SEN"? '#660066' : '#DD1C77' &&
				destination_country.id == "PSE"? '#660066' : '#DD1C77' &&
				destination_country.id == "RWA"? '#660066' : '#DD1C77' &&
				destination_country.id == "MLI"? '#660066' : '#DD1C77' &&
				destination_country.id == "GHA"? '#660066' : '#DD1C77' &&
				destination_country.id == "AFG"? '#660066' : '#DD1C77' &&
				destination_country.id == "ZWE"? '#f6a2c8' : '#DD1C77' &&
				destination_country.id == "BDG"? '#660066' : '#DD1C77' &&
				
				destination_country.id == "VNM"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "EGY"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "NAM"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "SLE"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "MMR"? '#e05267' : '#DD1C77' &&
				destination_country.id == "UKR"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "CMR"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "BDI"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "BEN"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "LSO"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "BFA"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "CIV"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "GIN"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "SWZ"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "GTM"? '#f6a2c8' : '#DD1C77' &&
				destination_country.id == "PHL"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "SSD"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "KHM"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "AGO"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "JOR"? '#FF8000' : '#DD1C77' &&
				destination_country.id == "NPL"? '#FF8000' : '#DD1C77',

				
	
	};
	 
	  
    link.given = destination_country.amount_given != undefined ? destination_country.amount_given : 100;
    data.push(link);
    data_dict[destination_country.id] = link;
  }

  map.arc(data);
}

//to draw bubbles and arcs on countryClicked
function countryClicked(geo) {
  drawBubbles(geo), loadCountry(geo.id);
}







