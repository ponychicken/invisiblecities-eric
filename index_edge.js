/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cosmos',
                            symbolName: 'cosmos',
                            type: 'rect',
                            rect: ['0', '0', '1536', '2048', 'auto', 'auto'],
                            overflow: 'visible'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1536', '2048', 'auto', 'auto'],
                            overflow: 'scroll',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cosmos": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'canvas',
                            rect: ['-1528px', '597px', '1040', '1213', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['1021', '-26', '1035', '1024', 'auto', 'auto'],
                                id: 'Haus_Pool',
                                symbolName: 'Haus_Pool',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['1709', '141', '869', '1159', 'auto', 'auto'],
                                id: 'Haus_Plateau',
                                symbolName: 'Haus_Plateau',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['1139px', '936px', null, null, 'auto', 'auto'],
                                id: 'Haus_Hochaus2',
                                symbolName: 'Haus_Hochaus2',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['808', '267', '854', '1139', 'auto', 'auto'],
                                id: 'Haus_Pudding',
                                symbolName: 'Haus_Pudding',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['-208', '649', '1000', '1254', 'auto', 'auto'],
                                id: 'Haus_Widder',
                                symbolName: 'Haus_Widder',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['-271', '-845', '854', '1139', 'auto', 'auto'],
                                id: 'Haus_Waage',
                                symbolName: 'Haus_Waage',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['471', '549', '854', '1139', 'auto', 'auto'],
                                id: 'Haus_Krebs',
                                symbolName: 'Haus_Krebs',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['-333px', '312px', null, null, 'auto', 'auto'],
                                id: 'Haus_Steinbock2',
                                symbolName: 'Haus_Steinbock2',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['372', '-71', '706', '1001', 'auto', 'auto'],
                                id: 'Haus_Zwilling',
                                symbolName: 'Haus_Zwilling',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['-518', '-1165', '3545', '3536', 'auto', 'auto'],
                                id: 'cosmos_neu',
                                opacity: '1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/cosmos-new.jpg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['0', '746', '1536px', '250px', 'auto', 'auto'],
                            type: 'image',
                            id: 'perinthia_headline',
                            opacity: '1',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/perinthia_headline2_small.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '731', '1536px', '265px', 'auto', 'auto'],
                            type: 'image',
                            id: 'perinthia_text',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/perinthia_text_vonhand_small.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'sternenGruppe',
                            rect: ['242', '130', '2430', '2209', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'sterne_waage',
                                rect: ['-30px', '-25px', '372', '312', 'auto', 'auto'],
                                transform: [[], [], [], ['0.84', '0.84']],
                                fill: ['rgba(0,0,0,0)', 'images/haus_waage_newone_sterne.gif', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'sterne_steinbock',
                                rect: ['-23px', '986px', '246px', '403px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.63', '0.63']],
                                fill: ['rgba(0,0,0,0)', 'images/sterne_steinbock%20_small.gif', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'sterne_zwilling',
                                rect: ['566px', '280px', '390px', '393px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.7', '0.7']],
                                fill: ['rgba(0,0,0,0)', 'images/sterne_zwilling_small.gif', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'sterne_pool',
                                rect: ['1673px', '783px', '235px', '303px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/poolhouse_star.gif', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'sterne_krebs',
                                rect: ['789px', '1269px', '329px', '266px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.7', '0.7']],
                                fill: ['rgba(0,0,0,0)', 'images/sterne_krebs_small.gif', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'sterne_widder',
                                rect: ['253px', '1526px', '503', '300', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/sterne_widder.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'sterne_hochhaus',
                                rect: ['1051px', '1435px', '807px', '1303px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.46', '0.46']],
                                fill: ['rgba(0,0,0,0)', 'images/hochhaus_glas_starsonly.gif', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'sterne_plateau',
                                rect: ['2244px', '1242px', '225px', '166px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.65', '0.65']],
                                fill: ['rgba(0,0,0,0)', 'images/plateau_fin_sterne2.gif', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'sterne_pudding',
                                rect: ['1015px', '578px', '333px', '300px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.62', '0.62']],
                                fill: ['rgba(0,0,0,0)', 'images/sterne_leo_small.gif', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['0', '0%', '100%', '100%', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0.1953125',
                            id: 'ButtonStart',
                            stroke: [1, 'rgba(0,0,0,0.00)', 'none'],
                            display: 'block',
                            fill: ['rgba(213,125,125,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1536', '2048']
                        }
                    }
                },
                timeline: {
                    duration: 38500,
                    autoPlay: false,
                    labels: {
                        "anfang": 0,
                        "text": 2000,
                        "anfang2": 3000,
                        "zwilling": 4000,
                        "steinbock": 7000,
                        "krebs": 10000,
                        "waage": 13000,
                        "widder": 16000,
                        "pudding": 19000,
                        "hochhaus": 22000,
                        "plateau": 25000,
                        "poolhouse": 28000
                    },
                    data: [
                        [
                            "eid398",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Haus_Hochaus2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid399",
                            "display",
                            22000,
                            0,
                            "linear",
                            "${Haus_Hochaus2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid400",
                            "display",
                            24500,
                            0,
                            "linear",
                            "${Haus_Hochaus2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "opacity",
                            4000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid50",
                            "opacity",
                            7000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid64",
                            "opacity",
                            10000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid73",
                            "opacity",
                            13000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid128",
                            "opacity",
                            16000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid152",
                            "opacity",
                            19000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid178",
                            "opacity",
                            22000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid244",
                            "opacity",
                            25000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid264",
                            "opacity",
                            28000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid322",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Haus_Pudding}",
                            'none',
                            'none'
                        ],
                        [
                            "eid321",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${Haus_Pudding}",
                            'none',
                            'block'
                        ],
                        [
                            "eid320",
                            "display",
                            21500,
                            0,
                            "linear",
                            "${Haus_Pudding}",
                            'block',
                            'none'
                        ],
                        [
                            "eid323",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Haus_Widder}",
                            'none',
                            'none'
                        ],
                        [
                            "eid312",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${Haus_Widder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid311",
                            "display",
                            18500,
                            0,
                            "linear",
                            "${Haus_Widder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11",
                            "scaleY",
                            4000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid35",
                            "scaleY",
                            7000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            10000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid75",
                            "scaleY",
                            13000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            16000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid148",
                            "scaleY",
                            19000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid177",
                            "scaleY",
                            22000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid236",
                            "scaleY",
                            25000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid257",
                            "scaleY",
                            28000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid299",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${Haus_Zwilling}",
                            'none',
                            'block'
                        ],
                        [
                            "eid301",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${Haus_Zwilling}",
                            'block',
                            'none'
                        ],
                        [
                            "eid328",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Haus_Plateau}",
                            'none',
                            'none'
                        ],
                        [
                            "eid330",
                            "display",
                            25000,
                            0,
                            "linear",
                            "${Haus_Plateau}",
                            'none',
                            'block'
                        ],
                        [
                            "eid331",
                            "display",
                            27249,
                            0,
                            "linear",
                            "${Haus_Plateau}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "scaleX",
                            4000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid37",
                            "scaleX",
                            7000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid62",
                            "scaleX",
                            10000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid74",
                            "scaleX",
                            13000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            16000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid150",
                            "scaleX",
                            19000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid174",
                            "scaleX",
                            22000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            25000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid259",
                            "scaleX",
                            28000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid329",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Haus_Pool}",
                            'none',
                            'none'
                        ],
                        [
                            "eid332",
                            "display",
                            28000,
                            0,
                            "linear",
                            "${Haus_Pool}",
                            'none',
                            'block'
                        ],
                        [
                            "eid333",
                            "display",
                            30500,
                            0,
                            "linear",
                            "${Haus_Pool}",
                            'block',
                            'none'
                        ],
                        [
                            "eid95",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${perinthia_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${perinthia_text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16",
                            "left",
                            4000,
                            2000,
                            "linear",
                            "${canvas}",
                            '271px',
                            '-115px'
                        ],
                        [
                            "eid36",
                            "left",
                            7000,
                            2000,
                            "linear",
                            "${canvas}",
                            '-115px',
                            '1016px'
                        ],
                        [
                            "eid371",
                            "left",
                            10000,
                            2000,
                            "linear",
                            "${canvas}",
                            '271px',
                            '-417px'
                        ],
                        [
                            "eid372",
                            "left",
                            12000,
                            1000,
                            "linear",
                            "${canvas}",
                            '-417px',
                            '271px'
                        ],
                        [
                            "eid374",
                            "left",
                            13000,
                            2000,
                            "linear",
                            "${canvas}",
                            '271px',
                            '894px'
                        ],
                        [
                            "eid375",
                            "left",
                            15000,
                            1000,
                            "linear",
                            "${canvas}",
                            '894px',
                            '271px'
                        ],
                        [
                            "eid119",
                            "left",
                            16000,
                            2000,
                            "linear",
                            "${canvas}",
                            '271px',
                            '653px'
                        ],
                        [
                            "eid378",
                            "left",
                            19000,
                            2000,
                            "linear",
                            "${canvas}",
                            '271px',
                            '-1040px'
                        ],
                        [
                            "eid379",
                            "left",
                            21000,
                            1000,
                            "linear",
                            "${canvas}",
                            '-1040px',
                            '271px'
                        ],
                        [
                            "eid381",
                            "left",
                            22000,
                            2000,
                            "linear",
                            "${canvas}",
                            '271px',
                            '-1636px'
                        ],
                        [
                            "eid382",
                            "left",
                            24000,
                            1000,
                            "linear",
                            "${canvas}",
                            '-1636px',
                            '271px'
                        ],
                        [
                            "eid384",
                            "left",
                            25000,
                            2000,
                            "linear",
                            "${canvas}",
                            '271px',
                            '-2681px'
                        ],
                        [
                            "eid385",
                            "left",
                            27000,
                            1000,
                            "linear",
                            "${canvas}",
                            '-2681px',
                            '271px'
                        ],
                        [
                            "eid258",
                            "left",
                            28000,
                            2000,
                            "linear",
                            "${canvas}",
                            '271px',
                            '-1528px'
                        ],
                        [
                            "eid327",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Haus_Waage}",
                            'none',
                            'none'
                        ],
                        [
                            "eid309",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${Haus_Waage}",
                            'none',
                            'block'
                        ],
                        [
                            "eid308",
                            "display",
                            15500,
                            0,
                            "linear",
                            "${Haus_Waage}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17",
                            "top",
                            4000,
                            2000,
                            "linear",
                            "${canvas}",
                            '405px',
                            '743px'
                        ],
                        [
                            "eid34",
                            "top",
                            7000,
                            2000,
                            "linear",
                            "${canvas}",
                            '743px',
                            '-77px'
                        ],
                        [
                            "eid59",
                            "top",
                            10000,
                            2000,
                            "linear",
                            "${canvas}",
                            '405px',
                            '-505px'
                        ],
                        [
                            "eid77",
                            "top",
                            13000,
                            2000,
                            "linear",
                            "${canvas}",
                            '405px',
                            '2000px'
                        ],
                        [
                            "eid117",
                            "top",
                            16000,
                            2000,
                            "linear",
                            "${canvas}",
                            '402px',
                            '-825px'
                        ],
                        [
                            "eid147",
                            "top",
                            19000,
                            2000,
                            "linear",
                            "${canvas}",
                            '402px',
                            '5px'
                        ],
                        [
                            "eid337",
                            "top",
                            22000,
                            2000,
                            "linear",
                            "${canvas}",
                            '5px',
                            '-1203px'
                        ],
                        [
                            "eid338",
                            "top",
                            24000,
                            0,
                            "linear",
                            "${canvas}",
                            '-1203px',
                            '-1203px'
                        ],
                        [
                            "eid234",
                            "top",
                            25000,
                            2000,
                            "linear",
                            "${canvas}",
                            '5px',
                            '191px'
                        ],
                        [
                            "eid256",
                            "top",
                            28000,
                            2000,
                            "linear",
                            "${canvas}",
                            '5px',
                            '597px'
                        ],
                        [
                            "eid92",
                            "display",
                            0,
                            0,
                            "linear",
                            "${perinthia_text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${perinthia_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${perinthia_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid326",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Haus_Krebs}",
                            'none',
                            'none'
                        ],
                        [
                            "eid306",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${Haus_Krebs}",
                            'none',
                            'block'
                        ],
                        [
                            "eid305",
                            "display",
                            12500,
                            0,
                            "linear",
                            "${Haus_Krebs}",
                            'block',
                            'none'
                        ],
                        [
                            "eid396",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Haus_Steinbock2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid394",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${Haus_Steinbock2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid397",
                            "display",
                            9715,
                            0,
                            "linear",
                            "${Haus_Steinbock2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${perinthia_headline}",
                            'block',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${perinthia_headline}",
                            'block',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ButtonStart}",
                            'block',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${ButtonStart}",
                            'block',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${ButtonStart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid91",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${perinthia_headline}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Haus_Krebs": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'haus_krebs_klein-new',
                            opacity: '1',
                            rect: ['0px', '214px', '851px', '726px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/haus_krebs_klein-new.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '854px', '1139px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Haus_Zwilling": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-2px', '706px', '1006px', 'auto', 'auto'],
                            id: 'hauszwilling_ohneschaukel-new',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hauszwilling_ohneschaukel-new.jpg', '0px', '0px']
                        },
                        {
                            rect: ['502px', '560px', '188px', '171px', 'auto', 'auto'],
                            id: 'zwillinge_schaukeln-new',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/zwillinge_schaukeln-new.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '706px', '1001px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Haus_Widder": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'waldhuette2',
                            rect: ['0px', '0px', '1000px', '1254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/waldhuette.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1000px', '1254px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Haus_Waage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'haus-waage',
                            rect: ['0px', '0px', '854', '1139', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/haus_waage_newone_small.jpg', '0px', '0px']
                        },
                        {
                            rect: ['-649px', '237px', '1691px', '300px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'vogelflug_small',
                            type: 'image',
                            clip: 'rect(0px 180px 220px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/vogelflug_small.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '854px', '1139px']
                        }
                    }
                },
                timeline: {
                    duration: 800,
                    autoPlay: true,
                    data: [
                        [
                            "eid289",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid290",
                            "background-position",
                            100,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,0],
                            [-186,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid291",
                            "background-position",
                            200,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-186,0],
                            [-373,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid292",
                            "background-position",
                            300,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-373,0],
                            [-551,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid293",
                            "background-position",
                            400,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-551,0],
                            [-742,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid294",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-742,0],
                            [-935,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid295",
                            "background-position",
                            600,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-935,0],
                            [-1114,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid296",
                            "background-position",
                            700,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-1114,0],
                            [-1294,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid297",
                            "background-position",
                            800,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-1294,0],
                            [-1484,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid288",
                            "left",
                            0,
                            800,
                            "linear",
                            "${vogelflug_small}",
                            '-328px',
                            '-649px'
                        ],
                        [
                            "eid279",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,220,0],
                            [0,180,220,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid280",
                            "clip",
                            100,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,220,0],
                            [0,180,220,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid281",
                            "clip",
                            200,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,220,0],
                            [0,180,220,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid282",
                            "clip",
                            300,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,220,0],
                            [0,180,235,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid283",
                            "clip",
                            400,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,235,0],
                            [0,180,261,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid284",
                            "clip",
                            500,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,261,0],
                            [0,180,261,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid285",
                            "clip",
                            600,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,261,0],
                            [0,180,272,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid286",
                            "clip",
                            700,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,272,0],
                            [0,180,272,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid287",
                            "clip",
                            800,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,272,0],
                            [0,180,272,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Haus_Pudding": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-4px', '3px', '854px', '1126px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '854px', '1139px', 'auto', 'auto'],
                            id: 'haus_pudding',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/haus_pudding.jpg', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            rect: ['0', '0px', '854px', '1139px', 'auto', 'auto'],
                            source: ['media/pudding1.mp4', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg', 'images/haus_pudding.jpg'],
                            id: 'pudding1',
                            tag: 'video',
                            type: 'video',
                            poster: 'images/haus_pudding.jpg'
                        },
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/pudding2.mp4'],
                            id: 'pudding2',
                            rect: ['0px', '0px', '854px', '1139px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '854px', '1139px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid390",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pudding2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Haus_Pool": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-517px', '-512px', '2070px', '2048px', 'auto', 'auto'],
                            id: 'poolhouse_withoutstar2',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/poolhouse_withoutstar.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1035px', '1024px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Haus_Plateau": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1014px', '-1352px', '2898', '3864', 'auto', 'auto'],
                            id: 'plateau_fin_ohnesterne',
                            transform: [[], [], [], ['0.3', '0.3']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/plateau_fin_ohnesterne.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '869px', '1159px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Haus_Steinbock2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '854px', '1139px', 'auto', 'auto'],
                            id: 'haus_pudding',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/haus_steinbock.jpg', '0px', '0px']
                        },
                        {
                            type: 'video',
                            source: ['media/steinbock.mp4', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg', 'images/haus_steinbock.jpg'],
                            id: 'pudding1',
                            poster: 'images/haus_steinbock.jpg',
                            preload: 'auto',
                            loop: 'loop',
                            rect: ['0', '0px', '854px', '1139px', 'auto', 'auto'],
                            tag: 'video'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '854px', '1139px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Haus_Hochaus2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            rect: ['0px', '0px', '854px', '1139px', 'auto', 'auto'],
                            source: ['images/hochhaus_destruction.jpg', 'images/hochhaus_destruction.jpg', 'media/hochhaus_destruction.mp4', 'images/hochhaus_destruction.jpg', 'images/hochhaus_destruction.jpg', 'images/hochhaus_destruction.jpg'],
                            id: 'hochhaus_destruction',
                            tag: 'video',
                            type: 'video',
                            poster: 'images/hochhaus_destruction.jpg'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '854px', '1139px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("Eric");
