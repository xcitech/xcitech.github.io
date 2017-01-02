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
      };var element = document.getElementById("9c176959-b0dc-40c6-94f6-c2e1bf976718");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9c176959-b0dc-40c6-94f6-c2e1bf976718' but no matching script tag was found. ")
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
                  var docs_json = {"0f42d7dc-ed11-441b-8dd4-5e3cf3688c30":{"roots":{"references":[{"attributes":{"args":{"source1":{"id":"a46424d9-f056-4cc7-96f9-99c07ac01e47","type":"ColumnDataSource"},"source2":{"id":"160d0490-0269-4f12-b88a-cecbbc775ca4","type":"ColumnDataSource"},"source3":{"id":"ec287108-f866-4d22-81ad-1bce5c2d95f7","type":"ColumnDataSource"}},"code":"\n        var f = cb_obj.get('value');\n        var data1 = source1.get('data');\n        var data2 = source2.get('data');\n        var data3 = source3.get('data');\n        \n        data1['height'] = data1['height'+f.toString()];\n        source1.trigger('change');\n        \n        data2['height'] = data2['height'+f.toString()];\n        source2.trigger('change');\n        \n        data3['title'] = data3['h'+f.toString()];\n        source3.trigger('change');\n        \n    "},"id":"4780c6af-4666-4922-93f1-1dcd968943a1","type":"CustomJS"},{"attributes":{"plot":{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"}},"id":"e35331e4-7059-4b47-a1f6-436f032a7c42","type":"SaveTool"},{"attributes":{"plot":{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"}},"id":"0690413e-68a2-406b-bacc-9e3eeb1bda39","type":"PanTool"},{"attributes":{},"id":"dc1d7f8e-b14d-4acf-8769-a00b618a4102","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"160d0490-0269-4f12-b88a-cecbbc775ca4","type":"ColumnDataSource"},"glyph":{"id":"690ecbf4-074c-470f-9ec9-09a9d458938f","type":"Rect"},"hover_glyph":null,"name":"Airline Delay","nonselection_glyph":{"id":"dc83bf42-11d0-4efd-ae39-bc8636a292d4","type":"Rect"},"selection_glyph":null},"id":"499cb3c6-9400-4489-8d1b-a7dcd906e7e3","type":"GlyphRenderer"},{"attributes":{"axis_label":"Airline Carrier","formatter":{"id":"c568b8b1-8ac1-4f60-95b0-3995bd74d31f","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ea51dc5-880a-4894-b44b-de87f6157da4","type":"CategoricalTicker"}},"id":"d7cec26c-85a8-465a-bb65-2b30a102105a","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["h3","h4","h0","h1","h2","title"],"data":{"h0":["Morning"],"h1":["Afternoon"],"h2":["Evening"],"h3":["Night"],"h4":["Daily Average"],"title":["Daily Average"]}},"id":"ec287108-f866-4d22-81ad-1bce5c2d95f7","type":"ColumnDataSource"},{"attributes":{},"id":"4ea51dc5-880a-4894-b44b-de87f6157da4","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.8},"x":{"field":"x"},"y":{"field":"y"}},"id":"7334a398-7b26-4956-afdf-27e7b5ba6568","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","height2","height","height1","height0","height4","x","height3"],"data":{"height":[26.183719336792958,13.984542679599578,31.038565963475428,19.67766055636705,32.34794337321636,34.45400023178552,26.621998023534363,26.9021675772662,19.26403073030761,24.712190771046963],"height0":[17.22478667053139,11.269026874257905,16.787355440686877,13.55237364998007,22.47834902689667,23.551372793031035,21.361941656143657,17.481010872176608,13.157359566457005,10.305171674690248],"height1":[27.47700879676594,15.30188575209528,32.424188080574496,19.64441482854302,33.43940865153304,34.60146578567631,28.468589022440643,29.957690968454944,19.722355333628638,25.52053062840781],"height2":[35.981177408852524,16.500620428036257,44.613293383778114,27.559442455420765,43.25504149141753,46.03823518386625,31.459906380741995,37.54747270229228,26.112798178496732,38.26942393822394],"height3":[32.9402359970127,14.67852594715059,44.33236919077023,23.317316127161344,40.93608829568789,44.18850987432675,27.247847865862802,30.328273244781784,23.91512869575952,39.53446272837227],"height4":[26.183719336792958,13.984542679599578,31.038565963475428,19.67766055636705,32.34794337321636,34.45400023178552,26.621998023534363,26.9021675772662,19.26403073030761,24.712190771046963],"x":["American Airlines ","Alaska Airlines ","JetBlue Airways","Delta Air Lines ","ExpressJet Airlines ","Frontier Airlines ","SkyWest Airlines ","United Air Lines ","US Airways ","Southwest Airlines "],"y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]}},"id":"a46424d9-f056-4cc7-96f9-99c07ac01e47","type":"ColumnDataSource"},{"attributes":{},"id":"c568b8b1-8ac1-4f60-95b0-3995bd74d31f","type":"CategoricalTickFormatter"},{"attributes":{},"id":"a58c1256-e9ff-432d-880f-30c362f4459c","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0690413e-68a2-406b-bacc-9e3eeb1bda39","type":"PanTool"},{"id":"4ca7ac3e-fbad-4e6f-a55f-1a142388b2e3","type":"WheelZoomTool"},{"id":"9e07f5e4-4ca6-4c28-8a37-6ee9d1289dd8","type":"BoxZoomTool"},{"id":"e35331e4-7059-4b47-a1f6-436f032a7c42","type":"SaveTool"},{"id":"4c636e68-a135-4403-99e6-0721d324d803","type":"ResetTool"},{"id":"7a0301ea-8663-4748-abab-99dcf536857f","type":"HelpTool"}]},"id":"5f4796ea-2086-4503-82bd-b7584579ddae","type":"Toolbar"},{"attributes":{},"id":"76412247-468a-4111-91f7-3cd8dbed31dc","type":"ToolEvents"},{"attributes":{"plot":{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"}},"id":"7a0301ea-8663-4748-abab-99dcf536857f","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b397f591-e60a-48c7-a70f-4383e5bb8c01","type":"BoxAnnotation"},{"attributes":{"callback":{"id":"4780c6af-4666-4922-93f1-1dcd968943a1","type":"CustomJS"},"end":4,"step":1,"title":"Departure Hour","value":4},"id":"8a9e09f7-737e-4bb2-a943-9a3e75f93853","type":"Slider"},{"attributes":{"callback":null,"factors":["American Airlines ","Alaska Airlines ","JetBlue Airways","Delta Air Lines ","ExpressJet Airlines ","Frontier Airlines ","SkyWest Airlines ","United Air Lines ","US Airways ","Southwest Airlines "]},"id":"996bca81-d9ca-4a7a-8637-f0a00b3de556","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.8},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc83bf42-11d0-4efd-ae39-bc8636a292d4","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#720017"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.95},"line_color":{"value":"#720017"},"width":{"units":"data","value":0.8},"x":{"field":"x"},"y":{"field":"y"}},"id":"690ecbf4-074c-470f-9ec9-09a9d458938f","type":"Rect"},{"attributes":{"items":[{"id":"f02f58e1-8b8c-4c4a-b6b1-3c0ae2976c36","type":"LegendItem"},{"id":"7afff0ca-e48a-423b-b4a5-4138ff61856a","type":"LegendItem"}],"plot":{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"}},"id":"a689257d-af05-49fe-97ce-324825d3325b","type":"Legend"},{"attributes":{"overlay":{"id":"b397f591-e60a-48c7-a70f-4383e5bb8c01","type":"BoxAnnotation"},"plot":{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"}},"id":"9e07f5e4-4ca6-4c28-8a37-6ee9d1289dd8","type":"BoxZoomTool"},{"attributes":{"label":{"value":"Weather accounted Delays"},"renderers":[{"id":"499cb3c6-9400-4489-8d1b-a7dcd906e7e3","type":"GlyphRenderer"}]},"id":"7afff0ca-e48a-423b-b4a5-4138ff61856a","type":"LegendItem"},{"attributes":{"plot":{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"}},"id":"4ca7ac3e-fbad-4e6f-a55f-1a142388b2e3","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"a58c1256-e9ff-432d-880f-30c362f4459c","type":"BasicTicker"}},"id":"5a078d13-c66c-4e0b-8146-3022a4b535db","type":"Grid"},{"attributes":{"children":[{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"},{"id":"882ce6c3-8523-4c3a-b18b-502c5bb9c682","type":"WidgetBox"}]},"id":"0b5e5e96-1592-49f2-8699-471b9a23259f","type":"Column"},{"attributes":{"label":{"value":"Actual Delays"},"renderers":[{"id":"39b418db-e7ba-4657-a060-9f5d37dcdade","type":"GlyphRenderer"}]},"id":"f02f58e1-8b8c-4c4a-b6b1-3c0ae2976c36","type":"LegendItem"},{"attributes":{"children":[{"id":"8a9e09f7-737e-4bb2-a943-9a3e75f93853","type":"Slider"}]},"id":"882ce6c3-8523-4c3a-b18b-502c5bb9c682","type":"WidgetBox"},{"attributes":{"background_fill_color":{"value":"#e3e0db"},"below":[{"id":"d7cec26c-85a8-465a-bb65-2b30a102105a","type":"CategoricalAxis"}],"left":[{"id":"42fbc72a-534c-4884-99bd-0112ce8038cd","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"d7cec26c-85a8-465a-bb65-2b30a102105a","type":"CategoricalAxis"},{"id":"d20f1678-412c-4fee-92c2-45d829150002","type":"Grid"},{"id":"42fbc72a-534c-4884-99bd-0112ce8038cd","type":"LinearAxis"},{"id":"5a078d13-c66c-4e0b-8146-3022a4b535db","type":"Grid"},{"id":"b397f591-e60a-48c7-a70f-4383e5bb8c01","type":"BoxAnnotation"},{"id":"a689257d-af05-49fe-97ce-324825d3325b","type":"Legend"},{"id":"39b418db-e7ba-4657-a060-9f5d37dcdade","type":"GlyphRenderer"},{"id":"499cb3c6-9400-4489-8d1b-a7dcd906e7e3","type":"GlyphRenderer"},{"id":"2d5f15a8-8e56-47ce-875a-c907a095e253","type":"LabelSet"}],"title":{"id":"9e3bfa38-393a-4123-97cb-40b899eeabd4","type":"Title"},"tool_events":{"id":"76412247-468a-4111-91f7-3cd8dbed31dc","type":"ToolEvents"},"toolbar":{"id":"5f4796ea-2086-4503-82bd-b7584579ddae","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"996bca81-d9ca-4a7a-8637-f0a00b3de556","type":"FactorRange"},"y_range":{"id":"87a617aa-2c1b-4272-841b-8e82a29b4e9c","type":"Range1d"}},"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Average Delay","formatter":{"id":"dc1d7f8e-b14d-4acf-8769-a00b618a4102","type":"BasicTickFormatter"},"plot":{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"a58c1256-e9ff-432d-880f-30c362f4459c","type":"BasicTicker"}},"id":"42fbc72a-534c-4884-99bd-0112ce8038cd","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Average flight delay"},"id":"9e3bfa38-393a-4123-97cb-40b899eeabd4","type":"Title"},{"attributes":{"callback":null,"column_names":["y","height2","height","height1","height0","height4","x","height3"],"data":{"height":[9.421228151884696,3.8226539420021397,18.099787749001354,4.826028962951251,10.903812710001697,15.789986124380873,9.226552218428653,10.925561564686117,5.833991212786148,9.755683066987697],"height0":[2.6460709263573143,2.72810012344815,11.128536388480684,3.268557027379955,3.6044416123864793,4.9329227982006865,4.758821891554442,3.507894789304356,1.4904771526220375,1.3385153147843034],"height1":[8.116406444670481,3.2462750184900244,13.569271752338903,3.5006701056632545,8.93118444843802,12.201694168204831,6.695070360136489,10.127306200439735,4.313338696191333,7.110930204761294],"height2":[15.940208751065745,4.5976914951802135,24.669641531913896,7.470380740238199,19.213146195349395,27.835686902122074,14.82239420674114,19.298384925558107,8.269757884492128,18.02921695145665],"height3":[23.302750532317262,8.161009115813913,35.63148137729919,9.401561941257347,29.474740878002514,33.76533182536204,21.83614234786662,23.85193834768811,16.650534321873376,27.277489711389048],"height4":[9.421228151884696,3.8226539420021397,18.099787749001354,4.826028962951251,10.903812710001697,15.789986124380873,9.226552218428653,10.925561564686117,5.833991212786148,9.755683066987697],"x":["American Airlines ","Alaska Airlines ","JetBlue Airways","Delta Air Lines ","ExpressJet Airlines ","Frontier Airlines ","SkyWest Airlines ","United Air Lines ","US Airways ","Southwest Airlines "],"y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]}},"id":"160d0490-0269-4f12-b88a-cecbbc775ca4","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":30},"id":"87a617aa-2c1b-4272-841b-8e82a29b4e9c","type":"Range1d"},{"attributes":{"data_source":{"id":"a46424d9-f056-4cc7-96f9-99c07ac01e47","type":"ColumnDataSource"},"glyph":{"id":"33f258e2-f369-4f38-8fbd-2a0456678904","type":"Rect"},"hover_glyph":null,"name":"Airline Delay","nonselection_glyph":{"id":"7334a398-7b26-4956-afdf-27e7b5ba6568","type":"Rect"},"selection_glyph":null},"id":"39b418db-e7ba-4657-a060-9f5d37dcdade","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.35},"fill_color":{"value":"#F47C3A"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.35},"line_color":{"value":"#F47C3A"},"width":{"units":"data","value":0.8},"x":{"field":"x"},"y":{"field":"y"}},"id":"33f258e2-f369-4f38-8fbd-2a0456678904","type":"Rect"},{"attributes":{"plot":{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"}},"id":"4c636e68-a135-4403-99e6-0721d324d803","type":"ResetTool"},{"attributes":{"level":"glyph","plot":{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"},"source":{"id":"ec287108-f866-4d22-81ad-1bce5c2d95f7","type":"ColumnDataSource"},"text":{"field":"title"},"x":{"value":0},"x_offset":{"value":35},"y":{"value":0},"y_offset":{"value":170}},"id":"2d5f15a8-8e56-47ce-875a-c907a095e253","type":"LabelSet"},{"attributes":{"plot":{"id":"b2121d48-06e1-4ad7-a677-65644bf27bd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ea51dc5-880a-4894-b44b-de87f6157da4","type":"CategoricalTicker"}},"id":"d20f1678-412c-4fee-92c2-45d829150002","type":"Grid"}],"root_ids":["0b5e5e96-1592-49f2-8699-471b9a23259f"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"0f42d7dc-ed11-441b-8dd4-5e3cf3688c30","elementid":"9c176959-b0dc-40c6-94f6-c2e1bf976718","modelid":"0b5e5e96-1592-49f2-8699-471b9a23259f"}];
                  
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