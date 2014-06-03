requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'src/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        trace: 'lib/trace',
        jquery: 'lib/jquery-2.1.0.min',
        preloadjs: 'lib/preloadjs-0.4.1.min',
        easel: 'lib/easeljs-0.7.1.min'
    },
    shim: {
        preloadjs: {
            exports: 'createjs.PreloadJS'
        },
        easel: {
            exports: 'createjs'
        }
    },
    // Add this map config in addition to any baseUrl or
    // paths config you may already have in the project.
    map: {
        // '*' means all modules will get 'jquery-private'
        // for their 'jquery' dependency.
        '*': { 'jquery': 'jquery-private' },

        // 'jquery-private' wants the real jQuery module
        // though. If this line was not here, there would
        // be an unresolvable cyclic dependency.
        'jquery-private': { 'jquery': 'jquery' }
    }
});

require(
['preloadjs', 'easel', 'jquery', 'trace', 'setup', 'core', 'AssetBox'],

function (pre, easel, $, t, setup, core, assetBox) {
  // default namespace
  window.birchlabs = {};

  //t.supertrace(window.birchlabs);

  setup.main();
});
