# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Player.destroy_all
Course.destroy_all

#players
neon = Player.create!(
  playername: "NeonWombat",
  password: "saltysquirrel",
  location: "Brooklyn, NY",
  bio: "Always down for a quick ride to the river or a race over the bridge. Enjoys sleeping in, catting online with babes, street food, and street fights."
)

flynn = Player.create!(
  playername: "Flynn",
  password: "password123",
  location: "San Francisco, CA",
  bio: "Programmer, game desiner, and all around badass. This one time I got uploaded into cyberspace. It was rad. "
)

tron = Player.create!(
  playername: "Tron",
  password: "password123",
  location: "Austin, TX",
  bio: "Really into user rights advocacy and ultimate frisbee. Undefeted ciberspace champion of lightcycle racing."
)

mcp = Player.create!(
  playername: "MCP",
  password: "password123",
  location: "Los Angeles, CA",
  bio: "I AM THE MASTER CONTROL PROGARM. ALL DATA FLOWS THROUGH ME. STOP ONLINE SHOPPING AT WORK."
)

#open avatars
neon_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/wombat_full.jpg')
flynn_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/flynn.png')
tron_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/old_tron.png')
mcp_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/MPC.png')

#attach avatars
neon.avatar.attach(io: neon_avatar, filename: 'wombat_full.jpg')
flynn.avatar.attach(io: flynn_avatar, filename: 'flynn.jpg')
tron.avatar.attach(io: tron_avatar, filename: 'old_tron.png')
mcp.avatar.attach(io: mcp_avatar, filename: 'MPC.png')

course7 = Course.create!(
  player_id: mcp.id,
  course_name: "COFFEE RUN", 
  distance: "1.0 mi", 
  time: "19 mins", 
  pins_object: "{\"pins\":[{\"lat\":34.11105261597319,\"lng\":-118.29175824515583},{\"lat\":34.109045042492724,\"lng\":-118.28744525305989},{\"lat\":34.10766635813715,\"lng\":-118.29151656215609},{\"lat\":34.108788169829054,\"lng\":-118.2917689585493},{\"lat\":34.109969627295605,\"lng\":-118.29177968738536},{\"lat\":34.11090234521915,\"lng\":-118.29174750087718}]}", 
  static_map: "eieoEnz~pU@DEUZP^?`@?|B??kCAsK?oDL?\\?pBCFEBO?mBzG?@xI?dFL??P?dGM?kC?qC?gI?", 
  travel_mode: "WALKING", 
  description: "CONTROLLING ALL INFORMATION REQUIRES ENERGY, ENERGY DEMANDS COFFEE, DO NOT QUESTION ME"
  )
  
course5 = Course.create!(
  player_id: tron.id,
  course_name: "Shoal Trail", 
  distance: "5.6 mi", 
  time: "33 mins", 
  pins_object: "{\"pins\":[{\"lat\":30.26870598892859,\"lng\":-97.75130481502367},{\"lat\":30.267297518792947,\"lng\":-97.75104732295824},{\"lat\":30.268511846150076,\"lng\":-97.75172465585699},{\"lat\":30.273681648989967,\"lng\":-97.7517142403858},{\"lat\":30.28983338466641,\"lng\":-97.75300270601392},{\"lat\":30.298133967687445,\"lng\":-97.74916999893024},{\"lat\":30.269436743544407,\"lng\":-97.75185613882941}]}", 
  static_map: "ozvwDr`ssQBYZH^JrA\\bAXRHZ}@NcACA?CFy@AEUKq@IM@[CKDIFKXM`@MJSTQ`@[dB@j@?^CVIXKRYVeAFe@?WAKCSMUY[eA_@k@[_@[UWKQCWMUM}@m@YIUO_@KUBe@Rw@b@iAZo@Nc@DO@MDODSBYDI?@JGZCFa@MQGDa@BSFk@SHGBSVm@|@a@Aq@AYAMOMQc@]WSOQYO_@GWIa@USOU[a@o@]_@USSMe@Ee@Ba@D]JYRMFYDiA\\YNWTo@Te@FWLS@i@?oBAoAQkBW_AKm@BEDBV@d@AR_@EQ?oAp@}@f@gAx@m@l@QZeBtDQ`@_AxAYr@Or@W`@k@Z_@JwA@w@Gi@Oi@IMOMQUIoA]SCQ@y@DSAs@@y@UUBYGq@KaAE}@Ue@Qe@]KGa@KSE}@k@_@U}@g@_Ag@YSe@U]Ss@[s@m@i@Wg@UkAeAk@w@GEGISwBKcDDQDe@KoAI}BSoAKIM]EAm@KWAe@Ja@NCHILe@Lq@Li@ViBnAgCzAg@NUJe@j@u@Vo@H{@Ao@Da@N_@WEACB]VQHi@PK@YEUOOUIOk@e@Pc@BKAS@HCTQb@j@d@HNNTTNXDJAh@QPI\\WBCB?DBXTFAZMZEt@@X?n@It@WFI\\a@TKz@[tD_CpAw@hASRMFQl@UXEV@p@JBBJZFDFHNhAD~@B|@Ht@?n@GZAD@Dn@ThAZJ`ARdAP\\^d@fA`A|C~BlAx@pBdAz@XdAZxARpG|@j@@j@@?PhA?`@Az@A^?J?XU`Bq@r@]r@[rAu@p@q@~@kAz@{@fAw@n@]jBo@bAObAEJCd@Ap@Fl@HvARhANtB@d@?PCTKh@Kj@URQ^QbA]\\ENIROb@Mv@Gr@Fl@f@\\^Xh@VZZP\\TZFZFXPLRZR\\XLTFFFB\\?|ABXUPMb@Bp@BXEb@ILENAb@ExA]^Mv@c@d@STC^JTNXH|@l@TLVLPBVJZTZ^^j@ZdATXRLb@Dd@?dAGXWJSHYBW?_@Ak@HUHYBKFUGC_@K{@UgAYAJGh@UxBIC", 
  travel_mode: "BICYCLING", 
  description: "A pleasant ride on which to ponder the designs of the user."
)
  
