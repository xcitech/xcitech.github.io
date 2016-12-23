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
      };var element = document.getElementById("34b86425-55f7-4743-bae3-b67e973a9c92");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '34b86425-55f7-4743-bae3-b67e973a9c92' but no matching script tag was found. ")
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
                  var docs_json = {"3c6ff4cf-da11-4e69-88c8-3eba418da355":{"roots":{"references":[{"attributes":{"plot":{"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"686fff18-40c4-412e-858d-0f6ff0d0e401","type":"CategoricalTicker"}},"id":"88eeaff5-98c1-4a3b-8b4a-77a588428a5b","type":"Grid"},{"attributes":{},"id":"686fff18-40c4-412e-858d-0f6ff0d0e401","type":"CategoricalTicker"},{"attributes":{},"id":"a141ac3a-2687-4e31-be29-12c881675277","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x","height21","height9","height14","height13","height","height23","height16","height2","y","height0","height11","height24","height7","height1","height5","height3","height22","height17","height18","height12","height20","height8","height4","height19","height6","height10","height15"],"data":{"height":[26.827977693124286,14.31867196367764,30.280823796247553,19.36356502326361,30.68068083806766,30.509446094491565,25.2430010310545,27.44296521226024,19.44873293816956,24.983720150916458],"height0":[18.976076555023923,8.157827476038339,28.69988137603796,12.190837937384899,28.41860465116279,19.0,21.568862275449103,19.162266580811334,13.891613536047082,0.0],"height1":[17.58960692871419,8.616692426584235,21.81363004172462,14.631749460043197,0.0,0.0,19.0,35.966812227074236,14.956753160345976,0.0],"height10":[21.66896642463016,13.772824238676765,20.952259049672147,14.151511085057244,24.044621625402154,25.22849768054728,26.45868120325262,24.73415959097964,15.796598351470479,15.592204715756226],"height11":[23.28289881938935,14.54267402753982,23.222703108634217,16.082051525415686,27.17848198986989,27.273899450453424,23.554766457252118,26.11403518386584,17.283746050407817,18.945697757521003],"height12":[25.997040733897993,15.606227811283631,28.240617499454505,17.289048949701293,28.36829394381303,28.09232276233623,26.65256013574209,28.186612757307362,17.274278136114294,21.76281636047062],"height13":[28.30297650464629,16.694439602579745,32.47759873323398,18.31867420375028,30.709871980108197,30.839180836321244,25.971399216104114,30.801516986423607,20.061740545100324,25.796051444738268],"height14":[31.029772981019725,14.889894544548701,36.08759157720131,20.314815509083957,34.31958130178322,31.729923552966874,29.380867906956116,31.873956019691125,22.043552479815457,29.044054100073172],"height15":[32.444744375574906,16.00016244974211,37.79722035752468,22.928313647343696,34.816130062133155,32.940500648249724,27.494218842521892,34.12839364645451,24.629380608688493,32.49675672729255],"height16":[33.74531325538506,15.183125687064859,39.18422303976775,24.221259894027604,39.58667492301513,33.149679950853134,29.042993924665858,36.54126456784264,23.33112776539959,35.523786309534756],"height17":[36.379171717481704,17.261719890244613,42.794473382184165,26.230756416378842,40.28830545105259,39.25243489528905,29.866555425608784,38.42148144005071,26.588496557850323,37.46859724293707],"height18":[37.0453608401988,16.53127021006491,44.69684027442265,28.724038723222268,43.292849548714,38.39916636938848,30.944469226220733,39.06062889634857,27.994280863232206,40.23983897736502],"height19":[37.42672994800811,17.44306609887058,46.49584122539735,27.61356611711609,39.53907719931616,38.94329212752115,29.872059395736716,37.45106805243641,24.927878713479007,40.981637754080886],"height2":[35.97142857142857,8.850467289719626,31.82755388940956,20.892307692307693,0.0,0.0,0.0,40.03343465045592,8.036363636363637,0.0],"height20":[37.014729231783186,16.09359372532505,45.426337943475644,25.688660516174238,38.57783875393431,36.68563700596158,25.501627974693598,37.81719627636592,27.046260455295997,41.11688642724005],"height21":[31.601073987936545,15.325310602261965,45.73288654858784,22.757824036583624,32.903701585226344,31.694588645707878,20.10975486734591,29.90176444854907,21.082336131452045,39.317782149596496],"height22":[28.490667123845444,12.51921274601687,39.63445882823969,21.006935226971063,25.38753275410288,28.116496945010184,19.06911646466752,22.827042639643608,19.978667176107237,39.066000792009504],"height23":[22.83637570527713,9.986843244179001,34.83197561360172,20.11377192201549,20.644939965694682,13.594202898550725,16.254141634807937,20.429524361948957,15.143534994068801,52.72316384180791],"height24":[26.827977693124286,14.31867196367764,30.280823796247553,19.36356502326361,30.68068083806766,30.509446094491565,25.2430010310545,27.44296521226024,19.44873293816956,24.983720150916458],"height3":[0.0,0.0,22.875703324808185,0.0,698.0,0.0,0.0,21.73913043478261,0.0,0.0],"height4":[0.0,0.0,17.49423520368947,0.0,0.0,0.0,5.538461538461538,33.791666666666664,0.0,0.0],"height5":[12.84714683878539,7.471624266144814,13.359285550721319,12.890633383220852,18.856080662423253,26.391684476394015,16.181198910081743,11.374403289313216,9.135567010309279,5.541146555709663],"height6":[14.614187207735595,8.73918444504456,10.267640513961668,12.66246407712988,20.847294462257057,25.409938902865356,16.65298262238457,12.221898615287843,10.278464478362885,6.257939780804892],"height7":[16.517138555452057,11.205343665090068,12.313119783120497,13.939082274189436,21.82988062381538,24.997515608459892,20.345344361641143,16.42673417916482,13.53173841625059,8.214072345704446],"height8":[19.753906895050516,12.957930995538991,15.506158171953587,14.06823828189698,22.947095086867176,25.16392971508334,23.679966308388114,18.478346144537085,14.375171263477691,11.445724208245714],"height9":[19.778855001971866,14.606137260216219,18.54433452413667,13.973119229022656,22.84122692958906,24.780259411578616,23.336402622369004,22.633949131526574,15.535413364478185,13.135266350737297],"x":["American Airlines Inc.","Alaska Airlines Inc.","JetBlue Airways","Delta Air Lines Inc.","ExpressJet Airlines Inc.","Envoy Air","SkyWest Airlines Inc.","United Air Lines Inc.","US Airways Inc.","Southwest Airlines Co."],"y":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]}},"id":"3eaf2fdb-18f3-4e69-8b2b-90fbf2749783","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average flight delay"},"id":"7864d96b-e578-4d5e-b80c-c29619f39483","type":"Title"},{"attributes":{"data_source":{"id":"3eaf2fdb-18f3-4e69-8b2b-90fbf2749783","type":"ColumnDataSource"},"glyph":{"id":"ffdb06c3-0e14-450a-8a93-3ba7a12f7f42","type":"Rect"},"hover_glyph":null,"name":"Airline Delay","nonselection_glyph":{"id":"0fecf403-c595-4543-8466-c3ec7ed6707e","type":"Rect"},"selection_glyph":null},"id":"c073276b-9ce1-4c20-993b-68527fb03a01","type":"GlyphRenderer"},{"attributes":{"axis_label":"Airline Carrier","formatter":{"id":"ecac361f-a39c-47f0-b405-0831202dfba2","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"686fff18-40c4-412e-858d-0f6ff0d0e401","type":"CategoricalTicker"}},"id":"d39ff116-be54-409e-985c-13eb73a4a9e1","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"}},"id":"840be1b7-781e-4d7e-a154-793bf23364fe","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#720017"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.95},"line_color":{"value":"#720017"},"width":{"units":"data","value":0.8},"x":{"field":"x"},"y":{"field":"y"}},"id":"ffdb06c3-0e14-450a-8a93-3ba7a12f7f42","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9c0ee82b-299e-4856-8981-5033fb8db071","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"}},"id":"1fc41111-563e-4eff-b120-1f6b015e1d9c","type":"PanTool"},{"attributes":{"children":[{"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"},{"id":"f8df4296-bec6-4a69-a4dd-ae382acc1c5d","type":"WidgetBox"}]},"id":"b564a9a8-a4f2-4239-af97-fec2f87313f9","type":"Column"},{"attributes":{"children":[{"id":"c10de982-0633-48c2-87c4-83a2c43287a8","type":"Select"}]},"id":"f8df4296-bec6-4a69-a4dd-ae382acc1c5d","type":"WidgetBox"},{"attributes":{},"id":"9909839c-bfdf-404b-9370-3ef5708d28e4","type":"BasicTicker"},{"attributes":{"plot":{"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"}},"id":"5ae217e6-8b67-47b2-84c8-0bb31e72a915","type":"ResetTool"},{"attributes":{"axis_label":"Average Delay","formatter":{"id":"d0306d2c-1fa8-412b-a43f-3a680c602e95","type":"BasicTickFormatter"},"plot":{"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"9909839c-bfdf-404b-9370-3ef5708d28e4","type":"BasicTicker"}},"id":"3a9e3636-e4f4-409c-a2de-7d63443be182","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.8},"x":{"field":"x"},"y":{"field":"y"}},"id":"0fecf403-c595-4543-8466-c3ec7ed6707e","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1fc41111-563e-4eff-b120-1f6b015e1d9c","type":"PanTool"},{"id":"1079163d-13ba-48fc-a398-3d7981346013","type":"WheelZoomTool"},{"id":"5e245a85-8c91-4c04-a871-25697cac3dca","type":"BoxZoomTool"},{"id":"840be1b7-781e-4d7e-a154-793bf23364fe","type":"SaveTool"},{"id":"5ae217e6-8b67-47b2-84c8-0bb31e72a915","type":"ResetTool"},{"id":"8d751dd2-02ac-4291-9c26-e5d15d324fbd","type":"HelpTool"}]},"id":"7b98597f-f2dd-4979-b531-e82587f0ec81","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"9909839c-bfdf-404b-9370-3ef5708d28e4","type":"BasicTicker"}},"id":"491e016d-eefc-4a97-a8d4-4f67d736205c","type":"Grid"},{"attributes":{"plot":{"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"}},"id":"8d751dd2-02ac-4291-9c26-e5d15d324fbd","type":"HelpTool"},{"attributes":{"overlay":{"id":"9c0ee82b-299e-4856-8981-5033fb8db071","type":"BoxAnnotation"},"plot":{"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"}},"id":"5e245a85-8c91-4c04-a871-25697cac3dca","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"}},"id":"1079163d-13ba-48fc-a398-3d7981346013","type":"WheelZoomTool"},{"attributes":{"args":{"source1":{"id":"3eaf2fdb-18f3-4e69-8b2b-90fbf2749783","type":"ColumnDataSource"},"source2":{"id":"39246461-5bd1-46f5-b572-3fc799ecb5fa","type":"ColumnDataSource"}},"code":"\n        var f = cb_obj.get('value');\n        var data1 = source1.get('data');\n        var data2 = source2.get('data');\n        \n        data1['height'] = data1['height'+f.toString()];\n        source1.trigger('change');\n        \n        var f = cb_obj.get('value');\n        if (f==24){\n            data2['title'] = data2['h2'];\n            source2.trigger('change');\n            }\n        else {\n            data2['title'] = data2['h1'];\n            source2.trigger('change');\n            }\n    "},"id":"7dfb03f7-b2e0-4173-861f-6462b8350314","type":"CustomJS"},{"attributes":{"callback":null,"column_names":["h1","h2","title"],"data":{"h1":["Hourly"],"h2":["Daily Average"],"title":["Daily Average"]}},"id":"39246461-5bd1-46f5-b572-3fc799ecb5fa","type":"ColumnDataSource"},{"attributes":{"background_fill_color":{"value":"#e3e0db"},"below":[{"id":"d39ff116-be54-409e-985c-13eb73a4a9e1","type":"CategoricalAxis"}],"left":[{"id":"3a9e3636-e4f4-409c-a2de-7d63443be182","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"d39ff116-be54-409e-985c-13eb73a4a9e1","type":"CategoricalAxis"},{"id":"88eeaff5-98c1-4a3b-8b4a-77a588428a5b","type":"Grid"},{"id":"3a9e3636-e4f4-409c-a2de-7d63443be182","type":"LinearAxis"},{"id":"491e016d-eefc-4a97-a8d4-4f67d736205c","type":"Grid"},{"id":"9c0ee82b-299e-4856-8981-5033fb8db071","type":"BoxAnnotation"},{"id":"c073276b-9ce1-4c20-993b-68527fb03a01","type":"GlyphRenderer"},{"id":"4c3cb657-f376-4966-8a1e-e2b322552f20","type":"LabelSet"}],"title":{"id":"7864d96b-e578-4d5e-b80c-c29619f39483","type":"Title"},"tool_events":{"id":"a141ac3a-2687-4e31-be29-12c881675277","type":"ToolEvents"},"toolbar":{"id":"7b98597f-f2dd-4979-b531-e82587f0ec81","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"f5620d70-7eaa-401b-8821-51ada7951be7","type":"FactorRange"},"y_range":{"id":"7921fabb-14b8-4f87-963a-230d41e78ce3","type":"Range1d"}},"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d0306d2c-1fa8-412b-a43f-3a680c602e95","type":"BasicTickFormatter"},{"attributes":{},"id":"ecac361f-a39c-47f0-b405-0831202dfba2","type":"CategoricalTickFormatter"},{"attributes":{"callback":{"id":"7dfb03f7-b2e0-4173-861f-6462b8350314","type":"CustomJS"},"options":["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],"title":"Departure Hour:","value":"24"},"id":"c10de982-0633-48c2-87c4-83a2c43287a8","type":"Select"},{"attributes":{"callback":null,"end":30},"id":"7921fabb-14b8-4f87-963a-230d41e78ce3","type":"Range1d"},{"attributes":{"level":"glyph","plot":{"id":"929f5085-dc84-47ad-a461-52f7e59583c4","subtype":"Figure","type":"Plot"},"source":{"id":"39246461-5bd1-46f5-b572-3fc799ecb5fa","type":"ColumnDataSource"},"text":{"field":"title"},"x":{"value":0},"x_offset":{"value":35},"y":{"value":0},"y_offset":{"value":170}},"id":"4c3cb657-f376-4966-8a1e-e2b322552f20","type":"LabelSet"},{"attributes":{"callback":null,"factors":["American Airlines Inc.","Alaska Airlines Inc.","JetBlue Airways","Delta Air Lines Inc.","ExpressJet Airlines Inc.","Envoy Air","SkyWest Airlines Inc.","United Air Lines Inc.","US Airways Inc.","Southwest Airlines Co."]},"id":"f5620d70-7eaa-401b-8821-51ada7951be7","type":"FactorRange"}],"root_ids":["b564a9a8-a4f2-4239-af97-fec2f87313f9"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"3c6ff4cf-da11-4e69-88c8-3eba418da355","elementid":"34b86425-55f7-4743-bae3-b67e973a9c92","modelid":"b564a9a8-a4f2-4239-af97-fec2f87313f9"}];
                  
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