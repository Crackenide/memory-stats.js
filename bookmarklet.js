(function() {
  var script = document.createElement('script');
  script.onload = function() {

    var stats = new MemoryStats();

    var elem = stats.domElement;
    elem.style.position = 'fixed';
    elem.style.right    = '200px';
    elem.style.bottom   = '1000px';
    elem.style.zIndex   = 100000;

    document.body.appendChild( stats.domElement );

    requestAnimationFrame(function rAFloop(){
      stats.update();
      requestAnimationFrame(rAFloop);
    });
  };
  
  script.src = "https://raw.githack.com/Crackenide/memory-stats.js/refs/heads/master/memory-stats.js";
  document.head.appendChild(script);
})();
