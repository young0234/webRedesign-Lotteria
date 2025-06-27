// 메뉴 객체
menus = {
  desert: [
    {
      number: 0,
      kr_name: "쥐포튀김",
      en_name: "Fried Crab Meat",
      info: "감칠맛이 폭발하는, 겉은 바삭 속은 쫄깃한 쥐포튀김 (청양마요소스 1개 기본제공)",
      url: "../images/dessert01.png",
      price: 4200,
      allergy: "달걀, 밀, 쇠고기, 우유",
      gram: 79,
      kcal: 309,
      protein: "8(15)",
      sodium: "720(36)",
      sugar: 15,
      saturatedFat: "1.4(9)"
    },
    {
      number: 1,
      kr_name: "못난이치즈감자",
      en_name: "Ugly Cheese Potatoes",
      info: "못난이치즈감자 국내산 못난이 감자로 재탄생한 대만야시장 스타일 감자 디저트 후라잉한 매쉬드포테이토에 체다크림치즈소스를 곁들인 떠먹는 형태의 감자 디저트",
      url: "../images/dessert02.png",
      price: 3500,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기, 토마토, 돼지고기",
      gram: 140,
      kcal: 260,
      protein: "5(10)",
      sodium: "550(28)",
      sugar: 5,
      saturatedFat: "3.6(24)"
    },
    {
      number: 2,
      kr_name: "양념너겟",
      en_name: "Seasoned Nuggets",
      info: "담백하고 촉촉한 치킨너겟에 시즈닝을 뿌려 흔들어 먹는 디저트",
      url: "../images/dessert03.png",
      price: 3300,
      allergy: "",
      gram: "",
      kcal: "278 ~ 285",
      protein: "",
      sodium: "",
      sugar: "",
      saturatedFat: ""
    },
    {
      number: 3,
      kr_name: "NEW 치킨너겟",
      en_name: "NEW Chicken Nuggets",
      info: "닭안심살과 닭가슴살로 만든 담백하고 촉촉한 치킨너겟 - 8조각",
      url: "../images/dessert04.png",
      price: 3100,
      allergy: "NEW 치킨너겟(스위트앤샤워) : 대두, 우유, 밀, 쇠고기, 닭고기, 조개류(굴) / NEW치킨너겟(허니머스타드) : 대두,우유, 밀, 쇠고기, 닭고기, 달걀",
      gram: "",
      kcal: "290 ~ 295",
      protein: "",
      sodium: "",
      sugar: "",
      saturatedFat: ""
    },
    {
      number: 4,
      kr_name: "포테이토",
      en_name: "Potato",
      info: "바로 튀겨낸 바삭바삭한 후렌치 포테이토",
      url: "../images/dessert05.png",
      price: 2000,
      allergy: "대두, 토마토",
      gram: 98,
      kcal: 285,
      protein: "3(6)",
      sodium: "430(22)",
      sugar: 2,
      saturatedFat: "2.8(19)"
    },
    {
      number: 5,
      kr_name: "양념감자",
      en_name: "Seasoned Potatoes",
      info: "시즈닝(어니언, 치즈, 칠리, 실비김치맛) 한가지를 선택해 뿌려먹는 포테이토",
      url: "../images/dessert06.png",
      price: 2500,
      allergy: "양념감자 대두, 우유 / 어니언시즈닝 대두, 우유 / 치즈시즈닝 대두, 우유 / 칠리시즈닝 대두, 우유, 밀, 쇠고기, 토마토 / 실비김치시즈닝 대두, 쇠고기 ",
      gram: "",
      kcal: "369 ~ 376",
      protein: "",
      sodium: "",
      sugar: "",
      saturatedFat: ""
    },
    {
      number: 6,
      kr_name: "포테이토(L)",
      en_name: "Potato(L)",
      info: "바로 튀겨낸 바삭바삭한 후렌치 포테이토",
      url: "../images/dessert07.png",
      price: 2500,
      allergy: "대두, 토마토",
      gram: 148,
      kcal: 422,
      protein: "5(9)",
      sodium: "690(35)",
      sugar: 5,
      saturatedFat: "4.1(27)"
    },
    {
      number: 7,
      kr_name: "치즈스틱",
      en_name: "Cheese Stick",
      info: "통모짜렐라치즈에 튀김옷을 입혀 만든 바삭하고 고소한 롯데리아 대표 디저트 메뉴",
      url: "../images/dessert08.png",
      price: 2800,
      allergy: "밀, 대두, 달걀, 우유",
      gram: 49,
      kcal: 158,
      protein: "8(14)",
      sodium: "270(14)",
      sugar: "1g 미만",
      saturatedFat: "3.7(25)"
    },
    {
      number: 8,
      kr_name: "롱치즈스틱",
      en_name: "Long Cheese Stick",
      info: "롯데리아 대표 디저트인 치즈스틱을 더 크고 더 맛있게",
      url: "../images/dessert09.png",
      price: 2400,
      allergy: "밀, 대두, 달걀, 우유",
      gram: 49,
      kcal: 158,
      protein: "8(15)",
      sodium: "230(12)",
      sugar: 0,
      saturatedFat: "4(27)"
    },
    {
      number: 9,
      kr_name: "통오징어링",
      en_name: "Whole squid ring",
      info: "통오징어로 리얼한 식감과 풍미가 가득한 디저트 (잠발라야 소스 1개 기본제공) ㆍ오징어껍질이 포함되어 있습니다.",
      url: "../images/dessert10.png",
      price: 2800,
      allergy: "오징어,밀,달걀,대두,토마토",
      gram: 97,
      kcal: 166,
      protein: "8(14)",
      sodium: "420(21)",
      sugar: 8,
      saturatedFat: "0.5(3)"
    },
    {
      number: 10,
      kr_name: "지파이 하바네로",
      en_name: "Zipai Habanero",
      info: "바삭한 외피와 부드럽고 촉촉한 가슴살을 즐길 수 있는 대형 사이즈 디저트",
      url: "../images/dessert11.png",
      price: 5500,
      allergy: "달걀, 밀, 대두, 닭고기",
      gram: 160,
      kcal: 425,
      protein: "28(51)",
      sodium: "810(41)",
      sugar: "1g 미만",
      saturatedFat: "2.8(18)"
    },
    {
      number: 11,
      kr_name: "지파이 고소한맛",
      en_name: "Zipai Sophisticated Taste",
      info: "바삭한 외피와 부드럽고 촉촉한 가슴살을 즐길 수 있는 대형 사이즈 디저트",
      url: "../images/dessert12.png",
      price: 4500,
      allergy: "달걀, 밀, 대두, 닭고기, 땅콩",
      gram: 128,
      kcal: 397,
      protein: "18(34)",
      sodium: "620(31)",
      sugar: "1g 미만",
      saturatedFat: "6(43)"
    },
    {
      number: 12,
      kr_name: "코울슬로",
      en_name: "Coleslaw",
      info: "아삭한 양상추와 상큼한 드레싱이 조화로운 간편 샐러드",
      url: "../images/dessert13.png",
      price: 1900,
      allergy: "대두, 달걀, 우유",
      gram: 100,
      kcal: 112,
      protein: "1g 미만",
      sodium: "130(7)",
      sugar: 12,
      saturatedFat: "1(7)"
    },
  ],
  chicken: [
    {
      number: 100,
      kr_name: "화이어윙",
      en_name: "Fire Wing",
      info: "담백한 맛과 매콤한 맛이 잘 조화된 특별한 타입의 치킨",
      url: "../images/chicken01.png",
      price: 3200,
      allergy: "닭고기, 밀, 대두, 땅콩, 달걀",
      gram: 85,
      kcal: 178,
      protein: "9(16)",
      sodium: "270(14)",
      sugar: 0,
      saturatedFat: "2.5(17)"
    },
    {
      number: 101,
      kr_name: "치킨휠레",
      en_name: "Chicken fillet",
      info: "담백한 안심살의 Chicken fillet와 롯데리아만의 독특한 소스가 어우러진 디저트 메뉴",
      url: "../images/chicken02.png",
      price: 3100,
      allergy: "치킨휠레 : 달걀, 밀, 대두, 우유, 닭고기, 새우, 땅콩, 조개류(굴) / 스위트앤샤워 : 대두, 밀, 조개류(굴) / 허니머스타드 : 달걀, 대두",
      gram: "",
      kcal: "203 ~ 208",
      protein: "",
      sodium: "",
      sugar: "",
      saturatedFat: ""
    },
    {
      number: 102,
      kr_name: "치킨 1조각",
      en_name: "1 piece of chicken",
      info: "담백함과 매콤한맛의 후라이드 치킨(부위랜덤)",
      url: "../images/chicken03.png",
      price: 2900,
      allergy: "달걀, 밀, 대두, 닭고기, 땅콩",
      gram: 130,
      kcal: 272,
      protein: "18(33)",
      sodium: "694(35)",
      sugar: 2,
      saturatedFat: "4.1(27)"
    },
    {
      number: 103,
      kr_name: "순살치킨 하프팩(11조각)",
      en_name: "Half pack of boneless chicken (11 pieces)",
      info: "바삭한 외피와 육즙 가득한 닭다리살 *순살치킨 11조각 + 소스1개",
      url: "../images/chicken04.png",
      price: 10500,
      allergy: "순살치킨 밀, 대두, 달걀, 쇠고기, 닭고기 / NEW 데리야끼소스 우유, 대두, 밀, 닭고기, 쇠고기 / NEW머스타드소스 달걀, 대두 / 크리미마늘소스 달걀, 대두 / 크리미양념소스 ; 달걀, 대두, 토마토",
      gram: "",
      kcal: "736 ~ 799",
      protein: "",
      sodium: "",
      sugar: "",
      saturatedFat: ""
    },
    {
      number: 104,
      kr_name: "순살치킨 풀팩(22조각)",
      en_name: "Boneless Chicken Full Pack (22 Pieces)",
      info: "바삭한 외피와 육즙 가득한 닭다리살 *순살치킨 22조각 + 소스2개",
      url: "../images/chicken05.png",
      price: 17500,
      allergy: "순살치킨 : 밀, 대두, 달걀, 쇠고기, 닭고기 / NEW 데리야끼소스 : 우유, 대두, 밀, 닭고기, 쇠고기 / NEW머스타드소스 : 달걀, 대두 / 크리미마늘소스 : 달걀, 대두 / 크리미양념소스 ; 달걀, 대두, 토",
      gram: "",
      kcal: "1,472 ~ 1,599",
      protein: "",
      sodium: "",
      sugar: "",
      saturatedFat: ""
    },
    {
      number: 105,
      kr_name: "치킨다리 하프팩(4조각)",
      en_name: "Chicken Leg Half Pack (4 Pieces)",
      info: "한국인이 좋아하는 치킨다리로만 구성되어있는 후라이드 치킨 치킨다리 하프팩 : 총 849kcal ~ 983kcal, 선택 디저트, 소스에 따라 상이",
      url: "../images/chicken06.png",
      price: 10900,
      allergy: "닭고기, 밀, 대두, 땅콩, 달걀, 우유, 토마토, 조개류(굴)",
      gram: "",
      kcal: "849 ~ 983",
      protein: "",
      sodium: "",
      sugar: "",
      saturatedFat: ""
    },
  ],
  drink: [
    {
      number: 200,
      kr_name: "콜라",
      en_name: "Cola",
      info: "톡 쏘는 시원 상쾌한 펩시콜라",
      url: "../images/drink01.png",
      price: 2000,
      allergy: "",
      gram: 420,
      kcal: 127,
      protein: 0,
      sodium: "15(2)",
      sugar: 31,
      saturatedFat: 0
    },
    {
      number: 201,
      kr_name: "사이다",
      en_name: "Cider",
      info: "톡 쏘는 시원 청량한 칠성사이다",
      url: "../images/drink02.png",
      price: 2000,
      allergy: "",
      gram: 420,
      kcal: 133,
      protein: "0(1)",
      sodium: "7(0)",
      sugar: 31,
      saturatedFat: 0
    },
    {
      number: 202,
      kr_name: "제로슈거콜라",
      en_name: "Zero Sugar Cola",
      info: "칼로리 걱정 없는 시원 상쾌한 제로 슈거 콜라",
      url: "../images/drink03.png",
      price: 2000,
      allergy: "",
      gram: 420,
      kcal: 0,
      protein: 0,
      sodium: "56(3)",
      sugar: 0,
      saturatedFat: 0
    },
    {
      number: 203,
      kr_name: "아이스티",
      en_name: "Ice Tea",
      info: "달콤한 복숭아 맛의 시원한 아이스 드링크",
      url: "../images/drink04.png",
      price: 2300,
      allergy: "복숭아",
      gram: 400,
      kcal: 160,
      protein: 0,
      sodium: "0",
      sugar: 39,
      saturatedFat: 0
    },
    {
      number: 204,
      kr_name: "레몬에이드",
      en_name: "Lemonade",
      info: "상큼한 레몬 맛과 톡 쏘는 탄산의 청량함이 느껴지는 시원한 아이스 드링크",
      url: "../images/drink05.png",
      price: 2700,
      allergy: "대두",
      gram: 400,
      kcal: 151,
      protein: 0,
      sodium: "20(1)",
      sugar: 34,
      saturatedFat: 0,
    },
    {
      number: 205,
      kr_name: "아메리카노",
      en_name: "Americano",
      info: "부드럽고 마일드한 바디감을 느낄 수 있는 롯데리아만의 HOT 아메리카노 ",
      url: "../images/drink06.png",
      price: 2500,
      allergy: "",
      gram: 290,
      kcal: 8,
      protein: "0(1)",
      sodium: 0,
      sugar: 39,
      saturatedFat: 0,
      caffeine: 73,
    },
    {
      number: 206,
      kr_name: "아이스 아메리카노",
      en_name: "Ice Americano",
      info: "부드럽고 마일드한 바디감을 느낄 수 있는 롯데리아만의 ICE 아메리카노",
      url: "../images/drink07.png",
      price: 2500,
      allergy: "우유",
      gram: 340,
      kcal: 5,
      protein: "0(1)",
      sodium: 0,
      sugar: 39,
      saturatedFat: "0(3)",
      caffeine: 52,
    },
    {
      number: 207,
      kr_name: "카페라떼(살균우유)",
      en_name: "Caffe Latte (Pasteurized Milk)",
      info: "마일드한 바디감의 에스프레소와  고소한 우유가 조화로운 HOT 카페라떼",
      url: "../images/drink08.png",
      price: 3300,
      allergy: "",
      gram: 300,
      kcal: 145,
      protein: "7(13)",
      sodium: "80(4)",
      sugar: 7,
      saturatedFat: "4.5(30)",
      caffeine: 44,
    },
    {
      number: 208,
      kr_name: "아이스카페라떼(살균우유)",
      en_name: "Ice Cafe Latte (Pasteurized Milk)",
      info: "마일드한 바디감의 에스프레소와 고소한 우유가 조화로운 ICE 카페라떼",
      url: "../images/drink09.png",
      price: 3300,
      allergy: "우유",
      gram: 325,
      kcal: 60,
      protein: "3(6)",
      sodium: "30(2)",
      sugar: 2,
      saturatedFat: "1.7(50)",
      caffeine: 50,
    },
    {
      number: 209,
      kr_name: "오렌지주스(PET)",
      en_name: "Orange juice (PET)",
      info: "갓 짜낸 오렌지의 상큼함을 담은 100% 오렌지주스",
      url: "../images/drink10.png",
      price: 2500,
      allergy: "",
      gram: 400,
      kcal: 175,
      protein: "2(4)",
      sodium: "25(1)",
      sugar: 41,
      saturatedFat: 0
    },
    {
      number: 210,
      kr_name: "핫초코",
      en_name: "Hot Chocolate",
      info: "달콤한 초코를 따뜻하게 즐길 수 있는 음료",
      url: "../images/drink11.png",
      price: 2500,
      allergy: "",
      gram: 215,
      kcal: 142,
      protein: "2(3)",
      sodium: "88(4)",
      sugar: 17,
      saturatedFat: 4
    },
  ],
  iceshot: [
    {
      number: 300,
      kr_name: "팥빙수(보냉백 포함)",
      en_name: "Patbingsu (with cooler bag)",
      info: "달콤한팥과 상큼한 후르츠칵테일이 풍성하게 토핑된 롯데리아 스타일 팥빙수",
      url: "../images/iceshot01.png",
      price: 6400,
      allergy: "우유",
      gram: 511,
      kcal: 605,
      protein: "10(17)",
      sodium: "150(8)",
      sugar: 99,
      saturatedFat: "3.1(21)"
    },
    {
      number: 301,
      kr_name: "팥빙수",
      en_name: "Patbingsu",
      info: "달콤한팥과 상큼한 후르츠칵테일이 풍성하게 토핑된 롯데리아 스타일 팥빙수",
      url: "../images/iceshot02.png",
      price: 5900,
      allergy: "우유",
      gram: 511,
      kcal: 605,
      protein: "10(17)",
      sodium: "150(8)",
      sugar: 99,
      saturatedFat: "3.1(21)"
    },
    {
      number: 302,
      kr_name: "토네이도 요거트맛 초코쿠키",
      en_name: "Tornado Yogurt Choco Cookies",
      info: "크런치한 쿠키와 상큼한 요거트 아이스크림",
      url: "../images/iceshot03.png",
      price: 3400,
      allergy: "우유, 밀, 대두",
      gram: 185,
      kcal: 326,
      protein: "5(9)",
      sodium: "160(8)",
      sugar: 35,
      saturatedFat: "7(47)"
    },
    {
      number: 303,
      kr_name: "토네이도 요거트맛 망고젤리",
      en_name: "Tornado Yogurt Mango Jelly",
      info: "쫄깃한 곤약젤리와 상큼한 망고 요거트 아이스크림",
      url: "../images/iceshot04.png",
      price: 3400,
      allergy: "우유",
      gram: 200,
      kcal: 326,
      protein: "4(7)",
      sodium: "80(4)",
      sugar: 43,
      saturatedFat: "6(40)"
    },
    {
      number: 304,
      kr_name: "토네이도 요거트맛 스트로베리",
      en_name: "Tornado Yogurt Strawberry",
      info: "달콤한 딸기와 상큼한 요거트 아이스크림",
      url: "../images/iceshot05.png",
      price: 3400,
      allergy: "우유",
      gram: 187,
      kcal: 290,
      protein: "4(7)",
      sodium: "70(4)",
      sugar: 38,
      saturatedFat: "6(40)"
    },
    {
      number: 305,
      kr_name: "토네이도 망고젤리",
      en_name: "Tornado Mango Jelly",
      info: "쫄깃한 곤약젤리가 들어있는 달콤 상큼한 망고아이스크림",
      url: "../images/iceshot06.png",
      price: 3200,
      allergy: "우유",
      gram: 190,
      kcal: 294,
      protein: "4(7)",
      sodium: "80(4)",
      sugar: 42,
      saturatedFat: "6(40)"
    },
    {
      number: 306,
      kr_name: "토네이도 초코쿠키",
      en_name: "Tornado Choco Cookie",
      info: "부드러운 아이스크림에 달콤한 초코쿠키를 넣어 만든 아이스크림",
      url: "../images/iceshot07.png",
      price: 3200,
      allergy: "밀, 대두, 우유",
      gram: 175,
      kcal: 314,
      protein: "5(9)",
      sodium: "160(8)",
      sugar: 34,
      saturatedFat: "7(47)"
    },
    {
      number: 307,
      kr_name: "토네이도 스트로베리",
      en_name: "Tornado Strawberry",
      info: "부드러운 아이스크림에 바삭한 딸기 후레이크와 새콤달콤한 딸기잼을 넣어 만든 아이스크림",
      url: "../images/iceshot08.png",
      price: 3200,
      allergy: "우유",
      gram: 177,
      kcal: 278,
      protein: "4(7)",
      sodium: "65(3)",
      sugar: 37,
      saturatedFat: "6(40)"
    },
    {
      number: 308,
      kr_name: "토네이도 더블초코",
      en_name: "Tornado Double Chogo",
      info: "달콤한 초콜렛시럽과 바삭한 초코쿠키가 조화로운 아이스크림",
      url: "../images/iceshot09.png",
      price: 3200,
      allergy: "밀, 대두, 우유",
      gram: 190,
      kcal: 353,
      protein: "5(9)",
      sodium: "170(9)",
      sugar: 41,
      saturatedFat: "7(47)"
    },
    {
      number: 309,
      kr_name: "선데아이스크림 플레인",
      en_name: "Sunday Ice Cream Plain",
      info: "본연의 맛에 충실한 부드럽고 깔끔한 소프트 아이스크림",
      url: "../images/iceshot10.png",
      price: 2100,
      allergy: "우유",
      gram: 150,
      kcal: 227,
      protein: "4(6)",
      sodium: "60(3)",
      sugar: 28,
      saturatedFat: "6(40)"
    },
    {
      number: 310,
      kr_name: "선데아이스크림 스트로베리",
      en_name: "Sunday Ice Strawberry",
      info: "부드러운 아이스크림에 진한 천연과일 소스를 얹어 향긋한 과일의 맛과 향을 더불어 즐길수있는 과일 아이스크림",
      url: "../images/iceshot11.png",
      price: 2300,
      allergy: "우유",
      gram: 165,
      kcal: 255,
      protein: "4(6)",
      sodium: "60(3)",
      sugar: 35,
      saturatedFat: "6(40)"
    },
    {
      number: 311,
      kr_name: "선데아이스크림 허쉬초코",
      en_name: "Sunday Ice Hershey's Choco",
      info: "허쉬의 진하고 부드러운 초코맛이 특징인 아이스크림",
      url: "../images/iceshot12.png",
      price: 2300,
      allergy: "우유",
      gram: 170,
      kcal: 278,
      protein: "4(7)",
      sodium: "70(4)",
      sugar: 38,
      saturatedFat: "6(40)"
    },
    {
      number: 312,
      kr_name: "소프트콘",
      en_name: "Soft Cone",
      info: "부드러운 맛과 시원한 소프트 타입의 아이스콘 제품",
      url: "../images/iceshot13.png",
      price: 1300,
      allergy: "우유, 밀, 대두",
      gram: 90,
      kcal: 148,
      protein: "3(5)",
      sodium: "45(2)",
      sugar: 16,
      saturatedFat: "3.2(21)"
    },
  ],
  burger: [
    {
      number: 400,
      kr_name: "크랩얼라이브 버거(매운맛)",
      en_name: "Crab Alive Burger (Spicy)",
      info: "크랩 한마리가 통째로 이색적인 외관의 씨푸드버거",
      url: "../images/burger01.png",
      price: 9900,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기, 닭고기, 토마토, 새우, 오징어, 게",
      gram: 205,
      kcal: 481,
      protein: "18(32)",
      sodium: "800(40)",
      sugar: 11,
      saturatedFat: "4.2(28)"
    },
    {
      number: 401,
      kr_name: "크랩얼라이브 버거(블랙페퍼맛)",
      en_name: "Crab Alive Burger (Black Pepper)",
      info: "크랩 한마리가 통째로 이색적인 외관의 씨푸드버거",
      url: "../images/burger02.png",
      price: 9900,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기, 새우, 오징어, 게",
      gram: 205,
      kcal: 498,
      protein: "18(32)",
      sodium: "890(45)",
      sugar: 11,
      saturatedFat: "4.5(30)"
    },
    {
      number: 402,
      kr_name: "나폴리맛피아 모짜렐라버거(토마토 바질)",
      en_name: "Napolimia Mozzarella Burger (Tomato Basil)",
      info: "바질의 신선함을 담은 바질마요소스에 풍부하고 진한 토마토소스로 맛을 낸 스페셜 모짜렐라버거",
      url: "../images/burger03.png",
      price: 9100,
      allergy: "우유, 밀, 대두, 달걀, 토마토, 닭고기, 쇠고기",
      gram: 240,
      kcal: 737,
      protein: "27(50)",
      sodium: "1110(56)",
      sugar: 10,
      saturatedFat: "18(120)"
    },
    {
      number: 403,
      kr_name: "나폴리맛피아 모짜렐라버거(발사믹 바질)",
      en_name: "Napolimia Mozzarella Burger (Balsamic Basil)",
      info: "레드와인 발사믹의 산뜻함을 더한 스페셜 모짜렐라버거",
      url: "../images/burger04.png",
      price: 9100,
      allergy: "우유, 밀, 대두, 달걀, 토마토, 어황산류, 쇠고기",
      gram: 250,
      kcal: 737,
      protein: "27(49)",
      sodium: "1060(53)",
      sugar: 10,
      saturatedFat: "18(120)"
    },
    {
      number: 404,
      kr_name: "전주 비빔라이스 버거",
      en_name: "Jeonju Bibim Rice Burger",
      info: "전주비빔밥을 담은 라이스번과 노른자가 터지는 반숙란, 달콤한 고추장 소스가 어우러진 라이스 버거",
      url: "../images/burger05.png",
      price: 7300,
      allergy: "달걀, 밀, 대두, 쇠고기",
      gram: 285,
      kcal: 572,
      protein: "17(31)",
      sodium: "1460(73)",
      sugar: 8,
      saturatedFat: "8(53)"
    },
    {
      number: 405,
      kr_name: "리아 새우 베이컨",
      en_name: "Lia Shrimp Bacon",
      info: "베이컨+토마토로 풍성한 새우버거 업그레이드 한정판",
      url: "../images/burger06.png",
      price: 6100,
      allergy: "달걀, 밀, 대두, 우유, 토마토, 돼지고기, 새우",
      gram: 211,
      kcal: 538,
      protein: "17(31)",
      sodium: "870(44)",
      sugar: 7,
      saturatedFat: "6(40)"
    },
    {
      number: 406,
      kr_name: "리아 불고기 베이컨",
      en_name: "Lia Bulgogi Bacon",
      info: "베이컨+토마토로 풍성한 불고기버거 업그레이드 한정판",
      url: "../images/burger07.png",
      price: 6100,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기, 닭고기, 토마토, 돼지고기",
      gram: 220,
      kcal: 522,
      protein: "22(40)",
      sodium: "840(42)",
      sugar: 11,
      saturatedFat: "9(60)"
    },
    {
      number: 407,
      kr_name: "더블 한우불고기버거",
      en_name: "Double Korean Beef Bulgogi Burger",
      info: "국내산 한우 패티 2장으로 육즙 가득한 프리미엄 버거",
      url: "../images/burger08.png",
      price: 13000,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기, 토마토",
      gram: 352,
      kcal: 802,
      protein: "39(72)",
      sodium: "1150(58)",
      sugar: 18,
      saturatedFat: "20(133)"
    },
    {
      number: 408,
      kr_name: "한우불고기버거",
      en_name: "Korean Beef Bulgogi Burger",
      info: "브리오쉬번에 한우 패티와 신선한 야채, 특제소스로 완성된 프리미엄 버거",
      url: "../images/burger09.png",
      price: 9000,
      allergy: "밀, 대두, 달걀, 우유, 토마토, 쇠고기",
      gram: 263,
      kcal: 572,
      protein: "24(43)",
      sodium: "800(40)",
      sugar: 15,
      saturatedFat: "12(80)"
    },
    {
      number: 409,
      kr_name: "더블 클래식치즈버거(버터번)",
      en_name: "Double Classic Cheeseburger (Butter Bun)",
      info: "패티 2장과 버터번이 조화로운 더블 클래식 치즈버거",
      url: "../images/burger10.png",
      price: 7200,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기",
      gram: 213,
      kcal: 731,
      protein: "25(45)",
      sodium: "1110(56)",
      sugar: 6,
      saturatedFat: "25.0(167)"
    },
    {
      number: 410,
      kr_name: "더블 치킨버거",
      en_name: "Double Chicken Burger",
      info: "패티 2장이 조화로운 더블 치킨버거",
      url: "../images/burger11.png",
      price: 5800,
      allergy: "달걀, 밀, 대두, 우유, 닭고기, 땅콩, 조개류(가리비)",
      gram: 205,
      kcal: 478,
      protein: "24(44)",
      sodium: "950(48)",
      sugar: 11,
      saturatedFat: "5.0(33)"
    },
    {
      number: 411,
      kr_name: "더블 데리버거",
      en_name: "Double Deli Burger",
      info: "두 장의 패티로 든든한 더블 버거 시리즈",
      url: "../images/burger12.png",
      price: 5000,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기, 닭고기, 조개류(가리비)",
      gram: 170,
      kcal: 446,
      protein: "19(34)",
      sodium: "740(37)",
      sugar: 10,
      saturatedFat: "7(47)"
    },
    {
      number: 412,
      kr_name: "리아 불고기 더블(빅불)",
      en_name: "Lia Bulgogi Double (Big Bul)",
      info: "불고기 소스와 쇠고기 맛을 배로 느끼는 제품",
      url: "../images/burger13.png",
      price: 7600,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기, 닭고기, 토마토, 돼지고기",
      gram: 270,
      kcal: 761,
      protein: "36(66)",
      sodium: "1370(69)",
      sugar: 12,
      saturatedFat: "16(107)"
    },
    {
      number: 413,
      kr_name: "리아 불고기",
      en_name: "Lia Bulgogi",
      info: "두툼한 쇠고기 패티와 한국적 소스가 조화된 대표 버거",
      url: "../images/burger14.png",
      price: 5000,
      allergy: "밀, 대두, 달걀, 우유, 쇠고기,토마토,돼지고기,닭고기",
      gram: 188,
      kcal: 476,
      protein: "20(36)",
      sodium: "780(39)",
      sugar: 10,
      saturatedFat: "7(48)"
    },
    {
      number: 414,
      kr_name: "모짜렐라 인 더 버거 베이컨",
      en_name: "Mozzarella In The Burger Bacon",
      info: "모짜렐라 치즈와 베이컨이 풍부한 맛을 내는 버거",
      url: "../images/burger15.png",
      price: 8000,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기, 돼지고기",
      gram: 223,
      kcal: 699,
      protein: "30(55)",
      sodium: "1020(51)",
      sugar: 6,
      saturatedFat: "16.0(107)"
    },
    {
      number: 415,
      kr_name: "더블엑스투버거",
      en_name: "Double X2 Burger",
      info: "비프패티 2장, 치즈 2장으로 깊고 풍부한 맛의 아메리칸 버거",
      url: "../images/burger16.png",
      price: 7200,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기, 토마토",
      gram: 228,
      kcal: 716,
      protein: "25(46)",
      sodium: "1070(54)",
      sugar: 7,
      saturatedFat: "25(167)"
    },
    {
      number: 416,
      kr_name: "리아 사각새우 더블",
      en_name: "Lia Square Shrimp Double",
      info: "미니 새우패티 2장의 새우 매니아용 버거",
      url: "../images/burger17.png",
      price: 6100,
      allergy: "밀, 대두, 달걀, 우유, 토마토, 새우",
      gram: 208,
      kcal: 556,
      protein: "17(32)",
      sodium: "960(48)",
      sugar: 7,
      saturatedFat: "5.0(33)"
    },
    {
      number: 417,
      kr_name: "리아 새우",
      en_name: "Lia Shrimp Burger",
      info: "새우살을 가득 넣은 오리지널 새우버거",
      url: "../images/burger18.png",
      price: 5000,
      allergy: "밀, 대두, 달걀, 우유, 토마토, 새우",
      gram: 179,
      kcal: 492,
      protein: "15(27)",
      sodium: "810(40)",
      sugar: 7,
      saturatedFat: "4.7(31)"
    },
    {
      number: 418,
      kr_name: "미라클버거",
      en_name: "Miracle Burger",
      info: "100% 식물성 패티와 신선한 야채의 대체육 버거",
      url: "../images/burger19.png",
      price: 5700,
      allergy: "밀, 대두, 토마토",
      gram: 181,
      kcal: 352,
      protein: "15(28)",
      sodium: "550(28)",
      sugar: 9,
      saturatedFat: "4.0(27)"
    },
    {
      number: 419,
      kr_name: "더블 미라클버거",
      en_name: "Double Miracle Burger",
      info: "100% 식물성 패티와 신선한 야채의 대체육 더블 버거",
      url: "../images/burger20.png",
      price: 7200,
      allergy: "밀, 대두, 토마토",
      gram: 245,
      kcal: 520,
      protein: "24(45)",
      sodium: "880(44)",
      sugar: 11,
      saturatedFat: "7.0(47)"
    },
    {
      number: 420,
      kr_name: "핫크리스피치킨버거",
      en_name: "Hot Crispy Chicken Burger",
      info: "닭가슴살 패티로 만든 매콤 프리미엄 치킨버거",
      url: "../images/burger21.png",
      price: 6200,
      allergy: "밀, 대두, 달걀, 토마토, 닭고기",
      gram: 190,
      kcal: 503,
      protein: "22(40)",
      sodium: "930(47)",
      sugar: 5,
      saturatedFat: "7(49)"
    },
    {
      number: 421,
      kr_name: "클래식치즈버거(버터번)",
      en_name: "Classic Cheeseburger (Butter Bun)",
      info: "부드러운 치즈와 호주산 쇠고기 패티의 클래식 치즈버거",
      url: "../images/burger22.png",
      price: 5500,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기",
      gram: 146,
      kcal: 492,
      protein: "16(29)",
      sodium: "770(39)",
      sugar: 5,
      saturatedFat: "14(93)"
    },
    {
      number: 422,
      kr_name: "티렉스버거",
      en_name: "T-Rex Burger",
      info: "통닭다리살 패티와 부드러운 크림 소스의 만남",
      url: "../images/burger23.png",
      price: 5000,
      allergy: "밀, 대두, 달걀, 우유, 닭고기, 땅콩",
      gram: 213,
      kcal: 463,
      protein: "26(48)",
      sodium: "830(42)",
      sugar: 7,
      saturatedFat: "5.0(33)"
    },
    {
      number: 423,
      kr_name: "치킨버거",
      en_name: "Chicken Burger",
      info: "닭고기 패티와 데리야끼 소스의 담백 달콤 치킨버거",
      url: "../images/burger24.png",
      price: 4300,
      allergy: "달걀, 밀, 대두, 우유, 닭고기, 땅콩, 조개류(가리비)",
      gram: 141,
      kcal: 355,
      protein: "15(28)",
      sodium: "620(31)",
      sugar: 8,
      saturatedFat: "3.8(25)"
    },
    {
      number: 424,
      kr_name: "데리버거",
      en_name: "Deri Burger",
      info: "쇠고기 패티에 달콤짭짤한 데리야끼 소스의 가성비 버거",
      url: "../images/burger25.png",
      price: 3700,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기, 닭고기, 조개류(가리비)",
      gram: 134,
      kcal: 348,
      protein: "12(23)",
      sodium: "590(30)",
      sugar: 10,
      saturatedFat: "4.9(33)"
    },
    {
      number: 425,
      kr_name: "한우연인팩",
      en_name: "Korean Beef Lover Pack",
      info: "한우불고기버거와 새우버거/포테이토/치즈스틱/콜라2잔 구성 2인팩",
      url: "../images/burger26.png",
      price: 16700,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기, 토마토, 새우",
      gram: "",
      kcal: "1508~1774",
      protein: "",
      sodium: "",
      sugar: "",
      saturatedFat: ""
    },
    {
      number: 426,
      kr_name: "한우명품팩",
      en_name: "Korean Beef Premium Pack",
      info: "한우불고기·핫크리스피버거+양념감자+치즈스틱+콜라2잔 구성 2인팩",
      url: "../images/burger27.png",
      price: 18500,
      allergy: "달걀, 밀, 대두, 우유, 쇠고기, 닭고기, 토마토",
      gram: "",
      kcal: "1603~1877",
      protein: "",
      sodium: "",
      sugar: "",
      saturatedFat: ""
    }
  ]
}

