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
      };var element = document.getElementById("00d28750-d880-4286-8ed8-5d15a1546610");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '00d28750-d880-4286-8ed8-5d15a1546610' but no matching script tag was found. ")
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
                  var docs_json = {"807bd3be-e5b1-4327-9554-7426c45fd3f9":{"roots":{"references":[{"attributes":{"overlay":{"id":"1d419b5c-2e97-45e3-b42c-3bc49534bf58","type":"BoxAnnotation"},"plot":{"id":"2ac42d72-501b-402e-8d7e-edb2df116cea","subtype":"Figure","type":"Plot"}},"id":"6538a0d9-d888-4919-bf91-310b91039a23","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"2ac42d72-501b-402e-8d7e-edb2df116cea","subtype":"Figure","type":"Plot"}},"id":"71b6115d-8354-4e5c-9a47-5adff6a1b9d7","type":"PanTool"},{"attributes":{},"id":"7e722ae2-e3b5-43e1-b4dc-ab727b655265","type":"CategoricalTickFormatter"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"71b6115d-8354-4e5c-9a47-5adff6a1b9d7","type":"PanTool"},{"id":"7f38a366-af38-4e3d-817e-91af85b39d26","type":"WheelZoomTool"},{"id":"6538a0d9-d888-4919-bf91-310b91039a23","type":"BoxZoomTool"},{"id":"6357c2bb-fbab-4bdd-90f9-037bc81ab6bc","type":"SaveTool"},{"id":"f63cfb40-16ef-4df1-b3fa-776507af9ac0","type":"ResetTool"},{"id":"44365be8-0ef1-4e76-ad85-51515dbab538","type":"HelpTool"}]},"id":"8663b5cd-64ca-4ab0-bcd6-fb120f147a65","type":"ToolbarBox"},{"attributes":{"children":[{"id":"325b5a00-9265-452e-837f-7640536881a8","type":"Column"},{"id":"5cc557d2-8372-4ab7-ba05-b3aa5b277bcc","type":"Column"}]},"id":"4efef27e-5a4d-4723-86c3-4e08646172a3","type":"Row"},{"attributes":{"children":[{"id":"efcb6779-45d4-473c-9732-0f3debf80449","type":"Select"}]},"id":"42ca9e17-7cdb-40c2-9a18-888ebc8aac86","type":"WidgetBox"},{"attributes":{"dimension":1,"plot":{"id":"2ac42d72-501b-402e-8d7e-edb2df116cea","subtype":"Figure","type":"Plot"},"ticker":{"id":"27e7f9ed-cc22-4d05-a857-e4991fb15787","type":"BasicTicker"}},"id":"f2ecfd5a-52f2-42be-bdc0-de76368568a7","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"71b6115d-8354-4e5c-9a47-5adff6a1b9d7","type":"PanTool"},{"id":"7f38a366-af38-4e3d-817e-91af85b39d26","type":"WheelZoomTool"},{"id":"6538a0d9-d888-4919-bf91-310b91039a23","type":"BoxZoomTool"},{"id":"6357c2bb-fbab-4bdd-90f9-037bc81ab6bc","type":"SaveTool"},{"id":"f63cfb40-16ef-4df1-b3fa-776507af9ac0","type":"ResetTool"},{"id":"44365be8-0ef1-4e76-ad85-51515dbab538","type":"HelpTool"}]},"id":"5834dee1-f402-42e5-a566-673450a7751c","type":"Toolbar"},{"attributes":{},"id":"a1bb8b36-5278-4b1b-817f-e5792d81aa95","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2ac42d72-501b-402e-8d7e-edb2df116cea","subtype":"Figure","type":"Plot"}},"id":"f63cfb40-16ef-4df1-b3fa-776507af9ac0","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.8},"x":{"field":"x"},"y":{"field":"y"}},"id":"5cb29ea8-98f3-4e65-b3a1-e9070d8060dc","type":"Rect"},{"attributes":{"children":[{"id":"2ac42d72-501b-402e-8d7e-edb2df116cea","subtype":"Figure","type":"Plot"}]},"id":"c09c6192-bcdb-4ca4-9920-86d18184ab89","type":"Row"},{"attributes":{"callback":null,"column_names":["height","x","height2","y","height0","height4","height3","height1"],"data":{"height":[33,15,39,24,39,33,29,36,23,35],"height0":[18,11,37,14,35,33,22,25,22,28],"height1":[33,15,39,24,39,33,29,36,23,35],"height2":[21,13,20,14,24,25,26,24,15,15],"height3":[23,14,23,16,27,27,23,26,17,18],"height4":[28,16,32,18,30,30,25,30,20,25],"x":["American Airlines Inc.","Alaska Airlines Inc.","JetBlue Airways","Delta Air Lines Inc.","ExpressJet Airlines Inc.","Envoy Air","SkyWest Airlines Inc.","United Air Lines Inc.","US Airways Inc.","Southwest Airlines Co."],"y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]}},"id":"40a69b38-ff88-42e3-802e-4214a2c16fcb","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"42ca9e17-7cdb-40c2-9a18-888ebc8aac86","type":"WidgetBox"}]},"id":"325b5a00-9265-452e-837f-7640536881a8","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1d419b5c-2e97-45e3-b42c-3bc49534bf58","type":"BoxAnnotation"},{"attributes":{"background_fill_color":{"value":"#e3e0db"},"below":[{"id":"b6bc3edd-41a1-4a02-be22-0ee7d3090a5d","type":"CategoricalAxis"}],"left":[{"id":"af772ed4-8fbe-4ebb-a6b4-d729aeef0a78","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"b6bc3edd-41a1-4a02-be22-0ee7d3090a5d","type":"CategoricalAxis"},{"id":"411844a5-be97-4b9b-a7bf-210d1eff784d","type":"Grid"},{"id":"af772ed4-8fbe-4ebb-a6b4-d729aeef0a78","type":"LinearAxis"},{"id":"f2ecfd5a-52f2-42be-bdc0-de76368568a7","type":"Grid"},{"id":"1d419b5c-2e97-45e3-b42c-3bc49534bf58","type":"BoxAnnotation"},{"id":"31651c85-6763-4159-8279-308d73eac57d","type":"GlyphRenderer"}],"title":{"id":"d2d79d7c-d0b3-4252-8a68-558b9f609e21","type":"Title"},"tool_events":{"id":"94c2b62d-1ee7-447f-a46f-a2348a821025","type":"ToolEvents"},"toolbar":{"id":"5834dee1-f402-42e5-a566-673450a7751c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1852782f-11dd-4f60-bdc8-f70789e9b866","type":"FactorRange"},"y_range":{"id":"c2a49e40-3b25-485a-a27f-7b6b136e173d","type":"Range1d"}},"id":"2ac42d72-501b-402e-8d7e-edb2df116cea","subtype":"Figure","type":"Plot"},{"attributes":{"callback":{"id":"f9a7c457-8578-4c3b-8cf6-eb4ca84d9de2","type":"CustomJS"},"options":["0","1","2","3","4"],"title":"Hour:","value":"4"},"id":"efcb6779-45d4-473c-9732-0f3debf80449","type":"Select"},{"attributes":{"children":[{"id":"8663b5cd-64ca-4ab0-bcd6-fb120f147a65","type":"ToolbarBox"},{"id":"a84a0a42-c1a0-4b70-9dd4-3cd3a5f5ec83","type":"Column"}]},"id":"5cc557d2-8372-4ab7-ba05-b3aa5b277bcc","type":"Column"},{"attributes":{"args":{"source":{"id":"40a69b38-ff88-42e3-802e-4214a2c16fcb","type":"ColumnDataSource"}},"code":"\n        var f = cb_obj.get('value');\n        var data1 = source.get('data');\n        \n        if (f == '0') {\n            data1['height'] = data1['height0'];\n            source.trigger('change');\n            }  \n        if (f == '1') {\n            data1['height'] = data1['height1'];\n            source.trigger('change');\n            }\n        if (f == '2') {\n            data1['height'] = data1['height2'];\n            source.trigger('change');\n            }  \n        if (f == '3') {\n            data1['height'] = data1['height3'];\n            source.trigger('change');\n            }\n        if (f == '4') {\n            data1['height'] = data1['height4'];\n            source.trigger('change');\n            }  \n    "},"id":"f9a7c457-8578-4c3b-8cf6-eb4ca84d9de2","type":"CustomJS"},{"attributes":{"plot":{"id":"2ac42d72-501b-402e-8d7e-edb2df116cea","subtype":"Figure","type":"Plot"},"ticker":{"id":"880e0fcb-1ffb-4273-8cf5-88d3df7518d6","type":"CategoricalTicker"}},"id":"411844a5-be97-4b9b-a7bf-210d1eff784d","type":"Grid"},{"attributes":{"callback":null,"factors":["American Airlines Inc.","Alaska Airlines Inc.","JetBlue Airways","Delta Air Lines Inc.","ExpressJet Airlines Inc.","Envoy Air","SkyWest Airlines Inc.","United Air Lines Inc.","US Airways Inc.","Southwest Airlines Co."]},"id":"1852782f-11dd-4f60-bdc8-f70789e9b866","type":"FactorRange"},{"attributes":{"plot":{"id":"2ac42d72-501b-402e-8d7e-edb2df116cea","subtype":"Figure","type":"Plot"}},"id":"44365be8-0ef1-4e76-ad85-51515dbab538","type":"HelpTool"},{"attributes":{"plot":{"id":"2ac42d72-501b-402e-8d7e-edb2df116cea","subtype":"Figure","type":"Plot"}},"id":"6357c2bb-fbab-4bdd-90f9-037bc81ab6bc","type":"SaveTool"},{"attributes":{"children":[{"id":"c09c6192-bcdb-4ca4-9920-86d18184ab89","type":"Row"}]},"id":"a84a0a42-c1a0-4b70-9dd4-3cd3a5f5ec83","type":"Column"},{"attributes":{"plot":{"id":"2ac42d72-501b-402e-8d7e-edb2df116cea","subtype":"Figure","type":"Plot"}},"id":"7f38a366-af38-4e3d-817e-91af85b39d26","type":"WheelZoomTool"},{"attributes":{},"id":"27e7f9ed-cc22-4d05-a857-e4991fb15787","type":"BasicTicker"},{"attributes":{"callback":null,"end":30},"id":"c2a49e40-3b25-485a-a27f-7b6b136e173d","type":"Range1d"},{"attributes":{},"id":"880e0fcb-1ffb-4273-8cf5-88d3df7518d6","type":"CategoricalTicker"},{"attributes":{"plot":null,"text":"Average flight delay"},"id":"d2d79d7c-d0b3-4252-8a68-558b9f609e21","type":"Title"},{"attributes":{"axis_label":"Airline Carrier","formatter":{"id":"7e722ae2-e3b5-43e1-b4dc-ab727b655265","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2ac42d72-501b-402e-8d7e-edb2df116cea","subtype":"Figure","type":"Plot"},"ticker":{"id":"880e0fcb-1ffb-4273-8cf5-88d3df7518d6","type":"CategoricalTicker"}},"id":"b6bc3edd-41a1-4a02-be22-0ee7d3090a5d","type":"CategoricalAxis"},{"attributes":{},"id":"94c2b62d-1ee7-447f-a46f-a2348a821025","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#720017"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.95},"line_color":{"value":"#720017"},"width":{"units":"data","value":0.8},"x":{"field":"x"},"y":{"field":"y"}},"id":"a80183ee-0dd3-440c-a831-dd05941e7666","type":"Rect"},{"attributes":{"data_source":{"id":"40a69b38-ff88-42e3-802e-4214a2c16fcb","type":"ColumnDataSource"},"glyph":{"id":"a80183ee-0dd3-440c-a831-dd05941e7666","type":"Rect"},"hover_glyph":null,"name":"Airline Delay","nonselection_glyph":{"id":"5cb29ea8-98f3-4e65-b3a1-e9070d8060dc","type":"Rect"},"selection_glyph":null},"id":"31651c85-6763-4159-8279-308d73eac57d","type":"GlyphRenderer"},{"attributes":{"axis_label":"Average Delay","formatter":{"id":"a1bb8b36-5278-4b1b-817f-e5792d81aa95","type":"BasicTickFormatter"},"plot":{"id":"2ac42d72-501b-402e-8d7e-edb2df116cea","subtype":"Figure","type":"Plot"},"ticker":{"id":"27e7f9ed-cc22-4d05-a857-e4991fb15787","type":"BasicTicker"}},"id":"af772ed4-8fbe-4ebb-a6b4-d729aeef0a78","type":"LinearAxis"}],"root_ids":["4efef27e-5a4d-4723-86c3-4e08646172a3"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"807bd3be-e5b1-4327-9554-7426c45fd3f9","elementid":"00d28750-d880-4286-8ed8-5d15a1546610","modelid":"4efef27e-5a4d-4723-86c3-4e08646172a3"}];
                  
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