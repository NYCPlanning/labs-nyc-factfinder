/* eslint-env node */


module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'labs-nyc-factfinder',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },
    'mapbox-gl': {
      accessToken: 'pk.eyJ1IjoiY3dob25nbnljIiwiYSI6ImNpczF1MXdrdjA4MXcycXA4ZGtyN2x5YXIifQ.3HGyME8tBs6BnljzUVIt4Q',
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  ENV.DEFAULT_SELECTION = {
    type: 'FeatureCollection',
    features: [],
  };

  if (environment === 'development') {
    ENV.DEFAULT_SELECTION = { type: 'FeatureCollection', features: [{ type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-73.86898040771484, 40.70174014952019], [-73.86951684951782, 40.701610010408814], [-73.86932373046875, 40.69934880275997], [-73.87067556381226, 40.697852133899346], [-73.86891603469849, 40.69515153762086], [-73.87402296066284, 40.69419166076716], [-73.87951612472534, 40.691149247837586], [-73.88378620147705, 40.68786263500829], [-73.8845157623291, 40.68669112986353], [-73.88807773590088, 40.68529180506212], [-73.88962268829346, 40.684234156356524], [-73.89015913009644, 40.68499891940863], [-73.8925838470459, 40.683501928189855], [-73.89417171478271, 40.68529180506212], [-73.8956093788147, 40.68371346159762], [-73.89646768569946, 40.6823303463911], [-73.90116691589355, 40.68787890576806], [-73.90041589736938, 40.68818804944925], [-73.9018964767456, 40.69108416796857], [-73.90058755874634, 40.69240202292704], [-73.90075922012329, 40.69248337114442], [-73.9002013206482, 40.693394464393776], [-73.89859199523926, 40.69389881422816], [-73.89736890792847, 40.694110314635424], [-73.89691829681396, 40.69385000634654], [-73.89743328094482, 40.693296847855834], [-73.89769077301025, 40.693361925563664], [-73.8969612121582, 40.69194647107432], [-73.89475107192993, 40.69264606728123], [-73.89327049255371, 40.692206786800114], [-73.8935923576355, 40.69308534486629], [-73.89397859573364, 40.693069075377764], [-73.89558792114258, 40.69398016061811], [-73.89507293701172, 40.69459838993595], [-73.89245510101318, 40.69523288248129], [-73.89189720153809, 40.69432181437131], [-73.88818502426147, 40.69505392365721], [-73.8886570930481, 40.695834831361736], [-73.8864254951477, 40.6964530434696], [-73.88734817504883, 40.69702244428322], [-73.88779878616333, 40.69767318211109], [-73.88818502426147, 40.698860762261035], [-73.88771295547485, 40.6996741611062], [-73.88432264328003, 40.700194731154795], [-73.88282060623169, 40.70068276188056], [-73.88174772262573, 40.69954401795843], [-73.876211643219, 40.70159374300201], [-73.87640476226807, 40.70229323790687], [-73.8691520690918, 40.702895122991606], [-73.86898040771484, 40.70174014952019]]] }, properties: { boroct2010: '4056100', ct2010: '056100', geolabel: '561', geoid: '4056100', ntacode: 'QN99' } }, { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-73.91303300857544, 40.713337776624115], [-73.91035079956055, 40.711727567666486], [-73.9101791381836, 40.711255882920966], [-73.9099645614624, 40.71106070204891], [-73.91552209854126, 40.70562793820591], [-73.92189502716064, 40.70940164153686], [-73.92075777053833, 40.71054021692632], [-73.92155170440674, 40.71104443695043], [-73.92223834991455, 40.71284983862793], [-73.92404079437256, 40.71400461943608], [-73.91303300857544, 40.713337776624115]]] }, properties: { boroct2010: '4053900', ct2010: '053900', geolabel: '539', geoid: '4053900', ntacode: 'QN20' } }, { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-73.90528678894043, 40.725957863591645], [-73.90485763549805, 40.72581151031747], [-73.90421390533447, 40.7257627258212], [-73.9045786857605, 40.72301447478375], [-73.90440702438354, 40.72169722547659], [-73.90410661697388, 40.721030459717184], [-73.9049220085144, 40.72052631531858], [-73.90818357467651, 40.72039621291847], [-73.90831232070923, 40.720461264150316], [-73.91131639480591, 40.71963185618236], [-73.9129900932312, 40.72159965041678], [-73.91384840011597, 40.72290063945297], [-73.91256093978882, 40.723242144861274], [-73.90741109848022, 40.72720998400365], [-73.90528678894043, 40.725957863591645]]] }, properties: { boroct2010: '4053100', ct2010: '053100', geolabel: '531', geoid: '4053100', ntacode: 'QN30' } }, { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-73.88724088668823, 40.721274399184466], [-73.89423608779907, 40.717924219001446], [-73.89457941055298, 40.7183795931995], [-73.89286279678345, 40.719209016770435], [-73.89475107192993, 40.721583387892935], [-73.89427900314331, 40.721778537917146], [-73.89496564865112, 40.722819328383196], [-73.89018058776855, 40.72494964561906], [-73.88724088668823, 40.721274399184466]]] }, properties: { boroct2010: '4066701', ct2010: '066701', geolabel: '667.01', geoid: '4066701', ntacode: 'QN21' } }, { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-73.89503002166748, 40.712475750409226], [-73.88842105865479, 40.71226430831243], [-73.88730525970459, 40.71055648214798], [-73.88814210891724, 40.710345033956486], [-73.88784170150757, 40.7098896048019], [-73.88861417770386, 40.70966188905655], [-73.88822793960571, 40.70889740907319], [-73.88938665390015, 40.708555830073635], [-73.88930082321167, 40.70790519856075], [-73.8855242729187, 40.70644125441473], [-73.88554573059082, 40.70614846172376], [-73.8865327835083, 40.70622979315593], [-73.88912916183472, 40.70559540535095], [-73.89127492904663, 40.703594604229664], [-73.89279842376709, 40.70196789235325], [-73.89271259307861, 40.70185402103405], [-73.89344215393066, 40.702179367143856], [-73.89127492904663, 40.7050748775105], [-73.89181137084961, 40.706392455722295], [-73.89633893966675, 40.705270075927444], [-73.89756202697754, 40.707758805594295], [-73.89936447143555, 40.710328768683155], [-73.90058755874634, 40.712703456531784], [-73.89503002166748, 40.712475750409226]]] }, properties: { boroct2010: '4061301', ct2010: '061301', geolabel: '613.01', geoid: '4061301', ntacode: 'QN20' } }, { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-73.93616437911987, 40.68862735642398], [-73.94193649291992, 40.687960259507435], [-73.94251585006714, 40.69088892798021], [-73.93676519393921, 40.69155599557874], [-73.93616437911987, 40.68862735642398]]] }, properties: { boroct2010: '3027900', ct2010: '027900', geolabel: '279', geoid: '3027900', ntacode: 'BK35' } }] };
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
