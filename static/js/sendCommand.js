
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }

        };

        function sendCommand(cmd, params) {
          if (isMobile.Android()) {
            switch (cmd) {
              case 'coupon':
                window.handler.show(params[0]);
                break;
              case 'merchant':
                window.handler.showMerchant(params[0]);
                break;
              case 'work':
                window.handler.showWork(params[0], params[1]);//sendCommand('work',[15875,0])0涓哄椁愶紝1涓烘渚�
                break;
              case 'set_meal_buy':
                window.handler.setMealBuy(params[0]);
                break;
              case 'talk_to_merchant':
        if(params.length==3){
          window.handler.contactMerchant(params[0], params[1], params[2]);
        }else{
          window.handler.contactMerchant(params[0], params[1], params[2], params[3], params[4]);
        }
                break;
              case 'talk_to_support':
        if(params.length==1){
          window.handler.talkToSupport(params[0]);
        }else{
          window.handler.talkToSupport(params[0],params[1],params[2]);
        }
                break;
              case 'entry':
                window.handler.showEntry(params[0]);
                break;
              case 'cars':
                window.handler.cars();
                break;
              case 'white_bars':
                window.handler.apply_iou();
                break;
              case 'white_bar_readme':
                window.handler.iouInstruction();
                break;
              case 'hotel':
                window.handler.hotels();
                break;
              case 'topic':
                window.handler.thread(params[0]);
                break;
              case 'showWorkList':
                window.handler.showWorkList();
                break;
               case 'banner_type_navigate':
                window.handler.bannerAction(params[0]);//璺宠浆BANNER鎵€鏈夌殑绫诲瀷锛�,100::鍟嗗绛夌骇鍧戜綅,101::钀ラ攢绠＄悊椤靛潙浣�,102::缂栬緫搴楅摵鍧戜綅
                break;
               case 'add_topic':
                window.handler.sendThread(params[0]);//璺宠浆鍙戣瘽棰�
                break;
               case 'search':
                window.handler.search();//璺宠浆鎼滅储
                break;
                case 'login':
                window.handler.login();//璺宠浆鐧诲綍
                break;
                case 'set_meal_buy_v2':
                window.handler.setMealBuy2(params[0]);//sendCommand('set_meal_buy_v2',['work:46936:1'])
                break;
                case 'qrEncodeAndSave':
                window.handler.qrEncodeAndSave(params[0]);
                break;
        case 'pageInfoUpdate':
        window.handler.pageInfoUpdate(params[0]);//閫氱煡瀹㈡埛鏉ュ彇鍊�
        break;
        case 'all_merchant_type_page':
        window.handler.all_merchant_type_page(params[0],params[1],params[2]);
        break;
        case 'tag_content_page':
        window.handler.tag_content_page(params[0],params[1],params[2],params[3]);
        break;
        case 'guest_photos_page':
        window.handler.guest_photos_page(params[0]);
        break;
        case 'close_win':
        window.handler.close()
        break;
        case 'pay_bond_sign_money'://娑堜繚缂寸撼鍏ュ彛鍧戜綅瀹氫箟
        window.handler.pay_bond_sign_money();
        break;
        case 'join_online_sale'://寮€閫氬湪绾夸氦鏄撳潙浣嶅畾涔�
        window.handler.join_online_sale();
        break;
        case 'share'://WechatFriend寰俊鏈嬪弸鍦� Wechat寰俊濂藉弸 SinaWeibo鏂版氮寰崥 QQ
        if(params.length > 1){
         window.handler.share(params[0],params[1],params[2],params[3],params[4],params[5]);
        }else{window.handler.share(params[0]);}
        break;
        case 'violate_list'://鍟嗗杩濊璁板綍
        window.handler.violate_list();
        break;
        case 'user_credit_duiba'://鐐瑰嚮鍏ㄩ儴璺宠浆瀵瑰惂
        window.handler.user_credit_duiba(params[0]);
        break;
        case 'user_credit_duiba_product'://鐐瑰嚮鍏朵腑涓€涓烦杞鍚�
        window.handler.user_credit_duiba_product(params[0]);
        break;
        case 'user_info_edit'://缂栬緫涓汉淇℃伅
        window.handler.user_info_edit();
        break;
        case 'show_adviser_from_intro'://缁撳椤鹃棶浠嬬粛椤� 璺宠浆 缁撳椤鹃棶椤�
        window.handler.show_adviser_from_intro();
        break;
        case 'back_to_main'://鍥炲埌棣栭〉
        window.handler.back_to_main();
        break;
        case 'banner_property_tools_card'://璇峰笘BANNER_PROPERTY_TOOLS_CARD
        window.handler.banner_property_tools_card();
        break;
        case 'shop_pro_buy'://绔嬪嵆璐拱
        window.handler.shop_pro_buy();
        break;
        case 'shop_pro_record'://璐拱璁板綍
        window.handler.shop_pro_record();
        break;
        case 'image_preview'://瀵屾枃鏈腑 璺宠浆澶у浘棰勮wedding:image_preview:<cur_index>:<url1>:<url2>:<url3>鈥�..
        window.handler.image_preview(params[0]);
        break;
            }

          } else if (isMobile.iOS()) {
            switch (cmd) {
              case 'coupon':
                var url = "wedding:" + cmd + ":" + params[0];
                break;
              case 'merchant':
                var url = "wedding:" + cmd + ":" + params[0];
                break;
              case 'work':
                var url = "wedding:" + 'work' + ":" + params[0] + ":" + params[1];
                break;
              case 'set_meal_buy':
                var url = "wedding:" + cmd + ":" + params[0];
                break;
              case 'talk_to_merchant'://锛堟柊锛夎仈绯诲晢瀹讹細鍟嗗user_id锛屽晢瀹禠OGO,鍟嗗鍚嶇О锛岀被鍨嬶紝瀵瑰簲绫诲瀷ID
                var url = "wedding:talk_to_merchant:" + params[0] + ":" + encodeURIComponent(params[1]) + ":" + encodeURIComponent(params[2])+ ":" + params[3] + ":" + params[4];
                break;
              case 'talk_to_support'://鏂板湪绾垮挩璇�:榛樿+绫诲瀷+瀵瑰簲绫诲瀷id
                var url = "wedding:talk_to_support:" + params[0]+ ":" + params[1] + ":" + params[2];//榛樿锛�0,濠氳溅:1,椤鹃棶:2,鏃呮媿:3,閰掑簵:6
                break;
              case 'entry':
                var url = "wedding:" + cmd + ":" + params[0];
                break;
              case 'cars':
                var url = "wedding:cars";
                break;
              case 'white_bars':
                var url = "wedding:apply_iou";
                break;
              case 'white_bar_readme':
                var url = "wedding:iou_readme";
                break;
              case 'hotel':
                var url = "wedding:hotel";
                break;
              case 'topic':
                var url = "wedding:topic:" + params[0];
                break;
              case 'set_meal_buy_v2':
                var url = "wedding:set_meal_buy_v2:"+params[0];//sendCommand('set_meal_buy_v2',['work:768:1:work:513:1'])
                break;
              case 'wap_pay_result':
                var url="wedding:wap_pay_result:"+params[0];
                break;
              case 'banner_type_navigate':
                var url="wedding:banner_type_navigate:"+params[0];//璺宠浆BANNER鎵€鏈夌殑绫诲瀷sendCommand('banner_type_navigate',['13:53780:']),13涓鸿瘽棰�,濠氬搧涓�40,娣樺疂瀹负2,閰掑簵璇︽儏50,鍔ㄦ€佷负42,閰掑簵鍒楄〃涓�34,瀵屾枃鏈腑璺宠浆鏍囩鑱氬悎椤典负54,棰勭害鍟嗗55,閰掑簵涓�20锛岃甯栦负26锛屽鍝佸晢瀹�41,43濠氬搧绫诲瀷,44涓哄濠氭竻鍗�,19濠氳溅绉熻祦,绀惧尯棰戦亾51,缁撳椤鹃棶46锛屽晢瀹跺垪琛�:sendCommand('banner_type_navigate',['20::']),闂璇︽儏58,鍥炵瓟璇︽儏59锛岀涓夋柟:sendCommand('banner_type_navigate',['47::hljrn%3A%2F%2Fwww.hunliji.com%2Ffinancial_market']),{閲戣瀺瓒呭競锛歠inancial_market,濠氬閰掑簵锛歨otel_channel},鏂颁笓棰�56,娲诲姩57
                break;
              case 'add_topic':
                var url="wedding:add_topic:"+params[0];//璺宠浆鍙戣瘽棰�
                break;
              case 'search':
                var url="wedding:search";//璺宠浆鎼滅储
                break;
              case 'login':
                var url="wedding:login";//璺宠浆鐧诲綍妗�
                break;
            case 'qrEncodeAndSave':
                var url="wedding:qrEncodeAndSave:"+params[0];
                break;
        case 'pageInfoUpdate':
          var url="wedding:pageInfoUpdate:"+params[0];//閫氱煡瀹㈡埛绔彇鍊約endCommand('pageInfoUpdate',['1'])
        break;
        case 'all_merchant_type_page'://璋冪敤APP濂楅妗堜緥鍟嗗鍒楄〃<鍐呭绫诲埆鍚嶇О>:<鍟嗗绫诲埆ID>:<棰滆壊鏍囩ID>
          var url="wedding:all_merchant_type_page:"+params[0]+':'+params[1]+':'+params[2];
        break;
        case 'tag_content_page'://鏍囩APP鍒楄〃椤�(鏍囩ID,鏍囩Name,榛樿Tab/setmeal/case/thread)榛樿setmeal
          var url="wedding:tag_content_page:"+params[0]+':'+params[1]+':'+params[2]+':'+params[3];
        break;
        case 'guest_photos_page'://璋冭浆瀹㈢収鍒楄〃(鍟嗗绫诲埆ID)
          var url="wedding:guest_photos_page:"+params[0];
        break;
        case 'close_win'://鍏抽棴native缃戦〉瀹瑰櫒
          var url="wedding:close";
        break;
        case 'pay_bond_sign_money'://娑堜繚缂寸撼鍏ュ彛鍧戜綅瀹氫箟锛�
          var url="wedding:pay_bond_sign_money";
        break;
        case 'join_online_sale'://寮€閫氬湪绾夸氦鏄撳潙浣嶅畾涔�
          var url="wedding:join_online_sale";
        break;
        case 'share'://WechatFriend寰俊鏈嬪弸鍦� Wechat寰俊濂藉弸 SinaWeibo鏂版氮寰崥 QQ
          if(params.length > 1){
            var url="wedding:share:"+params[0]+':'+params[1]+':'+params[2]+':'+params[3]+':'+encodeURIComponent(params[4])+':'+encodeURIComponent(params[5]);
          }else{var url="wedding:share:"+params[0];}
        break;
        case 'violate_list'://鍟嗗杩濊璁板綍
          var url="wedding:violate_list";
        break;
        case 'user_credit_duiba'://鐐瑰嚮鍏ㄩ儴璺宠浆瀵瑰惂
          var url="wedding:user_credit_duiba:"+encodeURIComponent(params[0]);
        break;
        case 'user_credit_duiba_product'://鐐瑰嚮鏌愪釜璺宠浆瀵瑰惂
          var url="wedding:user_credit_duiba_product:"+encodeURIComponent(params[0]);
        break;
        case 'user_info_edit'://缂栬緫涓汉淇℃伅
          var url="wedding:user_info_edit";
        break;
        case 'show_adviser_from_intro'://缁撳椤鹃棶浠嬬粛椤� 璺宠浆 缁撳椤鹃棶椤�
          var url="wedding:show_adviser_from_intro";
        break;
        case 'back_to_main'://鍥炲埌棣栭〉
          var url="wedding:back_to_main";
        break;
        case 'banner_property_tools_card'://璇峰笘sendCommand('banner_property_tools_card',['26::'])
          var url="wedding:banner_property_tools_card";//BANNER_PROPERTY_TOOLS_CARD
        break;
        case 'shop_pro_buy'://绔嬪嵆璐拱
          var url="wedding:shop_pro_buy";
        break;
        case 'shop_pro_record'://璐拱璁板綍
          var url="wedding:shop_pro_record";
        break;
        case 'image_preview'://瀵屾枃鏈腑 璺宠浆澶у浘棰勮wedding:image_preview:<cur_index>:<url1>:<url2>:<url3>鈥�..
          var url="wedding:image_preview:"+params[0];
        break;

          }
            //console.log(url);
            //alert(url);
            document.location.href = url;
          } else {
            switch (cmd) {
              case 'coupon':
        //              alert('涓嬭浇App鍗冲彲棰嗗彇浼樻儬鍒�');
                break;
              case 'merchant':
                document.location.href = '/shop/merchant_accounts/' + params[0];
                break;
            }
          }
        }
