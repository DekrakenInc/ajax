if (typeof(LikeBtn) == "undefined" || !LikeBtn) {
    (function(b) {
        var a = b.createElement("link");
        a.type = "text/css";
        a.rel = "stylesheet";
        a.href = "https://rawcdn.githack.com/DekrakenInc/ajax/75dfdadfd5a73570598eef6e3b97a26537aba8d4/css/dekraken.likebtn.widget.css";
        (b.getElementsByTagName("head")[0] || b.getElementsByTagName("body")[0]).appendChild(a)
    })(document);
    var LikeBtn = function(window_obj) {
            var obj = {};
            obj.locales = ["en", "ru", "af", "ar", "hy", "be", "bn", "bg", "bs", "ca", "zh_CN", "zh_HK", "cs", "fa", "fi", "fr", "da", "nl", "de", "el", "he", "hu", "id", "it", "ja", "kk", "ko", "lv", "lt", "ne", "no", "pl", "pt", "pt_BR", "ro", "sr", "sk", "sl", "es", "sv", "th", "tr", "uk", "vi"];
            obj.styles = ["custom", "white", "lightgray", "gray", "black", "padded", "drop", "line", "github", "transparent", "youtube", "habr", "heartcross", "plusminus", "google", "greenred", "large", "elegant", "disk", "squarespace", "slideshare", "baidu", "uwhite", "ublack", "uorange", "ublue", "ugreen", "direct", "homeshop", "nero", "sku", "review", "likebtn", "roundthumb", "ok", "mid", "mini", "bootstrap", "angular", "tick", "stack", "vertplus"];
            obj.styles_per_css = "16";
            obj.css_path = "/css/w/";
            obj.debug = 0;
            obj.pv_sent = false;
            obj.runned = 0;
            obj.interval;
            obj.plan = 0;
            obj.cookie_test_name = "likebtn_test";
            obj.cookie_vote_name = "likebtn_vote";
            obj.cookie_group_identifier = "likebtn_group_identifier";
            obj.cookie_count_lifetime = "300";
            obj.cookie_count_name = "likebtn_count";
            obj.cookie_locale_lifetime = 2592000;
            obj.client = {};
            obj.default_lang = "en";
            obj.cookie_locale_name = "likebtn_locale";
            obj.browser_locale_detection_running = false;
            obj.browser_locale;
            obj.count_time = 1000;
            obj.count_tstep = 70;
            obj.ef_time = 500;
            obj.max_buttons_per_page = {
                0: 1,
                1: 10,
                2: 25,
                3: 1000000,
                4: 1000000
            };
            obj.https_check_disabled = ["wix.likebtn.com", "devwix.likebtn.com", "www.weebly.com"];
            obj.addthis_loaded = false;
            obj.aip = false;
            obj.share_buttons_count = 8;
            obj.popup_close_delay = 2000;
            obj.popup_padding = 8;
            obj.popup_min_w = 148;
            obj.identifier_maxl = 970;
            obj.norm_identifiers = {};
            obj.bunch_size = 100;
            obj.bunch_btns = 0;
            obj.bunch = [];
            obj.local_delimiter = "!";
            obj.deafault_popup_content_order = ["popup_share", "popup_donate", "popup_html"];
            obj.addthis_buttons = {
                all: ["facebook", "twitter", "preferred_1", "preferred_2", "preferred_3", "preferred_4", "preferred_5", "compact"],
                ru: ["vk", "odnoklassniki_ru", "twitter", "facebook", "preferred_1", "preferred_2", "preferred_3", "compact"]
            };
            obj.event_types = {
                loaded: "likebtn.loaded",
                click: "likebtn.click",
                like: "likebtn.like",
                unlike: "likebtn.unlike",
                dislike: "likebtn.dislike",
                undislike: "likebtn.undislike",
                popupopen: "likebtn.popupopen",
                popupclose: "likebtn.popupclose",
                voted: "likebtn.voted"
            };
            obj.settings = {
                values: [],
                schema: {
                    lang: {
                        type: "lang",
                        def: "en"
                    },
                    identifier: {
                        type: "string",
                        escape: "no",
                        def: ""
                    },
                    site_id: {
                        type: "string",
                        escape: "no",
                        def: ""
                    },
                    group_identifier: {
                        type: "string",
                        def: ""
                    },
                    local_domain: {
                        type: "string",
                        def: ""
                    },
                    domain_from_parent: {
                        type: "bool",
                        def: 1
                    },
                    subdirectory: {
                        type: "string",
                        def: ""
                    },
                    rtl: {
                        type: "bool",
                        def: 0
                    },
                    ef_voting: {
                        type: "string",
                        def: ""
                    },
                    show_like_label: {
                        type: "bool",
                        def: 1
                    },
                    show_dislike_label: {
                        type: "bool",
                        def: 0
                    },
                    popup_dislike: {
                        type: "bool",
                        def: 0
                    },
                    like_enabled: {
                        type: "bool",
                        def: 1
                    },
                    dislike_enabled: {
                        type: "bool",
                        def: 1
                    },
                    icon_like_show: {
                        type: "bool",
                        def: 1
                    },
                    icon_dislike_show: {
                        type: "bool",
                        def: 1
                    },
                    lazy_load: {
                        type: "bool",
                        def: 0
                    },
                    counter_clickable: {
                        type: "bool",
                        def: 0
                    },
                    counter_type: {
                        type: "string",
                        def: "number"
                    },
                    counter_show: {
                        type: "bool",
                        def: "1"
                    },
                    counter_padding: {
                        type: "string",
                        def: ""
                    },
                    counter_zero_show: {
                        type: "bool",
                        def: 0
                    },
                    counter_frmt: {
                        type: "string",
                        def: ""
                    },
                    counter_count: {
                        type: "bool",
                        def: 0
                    },
                    voting_enabled: {
                        type: "bool",
                        def: 1
                    },
                    voting_cancelable: {
                        type: "bool",
                        def: 1
                    },
                    voting_both: {
                        type: "bool",
                        def: 0
                    },
                    voting_frequency: {
                        type: "string",
                        def: 0
                    },
                    theme: {
                        type: "string",
                        def: "white"
                    },
                    btn_size: {
                        type: "string",
                        def: "22"
                    },
                    icon_l: {
                        type: "string",
                        def: "thmb5-u"
                    },
                    icon_d: {
                        type: "string",
                        def: "thmb5-d"
                    },
                    icon_l_url: {
                        type: "string",
                        def: ""
                    },
                    icon_d_url: {
                        type: "string",
                        def: ""
                    },
                    icon_l_url_v: {
                        type: "string",
                        def: ""
                    },
                    icon_d_url_v: {
                        type: "string",
                        def: ""
                    },
                    icon_size: {
                        type: "string",
                        def: ""
                    },
                    vert: {
                        type: "bool",
                        def: 0
                    },
                    icon_l_c: {
                        type: "string",
                        def: "333333"
                    },
                    icon_d_c: {
                        type: "string",
                        def: "333333"
                    },
                    icon_l_c_v: {
                        type: "string",
                        def: "#fbae05"
                    },
                    icon_d_c_v: {
                        type: "string",
                        def: "#fbae05"
                    },
                    label_c: {
                        type: "string",
                        def: "333333"
                    },
                    label_c_v: {
                        type: "string",
                        def: "#3b3b3b"
                    },
                    counter_l_c: {
                        type: "string",
                        def: "555555"
                    },
                    counter_d_c: {
                        type: "string",
                        def: "555555"
                    },
                    bg_c: {
                        type: "string",
                        def: "fafafa"
                    },
                    bg_c_v: {
                        type: "string",
                        def: "fafafa"
                    },
                    brdr_c: {
                        type: "string",
                        def: "c6c6c6"
                    },
                    f_size: {
                        type: "string",
                        def: "12"
                    },
                    f_family: {
                        type: "string",
                        def: "Arial"
                    },
                    f_style: {
                        type: "string",
                        def: "r"
                    },
                    label_fs: {
                        type: "string",
                        def: "b"
                    },
                    counter_fs: {
                        type: "string",
                        def: "r"
                    },
                    share_enabled: {
                        type: "bool",
                        def: 1
                    },
                    share_size: {
                        type: "string",
                        def: "medium"
                    },
                    item_url: {
                        type: "url",
                        def: ""
                    },
                    item_title: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    item_description: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    item_image: {
                        type: "url",
                        def: ""
                    },
                    item_date: {
                        type: "string",
                        def: ""
                    },
                    addthis_pubid: {
                        type: "string",
                        def: "ra-511b51aa3d843ec4"
                    },
                    addthis_service_codes: {
                        type: "string",
                        def: ""
                    },
                    loader_show: {
                        type: "bool",
                        def: 0
                    },
                    loader_image: {
                        type: "string",
                        def: ""
                    },
                    tooltip_enabled: {
                        type: "bool",
                        def: 1
                    },
                    tooltip_like_show_always: {
                        type: "bool",
                        def: 0
                    },
                    tooltip_dislike_show_always: {
                        type: "bool",
                        def: 0
                    },
                    white_label: {
                        type: "bool",
                        def: 0
                    },
                    popup_disabled: {
                        type: "bool",
                        def: 0
                    },
                    popup_position: {
                        type: "string",
                        def: "top"
                    },
                    popup_style: {
                        type: "string",
                        def: "light"
                    },
                    popup_width: {
                        type: "string",
                        def: "176"
                    },
                    popup_hide_on_outside_click: {
                        type: "bool",
                        def: 1
                    },
                    popup_on_load: {
                        type: "bool",
                        def: 0
                    },
                    popup_html: {
                        type: "string",
                        escape: "no",
                        def: ""
                    },
                    popup_donate: {
                        type: "string",
                        escape: "no",
                        def: ""
                    },
                    popup_content_order: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    event_handler: {
                        type: "string",
                        def: ""
                    },
                    rich_snippet: {
                        type: "bool",
                        def: 0
                    },
                    debug: {
                        type: "bool",
                        def: 0
                    },
                    info_message: {
                        type: "bool",
                        def: 0
                    },
                    i18n_like: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    i18n_dislike: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    i18n_after_like: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    i18n_after_dislike: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    i18n_like_tooltip: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    i18n_dislike_tooltip: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    i18n_unlike_tooltip: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    i18n_undislike_tooltip: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    i18n_share_text: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    i18n_popup_close: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    i18n_popup_text: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    i18n_popup_donate: {
                        type: "string",
                        escape: "html",
                        def: ""
                    },
                    engine: {
                        type: "string",
                        def: ""
                    },
                    engine_v: {
                        type: "string",
                        def: ""
                    },
                    plugin_v: {
                        type: "string",
                        def: ""
                    },
                    prx: {
                        type: "string",
                        def: ""
                    },
                    vt: {
                        type: "string",
                        def: ""
                    },
                    host: {
                        type: "string",
                        nonmodifiable: 0,
                        def: window.location.hostname
                    },
                    url: {
                        type: "string",
                        nonmodifiable: 1,
                        def: window.location.href
                    }
                }
            };
            obj.settings.values = [];
            obj.translations = {
                en: {
                    i18n_like: "Like",
                    i18n_dislike: "Dislike",
                    i18n_after_like: "Like",
                    i18n_after_dislike: "Dislike",
                    i18n_like_tooltip: "I like this",
                    i18n_dislike_tooltip: "I dislike this",
                    i18n_unlike_tooltip: "Unlike",
                    i18n_undislike_tooltip: "Undislike",
                    i18n_share_text: "Would you like to share?",
                    i18n_popup_close: "Close",
                    i18n_popup_text: "Glad you liked it!",
                    i18n_popup_donate: "Show gratitude in the form of a donation"
                },
                ru: {
                    i18n_like: "????????",
                    i18n_dislike: "?? ????????",
                    i18n_after_like: "????????",
                    i18n_after_dislike: "?? ????????",
                    i18n_like_tooltip: "??? ??? ????????",
                    i18n_dislike_tooltip: "??? ??? ?? ????????",
                    i18n_unlike_tooltip: "?????? ?? ????????",
                    i18n_undislike_tooltip: "????????",
                    i18n_share_text: "?????? ???????????",
                    i18n_popup_close: "???????",
                    i18n_popup_text: "????, ??? ??? ???????????!",
                    i18n_popup_donate: "????????????? ??????"
                },
                af: {
                    i18n_like: "???",
                    i18n_dislike: "???",
                    i18n_after_like: "???",
                    i18n_after_dislike: "???",
                    i18n_like_tooltip: "??????",
                    i18n_dislike_tooltip: "?????",
                    i18n_unlike_tooltip: "???",
                    i18n_undislike_tooltip: "???",
                    i18n_share_text: "?????",
                    i18n_popup_close: "??????",
                    i18n_popup_text: "???",
                    i18n_popup_donate: "???"
                },
                ar: {
                    i18n_like: "??????",
                    i18n_dislike: "?? ??????",
                    i18n_after_like: "??????",
                    i18n_after_dislike: "?? ??????",
                    i18n_like_tooltip: "?????? ???",
                    i18n_dislike_tooltip: "?? ?????? ???",
                    i18n_unlike_tooltip: "????? ??????",
                    i18n_undislike_tooltip: "????? ??? ??????",
                    i18n_share_text: "?? ??? ??? ????",
                    i18n_popup_close: "?????",
                    i18n_popup_text: "???? ???? ?????? !",
                    i18n_popup_donate: "????? ???????? ??? ??? ???"
                },
                hy: {
                    i18n_like: "???????",
                    i18n_dislike: "????????",
                    i18n_after_like: "???????",
                    i18n_after_dislike: "????????",
                    i18n_like_tooltip: "?? ???????? ?? ??",
                    i18n_dislike_tooltip: "?? ??? ???????? ??",
                    i18n_unlike_tooltip: "????????",
                    i18n_undislike_tooltip: "????????",
                    i18n_share_text: "????????? ?? ??????",
                    i18n_popup_close: "?????",
                    i18n_popup_text: "????? ?? ?? ??? ???? ???? ???.",
                    i18n_popup_donate: "??????????"
                },
                be: {
                    i18n_like: "???????????",
                    i18n_dislike: "?? ???????????",
                    i18n_after_like: "???????????",
                    i18n_after_dislike: "?? ???????????",
                    i18n_like_tooltip: "??? ???? ???????????",
                    i18n_dislike_tooltip: "??? ???? ?? ???????????",
                    i18n_unlike_tooltip: "????? ?? ?? ???????",
                    i18n_undislike_tooltip: "????????",
                    i18n_share_text: "??????? ???????????",
                    i18n_popup_close: "???????",
                    i18n_popup_text: "?????? ????, ??? ??? ???????????!",
                    i18n_popup_donate: "????????? ???????"
                },
                bn: {
                    i18n_like: "????",
                    i18n_dislike: "???????",
                    i18n_after_like: "????",
                    i18n_after_dislike: "???????",
                    i18n_like_tooltip: "???? ????",
                    i18n_dislike_tooltip: "???? ???? ??",
                    i18n_unlike_tooltip: "??????",
                    i18n_undislike_tooltip: "?????????",
                    i18n_share_text: "????? ???? ???",
                    i18n_popup_close: "????",
                    i18n_popup_text: "???????",
                    i18n_popup_donate: "????? ????? ???"
                },
                bg: {
                    i18n_like: "????????",
                    i18n_dislike: "??????????",
                    i18n_after_like: "????????",
                    i18n_after_dislike: "??????????",
                    i18n_like_tooltip: "???????? ????",
                    i18n_dislike_tooltip: "?????????? ????",
                    i18n_unlike_tooltip: "??????????",
                    i18n_undislike_tooltip: "????????",
                    i18n_share_text: "?????? ?? ?? ??????????",
                    i18n_popup_close: "???????",
                    i18n_popup_text: "?????????? ??, ?? ?????????!",
                    i18n_popup_donate: "???????? ?????? ????????????, ???? ????????? ???????"
                },
                bs: {
                    i18n_like: "Svida mi se",
                    i18n_dislike: "Ne svida mi se",
                    i18n_after_like: "Svida mi se",
                    i18n_after_dislike: "Ne svida mi se",
                    i18n_like_tooltip: "Svida mi se",
                    i18n_dislike_tooltip: "Ne svida mi se",
                    i18n_unlike_tooltip: "Ne svida mi se",
                    i18n_undislike_tooltip: "Ne svida mi se",
                    i18n_share_text: "�elite podijeliti?",
                    i18n_popup_close: "Zatvori",
                    i18n_popup_text: "Drago nam je da Vam se svida!",
                    i18n_popup_donate: "Donirajte i podr�ite"
                },
                ca: {
                    i18n_like: "M'agrada",
                    i18n_dislike: "No m'agrada",
                    i18n_after_like: "M'agrada",
                    i18n_after_dislike: "No m'agrada",
                    i18n_like_tooltip: "Aix� m'agrada",
                    i18n_dislike_tooltip: "Aix� no m'agrada",
                    i18n_unlike_tooltip: "Ja no m'agrada",
                    i18n_undislike_tooltip: "Ja no em desagrada",
                    i18n_share_text: "T'agradaria compartir-ho?",
                    i18n_popup_close: "Tencar",
                    i18n_popup_text: "M'alegro que t'agradi!",
                    i18n_popup_donate: "Demostra gratitud en forma de donaci�"
                },
                zh_CN: {
                    i18n_like: "?",
                    i18n_dislike: "?",
                    i18n_after_like: "?",
                    i18n_after_dislike: "?",
                    i18n_like_tooltip: "???",
                    i18n_dislike_tooltip: "???",
                    i18n_unlike_tooltip: "???",
                    i18n_undislike_tooltip: "???",
                    i18n_share_text: "????",
                    i18n_popup_close: "??",
                    i18n_popup_text: "????",
                    i18n_popup_donate: "????"
                },
                zh_HK: {
                    i18n_like: "??",
                    i18n_dislike: "???",
                    i18n_after_like: "??",
                    i18n_after_dislike: "???",
                    i18n_like_tooltip: "???",
                    i18n_dislike_tooltip: "????",
                    i18n_unlike_tooltip: "????",
                    i18n_undislike_tooltip: "?????",
                    i18n_share_text: "???",
                    i18n_popup_close: "??",
                    i18n_popup_text: "?????!",
                    i18n_popup_donate: "????????????"
                },
                cs: {
                    i18n_like: "L�b�",
                    i18n_dislike: "Nel�b�",
                    i18n_after_like: "L�b�",
                    i18n_after_dislike: "Nel�b�",
                    i18n_like_tooltip: "L�b� se mi to",
                    i18n_dislike_tooltip: "Nel�b� se mi to",
                    i18n_unlike_tooltip: "Vz�t tento hlas zpet",
                    i18n_undislike_tooltip: "Vz�t tento hlas zpet",
                    i18n_share_text: "Chcete vyu��t mo�nosti sd�len�?",
                    i18n_popup_close: "Zavr�t",
                    i18n_popup_text: "Jsme r�di, �e se v�m to l�bilo!",
                    i18n_popup_donate: "Projevte n�m svoje d�ky i formou daru"
                },
                fa: {
                    i18n_like: "???????",
                    i18n_dislike: "????????",
                    i18n_after_like: "???????",
                    i18n_after_dislike: "????????",
                    i18n_like_tooltip: "?? ???????",
                    i18n_dislike_tooltip: "?? ????????",
                    i18n_unlike_tooltip: "??? ???????",
                    i18n_undislike_tooltip: "??? ??????",
                    i18n_share_text: "?? ??? ?????? ?? ?????? ????????!",
                    i18n_popup_close: "????",
                    i18n_popup_text: "??????? ?? ??? ?? ????????!",
                    i18n_popup_donate: "????? ??????? ?? ???? ??? ????"
                },
                fi: {
                    i18n_like: "Tykk��n",
                    i18n_dislike: "En tykk��",
                    i18n_after_like: "Tykk��n",
                    i18n_after_dislike: "En tykk��",
                    i18n_like_tooltip: "Pid�n t�st�",
                    i18n_dislike_tooltip: "En pid� t�st�",
                    i18n_unlike_tooltip: "En tykk��",
                    i18n_undislike_tooltip: "Poista valintani",
                    i18n_share_text: "Haluaisitko jakaa?",
                    i18n_popup_close: "Sulje",
                    i18n_popup_text: "Kiva kun pid�t t�st�!",
                    i18n_popup_donate: "Osoita kiitollisuutta lahjoituksen muodossa"
                },
                fr: {
                    i18n_like: "J'aime",
                    i18n_dislike: "Je n'aime pas",
                    i18n_after_like: "J'aime",
                    i18n_after_dislike: "Je n'aime pas",
                    i18n_like_tooltip: "J'aime �a",
                    i18n_dislike_tooltip: "Je n'aime pas �a",
                    i18n_unlike_tooltip: "Je n'aime plus",
                    i18n_undislike_tooltip: "Retirer Je n'aime pas",
                    i18n_share_text: "Souhaitez-vous partager?",
                    i18n_popup_close: "Fermer",
                    i18n_popup_text: "Heureux que vous ayez aim�!",
                    i18n_popup_donate: "Montrez votre gratitude avec un don"
                },
                da: {
                    i18n_like: "Synes godt om",
                    i18n_dislike: "Synes ikke om",
                    i18n_after_like: "Synes godt om",
                    i18n_after_dislike: "Synes ikke om",
                    i18n_like_tooltip: "Jeg kan lide dette",
                    i18n_dislike_tooltip: "Jeg kan ikke lide dette",
                    i18n_unlike_tooltip: "Fjern synes godt om",
                    i18n_undislike_tooltip: "Fjern synes ikke om",
                    i18n_share_text: "Vil du dele dette?",
                    i18n_popup_close: "Luk",
                    i18n_popup_text: "Tak fordi du synes om dette!",
                    i18n_popup_donate: "Jeg �nsker at bidrage med en donation"
                },
                nl: {
                    i18n_like: "Leuk",
                    i18n_dislike: "Niet leuk",
                    i18n_after_like: "Leuk",
                    i18n_after_dislike: "Niet leuk",
                    i18n_like_tooltip: "Ik vind dit leuk",
                    i18n_dislike_tooltip: "Ik vind dit niet leuk",
                    i18n_unlike_tooltip: "Niet meer leuk",
                    i18n_undislike_tooltip: "Ik vind dit leuk",
                    i18n_share_text: "Wil je dit delen?",
                    i18n_popup_close: "Sluit",
                    i18n_popup_text: "We zijn blij dat je het leuk vond!",
                    i18n_popup_donate: "Donatie"
                },
                de: {
                    i18n_like: "Mag ich",
                    i18n_dislike: "Mag ich nicht",
                    i18n_after_like: "Mag ich",
                    i18n_after_dislike: "Mag ich nicht",
                    i18n_like_tooltip: "Gef�llt mir",
                    i18n_dislike_tooltip: "Gef�llt mir nicht",
                    i18n_unlike_tooltip: "Gef�llt mir nicht mehr",
                    i18n_undislike_tooltip: "Gef�llt mir wieder",
                    i18n_share_text: "M�chtest du es mit anderen teilen?",
                    i18n_popup_close: "Schlie�en",
                    i18n_popup_text: "Sch�n, dass es dir gef�llt!",
                    i18n_popup_donate: "Spenden"
                },
                el: {
                    i18n_like: "??? a??se?",
                    i18n_dislike: "?e? �a? ??at?",
                    i18n_after_like: "??? a??se?",
                    i18n_after_dislike: "?e? �a? ??at?",
                    i18n_like_tooltip: "??? a??se?",
                    i18n_dislike_tooltip: "?e? �a? ??at?",
                    i18n_unlike_tooltip: "?et????sa",
                    i18n_undislike_tooltip: "?et????sa",
                    i18n_share_text: "Te? ?a t? �???aste???",
                    i18n_popup_close: "??e?s?�?",
                    i18n_popup_text: "?a???�a? p?? s?? ??ese!",
                    i18n_popup_donate: "???a??st??�e!"
                },
                he: {
                    i18n_like: "?????",
                    i18n_dislike: "?? ?????",
                    i18n_after_like: "?????",
                    i18n_after_dislike: "?? ?????",
                    i18n_like_tooltip: "?????",
                    i18n_dislike_tooltip: "?? ?????",
                    i18n_unlike_tooltip: "?? ?????",
                    i18n_undislike_tooltip: "?????",
                    i18n_share_text: "?????",
                    i18n_popup_close: "?????",
                    i18n_popup_text: "????? ?????!",
                    i18n_popup_donate: "????"
                },
                hu: {
                    i18n_like: "Tetszik",
                    i18n_dislike: "Nem tetszik",
                    i18n_after_like: "Tetszik",
                    i18n_after_dislike: "Nem tetszik",
                    i18n_like_tooltip: "Kedvelem ezt",
                    i18n_dislike_tooltip: "Nem kedvelem ezt",
                    i18n_unlike_tooltip: "M�gsem tetszik",
                    i18n_undislike_tooltip: "M�gis tetszik",
                    i18n_share_text: "Szeretn� megosztani?",
                    i18n_popup_close: "Bez�r",
                    i18n_popup_text: "�r�l�nk, hogy tetszett!",
                    i18n_popup_donate: "T�mogass"
                },
                id: {
                    i18n_like: "Suka",
                    i18n_dislike: "Tidak Suka",
                    i18n_after_like: "Suka",
                    i18n_after_dislike: "Tidak Suka",
                    i18n_like_tooltip: "Aku suka ini",
                    i18n_dislike_tooltip: "Aku tidak suka ini",
                    i18n_unlike_tooltip: "Batal menyukai",
                    i18n_undislike_tooltip: "Batal tidak menyukai",
                    i18n_share_text: "Anda mau membagikan?",
                    i18n_popup_close: "Tutup",
                    i18n_popup_text: "Terima kasih karena mau menyukai!",
                    i18n_popup_donate: "Tunjukkan keramahan melalui bentuk menyumbang"
                },
                it: {
                    i18n_like: "Mi piace",
                    i18n_dislike: "Non mi piace",
                    i18n_after_like: "Mi piace",
                    i18n_after_dislike: "Non mi piace",
                    i18n_like_tooltip: "Mi piace questo",
                    i18n_dislike_tooltip: "Non mi piace questo",
                    i18n_unlike_tooltip: "Non mi piace pi�",
                    i18n_undislike_tooltip: "Mi piace",
                    i18n_share_text: "Vorresti condividere?",
                    i18n_popup_close: "Chiudi",
                    i18n_popup_text: "Spero ti sia piaciuto!",
                    i18n_popup_donate: "Mostra gratitudine sotto forma di una donazione"
                },
                ja: {
                    i18n_like: "????????",
                    i18n_dislike: "???????",
                    i18n_after_like: "????????",
                    i18n_after_dislike: "???????",
                    i18n_like_tooltip: "??????????",
                    i18n_dislike_tooltip: "????????????",
                    i18n_unlike_tooltip: "??????",
                    i18n_undislike_tooltip: "??????",
                    i18n_share_text: "??????????",
                    i18n_popup_close: "???",
                    i18n_popup_text: "????????????????",
                    i18n_popup_donate: "????"
                },
                kk: {
                    i18n_like: "??????",
                    i18n_dislike: "????????",
                    i18n_after_like: "??????",
                    i18n_after_dislike: "????????",
                    i18n_like_tooltip: "????? ??????",
                    i18n_dislike_tooltip: "????? ????????",
                    i18n_unlike_tooltip: "????? ?????",
                    i18n_undislike_tooltip: "????? ???????",
                    i18n_share_text: "??????",
                    i18n_popup_close: "????",
                    i18n_popup_text: "????????????? ?????????!",
                    i18n_popup_donate: "????? ????"
                },
                ko: {
                    i18n_like: "???",
                    i18n_dislike: "???",
                    i18n_after_like: "???",
                    i18n_after_dislike: "???",
                    i18n_like_tooltip: "? ?? ???",
                    i18n_dislike_tooltip: "? ?? ???",
                    i18n_unlike_tooltip: "??? ??",
                    i18n_undislike_tooltip: "??? ??",
                    i18n_share_text: "????????",
                    i18n_popup_close: "??",
                    i18n_popup_text: "'???'???? ?????.",
                    i18n_popup_donate: "??? ?? ???"
                },
                lv: {
                    i18n_like: "Patik",
                    i18n_dislike: "Nepatik",
                    i18n_after_like: "Patik",
                    i18n_after_dislike: "Nepatik",
                    i18n_like_tooltip: "Man patik",
                    i18n_dislike_tooltip: "Man nepatik",
                    i18n_unlike_tooltip: "Pardomaju",
                    i18n_undislike_tooltip: "Pardomaju",
                    i18n_share_text: "Vai velies dalities?",
                    i18n_popup_close: "Aizvert",
                    i18n_popup_text: "Prieks, ka patika!",
                    i18n_popup_donate: "Ziedo naudu"
                },
                lt: {
                    i18n_like: "Patinka",
                    i18n_dislike: "Nepatiko",
                    i18n_after_like: "Patinka",
                    i18n_after_dislike: "Nepatiko",
                    i18n_like_tooltip: "Man patiko",
                    i18n_dislike_tooltip: "Man nepatiko",
                    i18n_unlike_tooltip: "Nustoti megti",
                    i18n_undislike_tooltip: "Nustoti nemegti",
                    i18n_share_text: "Ar nori pasidalinti",
                    i18n_popup_close: "U�daryti",
                    i18n_popup_text: "Dekojame u� balsa!",
                    i18n_popup_donate: "Padekokite autoriui dovanele"
                },
                ne: {
                    i18n_like: "???? ????????",
                    i18n_dislike: "?????? ????????",
                    i18n_after_like: "???? ????????",
                    i18n_after_dislike: "?????? ????????",
                    i18n_like_tooltip: "?? ?????",
                    i18n_dislike_tooltip: "?? ????",
                    i18n_unlike_tooltip: "?? ????",
                    i18n_undislike_tooltip: "?? ?????",
                    i18n_share_text: "????? ???? ????????",
                    i18n_popup_close: "????",
                    i18n_popup_text: "???? ????? ?????? ?????? ???????",
                    i18n_popup_donate: "??? ????? ?????? ?????? ??????? !"
                },
                no: {
                    i18n_like: "Liker",
                    i18n_dislike: "Misliker",
                    i18n_after_like: "Liker",
                    i18n_after_dislike: "Misliker",
                    i18n_like_tooltip: "Jeg liker denne",
                    i18n_dislike_tooltip: "Jeg liker ikke denne",
                    i18n_unlike_tooltip: "Angre Liker",
                    i18n_undislike_tooltip: "Angre Liker ikke",
                    i18n_share_text: "�nsker du � dele",
                    i18n_popup_close: "Lukk",
                    i18n_popup_text: "Glad du likte det",
                    i18n_popup_donate: "Vis takknemlighet ved � gi donasjon"
                },
                pl: {
                    i18n_like: "Lubie",
                    i18n_dislike: "Nie lubie",
                    i18n_after_like: "Lubie",
                    i18n_after_dislike: "Nie lubie",
                    i18n_like_tooltip: "Lubie to",
                    i18n_dislike_tooltip: "Nie lubie tego",
                    i18n_unlike_tooltip: "Usun polubienie",
                    i18n_undislike_tooltip: "Usun nie lubie",
                    i18n_share_text: "Chcesz sie podzielic?",
                    i18n_popup_close: "Zamknij",
                    i18n_popup_text: "Dziekujemy, ze polubiles!",
                    i18n_popup_donate: "Okaz hojnosc przekazujac darowizne"
                },
                pt: {
                    i18n_like: "Gostar",
                    i18n_dislike: "N�o Gostar",
                    i18n_after_like: "Gostar",
                    i18n_after_dislike: "N�o Gostar",
                    i18n_like_tooltip: "Gostei",
                    i18n_dislike_tooltip: "N�o Gostei",
                    i18n_unlike_tooltip: "N�o gostar",
                    i18n_undislike_tooltip: "Tirar n�o gosto",
                    i18n_share_text: "Queres partilhar?",
                    i18n_popup_close: "Fechar",
                    i18n_popup_text: "Ainda bem que gostou!",
                    i18n_popup_donate: "Mostre a sua gratid�o, fazendo um donativo"
                },
                pt_BR: {
                    i18n_like: "Gostei",
                    i18n_dislike: "N�o Gostei",
                    i18n_after_like: "Gostei",
                    i18n_after_dislike: "N�o Gostei",
                    i18n_like_tooltip: "Eu gosto disso",
                    i18n_dislike_tooltip: "Eu n�o gosto disso",
                    i18n_unlike_tooltip: "Desfazer",
                    i18n_undislike_tooltip: "Desfazer",
                    i18n_share_text: "Voc� gostaria de compartilhar?",
                    i18n_popup_close: "Fechar",
                    i18n_popup_text: "Que bom que voc� gostou!",
                    i18n_popup_donate: "Mostre sua gratid�o em forma de doa��o"
                },
                ro: {
                    i18n_like: "�mi place",
                    i18n_dislike: "Nu-mi place",
                    i18n_after_like: "�mi place",
                    i18n_after_dislike: "Nu-mi place",
                    i18n_like_tooltip: "�mi place asta",
                    i18n_dislike_tooltip: "Nu-mi place asta",
                    i18n_unlike_tooltip: "Nu-mi place",
                    i18n_undislike_tooltip: "Nu-mi mai place",
                    i18n_share_text: "Vrei sa distribui?",
                    i18n_popup_close: "�nchide",
                    i18n_popup_text: "Bucuros ca va placut!",
                    i18n_popup_donate: "Exprimati-Va generozitatea printr-o donatie"
                },
                sr: {
                    i18n_like: "Dopada mi se",
                    i18n_dislike: "Ne dopada mi se",
                    i18n_after_like: "Dopada mi se",
                    i18n_after_dislike: "Ne dopada mi se",
                    i18n_like_tooltip: "Ovo mi se dopada",
                    i18n_dislike_tooltip: "Ovo mi se ne dopada?",
                    i18n_unlike_tooltip: "Poni�ti",
                    i18n_undislike_tooltip: "Poni�ti",
                    i18n_share_text: "Podeli sa drugima?",
                    i18n_popup_close: "Zatvori",
                    i18n_popup_text: "Drago nam je!",
                    i18n_popup_donate: "Donacije"
                },
                sk: {
                    i18n_like: "P�ci sa",
                    i18n_dislike: "Nep�ci sa",
                    i18n_after_like: "P�ci sa",
                    i18n_after_dislike: "Nep�ci sa",
                    i18n_like_tooltip: "P�ci sa mi to",
                    i18n_dislike_tooltip: "Nep�ci sa mi to",
                    i18n_unlike_tooltip: "Odobrat P�ci sa mi to",
                    i18n_undislike_tooltip: "Odobrat P�ci sa mi to",
                    i18n_share_text: "Chcete vyu�it mo�nost zdielania?",
                    i18n_popup_close: "Zavriet",
                    i18n_popup_text: "Sme rad�, �e sa V�m to p�cilo!",
                    i18n_popup_donate: "Prejavte n�m svoje podakovanie aj formou daru"
                },
                sl: {
                    i18n_like: "V�ec",
                    i18n_dislike: "Ni mi v�ec",
                    i18n_after_like: "V�ec",
                    i18n_after_dislike: "Ni mi v�ec",
                    i18n_like_tooltip: "V�ec mi je",
                    i18n_dislike_tooltip: "Ni mi v�ec to",
                    i18n_unlike_tooltip: "Si si premislil",
                    i18n_undislike_tooltip: "Ni mi bilo v�ec",
                    i18n_share_text: "Bi �elel deliti to?",
                    i18n_popup_close: "Zapri",
                    i18n_popup_text: "Lepo, da ti je v�ec",
                    i18n_popup_donate: "Doniranje omogoceno"
                },
                es: {
                    i18n_like: "Me gusta",
                    i18n_dislike: "No me gusta",
                    i18n_after_like: "Me gusta",
                    i18n_after_dislike: "No me gusta",
                    i18n_like_tooltip: "Me gusta esto",
                    i18n_dislike_tooltip: "No me gusta esto",
                    i18n_unlike_tooltip: "Quitar me gusta",
                    i18n_undislike_tooltip: "Quitar no me gusta",
                    i18n_share_text: "�Te gustar�a compartir?",
                    i18n_popup_close: "Cerrar",
                    i18n_popup_text: "�Nos alegra que te guste!",
                    i18n_popup_donate: "Demuestre su gratitud en la forma de un donativo"
                },
                sv: {
                    i18n_like: "Gilla",
                    i18n_dislike: "Ogilla",
                    i18n_after_like: "Gilla",
                    i18n_after_dislike: "Ogilla",
                    i18n_like_tooltip: "Det h�r gillar jag",
                    i18n_dislike_tooltip: "Det h�r gillar jag inte",
                    i18n_unlike_tooltip: "Tackar",
                    i18n_undislike_tooltip: "Det h�r var ju inte s� kul, men tack",
                    i18n_share_text: "Vill du dela med dig?",
                    i18n_popup_close: "St�ng",
                    i18n_popup_text: "Vi �r glada att du gillade det!",
                    i18n_popup_donate: "Donera"
                },
                th: {
                    i18n_like: "???",
                    i18n_dislike: "??????",
                    i18n_after_like: "???",
                    i18n_after_dislike: "??????",
                    i18n_like_tooltip: "?????????????",
                    i18n_dislike_tooltip: "????????????????",
                    i18n_unlike_tooltip: "???????",
                    i18n_undislike_tooltip: "??????",
                    i18n_share_text: "????????????????????",
                    i18n_popup_close: "???",
                    i18n_popup_text: "????????????????!",
                    i18n_popup_donate: "??????????????????????????????????"
                },
                tr: {
                    i18n_like: "Begen",
                    i18n_dislike: "Begenmedim",
                    i18n_after_like: "Begen",
                    i18n_after_dislike: "Begenmedim",
                    i18n_like_tooltip: "Begendim",
                    i18n_dislike_tooltip: "Begenmedim",
                    i18n_unlike_tooltip: "Begenmekten Vazge�",
                    i18n_undislike_tooltip: "Begen",
                    i18n_share_text: "Paylasmak ister misiniz?",
                    i18n_popup_close: "Kapat",
                    i18n_popup_text: "Begendigine sevindim!",
                    i18n_popup_donate: "Bagis yaparak memnuniyetinizi g�sterebilirsiniz"
                },
                uk: {
                    i18n_like: "???????????",
                    i18n_dislike: "?? ???????????",
                    i18n_after_like: "???????????",
                    i18n_after_dislike: "?? ???????????",
                    i18n_like_tooltip: "???? ???????????",
                    i18n_dislike_tooltip: "???? ?? ???????????",
                    i18n_unlike_tooltip: "?? ???????????",
                    i18n_undislike_tooltip: "???? ???????????",
                    i18n_share_text: "?????? ???????????",
                    i18n_popup_close: "???????",
                    i18n_popup_text: "????, ?? ??? ???????????!",
                    i18n_popup_donate: "?????????"
                },
                vi: {
                    i18n_like: "Th�ch",
                    i18n_dislike: "Kh�ng th�ch",
                    i18n_after_like: "Th�ch",
                    i18n_after_dislike: "Kh�ng th�ch",
                    i18n_like_tooltip: "�� h�m m?",
                    i18n_dislike_tooltip: "B?n kh�ng th�ch di?u n�y",
                    i18n_unlike_tooltip: "B? th�ch",
                    i18n_undislike_tooltip: "B? kh�ng th�ch",
                    i18n_share_text: "B?n c� mu?n chia s??",
                    i18n_popup_close: "��ng",
                    i18n_popup_text: "C?m on v� b?n d� th�ch n�!",
                    i18n_popup_donate: "T?ng"
                }
            };
            obj.dyn_settings = {
                values: []
            };
            obj.plans = {
                TRIAL: 9,
                FREE: 0,
                PLUS: 1,
                PRO: 2,
                VIP: 3,
                ULTRA: 4
            };
            obj.loaded_assets = [];
            obj.event_listeners = [];
            obj.loader_img = "data:image/gif;base64,R0lGODlhEAALAPQAAP///wAAANra2tDQ0Orq6gYGBgAAAC4uLoKCgmBgYLq6uiIiIkpKSoqKimRkZL6+viYmJgQEBE5OTubm5tjY2PT09Dg4ONzc3PLy8ra2tqCgoMrKyu7u7gAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA";
            obj.settings.set = function(index, property, value) {
                if (obj.settings.schema[property] == null) {
                    obj.log("Unknown property name: property: " + property + ", index: " + index);
                    return false
                }
                var schema = obj.settings.schema[property];
                var prepared_value;
                obj.assert(!schema.nonmodifiable, "Attempt to modify unmodifiable property: " + property);
                switch (schema.type) {
                case "bool":
                    prepared_value = obj.toBool(value);
                    break;
                case "url":
                    prepared_value = value + "";
                    obj.log((prepared_value.substr(0, 7) == "http://" || prepared_value.substr(0, 8) == "https://" || prepared_value.substr(0, 2) == "//"), "Wrong URL format: " + value);
                    break;
                case "string":
                    prepared_value = value + "";
                    break;
                case "lang":
                    prepared_value = value + "";
                    break
                }
                if (obj.isDefined(schema.escape)) {
                    switch (schema.escape) {
                    case "html":
                        prepared_value = obj.escapeHTML(prepared_value);
                        prepared_value = obj.replaceAll(/"/, "&quot;", prepared_value);
                        break;
                    case "no":
                    }
                } else {
                    if (prepared_value) {
                        prepared_value = obj.replaceAll(/"/, "", prepared_value + "")
                    }
                }
                if ((property == "theme" || property == "style") && !obj.inArray(prepared_value, obj.styles)) {
                    prepared_value = obj.getDefaultValue("theme")
                }
                if (property == "identifier") {
                    prepared_value = obj.normalizeIdentifier(prepared_value)
                }
                obj.settings.values[index][property] = prepared_value;
                if (property == "debug" && prepared_value) {
                    obj.debug = 1
                }
                return obj.settings
            };
            obj.settings.get = function(index, property) {
                obj.assert(typeof(obj.settings.values[index]) != "undefined", "Wrapper not found: " + index);
                obj.assert(typeof(obj.settings.values[index][property]) != "undefined", "Property not found: property: " + property + ", wrapper: " + index);
                var value = obj.settings.values[index][property];
                obj.assert(value != null, "Undefined property name '" + property + "'.");
                return value
            };
            obj.settings.setDefaultHost = function() {
                obj.settings.schema.host["def"] = obj.punycode.ToUnicode(obj.settings.schema.host["def"])
            };
            obj.dyn_settings.set = function(index, property, value) {
                if (!obj.isDefined(obj.dyn_settings.values[index])) {
                    obj.dyn_settings.values[index] = {}
                }
                obj.dyn_settings.values[index][property] = value;
                return obj.dyn_settings
            };
            obj.dyn_settings.get = function(index, property) {
                var value;
                if (obj.isDefined(obj.dyn_settings.values[index]) && obj.isDefined(obj.dyn_settings.values[index][property])) {
                    value = obj.dyn_settings.values[index][property]
                }
                return value
            };
            obj.assertionError = function(assertion_message) {
                this.message = assertion_message
            };
            obj.assertionError.prototype.toString = function() {
                return "LikeBtn: Assertion Error: " + (this.message || "[no message]")
            };
            obj.assert = function(condition, assertion_message) {
                if (!condition) {
                    obj.log("LikeBtn assertion failed: " + assertion_message);
                    throw new obj.assertionError(assertion_message)
                }
            };
            obj.toBool = function(value) {
                if (((!isNaN(parseInt(value)) && parseInt(value)) || value == "true") && value != "false") {
                    return 1
                } else {
                    return 0
                }
            };
            obj.validateSettings = function(index) {
                var errors = [];
                if (obj.getParameter(index, "voting_frequency") && obj.getParameter(index, "voting_both")) {
                    errors.push("voting_both and voting_frequency can not be used together")
                }
                return errors
            };
            obj.getDefaultSettings = function() {
                var settings = {};
                for (parameter in obj.settings.schema) {
                    settings[parameter] = obj.settings.schema[parameter]["def"]
                }
                return settings
            };
            obj.getDefaultValue = function(parameter) {
                if (typeof(obj.settings.schema[parameter]) != "undefined") {
                    return obj.settings.schema[parameter]["def"]
                } else {
                    return null
                }
            };
            obj.isLocaleSupported = function(locale) {
                var supported = false;
                for (var i = 0; i < obj.locales.length; i++) {
                    if (obj.locales[i] == locale) {
                        supported = true
                    }
                }
                return supported
            };
            obj.init = function(internal_launch) {
                if (document.body && typeof(document.body.style.maxHeight) === "undefined") {
                    return
                }
                obj.settings.setDefaultHost();
                if ((typeof(internal_launch) == "undefined" || !internal_launch || !obj.runned) && !obj.interval) {
                    obj.interval = setInterval(function() {
                        obj.initWrappers();
                        obj.loadBunch();
                        if (document.readyState === "complete") {
                            clearInterval(obj.interval);
                            obj.interval = 0
                        }
                    }, 100)
                }
                if (internal_launch && document.body) {
                    obj.addEventListener(document.body, "click", obj.onBodyClick)
                }
            };
            obj.initWrappers = function() {
                var index;
                obj.runned = 1;
                var wrappers = obj.q(".likebtn-wrapper");
                if (wrappers.length && !obj.pv_sent) {
                    obj.pv();
                    obj.pv_sent = true
                }
                for (for_index = 0; for_index < wrappers.length; for_index++) {
                    var wrapper = wrappers[for_index];
                    if (obj.hasClass(wrapper, "lb-loaded") || (typeof(wrapper.likebtn_loading) !== "undefined" && wrapper.likebtn_loading)) {
                        continue
                    }
                    wrapper.likebtn_loading = true;
                    wrapper.className += " lb-loaded";
                    index = obj.dyn_settings.values.length;
                    if (obj.dyn_settings.get(index, "loaded")) {
                        continue
                    }
                    obj.settings.values.push(obj.getDefaultSettings());
                    for (var property in obj.settings.schema) {
                        value = wrapper.getAttribute("data-" + property);
                        if (value) {
                            obj.settings.set(index, property, value)
                        }
                    }
                    if (!obj.needDomainFromParent(index)) {
                        obj.settings.values[index].url = window.location.href
                    } else {
                        if (document.referrer) {
                            obj.settings.values[index].url = document.referrer
                        } else {
                            obj.settings.values[index].url = window.location.href
                        }
                    }
                    if (!obj.getParameter(index, "identifier")) {
                        obj.settings.set(index, "identifier", obj.normalizeUrlIdentifier(obj.getParameter(index, "url")))
                    }
                    value = wrapper.getAttribute("data-color_scheme") || wrapper.getAttribute("data-style");
                    if (value) {
                        obj.settings.set(index, "theme", value)
                    }
                    if (wrapper.getAttribute("data-substract_dislikes")) {
                        obj.settings.set(index, "counter_type", "subtract_dislikes")
                    }
                    if (obj.getParameter(index, "counter_type") == "substract_dislikes") {
                        obj.settings.set(index, "counter_type", "subtract_dislikes")
                    }
                    if (wrapper.getAttribute("data-display_only") && obj.toBool(wrapper.getAttribute("data-display_only")) == 1) {
                        obj.settings.set(index, "voting_enabled", "0")
                    }
                    if (wrapper.getAttribute("data-show_copyright") && obj.toBool(wrapper.getAttribute("data-show_copyright")) == 0) {
                        obj.settings.set(index, "white_label", "1")
                    }
                    if (wrapper.getAttribute("data-unlike_allowed") && obj.toBool(wrapper.getAttribute("data-unlike_allowed")) == 0) {
                        obj.settings.set(index, "voting_cancelable", "0")
                    }
                    if (wrapper.getAttribute("data-revote_period")) {
                        obj.settings.set(index, "voting_frequency", wrapper.getAttribute("data-revote_period"))
                    }
                    if (wrapper.getAttribute("data-popup_enabled") && obj.toBool(wrapper.getAttribute("data-popup_enabled")) == 0) {
                        obj.settings.set(index, "popup_disabled", "1")
                    }
                    if (wrapper.getAttribute("data-bg_c") && !wrapper.getAttribute("data-bg_c_v")) {
                        obj.settings.set(index, "bg_c_v", wrapper.getAttribute("data-bg_c"))
                    }
                    var get_host = obj.getHost({}, index);
                    if (get_host && typeof(get_host.error_message) == "undefined" && typeof(get_host.h) != "undefined") {
                        obj.settings.set(index, "host", get_host.h)
                    }
                    obj.log("Settings loaded (index: " + index + ")", obj.settings.values[index]);
                    obj.dyn_settings.set(index, "wrapper", wrapper);
                    obj.dyn_settings.set(index, "counted", false);
                    obj.dyn_settings.set(index, "identifier_hash", obj.hashCodeMd5(obj.getParameter(index, "identifier")));
                    obj.dyn_settings.set(index, "ids_hash", obj.getIdsHash(obj.getParameter(index, "identifier"), obj.getParameter(index, "group_identifier"), obj.getParameter(index, "site_id")));
                    var settings_errors = obj.validateSettings(index);
                    if (settings_errors.length) {
                        obj.infoMessage(index, wrapper, settings_errors.join(". "));
                        obj.setLoaded(index, wrapper);
                        continue
                    }
                    obj.loadStyle(obj.getParameter(index, "theme"));
                    if (obj.getParameter(index, "ef_voting")) {
                        obj.loadAsset("/css/w/effect.css?v=37", "css")
                    }
                    var lang = obj.getParameter(index, "lang");
                    if (!obj.isLocaleSupported(lang)) {
                        obj.dyn_settings.set(index, "locale", obj.default_lang)
                    } else {
                        obj.dyn_settings.set(index, "locale", lang)
                    }
                    obj.load(index)
                }
            };
            obj.pv = function() {
                var pv_img = new Image();
                pv_img.src = "//pv.likebtn.com?nc=.php&t=" + Date.now() + "&h=" + encodeURIComponent(obj.settings.schema.host["def"])
            };
            obj.load = function(index) {
                if (obj.getParameter(index, "lazy_load") || obj.getParameter(index, "counter_count")) {
                    obj.addEventListener(window, "scroll", obj.onWindowScroll)
                }
                if (obj.inArray(index, obj.bunch)) {
                    return false
                }
                if (obj.getParameter(index, "loader_show")) {
                    var wrapper = obj.dyn_settings.get(index, "wrapper");
                    var loader_image = obj.getParameter(index, "loader_image");
                    if (!loader_image) {
                        loader_image = obj.loader_img
                    }
                    wrapper.innerHTML = '<img src="' + loader_image + '" />'
                }
                if (!obj.getParameter(index, "loader_show")) {
                    var ids_hash = obj.getIdsHash(obj.getParameter(index, "identifier"), obj.getParameter(index, "group_identifier"), obj.getParameter(index, "site_id"));
                    for (compare_index in obj.settings.values) {
                        if (compare_index == index) {
                            continue
                        }
                        if (obj.dyn_settings.get(compare_index, "ids_hash") == ids_hash && obj.dyn_settings.get(compare_index, "data")) {
                            obj.buttonShow(index, obj.dyn_settings.get(index, "wrapper"), obj.dyn_settings.get(compare_index, "data"));
                            return
                        }
                    }
                }
                obj.bunch_btns++;
                obj.bunch.push(index);
                if (obj.bunch.length >= obj.bunch_size) {
                    obj.loadBunch()
                }
            };
            obj.loadBunch = function() {
                if (!obj.bunch.length) {
                    return false
                }
                var url = "//wi.likebtn.com/w/i/";
                var settings_values = obj.getRequestSettingsItems(obj.bunch);
                if (obj.isDefined(settings_values.error_message)) {
                    var wrapper = obj.dyn_settings.get(index, "wrapper");
                    obj.infoMessage(index, wrapper, settings_values.error_message);
                    obj.setLoaded(index, wrapper);
                    return
                }
                url = url + "?s=" + obj.encodeSettings(settings_values);
                obj.log("Load HTML: " + url);
                obj.bunch = [];
                obj.JSONP.get(url, {}, function(data) {
                    if (obj.isDefined(data.p) && data.p > obj.plan) {
                        obj.plan = data.p
                    }
                    if (!data.is) {
                        return false
                    }
                    for (item_index in data.is) {
                        if (isNaN(parseInt(item_index))) {
                            continue
                        }
                        var item = data.is[item_index];
                        var index = obj.getIndexByIdentifierHash(item.ha, true);
                        var wrapper = obj.dyn_settings.get(index, "wrapper");
                        if (!wrapper) {
                            obj.log("Item wrapper not found: " + item.h);
                            continue
                        }
                        var item_data = {
                            di: data.di,
                            e: data.e,
                            ha: item.ha,
                            l: item.l,
                            d: item.d
                        };
                        if (typeof(data.sc) != "undefined") {
                            item_data.sc = data.sc
                        }
                        obj.dyn_settings.set(index, "data", item_data);
                        if (!obj.getParameter(index, "lazy_load") || obj.isVisible(index)) {
                            obj.buttonShow(index, wrapper, item_data)
                        }
                    }
                })
            };
            obj.vote = function(type, index, event) {
                obj.triggerEvent(obj.event_types.click, index);
                if (!obj.getParameter(index, "voting_enabled")) {
                    return
                }
                if (event) {
                    obj.stopPropagation(event);
                    if (typeof(event.preventDefault) !== "undefined" && typeof(event.target) !== "undefined" && (obj.hasClass(event.target, "likebtn-icon") || obj.hasClass(event.target, "likebtn-label") || obj.hasClass(event.target, "lb-count"))) {
                        event.preventDefault()
                    }
                }
                obj.closeAllPopups(index);
                if (type == 1) {
                    var share_active = obj.q("#lb-like-" + index + ".lb-share-active")
                } else {
                    var share_active = obj.q("#lb-dislike-" + index + ".lb-share-active")
                }
                if (typeof(share_active[0]) != "undefined" && !obj.getParameter(index, "popup_on_load")) {
                    return
                }
                if (obj.isGroupVoted(index)) {
                    return
                }
                check_voted = obj.q("#lb-like-" + index + ".lb-voted, #lb-dislike-" + index + ".lb-voted");
                if (check_voted[0] && !obj.getParameter(index, "voting_cancelable")) {
                    return
                }
                var settings_values = obj.getRequestSettings(index);
                settings_values.url = obj.getParameter(index, "url");
                var url = "//wv.likebtn.com/w/v/1/2";
                obj.assert(typeof(obj.settings.values[index]) != "undefined", "Settings not for LikeBtn: " + index);
                obj.log("Sending Vote request", obj.settings.values[index]);
                url = url.replace("/1/2", "/" + parseInt(type) + "/" + parseInt(index));
                url = url + "?s=" + encodeURIComponent(obj.JSON.encode(settings_values));
                url = url + "&ivt=" + obj.getItemVoteType(index);
                url = url + "&vb=" + obj.getParameter(index, "voting_both");
                url = url + "&vf=" + obj.getParameter(index, "voting_frequency");
                url = url + "&t=" + (new Date()).getTime() + "&nc=.php";
                var engine = obj.getParameter(index, "engine");
                if (!engine) {
                    engine = obj.guessEngine()
                }
                if (engine) {
                    url = url + "&engine=" + engine
                }
                if (obj.getParameter(index, "engine_v")) {
                    url = url + "&engine_v=" + obj.getParameter(index, "engine_v")
                }
                if (obj.getParameter(index, "plugin_v")) {
                    url = url + "&plugin_v=" + obj.getParameter(index, "plugin_v")
                }
                var prx = obj.getParameter(index, "prx");
                if (prx) {
                    if (prx.indexOf("?") > -1) {
                        prx += "&"
                    } else {
                        prx += "?"
                    }
                    url = prx + "likebtn_q=" + encodeURIComponent(obj.Base64.encode(url))
                }
                obj.log("Vote: " + url);
                obj.JSONP.get(url, {}, function(data) {
                    obj.triggerEvent(obj.event_types.voted, index, data);
                    obj.log("Vote result", data);
                    if (typeof(data.err) !== "undefined" && data.err == "site_id error") {
                        obj.infoMessage(index, obj.dyn_settings.get(index, "wrapper"), 'Current domain does not belong to the website with specified site_id. Please add domain "' + obj.getParameter(index, "host") + '" to the website on <a href="https://likebtn.com/en/customer.php/websites" title="Like Button">Websites</a> page.');
                        return
                    }
                    if (typeof(data.result) == "undefined" || !data.result || typeof(data.data.type) == "undefined") {
                        return
                    }
                    var identifier_hash = obj.getItemIdentifierHash(index);
                    obj.setCountsData(data.data.index, identifier_hash);
                    obj.setVotesData(data.data.index, data.data.type, identifier_hash)
                });
                var show_share = false;
                var click_el;
                var click_count_el;
                var other_el;
                var other_count_el;
                var other_clicked_count_el;
                var a_el;
                var share_el;
                if (type == 1) {
                    click_el = obj.q("#lb-like-" + index);
                    click_count_el = obj.q("#lb-like-" + index + " .lb-count");
                    click_label_el = obj.q("#lb-like-" + index + " .likebtn-label");
                    other_el = obj.q("#lb-dislike-" + index);
                    other_count_el = obj.q("#lb-dislike-" + index + " .lb-count");
                    other_clicked_count_el = obj.q("#lb-dislike-" + index + ".lb-voted .lb-count");
                    other_clicked_label_el = obj.q("#lb-dislike-" + index + ".lb-voted .likebtn-label");
                    show_share = true;
                    a_el = obj.q("#lb-like-" + index + " .lb-a");
                    share_el = obj.q("#lb-like-" + index + " .lb-share-tt")
                } else {
                    click_el = obj.q("#lb-dislike-" + index);
                    click_count_el = obj.q("#lb-dislike-" + index + " .lb-count");
                    click_label_el = obj.q("#lb-dislike-" + index + " .likebtn-label");
                    other_el = obj.q("#lb-like-" + index);
                    other_count_el = obj.q("#lb-like-" + index + " .lb-count");
                    other_clicked_count_el = obj.q("#lb-like-" + index + ".lb-voted .lb-count");
                    other_clicked_label_el = obj.q("#lb-like-" + index + ".lb-voted .likebtn-label");
                    if (obj.getParameter(index, "popup_dislike")) {
                        a_el = obj.q("#lb-dislike-" + index + " .lb-a");
                        share_el = obj.q("#lb-dislike-" + index + " .lb-share-tt");
                        show_share = true
                    }
                }
                var event_type = "";
                if (typeof(click_el[0]) != "undefined") {
                    if ((" " + click_el[0].className + " ").replace(/[\n\t]/g, " ").indexOf(" lb-voted ") > -1) {
                        if (typeof(click_el[0]) != "undefined") {
                            click_el[0].className = click_el[0].className.replace(/lb\-voted/, "")
                        } else {
                            obj.log("Clicked element not found on Vote")
                        }
                        if (typeof(click_count_el[0]) != "undefined") {
                            var cur_count = parseInt(click_count_el[0].getAttribute("data-count"));
                            if (!isNaN(cur_count) && cur_count) {
                                var new_count = cur_count - 1;
                                obj.updateCountsAfterClick(index, type, new_count, click_count_el[0], other_count_el[0])
                            }
                        } else {
                            obj.log("Click element count not found on Vote")
                        }
                        show_share = false;
                        obj.processGroupIdentifier(index, 0);
                        if (type == 1) {
                            event_type = obj.event_types.unlike;
                            if (obj.isDefined(click_label_el[0])) {
                                click_label_el[0].innerHTML = obj.getLabel(index, "i18n_like")
                            }
                        } else {
                            event_type = obj.event_types.undislike;
                            if (obj.isDefined(click_label_el[0])) {
                                click_label_el[0].innerHTML = obj.getLabel(index, "i18n_dislike")
                            }
                        }
                    } else {
                        if (typeof(click_el[0]) != "undefined") {
                            obj.removeClass(click_el[0], "lb-voted-now");
                            click_el[0].className += " lb-voted";
                            click_el[0].className += " lb-voted-now"
                        } else {
                            obj.log("Clicked element not found on Vote")
                        }
                        if (typeof(click_count_el[0]) != "undefined") {
                            var cur_count = parseInt(click_count_el[0].getAttribute("data-count"));
                            if (isNaN(cur_count)) {
                                cur_count = 0
                            }
                            var new_count = cur_count + 1;
                            obj.updateCountsAfterClick(index, type, new_count, click_count_el[0], other_count_el[0])
                        } else {
                            obj.log("Click element count not found on Vote")
                        }
                        if (!obj.getParameter(index, "voting_both")) {
                            if (typeof(other_el[0]) != "undefined") {
                                other_el[0].className = other_el[0].className.replace(/lb\-voted/, "")
                            } else {
                                obj.log("Other element not found on Vote")
                            }
                            if (typeof(other_clicked_count_el[0]) != "undefined") {
                                var cur_count = parseInt(other_clicked_count_el[0].getAttribute("data-count"));
                                if (!isNaN(cur_count) && cur_count) {
                                    var new_count = cur_count - 1;
                                    var opposite_type;
                                    if (type == 1) {
                                        opposite_type = "-1"
                                    } else {
                                        opposite_type = "1"
                                    }
                                    obj.updateCountsAfterClick(index, opposite_type, new_count, other_count_el[0], click_count_el[0])
                                }
                            }
                        }
                        obj.popupHide(null, index);
                        obj.processGroupIdentifier(index, 1);
                        if (type == 1) {
                            event_type = obj.event_types.like;
                            if (obj.isDefined(click_label_el[0])) {
                                if (obj.getParameter(index, "i18n_like") && !obj.getParameter(index, "i18n_after_like")) {
                                    click_label_el[0].innerHTML = obj.getLabel(index, "i18n_like")
                                } else {
                                    click_label_el[0].innerHTML = obj.getLabel(index, "i18n_after_like")
                                }
                            }
                            if (obj.isDefined(other_clicked_label_el[0]) && !obj.getParameter(index, "voting_both")) {
                                other_clicked_label_el[0].innerHTML = obj.getLabel(index, "i18n_dislike")
                            }
                        } else {
                            event_type = obj.event_types.dislike;
                            if (obj.isDefined(click_label_el[0])) {
                                if (obj.getParameter(index, "i18n_dislike") && !obj.getParameter(index, "i18n_after_dislike")) {
                                    click_label_el[0].innerHTML = obj.getLabel(index, "i18n_dislike")
                                } else {
                                    click_label_el[0].innerHTML = obj.getLabel(index, "i18n_after_dislike")
                                }
                            }
                            if (obj.isDefined(other_clicked_label_el[0]) && !obj.getParameter(index, "voting_both")) {
                                other_clicked_label_el[0].innerHTML = obj.getLabel(index, "i18n_like")
                            }
                        }
                    }
                    obj.showCounter(click_count_el[0], index);
                    obj.showCounter(other_clicked_count_el[0], index);
                    var wrapper = obj.dyn_settings.get(index, "wrapper");
                    if (obj.getParameter(index, "theme") == "custom") {
                        obj.showCustomVoting(wrapper)
                    }
                    if (obj.checkPlan(obj.plans.VIP)) {
                        var popup_disabled = obj.getParameter(index, "popup_disabled")
                    } else {
                        var popup_disabled = obj.getDefaultValue("popup_disabled")
                    }
                    if (show_share && !popup_disabled && typeof(click_el[0]) != "undefined") {
                        obj.popupShow(index, type)
                    } else {
                        obj.popupHide(null, index)
                    }
                    if (!obj.getParameter(index, "voting_cancelable")) {
                        if (obj.isDefined(wrapper)) {
                            wrapper.className += " lb-display-only"
                        }
                    }
                    obj.setCountsData(index);
                    obj.setVotesData(index, type);
                    obj.triggerEvent(event_type, index);
                    var cur_identifier = obj.getParameter(index, "identifier");
                    for (var i in obj.settings.values) {
                        if (i != index && obj.getParameter(i, "identifier") == cur_identifier && obj.dyn_settings.get(i, "wrapper") != obj.dyn_settings.get(index, "wrapper")) {
                            obj.refresh(i)
                        }
                    }
                }
            };
            obj.refresh = function(index) {
                obj.apply(obj.dyn_settings.get(index, "wrapper"), obj.settings.values[index])
            };
            obj.buttonShow = function(index, wrapper, data) {
                if (!obj.isDefined(wrapper)) {
                    wrapper = obj.dyn_settings.get(index, "wrapper")
                }
                if (!wrapper) {
                    return false
                }
                if (!obj.isDefined(data)) {
                    data = obj.dyn_settings.get(index, "data")
                }
                if (!data) {
                    return false
                }
                wrapper.className += " lb-style-" + obj.getParameter(index, "theme");
                wrapper.className += " lb-popup-position-" + obj.getParameter(index, "popup_position");
                if (!obj.getParameter(index, "tooltip_enabled")) {
                    wrapper.className += " lb-tooltip-disabled"
                }
                if (obj.getParameter(index, "tooltip_like_show_always")) {
                    wrapper.className += " lb-tooltip-like-show-always"
                }
                if (obj.getParameter(index, "tooltip_dislike_show_always")) {
                    wrapper.className += " lb-tooltip-dislike-show-always"
                }
                if (obj.getParameter(index, "counter_type") == "single_number") {
                    wrapper.className += " lb-counter-type-single-number"
                }
                if (obj.getParameter(index, "rtl")) {
                    wrapper.className += " lb-rtl"
                }
                wrapper.className += " lb-popup-style-" + obj.getParameter(index, "popup_style");
                if (data.di == "1") {
                    obj.infoMessage(index, wrapper, 'Your website has been disabled. Contact <a href="https://likebtn.com" title="Like Button">LikeBtn.com</a>');
                    return
                } else {
                    if (index >= obj.max_buttons_per_page[obj.plan] && obj.bunch_btns > obj.max_buttons_per_page[obj.plan] && obj.getParameter(index, "engine") != "weebly") {
                        obj.infoMessage(index, wrapper, obj.getPlanName(obj.plan) + " tariff plan allows to show maximum " + obj.max_buttons_per_page[obj.plan] + ' button(s) per page. Upgrade your website plan on <a href="https://likebtn.com/#plans_pricing" title="Like Button">LikeBtn.com</a>');
                        return
                    } else {
                        if (data.e) {
                            if (data.e == "site_id error") {
                                if (obj.getParameter(index, "engine") == "shopify") {
                                    obj.infoMessage(index, wrapper, 'It looks like you have changed the primary domain name of your Shopify website. Just log in <a href="https://likebtn.com/en/shopify/store.php/configure" title="Like Button Rating" target="_blank">here</a> and buttons will be automatically configured for the new domain name (you may need to clear your browser cache afterwards)')
                                } else {
                                    obj.infoMessage(index, wrapper, 'Current domain does not belong to the website with specified site_id. Please add domain "' + obj.getParameter(index, "host") + '" to the website on <a href="https://likebtn.com/en/customer.php/websites" title="Like Button">Websites</a> page.')
                                }
                            } else {
                                obj.infoMessage(index, wrapper, data.e)
                            }
                            return
                        } else {
                            wrapper.innerHTML = obj.getHtml(data, index);
                            if (obj.getParameter(index, "rich_snippet")) {
                                wrapper.setAttribute("itemscope", "");
                                wrapper.setAttribute("itemtype", "http://schema.org/Article")
                            }
                            if (!obj.getParameter(index, "voting_cancelable")) {
                                wrapper.className += " lb-unlike-not-allowed"
                            }
                            if (!obj.getParameter(index, "voting_enabled")) {
                                wrapper.className += " lb-display-only"
                            }
                            if (obj.getParameter(index, "vert")) {
                                wrapper.className += " lb-vert"
                            }
                        }
                    }
                }
                var item_counts = obj.getItemCountFromCookie(index);
                if ((obj.isDefined(item_counts) && item_counts) || obj.getParameter(index, "counter_zero_show")) {
                    if (obj.isDefined(item_counts["1"])) {
                        var like_count_el = obj.getItemCountEl(index, 1);
                        if (obj.isDefined(like_count_el)) {
                            item_counts["1"] = parseInt(item_counts["1"]);
                            if (isNaN(item_counts["1"])) {
                                item_counts["1"] = 0
                            }
                            obj.showCounter(like_count_el, index)
                        }
                    } else {
                        item_counts["1"] = 0
                    }
                    if (obj.isDefined(item_counts["-1"])) {
                        var dislike_count_el = obj.getItemCountEl(index, "-1");
                        if (obj.isDefined(dislike_count_el)) {
                            item_counts["-1"] = parseInt(item_counts["-1"]);
                            if (isNaN(item_counts["-1"])) {
                                item_counts["-1"] = 0
                            }
                            obj.showCounter(dislike_count_el, index)
                        }
                    } else {
                        item_counts["-1"] = 0
                    }
                    var counts = obj.getCountsPrepared(index, {
                        "1": item_counts["1"],
                        "-1": item_counts["-1"]
                    });
                    if (obj.isDefined(like_count_el)) {
                        like_count_el.innerHTML = counts["1"];
                        like_count_el.setAttribute("data-count", item_counts["1"]);
                        obj.showCounter(like_count_el, index)
                    }
                    if (obj.isDefined(dislike_count_el)) {
                        dislike_count_el.innerHTML = counts["-1"];
                        dislike_count_el.setAttribute("data-count", item_counts["-1"]);
                        obj.showCounter(dislike_count_el, index)
                    }
                }
                var item_vote_type = obj.getItemVoteType(index);
                if (item_vote_type) {
                    var l = data.l;
                    var d = data.d;
                    if (item_counts) {
                        if (item_counts["1"]) {
                            l = item_counts["1"]
                        }
                        if (item_counts["-1"]) {
                            d = item_counts["-1"]
                        }
                    }
                    l = parseInt(l);
                    d = parseInt(d);
                    if (isNaN(l)) {
                        l = 0
                    }
                    if (isNaN(d)) {
                        d = 0
                    }
                    var el_list = [];
                    if (item_vote_type == "-1" && d > 0) {
                        el_list.push(obj.q("#lb-dislike-" + index))
                    } else {
                        if (item_vote_type == "1" && l > 0) {
                            el_list.push(obj.q("#lb-like-" + index))
                        } else {
                            if (item_vote_type == "2") {
                                if (d > 0) {
                                    el_list.push(obj.q("#lb-dislike-" + index))
                                }
                                if (l > 0) {
                                    el_list.push(obj.q("#lb-like-" + index))
                                }
                            }
                        }
                    }
                    for (el_index in el_list) {
                        var el = el_list[el_index];
                        if (typeof(el[0]) != "undefined") {
                            el[0].className += " lb-voted";
                            var label = null;
                            if (obj.hasClass(el[0], "lb-like")) {
                                label = obj.q("#lb-like-" + index + " .likebtn-label")
                            } else {
                                label = obj.q("#lb-dislike-" + index + " .likebtn-label")
                            }
                            if (obj.isDefined(label[0])) {
                                if (obj.hasClass(el[0], "lb-like")) {
                                    if (obj.getParameter(index, "i18n_like") && !obj.getParameter(index, "i18n_after_like")) {
                                        label[0].innerHTML = obj.getLabel(index, "i18n_like")
                                    } else {
                                        label[0].innerHTML = obj.getLabel(index, "i18n_after_like")
                                    }
                                } else {
                                    if (obj.getParameter(index, "i18n_dislike") && !obj.getParameter(index, "i18n_after_dislike")) {
                                        label[0].innerHTML = obj.getLabel(index, "i18n_dislike")
                                    } else {
                                        label[0].innerHTML = obj.getLabel(index, "i18n_after_dislike")
                                    }
                                }
                            }
                        }
                    }
                }
                if (obj.getParameter(index, "theme") == "custom") {
                    obj.customTheme(index, wrapper)
                }
                obj.applyGroupIdentifier(index);
                obj.setPopupPosition(index);
                if (obj.getParameter(index, "popup_on_load")) {
                    obj.popupShow(index)
                }
                obj.setLoaded(index, wrapper);
                obj.triggerEvent(obj.event_types.loaded, index);
                if (obj.getParameter(index, "counter_count") && !obj.dyn_settings.get(index, "counted") && obj.isVisible(index)) {
                    obj.counterCount(index)
                }
            };
            obj.counterCount = function(index) {
                obj.dyn_settings.set(index, "counted", true);
                wrapper = obj.dyn_settings.get(index, "wrapper");
                if (!wrapper) {
                    return false
                }
                var likes = 0;
                var dislikes = 0;
                var el_l = obj.q("#lb-like-" + index + " .lb-count");
                var el_d = obj.q("#lb-dislike-" + index + " .lb-count");
                var like_count_el;
                var item_counts = obj.getItemCountFromCookie(index);
                if (typeof(el_l[0]) !== "undefined") {
                    like_count_el = el_l[0];
                    likes = parseInt(item_counts["1"]);
                    if (isNaN(likes)) {
                        likes = like_count_el.getAttribute("data-count")
                    }
                }
                var dislike_count_el;
                if (typeof(el_d[0]) !== "undefined") {
                    dislike_count_el = el_d[0];
                    dislikes = parseInt(item_counts["-1"]);
                    if (isNaN(dislikes)) {
                        dislikes = dislike_count_el.getAttribute("data-count")
                    }
                }
                window.setTimeout(function() {
                    obj.counterTick(index, like_count_el, dislike_count_el, 0, 0, likes, dislikes)
                }, obj.count_tstep)
            };
            obj.counterTick = function(index, like_count_el, dislike_count_el, cur_l, cur_d, likes, dislikes) {
                var done = 0;
                var step_l = likes * obj.count_tstep / obj.count_time;
                var step_d = dislikes * obj.count_tstep / obj.count_time;
                cur_l = Math.ceil(cur_l + step_l);
                if (cur_l >= likes) {
                    cur_l = likes;
                    done++
                }
                cur_d = Math.ceil(cur_d + step_d);
                if (cur_d >= dislikes) {
                    cur_d = dislikes;
                    done++
                }
                var counts = obj.getCountsPrepared(index, {
                    "1": cur_l,
                    "-1": cur_d
                });
                if (obj.isDefined(like_count_el)) {
                    like_count_el.innerHTML = counts["1"]
                }
                if (obj.isDefined(dislike_count_el)) {
                    dislike_count_el.innerHTML = counts["-1"]
                }
                if (done != 2) {
                    window.setTimeout(function() {
                        obj.counterTick(index, like_count_el, dislike_count_el, cur_l, cur_d, likes, dislikes)
                    }, obj.count_tstep)
                }
            };
            obj.getLabel = function(index, option, default_text) {
                var label = "";
                if (!obj.isDefined(default_text)) {
                    default_text = ""
                }
                if (obj.getParameter(index, option)) {
                    label = obj.getParameter(index, option)
                } else {
                    if (typeof(obj.translations[obj.dyn_settings.get(index, "locale")]) != "undefined") {
                        label = obj.translations[obj.dyn_settings.get(index, "locale")][option]
                    } else {
                        label = default_text
                    }
                }
                return label
            };
            obj.updateCountsAfterClick = function(index, type, new_count, click_count_el, other_count_el) {
                var counts;
                if (type == 1) {
                    counts = obj.getCountsPrepared(index, {
                        "1": new_count,
                        "-1": obj.getItemCount(index, "-1")
                    });
                    click_count_el.innerHTML = counts["1"];
                    if (obj.isDefined(other_count_el)) {
                        other_count_el.innerHTML = counts["-1"]
                    }
                } else {
                    counts = obj.getCountsPrepared(index, {
                        "1": obj.getItemCount(index, "1"),
                        "-1": new_count
                    });
                    click_count_el.innerHTML = counts["-1"];
                    if (obj.isDefined(other_count_el)) {
                        other_count_el.innerHTML = counts["1"]
                    }
                }
                click_count_el.setAttribute("data-count", new_count)
            };
            obj.setCountsData = function(index, identifier_hash) {
                var count_like = obj.getItemCount(index, 1);
                var count_dislike = obj.getItemCount(index, "-1");
                var cookie_count = {
                    "1": count_like,
                    "-1": count_dislike
                };
                if (!identifier_hash) {
                    identifier_hash = obj.getItemIdentifierHash(index)
                }
                var cookie_count_date = new Date();
                cookie_count_date.setSeconds(cookie_count_date.getSeconds() + parseInt(obj.cookie_count_lifetime));
                obj.setData(obj.cookie_count_name + "" + identifier_hash, obj.JSON.encode(cookie_count), {
                    expires: cookie_count_date,
                    path: "/"
                })
            };
            obj.setVotesData = function(index, type, identifier_hash) {
                if (!identifier_hash) {
                    identifier_hash = obj.getItemIdentifierHash(index)
                }
                if (type == 0) {
                    obj.removeData(obj.cookie_vote_name + "" + identifier_hash)
                } else {
                    cookie_votes = parseInt(type);
                    var cookie_date = new Date();
                    var voting_frequency = obj.getParameter(index, "voting_frequency");
                    var cookie_eternal = false;
                    voting_frequency = parseInt(voting_frequency);
                    if (voting_frequency && !isNaN(voting_frequency)) {
                        cookie_date.setSeconds(cookie_date.getSeconds() + voting_frequency)
                    } else {
                        cookie_date.setYear(cookie_date.getFullYear() + 1);
                        cookie_eternal = true
                    }
                    obj.setData(obj.cookie_vote_name + "" + identifier_hash, cookie_votes, {
                        expires: cookie_date,
                        path: "/"
                    }, cookie_eternal)
                }
            };
            obj.getRequestSettings = function(index) {
                var host = obj.getParameter(index, "host");
                var settings_values = {
                    h: "",
                    s: "",
                    i: ""
                };
                if (!obj.isDefined(obj.settings.values[index])) {
                    return settings_values
                }
                settings_values = obj.getHost(settings_values, index);
                settings_values.h = obj.normalizeHost(settings_values.h);
                settings_values.s = obj.getParameter(index, "site_id");
                settings_values.i = obj.settings.values[index]["identifier"];
                return settings_values
            };
            obj.getRequestSettingsItems = function(items) {
                var index = items[0];
                var item_hash = "";
                var settings_values = {
                    h: "",
                    s: "",
                    i: []
                };
                if (!obj.isDefined(obj.settings.values[index])) {
                    return settings_values
                }
                settings_values = obj.getHost(settings_values, index);
                settings_values.h = obj.normalizeHost(settings_values.h);
                settings_values.s = obj.getParameter(index, "site_id");
                for (var i = 0; i < items.length; i++) {
                    item_hash = obj.hashCodeMd5(obj.settings.values[items[i]]["identifier"]);
                    settings_values.i.push(item_hash)
                }
                return settings_values
            };
            obj.getHost = function(settings_values, index) {
                var host = obj.getParameter(index, "host");
                var url = window.location.href;
                var local_domain = obj.trim(obj.getParameter(index, "local_domain"));
                var is_local_domain = false;
                if (obj.isDefined(local_domain) && local_domain) {
                    if (obj.isDomainLocal(local_domain)) {
                        local_domain = obj.punycode.ToUnicode(local_domain);
                        var current_domain = obj.punycode.ToUnicode(window.location.hostname);
                        var local_domain_host = obj.extractHostFromLocalDomain(local_domain);
                        if (local_domain_host == current_domain) {
                            host = local_domain;
                            is_local_domain = true
                        } else {
                            settings_values.error_message = 'Domain "' + local_domain_host + '" specified in local_domain parameter does not match current page domain "' + current_domain + '", parameter is ignored (see <a href="//likebtn.com/en/faq#local_domain" title="Like Button FAQ">LikeBtn.com FAQ</a>)';
                            return settings_values
                        }
                    } else {
                        settings_values.error_message = 'Passed local_domain parameter "' + local_domain + '" has wrong format, parameter is ignored (see <a href="//likebtn.com/en/faq#local_domain" title="Like Button FAQ">LikeBtn.com FAQ</a>)';
                        return settings_values
                    }
                } else {
                    if (obj.needDomainFromParent(index)) {
                        var url = document.referrer;
                        var referrer_host = obj.getDomainFromUrl(url);
                        if (referrer_host) {
                            host = referrer_host
                        }
                    }
                }
                if (!is_local_domain) {
                    var subdirectory = obj.normalizeSubdirectory(obj.getParameter(index, "subdirectory"));
                    if (subdirectory) {
                        var cur_subdirectory = obj.normalizeSubdirectory(obj.getPathFromUrl(url));
                        if (!cur_subdirectory.match(new RegExp("^" + obj.regexpQuote(subdirectory)))) {
                            settings_values.error_message = 'Current subdirectory "' + cur_subdirectory + '" does not match the specified subdirectory: "' + subdirectory + '"';
                            return settings_values
                        } else {
                            host = host + subdirectory
                        }
                    }
                }
                settings_values.h = host;
                return settings_values
            };
            obj.encodeSettings = function(settings_values) {
                var settings = encodeURIComponent(obj.JSON.encode(settings_values));
                return settings
            };
            obj.needDomainFromParent = function(index) {
                if (obj.getParameter(index, "domain_from_parent") && window.location != window.parent.location) {
                    return true
                } else {
                    return false
                }
            };
            obj.getHtml = function(data, index) {
                var lb_html = "";
                var settings = null;
                var translation = {};
                if (!obj.isDefined(data)) {
                    return lb_html
                }
                if (obj.isDefined(obj.settings.values[index])) {
                    settings = obj.settings.values[index]
                }
                translation = obj.translations[obj.dyn_settings.get(index, "locale")];
                if (!settings || !translation) {
                    return lb_html
                }
                var counts = obj.getCountsPrepared(index, {
                    "1": data.l,
                    "-1": data.d
                });
                var counter_like_show = true;
                if ((!counts["1"] && obj.getParameter(index, "counter_type") != "percent" && !obj.getParameter(index, "counter_zero_show")) || !obj.getParameter(index, "counter_show")) {
                    counter_like_show = false
                }
                var counter_like_html = '<span class="lb-count' + (!counter_like_show ? " lb-hidden" : "") + '" data-count="' + data.l + '">' + counts["1"] + "</span>";
                var counter_dislike_show = true;
                if ((!counts["-1"] && obj.getParameter(index, "counter_type") != "percent" && !obj.getParameter(index, "counter_zero_show")) || !obj.getParameter(index, "counter_show") || obj.getParameter(index, "counter_type") == "subtract_dislikes") {
                    counter_dislike_show = false
                }
                var counter_dislike_html = '<span class="lb-count' + (!counter_dislike_show ? " lb-hidden" : "") + '" data-count="' + data.d + '">' + counts["-1"] + "</span>";
                if (settings.like_enabled || !settings.dislike_enabled) {
                    lb_html += '<span class="likebtn-button lb-like' + (settings.counter_clickable ? " lb-counter-clickable" : "") + (settings.ef_voting ? " lb-ef-" + settings.ef_voting : "") + '" id="lb-like-' + index + '" ' + (settings.counter_clickable ? 'onclick="LikeBtn.vote(1, ' + index + ', event);"' : "") + ">";
                    lb_html += "<span " + ((!settings.counter_clickable) ? 'onclick="LikeBtn.vote(1, ' + index + ', event);"' : "") + ' class="lb-a" data-lb_index="' + index + '">';
                    lb_html += '<i class="lb-tt lb-tooltip-tt"><i class="lb-tt-lt"></i><i class="lb-tt-rt"></i><i class="lb-tt-m">' + (settings.i18n_like_tooltip ? settings.i18n_like_tooltip : translation.i18n_like_tooltip) + '</i><i class="lb-tt-mu">' + (settings.i18n_unlike_tooltip ? settings.i18n_unlike_tooltip : translation.i18n_unlike_tooltip) + '</i><i class="lb-tt-m2"></i><i class="lb-tt-lb"></i><i class="lb-tt-rb"></i><i class="lb-tt-a"></i></i>';
                    if (settings.icon_like_show || !settings.show_like_label) {
                        lb_html += '<span class="likebtn-icon lb-like-icon">&nbsp;</span>'
                    }
                    if (settings.show_like_label) {
                        lb_html += '<span class="likebtn-label lb-like-label">' + (settings.i18n_like ? settings.i18n_like : translation.i18n_like) + "</span>"
                    }
                    lb_html += "</span>" + counter_like_html + "</span>"
                }
                if (settings.dislike_enabled) {
                    lb_html += '<span class="likebtn-button lb-dislike ' + (settings.counter_clickable ? " lb-counter-clickable" : "") + (settings.ef_voting ? " lb-ef-" + settings.ef_voting : "") + '" id="lb-dislike-' + index + '" ' + (settings.counter_clickable ? 'onclick="LikeBtn.vote(-1, ' + index + ', event);"' : "") + ">";
                    lb_html += "<span " + ((!settings.counter_clickable) ? 'onclick="LikeBtn.vote(-1, ' + index + ', event);"' : "") + ' class="lb-a" data-lb_index="' + index + '">';
                    lb_html += '<i class="lb-tt lb-tooltip-tt"><i class="lb-tt-lt"></i><i class="lb-tt-rt"></i><i class="lb-tt-m">' + (settings.i18n_dislike_tooltip ? settings.i18n_dislike_tooltip : translation.i18n_dislike_tooltip) + '</i><i class="lb-tt-mu">' + (settings.i18n_undislike_tooltip ? settings.i18n_undislike_tooltip : translation.i18n_undislike_tooltip) + '</i><i class="lb-tt-m2"></i><i class="lb-tt-lb"></i><i class="lb-tt-rb"></i><i class="lb-tt-a"></i></i>';
                    if (settings.icon_dislike_show || !settings.show_dislike_label) {
                        lb_html += '<span class="likebtn-icon lb-dislike-icon">&nbsp;</span>'
                    }
                    if (settings.show_dislike_label) {
                        lb_html += '<span class="likebtn-label lb-dislike-label">' + (settings.i18n_dislike ? settings.i18n_dislike : translation.i18n_dislike) + "</span>"
                    }
                    lb_html += "</span>" + counter_dislike_html + "</span>"
                }
                if (obj.getParameter(index, "rich_snippet")) {
                    var rc_values = obj.getRichSnippetValues(data);
                    var item_date = obj.getParameter(index, "item_date");
                    if (!item_date) {
                        item_date = "2018-12-23T00:00:00+00:00"
                    }
                    lb_html += '<meta itemprop="name" content="' + obj.getParameter(index, "item_title") + '" /><meta itemprop="headline" content="' + obj.getParameter(index, "item_title") + '" /><meta itemprop="description" content="' + obj.getParameter(index, "item_description") + '" /><meta itemprop="image" content="' + obj.getParameter(index, "item_image") + '" /><meta itemprop="datePublished" content="' + item_date + '" /><meta itemprop="url" content="' + obj.getParameter(index, "item_url") + '" /><span itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating"><meta itemprop="worstRating" content="1" /><meta itemprop="bestRating" content="5" /><meta itemprop="ratingValue" content="' + rc_values.value + '" /><meta itemprop="ratingCount" content="' + rc_values.count + '" /></span>'
                }
                return lb_html
            };
            obj.setLoaded = function(index, wrapper) {
                wrapper.likebtn_loading = false;
                obj.dyn_settings.set(index, "loaded", true)
            };
            obj.getRichSnippetValues = function(data) {
                var likes = parseInt(data.l);
                if (isNaN(likes)) {
                    likes = 0
                }
                var dislikes = parseInt(data.d);
                if (isNaN(dislikes)) {
                    dislikes = 0
                }
                var count = likes + dislikes;
                var value = 0;
                if (count > 0) {
                    value = Math.round((((likes * 5 + dislikes) / count) * 10) / 10)
                }
                return {
                    count: count,
                    value: value
                }
            };
            obj.customTheme = function(index, wrapper) {
                var btn_size = parseInt(obj.getParameter(index, "btn_size"));
                var bg_c = obj.getParameter(index, "bg_c");
                var brdr_c = obj.getParameter(index, "brdr_c");
                if (btn_size || bg_c || brdr_c) {
                    var lb_like = wrapper.getElementsByClassName("lb-like")[0];
                    var lb_dislike = wrapper.getElementsByClassName("lb-dislike")[0]
                }
                if (btn_size) {
                    if (btn_size > 1000) {
                        btn_size = 1000
                    }
                    wrapper.style.lineHeight = btn_size + "px"
                }
                if (lb_like) {
                    if (btn_size) {
                        lb_like.style.height = btn_size + "px"
                    }
                    if (bg_c) {
                        lb_like.style.backgroundColor = bg_c
                    }
                    if (brdr_c) {
                        lb_like.style.borderColor = brdr_c
                    }
                }
                if (lb_dislike) {
                    if (btn_size) {
                        lb_dislike.style.height = btn_size + "px"
                    }
                    if (bg_c) {
                        lb_dislike.style.backgroundColor = bg_c
                    }
                    if (brdr_c) {
                        lb_dislike.style.borderColor = brdr_c
                    }
                }
                var icon_l = obj.getParameter(index, "icon_l");
                var icon_l_url = obj.getParameter(index, "icon_l_url");
                var icon_l_url_v = obj.getParameter(index, "icon_l_url_v");
                var like_icon = wrapper.getElementsByClassName("lb-like-icon")[0];
                var icon_l_c = obj.getParameter(index, "icon_l_c");
                if (like_icon) {
                    if (icon_l_url) {
                        if (!icon_l_url_v) {
                            icon_l_url_v = icon_l_url
                        }
                        obj.removeClass(like_icon, "lb-fi");
                        like_icon.outerHTML = '<img src="' + icon_l_url + '" class="' + like_icon.className + '"/><img src="' + icon_l_url_v + '" class="' + like_icon.className + ' lb-icon-v"/>'
                    } else {
                        if (icon_l) {
                            obj.loadAsset("/css/w/icons.css?v=37", "css");
                            like_icon.outerHTML = '<span class="lb-fi-' + icon_l + " " + like_icon.className + ' lb-fi"></span>';
                            like_icon = wrapper.getElementsByClassName("lb-like-icon")[0];
                            if (icon_l_c) {
                                like_icon.style.color = icon_l_c
                            }
                            var icon_size = obj.getParameter(index, "icon_size");
                            if (icon_size) {
                                like_icon.style.fontSize = icon_size + "px";
                                if (btn_size) {
                                    like_icon.style.height = btn_size + "px"
                                }
                            }
                        }
                    }
                }
                var icon_d = obj.getParameter(index, "icon_d");
                var icon_d_url = obj.getParameter(index, "icon_d_url");
                var icon_d_url_v = obj.getParameter(index, "icon_d_url_v");
                var dislike_icon = wrapper.getElementsByClassName("lb-dislike-icon")[0];
                var icon_d_c = obj.getParameter(index, "icon_d_c");
                if (dislike_icon) {
                    if (icon_d_url) {
                        if (!icon_d_url_v) {
                            icon_d_url_v = icon_d_url
                        }
                        obj.removeClass(dislike_icon, "lb-fi");
                        dislike_icon.outerHTML = '<img src="' + icon_d_url + '" class="' + dislike_icon.className + '"/><img src="' + icon_d_url_v + '" class="' + dislike_icon.className + ' lb-icon-v"/>'
                    } else {
                        if (icon_d) {
                            obj.loadAsset("/css/w/icons.css?v=37", "css");
                            dislike_icon.outerHTML = '<span class="lb-fi-' + icon_d + " " + dislike_icon.className + ' lb-fi"></span>';
                            dislike_icon = wrapper.getElementsByClassName("lb-dislike-icon")[0];
                            if (icon_d_c) {
                                dislike_icon.style.color = icon_d_c
                            }
                            var icon_size = obj.getParameter(index, "icon_size");
                            if (icon_size) {
                                dislike_icon.style.fontSize = icon_size + "px";
                                if (btn_size) {
                                    dislike_icon.style.height = btn_size + "px"
                                }
                            }
                        }
                    }
                }
                var f_size = parseInt(obj.getParameter(index, "f_size"));
                var f_family = obj.getParameter(index, "f_family");
                var label_fs = obj.getParameter(index, "label_fs");
                var counter_fs = obj.getParameter(index, "counter_fs");
                var label_c = obj.getParameter(index, "label_c");
                var counter_l_c = obj.getParameter(index, "counter_l_c");
                var counter_d_c = obj.getParameter(index, "counter_d_c");
                var like_label = wrapper.getElementsByClassName("lb-like-label")[0];
                var like_count = obj.q1("#lb-like-" + index + " .lb-count");
                var dislike_label = wrapper.getElementsByClassName("lb-dislike-label")[0];
                var dislike_count = obj.q1("#lb-dislike-" + index + " .lb-count");
                if (like_label) {
                    if (f_size) {
                        like_label.style.fontSize = f_size + "px"
                    }
                    if (f_family) {
                        like_label.style.fontFamily = f_family
                    }
                    if (label_fs) {
                        obj.fontStyle(like_label, label_fs)
                    }
                    if (label_c) {
                        like_label.style.color = label_c
                    }
                }
                if (like_count) {
                    if (f_size) {
                        like_count.style.fontSize = f_size + "px"
                    }
                    if (f_family) {
                        like_count.style.fontFamily = f_family
                    }
                    if (counter_fs) {
                        obj.fontStyle(like_count, counter_fs)
                    }
                    if (counter_l_c) {
                        like_count.style.color = counter_l_c
                    }
                }
                if (dislike_label) {
                    if (f_size) {
                        dislike_label.style.fontSize = f_size + "px"
                    }
                    if (f_family) {
                        dislike_label.style.fontFamily = f_family
                    }
                    if (label_fs) {
                        obj.fontStyle(dislike_label, label_fs)
                    }
                    if (label_c) {
                        dislike_label.style.color = label_c
                    }
                }
                if (dislike_count) {
                    if (f_size) {
                        dislike_count.style.fontSize = f_size + "px"
                    }
                    if (f_family) {
                        dislike_count.style.fontFamily = f_family
                    }
                    if (counter_fs) {
                        obj.fontStyle(dislike_count, counter_fs)
                    }
                    if (counter_d_c) {
                        dislike_count.style.color = counter_d_c
                    }
                }
                obj.showCustomVoting(wrapper);
                var icon_l_c_v = obj.getParameter(index, "icon_l_c_v");
                var icon_d_c_v = obj.getParameter(index, "icon_d_c_v");
                var label_c_v = obj.getParameter(index, "label_c_v");
                var bg_c_v = obj.getParameter(index, "bg_c_v");
                if (icon_l_c_v || icon_d_c || label_c_v || icon_l_c || icon_d_c || bg_c_v) {
                    var lb_a = wrapper.getElementsByClassName("lb-a");
                    for (i in lb_a) {
                        if (isNaN(parseInt(i))) {
                            continue
                        }
                        lb_a[i].onmouseover = function(e) {
                            obj.onMouseOver(e)
                        };
                        lb_a[i].onmouseout = function(e) {
                            var el = e.target;
                            if (!obj.hasClass(el, "lb-a")) {
                                el = el.parentElement
                            }
                            if (obj.hasClass(el.parentElement, "lb-voted")) {
                                return
                            }
                            obj.removeCustomVoting(el)
                        }
                    }
                }
            };
            obj.showCustomVoting = function(wrapper) {
                var lb_a = wrapper.getElementsByClassName("lb-a");
                for (i in lb_a) {
                    if (isNaN(parseInt(i))) {
                        continue
                    }
                    if (obj.hasClass(lb_a[i].parentElement, "lb-voted")) {
                        obj.onMouseOver({
                            target: lb_a[i]
                        })
                    } else {
                        obj.removeCustomVoting(lb_a[i])
                    }
                }
            };
            obj.removeCustomVoting = function(el) {
                if (el.hasAttribute("data-icon_c")) {
                    var data_icon_c = el.getAttribute("data-icon_c");
                    var icon_el = el.getElementsByClassName("likebtn-icon")[0];
                    icon_el.style.color = data_icon_c;
                    el.removeAttribute("data-icon_c")
                }
                if (el.hasAttribute("data-label_c")) {
                    var data_label_c = el.getAttribute("data-label_c");
                    var label_el = el.getElementsByClassName("likebtn-label")[0];
                    label_el.style.color = data_label_c;
                    el.removeAttribute("data-label_c")
                }
                var btn_el = el.parentElement;
                if (btn_el.hasAttribute("data-bg_c")) {
                    var data_bg_c = btn_el.getAttribute("data-bg_c");
                    btn_el.style.backgroundColor = data_bg_c;
                    btn_el.removeAttribute("data-bg_c")
                }
            };
            obj.onMouseOver = function(e) {
                var el = e.target;
                if (!obj.hasClass(el, "lb-a")) {
                    el = el.parentElement
                }
                var index = parseInt(el.getAttribute("data-lb_index"));
                if (!el || isNaN(index)) {
                    return
                }
                var label_c = obj.getParameter(index, "label_c");
                var icon_class = "";
                if (obj.hasClass(el.parentElement, "lb-like")) {
                    icon_class = "icon_l_c"
                } else {
                    icon_class = "icon_d_c"
                }
                var icon_c = obj.getParameter(index, icon_class);
                if (!el.hasAttribute("data-icon_c")) {
                    var icon_c_v = obj.getParameter(index, icon_class + "_v");
                    var data_icon_c = el.getAttribute("data-icon_c");
                    var icon_el = el.getElementsByClassName("likebtn-icon")[0];
                    if (icon_c_v && icon_el) {
                        var cur_c = icon_el.style.color;
                        if (icon_c && icon_el) {
                            el.setAttribute("data-icon_c", cur_c);
                            icon_el.style.color = icon_c_v
                        }
                    }
                }
                if (!el.hasAttribute("data-label_c")) {
                    var label_c_v = obj.getParameter(index, "label_c_v");
                    var data_label_c = el.getAttribute("data-label_c");
                    var label_el = el.getElementsByClassName("likebtn-label")[0];
                    if (label_c_v && label_el) {
                        var cur_c = label_el.style.color;
                        if (label_c && label_el) {
                            el.setAttribute("data-label_c", cur_c);
                            label_el.style.color = label_c_v
                        }
                    }
                }
                btn_el = el.parentElement;
                if (!btn_el) {
                    return
                }
                if (!btn_el.hasAttribute("data-bg_c")) {
                    var bg_c_v = obj.getParameter(index, "bg_c_v");
                    var data_bg_c = btn_el.getAttribute("data-bg_c");
                    var bg_c = obj.getParameter(index, "bg_c");
                    if (bg_c_v && btn_el) {
                        var cur_c = btn_el.style.backgroundColor;
                        if (bg_c) {
                            btn_el.setAttribute("data-bg_c", cur_c);
                            btn_el.style.backgroundColor = bg_c_v
                        }
                    }
                }
            };
            obj.fontStyle = function(el, fs) {
                if (fs == "r") {
                    el.style.fontWeight = "normal"
                } else {
                    if (fs == "ri") {
                        el.style.fontWeight = "normal";
                        el.style.fontStyle = "italic"
                    } else {
                        if (fs == "b") {
                            el.style.fontWeight = "bold"
                        } else {
                            if (fs == "bi") {
                                el.style.fontWeight = "bold";
                                el.style.fontStyle = "italic"
                            }
                        }
                    }
                }
            };
            obj.getParameter = function(index, name) {
                return obj.settings.get(index, name)
            };
            obj.getItemCount = function(index, type) {
                if (!type) {
                    return undefined
                }
                var count_el = obj.getItemCountEl(index, type);
                if (typeof(count_el) != "undefined") {
                    return count_el.getAttribute("data-count")
                }
                return undefined
            };
            obj.getItemCountEl = function(index, type) {
                if (type == 1) {
                    var count_el = obj.q("#lb-like-" + index + " .lb-count")
                } else {
                    var count_el = obj.q("#lb-dislike-" + index + " .lb-count")
                }
                if (typeof(count_el[0]) != "undefined") {
                    return count_el[0]
                }
                return undefined
            };
            obj.getCountsPrepared = function(index, values) {
                var counts = {};
                values["1"] = parseInt(values["1"]);
                if (isNaN(values["1"])) {
                    values["1"] = 0
                }
                values["-1"] = parseInt(values["-1"]);
                if (isNaN(values["-1"])) {
                    values["-1"] = 0
                }
                var counter_type = obj.getParameter(index, "counter_type");
                if (counter_type == "percent") {
                    var sum = values["1"] + values["-1"];
                    var like_percent;
                    var dislike_percent;
                    if (sum) {
                        like_percent = Math.round((values["1"] * 100) / sum);
                        dislike_percent = 100 - like_percent
                    } else {
                        like_percent = 50;
                        dislike_percent = 50
                    }
                    counts = {
                        "1": like_percent + "%",
                        "-1": dislike_percent + "%"
                    }
                } else {
                    if (counter_type == "subtract_dislikes") {
                        var diff_value = values["1"] - values["-1"];
                        counts = {
                            "1": diff_value,
                            "-1": 0
                        }
                    } else {
                        if (counter_type == "single_number") {
                            var diff_value = values["1"] - values["-1"];
                            if (diff_value > 0) {
                                counts = {
                                    "1": diff_value,
                                    "-1": 0
                                }
                            } else {
                                if (diff_value < 0) {
                                    counts = {
                                        "1": 0,
                                        "-1": diff_value
                                    }
                                } else {
                                    counts = {
                                        "1": 0,
                                        "-1": 0
                                    }
                                }
                            }
                        } else {
                            counts = {
                                "1": values["1"],
                                "-1": values["-1"]
                            }
                        }
                    }
                }
                if (counter_type != "percent") {
                    var counter_frmt = obj.getParameter(index, "counter_frmt");
                    if (counter_frmt == "km") {
                        counts["1"] = obj.km(counts["1"]);
                        counts["-1"] = obj.km(counts["-1"])
                    } else {
                        var sep = "";
                        if (counter_frmt == "space") {
                            sep = " "
                        } else {
                            if (counter_frmt == "period") {
                                sep = "."
                            } else {
                                if (counter_frmt == "comma") {
                                    sep = ","
                                } else {
                                    if (counter_frmt == "apo") {
                                        sep = "'"
                                    }
                                }
                            }
                        }
                        counts["1"] = obj.sep(counts["1"], sep);
                        counts["-1"] = obj.sep(counts["-1"], sep)
                    }
                }
                var padding = obj.getParameter(index, "counter_padding");
                if (padding != "") {
                    counts["1"] = obj.paddingApply(padding, counts["1"]);
                    counts["-1"] = obj.paddingApply(padding, counts["-1"])
                }
                return counts
            };
            obj.sep = function(n, sep) {
                if (n < 1000) {
                    return n
                } else {
                    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep)
                }
            };
            obj.km = function(n) {
                if (n < 1000) {
                    return n
                }
                if (n < 999999) {
                    var v = n / 1000;
                    v = v.toFixed(1);
                    if (v - Math.floor(v) == 0) {
                        v = Math.floor(v)
                    }
                    return v + "K"
                }
                if (n >= 1000000) {
                    var v = n / 1000000;
                    v = v.toFixed(1);
                    if (v - Math.floor(v) == 0) {
                        v = Math.floor(v)
                    }
                    return v + "M"
                }
            };
            obj.paddingApply = function(padding, value) {
                var v = value + "";
                v = v.split("");
                var p = padding.split("");
                if (p.length > v.length) {
                    var result = [];
                    var v_index = 0;
                    for (var i = 0; i < p.length; i++) {
                        v_index = i - (p.length - v.length);
                        if (obj.isDefined(v[v_index])) {
                            result[i] = v[v_index]
                        } else {
                            result[i] = p[i]
                        }
                    }
                    return result.join("")
                }
                return value
            };
            obj.getItemVoteType = function(index) {
                var identifier_hash = obj.getItemIdentifierHash(index);
                if (identifier_hash) {
                    var cookie_votes = obj.getData(obj.cookie_vote_name + "" + identifier_hash);
                    if (!obj.isDefined(cookie_votes)) {
                        var cookie_votes_old = obj.getCookieAsObject(obj.cookie_vote_name);
                        if (obj.isDefined(cookie_votes_old) && obj.isDefined(cookie_votes_old[identifier_hash]) && !isNaN(parseInt(cookie_votes_old[identifier_hash]) && parseInt(cookie_votes_old[identifier_hash]))) {
                            return parseInt(cookie_votes_old[identifier_hash])
                        }
                    } else {
                        if (parseInt(cookie_votes)) {
                            return parseInt(cookie_votes)
                        }
                    }
                }
                var vt = obj.getParameter(index, "vt");
                if (vt && !isNaN(parseInt(vt))) {
                    return parseInt(vt)
                }
                return ""
            };
            obj.getItemCountFromCookie = function(index) {
                var identifier_hash = obj.getItemIdentifierHash(index);
                if (identifier_hash) {
                    var cookie_count = obj.getCookieAsObject(obj.cookie_count_name + "" + identifier_hash);
                    if (obj.isDefined(cookie_count)) {
                        return cookie_count
                    }
                }
                return ""
            };
            obj.getCookieAsObject = function(name) {
                var cookie_str = obj.getData(name);
                return obj.JSON.decode(cookie_str)
            };
            obj.getItemIdentifier = function(index) {
                var item_identifier = obj.getParameter(index, "identifier");
                if (!item_identifier) {
                    item_identifier = obj.normalizeUrlIdentifier(obj.getParameter(index, "url"))
                }
                return obj.normalizeIdentifier(item_identifier)
            };
            obj.normalizeIdentifier = function(identifier) {
                if (identifier && typeof(obj.norm_identifiers[identifier]) !== "undefined") {
                    return obj.norm_identifiers[identifier]
                }
                if (identifier && identifier.length * 2 > obj.identifier_maxl && obj.utf8ByteCount(identifier) > obj.identifier_maxl) {
                    norm_identifier = obj.mbSubstr(identifier, 0, obj.identifier_maxl)
                } else {
                    norm_identifier = identifier
                }
                obj.norm_identifiers[identifier] = norm_identifier;
                return norm_identifier
            };
            obj.mbSubstr = function(str, start, len) {
                str = str.substr(start, len);
                for (var i = str.length - 1; i > 0; i--) {
                    str = str.substr(start, i + 1);
                    if (obj.utf8ByteCount(str) <= len) {
                        return str
                    }
                }
                return str
            };
            obj.utf8Len = function(codePoint) {
                if (codePoint >= 55296 && codePoint <= 57343) {
                    return 0
                }
                if (codePoint < 0) {
                    return 0
                }
                if (codePoint <= 127) {
                    return 1
                }
                if (codePoint <= 2047) {
                    return 2
                }
                if (codePoint <= 65535) {
                    return 3
                }
                if (codePoint <= 2097151) {
                    return 4
                }
                if (codePoint <= 67108863) {
                    return 5
                }
                if (codePoint <= 2147483647) {
                    return 6
                }
                return 0
            };
            obj.isHighSurrogate = function(codeUnit) {
                return codeUnit >= 55296 && codeUnit <= 56319
            };
            obj.isLowSurrogate = function(codeUnit) {
                return codeUnit >= 56320 && codeUnit <= 57343
            };
            obj.toCodepoint = function(highCodeUnit, lowCodeUnit) {
                if (!obj.isHighSurrogate(highCodeUnit)) {
                    throw new Error("Illegal argument: " + highCodeUnit)
                }
                if (!obj.isLowSurrogate(lowCodeUnit)) {
                    throw new Error("Illegal argument: " + lowCodeUnit)
                }
                highCodeUnit = (1023 & highCodeUnit) << 10;
                var u = highCodeUnit | (1023 & lowCodeUnit);
                return u + 65536
            };
            obj.utf8ByteCount = function(str) {
                var count = 0;
                for (var i = 0; i < str.length; i++) {
                    var ch = str.charCodeAt(i);
                    try {
                        if (obj.isHighSurrogate(ch)) {
                            var high = ch;
                            var low = str.charCodeAt(++i);
                            count += obj.utf8Len(obj.toCodepoint(high, low))
                        } else {
                            count += obj.utf8Len(ch)
                        }
                    } catch (e) {}
                }
                return count
            };
            obj.getItemIdentifierHash = function(index) {
                var item_identifier = obj.getItemIdentifier(index);
                return obj.hashCodeMd5(item_identifier)
            };
            obj.getIndexByIdentifierHash = function(identifier_hash, only_unloaded) {
                for (var index in obj.dyn_settings.values) {
                    if (obj.dyn_settings.get(index, "identifier_hash") == identifier_hash) {
                        if (obj.isDefined(only_unloaded) && only_unloaded) {
                            if (obj.isDefined(obj.dyn_settings.get(index, "loaded"))) {
                                continue
                            }
                        }
                        return index
                    }
                }
                return -1
            };
            obj.normalizeUrlIdentifier = function(url) {
                var parser = document.createElement("a");
                parser.href = url;
                var normalized_identifier = parser.pathname;
                normalized_identifier = decodeURIComponent(normalized_identifier);
                if (!normalized_identifier) {
                    normalized_identifier = "/"
                }
                if (normalized_identifier.charAt(0) != "/") {
                    normalized_identifier = "/" + normalized_identifier
                }
                return obj.normalizeIdentifier(normalized_identifier)
            };
            obj.showCounter = function(el, index) {
                if (typeof(el) != "undefined") {
                    var counter_type = obj.getParameter(index, "counter_type");
                    if (((parseInt(el.innerHTML) == 0 && counter_type != "percent") || !obj.getParameter(index, "counter_show")) && !obj.getParameter(index, "counter_zero_show")) {
                        el.style.display = "none"
                    } else {
                        if (el.parentNode && obj.hasClass(el.parentNode, "lb-dislike") && counter_type == "subtract_dislikes") {
                            el.style.display = "none"
                        } else {
                            el.style.display = "inline-block"
                        }
                    }
                }
            };
            obj.processGroupIdentifier = function(voted_index, add) {
                var group_identifier = obj.getParameter(voted_index, "group_identifier");
                var wrapper;
                if (!obj.isDefined(add)) {
                    add = 1
                }
                if (!obj.isDefined(group_identifier) || !group_identifier) {
                    return
                }
                var item_hash = obj.getItemIdentifierHash(voted_index);
                var stored_group_identifier = obj.getData(obj.cookie_group_identifier);
                if (!obj.isDefined(stored_group_identifier)) {
                    stored_group_identifier = {}
                }
                if (add) {
                    stored_group_identifier[group_identifier] = item_hash
                } else {
                    if (obj.isDefined(stored_group_identifier[group_identifier]) && stored_group_identifier[group_identifier] == item_hash) {
                        delete stored_group_identifier[group_identifier]
                    }
                }
                obj.setData(obj.cookie_group_identifier, stored_group_identifier, {
                    expires: obj.datePlus(),
                    path: "/"
                }, true);
                var new_voting_enabled;
                if (add) {
                    new_voting_enabled = "0"
                } else {
                    new_voting_enabled = "1"
                }
                for (index = 0; index < obj.settings.values.length; index++) {
                    if (index != voted_index && obj.getParameter(index, "group_identifier") == group_identifier) {
                        obj.settings.set(index, "voting_enabled", new_voting_enabled);
                        wrapper = obj.dyn_settings.get(index, "wrapper");
                        if (obj.isDefined(wrapper)) {
                            if (add) {
                                wrapper.className += " lb-display-only"
                            } else {
                                obj.removeClass(wrapper, "lb-display-only")
                            }
                        }
                    }
                }
            };
            obj.isGroupVoted = function(index) {
                var group_identifier = obj.getParameter(index, "group_identifier");
                if (!group_identifier) {
                    return false
                }
                var stored_group_identifier = obj.getData(obj.cookie_group_identifier);
                if (stored_group_identifier && stored_group_identifier[group_identifier] && stored_group_identifier[group_identifier] != obj.getItemIdentifierHash(index)) {
                    return true
                }
            };
            obj.applyGroupIdentifier = function(index) {
                var group_identifier = obj.getParameter(index, "group_identifier");
                var item_hash = obj.getItemIdentifierHash(index);
                var wrapper;
                if (!obj.isDefined(group_identifier) || !group_identifier) {
                    return
                }
                stored_group_identifier = obj.getData(obj.cookie_group_identifier);
                if (!obj.isDefined(stored_group_identifier)) {
                    stored_group_identifier = {}
                }
                if (obj.isDefined(stored_group_identifier[group_identifier]) && stored_group_identifier[group_identifier] != item_hash) {
                    obj.settings.set(index, "voting_enabled", 0);
                    wrapper = obj.dyn_settings.get(index, "wrapper");
                    if (obj.isDefined(wrapper)) {
                        wrapper.className += " lb-display-only"
                    }
                }
            };
            obj.datePlus = function(ms) {
                if (typeof(ms) === "undefined") {
                    ms = 365 * 24 * 60 * 60 * 1000
                }
                var date = new Date();
                date.setTime(date.getTime() + ms);
                return date
            };
            obj.setPopupPosition = function(index) {
                if (obj.getParameter(index, "popup_position") == "right") {
                    el_like = obj.q("#lb-like-" + index);
                    el_popups = obj.q("#lb-like-" + index + " .lb-tt");
                    if (obj.isDefined(el_like[0])) {
                        for (popup_index in el_popups) {
                            el_popups[popup_index].style.left = (parseInt(el_like[0].clientWidth) + 5) + "px"
                        }
                    }
                    el_dislike = obj.q("#lb-dislike-" + index);
                    el_popups = obj.q("#lb-dislike-" + index + " .lb-tt");
                    if (obj.isDefined(el_dislike[0])) {
                        for (popup_index in el_popups) {
                            el_popups[popup_index].style.left = (parseInt(el_dislike[0].clientWidth) + 5) + "px"
                        }
                    }
                }
            };
            obj.setPopupWidth = function(index) {
                var popup_width = parseInt(obj.getParameter(index, "popup_width"));
                if (isNaN(popup_width)) {
                    popup_width = obj.getDefaultValue("popup_width")
                }
                if (popup_width < obj.popup_min_w) {
                    popup_width = obj.popup_min_w
                }
                popup_width = popup_width - obj.popup_padding;
                var btns = ["like", "dislike"];
                for (btn in btns) {
                    var addthis_toolbox = obj.q("#lb-" + btns[btn] + "-" + index + " .addthis_toolbox");
                    if (obj.isDefined(addthis_toolbox[0]) && obj.hasClass(addthis_toolbox[0], "addthis_toolbox")) {
                        addthis_toolbox[0].style.width = popup_width + "px"
                    }
                    var footer = obj.q("#lb-" + btns[btn] + "-" + index + " .lb-share-tt-ft");
                    if (obj.isDefined(footer[0]) && obj.hasClass(footer[0], "lb-share-tt-ft")) {
                        footer[0].style.minWidth = popup_width + "px"
                    }
                }
            };
            obj.hashCodeMd5 = function(str) {
                var hash = obj.md5.md5(str);
                return hash.substr(0, 12)
            };
            obj.trim = function(str) {
                str += "";
                return str.replace(/^\s+|\s+$/g, "")
            };
            obj.inArray = function(needle, haystack) {
                var length = haystack.length;
                for (var i = 0; i < length; i++) {
                    if (haystack[i] == needle) {
                        return true
                    }
                }
                return false
            };
            obj.escapeHTML = function(string) {
                var pre = document.createElement("pre");
                var text = document.createTextNode(string);
                pre.appendChild(text);
                return pre.innerHTML
            };
            obj.unescapeHTML = function(string) {
                var e = document.createElement("div");
                e.innerHTML = string;
                return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue
            };
            obj.checkPlan = function(plan) {
                if (obj.plan >= plan) {
                    return true
                } else {
                    return false
                }
            };
            obj.getPopupDonateHtml = function(donate_str, index) {
                var html = "";
                var donate_obj = null;
                donate_str = obj.unescapeHTML(donate_str);
                donate_obj = obj.unserializeDonateStr(donate_str);
                if (!donate_obj) {
                    return
                }
                var purpose = document.title;
                if (donate_obj.purpose) {
                    purpose = donate_obj.purpose
                } else {
                    if (obj.getParameter(index, "item_title")) {
                        purpose = obj.getParameter(index, "item_title")
                    }
                }
                for (var system in donate_obj.payment_systems) {
                    html += obj.getPaymentSystemHtml(donate_obj.payment_systems[system], purpose);
                    html += "&nbsp;"
                }
                if (html) {
                    html = '<div class="lb-donate-container">' + html + "</div>"
                }
                return html
            };
            obj.getPaymentSystemHtml = function(system, purpose) {
                var html = "";
                var href = "";
                var amount = "";
                var amount_integer = parseInt(system.amount_integer);
                var amount_fractional = parseInt(system.amount_fractional);
                if (system.amount_integer || system.amount_fractional) {
                    if (isNaN(amount_integer)) {
                        amount_integer = 0
                    }
                    if (isNaN(amount_fractional)) {
                        amount_fractional = 0
                    }
                    amount = amount_integer + "." + amount_fractional
                }
                purpose = obj.replaceAll(/["&]/, "", purpose);
                switch (system.system) {
                case "PayPal":
                    href = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=" + escape(system.account) + "&item_name=" + purpose + "&currency_code=" + escape(system.currency) + "&amount=" + escape(amount);
                    break;
                case "Bitcoin":
                    href = "bitcoin:" + escape(system.account) + "?label=" + purpose;
                    break;
                case "Google Wallet":
                    href = "mailto:" + escape(system.account) + "?Subject=" + purpose;
                    break;
                case "Yandex.Money":
                    href = "https://money.yandex.ru/quickpay/confirm.xml?quickpay-form=donate&receiver=" + escape(system.account) + "&sum=" + escape(amount) + "&targets=" + purpose + "&payment-type-choice=on&mobile-payment-type-choice=on";
                    break;
                case "WebMoney":
                    href = "https://advisor.wmtransfer.com/Spasibo.aspx?url=" + escape(system.account);
                    break;
                case "Qiwi":
                    href = "https://visa.qiwi.com/payment/transfer/form.action?extra[%27account%27]=" + escape(system.account) + "&amountInteger=" + escape(system.amount_integer) + "&amountFraction=" + escape(system.amount_fractional) + "&extra[%27comment%27]=" + purpose;
                    break;
                case "SmsCoin":
                    var language_full = system.language;
                    if (system.language == "en") {
                        language_full = "english";
                        href = "http://donate.smscoin.com/js/smsdonate/index_en.html"
                    } else {
                        if (language_full == "ru") {
                            language_full = "russian"
                        }
                        href = "http://donate.smscoin.com/js/smsdonate/index.html"
                    }
                    href += "?sid=" + escape(system.account) + "&language=" + escape(language_full);
                    break;
                case "Zaypay":
                    if (system.language) {
                        href = "http://www.zaypay.com//" + escape(system.language) + "/pay/" + escape(system.account) + "/payments/new"
                    } else {
                        href = "http://www.zaypay.com/pay/" + escape(system.account)
                    }
                    break
                }
                if (href) {
                    var system_prepared = obj.replaceAll(/[^A-z0-9]/, "", system.system.toLowerCase());
                    html += '<a href="' + href + '" target="_blank" class="lb-donate lb-donate-' + system_prepared + '"></a>';
                    obj.loadAsset("/css/w/popup_donate.css?v=37", "css")
                }
                return html
            };
            obj.unserializeDonateStr = function(donate_str) {
                var donate_obj = null;
                if (donate_str) {
                    donate_obj = obj.JSON.decode(donate_str);
                    if (typeof(donate_obj.purpose) == "undefined") {
                        donate_obj.purpose = ""
                    }
                    if (typeof(donate_obj.payment_systems) == "undefined") {
                        donate_obj.payment_systems = []
                    }
                    for (var system in donate_obj.payment_systems) {
                        if (typeof(donate_obj.payment_systems[system].system) == "undefined") {
                            donate_obj.payment_systems[system].system = ""
                        }
                        if (typeof(donate_obj.payment_systems[system].account) == "undefined") {
                            donate_obj.payment_systems[system].account = ""
                        }
                        if (typeof(donate_obj.payment_systems[system].amount_fractional) == "undefined") {
                            donate_obj.payment_systems[system].amount_fractional = ""
                        }
                        if (typeof(donate_obj.payment_systems[system].amount_integer) == "undefined") {
                            donate_obj.payment_systems[system].amount_integer = ""
                        }
                        if (typeof(donate_obj.payment_systems[system].currency) == "undefined") {
                            donate_obj.payment_systems[system].currency = ""
                        }
                        if (typeof(donate_obj.payment_systems[system].language) == "undefined") {
                            donate_obj.payment_systems[system].language = ""
                        }
                    }
                    donate_obj = obj.escapeDonateObj(donate_obj)
                }
                return donate_obj
            };
            obj.escapeDonateObj = function(donate_obj, slash_quotes) {
                if (typeof(donate_obj) != "undefined") {
                    if (typeof(slash_quotes) != "undefined" && slash_quotes) {
                        donate_obj.purpose = obj.replaceAll('"', "\\&quot;", donate_obj.purpose)
                    } else {
                        donate_obj.purpose = obj.replaceAll('"', "&quot;", donate_obj.purpose)
                    }
                    donate_obj.purpose = obj.replaceAll(/&/, "", donate_obj.purpose);
                    for (var system in donate_obj.payment_systems) {
                        if (isNaN(parseInt(system))) {
                            continue
                        }
                        donate_obj.payment_systems[system].system = obj.replaceAll(/["&]/, "", donate_obj.payment_systems[system].system);
                        donate_obj.payment_systems[system].account = obj.replaceAll(/["&]/, "", donate_obj.payment_systems[system].account);
                        if (typeof(donate_obj.payment_systems[system].amount_fractional) != "undefined") {
                            donate_obj.payment_systems[system].amount_fractional = obj.replaceAll(/["&]/, "", donate_obj.payment_systems[system].amount_fractional)
                        }
                        if (typeof(donate_obj.payment_systems[system].amount_integer) != "undefined") {
                            donate_obj.payment_systems[system].amount_integer = obj.replaceAll(/["&]/, "", donate_obj.payment_systems[system].amount_integer)
                        }
                        if (typeof(donate_obj.payment_systems[system].currency) != "undefined") {
                            donate_obj.payment_systems[system].currency = obj.replaceAll(/["&]/, "", donate_obj.payment_systems[system].currency)
                        }
                        if (typeof(donate_obj.payment_systems[system].language) != "undefined") {
                            donate_obj.payment_systems[system].language = obj.replaceAll(/["&]/, "", donate_obj.payment_systems[system].language)
                        }
                    }
                }
                return donate_obj
            };
            obj.loadAsset = function(path, type) {
                obj.log("Loading asset: " + path);
                var d = window.document;
                if (obj.inArray(path, obj.loaded_assets)) {
                    return false
                }
                var asset_link = d.createElement("link");
                switch (type) {
                case "css":
                case "text/css":
                    asset_link.type = "text/css";
                    asset_link.rel = "stylesheet"
                }
                asset_link.href = "//w.likebtn.com" + path;
                (d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0]).appendChild(asset_link);
                obj.loaded_assets.push(path);
                return true
            };
            obj.loadStyle = function(style) {
                var style_index = 0;
                for (var i = 0; i < obj.styles.length; i++) {
                    if (obj.styles[i] == style) {
                        style_index = i;
                        break
                    }
                }
                var style_css_index = Math.ceil(style_index / obj.styles_per_css);
                if (style_css_index > 1) {
                    var asset_url = obj.css_path + "style" + style_css_index + ".css";
                    obj.loadAsset(asset_url, "css")
                }
                return true
            };
            obj.isDomainLocal = function(host) {
                if (obj.isDefined(host) && host.match(new RegExp("^[^" + obj.local_delimiter + "]+" + obj.local_delimiter + "[^" + obj.local_delimiter + "]+$"))) {
                    return true
                } else {
                    return false
                }
            };
            obj.extractHostFromLocalDomain = function(host) {
                return host.replace(new RegExp("^([^" + obj.local_delimiter + "]+)" + obj.local_delimiter + "[^" + obj.local_delimiter + "]+$"), "$1")
            };
            obj.log = function(msg, object) {
                if (!obj.debug) {
                    return
                }
                window_obj.console && window_obj.console.log("LikeBtn: " + msg);
                if (typeof(object) != "undefined") {
                    window_obj.console && window_obj.console.log(object)
                }
            };
            obj.cloneObject = function(object) {
                if (object == null || typeof(object) != "object") {
                    return object
                }
                var temp = object.constructor();
                for (var key in object) {
                    temp[key] = obj.cloneObject(object[key])
                }
                return temp
            };
            obj.popupShow = function(index, type) {
                var click_el;
                var a_el = [];
                var popup_el = [];
                click_el_l = obj.q("#lb-like-" + index);
                click_el_d = obj.q("#lb-dislike-" + index);
                if ((!obj.isDefined(type) || type == 1 || !click_el_d.length) && click_el_l.length) {
                    type = 1;
                    click_el = click_el_l;
                    a_el = obj.q("#lb-like-" + index + " .lb-a");
                    popup_el = obj.q("#lb-like-" + index + " .lb-share-tt")
                } else {
                    type = -1;
                    click_el = click_el_d;
                    if (obj.getParameter(index, "popup_dislike")) {
                        a_el = obj.q("#lb-dislike-" + index + " .lb-a");
                        popup_el = obj.q("#lb-dislike-" + index + " .lb-share-tt")
                    }
                }
                obj.dyn_settings.set(index, "no_popup_close", true);
                window.setTimeout(function() {
                    obj.dyn_settings.set(index, "no_popup_close", false)
                }, obj.popup_close_delay);
                if (popup_el && obj.isDefined(popup_el[0])) {
                    click_el[0].className += " lb-share-active";
                    obj.setCssProperty(popup_el[0], "display", "block")
                } else {
                    if (a_el && obj.isDefined(a_el[0])) {
                        var popup_content = '<i class="lb-tt lb-share-tt" style="display: block !important"><i class="lb-tt-lt"></i><i class="lb-tt-rt"></i><i class="lb-tt-m2"></i><i class="lb-tt-m" style="display: block !important">';
                        var share_enabled = obj.getDefaultValue("share_enabled");
                        if (obj.checkPlan(obj.plans.PLUS)) {
                            share_enabled = obj.getParameter(index, "share_enabled")
                        }
                        var popup_share_html = "";
                        if (share_enabled) {
                            popup_share_html += '<div class="lb-popup-label lb-popup-label-share">' + obj.getLabel(index, "i18n_share_text", "Would you like to share?") + "</div>";
                            var item_url = obj.getParameter(index, "item_url");
                            if (!item_url) {
                                if (obj.needDomainFromParent(index)) {
                                    if (document.referrer) {
                                        item_url = document.referrer
                                    } else {
                                        item_url = window.location.href
                                    }
                                } else {
                                    item_url = window.location.href
                                }
                            }
                            var share_size = obj.getParameter(index, "share_size");
                            var addthis_size = "";
                            if (!share_size || share_size == "small") {} else {
                                if (share_size == "medium") {
                                    addthis_size = "addthis_20x20_style"
                                } else {
                                    if (share_size == "large") {
                                        addthis_size = "addthis_32x32_style"
                                    }
                                }
                            }
                            popup_share_html += '<span class="addthis_toolbox addthis_default_style ' + addthis_size + '" addthis:url="' + item_url + '" ';
                            var item_title = obj.getParameter(index, "item_title");
                            if (item_title) {
                                popup_share_html += ' addthis:title="' + item_title + '" '
                            }
                            var item_description = obj.getParameter(index, "item_description");
                            if (item_description) {
                                popup_share_html += ' addthis:description="' + item_description + '" '
                            }
                            popup_share_html += ">";
                            var custom_addthis_service_codes = obj.getParameter(index, "addthis_service_codes");
                            var addthis_service_codes = [];
                            if (obj.checkPlan(obj.plans.PRO) && custom_addthis_service_codes) {
                                addthis_service_codes = custom_addthis_service_codes.split(",")
                            } else {
                                if (obj.isDefined(obj.addthis_buttons[obj.dyn_settings.get(index, "locale")])) {
                                    addthis_service_codes = obj.addthis_buttons[obj.dyn_settings.get(index, "locale")]
                                } else {
                                    addthis_service_codes = obj.addthis_buttons.all
                                }
                            }
                            for (var addthis_index in addthis_service_codes) {
                                if (addthis_index >= obj.share_buttons_count || isNaN(parseInt(addthis_index))) {
                                    break
                                }
                                popup_share_html += '<a class="addthis_button_' + obj.trim(addthis_service_codes[addthis_index]) + '"></a>'
                            }
                            popup_share_html += "</span>"
                        }
                        var popup_donate = obj.getDefaultValue("popup_donate");
                        var popup_donate_html = "";
                        if (obj.checkPlan(obj.plans.VIP)) {
                            popup_donate = obj.getParameter(index, "popup_donate");
                            popup_donate_html = obj.getPopupDonateHtml(popup_donate, index);
                            if (popup_donate && !popup_donate_html) {
                                obj.log("Could not parse popup donate JSON:" + popup_donate)
                            }
                        }
                        var popup_html = obj.getDefaultValue("popup_html");
                        if (obj.checkPlan(obj.plans.PRO)) {
                            popup_html = obj.getParameter(index, "popup_html");
                            popup_html = obj.replaceAll(/&quot;/, '"', popup_html)
                        }
                        var popup_content_order = obj.getParameter(index, "popup_content_order") + "";
                        popup_content_order = obj.replaceAll(" ", "", popup_content_order);
                        var resulting_popup_content_order = popup_content_order.split(",");
                        for (default_popup_element_index in obj.deafault_popup_content_order) {
                            if (!obj.inArray(obj.deafault_popup_content_order[default_popup_element_index], resulting_popup_content_order)) {
                                resulting_popup_content_order.push(obj.deafault_popup_content_order[default_popup_element_index])
                            }
                        }
                        for (popup_element_index in resulting_popup_content_order) {
                            switch (resulting_popup_content_order[popup_element_index]) {
                            case "popup_share":
                                if (popup_share_html) {
                                    popup_content += popup_share_html
                                }
                                break;
                            case "popup_donate":
                                if (popup_donate_html) {
                                    popup_content += '<div class="lb-popup-label lb-popup-label-donate">' + obj.getLabel(index, "i18n_popup_donate", "Show gratitude in the form of a donation") + "</div>";
                                    popup_content += popup_donate_html
                                }
                                break;
                            case "popup_html":
                                if (popup_html) {
                                    popup_content += popup_html
                                }
                                break
                            }
                        }
                        if (!share_enabled && !popup_html && !popup_donate_html) {
                            popup_content += '<span class="lb-share-tt-popup_text">';
                            if (obj.getParameter(index, "i18n_popup_text")) {
                                popup_content += obj.getParameter(index, "i18n_popup_text")
                            } else {
                                if (typeof(obj.translations[obj.dyn_settings.get(index, "locale")]) != "undefined") {
                                    popup_content += obj.translations[obj.dyn_settings.get(index, "locale")]["i18n_popup_text"]
                                } else {
                                    popup_content += "Glad you liked it!"
                                }
                            }
                            popup_content += "</span>"
                        }
                        popup_content += '<i class="lb-share-tt-ft"><a class="lb-share-tt-tm" href="//likebtn.com" target="_blank" style="display: inline !important">&copy; LikeBtn.com</a>';
                        popup_content += '<i class="lb-share-tt-cl" onclick="LikeBtn.popupHide(event, ' + index + '); return false;">';
                        if (obj.getParameter(index, "i18n_popup_close")) {
                            popup_content += obj.getParameter(index, "i18n_popup_close")
                        } else {
                            if (typeof(obj.translations[obj.dyn_settings.get(index, "locale")]) != "undefined") {
                                popup_content += obj.translations[obj.dyn_settings.get(index, "locale")]["i18n_popup_close"]
                            } else {
                                popup_content += "Close"
                            }
                        }
                        popup_content += " X";
                        popup_content += "</i></i>";
                        popup_content += '</i><i class="lb-tt-lb"></i><i class="lb-tt-rb"></i><i class="lb-tt-a"></i></i>';
                        a_el[0].innerHTML = popup_content + a_el[0].innerHTML;
                        if (popup_html) {
                            obj.stripAndExecuteScript(popup_html)
                        }
                        var cr_el = [];
                        if (type == 1) {
                            cr_el = obj.q("#lb-like-" + index + " .lb-share-tt-tm")
                        } else {
                            if (obj.getParameter(index, "popup_dislike")) {
                                cr_el = obj.q("#lb-dislike-" + index + " .lb-share-tt-tm")
                            }
                        }
                        if (obj.isDefined(cr_el[0])) {
                            if (obj.checkPlan(obj.plans.VIP) && obj.getParameter(index, "white_label")) {
                                obj.setCssProperty(cr_el[0], "left", "-1000px")
                            } else {
                                if (obj.getParameter(index, "popup_style") == "dark") {
                                    obj.setCssProperty(cr_el[0], "color", "#f9f6f6")
                                } else {
                                    obj.setCssProperty(cr_el[0], "color", "#787869")
                                }
                                obj.setCssProperty(cr_el[0], "padding", "0");
                                obj.setCssProperty(cr_el[0], "margin", "0");
                                obj.setCssProperty(cr_el[0], "text-indent", "0");
                                obj.setCssProperty(cr_el[0], "left", "1px");
                                obj.setCssProperty(cr_el[0], "top", "1px");
                                obj.setCssProperty(cr_el[0], "border", "0");
                                obj.setCssProperty(cr_el[0], "font-size", "9px")
                            }
                        }
                        if (typeof(addthis) == "undefined" && !obj.addthis_loaded) {
                            if (obj.checkPlan(obj.plans.PRO)) {
                                var addthis_pubid = obj.getParameter(index, "addthis_pubid")
                            } else {
                                var addthis_pubid = obj.getDefaultValue("addthis_pubid")
                            }
                            var addthis_s = document.createElement("script");
                            addthis_s.type = "text/javascript";
                            addthis_s.async = true;
                            addthis_s.src = "//s7.addthis.com/js/300/addthis_widget.js?domready=1#pubid=" + addthis_pubid;
                            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(addthis_s)
                        } else {
                            if (type == 1) {
                                var at_el = obj.q("#lb-like-" + index + " .addthis_toolbox")
                            } else {
                                var at_el = obj.q("#lb-dislike-" + index + " .addthis_toolbox")
                            }
                            if (obj.isDefined(at_el[0]) && typeof(addthis) != "undefined") {
                                addthis.toolbox(at_el[0])
                            }
                        }
                        obj.addthis_loaded = true;
                        click_el[0].className += " lb-share-active";
                        popup_el[0] = a_el[0].firstChild
                    }
                    obj.setPopupWidth(index);
                    obj.setPopupPosition(index);
                    obj.triggerEvent(obj.event_types.popupopen, index)
                }
                if (obj.getParameter(index, "ef_voting") && popup_el[0]) {
                    obj.setCssProperty(popup_el[0], "display", "none");
                    window.setTimeout(function() {
                        obj.setCssProperty(popup_el[0], "display", "block")
                    }, obj.ef_time)
                }
            };
            obj.popupHide = function(event, index) {
                var el = obj.q("#lb-like-" + index + ".lb-share-active");
                var clicked_el_id;
                if (typeof(el[0]) != "undefined") {
                    clicked_el_id = "lb-like"
                } else {
                    clicked_el_id = "lb-dislike";
                    el = obj.q("#lb-dislike-" + index + ".lb-share-active")
                }
                if (typeof(el[0]) != "undefined") {
                    el[0].className = el[0].className.replace(/\blb\-share\-active\b/, "");
                    obj.triggerEvent(obj.event_types.popupclose, index)
                }
                var share_el = obj.q("#" + clicked_el_id + "-" + index + " .lb-share-tt");
                if (typeof(share_el[0]) != "undefined") {
                    obj.setCssProperty(share_el[0], "display", "none")
                }
                if (event) {
                    obj.stopPropagation(event)
                }
            };
            obj.infoMessage = function(index, wrapper, message) {
                var message_escaped = obj.escapeHTML(message.replace(/<\/?[^>]+(>|$)/g, "").replace(/"/g, "'"));
                var anchor = "Like Button";
                var url = "https://likebtn.com";
                var engine = obj.getParameter(index, "engine");
                if (engine && engine.toLowerCase() == "wordpress") {
                    anchor = "WordPress Like Button";
                    url = "https://likebtn.com/en/wordpress-like-button-plugin"
                }
                var html = '<a href="' + url + '" class="likebtn-im" title="' + message_escaped + '">' + anchor + "</a> [";
                if (obj.getParameter(index, "info_message")) {
                    html += message_escaped
                } else {
                    html += '<a href="javascript:void(0);" onclick="this.outerHTML=LikeBtn.Base64.decode(\'' + obj.Base64.encode(message) + "');\">?</a>"
                }
                html += "]";
                wrapper.innerHTML = html;
                wrapper.style.whiteSpace = "normal";
                obj.setLoaded(index, wrapper)
            };
            obj.setCookie = function(name, value, props) {
                props = props || {};
                var exp = props.expires;
                if (typeof exp == "number" && exp) {
                    var d = new Date();
                    d.setTime(d.getTime() + exp * 1000);
                    exp = props.expires = d
                }
                if (exp && exp.toUTCString) {
                    props.expires = exp.toUTCString()
                }
                value = encodeURIComponent(value);
                var updatedCookie = name + "=" + value;
                for (var propName in props) {
                    updatedCookie += "; " + propName;
                    var propValue = props[propName];
                    if (propValue !== true) {
                        updatedCookie += "=" + propValue
                    }
                }
                document.cookie = updatedCookie
            };
            obj.getCookie = function(name) {
                var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                return matches ? decodeURIComponent(matches[1]) : undefined
            };
            obj.removeCookie = function(name) {
                var exp_date = new Date();
                exp_date.setSeconds(exp_date.getSeconds() - 3600);
                obj.setCookie(name, "", {
                    expires: exp_date,
                    path: "/"
                })
            };
            obj.setData = function(name, value, props, eternal) {
                if (obj.supportsLocalStorage()) {
                    props = props || {};
                    var expires = 0;
                    if (!eternal) {
                        if (obj.isDefined(props.expires) && props.expires) {
                            if (typeof(props.expires) == "number") {
                                var d = new Date();
                                expires = d.getTime() + props.expires * 1000
                            } else {
                                if (typeof(props.expires) == "object" && props.expires.getTime()) {
                                    expires = Math.round(props.expires.getTime() / 1000)
                                }
                            }
                        }
                    }
                    data = {
                        v: value,
                        e: expires
                    };
                    localStorage.setItem(name, obj.JSON.encode(data));
                    if (obj.isDefined(obj.getCookie(name))) {
                        obj.removeCookie(name)
                    }
                } else {
                    obj.setCookie(name, value, props)
                }
            };
            obj.getData = function(name) {
                if (obj.supportsLocalStorage()) {
                    data = localStorage.getItem(name);
                    if (!data) {
                        return obj.getCookie(name)
                    } else {
                        if (obj.isDefined(obj.getCookie(name))) {
                            obj.removeCookie(name)
                        }
                    }
                    data = obj.JSON.decode(data);
                    if (obj.isDefined(data.e) && data.e && !isNaN(parseInt(data.e))) {
                        var d = new Date();
                        if (d.getTime() > parseInt(data.e) * 1000) {
                            obj.removeData(name);
                            return undefined
                        }
                    }
                    if (obj.isDefined(data.v)) {
                        return data.v
                    } else {
                        return undefined
                    }
                } else {
                    return obj.getCookie(name)
                }
            };
            obj.removeData = function(name) {
                if (obj.supportsLocalStorage()) {
                    localStorage.removeItem(name)
                }
                if (obj.isDefined(obj.getCookie(name))) {
                    obj.removeCookie(name)
                }
            };
            obj.setCssProperty = function(el, name, value, priority) {
                if (!priority) {
                    priority = "important"
                }
                if (el && el.style) {
                    if (el.style.setProperty) {
                        el.style.setProperty(name, value, priority)
                    } else {
                        el.style[name] = value
                    }
                }
            };
            obj.supportsLocalStorage = function() {
                try {
                    return "localStorage" in window && window.localStorage !== null
                } catch (e) {
                    return false
                }
            };
            obj.hasClass = function(el, cls) {
                if (!el.className || typeof(el.className.match) != "function") {
                    return false
                }
                return el.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"))
            };
            obj.removeClass = function(el, cls) {
                var regexp = new RegExp(cls.replace(/-/, "-"));
                el.className = obj.replaceAll(regexp, "", el.className)
            };
            obj.getDomainFromUrl = function(url) {
                if (!url) {
                    return ""
                }
                var a = document.createElement("a");
                a.href = url;
                return a.hostname
            };
            obj.getPathFromUrl = function(url) {
                if (!url) {
                    return ""
                }
                var a = document.createElement("a");
                a.href = url;
                return a.pathname
            };
            obj.normalizeSubdirectory = function(path) {
                if (!path) {
                    return ""
                }
                if (!/^\//.test(path)) {
                    path = "/" + path
                }
                if (!/\/$/.test(path)) {
                    path = path + "/"
                }
                path = obj.replaceAll(/\/\//, "/", path);
                return path
            };
            obj.normalizeHost = function(host) {
                host = obj.replaceAll(/https?:\/\//, "", host);
                if (!/\/.+/.test(host)) {
                    host = obj.replaceAll(/[\/]+$/, "", host)
                } else {
                    if (!/\/$/.test(host)) {
                        host = host + "/"
                    }
                }
                host = obj.punycode.ToUnicode(host);
                host = obj.replaceAll(/\/\//, "/", host);
                host = obj.replaceAll(/^\//, "", host);
                host = obj.replaceAll(/_/, "", host);
                host = obj.replaceAll(/ .*/, "", host);
                return host
            };
            obj.getPlanName = function(plan_id) {
                for (plan_name in obj.plans) {
                    if (plan_id == obj.plans[plan_name]) {
                        return plan_name
                    }
                }
                return undefined
            };
            obj.isDefined = function(variable) {
                if (typeof(variable) != "undefined") {
                    return true
                } else {
                    return false
                }
            };
            obj.replaceAll = function(search, replace, str) {
                if (typeof(str) != "string") {
                    return str
                }
                return str.split(search).join(replace)
            };
            obj.regexpQuote = function(str) {
                return (str + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
            };
            obj.triggerEvent = function(event_type, index, data) {
                var event_handler = obj.getParameter(index, "event_handler");
                var callback;
                var event = {
                    type: "",
                    settings: {},
                    wrapper: null
                };
                if (!obj.isDefined(event_handler) || !event_handler) {
                    return false
                }
                var callback = window[event_handler];
                if (typeof(callback) !== "function") {
                    return false
                }
                event.type = event_type;
                if (obj.isDefined(obj.settings.values[index])) {
                    event.settings = obj.settings.values[index]
                }
                event.wrapper = obj.dyn_settings.get(index, "wrapper");
                if (data) {
                    event.data = data
                }
                try {
                    callback(event)
                } catch (e) {
                    obj.log("Error occured in event handler function '" + event_handler + "': " + e.message)
                }
            };
            obj.onBodyClick = function(event) {
                event = event || window.event;
                if (event && event.target) {
                    var target = event.target;
                    if (obj.hasClass(target, "lb-tt-m")) {
                        return
                    }
                    var parents = obj.getParents(target);
                    for (var p_index in parents) {
                        if (obj.hasClass(parents[p_index], "lb-tt-m")) {
                            return
                        }
                    }
                }
                obj.closeAllPopups()
            };
            obj.closeAllPopups = function(index_exclude) {
                for (index = 0; index < obj.dyn_settings.values.length; index++) {
                    if (index == index_exclude) {
                        continue
                    }
                    if (!obj.dyn_settings.get(index, "no_popup_close") && obj.getParameter(index, "popup_hide_on_outside_click")) {
                        obj.popupHide(null, index)
                    }
                }
            };
            obj.onWindowScroll = function() {
                for (var index in obj.settings.values) {
                    if (obj.getParameter(index, "counter_count") && !obj.dyn_settings.get(index, "counted") && obj.isVisible(index)) {
                        obj.counterCount(index)
                    }
                    if (obj.getParameter(index, "lazy_load") && !obj.dyn_settings.get(index, "loaded") && obj.isVisible(index)) {
                        obj.buttonShow(index)
                    }
                }
            };
            obj.isVisible = function(index) {
                var doc = document.documentElement;
                var body = doc.getElementsByTagName("body")[0];
                var wrapper = obj.dyn_settings.get(index, "wrapper");
                if (!obj.isDefined(wrapper)) {
                    return false
                }
                var scroll_top = typeof(window.pageYOffset) != "undefined" ? window.pageYOffset : doc.scrollTop ? doc.scrollTop : document.body.scrollTop ? document.body.scrollTop : NaN;
                if (isNaN(parseInt(scroll_top))) {
                    return true
                }
                var viewport_top = scroll_top - (doc.clientTop || 0);
                var el_top = obj.getElementTop(wrapper);
                viewport_height = window.innerHeight || doc.clientHeight || body.clientHeight;
                if (el_top > viewport_top && el_top < (viewport_top + viewport_height)) {
                    return true
                } else {
                    return false
                }
            };
            obj.getParents = function(a) {
                var parents = [];
                while (a) {
                    parents.unshift(a);
                    a = a.parentNode
                }
                return parents
            };
            obj.apply = function(wrapper, properties, keep_properties) {
                if (typeof(wrapper) !== "object") {
                    obj.log("Wrong wrapper");
                    return false
                }
                properties = properties || {};
                keep_properties = keep_properties || [];
                for (var property_name in obj.settings.schema) {
                    if (typeof(obj.settings.schema[property_name].nonmodifiable) != "undefined" && typeof(properties[property_name]) != "undefined") {
                        delete properties[property_name]
                    }
                }
                obj.clean(wrapper, keep_properties);
                obj.setProperties(wrapper, properties);
                if (wrapper.className.indexOf("likebtn-wrapper") == -1) {
                    wrapper.className += " likebtn-wrapper"
                }
                obj.init()
            };
            obj.stripAndExecuteScript = function(text) {
                var dummy = document.createElement("div");
                dummy.innerHTML = text;
                var scripts = dummy.getElementsByTagName("script");
                for (var i = 0; i < scripts.length; i++) {
                    if (scripts[i].src != "") {
                        var tag = document.createElement("script");
                        tag.src = scripts[i].src;
                        document.getElementsByTagName("head")[0].appendChild(tag)
                    } else {
                        eval(scripts[i].innerHTML)
                    }
                }
            };
            obj.setProperties = function(wrapper, properties) {
                for (property in properties) {
                    wrapper.setAttribute("data-" + property, properties[property])
                }
            };
            obj.clean = function(wrapper, keep_properties) {
                keep_properties = keep_properties || [];
                if (!wrapper) {
                    return false
                }
                for (property in obj.settings.schema) {
                    if (obj.inArray(property, keep_properties)) {
                        continue
                    }
                    wrapper.removeAttribute("data-" + property)
                }
                var classes = wrapper.className.split(" ");
                var new_class = "";
                for (i in classes) {
                    if (!/^lb\-/.test(classes[i])) {
                        new_class += " " + classes[i]
                    }
                }
                wrapper.className = new_class;
                while (wrapper.hasChildNodes()) {
                    wrapper.removeChild(wrapper.firstChild)
                }
            };
            obj.getIdsHash = function(identifier, group_identifier, site_id) {
                return obj.hashCodeMd5((identifier || "") + (group_identifier || "") + (site_id || ""))
            };
            obj.getElementTop = function(el) {
                if (!el.getClientRects().length) {
                    return 0
                }
                rect = el.getBoundingClientRect();
                win = el.ownerDocument.defaultView;
                return rect.top + win.pageYOffset
            };
            obj.addEventListener = function(object, type, listener) {
                if (obj.inArray(obj.encodeEventListener(object, type, listener), obj.event_listeners)) {
                    return false
                }
                if (typeof(object.addEventListener) === "function") {
                    object.addEventListener(type, listener)
                } else {
                    object.attachEvent("on" + type, listener)
                }
                obj.rememberEventListener(object, type, listener)
            };
            obj.rememberEventListener = function(object, type, listener) {
                var event_listener = obj.encodeEventListener(object, type, listener);
                if (!obj.inArray(event_listener, obj.event_listeners)) {
                    obj.event_listeners.push(event_listener)
                }
            };
            obj.encodeEventListener = function(object, type, listener) {
                return object.name + type + listener.name
            };
            obj.stopPropagation = function(event) {
                event = event || window.event;
                try {
                    if (typeof(event) != "undefined" && event) {
                        if (typeof(event.stopPropagation) != "undefined") {
                            event.stopPropagation()
                        } else {
                            event.cancelBubble = true
                        }
                    }
                } catch (e) {}
            };
            obj.guessEngine = function() {
                var generator_el = obj.q("meta[name='generator']");
                var generator = "";
                if (obj.isDefined(generator_el[0])) {
                    generator = generator_el[0].getAttribute("content")
                }
                if (generator == "blogger") {
                    return "blogger"
                }
                if (typeof(Weebly) !== "undefined") {
                    return "weebly"
                }
                if (typeof(ucoz_server) !== "undefined") {
                    return "ucoz"
                }
                if (typeof(Tumblr) !== "undefined") {
                    return "tumblr"
                }
                if (generator.match(new RegExp("^vBulletin"))) {
                    return "vbulletin"
                }
                if (generator.match(new RegExp("^DataLife"))) {
                    return "dle"
                }
                if (typeof(jimdoData) !== "undefined") {
                    return "jimdo"
                }
                if (typeof(SQUARESPACE_ROLLUPS) !== "undefined") {
                    return "squarespace"
                }
                return ""
            };
            obj.JSON = {};
            obj.JSON.encode = function(enc_obj) {
                var t = typeof(enc_obj);
                if (t != "object" || enc_obj === null) {
                    if (t == "string") {
                        enc_obj = obj.JSON.escape(enc_obj);
                        enc_obj = '"' + enc_obj + '"'
                    }
                    return String(enc_obj)
                } else {
                    var n, v, json = [],
                        arr = (enc_obj && enc_obj.constructor == Array);
                    for (n in enc_obj) {
                        v = enc_obj[n];
                        t = typeof(v);
                        if (t == "function") {
                            continue
                        }
                        if (t == "string") {
                            v = obj.JSON.escape(v);
                            v = '"' + v + '"'
                        } else {
                            if (t == "object" && v !== null) {
                                v = obj.JSON.encode(v)
                            }
                        }
                        json.push((arr ? "" : '"' + n + '":') + String(v))
                    }
                    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
                }
            };
            obj.q1 = function(selector) {
                var els = obj.q(selector);
                if (els[0]) {
                    return els[0]
                } else {
                    return null
                }
            };
            obj.JSON.escape = function(json_value) {
                return json_value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/"/g, '\\"').replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f")
            };
            obj.JSON.decode = function(str_json) {
                var dec_obj = {};
                try {
                    dec_obj = window["eval"]("(function(){return " + str_json + ";})()")
                } catch (e) {}
                return dec_obj
            };
            obj.Base64 = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encode: function(c) {
                    var a = "";
                    var k, h, f, j, g, e, d;
                    var b = 0;
                    c = obj.Base64._utf8_encode(c);
                    while (b < c.length) {
                        k = c.charCodeAt(b++);
                        h = c.charCodeAt(b++);
                        f = c.charCodeAt(b++);
                        j = k >> 2;
                        g = ((k & 3) << 4) | (h >> 4);
                        e = ((h & 15) << 2) | (f >> 6);
                        d = f & 63;
                        if (isNaN(h)) {
                            e = d = 64
                        } else {
                            if (isNaN(f)) {
                                d = 64
                            }
                        }
                        a = a + this._keyStr.charAt(j) + this._keyStr.charAt(g) + this._keyStr.charAt(e) + this._keyStr.charAt(d)
                    }
                    return a
                },
                decode: function(c) {
                    var a = "";
                    var k, h, f;
                    var j, g, e, d;
                    var b = 0;
                    c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                    while (b < c.length) {
                        j = this._keyStr.indexOf(c.charAt(b++));
                        g = this._keyStr.indexOf(c.charAt(b++));
                        e = this._keyStr.indexOf(c.charAt(b++));
                        d = this._keyStr.indexOf(c.charAt(b++));
                        k = (j << 2) | (g >> 4);
                        h = ((g & 15) << 4) | (e >> 2);
                        f = ((e & 3) << 6) | d;
                        a = a + String.fromCharCode(k);
                        if (e != 64) {
                            a = a + String.fromCharCode(h)
                        }
                        if (d != 64) {
                            a = a + String.fromCharCode(f)
                        }
                    }
                    a = obj.Base64._utf8_decode(a);
                    return a
                },
                _utf8_encode: function(b) {
                    b = b.replace(/\r\n/g, "\n");
                    var a = "";
                    for (var e = 0; e < b.length; e++) {
                        var d = b.charCodeAt(e);
                        if (d < 128) {
                            a += String.fromCharCode(d)
                        } else {
                            if ((d > 127) && (d < 2048)) {
                                a += String.fromCharCode((d >> 6) | 192);
                                a += String.fromCharCode((d & 63) | 128)
                            } else {
                                a += String.fromCharCode((d >> 12) | 224);
                                a += String.fromCharCode(((d >> 6) & 63) | 128);
                                a += String.fromCharCode((d & 63) | 128)
                            }
                        }
                    }
                    return a
                },
                _utf8_decode: function(a) {
                    var b = "";
                    var d = 0;
                    var e = c1 = c2 = 0;
                    while (d < a.length) {
                        e = a.charCodeAt(d);
                        if (e < 128) {
                            b += String.fromCharCode(e);
                            d++
                        } else {
                            if ((e > 191) && (e < 224)) {
                                c2 = a.charCodeAt(d + 1);
                                b += String.fromCharCode(((e & 31) << 6) | (c2 & 63));
                                d += 2
                            } else {
                                c2 = a.charCodeAt(d + 1);
                                c3 = a.charCodeAt(d + 2);
                                b += String.fromCharCode(((e & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                                d += 3
                            }
                        }
                    }
                    return b
                }
            };
            obj.md5 = new function md5() {
                function safe_add(x, y) {
                    var lsw = (x & 65535) + (y & 65535),
                        msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                    return (msw << 16) | (lsw & 65535)
                }
                function bit_rol(num, cnt) {
                    return (num << cnt) | (num >>> (32 - cnt))
                }
                function md5_cmn(q, a, b, x, s, t) {
                    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
                }
                function md5_ff(a, b, c, d, x, s, t) {
                    return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t)
                }
                function md5_gg(a, b, c, d, x, s, t) {
                    return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t)
                }
                function md5_hh(a, b, c, d, x, s, t) {
                    return md5_cmn(b ^ c ^ d, a, b, x, s, t)
                }
                function md5_ii(a, b, c, d, x, s, t) {
                    return md5_cmn(c ^ (b | (~d)), a, b, x, s, t)
                }
                function binl_md5(x, len) {
                    x[len >> 5] |= 128 << (len % 32);
                    x[(((len + 64) >>> 9) << 4) + 14] = len;
                    var i, olda, oldb, oldc, oldd, a = 1732584193,
                        b = -271733879,
                        c = -1732584194,
                        d = 271733878;
                    for (i = 0; i < x.length; i += 16) {
                        olda = a;
                        oldb = b;
                        oldc = c;
                        oldd = d;
                        a = md5_ff(a, b, c, d, x[i], 7, -680876936);
                        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
                        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                        b = md5_gg(b, c, d, a, x[i], 20, -373897302);
                        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
                        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                        d = md5_hh(d, a, b, c, x[i], 11, -358537222);
                        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
                        a = md5_ii(a, b, c, d, x[i], 6, -198630844);
                        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
                        a = safe_add(a, olda);
                        b = safe_add(b, oldb);
                        c = safe_add(c, oldc);
                        d = safe_add(d, oldd)
                    }
                    return [a, b, c, d]
                }
                function binl2rstr(input) {
                    var i, output = "";
                    for (i = 0; i < input.length * 32; i += 8) {
                        output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 255)
                    }
                    return output
                }
                function rstr2binl(input) {
                    var i, output = [];
                    output[(input.length >> 2) - 1] = undefined;
                    for (i = 0; i < output.length; i += 1) {
                        output[i] = 0
                    }
                    for (i = 0; i < input.length * 8; i += 8) {
                        output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << (i % 32)
                    }
                    return output
                }
                function rstr_md5(s) {
                    return binl2rstr(binl_md5(rstr2binl(s), s.length * 8))
                }
                function rstr_hmac_md5(key, data) {
                    var i, bkey = rstr2binl(key),
                        ipad = [],
                        opad = [],
                        hash;
                    ipad[15] = opad[15] = undefined;
                    if (bkey.length > 16) {
                        bkey = binl_md5(bkey, key.length * 8)
                    }
                    for (i = 0; i < 16; i += 1) {
                        ipad[i] = bkey[i] ^ 909522486;
                        opad[i] = bkey[i] ^ 1549556828
                    }
                    hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
                    return binl2rstr(binl_md5(opad.concat(hash), 512 + 128))
                }
                function rstr2hex(input) {
                    var hex_tab = "0123456789abcdef",
                        output = "",
                        x, i;
                    for (i = 0; i < input.length; i += 1) {
                        x = input.charCodeAt(i);
                        output += hex_tab.charAt((x >>> 4) & 15) + hex_tab.charAt(x & 15)
                    }
                    return output
                }
                function str2rstr_utf8(input) {
                    return unescape(encodeURIComponent(input))
                }
                function raw_md5(s) {
                    return rstr_md5(str2rstr_utf8(s))
                }
                function hex_md5(s) {
                    return rstr2hex(raw_md5(s))
                }
                function raw_hmac_md5(k, d) {
                    return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d))
                }
                function hex_hmac_md5(k, d) {
                    return rstr2hex(raw_hmac_md5(k, d))
                }
                this.md5 = function(string, key, raw) {
                    if (!key) {
                        if (!raw) {
                            return hex_md5(string)
                        }
                        return raw_md5(string)
                    }
                    if (!raw) {
                        return hex_hmac_md5(key, string)
                    }
                    return raw_hmac_md5(key, string)
                }
            }();
            obj.JSONP = (function() {
                var counter = 0,
                    head, window = this,
                    config = {};

                function load(url, pfnError) {
                    var script = document.createElement("script"),
                        done = false;
                    script.src = url;
                    script.async = true;
                    var errorHandler = pfnError || config.error;
                    if (typeof errorHandler === "function") {
                        script.onerror = function(ex) {
                            errorHandler({
                                url: url,
                                event: ex
                            })
                        }
                    }
                    script.onload = script.onreadystatechange = function() {
                        if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            done = true;
                            script.onload = script.onreadystatechange = null;
                            if (script && script.parentNode) {
                                script.parentNode.removeChild(script)
                            }
                        }
                    };
                    if (!head) {
                        head = document.getElementsByTagName("head")[0]
                    }
                    head.appendChild(script)
                }
                function encode(str) {
                    return encodeURIComponent(str)
                }
                function jsonp(url, params, callback, callbackName, errorHandler) {
                    var query = (url || "").indexOf("?") === -1 ? "?" : "&",
                        key;
                    callbackName = (callbackName || config.callbackName || "lb");
                    var uniqueName = callbackName + "_json";
                    params = params || {};
                    for (key in params) {
                        if (params.hasOwnProperty(key)) {
                            query += encode(key) + "=" + encode(params[key]) + "&"
                        }
                    }
                    window[uniqueName] = function(data) {
                        callback(data)
                    };
                    load(url + query + callbackName + "=" + uniqueName, errorHandler);
                    return uniqueName
                }
                function setDefaults(obj) {
                    config = obj
                }
                return {
                    get: jsonp,
                    init: setDefaults
                }
            }());
            obj.punycode = new function Punycode() {
                this.utf16 = {
                    decode: function(input) {
                        var output = [],
                            i = 0,
                            len = input.length,
                            value, extra;
                        while (i < len) {
                            value = input.charCodeAt(i++);
                            if ((value & 63488) === 55296) {
                                extra = input.charCodeAt(i++);
                                if (((value & 64512) !== 55296) || ((extra & 64512) !== 56320)) {
                                    throw new RangeError("UTF-16(decode): Illegal UTF-16 sequence")
                                }
                                value = ((value & 1023) << 10) + (extra & 1023) + 65536
                            }
                            output.push(value)
                        }
                        return output
                    },
                    encode: function(input) {
                        var output = [],
                            i = 0,
                            len = input.length,
                            value;
                        while (i < len) {
                            value = input[i++];
                            if ((value & 63488) === 55296) {
                                throw new RangeError("UTF-16(encode): Illegal UTF-16 value")
                            }
                            if (value > 65535) {
                                value -= 65536;
                                output.push(String.fromCharCode(((value >>> 10) & 1023) | 55296));
                                value = 56320 | (value & 1023)
                            }
                            output.push(String.fromCharCode(value))
                        }
                        return output.join("")
                    }
                };
                var initial_n = 128;
                var initial_bias = 72;
                var delimiter = "\x2D";
                var base = 36;
                var damp = 700;
                var tmin = 1;
                var tmax = 26;
                var skew = 38;
                var maxint = 2147483647;

                function decode_digit(cp) {
                    return cp - 48 < 10 ? cp - 22 : cp - 65 < 26 ? cp - 65 : cp - 97 < 26 ? cp - 97 : base
                }
                function encode_digit(d, flag) {
                    return d + 22 + 75 * (d < 26) - ((flag != 0) << 5)
                }
                function adapt(delta, numpoints, firsttime) {
                    var k;
                    delta = firsttime ? Math.floor(delta / damp) : (delta >> 1);
                    delta += Math.floor(delta / numpoints);
                    for (k = 0; delta > (((base - tmin) * tmax) >> 1); k += base) {
                        delta = Math.floor(delta / (base - tmin))
                    }
                    return Math.floor(k + (base - tmin + 1) * delta / (delta + skew))
                }
                function encode_basic(bcp, flag) {
                    bcp -= (bcp - 97 < 26) << 5;
                    return bcp + ((!flag && (bcp - 65 < 26)) << 5)
                }
                this.decode = function(input, preserveCase) {
                    var output = [];
                    var case_flags = [];
                    var input_length = input.length;
                    var n, out, i, bias, basic, j, ic, oldi, w, k, digit, t, len;
                    n = initial_n;
                    i = 0;
                    bias = initial_bias;
                    basic = input.lastIndexOf(delimiter);
                    if (basic < 0) {
                        basic = 0
                    }
                    for (j = 0; j < basic; ++j) {
                        if (preserveCase) {
                            case_flags[output.length] = (input.charCodeAt(j) - 65 < 26)
                        }
                        if (input.charCodeAt(j) >= 128) {
                            throw new RangeError("Illegal input >= 0x80")
                        }
                        output.push(input.charCodeAt(j))
                    }
                    for (ic = basic > 0 ? basic + 1 : 0; ic < input_length;) {
                        for (oldi = i, w = 1, k = base;; k += base) {
                            if (ic >= input_length) {
                                throw RangeError("punycode_bad_input(1)")
                            }
                            digit = decode_digit(input.charCodeAt(ic++));
                            if (digit >= base) {
                                throw RangeError("punycode_bad_input(2)")
                            }
                            if (digit > Math.floor((maxint - i) / w)) {
                                throw RangeError("punycode_overflow(1)")
                            }
                            i += digit * w;
                            t = k <= bias ? tmin : k >= bias + tmax ? tmax : k - bias;
                            if (digit < t) {
                                break
                            }
                            if (w > Math.floor(maxint / (base - t))) {
                                throw RangeError("punycode_overflow(2)")
                            }
                            w *= (base - t)
                        }
                        out = output.length + 1;
                        bias = adapt(i - oldi, out, oldi === 0);
                        if (Math.floor(i / out) > maxint - n) {
                            throw RangeError("punycode_overflow(3)")
                        }
                        n += Math.floor(i / out);
                        i %= out;
                        if (preserveCase) {
                            case_flags.splice(i, 0, input.charCodeAt(ic - 1) - 65 < 26)
                        }
                        output.splice(i, 0, n);
                        i++
                    }
                    if (preserveCase) {
                        for (i = 0, len = output.length; i < len; i++) {
                            if (case_flags[i]) {
                                output[i] = (String.fromCharCode(output[i]).toUpperCase()).charCodeAt(0)
                            }
                        }
                    }
                    return this.utf16.encode(output)
                };
                this.ToUnicode = function(domain) {
                    var domain_array = domain.split(".");
                    var out = [];
                    for (var i = 0; i < domain_array.length; ++i) {
                        var s = domain_array[i];
                        out.push(s.match(/^xn--/) ? this.decode(s.slice(4)) : s)
                    }
                    return out.join(".")
                }
            }();
            obj.crc32 = function(str) {
                var makeCRCTable = function() {
                        var c;
                        var crcTable = [];
                        for (var n = 0; n < 256; n++) {
                            c = n;
                            for (var k = 0; k < 8; k++) {
                                c = ((c & 1) ? (3988292384 ^ (c >>> 1)) : (c >>> 1))
                            }
                            crcTable[n] = c
                        }
                        return crcTable
                    };
                var crcTable = window.crcTable || (window.crcTable = makeCRCTable());
                var crc = 0 ^ (-1);
                for (var i = 0; i < str.length; i++) {
                    crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 255]
                }
                return (crc ^ (-1)) >>> 0
            };
            obj.numericHash = function(str, range) {
                var number = obj.crc32(str);
                return number % range
            };
            obj.q = (function() {
                function L() {
                    this.c = {}
                }
                function D(e) {
                    return A.g(e) || A.s(e, "(^|\\s+)" + e + "(\\s+|$)", 1)
                }
                function P(e, t) {
                    var n = 0,
                        r = e.length;
                    for (; n < r; n++) {
                        t(e[n])
                    }
                }
                function H(e) {
                    for (var t = [], n = 0, r = e.length; n < r; ++n) {
                        $(e[n]) ? t = t.concat(e[n]) : t[t.length] = e[n]
                    }
                    return t
                }
                function B(e) {
                    var t = 0,
                        n = e.length,
                        r = [];
                    for (; t < n; t++) {
                        r[t] = e[t]
                    }
                    return r
                }
                function j(e) {
                    while (e = e.previousSibling) {
                        if (e[u] == 1) {
                            break
                        }
                    }
                    return e
                }
                function F(e) {
                    return e.match(C)
                }
                function I(e, t, n, r, i, s, a, c, h, p, d) {
                    var v, m, g, y, b;
                    if (this[u] !== 1) {
                        return !1
                    }
                    if (t && t !== "*" && this[o] && this[o].toLowerCase() !== t) {
                        return !1
                    }
                    if (n && (m = n.match(f)) && m[1] !== this.id) {
                        return !1
                    }
                    if (n && (b = n.match(l))) {
                        for (v = b.length; v--;) {
                            if (!D(b[v].slice(1)).test(this.className)) {
                                return !1
                            }
                        }
                    }
                    if (h && Q.pseudos[h] && !Q.pseudos[h](this, d)) {
                        return !1
                    }
                    if (r && !a) {
                        y = this.attributes;
                        for (g in y) {
                            if (Object.prototype.hasOwnProperty.call(y, g) && (y[g].name || g) == i) {
                                return this
                            }
                        }
                    }
                    return r && !R(s, Z(this, i) || "", a) ? !1 : this
                }
                function q(e) {
                    return O.g(e) || O.s(e, e.replace(b, "\\$1"))
                }
                function R(e, t, n) {
                    switch (e) {
                    case "=":
                        return t == n;
                    case "^=":
                        return t.match(M.g("^=" + n) || M.s("^=" + n, "^" + q(n), 1));
                    case "$=":
                        return t.match(M.g("$=" + n) || M.s("$=" + n, q(n) + "$", 1));
                    case "*=":
                        return t.match(M.g(n) || M.s(n, q(n), 1));
                    case "~=":
                        return t.match(M.g("~=" + n) || M.s("~=" + n, "(?:^|\\s+)" + q(n) + "(?:\\s+|$)", 1));
                    case "|=":
                        return t.match(M.g("|=" + n) || M.s("|=" + n, "^" + q(n) + "(-|$)", 1))
                    }
                    return 0
                }
                function U(e, t) {
                    var n = [],
                        i = [],
                        s, a, f, l, h, p, d, v, m = t,
                        g = _.g(e) || _.s(e, e.split(N)),
                        y = e.match(T);
                    if (!g.length) {
                        return n
                    }
                    l = (g = g.slice(0)).pop(), g.length && (f = g[g.length - 1].match(c)) && (m = K(t, f[1]));
                    if (!m) {
                        return n
                    }
                    d = F(l), p = m !== t && m[u] !== 9 && y && /^[+~]$/.test(y[y.length - 1]) ?
                    function(e) {
                        while (m = m.nextSibling) {
                            m[u] == 1 && (d[1] ? d[1] == m[o].toLowerCase() : 1) && (e[e.length] = m)
                        }
                        return e
                    }([]) : m[r](d[1] || "*");
                    for (s = 0, a = p.length; s < a; s++) {
                        if (v = I.apply(p[s], d)) {
                            n[n.length] = v
                        }
                    }
                    return g.length ? (P(n, function(e) {
                        W(e, g, y) && (i[i.length] = e)
                    }), i) : n
                }
                function z(e, t, n) {
                    if (X(t)) {
                        return e == t
                    }
                    if ($(t)) {
                        return !!~H(t).indexOf(e)
                    }
                    var r = t.split(","),
                        i, s;
                    while (t = r.pop()) {
                        i = _.g(t) || _.s(t, t.split(N)), s = t.match(T), i = i.slice(0);
                        if (I.apply(e, F(i.pop())) && (!i.length || W(e, i, s, n))) {
                            return !0
                        }
                    }
                    return !1
                }
                function W(e, t, n, r) {
                    function s(e, r, o) {
                        if (typeof(k[n[r]]) === "undefined") {
                            return null
                        }
                        while (o = k[n[r]](o, e)) {
                            if (X(o) && I.apply(o, F(t[r]))) {
                                if (!r) {
                                    return o
                                }
                                if (i = s(o, r - 1, o)) {
                                    return i
                                }
                            }
                        }
                    }
                    var i;
                    return (i = s(e, t.length - 1, e)) && (!r || Y(i, r))
                }
                function X(e, t) {
                    return e && typeof e == "object" && (t = e[u]) && (t == 1 || t == 9)
                }
                function V(e) {
                    var t = [],
                        n, r;
                    e: for (n = 0; n < e.length; ++n) {
                        for (r = 0; r < t.length; ++r) {
                            if (t[r] == e[n]) {
                                continue e
                            }
                        }
                        t[t.length] = e[n]
                    }
                    return t
                }
                function $(e) {
                    return typeof e == "object" && isFinite(e.length)
                }
                function J(t) {
                    return t ? typeof t == "string" ? Q(t)[0] : !t[u] && $(t) ? t[0] : t : e
                }
                function K(e, t, n) {
                    return e[u] === 9 ? e.getElementById(t) : e.ownerDocument && ((n = e.ownerDocument.getElementById(t)) && Y(n, e) && n || !Y(e, e.ownerDocument) && a('[id="' + t + '"]', e)[0])
                }
                function Q(e, t) {
                    var i, s, o = J(t);
                    if (!o || !e) {
                        return []
                    }
                    if (e === window || X(e)) {
                        return !t || e !== window && X(o) && Y(e, o) ? [e] : []
                    }
                    if (e && $(e)) {
                        return H(e)
                    }
                    if (i = e.match(x)) {
                        if (i[1]) {
                            return (s = K(o, i[1])) ? [s] : []
                        }
                        if (i[2]) {
                            return B(o[r](i[2]))
                        }
                        if (et && i[3]) {
                            return B(o[n](i[3]))
                        }
                    }
                    return a(e, o)
                }
                function G(e, t) {
                    return function(n) {
                        var r, i;
                        if (v.test(n)) {
                            e[u] !== 9 && ((i = r = e.getAttribute("id")) || e.setAttribute("id", i = "__qwerymeupscotty"), n = '[id="' + i + '"]' + n, t(e.parentNode || e, n, !0), r || e.removeAttribute("id"));
                            return
                        }
                        n.length && t(e, n, !1)
                    }
                }
                var e = document,
                    t = e.documentElement,
                    n = "getElementsByClassName",
                    r = "getElementsByTagName",
                    i = "querySelectorAll",
                    s = "useNativeQSA",
                    o = "tagName",
                    u = "nodeType",
                    a, f = /#([\w\-]+)/,
                    l = /\.[\w\-]+/g,
                    c = /^#([\w\-]+)$/,
                    h = /^\.([\w\-]+)$/,
                    p = /^([\w\-]+)$/,
                    d = /^([\w]+)?\.([\w\-]+)$/,
                    v = /(^|,)\s*[>~+]/,
                    m = /^\s+|\s*([,\s\+\~>]|$)\s*/g,
                    g = /[\s\>\+\~]/,
                    y = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
                    b = /([.*+?\^=!:${}()|\[\]\/\\])/g,
                    w = /^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,
                    E = /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,
                    S = /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,
                    x = new RegExp(c.source + "|" + p.source + "|" + h.source),
                    T = new RegExp("(" + g.source + ")" + y.source, "g"),
                    N = new RegExp(g.source + y.source),
                    C = new RegExp(w.source + "(" + E.source + ")?(" + S.source + ")?"),
                    k = {
                        " ": function(e) {
                            return e && e !== t && e.parentNode
                        },
                        ">": function(e, t) {
                            return e && e.parentNode == t.parentNode && e.parentNode
                        },
                        "~": function(e) {
                            return e && e.previousSibling
                        },
                        "+": function(e, t, n, r) {
                            return e ? (n = j(e)) && (r = j(t)) && n == r && n : !1
                        }
                    };
                L.prototype = {
                    g: function(e) {
                        return this.c[e] || undefined
                    },
                    s: function(e, t, n) {
                        return t = n ? new RegExp(t) : t, this.c[e] = t
                    }
                };
                var A = new L,
                    O = new L,
                    M = new L,
                    _ = new L,
                    Y = "compareDocumentPosition" in t ?
                function(e, t) {
                    return (t.compareDocumentPosition(e) & 16) == 16
                } : "contains" in t ?
                function(e, n) {
                    return n = n[u] === 9 || n == window ? t : n, n !== e && n.contains(e)
                } : function(e, t) {
                    while (e = e.parentNode) {
                        if (e === t) {
                            return 1
                        }
                    }
                    return 0
                }, Z = function() {
                    var t = e.createElement("p");
                    return (t.innerHTML = '<a href="#x">x</a>') && t.firstChild.getAttribute("href") != "#x" ?
                    function(e, t) {
                        return t === "class" ? e.className : t === "href" || t === "src" ? e.getAttribute(t, 2) : e.getAttribute(t)
                    } : function(e, t) {
                        return e.getAttribute(t)
                    }
                }(), et = !! e[n], tt = e.querySelector && e[i], nt = function(e, t) {
                    var n = [],
                        r, s;
                    try {
                        return t[u] === 9 || !v.test(e) ? B(t[i](e)) : (P(r = e.split(","), G(t, function(e, t) {
                            s = e[i](t), s.length == 1 ? n[n.length] = s.item(0) : s.length && (n = n.concat(B(s)))
                        })), r.length > 1 && n.length > 1 ? V(n) : n)
                    } catch (o) {}
                    return rt(e, t)
                }, rt = function(e, t) {
                    var n = [],
                        i, s, o, a, f, l;
                    e = e.replace(m, "$1");
                    if (s = e.match(d)) {
                        f = D(s[2]), i = t[r](s[1] || "*");
                        for (o = 0, a = i.length; o < a; o++) {
                            f.test(i[o].className) && (n[n.length] = i[o])
                        }
                        return n
                    }
                    return P(l = e.split(","), G(t, function(e, r, i) {
                        f = U(r, e);
                        for (o = 0, a = f.length; o < a; o++) {
                            if (e[u] === 9 || i || Y(f[o], t)) {
                                n[n.length] = f[o]
                            }
                        }
                    })), l.length > 1 && n.length > 1 ? V(n) : n
                }, it = function(e) {
                    typeof e[s] != "undefined" && (a = e[s] ? tt ? nt : rt : rt)
                };
                return it({
                    useNativeQSA: !0
                }), Q.configure = it, Q.uniq = V, Q.is = z, Q.pseudos = {}, Q
            }());
            return obj
        }(window)
}
LikeBtn.init(true);