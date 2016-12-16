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
      };var element = document.getElementById("e4d4e8e6-60f9-4b35-b33d-b551b4366464");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e4d4e8e6-60f9-4b35-b33d-b551b4366464' but no matching script tag was found. ")
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
                  var docs_json = {"b5059c03-700c-4628-a533-8bb5822bb616":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b88ee4fc-6bca-484f-a037-0748a70aee28","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"bd95c52b-022f-494d-b09f-7e4f4d7eabf0","subtype":"Figure","type":"Plot"}},"id":"4b0d0f57-ddb9-4711-bb0a-a881dde58010","type":"ResetTool"},{"attributes":{"plot":{"id":"bd95c52b-022f-494d-b09f-7e4f4d7eabf0","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d96ab6c-2606-498c-a2d2-9a3b14ff3e2b","type":"BasicTicker"}},"id":"4fda93ff-4032-4687-9135-d346b1249ea5","type":"Grid"},{"attributes":{"plot":{"id":"bd95c52b-022f-494d-b09f-7e4f4d7eabf0","subtype":"Figure","type":"Plot"}},"id":"3cd36169-9c5b-4a28-bdde-4e18c20c8688","type":"SaveTool"},{"attributes":{"data_source":{"id":"4601b923-9230-4ac4-a3f0-6a08e94e87b2","type":"ColumnDataSource"},"glyph":{"id":"ea4c971b-58ef-4744-9b00-1e06892ed76c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"5f49d43e-96be-4c8e-9243-39d20541298b","type":"Circle"},"selection_glyph":null},"id":"0bcf64e4-3d84-4b28-8a33-ee2eeefee9ca","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"fa8962d0-5f1c-44f0-9eaa-e3b055ac62ad","type":"LinearAxis"}],"left":[{"id":"755ae849-95c3-465a-80b3-dcb117236214","type":"LinearAxis"}],"renderers":[{"id":"fa8962d0-5f1c-44f0-9eaa-e3b055ac62ad","type":"LinearAxis"},{"id":"4fda93ff-4032-4687-9135-d346b1249ea5","type":"Grid"},{"id":"755ae849-95c3-465a-80b3-dcb117236214","type":"LinearAxis"},{"id":"95689e87-07f2-4aee-bf22-4c8e73613d06","type":"Grid"},{"id":"b88ee4fc-6bca-484f-a037-0748a70aee28","type":"BoxAnnotation"},{"id":"0bcf64e4-3d84-4b28-8a33-ee2eeefee9ca","type":"GlyphRenderer"}],"title":{"id":"bb832488-0be7-4385-a330-891d57cf6676","type":"Title"},"tool_events":{"id":"0f08ab6e-fe87-4c5d-a35f-bada8e6a5423","type":"ToolEvents"},"toolbar":{"id":"39bed38b-2335-4ea8-86f1-b11ae5345743","type":"Toolbar"},"x_range":{"id":"385f024b-d328-44e1-aa3b-9f93567588a4","type":"DataRange1d"},"y_range":{"id":"b2280947-7c5d-4813-ad99-6ee2e79f0807","type":"DataRange1d"}},"id":"bd95c52b-022f-494d-b09f-7e4f4d7eabf0","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"debce6d0-82c1-4eaa-aa16-a2317715f4a8","type":"BasicTickFormatter"},"plot":{"id":"bd95c52b-022f-494d-b09f-7e4f4d7eabf0","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea873286-5c46-4dc0-82ed-94d4faf4f979","type":"BasicTicker"}},"id":"755ae849-95c3-465a-80b3-dcb117236214","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"4601b923-9230-4ac4-a3f0-6a08e94e87b2","type":"ColumnDataSource"},{"attributes":{},"id":"5d96ab6c-2606-498c-a2d2-9a3b14ff3e2b","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"01d3500f-c728-4a92-a965-7e00b0746046","type":"PanTool"},{"id":"03a84985-1ce3-4006-b0d1-041b446494a6","type":"WheelZoomTool"},{"id":"caabab2e-f6e9-4baa-9135-8cd517c8b8cb","type":"BoxZoomTool"},{"id":"3cd36169-9c5b-4a28-bdde-4e18c20c8688","type":"SaveTool"},{"id":"4b0d0f57-ddb9-4711-bb0a-a881dde58010","type":"ResetTool"},{"id":"4dad399e-6a12-4488-98d3-4d7759a4c377","type":"HelpTool"}]},"id":"39bed38b-2335-4ea8-86f1-b11ae5345743","type":"Toolbar"},{"attributes":{},"id":"debce6d0-82c1-4eaa-aa16-a2317715f4a8","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea4c971b-58ef-4744-9b00-1e06892ed76c","type":"Circle"},{"attributes":{"plot":null,"text":null},"id":"bb832488-0be7-4385-a330-891d57cf6676","type":"Title"},{"attributes":{"callback":null},"id":"385f024b-d328-44e1-aa3b-9f93567588a4","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f49d43e-96be-4c8e-9243-39d20541298b","type":"Circle"},{"attributes":{},"id":"ea873286-5c46-4dc0-82ed-94d4faf4f979","type":"BasicTicker"},{"attributes":{"overlay":{"id":"b88ee4fc-6bca-484f-a037-0748a70aee28","type":"BoxAnnotation"},"plot":{"id":"bd95c52b-022f-494d-b09f-7e4f4d7eabf0","subtype":"Figure","type":"Plot"}},"id":"caabab2e-f6e9-4baa-9135-8cd517c8b8cb","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"ad1b1adb-6818-4aeb-b13e-7196b9435a54","type":"BasicTickFormatter"},"plot":{"id":"bd95c52b-022f-494d-b09f-7e4f4d7eabf0","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d96ab6c-2606-498c-a2d2-9a3b14ff3e2b","type":"BasicTicker"}},"id":"fa8962d0-5f1c-44f0-9eaa-e3b055ac62ad","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"bd95c52b-022f-494d-b09f-7e4f4d7eabf0","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea873286-5c46-4dc0-82ed-94d4faf4f979","type":"BasicTicker"}},"id":"95689e87-07f2-4aee-bf22-4c8e73613d06","type":"Grid"},{"attributes":{},"id":"0f08ab6e-fe87-4c5d-a35f-bada8e6a5423","type":"ToolEvents"},{"attributes":{"plot":{"id":"bd95c52b-022f-494d-b09f-7e4f4d7eabf0","subtype":"Figure","type":"Plot"}},"id":"01d3500f-c728-4a92-a965-7e00b0746046","type":"PanTool"},{"attributes":{"plot":{"id":"bd95c52b-022f-494d-b09f-7e4f4d7eabf0","subtype":"Figure","type":"Plot"}},"id":"4dad399e-6a12-4488-98d3-4d7759a4c377","type":"HelpTool"},{"attributes":{"plot":{"id":"bd95c52b-022f-494d-b09f-7e4f4d7eabf0","subtype":"Figure","type":"Plot"}},"id":"03a84985-1ce3-4006-b0d1-041b446494a6","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"b2280947-7c5d-4813-ad99-6ee2e79f0807","type":"DataRange1d"},{"attributes":{},"id":"ad1b1adb-6818-4aeb-b13e-7196b9435a54","type":"BasicTickFormatter"}],"root_ids":["bd95c52b-022f-494d-b09f-7e4f4d7eabf0"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"b5059c03-700c-4628-a533-8bb5822bb616","elementid":"e4d4e8e6-60f9-4b35-b33d-b551b4366464","modelid":"bd95c52b-022f-494d-b09f-7e4f4d7eabf0"}];
                  
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