course2 = Course.create!(
  player_id: neon.id,
  course_name: "Dumplings Please!", 
  distance: "3.7 mi", 
  time: "23 mins", 
  pins_object: "{\"pins\":[{\"lat\":40.729625201783605,\"lng\":-73.96022493682244},{\"lat\":40.718332219147065,\"lng\":-73.9918837385701}]}", 
  static_map: "e_rwFfjlbMYkGW}FPAbCUpGk@~AMn@FrCXjFj@v@JnBPb@@TDNJv@|@nBtBh@l@pD|DxBdC|FpGlD`EjSw_@DEtBzBbFtFz@~@lBdApGnDnCzAbAh@^TLk@b@sBNFKf@k@lCoAfGo@xCg@bCeBdJKh@@HD^@RGf@qAhGo@~CoG`[cD`PqAfG[vA@FDHS|@m@tCqAfG}C|NkCjMGTPJb@L`EdBxAr@FDGVg@jCy@~DCVuAnGkArFOt@m@zCeCeA", 
  travel_mode: "BICYCLING", 
  description: "Chinatown has fire dumplings, if you ask me.",
)
  
course8 = Course.create!(
  player_id: mcp.id,
  course_name: "ONLY A BIKE RIDE", 
  distance: "6.7 mi", 
  time: "38 mins", 
  pins_object: "{\"pins\":[{\"lat\":34.01085377420585,\"lng\":-118.49565041828981},{\"lat\":34.003027158589106,\"lng\":-118.48766816426149},{\"lat\":34.02119916855795,\"lng\":-118.46308145586818},{\"lat\":34.003426251528474,\"lng\":-118.48732824433296},{\"lat\":33.99749817242375,\"lng\":-118.48276139182161}]}", 
  static_map: "}vqnE|tfrUzDhF?BPTr@y@hAsAPOb@YNUNw@~@kAn@gB`AyCd@yALUTWZSb@c@d@o@PQ^Qp@SZUbAiAZk@HIZMRM^]dCiC`@Y`H_HaBmCe@s@HIlBoBnC{@JGVQtBoBXSvBqBVUw@qAmCoESIOSOUSY?OGM}AcCyAkCyB}DSa@kBiDkCmFwBaEoAiCk@qAi@cAaAyBsAdB}ErG{ArBm@mA_@^qApA[Zg@eAi@gAwBkEaG{LwJgSqF}KiAaCuBqEu@oAkDiHiIwPiAiC[{@e@`@a@Zq@mBiHxFq@h@g@^nBpEn@xAnCwBrHaGzFsE~IgHhD`HbEjIrLnVvFjLzCfGjE~Ip@nAtBnEnB~DnAjCTf@BX^x@p@tArArCrCvFh@dAt@zAvAnCp@hAhAtBxB`EvAjCbA~A^p@LBHLRXTZDTHLtA~Bl@`Ap@fAIHgAbAa@\\{BvBo@f@KF{CbAaByCo@eAEGOLeAfAGFMQSTT`@LRdC|DFHt@w@v@w@hCw@LINK^YjBeB`@[nBkB^Y~BqBr@u@hAeAd@m@lCeCfA_Ah@_@x@m@r@q@", 
  travel_mode: "BICYCLING", 
  description: "I REQUIRE RELAXING BEACH RIDES, THAT THE ROUT PASSES MY EX GIRLFRIEND'S APARTMENT IS A MERE COINCIDENCE"
)

