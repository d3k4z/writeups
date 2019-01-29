#!/usr/bin/node
//pcapalyzer - The web based packet analyzer
const cluster = require('cluster');
const os = require('os');
const path = require('path');
const fs = require('fs');
const http2 = require('http2');
const koa = require('koa');
const Router = require('koa-router');
const mime = require('mime-types');
const mongoose = require('mongoose');
const koaBody = require('koa-body');
const cookie = require('koa-cookie');
const execSync = require('child_process').execSync;
const execAsync = require('child_process').exec;
const redis = require("redis");
const redis_connection = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(redis_connection.get).bind(redis_connection);
const setAsync = promisify(redis_connection.set).bind(redis_connection);
const delAsync = promisify(redis_connection.del).bind(redis_connection);
const sha1 = require('sha1');
require('events').EventEmitter.defaultMaxListeners = Infinity;
const log = console.log;
const print = log;
const dev_mode = true;
const key_log_path = ( !dev_mode || __dirname + process.env.DEV + process.env.SSLKEYLOGFILE )
const options = {
  key: fs.readFileSync(__dirname + '/keys/server.key'),
  cert: fs.readFileSync(__dirname + '/keys/server.crt'),
  http2: {
    protocol: 'h2',         // HTTP2 only. NOT HTTP1 or HTTP1.1
    protocols: [ 'h2' ],
  },
  keylog : key_log_path     //used for dev mode to view traffic. Stores a few minutes worth at a time
};

//==================================
//Standard Mongoose Connection Stuff
//==================================
const app = new koa();
const router = new Router();
router.use(cookie.default());
app.use(router.routes()).use(router.allowedMethods());
mongoose.connect('mongodb://localhost:27017/packalyzer',{ useNewUrlParser: true });
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  is_admin: { type: Boolean, required: true },
  captures: { type: Array, required: true },
});
const Users = mongoose.model('Users', userSchema);
//Sets Users to be allowed to sniff or just admins
const Allow_All_To_Sniff = true;

//==================================
//Standard Mongoose Connection Stuff
//==================================

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
      if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
      }
  }
  return this;
};
var uniqueArray = function(arrArg) {
  return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos;
  });
};
function load_envs() {
  var dirs = []
  var env_keys = Object.keys(process.env)
  for (var i=0; i < env_keys.length; i++) {
    if (typeof process.env[env_keys[i]] === "string" ) {
      dirs.push(( "/"+env_keys[i].toLowerCase()+'/*') )
    }
  }
  return uniqueArray(dirs)
}
if (dev_mode) {
    //Can set env variable to open up directories during dev
    const env_dirs = load_envs();
} else {
    const env_dirs = ['/pub/','/uploads/'];
}

