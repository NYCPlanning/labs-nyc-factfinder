import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('population-pyramid', 'Integration | Component | population pyramid', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const data = {"pyramidData":[{"group":"pop0t5","male":{"sum":857,"m":221.598736458492,"comparison_sum":284597,"comparison_m":231,"year":"y2011_2015","variable":"mpop0t5","cartodb_id":129,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop0t5","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":15.7188422509065,"comparison_cv":0.0493418876217576,"percent":0.0437,"percent_m":0.0115354442038453,"comparison_percent":0.0338,"comparison_percent_m":0.000027412726364148,"significant":true,"percent_significant":false},"female":{"sum":490,"m":166.463209148448,"comparison_sum":271214,"comparison_m":217,"year":"y2011_2015","variable":"fpop0t5","cartodb_id":147,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop0t5","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":20.6517224922087,"comparison_cv":0.0486386741160196,"percent":0.025,"percent_m":0.00859362900940947,"comparison_percent":0.0322,"comparison_percent_m":0.0000257513490087451,"significant":true,"percent_significant":false}},{"group":"pop5t9","male":{"sum":542,"m":155.505626907839,"comparison_sum":247793,"comparison_m":2375,"year":"y2011_2015","variable":"mpop5t9","cartodb_id":130,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop5t9","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":17.4413830244663,"comparison_cv":0.582651243965926,"percent":0.0277,"percent_m":0.00806510022992231,"comparison_percent":0.0294,"comparison_percent_m":0.000281840801362994,"significant":true,"percent_significant":false},"female":{"sum":312,"m":129.703508048163,"comparison_sum":234974,"comparison_m":2728,"year":"y2011_2015","variable":"fpop5t9","cartodb_id":148,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop5t9","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":25.2715119725983,"comparison_cv":0.705762621657708,"percent":0.0159,"percent_m":0.00667020069513347,"comparison_percent":0.0279,"comparison_percent_m":0.000323731244681367,"significant":true,"percent_significant":true}},{"group":"pop10t14","male":{"sum":473,"m":166.451194047985,"comparison_sum":235884,"comparison_m":2324,"year":"y2011_2015","variable":"mpop10t14","cartodb_id":131,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop10t14","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":21.3924178011381,"comparison_cv":0.598924029373255,"percent":0.0241,"percent_m":0.00858625859742282,"comparison_percent":0.028,"comparison_percent_m":0.000275788640996883,"significant":true,"percent_significant":false},"female":{"sum":627,"m":175.368184115592,"comparison_sum":229763,"comparison_m":2722,"year":"y2011_2015","variable":"fpop10t14","cartodb_id":149,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop10t14","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":17.002679243136,"comparison_cv":0.720181772609431,"percent":0.032,"percent_m":0.00910286352119818,"comparison_percent":0.0273,"comparison_percent_m":0.000323019225814766,"significant":true,"percent_significant":false}},{"group":"pop15t19","male":{"sum":762,"m":196.42555841845,"comparison_sum":245953,"comparison_m":253,"year":"y2011_2015","variable":"mpop15t19","cartodb_id":132,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop15t19","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":15.6702932148202,"comparison_cv":0.0625320252638774,"percent":0.0389,"percent_m":0.0102262835603774,"comparison_percent":0.0292,"comparison_percent_m":0.0000300234622083526,"significant":true,"percent_significant":false},"female":{"sum":476,"m":128.75558240325,"comparison_sum":241139,"comparison_m":287,"year":"y2011_2015","variable":"fpop15t19","cartodb_id":150,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop15t19","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":16.4434602440869,"comparison_cv":0.0723516665103459,"percent":0.0243,"percent_m":0.00669111622462554,"comparison_percent":0.0286,"comparison_percent_m":0.0000340582357857597,"significant":true,"percent_significant":false}},{"group":"pop20t24","male":{"sum":582,"m":173.968387932981,"comparison_sum":309572,"comparison_m":3056,"year":"y2011_2015","variable":"mpop20t24","cartodb_id":133,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop20t24","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":18.1711097810694,"comparison_cv":0.600102967929406,"percent":0.0297,"percent_m":0.00901125780718388,"comparison_percent":0.0367,"comparison_percent_m":0.000362654942722236,"significant":true,"percent_significant":false},"female":{"sum":792,"m":217.216481879253,"comparison_sum":324530,"comparison_m":2961,"year":"y2011_2015","variable":"fpop20t24","cartodb_id":151,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop20t24","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":16.6725370635883,"comparison_cv":0.554648260561427,"percent":0.0404,"percent_m":0.0112826804996116,"comparison_percent":0.0385,"comparison_percent_m":0.000351381310667716,"significant":true,"percent_significant":false}},{"group":"pop25t29","male":{"sum":897,"m":252.881395124276,"comparison_sum":371666,"comparison_m":0,"year":"y2011_2015","variable":"mpop25t29","cartodb_id":134,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop25t29","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":17.1379366631952,"comparison_cv":0,"percent":0.0458,"percent_m":0.013122878194159,"comparison_percent":0.0441,"comparison_percent_m":0,"significant":true,"percent_significant":false},"female":{"sum":869,"m":239.225834725265,"comparison_sum":401050,"comparison_m":151,"year":"y2011_2015","variable":"fpop25t29","cartodb_id":152,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop25t29","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":16.7348721917912,"comparison_cv":0.0228882466200994,"percent":0.0443,"percent_m":0.0124242765213384,"comparison_percent":0.0476,"comparison_percent_m":0.0000179191414761314,"significant":true,"percent_significant":false}},{"group":"pop30t34","male":{"sum":964,"m":230.317172612031,"comparison_sum":344091,"comparison_m":194,"year":"y2011_2015","variable":"mpop30t34","cartodb_id":135,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop30t34","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":14.5239044894015,"comparison_cv":0.0342738202100863,"percent":0.0492,"percent_m":0.0120294562402985,"comparison_percent":0.0408,"comparison_percent_m":0.0000230219433534403,"significant":true,"percent_significant":false},"female":{"sum":842,"m":185.962361783238,"comparison_sum":363827,"comparison_m":185,"year":"y2011_2015","variable":"fpop30t34","cartodb_id":153,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop30t34","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":13.4260128788193,"comparison_cv":0.0309108466603708,"percent":0.043,"percent_m":0.00975041993368153,"comparison_percent":0.0432,"comparison_percent_m":0.0000219539150535385,"significant":true,"percent_significant":false}},{"group":"pop35t39","male":{"sum":588,"m":164.073154415949,"comparison_sum":294032,"comparison_m":2813,"year":"y2011_2015","variable":"mpop35t39","cartodb_id":136,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop35t39","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":16.9626733676519,"comparison_cv":0.581579690352335,"percent":0.03,"percent_m":0.00851724788397939,"comparison_percent":0.0349,"comparison_percent_m":0.000333818178624885,"significant":true,"percent_significant":false},"female":{"sum":855,"m":198.534631739654,"comparison_sum":309812,"comparison_m":3127,"year":"y2011_2015","variable":"fpop35t39","cartodb_id":154,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop35t39","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":14.1157597354844,"comparison_cv":0.613569472487619,"percent":0.0436,"percent_m":0.0103833113400399,"comparison_percent":0.0368,"comparison_percent_m":0.00037108049931035,"significant":true,"percent_significant":false}},{"group":"pop40t44","male":{"sum":691,"m":179.016758992001,"comparison_sum":276208,"comparison_m":2836,"year":"y2011_2015","variable":"mpop40t44","cartodb_id":137,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop40t44","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":15.7488824171832,"comparison_cv":0.624171695988064,"percent":0.0353,"percent_m":0.00931812015027493,"comparison_percent":0.0328,"comparison_percent_m":0.00033654758428019,"significant":true,"percent_significant":false},"female":{"sum":566,"m":143.136298680663,"comparison_sum":295365,"comparison_m":3165,"year":"y2011_2015","variable":"fpop40t44","cartodb_id":155,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop40t44","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":15.3733122837878,"comparison_cv":0.651401539808275,"percent":0.0289,"percent_m":0.00745767090798392,"comparison_percent":0.0351,"comparison_percent_m":0.000375589952132158,"significant":true,"percent_significant":false}},{"group":"pop45t49","male":{"sum":740,"m":171.090619263594,"comparison_sum":270152,"comparison_m":163,"year":"y2011_2015","variable":"mpop45t49","cartodb_id":138,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop45t49","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":14.0549264161336,"comparison_cv":0.0366786645653767,"percent":0.0378,"percent_m":0.00894986429144902,"comparison_percent":0.0321,"comparison_percent_m":0.0000193431792093339,"significant":true,"percent_significant":false},"female":{"sum":588,"m":148.515992404859,"comparison_sum":291539,"comparison_m":249,"year":"y2011_2015","variable":"fpop45t49","cartodb_id":156,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop45t49","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":15.3542989893988,"comparison_cv":0.0519202512031033,"percent":0.03,"percent_m":0.00773835510238151,"comparison_percent":0.0346,"comparison_percent_m":0.0000295487829639518,"significant":true,"percent_significant":false}},{"group":"pop50t54","male":{"sum":709,"m":149.646249535363,"comparison_sum":263502,"comparison_m":250,"year":"y2011_2015","variable":"mpop50t54","cartodb_id":139,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop50t54","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":12.8307989364157,"comparison_cv":0.0576753435991292,"percent":0.0362,"percent_m":0.00786597506299354,"comparison_percent":0.0313,"comparison_percent_m":0.000029667452775052,"significant":true,"percent_significant":false},"female":{"sum":805,"m":175.171344688565,"comparison_sum":292221,"comparison_m":166,"year":"y2011_2015","variable":"fpop50t54","cartodb_id":157,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop50t54","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":13.2282161028953,"comparison_cv":0.0345327180809536,"percent":0.0411,"percent_m":0.00919194410085836,"comparison_percent":0.0347,"comparison_percent_m":0.0000196991886426345,"significant":true,"percent_significant":false}},{"group":"pop55t59","male":{"sum":458,"m":115.63736420379,"comparison_sum":236616,"comparison_m":2459,"year":"y2011_2015","variable":"mpop55t59","cartodb_id":140,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop55t59","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":15.3485305748251,"comparison_cv":0.631754753164503,"percent":0.0234,"percent_m":0.00602532265178497,"comparison_percent":0.0281,"comparison_percent_m":0.000291809065495411,"significant":true,"percent_significant":false},"female":{"sum":634,"m":160.589538887189,"comparison_sum":271297,"comparison_m":2681,"year":"y2011_2015","variable":"fpop55t59","cartodb_id":158,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop55t59","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":15.3979211344183,"comparison_cv":0.600739128719652,"percent":0.0324,"percent_m":0.0083664712833946,"comparison_percent":0.0322,"comparison_percent_m":0.000318153763559658,"significant":true,"percent_significant":false}},{"group":"pop60t64","male":{"sum":478,"m":138.491877018113,"comparison_sum":202146,"comparison_m":2767,"year":"y2011_2015","variable":"mpop60t64","cartodb_id":141,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop60t64","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":17.6128851239476,"comparison_cv":0.832104948552488,"percent":0.0244,"percent_m":0.00718047227756574,"comparison_percent":0.024,"comparison_percent_m":0.000328359367314275,"significant":true,"percent_significant":false},"female":{"sum":551,"m":183.575597506858,"comparison_sum":246095,"comparison_m":2929,"year":"y2011_2015","variable":"fpop60t64","cartodb_id":159,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop60t64","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":20.2533771155907,"comparison_cv":0.723520230992912,"percent":0.0281,"percent_m":0.00948139552205266,"comparison_percent":0.0292,"comparison_percent_m":0.000347583876712509,"significant":true,"percent_significant":false}},{"group":"pop65t69","male":{"sum":355,"m":117.418056533056,"comparison_sum":148783,"comparison_m":2156,"year":"y2011_2015","variable":"mpop65t69","cartodb_id":142,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop65t69","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":20.1066923298183,"comparison_cv":0.880905948846535,"percent":0.0181,"percent_m":0.00606552530166346,"comparison_percent":0.0177,"comparison_percent_m":0.000255852112732048,"significant":true,"percent_significant":false},"female":{"sum":542,"m":149.435604860421,"comparison_sum":193779,"comparison_m":2741,"year":"y2011_2015","variable":"fpop65t69","cartodb_id":160,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop65t69","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":16.7605743514868,"comparison_cv":0.859877178732624,"percent":0.0277,"percent_m":0.00776057687080467,"comparison_percent":0.023,"comparison_percent_m":0.00032527395222567,"significant":true,"percent_significant":false}},{"group":"pop70t74","male":{"sum":298,"m":114.293481878889,"comparison_sum":106365,"comparison_m":1659,"year":"y2011_2015","variable":"mpop70t74","cartodb_id":143,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop70t74","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":23.3152081513819,"comparison_cv":0.948160239080405,"percent":0.0152,"percent_m":0.00588569201065754,"comparison_percent":0.0126,"comparison_percent_m":0.000196873216615245,"significant":true,"percent_significant":false},"female":{"sum":191,"m":104.412642912628,"comparison_sum":143171,"comparison_m":1885,"year":"y2011_2015","variable":"fpop70t74","cartodb_id":161,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop70t74","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":33.2317964679986,"comparison_cv":0.800369248335874,"percent":0.0097,"percent_m":0.005351967002876,"comparison_percent":0.017,"comparison_percent_m":0.000223692593923892,"significant":true,"percent_significant":true}},{"group":"pop75t79","male":{"sum":150,"m":68.2788400604463,"comparison_sum":77525,"comparison_m":1386,"year":"y2011_2015","variable":"mpop75t79","cartodb_id":144,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop75t79","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":27.6712624358445,"comparison_cv":1.08681482294661,"percent":0.0077,"percent_m":0.00350681625008563,"comparison_percent":0.0092,"comparison_percent_m":0.000164476358184888,"significant":true,"percent_significant":false},"female":{"sum":274,"m":100.044989879554,"comparison_sum":108377,"comparison_m":1741,"year":"y2011_2015","variable":"fpop75t79","cartodb_id":162,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop75t79","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":22.1962127836074,"comparison_cv":0.976552831886823,"percent":0.014,"percent_m":0.00515679047095439,"comparison_percent":0.0129,"comparison_percent_m":0.000206604141125462,"significant":true,"percent_significant":false}},{"group":"pop80t84","male":{"sum":99,"m":65.2839949757979,"comparison_sum":53038,"comparison_m":1390,"year":"y2011_2015","variable":"mpop80t84","cartodb_id":145,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop80t84","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":40.0871910446703,"comparison_cv":1.59316867610319,"percent":0.0051,"percent_m":0.00334158224524749,"comparison_percent":0.0063,"comparison_percent_m":0.000164951037429289,"significant":true,"percent_significant":false},"female":{"sum":156,"m":65.6429737291052,"comparison_sum":88235,"comparison_m":1512,"year":"y2011_2015","variable":"fpop80t84","cartodb_id":163,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop80t84","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":25.5798354489538,"comparison_cv":1.04170560001157,"percent":0.008,"percent_m":0.0033751618344856,"comparison_percent":0.0105,"comparison_percent_m":0.000179428754383514,"significant":true,"percent_significant":false}},{"group":"pop85pl","male":{"sum":117,"m":57.4630315942346,"comparison_sum":47121,"comparison_m":1178,"year":"y2011_2015","variable":"mpop85pl","cartodb_id":146,"the_geom":null,"the_geom_webmercator":null,"variablename":"MPop85pl","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":29.856353931486,"comparison_cv":1.51972458668619,"percent":0.006,"percent_m":0.00294861014045738,"comparison_percent":0.0056,"comparison_percent_m":0.000139793037476045,"significant":true,"percent_significant":false},"female":{"sum":268,"m":102.401171868295,"comparison_sum":105311,"comparison_m":1727,"year":"y2011_2015","variable":"fpop85pl","cartodb_id":164,"the_geom":null,"the_geom_webmercator":null,"variablename":"FPop85pl","producttype":"ACS","dataset":"2006-2010, 2011-2015","profile":"demographic","category":"poppyramid_only","_order":"not in profile","base":"Pop","unittype":"basic","base_sum":19598,"base_m":1023.30396266212,"base_join":"Pop","base_year":"Y2011-2015","comparison_base_sum":8426743,"comparison_base_m":0,"comparison_base_join":"Pop","comparison_base_year":"Y2011-2015","cv":23.2275942177323,"comparison_cv":0.99690253090001,"percent":0.0137,"percent_m":0.0052736446074381,"comparison_percent":0.0125,"comparison_percent_m":0.000204942763770059,"significant":true,"percent_significant":false}}]}

  this.set('data', data);

  this.render(hbs`{{population-pyramid data=data}}`);

  assert.equal(this.$().text().split('\n')[1], '  Hover over bars for details about each age cohort');
});