let currPage = 0; // 현재 보여주고 있는 페이지
let maxPage; // 마지막 페이지
let viewNumber = 6; // 한번에 보여줄 메뉴 개수
let selectMenuList; // 보여줄 메뉴 리스트
// 보여줄 메뉴 리스트의 자식 
let selectMenuListChild; 
let menuMoreBtn = document.querySelector(".menu-more-btn");

// 메뉴 더보기 버튼 각 카테고리별 하위 카드들
let burgerBtn = document.querySelectorAll(".card-wrap.burger .info-more-btn");
let desertBtn = document.querySelectorAll(".card-wrap.desert .info-more-btn");
let chickenBtn = document.querySelectorAll(".card-wrap.chicken .info-more-btn");
let iceshotBtn = document.querySelectorAll(".card-wrap.iceshot .info-more-btn");
let drinkBtn = document.querySelectorAll(".card-wrap.drink .info-more-btn");
// 클릭하면 그에 맞는 창으로 이동
burgerBtn.forEach(btn=>{
  btn.addEventListener("click",()=>{
    window.open("/webRedesign-Lotteria/pages/menu-burger01.html");
  })
})
desertBtn.forEach(btn=>{
  btn.addEventListener("click",()=>{
    window.open("/webRedesign-Lotteria/pages/menu-dessert01.html");
  })
})
chickenBtn.forEach(btn=>{
  btn.addEventListener("click",()=>{
    window.open("/webRedesign-Lotteria/pages/menu-chicken01.html");
  })
})
drinkBtn.forEach(btn=>{
  btn.addEventListener("click",()=>{
    window.open("/webRedesign-Lotteria/pages/menu-drink01.html");
  })
})
iceshotBtn.forEach(btn=>{
  btn.addEventListener("click",()=>{
    window.open("/webRedesign-Lotteria/pages/menu-iceShot01.html");
  })
})

