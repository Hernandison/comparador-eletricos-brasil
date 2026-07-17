/* ============================================================
   DADOS DOS CARROS ELÉTRICOS · Brasil · jul/2026
   FONTE ÚNICA DE VERDADE — edite os modelos SOMENTE aqui.
   index.html consome via <script src="cars.js"> (antes do app).
   Campos: b marca · m modelo · v versão · p preço(R$) · kwh bateria
   km autonomia · ci ciclo (i=Inmetro / d=divulgado) · cv potência
   s 0-100(s) · dc recarga DC(kW) · mala(L) · o origem (N/I)
   cat categoria · sf/sr suspensão diant/tras · susp nota 0-5
   tags[] rótulos · nota observação                              
   ============================================================ */
var CARS=[
{b:'Renault',m:'Kwid E-Tech',v:'',p:99990,kwh:26.8,km:180,ci:'i',cv:65,s:null,dc:30,mala:290,o:'I',cat:'Urbano',sf:'McPherson',sr:'Barra de torção',susp:2.8,tags:['Rede Renault ampla'],nota:'Mais barato do país'},
{b:'BYD',m:'Dolphin Mini',v:'GL',p:109990,kwh:30,km:224,ci:'i',cv:75,s:null,dc:30,mala:230,o:'N',cat:'Urbano',sf:'McPherson',sr:'Barra de torção',susp:3.0,tags:['Bateria Blade LFP','Promo julho (tabela R$ 118.990)']},
{b:'BYD',m:'Dolphin Mini',v:'GS',p:119990,kwh:38,km:280,ci:'i',cv:75,s:null,dc:30,mala:230,o:'N',cat:'Urbano',sf:'McPherson',sr:'Barra de torção',susp:3.0,tags:['Bateria Blade LFP','Multimídia giratória']},
{b:'JAC',m:'E-JS1',v:'',p:119900,kwh:30.2,km:181,ci:'i',cv:62,s:null,dc:null,mala:null,o:'I',cat:'Urbano',sf:'McPherson',sr:'Barra de torção',susp:2.7,tags:['Veterano do segmento']},
{b:'Caoa Chery',m:'iCar',v:'',p:119990,kwh:26,km:197,ci:'i',cv:61,s:null,dc:null,mala:null,o:'I',cat:'Urbano',sf:'McPherson',sr:'Barra de torção',susp:2.6,tags:['Micro urbano ágil']},
{b:'Geely',m:'EX2',v:'Pro',p:123800,kwh:39.4,km:289,ci:'i',cv:116,s:10.2,dc:null,mala:375,o:'I',cat:'Urbano',sf:'McPherson',sr:'Barra de torção',susp:3.2,tags:['Tração traseira','Frunk 70 L','Garantia 6a/150 mil km'],nota:'Produção nacional anunciada (Renault-PR)'},
{b:'Geely',m:'EX2',v:'Max',p:136800,kwh:39.4,km:289,ci:'i',cv:116,s:10.2,dc:null,mala:375,o:'I',cat:'Urbano',sf:'McPherson',sr:'Barra de torção',susp:3.2,tags:['Câmera 540°','Carregador por indução','Rodas liga 16"']},
{b:'Neta',m:'Aya',v:'',p:124900,kwh:40,km:263,ci:'d',cv:95,s:null,dc:null,mala:null,o:'I',cat:'Urbano',sf:'McPherson',sr:'Barra de torção',susp:3.0,tags:[]},
{b:'MG',m:'MG4 Urban',v:'Comfort 43',p:129990,kwh:43,km:299,ci:'i',cv:150,s:9.6,dc:87,mala:477,o:'I',cat:'Hatch',sf:'McPherson',sr:'Eixo de torção',susp:3.4,tags:['Bateria LFP 43 kWh','7 airbags','Central 12,8"','15 funções ADAS'],nota:'Porta de entrada da MG · rear por eixo de torção (mais simples que o MG4 multibraços)'},
{b:'MG',m:'MG4 Urban',v:'Luxury 43',p:139990,kwh:43,km:299,ci:'i',cv:150,s:9.6,dc:87,mala:477,o:'I',cat:'Hatch',sf:'McPherson',sr:'Eixo de torção',susp:3.4,tags:['Bateria LFP 43 kWh','Acabamento Luxury','Câmera de ré','ADAS completo']},
{b:'MG',m:'MG4 Urban',v:'Luxury 54',p:149990,kwh:54,km:358,ci:'i',cv:160,s:9.5,dc:87,mala:477,o:'I',cat:'Hatch',sf:'McPherson',sr:'Eixo de torção',susp:3.4,tags:['Bateria 54 kWh','358 km Inmetro','160 cv','Topo de linha'],nota:'Maior autonomia da linha Urban'},
{b:'GAC',m:'Aion UT',v:'Premium',p:139990,kwh:44.1,km:253,ci:'i',cv:204,s:8.6,dc:87,mala:340,o:'I',cat:'Hatch',sf:'McPherson',sr:'Barra de torção',susp:3.3,tags:['Wallbox grátis','Seguro 1º ano','Câmera 360°','V2L']},
{b:'Chevrolet',m:'Spark EUV',v:'',p:144990,kwh:42,km:258,ci:'i',cv:102,s:null,dc:null,mala:355,o:'N',cat:'SUV compacto',sf:'McPherson',sr:'Barra de torção',susp:3.2,tags:['6 airbags','ACC + câmera 360°','Rede Chevrolet']},
{b:'BYD',m:'Dolphin',v:'GS',p:149990,kwh:44.9,km:291,ci:'i',cv:95,s:10.9,dc:60,mala:345,o:'N',cat:'Hatch',sf:'McPherson',sr:'Multibraços',susp:3.6,tags:['Faróis LED','Tela giratória']},
{b:'GWM',m:'Ora 03',v:'Skin',p:150000,kwh:48,km:315,ci:'i',cv:171,s:null,dc:null,mala:228,o:'I',cat:'Hatch',sf:'McPherson',sr:'Barra de torção',susp:3.4,tags:['Design retrô','Foco em segurança']},
{b:'BYD',m:'Dolphin',v:'SE',p:159990,kwh:45.1,km:272,ci:'i',cv:177,s:8.0,dc:80,mala:345,o:'N',cat:'Hatch',sf:'McPherson',sr:'Multibraços',susp:3.7,tags:['ADAS nível 2','Facelift 2026','Estepe']},
{b:'GAC',m:'Aion UT',v:'Elite',p:159990,kwh:60,km:310,ci:'i',cv:204,s:7.3,dc:87,mala:340,o:'I',cat:'Hatch',sf:'McPherson',sr:'Barra de torção',susp:3.4,tags:['ADAS nível 2 (11 funções)','V2L','Wallbox + seguro 1º ano']},
{b:'MG',m:'MG4',v:'',p:169990,kwh:51,km:364,ci:'d',cv:204,s:7.7,dc:88,mala:363,o:'I',cat:'Hatch',sf:'McPherson',sr:'Multibraços (5 braços)',susp:4.2,tags:['Tração traseira','Rear multibraços — dirigibilidade premiada']},
{b:'GAC',m:'Aion ES',v:'',p:170990,kwh:55,km:314,ci:'d',cv:136,s:null,dc:null,mala:null,o:'I',cat:'Sedã',sf:'McPherson',sr:'Barra de torção',susp:3.1,tags:['Foco em frotas/apps']},
{b:'Leapmotor',m:'B10',v:'',p:172990,kwh:56.2,km:288,ci:'i',cv:218,s:7.3,dc:168,mala:430,o:'I',cat:'SUV compacto',sf:'McPherson',sr:'Multibraços',susp:3.8,tags:['Grupo Stellantis','Plataforma LEAP 3.5','ADAS completo','50% em 15 min'],nota:'Nacionalização anunciada; lançou a R$ 182.990 (PcD R$ 161.390)'},
{b:'GAC',m:'Aion Y',v:'',p:175990,kwh:63,km:318,ci:'d',cv:204,s:null,dc:null,mala:null,o:'I',cat:'SUV compacto',sf:'McPherson',sr:'Multibraços',susp:3.6,tags:['Bateria LFP','Espaço interno']},
{b:'BYD',m:'Dolphin',v:'Plus',p:184800,kwh:60.5,km:427,ci:'i',cv:204,s:7.0,dc:80,mala:345,o:'I',cat:'Hatch',sf:'McPherson',sr:'Multibraços',susp:3.8,tags:['Teto solar','Bancos elétricos','Rodas 17"']},
{b:'BYD',m:'Yuan Plus',v:'',p:189800,kwh:60.5,km:380,ci:'d',cv:204,s:7.3,dc:80,mala:440,o:'I',cat:'SUV compacto',sf:'McPherson',sr:'Multibraços',susp:3.7,tags:['Interior "academia"']},
{b:'MG',m:'MG4',v:'Long Range',p:189990,kwh:64,km:435,ci:'d',cv:204,s:7.9,dc:140,mala:363,o:'I',cat:'Hatch',sf:'McPherson',sr:'Multibraços (5 braços)',susp:4.2,tags:['Maior autonomia MG4','Rear multibraços']},
{b:'Zeekr',m:'X',v:'',p:189990,kwh:66,km:440,ci:'d',cv:272,s:null,dc:null,mala:null,o:'I',cat:'SUV compacto',sf:'McPherson',sr:'Multibraços',susp:4.0,tags:['Premium (grupo Geely)']},
{b:'Honda',m:'e:NP1',v:'',p:199990,kwh:68.8,km:412,ci:'d',cv:204,s:null,dc:null,mala:null,o:'I',cat:'SUV compacto',sf:'McPherson',sr:'Multibraços',susp:3.9,tags:['Confiabilidade Honda']},
{b:'Neta',m:'X',v:'500',p:204900,kwh:52,km:317,ci:'d',cv:163,s:null,dc:null,mala:null,o:'I',cat:'SUV compacto',sf:'McPherson',sr:'Multibraços',susp:3.6,tags:[]},
{b:'Leapmotor',m:'C10',v:'',p:204990,kwh:69.9,km:338,ci:'i',cv:218,s:null,dc:null,mala:435,o:'I',cat:'SUV médio',sf:'McPherson',sr:'Multibraços',susp:3.9,tags:['Grupo Stellantis']},
{b:'Geely',m:'EX5',v:'Pro',p:205800,kwh:60.2,km:413,ci:'i',cv:218,s:6.9,dc:null,mala:null,o:'I',cat:'SUV médio',sf:'McPherson',sr:'Multibraços',susp:3.9,tags:['413 km Inmetro — líder da faixa','32,6 kgfm']},
{b:'Omoda',m:'E5',v:'',p:209990,kwh:61,km:345,ci:'i',cv:204,s:null,dc:80,mala:380,o:'I',cat:'SUV médio',sf:'McPherson',sr:'Multibraços',susp:3.7,tags:['Visual futurista']},
{b:'GAC',m:'Aion V',v:'',p:214990,kwh:75,km:389,ci:'d',cv:204,s:null,dc:null,mala:null,o:'I',cat:'SUV médio',sf:'McPherson',sr:'Multibraços',susp:3.8,tags:['"Melhor Compra 2025"']},
{b:'MG',m:'S5',v:'',p:218800,kwh:62,km:351,ci:'d',cv:205,s:null,dc:null,mala:453,o:'I',cat:'SUV médio',sf:'McPherson',sr:'Multibraços',susp:3.8,tags:[]},
{b:'Smart',m:'#1',v:'',p:219990,kwh:66,km:440,ci:'d',cv:272,s:6.7,dc:150,mala:313,o:'I',cat:'SUV compacto',sf:'McPherson',sr:'Multibraços',susp:4.1,tags:['Premium (Mercedes/Geely)']},
{b:'Volvo',m:'EX30',v:'Single Ext.',p:229990,kwh:69,km:344,ci:'i',cv:272,s:5.3,dc:153,mala:318,o:'I',cat:'SUV compacto',sf:'McPherson',sr:'Multibraços',susp:4.2,tags:['0-100 em 5,3 s','Segurança Volvo']},
{b:'Fiat',m:'500e',v:'',p:239990,kwh:42,km:227,ci:'i',cv:118,s:9.0,dc:85,mala:185,o:'I',cat:'Urbano',sf:'McPherson',sr:'Barra de torção',susp:3.3,tags:['Ícone de design']},
{b:'Nissan',m:'Leaf',v:'nova geração',p:239990,kwh:null,km:385,ci:'d',cv:218,s:null,dc:150,mala:null,o:'I',cat:'SUV compacto',sf:'McPherson',sr:'Multibraços',susp:3.9,tags:['Pioneiro reinventado']},
{b:'Peugeot',m:'e-2008',v:'GT',p:249990,kwh:54,km:261,ci:'i',cv:156,s:9.1,dc:100,mala:434,o:'I',cat:'SUV compacto',sf:'McPherson',sr:'Barra de torção',susp:3.4,tags:['i-Cockpit']},
{b:'BYD',m:'Seal',v:'',p:259800,kwh:82.5,km:570,ci:'d',cv:313,s:5.9,dc:150,mala:400,o:'I',cat:'Sedã',sf:'Duplo braço',sr:'Multibraços',susp:4.4,tags:['Sedã esportivo']},
{b:'Mini',m:'Cooper SE',v:'',p:259990,kwh:54.2,km:305,ci:'d',cv:218,s:6.7,dc:95,mala:210,o:'I',cat:'Urbano',sf:'McPherson',sr:'Multibraços',susp:4.0,tags:['Go-kart feeling']},
{b:'Tesla',m:'Model 3',v:'',p:279990,kwh:60,km:510,ci:'d',cv:283,s:6.1,dc:170,mala:594,o:'I',cat:'Sedã',sf:'Duplo braço',sr:'Multibraços',susp:4.3,tags:['Rede Supercharger']},
{b:'Chevrolet',m:'Equinox EV',v:'',p:299990,kwh:85,km:513,ci:'d',cv:290,s:null,dc:150,mala:null,o:'I',cat:'SUV médio',sf:'McPherson',sr:'Multibraços',susp:4.0,tags:['Maior rede do Brasil']},
{b:'Tesla',m:'Model Y',v:'',p:319990,kwh:null,km:455,ci:'d',cv:299,s:5.9,dc:250,mala:null,o:'I',cat:'SUV médio',sf:'Duplo braço',sr:'Multibraços',susp:4.2,tags:['SUV mais vendido do mundo']},
{b:'Volvo',m:'EX40',v:'Twin',p:329990,kwh:78,km:438,ci:'d',cv:408,s:4.8,dc:null,mala:410,o:'I',cat:'SUV médio',sf:'McPherson',sr:'Multibraços',susp:4.3,tags:['Tração integral']},
{b:'BMW',m:'iX1',v:'',p:339990,kwh:64.7,km:440,ci:'d',cv:313,s:5.6,dc:130,mala:490,o:'I',cat:'SUV compacto',sf:'McPherson',sr:'Multibraços',susp:4.3,tags:['DNA BMW']},
{b:'Hyundai',m:'Ioniq 5',v:'',p:339990,kwh:77.4,km:480,ci:'d',cv:325,s:5.3,dc:233,mala:527,o:'I',cat:'SUV médio',sf:'McPherson',sr:'Multibraços',susp:4.4,tags:['Arquitetura 800 V — recarga ultrarrápida']},
{b:'Kia',m:'EV6',v:'',p:349990,kwh:77.4,km:506,ci:'d',cv:325,s:5.2,dc:233,mala:480,o:'I',cat:'SUV médio',sf:'McPherson',sr:'Multibraços',susp:4.4,tags:['800 V','World Car of the Year']},
{b:'BYD',m:'Han EV',v:'',p:429800,kwh:85.4,km:521,ci:'d',cv:517,s:3.9,dc:120,mala:410,o:'I',cat:'Sedã',sf:'Duplo braço',sr:'Multibraços',susp:4.5,tags:['Executivo 517 cv']},
{b:'MG',m:'Cyberster',v:'',p:499800,kwh:77,km:342,ci:'d',cv:510,s:3.2,dc:null,mala:null,o:'I',cat:'Esportivo',sf:'Duplo braço',sr:'Multibraços',susp:4.3,tags:['Único roadster elétrico do país']}
];
