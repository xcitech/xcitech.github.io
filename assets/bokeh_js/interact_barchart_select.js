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
      };var element = document.getElementById("c5bda6c6-c641-40fc-a717-00c1664383a3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5bda6c6-c641-40fc-a717-00c1664383a3' but no matching script tag was found. ")
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
                  var docs_json = {"05cacb08-3476-4ae1-8f9c-9ebe42f821e5":{"roots":{"references":[{"attributes":{"axis_label":"Average Delay","formatter":{"id":"e1356fae-7115-4b8e-9e10-529f9165e61d","type":"BasicTickFormatter"},"plot":{"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"655e43a0-0981-4830-9cf2-b4a573d7f6c1","type":"BasicTicker"}},"id":"f6011925-1c29-48b0-954e-9788351a7ee0","type":"LinearAxis"},{"attributes":{"plot":{"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"}},"id":"2d2aa159-b4ce-4f30-99ba-3a68ef509803","type":"SaveTool"},{"attributes":{"plot":{"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbb82fac-04c6-436a-81b8-5eb5b317ecdb","type":"CategoricalTicker"}},"id":"68b7e04f-e688-46bf-a9cd-1b46a59230fd","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a36ef396-8eb4-40bc-9074-d9bc327eed92","type":"PanTool"},{"id":"42f559fa-1729-41d6-859c-ba3e186151ed","type":"WheelZoomTool"},{"id":"69f8610b-eb09-4c6f-81f0-ae8cfd39dcd1","type":"BoxZoomTool"},{"id":"2d2aa159-b4ce-4f30-99ba-3a68ef509803","type":"SaveTool"},{"id":"09e86251-45f8-411e-83ca-bd2bb5afa862","type":"ResetTool"},{"id":"be742fd0-cf0d-41f9-926e-2a03f41a2aa8","type":"HelpTool"}]},"id":"e735c8c7-8b71-4079-a756-1d2cf6682a46","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#e3e0db"},"below":[{"id":"ae87f401-1250-40c9-966d-a7af57a26ce5","type":"CategoricalAxis"}],"left":[{"id":"f6011925-1c29-48b0-954e-9788351a7ee0","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"ae87f401-1250-40c9-966d-a7af57a26ce5","type":"CategoricalAxis"},{"id":"68b7e04f-e688-46bf-a9cd-1b46a59230fd","type":"Grid"},{"id":"f6011925-1c29-48b0-954e-9788351a7ee0","type":"LinearAxis"},{"id":"82434926-97ad-4ba5-8831-f1f31fc1beab","type":"Grid"},{"id":"4373cfc3-0deb-4f48-ad1a-caa81c74f53a","type":"BoxAnnotation"},{"id":"729282ae-c6e2-4e8f-b229-68b48592a2db","type":"GlyphRenderer"},{"id":"1a029690-2bb5-4655-bae9-0289d286c4f5","type":"LabelSet"}],"title":{"id":"d3a579f8-4bd0-4047-b490-cecfc374ba87","type":"Title"},"tool_events":{"id":"5b7db6a2-f481-4d43-8157-5881b74da46c","type":"ToolEvents"},"toolbar":{"id":"e735c8c7-8b71-4079-a756-1d2cf6682a46","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"7cb4a600-d644-42e9-94ba-0f4c8fb90566","type":"FactorRange"},"y_range":{"id":"050502e8-d53b-47ab-872f-d7b3880545a8","type":"Range1d"}},"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1259b4a9-a068-4d07-844d-4a6fee988d29","type":"CategoricalTickFormatter"},{"attributes":{"overlay":{"id":"4373cfc3-0deb-4f48-ad1a-caa81c74f53a","type":"BoxAnnotation"},"plot":{"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"}},"id":"69f8610b-eb09-4c6f-81f0-ae8cfd39dcd1","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"655e43a0-0981-4830-9cf2-b4a573d7f6c1","type":"BasicTicker"}},"id":"82434926-97ad-4ba5-8831-f1f31fc1beab","type":"Grid"},{"attributes":{"callback":{"id":"89d0bef4-edf5-4d50-8a3b-0e69390f0d97","type":"CustomJS"},"end":24,"step":1,"title":"Departure Hour","value":24},"id":"08466835-639f-4054-a208-7f05c2a11687","type":"Slider"},{"attributes":{"callback":null,"factors":["Alaska Airlines ","American Airlines ","Delta Air Lines ","Envoy Air","ExpressJet Airlines ","JetBlue Airways","SkyWest Airlines ","Southwest Airlines ","US Airways ","United Air Lines "]},"id":"7cb4a600-d644-42e9-94ba-0f4c8fb90566","type":"FactorRange"},{"attributes":{"plot":{"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"}},"id":"09e86251-45f8-411e-83ca-bd2bb5afa862","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.8},"x":{"field":"x"},"y":{"field":"y"}},"id":"f3d34b66-898d-4418-8baf-87b8b2b576cb","type":"Rect"},{"attributes":{"children":[{"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"},{"id":"945e4923-5182-42a0-9938-e08fba978101","type":"WidgetBox"}]},"id":"240d4c27-2526-439b-bbc2-4076fdecc10c","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4373cfc3-0deb-4f48-ad1a-caa81c74f53a","type":"BoxAnnotation"},{"attributes":{},"id":"655e43a0-0981-4830-9cf2-b4a573d7f6c1","type":"BasicTicker"},{"attributes":{"data_source":{"id":"444d7da7-191d-444f-92d9-72cd2a741c09","type":"ColumnDataSource"},"glyph":{"id":"11d2d946-3662-4913-8ca2-eaa493cbb88e","type":"Rect"},"hover_glyph":null,"name":"Airline Delay","nonselection_glyph":{"id":"f3d34b66-898d-4418-8baf-87b8b2b576cb","type":"Rect"},"selection_glyph":null},"id":"729282ae-c6e2-4e8f-b229-68b48592a2db","type":"GlyphRenderer"},{"attributes":{},"id":"5b7db6a2-f481-4d43-8157-5881b74da46c","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Average flight delay"},"id":"d3a579f8-4bd0-4047-b490-cecfc374ba87","type":"Title"},{"attributes":{"plot":{"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"}},"id":"be742fd0-cf0d-41f9-926e-2a03f41a2aa8","type":"HelpTool"},{"attributes":{},"id":"e1356fae-7115-4b8e-9e10-529f9165e61d","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"08466835-639f-4054-a208-7f05c2a11687","type":"Slider"}]},"id":"945e4923-5182-42a0-9938-e08fba978101","type":"WidgetBox"},{"attributes":{"callback":null,"end":30},"id":"050502e8-d53b-47ab-872f-d7b3880545a8","type":"Range1d"},{"attributes":{"plot":{"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"}},"id":"a36ef396-8eb4-40bc-9074-d9bc327eed92","type":"PanTool"},{"attributes":{"callback":null,"column_names":["h2","h1","title"],"data":{"h1":["Hourly"],"h2":["Daily Average"],"title":["Daily Average"]}},"id":"62baf589-9d66-4708-8234-ba606114c6ff","type":"ColumnDataSource"},{"attributes":{"level":"glyph","plot":{"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"},"source":{"id":"62baf589-9d66-4708-8234-ba606114c6ff","type":"ColumnDataSource"},"text":{"field":"title"},"x":{"value":0},"x_offset":{"value":35},"y":{"value":0},"y_offset":{"value":170}},"id":"1a029690-2bb5-4655-bae9-0289d286c4f5","type":"LabelSet"},{"attributes":{"plot":{"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"}},"id":"42f559fa-1729-41d6-859c-ba3e186151ed","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["height13","height1","height15","height8","height23","height0","height","height17","height24","height7","height9","height22","height3","height12","height4","height16","y","height20","height18","height5","height6","height19","x","height10","height14","height11","height2","height21"],"data":{"height":[14.31867196367764,26.827977693124286,19.36356502326361,30.509446094491565,30.68068083806766,30.280823796247553,25.2430010310545,24.983720150916458,19.44873293816956,27.44296521226024],"height0":[8.157827476038339,18.976076555023923,12.190837937384899,19.0,28.41860465116279,28.69988137603796,21.568862275449103,0.0,13.891613536047082,19.162266580811334],"height1":[8.616692426584235,17.58960692871419,14.631749460043197,0.0,0.0,21.81363004172462,19.0,0.0,14.956753160345976,35.966812227074236],"height10":[13.772824238676765,21.66896642463016,14.151511085057244,25.22849768054728,24.044621625402154,20.952259049672147,26.45868120325262,15.592204715756226,15.796598351470479,24.73415959097964],"height11":[14.54267402753982,23.28289881938935,16.082051525415686,27.273899450453424,27.17848198986989,23.222703108634217,23.554766457252118,18.945697757521003,17.283746050407817,26.11403518386584],"height12":[15.606227811283631,25.997040733897993,17.289048949701293,28.09232276233623,28.36829394381303,28.240617499454505,26.65256013574209,21.76281636047062,17.274278136114294,28.186612757307362],"height13":[16.694439602579745,28.30297650464629,18.31867420375028,30.839180836321244,30.709871980108197,32.47759873323398,25.971399216104114,25.796051444738268,20.061740545100324,30.801516986423607],"height14":[14.889894544548701,31.029772981019725,20.314815509083957,31.729923552966874,34.31958130178322,36.08759157720131,29.380867906956116,29.044054100073172,22.043552479815457,31.873956019691125],"height15":[16.00016244974211,32.444744375574906,22.928313647343696,32.940500648249724,34.816130062133155,37.79722035752468,27.494218842521892,32.49675672729255,24.629380608688493,34.12839364645451],"height16":[15.183125687064859,33.74531325538506,24.221259894027604,33.149679950853134,39.58667492301513,39.18422303976775,29.042993924665858,35.523786309534756,23.33112776539959,36.54126456784264],"height17":[17.261719890244613,36.379171717481704,26.230756416378842,39.25243489528905,40.28830545105259,42.794473382184165,29.866555425608784,37.46859724293707,26.588496557850323,38.42148144005071],"height18":[16.53127021006491,37.0453608401988,28.724038723222268,38.39916636938848,43.292849548714,44.69684027442265,30.944469226220733,40.23983897736502,27.994280863232206,39.06062889634857],"height19":[17.44306609887058,37.42672994800811,27.61356611711609,38.94329212752115,39.53907719931616,46.49584122539735,29.872059395736716,40.981637754080886,24.927878713479007,37.45106805243641],"height2":[8.850467289719626,35.97142857142857,20.892307692307693,0.0,0.0,31.82755388940956,0.0,0.0,8.036363636363637,40.03343465045592],"height20":[16.09359372532505,37.014729231783186,25.688660516174238,36.68563700596158,38.57783875393431,45.426337943475644,25.501627974693598,41.11688642724005,27.046260455295997,37.81719627636592],"height21":[15.325310602261965,31.601073987936545,22.757824036583624,31.694588645707878,32.903701585226344,45.73288654858784,20.10975486734591,39.317782149596496,21.082336131452045,29.90176444854907],"height22":[12.51921274601687,28.490667123845444,21.006935226971063,28.116496945010184,25.38753275410288,39.63445882823969,19.06911646466752,39.066000792009504,19.978667176107237,22.827042639643608],"height23":[9.986843244179001,22.83637570527713,20.11377192201549,13.594202898550725,20.644939965694682,34.83197561360172,16.254141634807937,52.72316384180791,15.143534994068801,20.429524361948957],"height24":[14.31867196367764,26.827977693124286,19.36356502326361,30.509446094491565,30.68068083806766,30.280823796247553,25.2430010310545,24.983720150916458,19.44873293816956,27.44296521226024],"height3":[0.0,0.0,0.0,0.0,698.0,22.875703324808185,0.0,0.0,0.0,21.73913043478261],"height4":[0.0,0.0,0.0,0.0,0.0,17.49423520368947,5.538461538461538,0.0,0.0,33.791666666666664],"height5":[7.471624266144814,12.84714683878539,12.890633383220852,26.391684476394015,18.856080662423253,13.359285550721319,16.181198910081743,5.541146555709663,9.135567010309279,11.374403289313216],"height6":[8.73918444504456,14.614187207735595,12.66246407712988,25.409938902865356,20.847294462257057,10.267640513961668,16.65298262238457,6.257939780804892,10.278464478362885,12.221898615287843],"height7":[11.205343665090068,16.517138555452057,13.939082274189436,24.997515608459892,21.82988062381538,12.313119783120497,20.345344361641143,8.214072345704446,13.53173841625059,16.42673417916482],"height8":[12.957930995538991,19.753906895050516,14.06823828189698,25.16392971508334,22.947095086867176,15.506158171953587,23.679966308388114,11.445724208245714,14.375171263477691,18.478346144537085],"height9":[14.606137260216219,19.778855001971866,13.973119229022656,24.780259411578616,22.84122692958906,18.54433452413667,23.336402622369004,13.135266350737297,15.535413364478185,22.633949131526574],"x":["Alaska Airlines ","American Airlines ","Delta Air Lines ","Envoy Air","ExpressJet Airlines ","JetBlue Airways","SkyWest Airlines ","Southwest Airlines ","US Airways ","United Air Lines "],"y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]}},"id":"444d7da7-191d-444f-92d9-72cd2a741c09","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#720017"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.95},"line_color":{"value":"#720017"},"width":{"units":"data","value":0.8},"x":{"field":"x"},"y":{"field":"y"}},"id":"11d2d946-3662-4913-8ca2-eaa493cbb88e","type":"Rect"},{"attributes":{"axis_label":"Airline Carrier","formatter":{"id":"1259b4a9-a068-4d07-844d-4a6fee988d29","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"fd5bc48c-f50c-4a5c-83cb-a65e10adcc4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbb82fac-04c6-436a-81b8-5eb5b317ecdb","type":"CategoricalTicker"}},"id":"ae87f401-1250-40c9-966d-a7af57a26ce5","type":"CategoricalAxis"},{"attributes":{"args":{"source1":{"id":"444d7da7-191d-444f-92d9-72cd2a741c09","type":"ColumnDataSource"},"source2":{"id":"62baf589-9d66-4708-8234-ba606114c6ff","type":"ColumnDataSource"}},"code":"\n        var f = cb_obj.get('value');\n        var data1 = source1.get('data');\n        var data2 = source2.get('data');\n        \n        data1['height'] = data1['height'+f.toString()];\n        source1.trigger('change');\n        \n        var f = cb_obj.get('value');\n        if (f==24){\n            data2['title'] = data2['h2'];\n            source2.trigger('change');\n            }\n        else {\n            data2['title'] = data2['h1'];\n            source2.trigger('change');\n            }\n    "},"id":"89d0bef4-edf5-4d50-8a3b-0e69390f0d97","type":"CustomJS"},{"attributes":{},"id":"dbb82fac-04c6-436a-81b8-5eb5b317ecdb","type":"CategoricalTicker"}],"root_ids":["240d4c27-2526-439b-bbc2-4076fdecc10c"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"05cacb08-3476-4ae1-8f9c-9ebe42f821e5","elementid":"c5bda6c6-c641-40fc-a717-00c1664383a3","modelid":"240d4c27-2526-439b-bbc2-4076fdecc10c"}];
                  
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