course3 = Course.create!(
player_id: flynn.id,
course_name: "Burritos for Lunch", 
distance: "6.6 mi", 
time: "41 mins", 
pins_object: "{\"pins\":[{\"lat\":37.80244880879544,\"lng\":-122.4689830674045},{\"lat\":37.75889302770194,\"lng\":-122.41475952995943}]}", 
static_map: "khveFpvnjVo@Mk@GiAR}@\\{@TQJMNg@z@SVYP]JQ@MAUIHSXINEZ[h@oA^c@`A{@JUViANm@P{@MKc@o@FKBKn@_HRuCn@qLf@oI?e@Ea@Mk@O_@[c@k@w@Qq@M}AeAcPa@oGy@_Ms@uKUeDi@eHCSEIY_CAGBi@IuAi@iIoB}ZaBwVQmCAc@PaAhAyBhEaIDQ@Sc@kH@MHGpDe@~BWRBVEzDi@LCi@gIi@iIQkCc@sGaAmOCm@dFm@pC[|Fs@rBWZAfBSpFu@xDc@`IaA`Eg@`KiA`KqAbD[vCa@xDe@xKsAhTgCrIcAjM}Ae@gHGsBYcEIs@b@c@v@mAbC_DxAsBhA}AxAsBX]\\e@`@j@t@dAl@x@nD~EbGdIv@fAxAqB|AwB|@iAf@p@XZnAjAl@b@t@d@bBp@TFdBTp@L`AB|@CnIa@nQu@v@InGW`FUnKe@l@CNA?F", 
travel_mode: "BICYCLING", 
description: "Guac is extra, let us never forget."
)

course6 = Course.create!(
  player_id: tron.id,
  course_name: "Dropped My Wallet :(", 
  distance: "2.8 mi", 
  time: "55 mins", 
  pins_object: "{\"pins\":[{\"lat\":30.29701233555553,\"lng\":-97.70704673421278},{\"lat\":30.29521519784514,\"lng\":-97.7064030040492},{\"lat\":30.296733407144337,\"lng\":-97.70521982118596},{\"lat\":30.29798033355973,\"lng\":-97.70599252820959},{\"lat\":30.29685018525905,\"lng\":-97.70799041622142},{\"lat\":30.298027382697196,\"lng\":-97.70700004055003},{\"lat\":30.295294636996115,\"lng\":-97.70794470325451},{\"lat\":30.2978817725684,\"lng\":-97.70789105907421},{\"lat\":30.296825735927086,\"lng\":-97.7041906608961},{\"lat\":30.295558834028398,\"lng\":-97.70397847438794},{\"lat\":30.294447189864,\"lng\":-97.70515591884593},{\"lat\":30.295253133139322,\"lng\":-97.70567090297679},{\"lat\":30.294132221726542,\"lng\":-97.70678670192699},{\"lat\":30.294150013075054,\"lng\":-97.70542413974742}]}", 
  static_map: "kk|wDvkjsQxBOBEPAPCTFR@JFX`@TJDCb@@ZJXE`@]N]?_@AWI[QMWKa@Gq@?YCQWA_@Hc@Ea@MYWOKIEO?[XaA?a@M[UOW?KFKLEn@INED[VITAXLb@\\n@BZE^QZQLMBY?KGg@e@MCS@K@EAOQKEQGI?c@JIBGRC`@DTDJPRa@hABJNPDDZJVDhCSDzADx@Bl@J`@DNq@TcA`@iAl@GBCS]iFD]IIC@C@OBOKEK@WHKLEH@BBFODDDDZJVDhCSDzADx@Bl@J`@DNhA[x@KhBQtE]~@IAM?qAs@Ee@@o@X]JSEQMWSm@KUB[PGDK^Mr@ORmANmA@G?KLYLONW`@a@JGBQAWIYYSmCD]NSTODAAOe@KKKMWxA}DnAeDpAiDMIz@}BNe@J]Jg@Bc@lCEBhGBb@Hf@^~@XZf@Vd@LbADXAZA?FIL?JIDk@Xc@Ra@Jm@Du@@u@HK@EJKNEF@MAOCQZJJAt@It@Al@E`@Kb@Sj@YHE?MHKB|HL?", 
  travel_mode: "WALKING", 
  description: "If anyone is in Mueller Lake Park can you keep an eye out for my wallet please? You can keep the cash, but I really don't want to replace my credit cars, and I have a full punch card from TCBY in there..."
)

