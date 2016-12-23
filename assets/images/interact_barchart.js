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
      };var element = document.getElementById("c5337aae-d319-4bc7-a934-be6a5a72136d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5337aae-d319-4bc7-a934-be6a5a72136d' but no matching script tag was found. ")
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
                  var docs_json = {"cd4e7877-5ca3-4248-8364-5010d1e17c53":{"roots":{"references":[{"attributes":{"callback":null,"factors":["American Airlines Inc.","Alaska Airlines Inc.","JetBlue Airways","Delta Air Lines Inc.","ExpressJet Airlines Inc.","Envoy Air","SkyWest Airlines Inc.","United Air Lines Inc.","US Airways Inc.","Southwest Airlines Co."]},"id":"8d1466a9-83df-43ec-b712-e761b9c160cc","type":"FactorRange"},{"attributes":{"children":[{"id":"85ea1545-11eb-421d-b7ae-4d95963ade83","type":"Slider"}]},"id":"53a21be9-bcb2-411e-84a0-69ea88f1db7b","type":"WidgetBox"},{"attributes":{},"id":"cdbecd2f-f39b-4f90-a113-0dd14330461a","type":"BasicTicker"},{"attributes":{"plot":{"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"}},"id":"ba978624-27e6-414f-af99-b69960043052","type":"SaveTool"},{"attributes":{},"id":"89d240f4-0987-45a5-912e-bc27b6b45f0a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3bbd9854-aeda-424a-abbd-d7329975ca90","type":"ColumnDataSource"},"glyph":{"id":"17df00d6-d4cb-4c04-ae78-2d346ad0a04a","type":"Rect"},"hover_glyph":null,"name":"Airline Delay","nonselection_glyph":{"id":"dfec3dbe-12de-4d0f-8efb-eb7995924abb","type":"Rect"},"selection_glyph":null},"id":"2fd75b2f-9713-40a2-9541-0f0db5a116d5","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.8},"x":{"field":"x"},"y":{"field":"y"}},"id":"dfec3dbe-12de-4d0f-8efb-eb7995924abb","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdbecd2f-f39b-4f90-a113-0dd14330461a","type":"BasicTicker"}},"id":"ae597088-55f0-424d-8637-e268cf34ea7e","type":"Grid"},{"attributes":{"axis_label":"Average Delay","formatter":{"id":"89d240f4-0987-45a5-912e-bc27b6b45f0a","type":"BasicTickFormatter"},"plot":{"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdbecd2f-f39b-4f90-a113-0dd14330461a","type":"BasicTicker"}},"id":"1e17b5d1-749e-4a14-ac1e-539ad26c8a08","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Average flight delay"},"id":"c14f527d-aef1-4a44-b02d-fa7f981173c1","type":"Title"},{"attributes":{"plot":{"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"}},"id":"8d626d03-7623-47ef-8088-547cdb031061","type":"HelpTool"},{"attributes":{"callback":null,"end":30},"id":"7e51bd95-b72f-42a2-972d-e61b0cd52cdf","type":"Range1d"},{"attributes":{"args":{"source1":{"id":"3bbd9854-aeda-424a-abbd-d7329975ca90","type":"ColumnDataSource"},"source2":{"id":"5d312691-401f-49b9-8a70-dbf59a16bf4f","type":"ColumnDataSource"}},"code":"\n        var f = cb_obj.get('value');\n        var data1 = source1.get('data');\n        var data2 = source2.get('data');\n        \n        data1['height'] = data1['height'+f.toString()];\n        source1.trigger('change');\n        \n        var f = cb_obj.get('value');\n        if (f==24){\n            data2['title'] = data2['h2'];\n            source2.trigger('change');\n            }\n        else {\n            data2['title'] = data2['h1'];\n            source2.trigger('change');\n            }\n    "},"id":"718f4ff4-3c1d-42d6-86c8-43d4f13dbbb9","type":"CustomJS"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#720017"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.95},"line_color":{"value":"#720017"},"width":{"units":"data","value":0.8},"x":{"field":"x"},"y":{"field":"y"}},"id":"17df00d6-d4cb-4c04-ae78-2d346ad0a04a","type":"Rect"},{"attributes":{"axis_label":"Airline Carrier","formatter":{"id":"30a43aa5-c82d-499d-99f4-5ad9948f29e6","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"},"ticker":{"id":"fcd27437-9fd6-443f-b4b9-ead791cb8afe","type":"CategoricalTicker"}},"id":"eca7b3c0-ab66-4e5c-8e0d-94254ab4e04e","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"}},"id":"21de9bdd-7eae-48b1-ad64-b6b584e9e6c4","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["height16","height20","y","height14","height10","height8","height0","height22","height18","height13","height21","height9","height","height15","height11","height4","height2","height3","height5","x","height7","height1","height17","height24","height6","height19","height12","height23"],"data":{"height":[26.827977693124286,14.31867196367764,30.280823796247553,19.36356502326361,30.68068083806766,30.509446094491565,25.2430010310545,27.44296521226024,19.44873293816956,24.983720150916458],"height0":[18.976076555023923,8.157827476038339,28.69988137603796,12.190837937384899,28.41860465116279,19.0,21.568862275449103,19.162266580811334,13.891613536047082,0.0],"height1":[17.58960692871419,8.616692426584235,21.81363004172462,14.631749460043197,0.0,0.0,19.0,35.966812227074236,14.956753160345976,0.0],"height10":[21.66896642463016,13.772824238676765,20.952259049672147,14.151511085057244,24.044621625402154,25.22849768054728,26.45868120325262,24.73415959097964,15.796598351470479,15.592204715756226],"height11":[23.28289881938935,14.54267402753982,23.222703108634217,16.082051525415686,27.17848198986989,27.273899450453424,23.554766457252118,26.11403518386584,17.283746050407817,18.945697757521003],"height12":[25.997040733897993,15.606227811283631,28.240617499454505,17.289048949701293,28.36829394381303,28.09232276233623,26.65256013574209,28.186612757307362,17.274278136114294,21.76281636047062],"height13":[28.30297650464629,16.694439602579745,32.47759873323398,18.31867420375028,30.709871980108197,30.839180836321244,25.971399216104114,30.801516986423607,20.061740545100324,25.796051444738268],"height14":[31.029772981019725,14.889894544548701,36.08759157720131,20.314815509083957,34.31958130178322,31.729923552966874,29.380867906956116,31.873956019691125,22.043552479815457,29.044054100073172],"height15":[32.444744375574906,16.00016244974211,37.79722035752468,22.928313647343696,34.816130062133155,32.940500648249724,27.494218842521892,34.12839364645451,24.629380608688493,32.49675672729255],"height16":[33.74531325538506,15.183125687064859,39.18422303976775,24.221259894027604,39.58667492301513,33.149679950853134,29.042993924665858,36.54126456784264,23.33112776539959,35.523786309534756],"height17":[36.379171717481704,17.261719890244613,42.794473382184165,26.230756416378842,40.28830545105259,39.25243489528905,29.866555425608784,38.42148144005071,26.588496557850323,37.46859724293707],"height18":[37.0453608401988,16.53127021006491,44.69684027442265,28.724038723222268,43.292849548714,38.39916636938848,30.944469226220733,39.06062889634857,27.994280863232206,40.23983897736502],"height19":[37.42672994800811,17.44306609887058,46.49584122539735,27.61356611711609,39.53907719931616,38.94329212752115,29.872059395736716,37.45106805243641,24.927878713479007,40.981637754080886],"height2":[35.97142857142857,8.850467289719626,31.82755388940956,20.892307692307693,0.0,0.0,0.0,40.03343465045592,8.036363636363637,0.0],"height20":[37.014729231783186,16.09359372532505,45.426337943475644,25.688660516174238,38.57783875393431,36.68563700596158,25.501627974693598,37.81719627636592,27.046260455295997,41.11688642724005],"height21":[31.601073987936545,15.325310602261965,45.73288654858784,22.757824036583624,32.903701585226344,31.694588645707878,20.10975486734591,29.90176444854907,21.082336131452045,39.317782149596496],"height22":[28.490667123845444,12.51921274601687,39.63445882823969,21.006935226971063,25.38753275410288,28.116496945010184,19.06911646466752,22.827042639643608,19.978667176107237,39.066000792009504],"height23":[22.83637570527713,9.986843244179001,34.83197561360172,20.11377192201549,20.644939965694682,13.594202898550725,16.254141634807937,20.429524361948957,15.143534994068801,52.72316384180791],"height24":[26.827977693124286,14.31867196367764,30.280823796247553,19.36356502326361,30.68068083806766,30.509446094491565,25.2430010310545,27.44296521226024,19.44873293816956,24.983720150916458],"height3":[0.0,0.0,22.875703324808185,0.0,698.0,0.0,0.0,21.73913043478261,0.0,0.0],"height4":[0.0,0.0,17.49423520368947,0.0,0.0,0.0,5.538461538461538,33.791666666666664,0.0,0.0],"height5":[12.84714683878539,7.471624266144814,13.359285550721319,12.890633383220852,18.856080662423253,26.391684476394015,16.181198910081743,11.374403289313216,9.135567010309279,5.541146555709663],"height6":[14.614187207735595,8.73918444504456,10.267640513961668,12.66246407712988,20.847294462257057,25.409938902865356,16.65298262238457,12.221898615287843,10.278464478362885,6.257939780804892],"height7":[16.517138555452057,11.205343665090068,12.313119783120497,13.939082274189436,21.82988062381538,24.997515608459892,20.345344361641143,16.42673417916482,13.53173841625059,8.214072345704446],"height8":[19.753906895050516,12.957930995538991,15.506158171953587,14.06823828189698,22.947095086867176,25.16392971508334,23.679966308388114,18.478346144537085,14.375171263477691,11.445724208245714],"height9":[19.778855001971866,14.606137260216219,18.54433452413667,13.973119229022656,22.84122692958906,24.780259411578616,23.336402622369004,22.633949131526574,15.535413364478185,13.135266350737297],"x":["American Airlines Inc.","Alaska Airlines Inc.","JetBlue Airways","Delta Air Lines Inc.","ExpressJet Airlines Inc.","Envoy Air","SkyWest Airlines Inc.","United Air Lines Inc.","US Airways Inc.","Southwest Airlines Co."],"y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]}},"id":"3bbd9854-aeda-424a-abbd-d7329975ca90","type":"ColumnDataSource"},{"attributes":{"callback":{"id":"718f4ff4-3c1d-42d6-86c8-43d4f13dbbb9","type":"CustomJS"},"end":24,"step":1,"title":"Departure Hour","value":24},"id":"85ea1545-11eb-421d-b7ae-4d95963ade83","type":"Slider"},{"attributes":{},"id":"fcd27437-9fd6-443f-b4b9-ead791cb8afe","type":"CategoricalTicker"},{"attributes":{"background_fill_color":{"value":"#e3e0db"},"below":[{"id":"eca7b3c0-ab66-4e5c-8e0d-94254ab4e04e","type":"CategoricalAxis"}],"left":[{"id":"1e17b5d1-749e-4a14-ac1e-539ad26c8a08","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"eca7b3c0-ab66-4e5c-8e0d-94254ab4e04e","type":"CategoricalAxis"},{"id":"919beefc-9ccb-4372-b020-bbf82e9a6ea8","type":"Grid"},{"id":"1e17b5d1-749e-4a14-ac1e-539ad26c8a08","type":"LinearAxis"},{"id":"ae597088-55f0-424d-8637-e268cf34ea7e","type":"Grid"},{"id":"69864b3c-e806-42cb-aea7-913eb503fcfe","type":"BoxAnnotation"},{"id":"2fd75b2f-9713-40a2-9541-0f0db5a116d5","type":"GlyphRenderer"},{"id":"00c9897f-8774-45bf-b940-18a22bea15c3","type":"LabelSet"}],"title":{"id":"c14f527d-aef1-4a44-b02d-fa7f981173c1","type":"Title"},"tool_events":{"id":"61807b7a-d1c9-4f96-84a4-6ded5f000546","type":"ToolEvents"},"toolbar":{"id":"6b096a55-3243-4c07-93fb-0a86b238ccca","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"8d1466a9-83df-43ec-b712-e761b9c160cc","type":"FactorRange"},"y_range":{"id":"7e51bd95-b72f-42a2-972d-e61b0cd52cdf","type":"Range1d"}},"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"},{"attributes":{"level":"glyph","plot":{"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"},"source":{"id":"5d312691-401f-49b9-8a70-dbf59a16bf4f","type":"ColumnDataSource"},"text":{"field":"title"},"x":{"value":0},"x_offset":{"value":35},"y":{"value":0},"y_offset":{"value":170}},"id":"00c9897f-8774-45bf-b940-18a22bea15c3","type":"LabelSet"},{"attributes":{},"id":"61807b7a-d1c9-4f96-84a4-6ded5f000546","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"69864b3c-e806-42cb-aea7-913eb503fcfe","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"},{"id":"53a21be9-bcb2-411e-84a0-69ea88f1db7b","type":"WidgetBox"}]},"id":"d714bbcf-c194-4ca9-9974-45cfdce5772e","type":"Column"},{"attributes":{"callback":null,"column_names":["h1","title","h2"],"data":{"h1":["Hourly"],"h2":["Daily Average"],"title":["Daily Average"]}},"id":"5d312691-401f-49b9-8a70-dbf59a16bf4f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"}},"id":"818f511d-a4ef-4f95-a573-df50aa1e9358","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"818f511d-a4ef-4f95-a573-df50aa1e9358","type":"PanTool"},{"id":"21de9bdd-7eae-48b1-ad64-b6b584e9e6c4","type":"WheelZoomTool"},{"id":"bf75166d-8e98-45ff-9518-327a1deac099","type":"BoxZoomTool"},{"id":"ba978624-27e6-414f-af99-b69960043052","type":"SaveTool"},{"id":"394ef84c-c9d3-45ed-b66f-d6afc8e791f6","type":"ResetTool"},{"id":"8d626d03-7623-47ef-8088-547cdb031061","type":"HelpTool"}]},"id":"6b096a55-3243-4c07-93fb-0a86b238ccca","type":"Toolbar"},{"attributes":{},"id":"30a43aa5-c82d-499d-99f4-5ad9948f29e6","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"},"ticker":{"id":"fcd27437-9fd6-443f-b4b9-ead791cb8afe","type":"CategoricalTicker"}},"id":"919beefc-9ccb-4372-b020-bbf82e9a6ea8","type":"Grid"},{"attributes":{"overlay":{"id":"69864b3c-e806-42cb-aea7-913eb503fcfe","type":"BoxAnnotation"},"plot":{"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"}},"id":"bf75166d-8e98-45ff-9518-327a1deac099","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"cf447d2e-9c1e-4a90-89bc-12db1d43c36c","subtype":"Figure","type":"Plot"}},"id":"394ef84c-c9d3-45ed-b66f-d6afc8e791f6","type":"ResetTool"}],"root_ids":["d714bbcf-c194-4ca9-9974-45cfdce5772e"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"cd4e7877-5ca3-4248-8364-5010d1e17c53","elementid":"c5337aae-d319-4bc7-a934-be6a5a72136d","modelid":"d714bbcf-c194-4ca9-9974-45cfdce5772e"}];
                  
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