// 메뉴를 보여주는 함수
function show_menu() {
  // 현재 페이지가 마지막 페이지에 도달하면 코드 실행X
  if(currPage >= maxPage) return;
  // 시작 번호 = 현재 페이지 * 6
  startCount = currPage * viewNumber;
  // 마지막 번호 = 시작 메뉴 + 6
  endCount = startCount + viewNumber;
  // 노드리스트를 리스트로 변환 후 특정 부분만 잘라내기
  let sliceList = Array.from(selectMenuListChild).slice(startCount, endCount);
  sliceList.forEach(sliceItem=>{
    sliceItem.classList.add("active");
  })
  // 현재 페이지 1증가
  currPage++;
  menuMoreBtn.textContent = `${currPage} / ${maxPage}`;
}

let infoMoreBtns = document.querySelectorAll(".info-more-btn");
// 페이지가 열릴 때 실행
window.addEventListener('DOMContentLoaded', () => {
  // 전역 변수인 myType에 값을 가져옴
  const value = localStorage.getItem('myType');
  console.log(value);
  if (value !== null) {
    selectMenuList = document.querySelector(`.${value}`);
    // 값이 있으면 그 값을 가지고 있는 menu-wrap켜줌
    selectMenuList.classList.add("active");
    // menu-warp의 자식을 불러오고
    selectMenuListChild = selectMenuList.querySelectorAll(".card");
    // 마지막 페이지 수 = menu-wrap 자식 수 / 한번에 보여줄 메뉴 수
    maxPage = Math.ceil(selectMenuListChild.length / viewNumber);
    console.log(maxPage);
    show_menu();
  }
});

/* footer */
fetch('/webRedesign-Lotteria/include/footer.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.footer-include').innerHTML = data;

    window.onscroll = function () {
      const btn = document.getElementById("topBtn");
      if (btn) {
        btn.style.display = (window.scrollY > 300) ? "flex" : "none";
      }
    };
  });

/* bottom */
fetch('/webRedesign-Lotteria/include/bottom.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.bottom-include').innerHTML = data;
  });