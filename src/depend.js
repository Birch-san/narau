requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'src/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: 'lib/jquery-2.1.0.min',
        preloadjs: 'lib/preloadjs-0.4.1.min'
    }
    shim: {
        'preloadjs': {
            exports: 'createjs.PreloadJS'
        }
    }
});

require(
['preloadjs', 'jquery', 'lib/trace', 'setup', 'core'],

function (pre, $, trace, setup, core) {
  // default namespace
  window.birchlabs = {};

  setup.main();
});
