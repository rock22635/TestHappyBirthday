(function(){"use strict";var t={2603:function(t,r,s){var e=s(6369),a=function(){var t=this,r=t._self._c;return r("div",{ref:"main",attrs:{id:"app"}},[r("div",{staticClass:"playtimes"},[t._v("遊玩次數:"+t._s(t.playtimes))]),r("div",{staticClass:"recordbtn",on:{click:function(r){t.showclass="L2"}}},[t._v("歷史紀錄")]),r("GashPon",{ref:"gashpon"}),r("div",{staticClass:"buttons"},[r("div",{staticClass:"text"},[t._v(t._s(t.Lottle))]),r("div",{ref:"energy",staticClass:"energy"})]),r("FunctionMenu",{on:{reset:t.reset}}),r("BoostrapModal",{attrs:{classes:t.showclass,results:t.results,GameResult:t.GameResult},on:{test:t.test,dialogconfirm:t.dialogconfirm,resetlottle:t.init}})],1)},o=[],i=function(){var t=this,r=t._self._c;return r("div",{staticClass:"gashapon"},[r("svg",{ref:"main",staticClass:"gashapon-main default-animation",attrs:{id:"e0dj51prVt41",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 853.69 1073.79","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision"},on:{click:function(r){return t.doShowAlert("test")}}},[r("g",[r("g",{attrs:{transform:"translate(0-.000065)"}},[r("g",[r("g",[r("path",{attrs:{d:"M797.49,49.34c-238.898622-18.814577-478.894951-19.115475-717.84-.9-11.23.87-21.19,9.9-21.29,20.14-.159295,15.561861,1.149838,31.104048,3.91,46.42c1.79,9.9,12.4,17.58,23.1,17.64q1.68,26.75,3.38,53.49c-5,3.17-63.24,44.58-52.41,181.93c10.71,135.44,69.25,180.62,75.44,185.17h-.64C73.75,579.61,63.23,682.12,92.47,744.41h.11q-3.28,18.38-6.51,36.73c-8.75.9-16.4,7.36-18.28,15.87-16.11,73.22-22.71,147.33-18.6,220.21.66,11.34,11.75,21.57,23,21.57h708.38c11.22,0,22.31-10.23,23-21.57c4.11-72.88-2.49-147-18.6-220.21-2-9.1-10.63-15.87-20.12-16l-7.47-.09q-3.3-18.56-6.66-37.12v0q6.43-94.86,12.88-189.71h-.34l28.53-420.63c10.57-.21,21-7.79,22.81-17.57c2.835386-15.298506,4.214883-30.83125,4.12-46.39-.09-10.21-10-19.27-21.23-20.16Z",fill:"#fffdff",stroke:"#633b4b","stroke-miterlimit":"10","stroke-width":"70"}}),r("path",{attrs:{d:"M728.46,809.89q-291.4-2.8-582.85-.2c-9.62.09-17.94-8.13-18.91-23.37Q105.42,449.67,84.12,113c-.33-5.19,8.12-13.79,19.19-14.14Q438.55,88.2,774,99.7c11.08.39,19.49,9,18.79,19.2q-22.82,336.33-45.62,672.68c-.74,10.2-9.1,18.42-18.71,18.31Z",fill:"#fcf0f0"}}),r("path",{attrs:{d:"M790.58,133.49q-352.08-12.38-704.4-.81c-11,.34-22.08-7.5-23.91-17.66-2.761416-15.322521-4.070554-30.871464-3.91-46.44.1-10.24,10.06-19.27,21.29-20.14c238.945049-18.215475,478.941378-17.914577,717.84.9c11.23.89,21.14,9.95,21.2,20.18.094883,15.55875-1.284614,31.091494-4.12,46.39-1.88,10.14-13.02,17.95-23.99,17.58Z",fill:"#f7524b"}}),r("path",{attrs:{d:"M786.81,122.42q-94.08-3.8-188.34-5.61c-3.383807-.032351-6.60109-1.473279-8.878333-3.97635s-3.408457-5.841862-3.121667-9.21365c.87-13.74,1.3-27.55,1.27-41.31-.047434-3.411268,1.313817-6.691148,3.762804-9.066324s5.768976-3.635449,9.177196-3.483676Q696.24,53,791.85,59.85c7.24.53,13.36,6.36,13.3,13-.123679,12.779427-1.203359,25.531689-3.23,38.15-1.06,6.61-7.99,11.69-15.11,11.42Z",fill:"#b5394e",opacity:"0.63"}}),r("path",{attrs:{d:"M111.14,553.27C73.75,579.61,63.23,682.12,92.47,744.41q329.05-4.38,658.19-.12q6.45-95.09,12.91-190.18-326.13-6.89-652.43-.84Z",fill:"#fcf0f0"}}),r("path",{attrs:{d:"M780.57,1038.79h-708.41c-11.22,0-22.31-10.23-23-21.57-4.11-72.88,2.49-147,18.6-220.21c2-9.1,10.63-15.87,20.12-16q338.42-4.08,676.91,0c9.49.11,18.11,6.88,20.12,16c16.11,73.22,22.71,147.33,18.6,220.21-.63,11.34-11.72,21.56-22.94,21.57Z",fill:"#f7524b"}}),r("path",{attrs:{d:"M763,1021.36q-88.34-.09-176.68-.12c-9.76,0-17.19-7.76-17.06-17.72.91-63.07-1.13-126.89-5.83-190-.358114-5.222078,1.497132-10.353907,5.111771-14.139766s8.655177-5.876455,13.888229-5.760234q83.81.45,167.6,1.36c9.58.1,18.12,7,19.89,16.15c12.09,62.79,17.51,126.15,15.53,188.73-.33,11.34-11.14,21.51-22.45,21.5Z",fill:"#b5394e",opacity:"0.63"}}),r("path",{attrs:{d:"M648,183q-127.36-2.62-254.76-2.23l2.28,370q118.6-.23,237.21,1.26c10.770454.077111,21.147371-4.044243,28.93-11.49q23.52-22.31,47.45-44.48c8.00573-7.361031,12.862976-17.52686,13.56-28.38l11.52-196.76c.634739-10.736924-3.286334-21.243946-10.8-28.94q-22.5-23.3-45.39-46.49c-7.995697-7.905552-18.756422-12.385601-30-12.49Z",fill:"#f6c0bb"}}),r("path",{attrs:{d:"M572.1,551.3q-229.89-2-459.78,2.35c.14-.06-64.66-42.38-76-185.57s52.68-182.18,52.77-182.14q246.82-7.71,493.79-4.13c-.11-.07-67.47,36-69.46,180.61s58.82,188.86,58.68,188.88Z",fill:"#fae2da"}}),r("path",{attrs:{d:"M757.37,781.06q-335.62-3.94-671.31.11q3.27-18.6,6.6-37.23q329-4.4,658-.12q3.41,18.63,6.71,37.24Z",fill:"#fcf0f0"}})]),r("g",{attrs:{transform:"translate(.000001 0.000001)"}},[r("path",{attrs:{d:"M316.63,723.82c-17.2-63-1.13-150.4,33.95-173.94q-84.79.39-169.58,1.66c-35.79,24.88-48.46,118.71-25.36,181.64c2.015461,5.804598,7.455843,9.720873,13.6,9.79q67.26-.69,134.54-1c8.96-.06,15.31-8.97,12.85-18.15Z",fill:"#cd424d"}}),r("path",{attrs:{d:"M308.92,723.86c-17.29-63-1.36-150.39,33.68-173.94q-84.8.44-169.58,1.74c-35.75,24.9-48.27,118.7-25.07,181.61c2.028777,5.801922,7.473977,9.711912,13.62,9.78q67.26-.7,134.53-1.06c8.97.01,15.31-8.99,12.82-18.13Z",fill:"#f7524b"}}),r("path",{attrs:{d:"M271.19,655.38c.91,30.66-22.07,55.67-51.34,55.93s-54.37-24.25-56.08-54.81s21.28-55.71,51.34-56.08s55.17,24.3,56.08,54.96Z",fill:"#fcf0f0"}})]),r("g",{attrs:{transform:"translate(.000001 0.000001)"}},[r("path",{attrs:{d:"M486.31,613.43q-51.1-.16-102.19,0c-6.759541.063775-12.521302,4.919097-13.73,11.57-7.24,38.48-5.47,83.19,8,116.66q63.79-.12,127.59.08c-12-31.92-13.06-74-6-111.13c1.67-8.89-4.82-17.15-13.67-17.18Z",fill:"#fae2da"}}),r("g",{attrs:{"clip-path":"url(#e0dj51prVt426)"}},[r("g",[r("path",{attrs:{d:"M383,742.14v0c31.821975-33.681941,49.550666-78.263068,49.55-124.6v-16.67h-66.95v141.37Z",fill:"#f6c0bb"}})]),r("clipPath",{attrs:{id:"e0dj51prVt426"}},[r("path",{attrs:{d:"M486.31,613.43q-51.1-.16-102.19,0c-6.759541.063775-12.521302,4.919097-13.73,11.57-7.24,38.48-5.47,83.19,8,116.66q63.79-.12,127.59.08c-12-31.92-13.06-74-6-111.13c1.67-8.89-4.82-17.15-13.67-17.18Z",fill:"#fae2da"}})])])])]),r("g",{ref:"e0dj51prVt428_to",staticStyle:{"offset-path":"path('M443.029083,628.903834L443.029083,628.903834C441.063368,788.295103,423.618762,983.513758,265.070958,1008.799545')","offset-rotate":"0deg"},attrs:{id:"e0dj51prVt428_to"}},[r("g",{ref:"e0dj51prVt428_tr",attrs:{id:"e0dj51prVt428_tr",transform:"rotate(190)"}},[r("g",{ref:"e0dj51prVt428_ts",attrs:{id:"e0dj51prVt428_ts",transform:"scale(0.623166,0.623166)"}},[r("g",{ref:"e0dj51prVt428",attrs:{id:"e0dj51prVt428",opacity:"0",transform:"translate(-229.998314,-485.659576)"}},[r("path",{attrs:{d:"M246.1,538.51c29.318416-8.944383,45.837761-39.959564,36.9-69.28L176.82,501.62c4.295087,14.079081,14.007202,25.875274,26.999751,32.793507s28.201231,8.391787,42.280249,4.096493Z",fill:"#fcf0f0"}}),r("path",{ref:"dropgashapon",attrs:{d:"M213.86,432.82c-29.302321,8.961553-45.800905,39.971372-36.86,69.28l106.17-32.39c-4.292454-14.08752-14.008916-25.890902-27.009156-32.810233s-28.21784-8.387015-42.300844-4.079767Z",fill:"#ca8ff7"}})])])])]),r("g",{ref:"XXX_to",attrs:{id:"XXX_to",transform:"translate(443.029083,628.903834)"}},[r("g",{ref:"XXX_tr",attrs:{id:"XXX_tr",transform:"rotate(190)"}},[r("g",{ref:"XXX_ts",attrs:{id:"XXX_ts",transform:"scale(0.623166,0.623166)"}},[r("g",{ref:"XXX",attrs:{id:"XXX",opacity:"0",transform:"translate(-229.998314,-485.659576)"}},[r("path",{attrs:{d:"M246.1,538.51c29.318416-8.944383,45.837761-39.959564,36.9-69.28L176.82,501.62c4.295087,14.079081,14.007202,25.875274,26.999751,32.793507s28.201231,8.391787,42.280249,4.096493Z",fill:"#fcf0f0"}}),r("path",{ref:"dropgashaponm",attrs:{d:"M213.86,432.82c-29.302321,8.961553-45.800905,39.971372-36.86,69.28l106.17-32.39c-4.292454-14.08752-14.008916-25.890902-27.009156-32.810233s-28.21784-8.387015-42.300844-4.079767Z",fill:"#ca8ff7"}})])])])]),r("g",{ref:"e0dj51prVt431_to",attrs:{transform:"translate(260.217438,347.316422)"}},[r("path",{attrs:{d:"M305.34,379.62c17.652362-24.974522,11.769528-59.523538-13.153496-77.248536s-59.489019-11.942776-77.286504,12.928536v0l-.14.21c0,.07-.1.13-.15.2v0c-17.086061,24.972584-11.015586,59.029786,13.646507,76.561033s58.822702,12.072633,76.793493-12.271033v0l.14-.21.15-.2Z",fill:"#cd424d",opacity:"0.17",transform:"translate(-260.217438,-347.316422)"}})]),r("g",{ref:"e0dj51prVt432_to",attrs:{transform:"translate(399.075688,372.407262)"}},[r("path",{attrs:{d:"M401.34,462.62c17.652362-24.974522,11.769528-59.523538-13.153496-77.248536s-59.489019-11.942776-77.286504,12.928536v0c0,.07-.09.14-.14.21s-.1.13-.15.2v0c-17.086061,24.972584-11.015586,59.029786,13.646507,76.561033s58.822702,12.072633,76.793493-12.271033v0l.14-.21.15-.2Z",fill:"#cd424d",opacity:"0.17",transform:"translate(-356.217209,-430.316727)"}})]),r("g",{ref:"e0dj51prVt433_to",attrs:{transform:"translate(131.216187,419.318176)"}},[r("path",{attrs:{d:"M176.34,451.62c17.652362-24.974522,11.769528-59.523538-13.153496-77.248536s-59.489019-11.942776-77.286504,12.928536v0l-.14.21c0,.07-.1.13-.15.2v0c-17.086061,24.972584-11.015586,59.029786,13.646507,76.561033s58.822702,12.072633,76.793493-12.271033v0l.14-.21.15-.2Z",fill:"#cd424d",opacity:"0.17",transform:"translate(-131.216187,-419.318176)"}})]),r("g",{ref:"e0dj51prVt434_to",attrs:{transform:"translate(506.218063,350.315506)"}},[r("path",{attrs:{d:"M551.34,382.62c17.652362-24.974522,11.769528-59.523538-13.153496-77.248536s-59.489019-11.942776-77.286504,12.928536v0c0,.07-.09.14-.14.21s-.1.13-.15.2v0c-17.086061,24.972584-11.015586,59.029786,13.646507,76.561033s58.822702,12.072633,76.793493-12.271033v0l.14-.21.15-.2Z",fill:"#cd424d",opacity:"0.17",transform:"translate(-506.218063,-350.315506)"}})]),r("g",{ref:"e0dj51prVt435_to",attrs:{id:"e0dj51prVt435_to",transform:"translate(653.216156,390.318253)"}},[r("path",{attrs:{d:"M698.34,422.62c17.652362-24.974522,11.769528-59.523538-13.153496-77.248536s-59.489019-11.942776-77.286504,12.928536v0c0,.07-.09.14-.14.21s-.1.13-.15.2v0c-17.086061,24.972584-11.015586,59.029786,13.646507,76.561033s58.822702,12.072633,76.793493-12.271033v0l.14-.21.15-.2Z",fill:"#cd424d",opacity:"0.17",transform:"translate(-653.216156,-390.318253)"}})]),r("g",{attrs:{transform:"translate(-3.825825-2.54611)"}},[r("g",[r("g",{ref:"e0dj51prVt438_tr",attrs:{id:"e0dj51prVt438_tr",transform:"translate(217.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt439_tr",attrs:{id:"e0dj51prVt439_tr",transform:"translate(215.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt440_tr",attrs:{id:"e0dj51prVt440_tr",transform:"translate(213.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt441_tr",attrs:{id:"e0dj51prVt441_tr",transform:"translate(211.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt442_tr",attrs:{id:"e0dj51prVt442_tr",transform:"translate(209.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt443_tr",attrs:{id:"e0dj51prVt443_tr",transform:"translate(207.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt444_tr",attrs:{id:"e0dj51prVt444_tr",transform:"translate(205.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt445_tr",attrs:{id:"e0dj51prVt445_tr",transform:"translate(203.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt446_tr",attrs:{id:"e0dj51prVt446_tr",transform:"translate(201.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt447_tr",attrs:{id:"e0dj51prVt447_tr",transform:"translate(199.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt448_tr",attrs:{id:"e0dj51prVt448_tr",transform:"translate(197.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt449_tr",attrs:{id:"e0dj51prVt449_tr",transform:"translate(195.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt450_tr",attrs:{id:"e0dj51prVt450_tr",transform:"translate(193.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})]),r("g",{ref:"e0dj51prVt451_tr",attrs:{id:"e0dj51prVt451_tr",transform:"translate(191.44842,658.410034) rotate(0)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"scale(0.941504,1) translate(-52.000011,-17.500034)",width:"104"}})])]),r("g",{ref:"e0dj51prVt452_tr",attrs:{id:"e0dj51prVt452_tr",transform:"translate(190.480004,658.409973) rotate(0)"}},[r("g",{attrs:{transform:"translate(-190.480003,-658.409973)"}},[r("rect",{attrs:{fill:"#f6c0bb",height:"35",rx:"6.67",ry:"6.67",transform:"matrix(.941504 0 0 1 141.521793 640.91)",width:"104"}}),r("rect",{attrs:{fill:"#fcf0f0",height:"23",rx:"5.56",ry:"5.56",transform:"translate(149.895001 646.91)",width:"81.17"}})])])]),r("g",{ref:"e0dj51prVt455_to",attrs:{id:"e0dj51prVt455_to",transform:"translate(373.622478,400.964547)"}},[r("g",{ref:"e0dj51prVt455_tr",attrs:{id:"e0dj51prVt455_tr",transform:"rotate(-181.452866)"}},[r("g",{attrs:{transform:"translate(-570.992553,-379.665008)"}},[r("path",{attrs:{d:"M539,424.69c24.98068,17.763336,59.631003,11.916654,77.4-13.06l-90.46-64.34c-17.757514,24.982015-11.911592,59.627831,13.06,77.4Z",fill:"#fcf0f0"}}),r("path",{attrs:{d:"M603,334.64c-24.98068-17.763336-59.631003-11.916654-77.4,13.06L616.06,412c17.736061-24.973353,11.891499-59.593208-13.06-77.36Z",fill:"#9db1ef"}})])])]),r("g",{ref:"e0dj51prVt458_to",attrs:{id:"e0dj51prVt458_to",transform:"translate(180.966931,396.673584)"}},[r("g",{ref:"e0dj51prVt458_tr",attrs:{id:"e0dj51prVt458_tr",transform:"rotate(0)"}},[r("g",{attrs:{transform:"translate(-180.96693,-396.673584)"}},[r("path",{attrs:{d:"M211.56,442.68c12.260649-8.147943,20.781902-20.833155,23.688792-35.264457s-.038755-29.426286-8.188792-41.685543l-92.44,61.45c16.966918,25.525514,51.413147,32.464902,76.94,15.5Z",fill:"#ffe8dc"}}),r("path",{attrs:{d:"M150.39,350.65c-12.2731,8.150042-20.802125,20.845472-23.707673,35.288808s.050824,29.44927,8.217673,41.711192l92.43-61.45c-8.138213-12.268112-20.818045-20.799379-35.248274-23.715808s-29.427959.02105-41.691726,8.165808Z",fill:"#b7dd87"}})])])]),r("g",{ref:"e0dj51prVt461_to",attrs:{id:"e0dj51prVt461_to",transform:"translate(141.981667,482.672684)"}},[r("g",{ref:"e0dj51prVt461_tr",attrs:{id:"e0dj51prVt461_tr",transform:"rotate(0)"}},[r("g",{attrs:{transform:"translate(-141.981666,-482.672684)"}},[r("path",{attrs:{d:"M124.55,430.24c-13.968912,4.640807-25.521573,14.641633-32.115644,27.801642s-7.689188,28.400784-3.044356,42.368358l105.33-35c-4.641026-13.969139-14.641327-25.522416-27.800839-32.118113s-28.400216-7.693498-42.369161-3.051887Z",fill:"#fcf0f0"}}),r("path",{attrs:{d:"M159.41,535.09c29.08129-9.672844,44.817421-41.086907,35.15-70.17l-105.33,35c9.668882,29.090614,41.088509,44.836244,70.18,35.17Z",fill:"#ff7171"}})])])]),r("g",{ref:"e0dj51prVt464_to",attrs:{id:"e0dj51prVt464_to",transform:"translate(277.980438,409.664642)"}},[r("g",{ref:"e0dj51prVt464_tr",attrs:{id:"e0dj51prVt464_tr",transform:"rotate(0)"}},[r("g",{attrs:{transform:"translate(-277.980438,-409.664642)"}},[r("path",{attrs:{d:"M273.9,464.76c14.678793,1.087763,29.188374-3.701026,40.335924-13.3126s18.01964-23.25836,19.104076-37.9374l-110.69-8.19c-1.087763,14.678793,3.701026,29.188374,13.3126,40.335924s23.25836,18.01964,37.9374,19.104076Z",fill:"#fcf0f0"}}),r("path",{attrs:{d:"M282.05,354.57c-14.679409-1.09047-29.190464,3.697356-40.338631,13.309461s-18.01952,23.260492-19.101369,37.940539L333.31,414c2.253559-30.565366-20.694996-57.171542-51.26-59.43Z",fill:"#ff7171"}})])])]),r("g",{ref:"e0dj51prVt467_to",attrs:{id:"e0dj51prVt467_to",transform:"translate(332.97815,482.658722)"}},[r("g",{ref:"e0dj51prVt467_tr",attrs:{id:"e0dj51prVt467_tr",transform:"rotate(0)"}},[r("g",{attrs:{transform:"translate(-332.978149,-482.658722)"}},[r("path",{attrs:{d:"M370.28,523.42c10.860622-9.938203,17.327849-23.784182,17.97862-38.491237s-4.568236-29.070138-14.50862-39.928763l-81.88,75c20.71121,22.589667,55.810604,24.120593,78.41,3.42Z",fill:"#ffe8dc"}}),r("path",{attrs:{d:"M295.67,441.91c-10.858597,9.937834-17.32373,23.782867-17.972636,38.488261s4.571594,29.066079,14.512636,39.921739l81.87-75c-9.944683-10.851597-23.793378-17.307472-38.498646-17.946995s-29.062141,4.589711-39.911354,14.536995Z",fill:"#ffd278"}})])])]),r("g",{ref:"e0dj51prVt470_to",attrs:{id:"e0dj51prVt470_to",transform:"translate(570.992554,379.665009)"}},[r("g",{ref:"e0dj51prVt470_tr",attrs:{id:"e0dj51prVt470_tr",transform:"rotate(0)"}},[r("g",{attrs:{transform:"translate(-570.992553,-379.665008)"}},[r("path",{attrs:{d:"M539,424.69c24.98068,17.763336,59.631003,11.916654,77.4-13.06l-90.46-64.34c-17.757514,24.982015-11.911592,59.627831,13.06,77.4Z",fill:"#ffe8dc"}}),r("path",{attrs:{d:"M603,334.64c-24.98068-17.763336-59.631003-11.916654-77.4,13.06L616.06,412c17.736061-24.973353,11.891499-59.593208-13.06-77.36Z",fill:"#9db1ef"}})])])]),r("g",{ref:"e0dj51prVt473_to",attrs:{id:"e0dj51prVt473_to",transform:"translate(480.974762,405.664139)"}},[r("g",{ref:"e0dj51prVt473_tr",attrs:{id:"e0dj51prVt473_tr",transform:"rotate(0)"}},[r("g",{attrs:{transform:"translate(-480.974762,-405.664138)"}},[r("path",{attrs:{d:"M459.11,354.92c-28.147103,12.136466-41.129722,44.78999-29,72.94L532,383.93c-12.132481-28.123116-44.750789-41.105104-72.89-29.01Z",fill:"#fcf0f0"}}),r("path",{attrs:{d:"M502.84,456.4c28.145812-12.132276,41.129009-44.78278,29-72.93L429.91,427.4c5.824047,13.517976,16.780325,24.168149,30.457866,29.606907s28.955581,5.220443,42.472134-.606907Z",fill:"#ffd278"}})])])]),r("g",{ref:"e0dj51prVt476_to",attrs:{id:"e0dj51prVt476_to",transform:"translate(625.974793,467.677628)"}},[r("g",{ref:"e0dj51prVt476_tr",attrs:{id:"e0dj51prVt476_tr",transform:"rotate(0)"}},[r("g",{attrs:{transform:"translate(-625.974792,-467.677627)"}},[r("path",{attrs:{d:"M573.82,449.43c-4.858502,13.895977-3.997325,29.15291,2.39405,42.413888s17.789303,23.439528,31.68595,28.296112l36.63-104.78c-13.894684-4.858977-29.150512-3.999196-42.411265,2.390195s-23.440139,17.784988-28.298735,31.679805Z",fill:"#fcf0f0"}}),r("path",{attrs:{d:"M678.13,485.89c4.858183-13.894612,3.996737-29.150173-2.394766-42.409541s-17.789316-23.436013-31.685234-28.290459L607.43,520c13.898492,4.85676,29.157371,3.991129,42.417415-2.406326s23.43418-17.802265,28.282585-31.703674Z",fill:"#ca8ff7"}})])])]),r("g",{ref:"e0dj51prVt479_to",attrs:{id:"e0dj51prVt479_to",transform:"translate(527.973084,482.665024)"}},[r("g",{ref:"e0dj51prVt479_tr",attrs:{id:"e0dj51prVt479_tr",transform:"rotate(0)"}},[r("g",{attrs:{transform:"translate(-527.973083,-482.665024)"}},[r("path",{attrs:{d:"M558.17,436.4c-12.325245-8.047739-27.343085-10.868504-41.748469-7.841517s-27.017786,11.653665-35.061531,23.981517l93,60.67c8.040384-12.332086,10.851733-27.353426,7.815414-41.758595s-11.671512-27.013808-24.005414-35.051405Z",fill:"#ffe8dc"}}),r("path",{attrs:{d:"M497.78,528.93c12.325245,8.047739,27.343085,10.868504,41.748469,7.841517s27.017786-11.653665,35.061531-23.981517l-93-60.67c-8.043051,12.331318-10.855957,27.353485-7.81947,41.75945s11.673437,27.014733,24.00947,35.05055Z",fill:"#9db1ef"}}),r("g",{ref:"e0dj51prVt482_to",attrs:{id:"e0dj51prVt482_to",transform:"translate(527.973084,482.665024)"}},[r("g",{ref:"e0dj51prVt482_tr",attrs:{id:"e0dj51prVt482_tr",transform:"rotate(0)"}},[r("g",{attrs:{transform:"translate(-527.973083,-482.665024)"}},[r("path",{attrs:{d:"M558.17,436.4c-12.325245-8.047739-27.343085-10.868504-41.748469-7.841517s-27.017786,11.653665-35.061531,23.981517l93,60.67c8.040384-12.332086,10.851733-27.353426,7.815414-41.758595s-11.671512-27.013808-24.005414-35.051405Z",fill:"#ffe8dc"}}),r("path",{attrs:{d:"M497.78,528.93c12.325245,8.047739,27.343085,10.868504,41.748469,7.841517s27.017786-11.653665,35.061531-23.981517l-93-60.67c-8.043051,12.331318-10.855957,27.353485-7.81947,41.75945s11.673437,27.014733,24.00947,35.05055Z",fill:"#9db1ef"}})])])])])])]),r("g",{ref:"e0dj51prVt485_to",attrs:{id:"e0dj51prVt485_to",transform:"translate(426.972717,482.663727)"}},[r("g",{ref:"e0dj51prVt485_tr",attrs:{id:"e0dj51prVt485_tr",transform:"rotate(0)"}},[r("g",{attrs:{transform:"translate(-426.972717,-482.663727)"}},[r("path",{attrs:{d:"M412.34,429.39c-29.554997,8.122018-46.930504,38.664587-38.81,68.22l107-29.4c-8.11802-29.543997-38.641222-46.920603-68.19-38.82Z",fill:"#fcf0f0"}}),r("path",{attrs:{d:"M441.61,535.94c14.194695-3.898196,26.259326-13.275811,33.539572-26.06969s9.179686-27.955907,5.280428-42.15031l-107,29.4c8.118156,29.538985,38.634442,46.914201,68.18,38.82Z",fill:"#b7dd87"}})])])]),r("g",{ref:"e0dj51prVt488_to",attrs:{id:"e0dj51prVt488_to",transform:"translate(229.998314,485.659577)"}},[r("g",{ref:"e0dj51prVt488_tr",attrs:{id:"e0dj51prVt488_tr",transform:"rotate(0)"}},[r("g",{attrs:{transform:"translate(-229.998314,-485.659576)"}},[r("path",{attrs:{d:"M246.1,538.51c29.318416-8.944383,45.837761-39.959564,36.9-69.28L176.82,501.62c4.295087,14.079081,14.007202,25.875274,26.999751,32.793507s28.201231,8.391787,42.280249,4.096493Z",fill:"#fcf0f0"}}),r("path",{attrs:{d:"M213.86,432.82c-29.302321,8.961553-45.800905,39.971372-36.86,69.28l106.17-32.39c-4.292454-14.08752-14.008916-25.890902-27.009156-32.810233s-28.21784-8.387015-42.300844-4.079767Z",fill:"#ca8ff7"}})])])]),r("path",{attrs:{d:"M728.26,743.54q-71.57-.87-143.14-1.32c-6,0-10.76-5.22-10.57-11.56l17.79-577.61c.19-6.35,5.85-11.41,12.64-11.29q80.52,1.38,161,4c6.79.22,12,5.52,11.54,11.84q-18.81,287.32-37.61,574.64c-.4,6.31-5.62,11.37-11.65,11.3Z",fill:"#f6c0bb",opacity:"0.36"}})])])])])},l=[];let n=["e0dj51prVt431_to","e0dj51prVt432_to","e0dj51prVt433_to","e0dj51prVt434_to","e0dj51prVt435_to","e0dj51prVt438_tr","e0dj51prVt439_tr","e0dj51prVt440_tr","e0dj51prVt441_tr","e0dj51prVt442_tr","e0dj51prVt443_tr","e0dj51prVt444_tr","e0dj51prVt445_tr","e0dj51prVt446_tr","e0dj51prVt447_tr","e0dj51prVt448_tr","e0dj51prVt449_tr","e0dj51prVt450_tr","e0dj51prVt451_tr","e0dj51prVt452_tr","e0dj51prVt455_to","e0dj51prVt455_tr","e0dj51prVt458_to","e0dj51prVt458_tr","e0dj51prVt461_to","e0dj51prVt461_tr","e0dj51prVt464_to","e0dj51prVt464_tr","e0dj51prVt467_to","e0dj51prVt467_tr","e0dj51prVt470_to","e0dj51prVt470_tr","e0dj51prVt473_to","e0dj51prVt473_tr","e0dj51prVt476_to","e0dj51prVt476_tr","e0dj51prVt479_to","e0dj51prVt479_tr","e0dj51prVt482_to","e0dj51prVt482_tr","e0dj51prVt485_to","e0dj51prVt485_tr","e0dj51prVt488_to","e0dj51prVt488_tr"],d=["#ff8271","#ca8ff7","#ffd278","#b7dd87","#9db1ef"];var f=["e0dj51prVt428_to","e0dj51prVt428_tr","e0dj51prVt428_ts","e0dj51prVt428","XXX_to","XXX_tr","XXX_ts","XXX"],c={name:"GashPon",data(){},methods:{doShowAlert(t){this.$bus.$emit("alert:message",t)},Scale(t){"reset"==t&&(this.$refs.main.style.transition="",this.$refs.main.style.transform=""),"rebound-short"==t&&(this.$refs.main.style.transition="1s",this.$refs.main.style.transform="scale(1.05, 0.95)",setTimeout((()=>{this.$refs.main.style.transform="",this.$refs.main.classList.value=`${this.$refs.main.classList.value} default-animation`}),1e3)),"rebound-high"==t&&(this.$refs.main.style.transition="1s",this.$refs.main.style.transform="scale(0.95, 1.05)",setTimeout((()=>{this.$refs.main.style.transform="",this.$refs.main.classList.value=`${this.$refs.main.classList.value} default-animation`}),1e3)),"reduction"==t&&(this.$refs.main.style.transition="1s",this.$refs.main.style.transform="",this.$refs.main.classList.value=`${this.$refs.main.classList.value} default-animation`)},getRandom(t){return Math.floor(Math.random()*t)},getRandomGashapon(){const t=this.getRandom(d.length)-1;this.$refs.dropgashapon.style.fill=d[t],this.$refs.dropgashaponm.style.fill=d[t]},Animation(t){if("play"==t){document.documentElement.style.setProperty("--play-number","1"),document.documentElement.style.setProperty("--play-state","running");for(let t=0;t<n.length;t++)this.$refs[n[t]].style.animationName=""}else if("stop"==t){document.documentElement.style.setProperty("--play-number","0"),document.documentElement.style.setProperty("--play-state","paused");for(let t=0;t<n.length;t++)this.$refs[n[t]].style.animationName="unset"}else if("drop"==t){this.getRandomGashapon(),document.documentElement.style.setProperty("--play-number-drop","1"),document.documentElement.style.setProperty("--play-state-drop","running");for(let t=0;t<f.length;t++)this.$refs[f[t]].style.animationName="";setTimeout((()=>{document.documentElement.style.setProperty("--play-number-drop","0"),document.documentElement.style.setProperty("--play-state-drop","paused");for(let t=0;t<f.length;t++)this.$refs[f[t]].style.animationName="unset"}),3e3)}},eventbus(t){console.log(t)}}},p=c,h=s(1001),m=(0,h.Z)(p,i,l,!1,null,"047933e1",null),u=m.exports,_=function(){var t=this,r=t._self._c;return r("div",{staticClass:"function-menu"},[r("div",{staticClass:"btn btn-menu"},[r("p",[t._v("選單")]),r("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-down"}})],1),r("div",{staticClass:"btn btn-about"},[r("p",[t._v("關於")]),r("font-awesome-icon",{attrs:{icon:"fa-solid fa-info-circle"}})],1),r("div",{staticClass:"btn btn-clear",on:{click:t.reset}},[r("p",[t._v("重抽")]),r("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-rotate-left"}})],1)])},g=[],v={name:"FunctionMenu",methods:{reset(){this.$emit("reset","")}}},j=v,V=(0,h.Z)(j,_,g,!1,null,"10b6a960",null),b=V.exports,y=function(){var t=this,r=t._self._c;return r("div",[r("div",{ref:"modal",staticClass:"modal fade",attrs:{id:"myModal"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered"},[r("div",{staticClass:"modal-content"},[t._m(0),t._m(1),r("div",{staticClass:"modal-footer-x"},[r("button",{staticClass:"btn modal-footer-btn import-btn",attrs:{type:"button"},on:{click:t.confirm}},[t._v(" 確認 ")]),r("button",{staticClass:"btn modal-footer-btn cancel-btn",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(" 取消 ")])])])])]),r("div",{ref:"two",staticClass:"modal fade"},[r("div",{staticClass:"modal-dialog modal-dialog-centered"},[r("div",{staticClass:"modal-content"},[t._m(2),r("div",{staticClass:"modal-body-import"},[r("p",[t._v(t._s(t.results))]),r("input",{staticClass:"import-url",staticStyle:{display:"none"},attrs:{type:"text",value:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTpOQfCGnMmPhaDC9iZrrf9az33x1KX43bICyWKSaYSMOejOdXK5KYc0f3PAh6BGAsPq1bzUNClRZYQ/pub?output=csv"}}),r("div",{staticClass:"warning-text"},[t._v("此欄位不可空白。")])]),r("div",{staticClass:"modal-footer-x"},[r("button",{staticClass:"btn modal-footer-btn import-btn",attrs:{type:"button"},on:{click:t.Closed}},[t._v(" 確認 ")])])])])]),r("div",{ref:"third",staticClass:"modal fade"},[r("div",{staticClass:"modal-dialog modal-dialog-centered"},[r("div",{staticClass:"modal-content"},[t._m(3),r("div",{staticClass:"modal-body-import"},[t._l(t.GameResult,(function(s,e){return r("div",{key:e,staticClass:"column"},[r("div",[t._v(t._s(e+1)+".")]),r("div",[t._v(t._s(s))])])})),r("input",{staticClass:"import-url",staticStyle:{display:"none"},attrs:{type:"text",value:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTpOQfCGnMmPhaDC9iZrrf9az33x1KX43bICyWKSaYSMOejOdXK5KYc0f3PAh6BGAsPq1bzUNClRZYQ/pub?output=csv"}}),r("div",{staticClass:"warning-text"},[t._v("此欄位不可空白。")])],2),r("div",{staticClass:"modal-footer-x"},[r("button",{staticClass:"btn modal-footer-btn import-btn",attrs:{type:"button"},on:{click:t.Closed}},[t._v(" 確認 ")])])])])]),r("div",{ref:"fourth",staticClass:"modal fade"},[r("div",{staticClass:"modal-dialog modal-dialog-centered"},[r("div",{staticClass:"modal-content"},[t._m(4),t._m(5),r("div",{staticClass:"modal-footer-x"},[r("button",{staticClass:"btn modal-footer-btn import-btn",attrs:{type:"button"},on:{click:t.resetlottle}},[t._v(" 確認 ")])])])])])])},C=[function(){var t=this,r=t._self._c;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title"},[t._v("請問確定要抽獎嗎?")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"modal-body-import"},[r("p",[t._v("確定要抽獎嗎?")]),r("input",{staticClass:"import-url",staticStyle:{display:"none"},attrs:{type:"text",value:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTpOQfCGnMmPhaDC9iZrrf9az33x1KX43bICyWKSaYSMOejOdXK5KYc0f3PAh6BGAsPq1bzUNClRZYQ/pub?output=csv"}}),r("div",{staticClass:"warning-text"},[t._v("此欄位不可空白。")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title"},[t._v("轉蛋結果?")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title"},[t._v("遊戲紀錄")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title"},[t._v("確定要重設嗎?")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"modal-body-import"},[r("input",{staticClass:"import-url",staticStyle:{display:"none"},attrs:{type:"text",value:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTpOQfCGnMmPhaDC9iZrrf9az33x1KX43bICyWKSaYSMOejOdXK5KYc0f3PAh6BGAsPq1bzUNClRZYQ/pub?output=csv"}}),r("div",{staticClass:"warning-text"},[t._v("此欄位不可空白。")])])}],M=s(3569),w=s.n(M);let Z="",$="",x="",X="";var L={name:"BoostrapModal",props:{classes:String,results:String,GameResult:Array},data(){return{modal:null}},watch:{classes(t){"L1"===t?(Z.hide(),$.show(),x.hide(),X.hide()):"L2"===t?(Z.hide(),$.hide(),x.show(),X.hide()):"L3"===t&&(Z.hide(),$.hide(),x.hide(),X.show())}},created(){this.$bus.$on("alert:message",(t=>{this.showModal(),console.log(t)})),this.$bus.$on("reset",(t=>{console.log(t)}))},methods:{Closed(){$.hide(),x.hide(),this.$emit("dialogconfirm")},resetlottle(){X.hide(),this.$emit("resetlottle","")},showModal(){Z.show()},confirm(){this.$emit("test"),Z.hide()},hideModal(){}},mounted(){console.log(this.$refs.modal),$=new(w())(this.$refs.two),Z=new(w())(this.$refs.modal),x=new(w())(this.$refs.third),X=new(w())(this.$refs.fourth),console.log(x)},beforeDestroy:function(){this.$bus.$off("alert:message"),this.$bus.$off("reset")}},P=L,q=(0,h.Z)(P,y,C,!1,null,"1d316ff6",null),A=q.exports;let S=0,O=0,G=0,k=0;var E={name:"App",components:{GashPon:u,FunctionMenu:b,BoostrapModal:A},data(){return{Lottle:"請點扭蛋機開始遊戲",isPlaying:!1,mousestaste:!1,modalstate:!1,playtimes:0,LottleArray:[],showclass:"",results:"",GameResult:[],lottlearray:[{title:"A賞",count:3},{title:"B賞",count:3},{title:"C賞",count:3},{title:"D賞",count:6},{title:"E賞",count:6},{title:"F賞",count:28},{title:"G賞",count:31}]}},mounted(){this.init()},watch:{LottleArray(t){0===t.length&&this.init()}},methods:{reset(){this.showclass="L3"},init(){this.LottleArray=[],this.lottlearray.forEach((t=>{for(let r=0;r<=t.count-1;r++)this.LottleArray.push(t.title)}))},dialogconfirm(){this.mousestaste=!1,this.modalstate=!1,this.showclass=""},mouseDown(t){this.modalState||(this.gashaponScale("reset"),this.gashaponAnimation("stop"),console.log(S),S=t.pageY,this.mousestaste=!0)},gashaponScale(t){this.$refs.gashpon.Scale(t)},gashaponAnimation(t){this.$refs.gashpon.Animation(t)},mouseMove(t){if(this.mousestaste&&!this.modalstate){this.$refs.gashpon.$refs.main.classList.remove("default-animation"),O=S-t.pageY,G=-(5e-4*O-1),k=.001*O+1;const r="scale("+G+","+k+")";this.$refs.gashpon.$refs.main.style.transform=r,O<0&&(console.log(O),this.$refs.energy.style.transform="scaleX("+O/-350+")"),this.Lottle=O<-350?"可放開轉蛋機":"請往下拉動"}},getRandom(t){return Math.floor(Math.random()*t)},mouseUp(){this.mousestaste&&(O<=0&&O<-100?(this.gashaponScale("rebound-high"),this.Lottle="按住螢幕滑動"):O>0&&O>100?(this.gashaponScale("rebound-short"),this.Lottle="按住螢幕滑動"):(this.gashaponScale("reduction"),this.Lottle="按住螢幕滑動"),(O<-350||O>350)&&(this.gashaponAnimation("play"),setTimeout((()=>{this.gashaponAnimation("drop")}),1250),this.Lottle="顯示結果",this.playtimes++,this.modalstate=!0,setTimeout((()=>{this.showModal()}),3e3))),this.mousestaste=!1,O=0,console.log(this.mousestaste)},showModal(){this.showclass="L1";const t=this.getRandom(this.LottleArray.length-1);var r=this.LottleArray[t];this.LottleArray.splice(t,1),this.results=r,this.GameResult.push(r)},test(){this.Lottle="按住螢幕往下滑動",this.isPlaying=!0,this.$refs.main.addEventListener("mousedown",this.mouseDown),this.$refs.main.addEventListener("touchstart",this.mouseDown),this.$refs.main.addEventListener("mousemove",this.mouseMove),this.$refs.main.addEventListener("touchmove",this.mouseMove),this.$refs.main.addEventListener("mouseup",this.mouseUp),this.$refs.main.addEventListener("mouseleave",this.mouseUp),this.$refs.main.addEventListener("touchend",this.mouseUp)}}},K=E,R=(0,h.Z)(K,a,o,!1,null,null,null),Y=R.exports,T=(s(5809),s(8145)),Q=s(1449),B=s(5404);T.vI.add(B.gc2),T.vI.add(B.sqG),T.vI.add(B.paY),e.ZP.component("font-awesome-icon",Q.GN),e.ZP.config.productionTip=!1,e.ZP.prototype.$bus=new e.ZP,new e.ZP({render:t=>t(Y)}).$mount("#app")}},r={};function s(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(r,e,a,o){if(!e){var i=1/0;for(f=0;f<t.length;f++){e=t[f][0],a=t[f][1],o=t[f][2];for(var l=!0,n=0;n<e.length;n++)(!1&o||i>=o)&&Object.keys(s.O).every((function(t){return s.O[t](e[n])}))?e.splice(n--,1):(l=!1,o<i&&(i=o));if(l){t.splice(f--,1);var d=a();void 0!==d&&(r=d)}}return r}o=o||0;for(var f=t.length;f>0&&t[f-1][2]>o;f--)t[f]=t[f-1];t[f]=[e,a,o]}}(),function(){s.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(r,{a:r}),r}}(),function(){s.d=function(t,r){for(var e in r)s.o(r,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(r){return 0===t[r]};var r=function(r,e){var a,o,i=e[0],l=e[1],n=e[2],d=0;if(i.some((function(r){return 0!==t[r]}))){for(a in l)s.o(l,a)&&(s.m[a]=l[a]);if(n)var f=n(s)}for(r&&r(e);d<i.length;d++)o=i[d],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(f)},e=self["webpackChunklottleforvue"]=self["webpackChunklottleforvue"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=s.O(void 0,[998],(function(){return s(2603)}));e=s.O(e)})();
//# sourceMappingURL=app.387cb089.js.map