!"b�T\y�x��۞�N�����/9��ȿ��r#�S~=yy�@�W�4N������9�vL>i���=T�(���l�6}��M�SS0G��[�tn�iS�@�tn��Y����h�&jv@k=t�5bUds3��,��h`����������&��������/p�� X͇���BC2D�rٸ$}.��٩,d��0dϖ��yK�#^��H�Χ|��i�b��6��,���������y8�]Onڥ��ä�Q�#Xy��͟N+h���)��1�[�V�]?��!�yƩ΃J ���f��� (�ͦ������{�'ґ�b{t�U +���^�{p#vD1�ש?����Ӕuj����$l��hd�}��J�ǚ���F�1#�0.oN���([�ɩ��[Ͻ��0`�\ � ��6�ҷw��D�){��Y)�7x_�{�n-�����b�#�F}J&oF}��i����my�:N���f��N�,)'jbt�S����%}Q"gqGh��hNҢ�ܽێ2<�I�P�97�6����O0��ဏFf�u �9sOꑜiH'�.��-����?�_:��<m�o����7����Qr;+��;
�Ы��Y#MO�%�a��Ѩ3���#�C6��.g�^����T^d�g�0��`�q*y=+7�!Ơ�,. �a��r*�V�'R�É�������v�a��;�*c�+����q����B`옧�l�~��N���g�j�/c �e���C��Z��~V)?z
�f2-<񪞌_�b@����+ 4H�ȶ����,h�uV�(����'����X�Y�{���/��ɷ�\�ZV���a�C�+ipJ�`ò��q� �d8��ZD*�7 ��EhC��YrC4����KڊIp����{�s���-�������y���KU�Ġqn�L��ף� ]��ג`!y:�7�V��͌~�k��|
�O���� ���q����Uk+�v�Cd�$1�=���:pޑLH6Z���t���?��̫D�pR��܃��t����.ƣe�/E��Z�E��d�j�k�9��,��HC��)A�l�xGS�0�������R�D��yTq{U��e{���O`��d��s�vg�W��Tس��U��*� ��y�z��4^����v>Bd�jG#3�#6����4��oQ�9s�Pc�}����v��5��=�aF�qʌk&X*b}���AMA9�bo�$����H��+�<��̞Py�j���3Uf-(����w����,{���& �v$۬j����_�~���7��@���K�E-�#��>E����������ʵ���tN_m׶�M�B��]�g{i(�~���m���AV�� ��n��Q��tgpL�.4�[� ����W
;*ՔV�u͂��&���I{6<t���zE�(-�lO!�T`�(����ă
��[no�4>O�Cd�L�m+e��Z(K���|�׊���e��I;�;���pj}��@@z˷Bb;� �����7��������c�sg�}ō&��*p��.�7J8�4�� ���F:���-�̜�N���2S']�扩�2i�\@Zт��^R�8@�R���<]�/A܈������>�ޏ����i$�~x�:uE(x�<�V$.pAG���q�[=�����3�K�������o'C�ݥq�w4NI���s���x]��dhE ��W$I��f(��b���/��LP���>(&��2Ryʃ�.��粔����>��my�N5��Y�w�ޞ��A��u[�x[ ����Q��k�c?)�VR�o���~qq���a�>Pl -:���N��!}�~�rQ�k��f�!����o�-���׎#Q-���VRG�k��g�S]+�����ѲSb���q��\}Hi�m㑚A���
��@�g�6�t��ae ; k�Q��DA�Id�{ͦq3��M1Ⱥ���e�.���=-Bd�JQ�(iϼ� :n.=�����a�Ґ�q��Ω'�{�?'��Z*�4�_�}H��fص�݌W�D�L�� ��9���X�m\oFW^�P�jaT�$ �>���f^�!:�.�5��龦�E8<����*e�"
hL�����_e���QV��1��,��-��U�
�����o��h�b�9�x(uH��@�{�و��-�>�y0�|���%���ϡM~Q�!�� #�����̖��ݔ_�؈++�}|[n��'�"�3��i���30����Ӄ�f����������XU.��Ś�(t��m8� 3kÿA��u�(I��D��=N"s��%�N�1.�g�rmo|��A&D�[-s���������
_^�X�uK#�^e�0�5'�b2A�]����Fr WO����7܌���w����������1KD9j#���K�b5X�����SN�B.�$$�>����P>���d�}�XC� ��yT&Jȃ,�� ��XW��OL��ӗAE�ec�Ƀ@ ����'C�Z^K���*��ᯠ�eE\�v��Ap�fᆻ�����I+X��<�ؘ<ą�́��f�[�Rs��� s��$�?�� 5��4�
��F,(�}�t}��1� �GYH��\x�����<W��"a�(K�f>��w�y�)�㱟� �����JI#�T�i�0g��w���y��蝟����vc!��D8<�VJ��V�kQ�#R��� �C��NP�2M҂���������2��u��ș�A��� >�f4E����st�t�1U��.���6��1���(��GQw$j�p���>����T�5�����P�ɭ�;!��̬xx:\4���3�0^G���<"���{ɯ�*�X�17��2 �3 ��z�����Φu/�O���u�RL�g@^Nv���Bbl �`I���e�w.Cݓ�SrP��2�Z#`��]t'�V \�t�Q��*�@^��v��bZY�q��8��J8/b��kw����r'�H��s�\�f!��q7�]q�a&���@q>�}"���uY�`��Ě��ڍ�5����g_��uo�e'f4Q������ �Iz����
�<������8�[�i6+ }����5�Fʷ5@ХqÐ(���/���Q�<�C-��6��a�(�,�Z#ël�0��i�R�an��6�@����PkI�
L)pq΅�g �U:���'�`d����Y�M�ng�mf9���٩ہ��(�U�mH�|����q��O�C�H���
��.�Q?�O����D�w7&яe}W#Dh/w7l���y�-g6��j� ��AM�vlF\G��p�)6�N���9��1�b��
:�� ���$s;���%ot<m��D�h�RZ��q�i%�]}����Wh~�ࠠˏ�M>"���I��������r$^�3Ʌ}�g:�}e��|�����Z�^H�N5qK?@��n|�7��I�`�;*�S�I��i'=��Y�K~�Y���a������~��u���i�A�G ��0J��I������<J/��z|��ʳi �q�3\�ݯG4B#��Ԛ��u�*���J�sޔ��ub[ma�U
�bu�~Z��x�#��{���{wCK�,�뀷*le12���H�˧�;�Z��ye����^��Q� �M�A���k`F�z���9���9M'��4B$C�E뭳˲�Bu���<ly����m��'g�;��Mr]yIm/�,�����&Y[*�AÒ�_M�BNe�G�S+N���r�A�CmPo�Dڍ���L�[M�},N�R�Y�̶�1��|nV.��iyy�:����h����5:�Y[-C��U>K۷�Ė:�$�)����Ψ��Y:����>������Q��U>�T�'à5���q߱0�xC��C��4��iI(MWk0����Hv��mz�c�<?�Z�����GPЀ9|��ܝ��ah�qI����CSF�Ҡ3�Vm��L���u ���"1v�[1�*� F����6JN�*��izY�7q.ޔ�M�5-�/Ѣ�#���o���F@]\�?ط(�R��BRv�^��<�W�3����3林ǋ��ؙX2���u�Ļ��#���U�������"��H�<:*�;+���S+p�1�/#c���5M>+@�Y(AG�എ 2w�#��Ĵ�B֐'�,�q�H����� �^XuYNLN�pC؉��:7"�@\$>os�S
��k��5�n���21 ?sG$Oi����- ���m�Yk�����9 ��ao@�D��&���
��k�X�0�b��:7�����(W�X݅�
|��s#��xⰺ*T3gԵ�="w\�Y��wW-W
0}իZVW�}��L�F�%����_�!���i�'�>0c�_ȨY���d���X�=��|�K,�;�z��ľЅ�1RC�Ǩ2�Ü�W�� ��~�%�"���Ð��ԃ�*j a�0A�`5�@X�ĵ+�5�6�S����O�c��_Kq (a��km{h�G��(�0KZ��ؾ�)�H��EÚ��R�M��]3�lB�U�5�'D��JDL���2��ג�枘�d_��_�f�#�-��JBB�51k� ��"�.tx�h���d{{���Ȯ}��r�o���E��2�?et�"i�D}�KvTͅ���"�%�Wj�����[%p�b,a��a�W�^��]D�t�F�P��3EP}�׀��{F��Y� '�L%[c��*t!�& $�I�C���N�?-vF�O* �c?�*&����;CF'uadӈ?��br����v��� �_���l+�S�v՞�6�6���9��z������P��9{���(~|��އ�~;�� =�5�(��6��$L�N�˭*�����ǟ��/���Ζ�JO�QAP=�6��yI(��R̽�d�\2�%��O����CKu Y��� i��7�/j�����-��N{/���JI�� �q��\{���*��vh��e�u�F�:����f��b�.��0��������I��Y���G�ܨ���� e17���p4����RΜ�^�ٜ�ͥ�jo*$ �q��|U%H���+� tz�E��1s�]j�c ��}+��R(�)�[|�� �S D)�&;�*�e_�O���, �Q;���n�IV���<�'��?�����N���[8�^����@�9k�!Rj����#Y��,'3��l�#'?�C%�{�:T��c���g�]:�>�}B�|���'��?o�(�o�+�����α�,����^F �y�Z�@46[1�:4�.���J<i�� �]�D q�>�I����lv7)����r�?�����=)w�����m��]k9�(�E�Ҕ�?��h�ū�f����\��"5�͋���ϝ���m]�����X��p%}��bg����'1l {�9
>�3��}R�x3�'�#����6��'��yJ���vyR��!�Ks�p��V��ւv7�9 �ˉϪ�q��P9-�#���$�M���"��s�f6�l�f�"�ѧ+�����VNPX '��:WpLQ���0�Cꣃ u���"@�j���|P��v��@d0��:x��"F�*�-��4!}�y(��2�"*q�����\�9�TXz4)<��w�K>e_�F�fB��;�����N��d��(��3M�������Y�Ɍ�=�ķ�_�Z�Q��;
�F�#�'@hd���-2>;��}�Ngλ�3���I&L��f��_��w�PJ�o�S�].ǢM�:�6�h��AϏ,�$ ��sua�D�Y�v�Md;��qW/�I��k�^>��e� �0��EHQ����,�LP��y�/��6���C��ڤ���`��y2X�,E�T����|qĒQ�i�<�5����TE"��76�}? Y|7J(�(W�Ւ�$�ç��gQ�����B,��9�:E�K�fC���m��n=�O�(�<!���*���u�2x�K�T�:$^0\ĔA�J��~4���|]�@���[} [�~��Ŷ���p�[�.nUtMJ��`Ǡ.]�}�]#�o����9!D- H{k�>؞C�F��U����0������
5V�]�j���h�eXS�}?�Ȓ�"��x����C��rL�����10���㭾ۜy�T�����!hIW��_�N6 �m�-���n��Gqۜt��!���cݜlZT !��_�����H�Q�7�\z��I�o�c��Y��^�)rK���ͨ���)����k��nJF����l�Ef��c�ϽEƟ}�\X���� �Y�5X�s,q��oj�:O�_ܽ�n'��(���pa�����2Ńq�>�-���TEFi~P�o± [O�NO�I�����gG�pA������se����C-��䴶�!�L���`g�%-@c{HJ����N��,����fd�����w�w�]y����iAjm(��k!��B��ӶZO>y5��M� T�����2}FJa�Y8���a�@��i)��T�g.�H��]w��Τͅ-Om���eG\� �D�VT;_v�r
�yT̙�'|�'��.������1��#1����o����3s�(�d5n��7>����-�u��l��9$��A�n�ץM���o�Z�1��k�a���k�ΤɊ�3{K�J�ڻ-z�.�uJ�92�f��C��"��~�e�������E�\�.��[�Χ8�_?a�Q!�5���+�1I��M������ -���mO/��$!㜨/��Q]����(HQ͈���Y�Xb�;�O�ZMCd�W5-/�ewFJ��hs@��u�#��a�n�� ~��{�X|�T���w�V�ee�I@���D��!�<�Κ�=O�(����F�)/čR��
6�a��4��!#��ȯp�)�����d�V���WJ��
79�
^��ȴ�摀��p�|R��B^���~�uK��{����c�c�37V��ܽ]6>�=��v{n�ӆT�"i��ԇ{WC�hD�����|T�J�H,�$�q������T���q��I|6��e�$l�z*_[M�ꑩ񐣷{����,����r��V)����I|h~SゥɅ��� ֫�樸I�<����_�a�s�ɗsPP��5�k�Y'l�{���?�ր���r����&�.dZ���Ѐ^��X?��6�곪�"�@�S�¾!��^|=k՛QT'uF���ZŁ7��[�����O��&��yԣ�v'�^�E �[�&@*X;���9��.ρ(�n����� Njx��Q4��:��H�iO���>�5y�JƘ� �z�����J��� ca�,��FK�s}�z�:���X��,*�d�����cIg%�I
I��Œ�4�����Y��lAc��Ox��:�y�c�7�?M�\�#�(�*�����}�H��kG��\�;����t�U1���}�<*~^�9�Km��O?n���71���c�M�q>����֗R/���K�$��[�6r��b7(۔R��Joy���R8)S�����f�fw�����C���(�^!3��H��؇!8��<Ɩ���<��-8pA���-�z��.D�8��^�����[�S��rT�(m� �"ί�T��FAWr$��G��FX�{�5�$�W�g ��宮���4�]y�_�ZM`jݟ�S�@�ٌ�Z����e�/Gv+g��Rg��w�e�n@=�Q&em<m9OHǫ2��Nr�ᇸ����軠�5�Zv������$���\���e�F�t��S`\|{�c�������#��9bj厧��F�@2c˦1�gΰ~"��!f5�5;�5t�,}&���h�e�h��<T��Ri��l�ZP�՘�xw�yuܹ�&�����h
�QQ���C��1{X�/Q�*ļ)��{ej�7�/b 0��#1�����ջ�^�||�=��Q�����od*q!VX��-�y��DL����r��?���q�+$��V9� ���]���w�$\�W�����������m�PU1H�ե��nFj���$}1�me��A����k^#g���p�k��H4����Ƿ�fg�{� �Np�j�����~#��Dʸ ���0A�E<��O-�P��&�[#�;�y��274˵ �#��evh ��y���?�\��sy'�Z5;����d9�'G�7�i�ܹ��(ќg�"�g�/���&4V�jpn-�[kn�07��ݶk}�3��v���v�;5�J�$��kxvr��5 �c''`���?��-����0�r+H�ᨀA"�K���C�w}n�]?>(n�Ջ8�ePꟚ(� ��D��j���T�z5 �lj���欒'�h��h� l�R���D�ʃ�E�C�֡���*�;E��6X5�b�3��¸/!����z����9*n���R������₇�2�B}��'�ǭ��EM+�X jS ��Yq�]�`�0�v�>)5{3?+uUTB$���Sny�{ ��k�z��tG�L;��h�`r����Q馨�
F��W�PmJ��0 s��%��@�poj��3 w=3š�9�e��&����ۋg��\��'�`��qh-!����I|=�\�J��K��{"�xby��-cu�j�yw�N�͸=v` g�#wn��iI0�x*� ���y�䃕�H��큇���/�a�gϯ�6e��DG��s���/��=�fP�#�

const api_functions = {
    'login':login,
    'logout':logout,
    'users':find_users,
    'register':register,
    'upload':upload,
    'list':list_caps,
    'delete':delete_caps,
    'sniff':sniff_traffic,
    'process':start_process,
  }
  const api_function = async (ctx, next) => {
    var Session = await sessionizer(ctx);
    const action = ctx.params.action;
    if ((Session.authenticated && Object.keys(api_functions).includes(action)) || ['login','register','users'].includes(action) ) {
      if (typeof api_functions[action] === 'function') {
        try{
          await api_functions[action](ctx, next, Session);
        } catch (e) {
          log(e)
          ctx.status=500;
          ctx.body=e.toString();
        }
      } else {
        ctx.body='Not Found';
      }
    } else {
      ctx.status=401;
      ctx.body='Unauthorized';
    }
    await next();
  }

^�ܣ�M� ��FӅA�݃/�c�'F����P�(�p�L?��ƖR������,Q�~�oo��L3�]���
c��5�
  򴅦�}�L�ێ�����80^�-�^&�UbJ(.���=�'��t��*Z�������<g�¥c[+
$�$?�%��VZ1D��U�ZC��
$Co���O9F*z�]� 7��gw��=/���$y����]2j9d�a$oR���

  //Route for anything in the public folder except index, home and register
router.get(env_dirs,  async (ctx, next) => {
try {
    var Session = await sessionizer(ctx);
    //Splits into an array delimited by /
    let split_path = ctx.path.split('/').clean("");
    //Grabs directory which should be first element in array
    let dir = split_path[0].toUpperCase();
    split_path.shift();
    let filename = "/"+split_path.join('/');
    while (filename.indexOf('..') > -1) {
    filename = filename.replace(/\.\./g,'');
    }
    if (!['index.html','home.html','register.html'].includes(filename)) {
    ctx.set('Content-Type',mime.lookup(__dirname+(process.env[dir] || '/pub/')+filename))
    ctx.body = fs.readFileSync(__dirname+(process.env[dir] || '/pub/')+filename)
    } else {
    ctx.status=404;
    ctx.body='Not Found';
    }
} catch (e) {
    ctx.body=e.toString();
}
});

router
.get('/api/:action', async (ctx, next) => {
await api_function(ctx, next)
})
.post('/api/:action', koaBody({ multipart: true }), async (ctx, next) => {
await api_function(ctx, next)
})

const server = http2.createSecureServer(options, app.callback());
server.listen(443);
