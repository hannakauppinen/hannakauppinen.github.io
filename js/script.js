(function ($) {
  var d3 = require('d3');
  var topojson = require('topojson');
  var Datamap = require('datamaps');
  var app = {
    initMap: function () {
      app.map = new Datamap({
        element: $('.map')[0],
        responsive: true,
        geographyConfig: {
          popupOnHover: true,
          highlightOnHover: false
        },
        projection: 'mercator',
        fills: {
          authorHasTraveledTo: 'rgba(114, 159, 152, 1.0)',
          defaultFill: 'rgba(188, 213, 209, 1.0)'
        },
        data: { // http://www.worldatlas.com/aatlas/ctycodes.htm
          FIN: { fillKey: "authorHasTraveledTo" },
          SWE: { fillKey: "authorHasTraveledTo" },
          NOR: { fillKey: "authorHasTraveledTo" },
          EST: { fillKey: "authorHasTraveledTo" },
          LVA: { fillKey: "authorHasTraveledTo" },
          LTU: { fillKey: "authorHasTraveledTo" },
          RUS: { fillKey: "authorHasTraveledTo" },
          UKR: { fillKey: "authorHasTraveledTo" },
          MDA: { fillKey: "authorHasTraveledTo" },
          SVN: { fillKey: "authorHasTraveledTo" },
          HRV: { fillKey: "authorHasTraveledTo" },
          POL: { fillKey: "authorHasTraveledTo" },
          CZE: { fillKey: "authorHasTraveledTo" },
          AUT: { fillKey: "authorHasTraveledTo" },
          CHE: { fillKey: "authorHasTraveledTo" },
          ESP: { fillKey: "authorHasTraveledTo" },
          DEU: { fillKey: "authorHasTraveledTo" },
          GBR: { fillKey: "authorHasTraveledTo" },
          GRC: { fillKey: "authorHasTraveledTo" },
          ITA: { fillKey: "authorHasTraveledTo" },
          FRA: { fillKey: "authorHasTraveledTo" },
          MCO: { fillKey: "authorHasTraveledTo" },
          DNK: { fillKey: "authorHasTraveledTo" },
          NLD: { fillKey: "authorHasTraveledTo" },
          IND: { fillKey: "authorHasTraveledTo" },
          NPL: { fillKey: "authorHasTraveledTo" },
          ARE: { fillKey: "authorHasTraveledTo" },
          OMN: { fillKey: "authorHasTraveledTo" },
          QAT: { fillKey: "authorHasTraveledTo" },
          ISR: { fillKey: "authorHasTraveledTo" },
          JOR: { fillKey: "authorHasTraveledTo" },
          BEL: { fillKey: "authorHasTraveledTo" }
        }
      });
    },
    initEvents: function () {
      window.addEventListener('resize', function(event) {
        app.map.resize();
      });
    },
    init: function () {
      app.initMap();
      app.initEvents();
    }
  };
  $(document).ready(function () {
    app.init();
  });
})(jQuery);