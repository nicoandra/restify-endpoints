
const Table = require('cli-table')
let routeDebugger = require("./listroutes.js")


module.exports = {

    loadFromServer : function(server){
      routeDebugger(server)
    },


    listRoutes : function(server){
      routeDebugger.routeDebugger(server)

      let table = new Table({
        head: ['URL', 'Methods']
        , colWidths: [60, 25]
        , style : {compact : true, 'padding-left' : 1}
      });

      let routes = routeDebugger.getRoutes()
      for(let route in routes) {
        table.push([route, routes[route]])
      }

      console.log(table.toString());


    }
}
