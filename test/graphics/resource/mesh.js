/*jshint white: false, strict: false, plusplus: false, onevar: false,
  nomen: false */
/*global gladius: false, document: false, window: false, module: false, start,
  test: false, expect: false, ok: false, notEqual: false, stop, QUnit: false,
  asyncTest: false */

(function() {

    var engine = null;

    module( 'graphics/resource/Mesh', {
        setup: function () {
            stop();

            var canvas = document.getElementById( "test-canvas"); 
            gladius.create({
                  debug: true,
                  services: {
                      graphics: {
                          src: 'graphics/service',
                          options: {
                              canvas: canvas
                          }
                      }
                  }
              }, function( instance ) {       
                  engine = instance;
                  start();
            });

        },

        teardown: function () {
            engine = null;
        }
    });
  
    asyncTest( 'Simple Cube', function () {
        expect( 2 );

        var point = 0.5;
        var mesh = new engine.graphics.resource.Mesh({
           
            points:   [
                [ point, -point,  point],
                [ point,  point,  point],
                [-point,  point,  point],
                [-point, -point,  point],
                [ point, -point, -point],
                [ point,  point, -point],
                [-point,  point, -point],
                [-point, -point, -point]
                      ],
            faces:    [
                [0, 1, 2, 3],
                [7, 6, 5, 4],
                [4, 5, 1, 0],
                [5, 6, 2, 1],
                [6, 7, 3, 2],
                [7, 4, 0, 3]
                      ],
            uv:       [
                [ [0, 1], [1, 1], [1, 0], [0, 0] ],
                [ [0, 1], [1, 1], [1, 0], [0, 0] ],
                [ [0, 1], [1, 1], [1, 0], [0, 0] ],
                [ [0, 1], [1, 1], [1, 0], [0, 0] ],
                [ [0, 1], [1, 1], [1, 0], [0, 0] ],
                [ [0, 1], [1, 1], [1, 0], [0, 0] ]
                      ],
            uvmapper: {
                projectionMode: "cubic",
                scale: [1, 1, 1]
                      }
        });

        ok(mesh instanceof engine.graphics.resource.Mesh, 
           "mesh constructed and correctly typed");
           
        mesh.prepare();
        ok( true, "mesh.prepare called without arguments doesn't throw" );
        // TD: check that it actually does the right thing
        
        // TD: check that passing in options.material actually sets the face 
        // material
        
        // TD: test that the cube actually renders
        start();
    });

}());
