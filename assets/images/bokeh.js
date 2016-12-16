document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("66e1d8a0-543c-4640-909a-55a873ffa6eb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '66e1d8a0-543c-4640-909a-55a873ffa6eb' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"f891df6b-e8aa-4d6f-ac52-8375de7eca1c":{"roots":{"references":[{"attributes":{},"id":"cac14f29-13a4-449d-a889-3cc5764da369","type":"BasicTicker"},{"attributes":{"callback":null},"id":"5f1c3cc2-63b9-4f8c-8b70-a1dcc7a985d2","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"88819d83-3fdc-421a-8ea7-07edb98f3326","type":"Line"},{"attributes":{},"id":"773fd1f8-2376-4bdd-bad5-e9f7985f3cb2","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"254a26fa-d1e5-4e39-bdc7-6e9e2f64f722","type":"ColumnDataSource"},"glyph":{"id":"88819d83-3fdc-421a-8ea7-07edb98f3326","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"1b7fc2f9-b630-40fb-abef-4d21f2b7f679","type":"Line"},"selection_glyph":null},"id":"555b45b3-b15e-4107-aee4-ae35b760db28","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"254a26fa-d1e5-4e39-bdc7-6e9e2f64f722","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"f81a7af9-eb31-462d-894e-550df8714b2d","type":"DataRange1d"},{"attributes":{"plot":{"id":"4af69c45-6311-413d-b986-15cba442461a","subtype":"Figure","type":"Plot"}},"id":"7b08b3e9-db40-4ad3-a2a9-68fbab9e1ccd","type":"HelpTool"},{"attributes":{},"id":"78722996-c954-4a4a-8dcd-3babed2198c0","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"4f0f04f2-045d-4f90-a905-7b1a955cd5f2","type":"BoxAnnotation"},"plot":{"id":"4af69c45-6311-413d-b986-15cba442461a","subtype":"Figure","type":"Plot"}},"id":"d916686f-2b6e-47f5-a0d8-ab8c3d1cf681","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"4af69c45-6311-413d-b986-15cba442461a","subtype":"Figure","type":"Plot"}},"id":"a644da4d-4b8c-41a9-abdd-10640b6c60b7","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4f0f04f2-045d-4f90-a905-7b1a955cd5f2","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"4af69c45-6311-413d-b986-15cba442461a","subtype":"Figure","type":"Plot"}},"id":"daa61415-3336-4c2b-b374-30499f38ca8f","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b7fc2f9-b630-40fb-abef-4d21f2b7f679","type":"Line"},{"attributes":{"plot":{"id":"4af69c45-6311-413d-b986-15cba442461a","subtype":"Figure","type":"Plot"}},"id":"51fa1711-a0da-474b-9347-0772dde3be09","type":"ResetTool"},{"attributes":{"plot":{"id":"4af69c45-6311-413d-b986-15cba442461a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4556eb5a-4994-4fee-aa86-6979abcd8506","type":"BasicTicker"}},"id":"3c6e64d3-efc7-4376-9399-d9109182e873","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"4af69c45-6311-413d-b986-15cba442461a","subtype":"Figure","type":"Plot"},"ticker":{"id":"cac14f29-13a4-449d-a889-3cc5764da369","type":"BasicTicker"}},"id":"dd3aed9a-0353-485c-93ca-3ddeb07347d4","type":"Grid"},{"attributes":{},"id":"2d2f14a2-575e-45f3-a13c-5433c2dcc1f3","type":"ToolEvents"},{"attributes":{"plot":{"id":"4af69c45-6311-413d-b986-15cba442461a","subtype":"Figure","type":"Plot"}},"id":"f56b6031-4dcf-4cb5-a59d-e0d2fb5fdac7","type":"SaveTool"},{"attributes":{"formatter":{"id":"773fd1f8-2376-4bdd-bad5-e9f7985f3cb2","type":"BasicTickFormatter"},"plot":{"id":"4af69c45-6311-413d-b986-15cba442461a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4556eb5a-4994-4fee-aa86-6979abcd8506","type":"BasicTicker"}},"id":"30d7f47f-f682-4a9e-8ed3-4c7fc7b5c8b1","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a644da4d-4b8c-41a9-abdd-10640b6c60b7","type":"PanTool"},{"id":"daa61415-3336-4c2b-b374-30499f38ca8f","type":"WheelZoomTool"},{"id":"d916686f-2b6e-47f5-a0d8-ab8c3d1cf681","type":"BoxZoomTool"},{"id":"f56b6031-4dcf-4cb5-a59d-e0d2fb5fdac7","type":"SaveTool"},{"id":"51fa1711-a0da-474b-9347-0772dde3be09","type":"ResetTool"},{"id":"7b08b3e9-db40-4ad3-a2a9-68fbab9e1ccd","type":"HelpTool"}]},"id":"fc5ab590-f7b8-4071-95d0-fbc94e3bb985","type":"Toolbar"},{"attributes":{},"id":"4556eb5a-4994-4fee-aa86-6979abcd8506","type":"BasicTicker"},{"attributes":{"formatter":{"id":"78722996-c954-4a4a-8dcd-3babed2198c0","type":"BasicTickFormatter"},"plot":{"id":"4af69c45-6311-413d-b986-15cba442461a","subtype":"Figure","type":"Plot"},"ticker":{"id":"cac14f29-13a4-449d-a889-3cc5764da369","type":"BasicTicker"}},"id":"8f8939c4-c24a-4332-baf2-3f6e1b23e65d","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"8babfaa2-53a2-41fe-bca3-dac3750d2bff","type":"Title"},{"attributes":{"below":[{"id":"30d7f47f-f682-4a9e-8ed3-4c7fc7b5c8b1","type":"LinearAxis"}],"left":[{"id":"8f8939c4-c24a-4332-baf2-3f6e1b23e65d","type":"LinearAxis"}],"renderers":[{"id":"30d7f47f-f682-4a9e-8ed3-4c7fc7b5c8b1","type":"LinearAxis"},{"id":"3c6e64d3-efc7-4376-9399-d9109182e873","type":"Grid"},{"id":"8f8939c4-c24a-4332-baf2-3f6e1b23e65d","type":"LinearAxis"},{"id":"dd3aed9a-0353-485c-93ca-3ddeb07347d4","type":"Grid"},{"id":"4f0f04f2-045d-4f90-a905-7b1a955cd5f2","type":"BoxAnnotation"},{"id":"555b45b3-b15e-4107-aee4-ae35b760db28","type":"GlyphRenderer"}],"title":{"id":"8babfaa2-53a2-41fe-bca3-dac3750d2bff","type":"Title"},"tool_events":{"id":"2d2f14a2-575e-45f3-a13c-5433c2dcc1f3","type":"ToolEvents"},"toolbar":{"id":"fc5ab590-f7b8-4071-95d0-fbc94e3bb985","type":"Toolbar"},"x_range":{"id":"5f1c3cc2-63b9-4f8c-8b70-a1dcc7a985d2","type":"DataRange1d"},"y_range":{"id":"f81a7af9-eb31-462d-894e-550df8714b2d","type":"DataRange1d"}},"id":"4af69c45-6311-413d-b986-15cba442461a","subtype":"Figure","type":"Plot"}],"root_ids":["4af69c45-6311-413d-b986-15cba442461a"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"f891df6b-e8aa-4d6f-ac52-8375de7eca1c","elementid":"66e1d8a0-543c-4640-909a-55a873ffa6eb","modelid":"4af69c45-6311-413d-b986-15cba442461a"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});