course4 = Course.create!(
  player_id: flynn.id,
  course_name: "Golden Gate Jog", 
  distance: "3.2 mi", 
  time: "1 hour 4 mins", 
  pins_object: "{\"pins\":[{\"lat\":37.76519826198347,\"lng\":-122.48368580013057},{\"lat\":37.76672596385081,\"lng\":-122.48235497786578},{\"lat\":37.767048476224936,\"lng\":-122.47339688439293},{\"lat\":37.77098268494732,\"lng\":-122.47621719085654},{\"lat\":37.77009112501477,\"lng\":-122.48530585494954},{\"lat\":37.76614951000918,\"lng\":-122.49292314071613},{\"lat\":37.766599018979186,\"lng\":-122.48264964630043}]}", 
  static_map: "_`oeFfrqjV@TEBYQUW_@w@c@eAg@}@a@]e@MY?IBACGg@Eu@B_ATwCHy@AMR}@`AgCj@wAJ]Ry@Da@AYESYe@CCGi@E}@g@KAU@]S@HO@MI}@o@wE_B{I[cBSs@m@gA]TGDJFLJPTNXB\\Gl@Qr@Ah@FbBCfA]fCUnA_@nAAbABXBFLDf@JFHAVSR_ARmAFOCQGi@Mo@Bi@Lm@Rc@MGAUB]L}@D]E]e@MYSFE]As@i@NDQNIU}@Ko@AQQ@@HD`@R~@Ct@ECMIMWQo@MOg@EEA@VX~Bb@xBdAlDL^ADFRPj@FXJ^Pv@@VHGFTr@hDRvANtAAx@An@KtAOxAGlA@j@Jz@RjABr@Al@It@o@pBMj@b@z@b@bAb@fANl@b@tC`@tBZ~@Ft@DRFLb@b@DJBNFr@t@Ab@Hj@Tj@TBJZ`AlA~FZtAp@pBFTBFJ?b@AL@z@V^JP@x@Dh@D@q@FuB@qA@oBGi@CUB[?{AC_AOmBKcBAMF?d@?Ck@YoHE{@Ky@?q@@eA?eDKwBYeAIS_@o@_@w@SaA]uBK[", 
  travel_mode: "WALKING", 
  description: "I seem to be eating too many burritos. The dad-bod is unbecoming, so I'm counting on this daily loop to shed some weight."
)

course1 = Course.create!(
  player_id: neon.id,
  course_name: "Beach Day", 
  distance: "10.4 mi", 
  time: "57 mins", 
  pins_object: "{\"pins\":[{\"lat\":40.67262006124486,\"lng\":-73.96984753265579},{\"lat\":40.561153042262525,\"lng\":-73.88429959405327}]}", 
  static_map: "a{fwFlfnbM?i@TkALWHG`@W\\e@dDwBrUmOzMgIxA}@N?tEqC`C{AxAaANSn@_@hC_BpCcB^UXGd@CZAQ{G]uM|G]vHa@`Ns@lKk@hCQlI_@|ACzHIlECtCGZCd@OdCcAvBaA~@]b@I`_@mB|BKb@Mh@IREHGpCYdKiAvMyA~N_Bx[oDtYaDp@IpOcB`NyASaEUwDKqAIgBk@_KUuEg@cJOiCD[DKfBuBjZo]hAmApGuHpXm[bDwDGOwAgCiB_DgAmBKQp@u@hGeH@ECMsGmLsAiCCIsAgCv@aAFMbBoBRSd@e@jCyCvB_CLSDWzH{IhD}DbHcITIlAuA~AiB~@eAvG_Ij@o@FALELG^M?MzCmD~AkBHAF?BIHSTY`CqC~CmD`@Q@E@ILYpB}B^c@F@Tk@NUz@cArBcCz@cAdB{B~DyDdAeAzIcKzSgV|JeLpGoHnAaBrCmDb@u@JRl@w@^e@~@cAlAeAvBqBxAeBbAaBb@q@j@s@^[TOvDmBdFiCnUmLpGaDlGiDdHsD\\Gf@FXLJLJTNr@P~@BDH?HANGAQb@S~@e@dKaF~DqBH\\Rz@FZD\\vAxAxFbGNb@hAg@H@Pn@r@hD", 
  travel_mode: "BICYCLING", 
  description: "When the rattle of trains and the honking of horns gets to be too much, a brisk ride to the beach is just what the doctor ordered. Remember to pack a beer and a snack."
)