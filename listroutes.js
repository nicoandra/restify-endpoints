"use strict"

  let registeredRoutes = {};

  let getPathFromRoute = function getPathFromRoute(route){
    if(route.spec && route.spec.url) {
      return route.spec.url;
    }

    if(route.spec && route.spec.path) {
      return route.spec.path;
    }
  }

  let addToFoundRoutes = function(path, method) {
    path = getPathFromRoute(path)

    if(!registeredRoutes[path]) {
      registeredRoutes[path] = []
    }
    registeredRoutes[path].push(method);
  }

module.exports = {

  routeDebugger : function(server){

    ["GET","PUT","POST","DELETE","HEAD"].forEach( (method) => {


      server.router.routes[method].forEach(
        function(value){
          addToFoundRoutes(value, method)
        });
    })
  },

  getRoutes : function(){
    return registeredRoutes
  }
}
