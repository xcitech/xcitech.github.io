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
      };var element = document.getElementById("7444afd8-34a3-4f04-9244-fa8bfd036400");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7444afd8-34a3-4f04-9244-fa8bfd036400' but no matching script tag was found. ")
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
                  var docs_json = {"026747bc-5b0b-4593-bf9d-fa7b923e972b":{"roots":{"references":[{"attributes":{"plot":{"id":"334a1b7d-799d-4d29-b43e-65536ed9d6ac","subtype":"Figure","type":"Plot"}},"id":"380dd04c-8a9e-4279-8216-ffc046381f90","type":"HelpTool"},{"attributes":{"plot":{"id":"334a1b7d-799d-4d29-b43e-65536ed9d6ac","subtype":"Figure","type":"Plot"}},"id":"ed81645c-e719-42a8-88ce-0d65c36fc7ad","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2b0fc97c-e21b-4db8-a0e0-5835a9562644","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"334a1b7d-799d-4d29-b43e-65536ed9d6ac","subtype":"Figure","type":"Plot"},"ticker":{"id":"17a8899c-5d11-41d1-9379-57cbd09918d1","type":"BasicTicker"}},"id":"05489b04-decc-4e8b-9658-bd548ed78974","type":"Grid"},{"attributes":{"callback":null},"id":"c32eca24-af54-4fd6-8f47-9ce3516e3f54","type":"DataRange1d"},{"attributes":{},"id":"17a8899c-5d11-41d1-9379-57cbd09918d1","type":"BasicTicker"},{"attributes":{"plot":{"id":"334a1b7d-799d-4d29-b43e-65536ed9d6ac","subtype":"Figure","type":"Plot"}},"id":"44e42b5e-db62-4835-9837-aaabcb43cee2","type":"ResetTool"},{"attributes":{"plot":{"id":"334a1b7d-799d-4d29-b43e-65536ed9d6ac","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f0ff6be-4591-4be4-aefa-941693a63a37","type":"BasicTicker"}},"id":"badafbe5-da43-47b3-8508-06fa30590d11","type":"Grid"},{"attributes":{"below":[{"id":"360917f0-01f2-41d4-a1e6-d653eda33a6a","type":"LinearAxis"}],"left":[{"id":"2f98d439-0721-49a0-9707-dbf7055c1540","type":"LinearAxis"}],"renderers":[{"id":"360917f0-01f2-41d4-a1e6-d653eda33a6a","type":"LinearAxis"},{"id":"badafbe5-da43-47b3-8508-06fa30590d11","type":"Grid"},{"id":"2f98d439-0721-49a0-9707-dbf7055c1540","type":"LinearAxis"},{"id":"05489b04-decc-4e8b-9658-bd548ed78974","type":"Grid"},{"id":"2b0fc97c-e21b-4db8-a0e0-5835a9562644","type":"BoxAnnotation"},{"id":"d4bbfbec-beca-4774-bd48-9fbfa3bdd8a2","type":"GlyphRenderer"}],"title":{"id":"392f49d6-2849-45b3-b90c-284b52cca3c7","type":"Title"},"tool_events":{"id":"4e444171-d064-422e-8ce6-2bedd9c8c3de","type":"ToolEvents"},"toolbar":{"id":"1e4d55f6-6cf6-4dfb-8348-db16a28874a9","type":"Toolbar"},"x_range":{"id":"03a9ead3-1d37-4539-8897-ac5615288ac8","type":"DataRange1d"},"y_range":{"id":"c32eca24-af54-4fd6-8f47-9ce3516e3f54","type":"DataRange1d"}},"id":"334a1b7d-799d-4d29-b43e-65536ed9d6ac","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"03a9ead3-1d37-4539-8897-ac5615288ac8","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"359171b8-93df-432d-bf45-b5581f022a9e","type":"PanTool"},{"id":"8156698a-522e-4166-8c86-8d24d53d0d02","type":"WheelZoomTool"},{"id":"060d7900-fb5a-4b25-b2e3-72693db3e01c","type":"BoxZoomTool"},{"id":"ed81645c-e719-42a8-88ce-0d65c36fc7ad","type":"SaveTool"},{"id":"44e42b5e-db62-4835-9837-aaabcb43cee2","type":"ResetTool"},{"id":"380dd04c-8a9e-4279-8216-ffc046381f90","type":"HelpTool"}]},"id":"1e4d55f6-6cf6-4dfb-8348-db16a28874a9","type":"Toolbar"},{"attributes":{"plot":null,"text":null},"id":"392f49d6-2849-45b3-b90c-284b52cca3c7","type":"Title"},{"attributes":{},"id":"4e444171-d064-422e-8ce6-2bedd9c8c3de","type":"ToolEvents"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"98b1b391-7b16-403c-97c7-bd410af03039","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"b74c9001-6ac6-4dbc-a9df-5861c5a036f9","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"b39dccc0-f84b-4e82-9430-3121f246be63","type":"BasicTickFormatter"},"plot":{"id":"334a1b7d-799d-4d29-b43e-65536ed9d6ac","subtype":"Figure","type":"Plot"},"ticker":{"id":"17a8899c-5d11-41d1-9379-57cbd09918d1","type":"BasicTicker"}},"id":"2f98d439-0721-49a0-9707-dbf7055c1540","type":"LinearAxis"},{"attributes":{},"id":"9823ca62-c905-45e9-89a9-016f75a9ad83","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"334a1b7d-799d-4d29-b43e-65536ed9d6ac","subtype":"Figure","type":"Plot"}},"id":"359171b8-93df-432d-bf45-b5581f022a9e","type":"PanTool"},{"attributes":{"overlay":{"id":"2b0fc97c-e21b-4db8-a0e0-5835a9562644","type":"BoxAnnotation"},"plot":{"id":"334a1b7d-799d-4d29-b43e-65536ed9d6ac","subtype":"Figure","type":"Plot"}},"id":"060d7900-fb5a-4b25-b2e3-72693db3e01c","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"b74c9001-6ac6-4dbc-a9df-5861c5a036f9","type":"ColumnDataSource"},"glyph":{"id":"98b1b391-7b16-403c-97c7-bd410af03039","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"a11bef1c-f10d-4515-b807-7ff467b4a524","type":"Line"},"selection_glyph":null},"id":"d4bbfbec-beca-4774-bd48-9fbfa3bdd8a2","type":"GlyphRenderer"},{"attributes":{},"id":"3f0ff6be-4591-4be4-aefa-941693a63a37","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a11bef1c-f10d-4515-b807-7ff467b4a524","type":"Line"},{"attributes":{"formatter":{"id":"9823ca62-c905-45e9-89a9-016f75a9ad83","type":"BasicTickFormatter"},"plot":{"id":"334a1b7d-799d-4d29-b43e-65536ed9d6ac","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f0ff6be-4591-4be4-aefa-941693a63a37","type":"BasicTicker"}},"id":"360917f0-01f2-41d4-a1e6-d653eda33a6a","type":"LinearAxis"},{"attributes":{"plot":{"id":"334a1b7d-799d-4d29-b43e-65536ed9d6ac","subtype":"Figure","type":"Plot"}},"id":"8156698a-522e-4166-8c86-8d24d53d0d02","type":"WheelZoomTool"},{"attributes":{},"id":"b39dccc0-f84b-4e82-9430-3121f246be63","type":"BasicTickFormatter"}],"root_ids":["334a1b7d-799d-4d29-b43e-65536ed9d6ac"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"026747bc-5b0b-4593-bf9d-fa7b923e972b","elementid":"7444afd8-34a3-4f04-9244-fa8bfd036400","modelid":"334a1b7d-799d-4d29-b43e-65536ed9d6ac"}];
                  
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