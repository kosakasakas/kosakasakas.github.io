"use strict";
var pokedex = {
  "Abra": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 25,
      "at": 20,
      "df": 15,
      "sp": 90,
      "sa": 105,
      "sd": 55
    },
    "weightkg": 19.5,
    "nfe": true,
    "abilities": {
      "0": "Synchronize"
    },
    "name_jp": "ケーシィ"
  },
  "Aerodactyl": {
    "types": [
      "Rock",
      "Flying"
    ],
    "bs": {
      "hp": 80,
      "at": 105,
      "df": 65,
      "sp": 130,
      "sa": 60,
      "sd": 75
    },
    "weightkg": 59,
    "abilities": {
      "0": "Rock Head"
    },
    "otherFormes": [
      "Aerodactyl-Mega"
    ],
    "name_jp": "プテラ"
  },
  "Alakazam": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 55,
      "at": 50,
      "df": 45,
      "sp": 120,
      "sa": 135,
      "sd": 95
    },
    "weightkg": 48,
    "abilities": {
      "0": "Synchronize"
    },
    "otherFormes": [
      "Alakazam-Mega"
    ],
    "name_jp": "フーディン"
  },
  "Arbok": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 60,
      "at": 95,
      "df": 69,
      "sp": 80,
      "sa": 65,
      "sd": 79
    },
    "weightkg": 65,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "アーボック"
  },
  "Arcanine": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 90,
      "at": 110,
      "df": 80,
      "sp": 95,
      "sa": 100,
      "sd": 80
    },
    "weightkg": 155,
    "abilities": {
      "0": "Intimidate"
    },
    "otherFormes": [
      "Arcanine-Hisui"
    ],
    "name_jp": "ウインディ"
  },
  "Articuno": {
    "types": [
      "Ice",
      "Flying"
    ],
    "bs": {
      "hp": 90,
      "at": 85,
      "df": 100,
      "sp": 85,
      "sa": 95,
      "sd": 125
    },
    "weightkg": 55.4,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "otherFormes": [
      "Articuno-Galar"
    ],
    "name_jp": "フリーザー"
  },
  "Beedrill": {
    "types": [
      "Bug",
      "Poison"
    ],
    "bs": {
      "hp": 65,
      "at": 90,
      "df": 40,
      "sp": 75,
      "sa": 45,
      "sd": 80
    },
    "weightkg": 29.5,
    "abilities": {
      "0": "Swarm"
    },
    "otherFormes": [
      "Beedrill-Mega"
    ],
    "name_jp": "スピアー"
  },
  "Bellsprout": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 50,
      "at": 75,
      "df": 35,
      "sp": 40,
      "sa": 70,
      "sd": 30
    },
    "weightkg": 4,
    "nfe": true,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "マダツボミ"
  },
  "Blastoise": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 79,
      "at": 83,
      "df": 100,
      "sp": 78,
      "sa": 85,
      "sd": 105
    },
    "weightkg": 85.5,
    "abilities": {
      "0": "Torrent"
    },
    "otherFormes": [
      "Blastoise-Gmax",
      "Blastoise-Mega"
    ],
    "name_jp": "カメックス"
  },
  "Bulbasaur": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 45,
      "at": 49,
      "df": 49,
      "sp": 45,
      "sa": 65,
      "sd": 65
    },
    "weightkg": 6.9,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "フシギダネ"
  },
  "Butterfree": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 60,
      "at": 45,
      "df": 50,
      "sp": 70,
      "sa": 90,
      "sd": 80
    },
    "weightkg": 32,
    "abilities": {
      "0": "Compound Eyes"
    },
    "otherFormes": [
      "Butterfree-Gmax"
    ],
    "name_jp": "バタフリー"
  },
  "Caterpie": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 45,
      "at": 30,
      "df": 35,
      "sp": 45,
      "sa": 20,
      "sd": 20
    },
    "weightkg": 2.9,
    "nfe": true,
    "abilities": {
      "0": "Shield Dust"
    },
    "name_jp": "キャタピー"
  },
  "Chansey": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 250,
      "at": 5,
      "df": 5,
      "sp": 50,
      "sa": 35,
      "sd": 105
    },
    "weightkg": 34.6,
    "nfe": true,
    "abilities": {
      "0": "Natural Cure"
    },
    "name_jp": "ラッキー"
  },
  "Charizard": {
    "types": [
      "Fire",
      "Flying"
    ],
    "bs": {
      "hp": 78,
      "at": 84,
      "df": 78,
      "sp": 100,
      "sa": 109,
      "sd": 85
    },
    "weightkg": 90.5,
    "abilities": {
      "0": "Blaze"
    },
    "otherFormes": [
      "Charizard-Gmax",
      "Charizard-Mega-X",
      "Charizard-Mega-Y"
    ],
    "name_jp": "リザードン"
  },
  "Charmander": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 39,
      "at": 52,
      "df": 43,
      "sp": 65,
      "sa": 60,
      "sd": 50
    },
    "weightkg": 8.5,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "ヒトカゲ"
  },
  "Charmeleon": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 58,
      "at": 64,
      "df": 58,
      "sp": 80,
      "sa": 80,
      "sd": 65
    },
    "weightkg": 19,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "リザード"
  },
  "Clefable": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 95,
      "at": 70,
      "df": 73,
      "sp": 60,
      "sa": 95,
      "sd": 90
    },
    "weightkg": 40,
    "abilities": {
      "0": "Cute Charm"
    },
    "name_jp": "ピクシー"
  },
  "Clefairy": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 70,
      "at": 45,
      "df": 48,
      "sp": 35,
      "sa": 60,
      "sd": 65
    },
    "weightkg": 7.5,
    "nfe": true,
    "abilities": {
      "0": "Cute Charm"
    },
    "name_jp": "ピッピ"
  },
  "Cloyster": {
    "types": [
      "Water",
      "Ice"
    ],
    "bs": {
      "hp": 50,
      "at": 95,
      "df": 180,
      "sp": 70,
      "sa": 85,
      "sd": 45
    },
    "weightkg": 132.5,
    "abilities": {
      "0": "Shell Armor"
    },
    "name_jp": "パルシェン"
  },
  "Cubone": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 50,
      "at": 50,
      "df": 95,
      "sp": 35,
      "sa": 40,
      "sd": 50
    },
    "weightkg": 6.5,
    "nfe": true,
    "abilities": {
      "0": "Rock Head"
    },
    "name_jp": "カラカラ"
  },
  "Dewgong": {
    "types": [
      "Water",
      "Ice"
    ],
    "bs": {
      "hp": 90,
      "at": 70,
      "df": 80,
      "sp": 70,
      "sa": 70,
      "sd": 95
    },
    "weightkg": 120,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "ジュゴン"
  },
  "Diglett": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 10,
      "at": 55,
      "df": 25,
      "sp": 95,
      "sa": 35,
      "sd": 45
    },
    "weightkg": 0.8,
    "nfe": true,
    "abilities": {
      "0": "Sand Veil"
    },
    "otherFormes": [
      "Diglett-Alola"
    ],
    "name_jp": "ディグダ"
  },
  "Ditto": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 48,
      "at": 48,
      "df": 48,
      "sp": 48,
      "sa": 48,
      "sd": 48
    },
    "weightkg": 4,
    "gender": "N",
    "abilities": {
      "0": "Limber"
    },
    "name_jp": "メタモン"
  },
  "Dodrio": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 60,
      "at": 110,
      "df": 70,
      "sp": 110,
      "sa": 60,
      "sd": 60
    },
    "weightkg": 85.2,
    "abilities": {
      "0": "Run Away"
    },
    "name_jp": "ドードリオ"
  },
  "Doduo": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 35,
      "at": 85,
      "df": 45,
      "sp": 75,
      "sa": 35,
      "sd": 35
    },
    "weightkg": 39.2,
    "nfe": true,
    "abilities": {
      "0": "Run Away"
    },
    "name_jp": "ドードー"
  },
  "Dragonair": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 61,
      "at": 84,
      "df": 65,
      "sp": 70,
      "sa": 70,
      "sd": 70
    },
    "weightkg": 16.5,
    "nfe": true,
    "abilities": {
      "0": "Shed Skin"
    },
    "name_jp": "ハクリュー"
  },
  "Dragonite": {
    "types": [
      "Dragon",
      "Flying"
    ],
    "bs": {
      "hp": 91,
      "at": 134,
      "df": 95,
      "sp": 80,
      "sa": 100,
      "sd": 100
    },
    "weightkg": 210,
    "abilities": {
      "0": "Inner Focus"
    },
    "name_jp": "カイリュー"
  },
  "Dratini": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 41,
      "at": 64,
      "df": 45,
      "sp": 50,
      "sa": 50,
      "sd": 50
    },
    "weightkg": 3.3,
    "nfe": true,
    "abilities": {
      "0": "Shed Skin"
    },
    "name_jp": "ミニリュウ"
  },
  "Drowzee": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 60,
      "at": 48,
      "df": 45,
      "sp": 42,
      "sa": 43,
      "sd": 90
    },
    "weightkg": 32.4,
    "nfe": true,
    "abilities": {
      "0": "Insomnia"
    },
    "name_jp": "スリープ"
  },
  "Dugtrio": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 35,
      "at": 100,
      "df": 50,
      "sp": 120,
      "sa": 50,
      "sd": 70
    },
    "weightkg": 33.3,
    "abilities": {
      "0": "Sand Veil"
    },
    "otherFormes": [
      "Dugtrio-Alola"
    ],
    "name_jp": "ダグトリオ"
  },
  "Eevee": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 55,
      "at": 55,
      "df": 50,
      "sp": 55,
      "sa": 45,
      "sd": 65
    },
    "weightkg": 6.5,
    "nfe": true,
    "abilities": {
      "0": "Run Away"
    },
    "otherFormes": [
      "Eevee-Gmax"
    ],
    "name_jp": "イーブイ"
  },
  "Ekans": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 35,
      "at": 60,
      "df": 44,
      "sp": 55,
      "sa": 40,
      "sd": 54
    },
    "weightkg": 6.9,
    "nfe": true,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "アーボ"
  },
  "Electabuzz": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 65,
      "at": 83,
      "df": 57,
      "sp": 105,
      "sa": 95,
      "sd": 85
    },
    "weightkg": 30,
    "abilities": {
      "0": "Static"
    },
    "nfe": true,
    "name_jp": "エレブー"
  },
  "Electrode": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 60,
      "at": 50,
      "df": 70,
      "sp": 150,
      "sa": 80,
      "sd": 80
    },
    "weightkg": 66.6,
    "gender": "N",
    "abilities": {
      "0": "Soundproof"
    },
    "otherFormes": [
      "Electrode-Hisui"
    ],
    "name_jp": "マルマイン"
  },
  "Exeggcute": {
    "types": [
      "Grass",
      "Psychic"
    ],
    "bs": {
      "hp": 60,
      "at": 40,
      "df": 80,
      "sp": 40,
      "sa": 60,
      "sd": 45
    },
    "weightkg": 2.5,
    "nfe": true,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "タマタマ"
  },
  "Exeggutor": {
    "types": [
      "Grass",
      "Psychic"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 85,
      "sp": 55,
      "sa": 125,
      "sd": 75
    },
    "weightkg": 120,
    "abilities": {
      "0": "Chlorophyll"
    },
    "otherFormes": [
      "Exeggutor-Alola"
    ],
    "name_jp": "ナッシー"
  },
  "Farfetch’d": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 52,
      "at": 90,
      "df": 55,
      "sp": 60,
      "sa": 58,
      "sd": 62
    },
    "weightkg": 15,
    "abilities": {
      "0": "Keen Eye"
    },
    "otherFormes": [
      "Farfetch’d-Galar"
    ],
    "name_jp": "カモネギ"
  },
  "Fearow": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 65,
      "at": 90,
      "df": 65,
      "sp": 100,
      "sa": 61,
      "sd": 61
    },
    "weightkg": 38,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "オニドリル"
  },
  "Flareon": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 65,
      "at": 130,
      "df": 60,
      "sp": 65,
      "sa": 95,
      "sd": 110
    },
    "weightkg": 25,
    "abilities": {
      "0": "Flash Fire"
    },
    "name_jp": "ブースター"
  },
  "Gastly": {
    "types": [
      "Ghost",
      "Poison"
    ],
    "bs": {
      "hp": 30,
      "at": 35,
      "df": 30,
      "sp": 80,
      "sa": 100,
      "sd": 35
    },
    "weightkg": 0.1,
    "nfe": true,
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "ゴース"
  },
  "Gengar": {
    "types": [
      "Ghost",
      "Poison"
    ],
    "bs": {
      "hp": 60,
      "at": 65,
      "df": 60,
      "sp": 110,
      "sa": 130,
      "sd": 75
    },
    "weightkg": 40.5,
    "abilities": {
      "0": "Cursed Body"
    },
    "otherFormes": [
      "Gengar-Gmax",
      "Gengar-Mega"
    ],
    "name_jp": "ゲンガー"
  },
  "Geodude": {
    "types": [
      "Rock",
      "Ground"
    ],
    "bs": {
      "hp": 40,
      "at": 80,
      "df": 100,
      "sp": 20,
      "sa": 30,
      "sd": 30
    },
    "weightkg": 20,
    "nfe": true,
    "abilities": {
      "0": "Rock Head"
    },
    "otherFormes": [
      "Geodude-Alola"
    ],
    "name_jp": "イシツブテ"
  },
  "Gloom": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 60,
      "at": 65,
      "df": 70,
      "sp": 40,
      "sa": 85,
      "sd": 75
    },
    "weightkg": 8.6,
    "nfe": true,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "クサイハナ"
  },
  "Golbat": {
    "types": [
      "Poison",
      "Flying"
    ],
    "bs": {
      "hp": 75,
      "at": 80,
      "df": 70,
      "sp": 90,
      "sa": 65,
      "sd": 75
    },
    "weightkg": 55,
    "nfe": true,
    "abilities": {
      "0": "Inner Focus"
    },
    "name_jp": "ゴルバット"
  },
  "Goldeen": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 45,
      "at": 67,
      "df": 60,
      "sp": 63,
      "sa": 35,
      "sd": 50
    },
    "weightkg": 15,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "トサキント"
  },
  "Golduck": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 80,
      "at": 82,
      "df": 78,
      "sp": 85,
      "sa": 95,
      "sd": 80
    },
    "weightkg": 76.6,
    "abilities": {
      "0": "Damp"
    },
    "name_jp": "ゴルダック"
  },
  "Golem": {
    "types": [
      "Rock",
      "Ground"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 130,
      "sp": 45,
      "sa": 55,
      "sd": 65
    },
    "weightkg": 300,
    "abilities": {
      "0": "Rock Head"
    },
    "otherFormes": [
      "Golem-Alola"
    ],
    "name_jp": "ゴローニャ"
  },
  "Graveler": {
    "types": [
      "Rock",
      "Ground"
    ],
    "bs": {
      "hp": 55,
      "at": 95,
      "df": 115,
      "sp": 35,
      "sa": 45,
      "sd": 45
    },
    "weightkg": 105,
    "nfe": true,
    "abilities": {
      "0": "Rock Head"
    },
    "otherFormes": [
      "Graveler-Alola"
    ],
    "name_jp": "ゴローン"
  },
  "Grimer": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 80,
      "at": 80,
      "df": 50,
      "sp": 25,
      "sa": 40,
      "sd": 50
    },
    "weightkg": 30,
    "nfe": true,
    "abilities": {
      "0": "Stench"
    },
    "otherFormes": [
      "Grimer-Alola"
    ],
    "name_jp": "ベトベター"
  },
  "Growlithe": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 55,
      "at": 70,
      "df": 45,
      "sp": 60,
      "sa": 70,
      "sd": 50
    },
    "weightkg": 19,
    "nfe": true,
    "abilities": {
      "0": "Intimidate"
    },
    "otherFormes": [
      "Growlithe-Hisui"
    ],
    "name_jp": "ガーディ"
  },
  "Gyarados": {
    "types": [
      "Water",
      "Flying"
    ],
    "bs": {
      "hp": 95,
      "at": 125,
      "df": 79,
      "sp": 81,
      "sa": 60,
      "sd": 100
    },
    "weightkg": 235,
    "abilities": {
      "0": "Intimidate"
    },
    "otherFormes": [
      "Gyarados-Mega"
    ],
    "name_jp": "ギャラドス"
  },
  "Haunter": {
    "types": [
      "Ghost",
      "Poison"
    ],
    "bs": {
      "hp": 45,
      "at": 50,
      "df": 45,
      "sp": 95,
      "sa": 115,
      "sd": 55
    },
    "weightkg": 0.1,
    "nfe": true,
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "ゴースト"
  },
  "Hitmonchan": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 50,
      "at": 105,
      "df": 79,
      "sp": 76,
      "sa": 35,
      "sd": 110
    },
    "weightkg": 50.2,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "エビワラー"
  },
  "Hitmonlee": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 50,
      "at": 120,
      "df": 53,
      "sp": 87,
      "sa": 35,
      "sd": 110
    },
    "weightkg": 49.8,
    "abilities": {
      "0": "Limber"
    },
    "name_jp": "サワムラー"
  },
  "Horsea": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 30,
      "at": 40,
      "df": 70,
      "sp": 60,
      "sa": 70,
      "sd": 25
    },
    "weightkg": 8,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "タッツー"
  },
  "Hypno": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 85,
      "at": 73,
      "df": 70,
      "sp": 67,
      "sa": 73,
      "sd": 115
    },
    "weightkg": 75.6,
    "abilities": {
      "0": "Insomnia"
    },
    "name_jp": "スリーパー"
  },
  "Ivysaur": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 60,
      "at": 62,
      "df": 63,
      "sp": 60,
      "sa": 80,
      "sd": 80
    },
    "weightkg": 13,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "フシギソウ"
  },
  "Jigglypuff": {
    "types": [
      "Normal",
      "Fairy"
    ],
    "bs": {
      "hp": 115,
      "at": 45,
      "df": 20,
      "sp": 20,
      "sa": 45,
      "sd": 25
    },
    "weightkg": 5.5,
    "nfe": true,
    "abilities": {
      "0": "Cute Charm"
    },
    "name_jp": "プリン"
  },
  "Jolteon": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 65,
      "at": 65,
      "df": 60,
      "sp": 130,
      "sa": 110,
      "sd": 95
    },
    "weightkg": 24.5,
    "abilities": {
      "0": "Volt Absorb"
    },
    "name_jp": "サンダース"
  },
  "Jynx": {
    "types": [
      "Ice",
      "Psychic"
    ],
    "bs": {
      "hp": 65,
      "at": 50,
      "df": 35,
      "sp": 95,
      "sa": 115,
      "sd": 95
    },
    "weightkg": 40.6,
    "abilities": {
      "0": "Oblivious"
    },
    "name_jp": "ルージュラ"
  },
  "Kabuto": {
    "types": [
      "Rock",
      "Water"
    ],
    "bs": {
      "hp": 30,
      "at": 80,
      "df": 90,
      "sp": 55,
      "sa": 55,
      "sd": 45
    },
    "weightkg": 11.5,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "カブト"
  },
  "Kabutops": {
    "types": [
      "Rock",
      "Water"
    ],
    "bs": {
      "hp": 60,
      "at": 115,
      "df": 105,
      "sp": 80,
      "sa": 65,
      "sd": 70
    },
    "weightkg": 40.5,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "カブトプス"
  },
  "Kadabra": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 40,
      "at": 35,
      "df": 30,
      "sp": 105,
      "sa": 120,
      "sd": 70
    },
    "weightkg": 56.5,
    "nfe": true,
    "abilities": {
      "0": "Synchronize"
    },
    "name_jp": "ユンゲラー"
  },
  "Kakuna": {
    "types": [
      "Bug",
      "Poison"
    ],
    "bs": {
      "hp": 45,
      "at": 25,
      "df": 50,
      "sp": 35,
      "sa": 25,
      "sd": 25
    },
    "weightkg": 10,
    "nfe": true,
    "abilities": {
      "0": "Shed Skin"
    },
    "name_jp": "コクーン"
  },
  "Kangaskhan": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 105,
      "at": 95,
      "df": 80,
      "sp": 90,
      "sa": 40,
      "sd": 80
    },
    "weightkg": 80,
    "abilities": {
      "0": "Early Bird"
    },
    "otherFormes": [
      "Kangaskhan-Mega"
    ],
    "name_jp": "ガルーラ"
  },
  "Kingler": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 55,
      "at": 130,
      "df": 115,
      "sp": 75,
      "sa": 50,
      "sd": 50
    },
    "weightkg": 60,
    "abilities": {
      "0": "Hyper Cutter"
    },
    "otherFormes": [
      "Kingler-Gmax"
    ],
    "name_jp": "キングラー"
  },
  "Koffing": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 40,
      "at": 65,
      "df": 95,
      "sp": 35,
      "sa": 60,
      "sd": 45
    },
    "weightkg": 1,
    "nfe": true,
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "ドガース"
  },
  "Krabby": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 30,
      "at": 105,
      "df": 90,
      "sp": 50,
      "sa": 25,
      "sd": 25
    },
    "weightkg": 6.5,
    "nfe": true,
    "abilities": {
      "0": "Hyper Cutter"
    },
    "name_jp": "クラブ"
  },
  "Lapras": {
    "types": [
      "Water",
      "Ice"
    ],
    "bs": {
      "hp": 130,
      "at": 85,
      "df": 80,
      "sp": 60,
      "sa": 85,
      "sd": 95
    },
    "weightkg": 220,
    "abilities": {
      "0": "Water Absorb"
    },
    "otherFormes": [
      "Lapras-Gmax"
    ],
    "name_jp": "ラプラス"
  },
  "Lickitung": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 90,
      "at": 55,
      "df": 75,
      "sp": 30,
      "sa": 60,
      "sd": 75
    },
    "weightkg": 65.5,
    "abilities": {
      "0": "Own Tempo"
    },
    "nfe": true,
    "name_jp": "ベロリンガ"
  },
  "Machamp": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 90,
      "at": 130,
      "df": 80,
      "sp": 55,
      "sa": 65,
      "sd": 85
    },
    "weightkg": 130,
    "abilities": {
      "0": "Guts"
    },
    "otherFormes": [
      "Machamp-Gmax"
    ],
    "name_jp": "カイリキー"
  },
  "Machoke": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 80,
      "at": 100,
      "df": 70,
      "sp": 45,
      "sa": 50,
      "sd": 60
    },
    "weightkg": 70.5,
    "nfe": true,
    "abilities": {
      "0": "Guts"
    },
    "name_jp": "ゴーリキー"
  },
  "Machop": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 70,
      "at": 80,
      "df": 50,
      "sp": 35,
      "sa": 35,
      "sd": 35
    },
    "weightkg": 19.5,
    "nfe": true,
    "abilities": {
      "0": "Guts"
    },
    "name_jp": "ワンリキー"
  },
  "Magikarp": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 20,
      "at": 10,
      "df": 55,
      "sp": 80,
      "sa": 15,
      "sd": 20
    },
    "weightkg": 10,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "コイキング"
  },
  "Magmar": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 65,
      "at": 95,
      "df": 57,
      "sp": 93,
      "sa": 100,
      "sd": 85
    },
    "weightkg": 44.5,
    "abilities": {
      "0": "Flame Body"
    },
    "nfe": true,
    "name_jp": "ブーバー"
  },
  "Magnemite": {
    "types": [
      "Electric",
      "Steel"
    ],
    "bs": {
      "hp": 25,
      "at": 35,
      "df": 70,
      "sp": 45,
      "sa": 95,
      "sd": 55
    },
    "weightkg": 6,
    "nfe": true,
    "gender": "N",
    "abilities": {
      "0": "Magnet Pull"
    },
    "name_jp": "コイル"
  },
  "Magneton": {
    "types": [
      "Electric",
      "Steel"
    ],
    "bs": {
      "hp": 50,
      "at": 60,
      "df": 95,
      "sp": 70,
      "sa": 120,
      "sd": 70
    },
    "weightkg": 60,
    "gender": "N",
    "abilities": {
      "0": "Magnet Pull"
    },
    "nfe": true,
    "name_jp": "レアコイル"
  },
  "Mankey": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 40,
      "at": 80,
      "df": 35,
      "sp": 70,
      "sa": 35,
      "sd": 45
    },
    "weightkg": 28,
    "nfe": true,
    "abilities": {
      "0": "Vital Spirit"
    },
    "name_jp": "マンキー"
  },
  "Marowak": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 60,
      "at": 80,
      "df": 110,
      "sp": 45,
      "sa": 50,
      "sd": 80
    },
    "weightkg": 45,
    "abilities": {
      "0": "Rock Head"
    },
    "otherFormes": [
      "Marowak-Alola",
      "Marowak-Alola-Totem"
    ],
    "name_jp": "ガラガラ"
  },
  "Meowth": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 40,
      "at": 45,
      "df": 35,
      "sp": 90,
      "sa": 40,
      "sd": 40
    },
    "weightkg": 4.2,
    "nfe": true,
    "abilities": {
      "0": "Pickup"
    },
    "otherFormes": [
      "Meowth-Alola",
      "Meowth-Galar",
      "Meowth-Gmax"
    ],
    "name_jp": "ニャース"
  },
  "Metapod": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 50,
      "at": 20,
      "df": 55,
      "sp": 30,
      "sa": 25,
      "sd": 25
    },
    "weightkg": 9.9,
    "nfe": true,
    "abilities": {
      "0": "Shed Skin"
    },
    "name_jp": "トランセル"
  },
  "Mew": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 100,
      "at": 100,
      "df": 100,
      "sp": 100,
      "sa": 100,
      "sd": 100
    },
    "weightkg": 4,
    "gender": "N",
    "abilities": {
      "0": "Synchronize"
    },
    "name_jp": "ミュウ"
  },
  "Mewtwo": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 106,
      "at": 110,
      "df": 90,
      "sp": 130,
      "sa": 154,
      "sd": 90
    },
    "weightkg": 122,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "otherFormes": [
      "Mewtwo-Mega-X",
      "Mewtwo-Mega-Y"
    ],
    "name_jp": "ミュウツー"
  },
  "Moltres": {
    "types": [
      "Fire",
      "Flying"
    ],
    "bs": {
      "hp": 90,
      "at": 100,
      "df": 90,
      "sp": 90,
      "sa": 125,
      "sd": 85
    },
    "weightkg": 60,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "otherFormes": [
      "Moltres-Galar"
    ],
    "name_jp": "ファイヤー"
  },
  "Mr. Mime": {
    "types": [
      "Psychic",
      "Fairy"
    ],
    "bs": {
      "hp": 40,
      "at": 45,
      "df": 65,
      "sp": 90,
      "sa": 100,
      "sd": 120
    },
    "weightkg": 54.5,
    "abilities": {
      "0": "Soundproof"
    },
    "otherFormes": [
      "Mr. Mime-Galar"
    ],
    "name_jp": "バリヤード"
  },
  "Muk": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 105,
      "at": 105,
      "df": 75,
      "sp": 50,
      "sa": 65,
      "sd": 100
    },
    "weightkg": 30,
    "abilities": {
      "0": "Stench"
    },
    "otherFormes": [
      "Muk-Alola"
    ],
    "name_jp": "ベトベトン"
  },
  "Nidoking": {
    "types": [
      "Poison",
      "Ground"
    ],
    "bs": {
      "hp": 81,
      "at": 102,
      "df": 77,
      "sp": 85,
      "sa": 85,
      "sd": 75
    },
    "weightkg": 62,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "ニドキング"
  },
  "Nidoqueen": {
    "types": [
      "Poison",
      "Ground"
    ],
    "bs": {
      "hp": 90,
      "at": 92,
      "df": 87,
      "sp": 76,
      "sa": 75,
      "sd": 85
    },
    "weightkg": 60,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "ニドクイン"
  },
  "Nidoran-F": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 55,
      "at": 47,
      "df": 52,
      "sp": 41,
      "sa": 40,
      "sd": 40
    },
    "weightkg": 7,
    "nfe": true,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "ニドラン♀"
  },
  "Nidoran-M": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 46,
      "at": 57,
      "df": 40,
      "sp": 50,
      "sa": 40,
      "sd": 40
    },
    "weightkg": 9,
    "nfe": true,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "ニドラン♂"
  },
  "Nidorina": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 70,
      "at": 62,
      "df": 67,
      "sp": 56,
      "sa": 55,
      "sd": 55
    },
    "weightkg": 20,
    "nfe": true,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "ニドリーナ"
  },
  "Nidorino": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 61,
      "at": 72,
      "df": 57,
      "sp": 65,
      "sa": 55,
      "sd": 55
    },
    "weightkg": 19.5,
    "nfe": true,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "ニドリーノ"
  },
  "Ninetales": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 73,
      "at": 76,
      "df": 75,
      "sp": 100,
      "sa": 81,
      "sd": 100
    },
    "weightkg": 19.9,
    "abilities": {
      "0": "Flash Fire"
    },
    "otherFormes": [
      "Ninetales-Alola"
    ],
    "name_jp": "キュウコン"
  },
  "Oddish": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 45,
      "at": 50,
      "df": 55,
      "sp": 30,
      "sa": 75,
      "sd": 65
    },
    "weightkg": 5.4,
    "nfe": true,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "ナゾノクサ"
  },
  "Omanyte": {
    "types": [
      "Rock",
      "Water"
    ],
    "bs": {
      "hp": 35,
      "at": 40,
      "df": 100,
      "sp": 35,
      "sa": 90,
      "sd": 55
    },
    "weightkg": 7.5,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "オムナイト"
  },
  "Omastar": {
    "types": [
      "Rock",
      "Water"
    ],
    "bs": {
      "hp": 70,
      "at": 60,
      "df": 125,
      "sp": 55,
      "sa": 115,
      "sd": 70
    },
    "weightkg": 35,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "オムスター"
  },
  "Onix": {
    "types": [
      "Rock",
      "Ground"
    ],
    "bs": {
      "hp": 35,
      "at": 45,
      "df": 160,
      "sp": 70,
      "sa": 30,
      "sd": 45
    },
    "weightkg": 210,
    "nfe": true,
    "abilities": {
      "0": "Rock Head"
    },
    "name_jp": "イワーク"
  },
  "Paras": {
    "types": [
      "Bug",
      "Grass"
    ],
    "bs": {
      "hp": 35,
      "at": 70,
      "df": 55,
      "sp": 25,
      "sa": 45,
      "sd": 55
    },
    "weightkg": 5.4,
    "nfe": true,
    "abilities": {
      "0": "Effect Spore"
    },
    "name_jp": "パラス"
  },
  "Parasect": {
    "types": [
      "Bug",
      "Grass"
    ],
    "bs": {
      "hp": 60,
      "at": 95,
      "df": 80,
      "sp": 30,
      "sa": 60,
      "sd": 80
    },
    "weightkg": 29.5,
    "abilities": {
      "0": "Effect Spore"
    },
    "name_jp": "パラセクト"
  },
  "Persian": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 65,
      "at": 70,
      "df": 60,
      "sp": 115,
      "sa": 65,
      "sd": 65
    },
    "weightkg": 32,
    "abilities": {
      "0": "Limber"
    },
    "otherFormes": [
      "Persian-Alola"
    ],
    "name_jp": "ペルシアン"
  },
  "Pidgeot": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 83,
      "at": 80,
      "df": 75,
      "sp": 101,
      "sa": 70,
      "sd": 70
    },
    "weightkg": 39.5,
    "abilities": {
      "0": "Keen Eye"
    },
    "otherFormes": [
      "Pidgeot-Mega"
    ],
    "name_jp": "ピジョット"
  },
  "Pidgeotto": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 63,
      "at": 60,
      "df": 55,
      "sp": 71,
      "sa": 50,
      "sd": 50
    },
    "weightkg": 30,
    "nfe": true,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "ピジョン"
  },
  "Pidgey": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 40,
      "at": 45,
      "df": 40,
      "sp": 56,
      "sa": 35,
      "sd": 35
    },
    "weightkg": 1.8,
    "nfe": true,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "ポッポ"
  },
  "Pikachu": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 35,
      "at": 55,
      "df": 40,
      "sp": 90,
      "sa": 50,
      "sd": 50
    },
    "weightkg": 6,
    "nfe": true,
    "abilities": {
      "0": "Static"
    },
    "otherFormes": [
      "Pikachu-Alola",
      "Pikachu-Gmax",
      "Pikachu-Hoenn",
      "Pikachu-Kalos",
      "Pikachu-Original",
      "Pikachu-Partner",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-World"
    ],
    "name_jp": "ピカチュウ"
  },
  "Pinsir": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 65,
      "at": 125,
      "df": 100,
      "sp": 85,
      "sa": 55,
      "sd": 70
    },
    "weightkg": 55,
    "abilities": {
      "0": "Hyper Cutter"
    },
    "otherFormes": [
      "Pinsir-Mega"
    ],
    "name_jp": "カイロス"
  },
  "Poliwag": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 40,
      "at": 50,
      "df": 40,
      "sp": 90,
      "sa": 40,
      "sd": 40
    },
    "weightkg": 12.4,
    "nfe": true,
    "abilities": {
      "0": "Water Absorb"
    },
    "name_jp": "ニョロモ"
  },
  "Poliwhirl": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 65,
      "at": 65,
      "df": 65,
      "sp": 90,
      "sa": 50,
      "sd": 50
    },
    "weightkg": 20,
    "nfe": true,
    "abilities": {
      "0": "Water Absorb"
    },
    "name_jp": "ニョロゾ"
  },
  "Poliwrath": {
    "types": [
      "Water",
      "Fighting"
    ],
    "bs": {
      "hp": 90,
      "at": 95,
      "df": 95,
      "sp": 70,
      "sa": 70,
      "sd": 90
    },
    "weightkg": 54,
    "abilities": {
      "0": "Water Absorb"
    },
    "name_jp": "ニョロボン"
  },
  "Ponyta": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 50,
      "at": 85,
      "df": 55,
      "sp": 90,
      "sa": 65,
      "sd": 65
    },
    "weightkg": 30,
    "nfe": true,
    "abilities": {
      "0": "Run Away"
    },
    "otherFormes": [
      "Ponyta-Galar"
    ],
    "name_jp": "ポニータ"
  },
  "Porygon": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 65,
      "at": 60,
      "df": 70,
      "sp": 40,
      "sa": 85,
      "sd": 75
    },
    "weightkg": 36.5,
    "nfe": true,
    "gender": "N",
    "abilities": {
      "0": "Trace"
    },
    "name_jp": "ポリゴン"
  },
  "Primeape": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 65,
      "at": 105,
      "df": 60,
      "sp": 95,
      "sa": 60,
      "sd": 70
    },
    "weightkg": 32,
    "abilities": {
      "0": "Vital Spirit"
    },
    "nfe": true,
    "name_jp": "オコリザル"
  },
  "Psyduck": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 52,
      "df": 48,
      "sp": 55,
      "sa": 65,
      "sd": 50
    },
    "weightkg": 19.6,
    "nfe": true,
    "abilities": {
      "0": "Damp"
    },
    "name_jp": "コダック"
  },
  "Raichu": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 60,
      "at": 90,
      "df": 55,
      "sp": 110,
      "sa": 90,
      "sd": 80
    },
    "weightkg": 30,
    "abilities": {
      "0": "Static"
    },
    "otherFormes": [
      "Raichu-Alola"
    ],
    "name_jp": "ライチュウ"
  },
  "Rapidash": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 65,
      "at": 100,
      "df": 70,
      "sp": 105,
      "sa": 80,
      "sd": 80
    },
    "weightkg": 95,
    "abilities": {
      "0": "Run Away"
    },
    "otherFormes": [
      "Rapidash-Galar"
    ],
    "name_jp": "ギャロップ"
  },
  "Raticate": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 55,
      "at": 81,
      "df": 60,
      "sp": 97,
      "sa": 50,
      "sd": 70
    },
    "weightkg": 18.5,
    "abilities": {
      "0": "Run Away"
    },
    "otherFormes": [
      "Raticate-Alola",
      "Raticate-Alola-Totem"
    ],
    "name_jp": "ラッタ"
  },
  "Rattata": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 30,
      "at": 56,
      "df": 35,
      "sp": 72,
      "sa": 25,
      "sd": 35
    },
    "weightkg": 3.5,
    "nfe": true,
    "abilities": {
      "0": "Run Away"
    },
    "otherFormes": [
      "Rattata-Alola"
    ],
    "name_jp": "コラッタ"
  },
  "Rhydon": {
    "types": [
      "Ground",
      "Rock"
    ],
    "bs": {
      "hp": 105,
      "at": 130,
      "df": 120,
      "sp": 40,
      "sa": 45,
      "sd": 45
    },
    "weightkg": 120,
    "abilities": {
      "0": "Lightning Rod"
    },
    "nfe": true,
    "name_jp": "サイドン"
  },
  "Rhyhorn": {
    "types": [
      "Ground",
      "Rock"
    ],
    "bs": {
      "hp": 80,
      "at": 85,
      "df": 95,
      "sp": 25,
      "sa": 30,
      "sd": 30
    },
    "weightkg": 115,
    "nfe": true,
    "abilities": {
      "0": "Lightning Rod"
    },
    "name_jp": "サイホーン"
  },
  "Sandshrew": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 50,
      "at": 75,
      "df": 85,
      "sp": 40,
      "sa": 20,
      "sd": 30
    },
    "weightkg": 12,
    "nfe": true,
    "abilities": {
      "0": "Sand Veil"
    },
    "otherFormes": [
      "Sandshrew-Alola"
    ],
    "name_jp": "サンド"
  },
  "Sandslash": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 75,
      "at": 100,
      "df": 110,
      "sp": 65,
      "sa": 45,
      "sd": 55
    },
    "weightkg": 29.5,
    "abilities": {
      "0": "Sand Veil"
    },
    "otherFormes": [
      "Sandslash-Alola"
    ],
    "name_jp": "サンドパン"
  },
  "Scyther": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 70,
      "at": 110,
      "df": 80,
      "sp": 105,
      "sa": 55,
      "sd": 80
    },
    "weightkg": 56,
    "nfe": true,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "ストライク"
  },
  "Seadra": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 55,
      "at": 65,
      "df": 95,
      "sp": 85,
      "sa": 95,
      "sd": 45
    },
    "weightkg": 25,
    "nfe": true,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "シードラ"
  },
  "Seaking": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 80,
      "at": 92,
      "df": 65,
      "sp": 68,
      "sa": 65,
      "sd": 80
    },
    "weightkg": 39,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "アズマオウ"
  },
  "Seel": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 65,
      "at": 45,
      "df": 55,
      "sp": 45,
      "sa": 45,
      "sd": 70
    },
    "weightkg": 90,
    "nfe": true,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "パウワウ"
  },
  "Shellder": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 30,
      "at": 65,
      "df": 100,
      "sp": 40,
      "sa": 45,
      "sd": 25
    },
    "weightkg": 4,
    "nfe": true,
    "abilities": {
      "0": "Shell Armor"
    },
    "name_jp": "シェルダー"
  },
  "Slowbro": {
    "types": [
      "Water",
      "Psychic"
    ],
    "bs": {
      "hp": 95,
      "at": 75,
      "df": 110,
      "sp": 30,
      "sa": 100,
      "sd": 80
    },
    "weightkg": 78.5,
    "abilities": {
      "0": "Oblivious"
    },
    "otherFormes": [
      "Slowbro-Galar",
      "Slowbro-Mega"
    ],
    "name_jp": "ヤドラン"
  },
  "Slowpoke": {
    "types": [
      "Water",
      "Psychic"
    ],
    "bs": {
      "hp": 90,
      "at": 65,
      "df": 65,
      "sp": 15,
      "sa": 40,
      "sd": 40
    },
    "weightkg": 36,
    "nfe": true,
    "abilities": {
      "0": "Oblivious"
    },
    "otherFormes": [
      "Slowpoke-Galar"
    ],
    "name_jp": "ヤドン"
  },
  "Snorlax": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 160,
      "at": 110,
      "df": 65,
      "sp": 30,
      "sa": 65,
      "sd": 110
    },
    "weightkg": 460,
    "abilities": {
      "0": "Immunity"
    },
    "otherFormes": [
      "Snorlax-Gmax"
    ],
    "name_jp": "カビゴン"
  },
  "Spearow": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 40,
      "at": 60,
      "df": 30,
      "sp": 70,
      "sa": 31,
      "sd": 31
    },
    "weightkg": 2,
    "nfe": true,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "オニスズメ"
  },
  "Squirtle": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 44,
      "at": 48,
      "df": 65,
      "sp": 43,
      "sa": 50,
      "sd": 64
    },
    "weightkg": 9,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "ゼニガメ"
  },
  "Starmie": {
    "types": [
      "Water",
      "Psychic"
    ],
    "bs": {
      "hp": 60,
      "at": 75,
      "df": 85,
      "sp": 115,
      "sa": 100,
      "sd": 85
    },
    "weightkg": 80,
    "gender": "N",
    "abilities": {
      "0": "Illuminate"
    },
    "name_jp": "スターミー"
  },
  "Staryu": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 30,
      "at": 45,
      "df": 55,
      "sp": 85,
      "sa": 70,
      "sd": 55
    },
    "weightkg": 34.5,
    "nfe": true,
    "gender": "N",
    "abilities": {
      "0": "Illuminate"
    },
    "name_jp": "ヒトデマン"
  },
  "Tangela": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 65,
      "at": 55,
      "df": 115,
      "sp": 60,
      "sa": 100,
      "sd": 40
    },
    "weightkg": 35,
    "abilities": {
      "0": "Chlorophyll"
    },
    "nfe": true,
    "name_jp": "モンジャラ"
  },
  "Tauros": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 75,
      "at": 100,
      "df": 95,
      "sp": 110,
      "sa": 40,
      "sd": 70
    },
    "weightkg": 88.4,
    "abilities": {
      "0": "Intimidate"
    },
    "otherFormes": [
      "Tauros-Paldea-Aqua",
      "Tauros-Paldea-Blaze",
      "Tauros-Paldea-Combat"
    ],
    "name_jp": "ケンタロス"
  },
  "Tentacool": {
    "types": [
      "Water",
      "Poison"
    ],
    "bs": {
      "hp": 40,
      "at": 40,
      "df": 35,
      "sp": 70,
      "sa": 50,
      "sd": 100
    },
    "weightkg": 45.5,
    "nfe": true,
    "abilities": {
      "0": "Clear Body"
    },
    "name_jp": "メノクラゲ"
  },
  "Tentacruel": {
    "types": [
      "Water",
      "Poison"
    ],
    "bs": {
      "hp": 80,
      "at": 70,
      "df": 65,
      "sp": 100,
      "sa": 80,
      "sd": 120
    },
    "weightkg": 55,
    "abilities": {
      "0": "Clear Body"
    },
    "name_jp": "ドククラゲ"
  },
  "Vaporeon": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 130,
      "at": 65,
      "df": 60,
      "sp": 65,
      "sa": 110,
      "sd": 95
    },
    "weightkg": 29,
    "abilities": {
      "0": "Water Absorb"
    },
    "name_jp": "シャワーズ"
  },
  "Venomoth": {
    "types": [
      "Bug",
      "Poison"
    ],
    "bs": {
      "hp": 70,
      "at": 65,
      "df": 60,
      "sp": 90,
      "sa": 90,
      "sd": 75
    },
    "weightkg": 12.5,
    "abilities": {
      "0": "Shield Dust"
    },
    "name_jp": "モルフォン"
  },
  "Venonat": {
    "types": [
      "Bug",
      "Poison"
    ],
    "bs": {
      "hp": 60,
      "at": 55,
      "df": 50,
      "sp": 45,
      "sa": 40,
      "sd": 55
    },
    "weightkg": 30,
    "nfe": true,
    "abilities": {
      "0": "Compound Eyes"
    },
    "name_jp": "コンパン"
  },
  "Venusaur": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 80,
      "at": 82,
      "df": 83,
      "sp": 80,
      "sa": 100,
      "sd": 100
    },
    "weightkg": 100,
    "abilities": {
      "0": "Overgrow"
    },
    "otherFormes": [
      "Venusaur-Gmax",
      "Venusaur-Mega"
    ],
    "name_jp": "フシギバナ"
  },
  "Victreebel": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 80,
      "at": 105,
      "df": 65,
      "sp": 70,
      "sa": 100,
      "sd": 70
    },
    "weightkg": 15.5,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "ウツボット"
  },
  "Vileplume": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 75,
      "at": 80,
      "df": 85,
      "sp": 50,
      "sa": 110,
      "sd": 90
    },
    "weightkg": 18.6,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "ラフレシア"
  },
  "Voltorb": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 40,
      "at": 30,
      "df": 50,
      "sp": 100,
      "sa": 55,
      "sd": 55
    },
    "weightkg": 10.4,
    "nfe": true,
    "gender": "N",
    "abilities": {
      "0": "Soundproof"
    },
    "otherFormes": [
      "Voltorb-Hisui"
    ],
    "name_jp": "ビリリダマ"
  },
  "Vulpix": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 38,
      "at": 41,
      "df": 40,
      "sp": 65,
      "sa": 50,
      "sd": 65
    },
    "weightkg": 9.9,
    "nfe": true,
    "abilities": {
      "0": "Flash Fire"
    },
    "otherFormes": [
      "Vulpix-Alola"
    ],
    "name_jp": "ロコン"
  },
  "Wartortle": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 59,
      "at": 63,
      "df": 80,
      "sp": 58,
      "sa": 65,
      "sd": 80
    },
    "weightkg": 22.5,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "カメール"
  },
  "Weedle": {
    "types": [
      "Bug",
      "Poison"
    ],
    "bs": {
      "hp": 40,
      "at": 35,
      "df": 30,
      "sp": 50,
      "sa": 20,
      "sd": 20
    },
    "weightkg": 3.2,
    "nfe": true,
    "abilities": {
      "0": "Shield Dust"
    },
    "name_jp": "ビードル"
  },
  "Weepinbell": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 65,
      "at": 90,
      "df": 50,
      "sp": 55,
      "sa": 85,
      "sd": 45
    },
    "weightkg": 6.4,
    "nfe": true,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "ウツドン"
  },
  "Weezing": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 65,
      "at": 90,
      "df": 120,
      "sp": 60,
      "sa": 85,
      "sd": 70
    },
    "weightkg": 9.5,
    "abilities": {
      "0": "Levitate"
    },
    "otherFormes": [
      "Weezing-Galar"
    ],
    "name_jp": "マタドガス"
  },
  "Wigglytuff": {
    "types": [
      "Normal",
      "Fairy"
    ],
    "bs": {
      "hp": 140,
      "at": 70,
      "df": 45,
      "sp": 45,
      "sa": 85,
      "sd": 50
    },
    "weightkg": 12,
    "abilities": {
      "0": "Cute Charm"
    },
    "name_jp": "プクリン"
  },
  "Zapdos": {
    "types": [
      "Electric",
      "Flying"
    ],
    "bs": {
      "hp": 90,
      "at": 90,
      "df": 85,
      "sp": 100,
      "sa": 125,
      "sd": 90
    },
    "weightkg": 52.6,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "otherFormes": [
      "Zapdos-Galar"
    ],
    "name_jp": "サンダー"
  },
  "Zubat": {
    "types": [
      "Poison",
      "Flying"
    ],
    "bs": {
      "hp": 40,
      "at": 45,
      "df": 35,
      "sp": 55,
      "sa": 30,
      "sd": 40
    },
    "weightkg": 7.5,
    "nfe": true,
    "abilities": {
      "0": "Inner Focus"
    },
    "name_jp": "ズバット"
  },
  "Aipom": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 55,
      "at": 70,
      "df": 55,
      "sa": 40,
      "sd": 55,
      "sp": 85
    },
    "weightkg": 11.5,
    "abilities": {
      "0": "Run Away"
    },
    "nfe": true,
    "name_jp": "エイパム"
  },
  "Ampharos": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 90,
      "at": 75,
      "df": 85,
      "sa": 115,
      "sd": 90,
      "sp": 55
    },
    "weightkg": 61.5,
    "abilities": {
      "0": "Static"
    },
    "otherFormes": [
      "Ampharos-Mega"
    ],
    "name_jp": "デンリュウ"
  },
  "Ariados": {
    "types": [
      "Bug",
      "Poison"
    ],
    "bs": {
      "hp": 70,
      "at": 90,
      "df": 70,
      "sa": 60,
      "sd": 70,
      "sp": 40
    },
    "weightkg": 33.5,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "アリアドス"
  },
  "Azumarill": {
    "types": [
      "Water",
      "Fairy"
    ],
    "bs": {
      "hp": 100,
      "at": 50,
      "df": 80,
      "sa": 60,
      "sd": 80,
      "sp": 50
    },
    "weightkg": 28.5,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "マリルリ"
  },
  "Bayleef": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 60,
      "at": 62,
      "df": 80,
      "sa": 63,
      "sd": 80,
      "sp": 60
    },
    "weightkg": 15.8,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "ベイリーフ"
  },
  "Bellossom": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 75,
      "at": 80,
      "df": 95,
      "sa": 90,
      "sd": 100,
      "sp": 50
    },
    "weightkg": 5.8,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "キレイハナ"
  },
  "Blissey": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 255,
      "at": 10,
      "df": 10,
      "sa": 75,
      "sd": 135,
      "sp": 55
    },
    "weightkg": 46.8,
    "abilities": {
      "0": "Natural Cure"
    },
    "name_jp": "ハピナス"
  },
  "Celebi": {
    "types": [
      "Psychic",
      "Grass"
    ],
    "bs": {
      "hp": 100,
      "at": 100,
      "df": 100,
      "sa": 100,
      "sd": 100,
      "sp": 100
    },
    "weightkg": 5,
    "gender": "N",
    "abilities": {
      "0": "Natural Cure"
    },
    "name_jp": "セレビィ"
  },
  "Chikorita": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 45,
      "at": 49,
      "df": 65,
      "sa": 49,
      "sd": 65,
      "sp": 45
    },
    "weightkg": 6.4,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "チコリータ"
  },
  "Chinchou": {
    "types": [
      "Water",
      "Electric"
    ],
    "bs": {
      "hp": 75,
      "at": 38,
      "df": 38,
      "sa": 56,
      "sd": 56,
      "sp": 67
    },
    "weightkg": 12,
    "nfe": true,
    "abilities": {
      "0": "Volt Absorb"
    },
    "name_jp": "チョンチー"
  },
  "Cleffa": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 50,
      "at": 25,
      "df": 28,
      "sa": 45,
      "sd": 55,
      "sp": 15
    },
    "weightkg": 3,
    "nfe": true,
    "abilities": {
      "0": "Cute Charm"
    },
    "name_jp": "ピィ"
  },
  "Corsola": {
    "types": [
      "Water",
      "Rock"
    ],
    "bs": {
      "hp": 65,
      "at": 55,
      "df": 95,
      "sa": 65,
      "sd": 95,
      "sp": 35
    },
    "weightkg": 5,
    "abilities": {
      "0": "Hustle"
    },
    "otherFormes": [
      "Corsola-Galar"
    ],
    "name_jp": "サニーゴ"
  },
  "Crobat": {
    "types": [
      "Poison",
      "Flying"
    ],
    "bs": {
      "hp": 85,
      "at": 90,
      "df": 80,
      "sa": 70,
      "sd": 80,
      "sp": 130
    },
    "weightkg": 75,
    "abilities": {
      "0": "Inner Focus"
    },
    "name_jp": "クロバット"
  },
  "Croconaw": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 65,
      "at": 80,
      "df": 80,
      "sa": 59,
      "sd": 63,
      "sp": 58
    },
    "weightkg": 25,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "アリゲイツ"
  },
  "Cyndaquil": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 39,
      "at": 52,
      "df": 43,
      "sa": 60,
      "sd": 50,
      "sp": 65
    },
    "weightkg": 7.9,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "ヒノアラシ"
  },
  "Delibird": {
    "types": [
      "Ice",
      "Flying"
    ],
    "bs": {
      "hp": 45,
      "at": 55,
      "df": 45,
      "sa": 65,
      "sd": 45,
      "sp": 75
    },
    "weightkg": 16,
    "abilities": {
      "0": "Vital Spirit"
    },
    "name_jp": "デリバード"
  },
  "Donphan": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 90,
      "at": 120,
      "df": 120,
      "sa": 60,
      "sd": 60,
      "sp": 50
    },
    "weightkg": 120,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "ドンファン"
  },
  "Dunsparce": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 100,
      "at": 70,
      "df": 70,
      "sa": 65,
      "sd": 65,
      "sp": 45
    },
    "weightkg": 14,
    "abilities": {
      "0": "Serene Grace"
    },
    "nfe": true,
    "name_jp": "ノコッチ"
  },
  "Elekid": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 45,
      "at": 63,
      "df": 37,
      "sa": 65,
      "sd": 55,
      "sp": 95
    },
    "weightkg": 23.5,
    "nfe": true,
    "abilities": {
      "0": "Static"
    },
    "name_jp": "エレキッド"
  },
  "Entei": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 115,
      "at": 115,
      "df": 85,
      "sa": 90,
      "sd": 75,
      "sp": 100
    },
    "weightkg": 198,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "name_jp": "エンテイ"
  },
  "Espeon": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 65,
      "at": 65,
      "df": 60,
      "sa": 130,
      "sd": 95,
      "sp": 110
    },
    "weightkg": 26.5,
    "abilities": {
      "0": "Synchronize"
    },
    "name_jp": "エーフィ"
  },
  "Feraligatr": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 85,
      "at": 105,
      "df": 100,
      "sa": 79,
      "sd": 83,
      "sp": 78
    },
    "weightkg": 88.8,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "オーダイル"
  },
  "Flaaffy": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 70,
      "at": 55,
      "df": 55,
      "sa": 80,
      "sd": 60,
      "sp": 45
    },
    "weightkg": 13.3,
    "nfe": true,
    "abilities": {
      "0": "Static"
    },
    "name_jp": "モココ"
  },
  "Forretress": {
    "types": [
      "Bug",
      "Steel"
    ],
    "bs": {
      "hp": 75,
      "at": 90,
      "df": 140,
      "sa": 60,
      "sd": 60,
      "sp": 40
    },
    "weightkg": 125.8,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "フォレトス"
  },
  "Furret": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 85,
      "at": 76,
      "df": 64,
      "sa": 45,
      "sd": 55,
      "sp": 90
    },
    "weightkg": 32.5,
    "abilities": {
      "0": "Run Away"
    },
    "name_jp": "オオタチ"
  },
  "Girafarig": {
    "types": [
      "Normal",
      "Psychic"
    ],
    "bs": {
      "hp": 70,
      "at": 80,
      "df": 65,
      "sa": 90,
      "sd": 65,
      "sp": 85
    },
    "weightkg": 41.5,
    "abilities": {
      "0": "Inner Focus"
    },
    "nfe": true,
    "name_jp": "キリンリキ"
  },
  "Gligar": {
    "types": [
      "Ground",
      "Flying"
    ],
    "bs": {
      "hp": 65,
      "at": 75,
      "df": 105,
      "sa": 35,
      "sd": 65,
      "sp": 85
    },
    "weightkg": 64.8,
    "abilities": {
      "0": "Hyper Cutter"
    },
    "nfe": true,
    "name_jp": "グライガー"
  },
  "Granbull": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 90,
      "at": 120,
      "df": 75,
      "sa": 60,
      "sd": 60,
      "sp": 45
    },
    "weightkg": 48.7,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "グランブル"
  },
  "Heracross": {
    "types": [
      "Bug",
      "Fighting"
    ],
    "bs": {
      "hp": 80,
      "at": 125,
      "df": 75,
      "sa": 40,
      "sd": 95,
      "sp": 85
    },
    "weightkg": 54,
    "abilities": {
      "0": "Swarm"
    },
    "otherFormes": [
      "Heracross-Mega"
    ],
    "name_jp": "ヘラクロス"
  },
  "Hitmontop": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 50,
      "at": 95,
      "df": 95,
      "sa": 35,
      "sd": 110,
      "sp": 70
    },
    "weightkg": 48,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "カポエラー"
  },
  "Ho-Oh": {
    "types": [
      "Fire",
      "Flying"
    ],
    "bs": {
      "hp": 106,
      "at": 130,
      "df": 90,
      "sa": 110,
      "sd": 154,
      "sp": 90
    },
    "weightkg": 199,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "name_jp": "ホウオウ"
  },
  "Hoothoot": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 60,
      "at": 30,
      "df": 30,
      "sa": 36,
      "sd": 56,
      "sp": 50
    },
    "weightkg": 21.2,
    "nfe": true,
    "abilities": {
      "0": "Insomnia"
    },
    "name_jp": "ホーホー"
  },
  "Hoppip": {
    "types": [
      "Grass",
      "Flying"
    ],
    "bs": {
      "hp": 35,
      "at": 35,
      "df": 40,
      "sa": 35,
      "sd": 55,
      "sp": 50
    },
    "weightkg": 0.5,
    "nfe": true,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "ハネッコ"
  },
  "Houndoom": {
    "types": [
      "Dark",
      "Fire"
    ],
    "bs": {
      "hp": 75,
      "at": 90,
      "df": 50,
      "sa": 110,
      "sd": 80,
      "sp": 95
    },
    "weightkg": 35,
    "abilities": {
      "0": "Early Bird"
    },
    "otherFormes": [
      "Houndoom-Mega"
    ],
    "name_jp": "ヘルガー"
  },
  "Houndour": {
    "types": [
      "Dark",
      "Fire"
    ],
    "bs": {
      "hp": 45,
      "at": 60,
      "df": 30,
      "sa": 80,
      "sd": 50,
      "sp": 65
    },
    "weightkg": 10.8,
    "nfe": true,
    "abilities": {
      "0": "Early Bird"
    },
    "name_jp": "デルビル"
  },
  "Igglybuff": {
    "types": [
      "Normal",
      "Fairy"
    ],
    "bs": {
      "hp": 90,
      "at": 30,
      "df": 15,
      "sa": 40,
      "sd": 20,
      "sp": 15
    },
    "weightkg": 1,
    "nfe": true,
    "abilities": {
      "0": "Cute Charm"
    },
    "name_jp": "ププリン"
  },
  "Jumpluff": {
    "types": [
      "Grass",
      "Flying"
    ],
    "bs": {
      "hp": 75,
      "at": 55,
      "df": 70,
      "sa": 55,
      "sd": 95,
      "sp": 110
    },
    "weightkg": 3,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "ワタッコ"
  },
  "Kingdra": {
    "types": [
      "Water",
      "Dragon"
    ],
    "bs": {
      "hp": 75,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 85
    },
    "weightkg": 152,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "キングドラ"
  },
  "Lanturn": {
    "types": [
      "Water",
      "Electric"
    ],
    "bs": {
      "hp": 125,
      "at": 58,
      "df": 58,
      "sa": 76,
      "sd": 76,
      "sp": 67
    },
    "weightkg": 22.5,
    "abilities": {
      "0": "Volt Absorb"
    },
    "name_jp": "ランターン"
  },
  "Larvitar": {
    "types": [
      "Rock",
      "Ground"
    ],
    "bs": {
      "hp": 50,
      "at": 64,
      "df": 50,
      "sa": 45,
      "sd": 50,
      "sp": 41
    },
    "weightkg": 72,
    "nfe": true,
    "abilities": {
      "0": "Guts"
    },
    "name_jp": "ヨーギラス"
  },
  "Ledian": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 55,
      "at": 35,
      "df": 50,
      "sa": 55,
      "sd": 110,
      "sp": 85
    },
    "weightkg": 35.6,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "レディアン"
  },
  "Ledyba": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 40,
      "at": 20,
      "df": 30,
      "sa": 40,
      "sd": 80,
      "sp": 55
    },
    "weightkg": 10.8,
    "nfe": true,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "レディバ"
  },
  "Lugia": {
    "types": [
      "Psychic",
      "Flying"
    ],
    "bs": {
      "hp": 106,
      "at": 90,
      "df": 130,
      "sa": 90,
      "sd": 154,
      "sp": 110
    },
    "weightkg": 216,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "name_jp": "ルギア"
  },
  "Magby": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 45,
      "at": 75,
      "df": 37,
      "sa": 70,
      "sd": 55,
      "sp": 83
    },
    "weightkg": 21.4,
    "nfe": true,
    "abilities": {
      "0": "Flame Body"
    },
    "name_jp": "ブビィ"
  },
  "Magcargo": {
    "types": [
      "Fire",
      "Rock"
    ],
    "bs": {
      "hp": 60,
      "at": 50,
      "df": 120,
      "sa": 90,
      "sd": 80,
      "sp": 30
    },
    "weightkg": 55,
    "abilities": {
      "0": "Magma Armor"
    },
    "name_jp": "マグカルゴ"
  },
  "Mantine": {
    "types": [
      "Water",
      "Flying"
    ],
    "bs": {
      "hp": 85,
      "at": 40,
      "df": 70,
      "sa": 80,
      "sd": 140,
      "sp": 70
    },
    "weightkg": 220,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "マンタイン"
  },
  "Mareep": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 55,
      "at": 40,
      "df": 40,
      "sa": 65,
      "sd": 45,
      "sp": 35
    },
    "weightkg": 7.8,
    "nfe": true,
    "abilities": {
      "0": "Static"
    },
    "name_jp": "メリープ"
  },
  "Marill": {
    "types": [
      "Water",
      "Fairy"
    ],
    "bs": {
      "hp": 70,
      "at": 20,
      "df": 50,
      "sa": 20,
      "sd": 50,
      "sp": 40
    },
    "weightkg": 8.5,
    "nfe": true,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "マリル"
  },
  "Meganium": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 80,
      "at": 82,
      "df": 100,
      "sa": 83,
      "sd": 100,
      "sp": 80
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "メガニウム"
  },
  "Miltank": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 95,
      "at": 80,
      "df": 105,
      "sa": 40,
      "sd": 70,
      "sp": 100
    },
    "weightkg": 75.5,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "ミルタンク"
  },
  "Misdreavus": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 60,
      "at": 60,
      "df": 60,
      "sa": 85,
      "sd": 85,
      "sp": 85
    },
    "weightkg": 1,
    "abilities": {
      "0": "Levitate"
    },
    "nfe": true,
    "name_jp": "ムウマ"
  },
  "Murkrow": {
    "types": [
      "Dark",
      "Flying"
    ],
    "bs": {
      "hp": 60,
      "at": 85,
      "df": 42,
      "sa": 85,
      "sd": 42,
      "sp": 91
    },
    "weightkg": 2.1,
    "abilities": {
      "0": "Insomnia"
    },
    "nfe": true,
    "name_jp": "ヤミカラス"
  },
  "Natu": {
    "types": [
      "Psychic",
      "Flying"
    ],
    "bs": {
      "hp": 40,
      "at": 50,
      "df": 45,
      "sa": 70,
      "sd": 45,
      "sp": 70
    },
    "weightkg": 2,
    "nfe": true,
    "abilities": {
      "0": "Synchronize"
    },
    "name_jp": "ネイティ"
  },
  "Noctowl": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 100,
      "at": 50,
      "df": 50,
      "sa": 86,
      "sd": 96,
      "sp": 70
    },
    "weightkg": 40.8,
    "abilities": {
      "0": "Insomnia"
    },
    "name_jp": "ヨルノズク"
  },
  "Octillery": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 75,
      "at": 105,
      "df": 75,
      "sa": 105,
      "sd": 75,
      "sp": 45
    },
    "weightkg": 28.5,
    "abilities": {
      "0": "Suction Cups"
    },
    "name_jp": "オクタン"
  },
  "Phanpy": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 90,
      "at": 60,
      "df": 60,
      "sa": 40,
      "sd": 40,
      "sp": 40
    },
    "weightkg": 33.5,
    "nfe": true,
    "abilities": {
      "0": "Pickup"
    },
    "name_jp": "ゴマゾウ"
  },
  "Pichu": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 20,
      "at": 40,
      "df": 15,
      "sa": 35,
      "sd": 35,
      "sp": 60
    },
    "weightkg": 2,
    "nfe": true,
    "abilities": {
      "0": "Static"
    },
    "name_jp": "ピチュー"
  },
  "Piloswine": {
    "types": [
      "Ice",
      "Ground"
    ],
    "bs": {
      "hp": 100,
      "at": 100,
      "df": 80,
      "sa": 60,
      "sd": 60,
      "sp": 50
    },
    "weightkg": 55.8,
    "abilities": {
      "0": "Oblivious"
    },
    "nfe": true,
    "name_jp": "イノムー"
  },
  "Pineco": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 90,
      "sa": 35,
      "sd": 35,
      "sp": 15
    },
    "weightkg": 7.2,
    "nfe": true,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "クヌギダマ"
  },
  "Politoed": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 90,
      "at": 75,
      "df": 75,
      "sa": 90,
      "sd": 100,
      "sp": 70
    },
    "weightkg": 33.9,
    "abilities": {
      "0": "Water Absorb"
    },
    "name_jp": "ニョロトノ"
  },
  "Porygon2": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 85,
      "at": 80,
      "df": 90,
      "sa": 105,
      "sd": 95,
      "sp": 60
    },
    "weightkg": 32.5,
    "gender": "N",
    "abilities": {
      "0": "Trace"
    },
    "nfe": true,
    "name_jp": "ポリゴン２"
  },
  "Pupitar": {
    "types": [
      "Rock",
      "Ground"
    ],
    "bs": {
      "hp": 70,
      "at": 84,
      "df": 70,
      "sa": 65,
      "sd": 70,
      "sp": 51
    },
    "weightkg": 152,
    "nfe": true,
    "abilities": {
      "0": "Shed Skin"
    },
    "name_jp": "サナギラス"
  },
  "Quagsire": {
    "types": [
      "Water",
      "Ground"
    ],
    "bs": {
      "hp": 95,
      "at": 85,
      "df": 85,
      "sa": 65,
      "sd": 65,
      "sp": 35
    },
    "weightkg": 75,
    "abilities": {
      "0": "Damp"
    },
    "name_jp": "ヌオー"
  },
  "Quilava": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 58,
      "at": 64,
      "df": 58,
      "sa": 80,
      "sd": 65,
      "sp": 80
    },
    "weightkg": 19,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "マグマラシ"
  },
  "Qwilfish": {
    "types": [
      "Water",
      "Poison"
    ],
    "bs": {
      "hp": 65,
      "at": 95,
      "df": 85,
      "sa": 55,
      "sd": 55,
      "sp": 85
    },
    "weightkg": 3.9,
    "abilities": {
      "0": "Poison Point"
    },
    "otherFormes": [
      "Qwilfish-Hisui"
    ],
    "name_jp": "ハリーセン"
  },
  "Raikou": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 90,
      "at": 85,
      "df": 75,
      "sa": 115,
      "sd": 100,
      "sp": 115
    },
    "weightkg": 178,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "name_jp": "ライコウ"
  },
  "Remoraid": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 35,
      "at": 65,
      "df": 35,
      "sa": 65,
      "sd": 35,
      "sp": 65
    },
    "weightkg": 12,
    "nfe": true,
    "abilities": {
      "0": "Hustle"
    },
    "name_jp": "テッポウオ"
  },
  "Scizor": {
    "types": [
      "Bug",
      "Steel"
    ],
    "bs": {
      "hp": 70,
      "at": 130,
      "df": 100,
      "sa": 55,
      "sd": 80,
      "sp": 65
    },
    "weightkg": 118,
    "abilities": {
      "0": "Swarm"
    },
    "otherFormes": [
      "Scizor-Mega"
    ],
    "name_jp": "ハッサム"
  },
  "Sentret": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 35,
      "at": 46,
      "df": 34,
      "sa": 35,
      "sd": 45,
      "sp": 20
    },
    "weightkg": 6,
    "nfe": true,
    "abilities": {
      "0": "Run Away"
    },
    "name_jp": "オタチ"
  },
  "Shuckle": {
    "types": [
      "Bug",
      "Rock"
    ],
    "bs": {
      "hp": 20,
      "at": 10,
      "df": 230,
      "sa": 10,
      "sd": 230,
      "sp": 5
    },
    "weightkg": 20.5,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "ツボツボ"
  },
  "Skarmory": {
    "types": [
      "Steel",
      "Flying"
    ],
    "bs": {
      "hp": 65,
      "at": 80,
      "df": 140,
      "sa": 40,
      "sd": 70,
      "sp": 70
    },
    "weightkg": 50.5,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "エアームド"
  },
  "Skiploom": {
    "types": [
      "Grass",
      "Flying"
    ],
    "bs": {
      "hp": 55,
      "at": 45,
      "df": 50,
      "sa": 45,
      "sd": 65,
      "sp": 80
    },
    "weightkg": 1,
    "nfe": true,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "ポポッコ"
  },
  "Slowking": {
    "types": [
      "Water",
      "Psychic"
    ],
    "bs": {
      "hp": 95,
      "at": 75,
      "df": 80,
      "sa": 100,
      "sd": 110,
      "sp": 30
    },
    "weightkg": 79.5,
    "abilities": {
      "0": "Oblivious"
    },
    "otherFormes": [
      "Slowking-Galar"
    ],
    "name_jp": "ヤドキング"
  },
  "Slugma": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 40,
      "at": 40,
      "df": 40,
      "sa": 70,
      "sd": 40,
      "sp": 20
    },
    "weightkg": 35,
    "nfe": true,
    "abilities": {
      "0": "Magma Armor"
    },
    "name_jp": "マグマッグ"
  },
  "Smeargle": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 55,
      "at": 20,
      "df": 35,
      "sa": 20,
      "sd": 45,
      "sp": 75
    },
    "weightkg": 58,
    "abilities": {
      "0": "Own Tempo"
    },
    "name_jp": "ドーブル"
  },
  "Smoochum": {
    "types": [
      "Ice",
      "Psychic"
    ],
    "bs": {
      "hp": 45,
      "at": 30,
      "df": 15,
      "sa": 85,
      "sd": 65,
      "sp": 65
    },
    "weightkg": 6,
    "nfe": true,
    "abilities": {
      "0": "Oblivious"
    },
    "name_jp": "ムチュール"
  },
  "Sneasel": {
    "types": [
      "Dark",
      "Ice"
    ],
    "bs": {
      "hp": 55,
      "at": 95,
      "df": 55,
      "sa": 35,
      "sd": 75,
      "sp": 115
    },
    "weightkg": 28,
    "abilities": {
      "0": "Inner Focus"
    },
    "nfe": true,
    "otherFormes": [
      "Sneasel-Hisui"
    ],
    "name_jp": "ニューラ"
  },
  "Snubbull": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 60,
      "at": 80,
      "df": 50,
      "sa": 40,
      "sd": 40,
      "sp": 30
    },
    "weightkg": 7.8,
    "nfe": true,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "ブルー"
  },
  "Spinarak": {
    "types": [
      "Bug",
      "Poison"
    ],
    "bs": {
      "hp": 40,
      "at": 60,
      "df": 40,
      "sa": 40,
      "sd": 40,
      "sp": 30
    },
    "weightkg": 8.5,
    "nfe": true,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "イトマル"
  },
  "Stantler": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 73,
      "at": 95,
      "df": 62,
      "sa": 85,
      "sd": 65,
      "sp": 85
    },
    "weightkg": 71.2,
    "abilities": {
      "0": "Intimidate"
    },
    "nfe": true,
    "name_jp": "オドシシ"
  },
  "Steelix": {
    "types": [
      "Steel",
      "Ground"
    ],
    "bs": {
      "hp": 75,
      "at": 85,
      "df": 200,
      "sa": 55,
      "sd": 65,
      "sp": 30
    },
    "weightkg": 400,
    "abilities": {
      "0": "Rock Head"
    },
    "otherFormes": [
      "Steelix-Mega"
    ],
    "name_jp": "ハガネール"
  },
  "Sudowoodo": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 70,
      "at": 100,
      "df": 115,
      "sa": 30,
      "sd": 65,
      "sp": 30
    },
    "weightkg": 38,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "ウソッキー"
  },
  "Suicune": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 100,
      "at": 75,
      "df": 115,
      "sa": 90,
      "sd": 115,
      "sp": 85
    },
    "weightkg": 187,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "name_jp": "スイクン"
  },
  "Sunflora": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 75,
      "at": 75,
      "df": 55,
      "sa": 105,
      "sd": 85,
      "sp": 30
    },
    "weightkg": 8.5,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "キマワリ"
  },
  "Sunkern": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 30,
      "at": 30,
      "df": 30,
      "sa": 30,
      "sd": 30,
      "sp": 30
    },
    "weightkg": 1.8,
    "nfe": true,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "ヒマナッツ"
  },
  "Swinub": {
    "types": [
      "Ice",
      "Ground"
    ],
    "bs": {
      "hp": 50,
      "at": 50,
      "df": 40,
      "sa": 30,
      "sd": 30,
      "sp": 50
    },
    "weightkg": 6.5,
    "nfe": true,
    "abilities": {
      "0": "Oblivious"
    },
    "name_jp": "ウリムー"
  },
  "Teddiursa": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 60,
      "at": 80,
      "df": 50,
      "sa": 50,
      "sd": 50,
      "sp": 40
    },
    "weightkg": 8.8,
    "nfe": true,
    "abilities": {
      "0": "Pickup"
    },
    "name_jp": "ヒメグマ"
  },
  "Togepi": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 35,
      "at": 20,
      "df": 65,
      "sa": 40,
      "sd": 65,
      "sp": 20
    },
    "weightkg": 1.5,
    "nfe": true,
    "abilities": {
      "0": "Hustle"
    },
    "name_jp": "トゲピー"
  },
  "Togetic": {
    "types": [
      "Fairy",
      "Flying"
    ],
    "bs": {
      "hp": 55,
      "at": 40,
      "df": 85,
      "sa": 80,
      "sd": 105,
      "sp": 40
    },
    "weightkg": 3.2,
    "abilities": {
      "0": "Hustle"
    },
    "nfe": true,
    "name_jp": "トゲチック"
  },
  "Totodile": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 64,
      "sa": 44,
      "sd": 48,
      "sp": 43
    },
    "weightkg": 9.5,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "ワニノコ"
  },
  "Typhlosion": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 78,
      "at": 84,
      "df": 78,
      "sa": 109,
      "sd": 85,
      "sp": 100
    },
    "weightkg": 79.5,
    "abilities": {
      "0": "Blaze"
    },
    "otherFormes": [
      "Typhlosion-Hisui"
    ],
    "name_jp": "バクフーン"
  },
  "Tyranitar": {
    "types": [
      "Rock",
      "Dark"
    ],
    "bs": {
      "hp": 100,
      "at": 134,
      "df": 110,
      "sa": 95,
      "sd": 100,
      "sp": 61
    },
    "weightkg": 202,
    "abilities": {
      "0": "Sand Stream"
    },
    "otherFormes": [
      "Tyranitar-Mega"
    ],
    "name_jp": "バンギラス"
  },
  "Tyrogue": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 35,
      "at": 35,
      "df": 35,
      "sa": 35,
      "sd": 35,
      "sp": 35
    },
    "weightkg": 21,
    "nfe": true,
    "abilities": {
      "0": "Guts"
    },
    "name_jp": "バルキー"
  },
  "Umbreon": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 95,
      "at": 65,
      "df": 110,
      "sa": 60,
      "sd": 130,
      "sp": 65
    },
    "weightkg": 27,
    "abilities": {
      "0": "Synchronize"
    },
    "name_jp": "ブラッキー"
  },
  "Unown": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 48,
      "at": 72,
      "df": 48,
      "sa": 72,
      "sd": 48,
      "sp": 48
    },
    "weightkg": 5,
    "gender": "N",
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "アンノーン"
  },
  "Ursaring": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 90,
      "at": 130,
      "df": 75,
      "sa": 75,
      "sd": 75,
      "sp": 55
    },
    "weightkg": 125.8,
    "abilities": {
      "0": "Guts"
    },
    "nfe": true,
    "name_jp": "リングマ"
  },
  "Wobbuffet": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 190,
      "at": 33,
      "df": 58,
      "sa": 33,
      "sd": 58,
      "sp": 33
    },
    "weightkg": 28.5,
    "abilities": {
      "0": "Shadow Tag"
    },
    "name_jp": "ソーナンス"
  },
  "Wooper": {
    "types": [
      "Water",
      "Ground"
    ],
    "bs": {
      "hp": 55,
      "at": 45,
      "df": 45,
      "sa": 25,
      "sd": 25,
      "sp": 15
    },
    "weightkg": 8.5,
    "nfe": true,
    "abilities": {
      "0": "Damp"
    },
    "otherFormes": [
      "Wooper-Paldea"
    ],
    "name_jp": "ウパー"
  },
  "Xatu": {
    "types": [
      "Psychic",
      "Flying"
    ],
    "bs": {
      "hp": 65,
      "at": 75,
      "df": 70,
      "sa": 95,
      "sd": 70,
      "sp": 95
    },
    "weightkg": 15,
    "abilities": {
      "0": "Synchronize"
    },
    "name_jp": "ネイティオ"
  },
  "Yanma": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 65,
      "at": 65,
      "df": 45,
      "sa": 75,
      "sd": 45,
      "sp": 95
    },
    "weightkg": 38,
    "abilities": {
      "0": "Speed Boost"
    },
    "nfe": true,
    "name_jp": "ヤンヤンマ"
  },
  "Absol": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 65,
      "at": 130,
      "df": 60,
      "sa": 75,
      "sd": 60,
      "sp": 75
    },
    "weightkg": 47,
    "abilities": {
      "0": "Pressure"
    },
    "otherFormes": [
      "Absol-Mega"
    ],
    "name_jp": "アブソル"
  },
  "Aggron": {
    "types": [
      "Steel",
      "Rock"
    ],
    "bs": {
      "hp": 70,
      "at": 110,
      "df": 180,
      "sa": 60,
      "sd": 60,
      "sp": 50
    },
    "weightkg": 360,
    "abilities": {
      "0": "Sturdy"
    },
    "otherFormes": [
      "Aggron-Mega"
    ],
    "name_jp": "ボスゴドラ"
  },
  "Altaria": {
    "types": [
      "Dragon",
      "Flying"
    ],
    "bs": {
      "hp": 75,
      "at": 70,
      "df": 90,
      "sa": 70,
      "sd": 105,
      "sp": 80
    },
    "weightkg": 20.6,
    "abilities": {
      "0": "Natural Cure"
    },
    "otherFormes": [
      "Altaria-Mega"
    ],
    "name_jp": "チルタリス"
  },
  "Anorith": {
    "types": [
      "Rock",
      "Bug"
    ],
    "bs": {
      "hp": 45,
      "at": 95,
      "df": 50,
      "sa": 40,
      "sd": 50,
      "sp": 75
    },
    "weightkg": 12.5,
    "nfe": true,
    "abilities": {
      "0": "Battle Armor"
    },
    "name_jp": "アノプス"
  },
  "Armaldo": {
    "types": [
      "Rock",
      "Bug"
    ],
    "bs": {
      "hp": 75,
      "at": 125,
      "df": 100,
      "sa": 70,
      "sd": 80,
      "sp": 45
    },
    "weightkg": 68.2,
    "abilities": {
      "0": "Battle Armor"
    },
    "name_jp": "アーマルド"
  },
  "Aron": {
    "types": [
      "Steel",
      "Rock"
    ],
    "bs": {
      "hp": 50,
      "at": 70,
      "df": 100,
      "sa": 40,
      "sd": 40,
      "sp": 30
    },
    "weightkg": 60,
    "nfe": true,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "ココドラ"
  },
  "Azurill": {
    "types": [
      "Normal",
      "Fairy"
    ],
    "bs": {
      "hp": 50,
      "at": 20,
      "df": 40,
      "sa": 20,
      "sd": 40,
      "sp": 20
    },
    "weightkg": 2,
    "nfe": true,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "ルリリ"
  },
  "Bagon": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 45,
      "at": 75,
      "df": 60,
      "sa": 40,
      "sd": 30,
      "sp": 50
    },
    "weightkg": 42.1,
    "nfe": true,
    "abilities": {
      "0": "Rock Head"
    },
    "name_jp": "タツベイ"
  },
  "Baltoy": {
    "types": [
      "Ground",
      "Psychic"
    ],
    "bs": {
      "hp": 40,
      "at": 40,
      "df": 55,
      "sa": 40,
      "sd": 70,
      "sp": 55
    },
    "weightkg": 21.5,
    "abilities": {
      "0": "Levitate"
    },
    "nfe": true,
    "gender": "N",
    "name_jp": "ヤジロン"
  },
  "Banette": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 64,
      "at": 115,
      "df": 65,
      "sa": 83,
      "sd": 63,
      "sp": 65
    },
    "weightkg": 12.5,
    "abilities": {
      "0": "Insomnia"
    },
    "otherFormes": [
      "Banette-Mega"
    ],
    "name_jp": "ジュペッタ"
  },
  "Barboach": {
    "types": [
      "Water",
      "Ground"
    ],
    "bs": {
      "hp": 50,
      "at": 48,
      "df": 43,
      "sa": 46,
      "sd": 41,
      "sp": 60
    },
    "weightkg": 1.9,
    "nfe": true,
    "abilities": {
      "0": "Oblivious"
    },
    "name_jp": "ドジョッチ"
  },
  "Beautifly": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 60,
      "at": 70,
      "df": 50,
      "sa": 100,
      "sd": 50,
      "sp": 65
    },
    "weightkg": 28.4,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "アゲハント"
  },
  "Beldum": {
    "types": [
      "Steel",
      "Psychic"
    ],
    "bs": {
      "hp": 40,
      "at": 55,
      "df": 80,
      "sa": 35,
      "sd": 60,
      "sp": 30
    },
    "weightkg": 95.2,
    "nfe": true,
    "gender": "N",
    "abilities": {
      "0": "Clear Body"
    },
    "name_jp": "ダンバル"
  },
  "Blaziken": {
    "types": [
      "Fire",
      "Fighting"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 70,
      "sa": 110,
      "sd": 70,
      "sp": 80
    },
    "weightkg": 52,
    "abilities": {
      "0": "Blaze"
    },
    "otherFormes": [
      "Blaziken-Mega"
    ],
    "name_jp": "バシャーモ"
  },
  "Breloom": {
    "types": [
      "Grass",
      "Fighting"
    ],
    "bs": {
      "hp": 60,
      "at": 130,
      "df": 80,
      "sa": 60,
      "sd": 60,
      "sp": 70
    },
    "weightkg": 39.2,
    "abilities": {
      "0": "Effect Spore"
    },
    "name_jp": "キノガッサ"
  },
  "Cacnea": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 50,
      "at": 85,
      "df": 40,
      "sa": 85,
      "sd": 40,
      "sp": 35
    },
    "weightkg": 51.3,
    "nfe": true,
    "abilities": {
      "0": "Sand Veil"
    },
    "name_jp": "サボネア"
  },
  "Cacturne": {
    "types": [
      "Grass",
      "Dark"
    ],
    "bs": {
      "hp": 70,
      "at": 115,
      "df": 60,
      "sa": 115,
      "sd": 60,
      "sp": 55
    },
    "weightkg": 77.4,
    "abilities": {
      "0": "Sand Veil"
    },
    "name_jp": "ノクタス"
  },
  "Camerupt": {
    "types": [
      "Fire",
      "Ground"
    ],
    "bs": {
      "hp": 70,
      "at": 100,
      "df": 70,
      "sa": 105,
      "sd": 75,
      "sp": 40
    },
    "weightkg": 220,
    "abilities": {
      "0": "Magma Armor"
    },
    "otherFormes": [
      "Camerupt-Mega"
    ],
    "name_jp": "バクーダ"
  },
  "Carvanha": {
    "types": [
      "Water",
      "Dark"
    ],
    "bs": {
      "hp": 45,
      "at": 90,
      "df": 20,
      "sa": 65,
      "sd": 20,
      "sp": 65
    },
    "weightkg": 20.8,
    "nfe": true,
    "abilities": {
      "0": "Rough Skin"
    },
    "name_jp": "キバニア"
  },
  "Cascoon": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 50,
      "at": 35,
      "df": 55,
      "sa": 25,
      "sd": 25,
      "sp": 15
    },
    "weightkg": 11.5,
    "abilities": {
      "0": "Shed Skin"
    },
    "nfe": true,
    "name_jp": "マユルド"
  },
  "Castform": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 70,
      "at": 70,
      "df": 70,
      "sa": 70,
      "sd": 70,
      "sp": 70
    },
    "weightkg": 0.8,
    "abilities": {
      "0": "Forecast"
    },
    "otherFormes": [
      "Castform-Rainy",
      "Castform-Snowy",
      "Castform-Sunny"
    ],
    "name_jp": "ポワルン"
  },
  "Castform-Rainy": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 70,
      "at": 70,
      "df": 70,
      "sa": 70,
      "sd": 70,
      "sp": 70
    },
    "weightkg": 0.8,
    "abilities": {
      "0": "Forecast"
    },
    "baseSpecies": "Castform",
    "name_jp": "ポワルン(たいよう)"
  },
  "Castform-Snowy": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 70,
      "at": 70,
      "df": 70,
      "sa": 70,
      "sd": 70,
      "sp": 70
    },
    "weightkg": 0.8,
    "abilities": {
      "0": "Forecast"
    },
    "baseSpecies": "Castform",
    "name_jp": "ポワルン(あまみず)"
  },
  "Castform-Sunny": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 70,
      "at": 70,
      "df": 70,
      "sa": 70,
      "sd": 70,
      "sp": 70
    },
    "weightkg": 0.8,
    "abilities": {
      "0": "Forecast"
    },
    "baseSpecies": "Castform",
    "name_jp": "ポワルン(ゆきぐも)"
  },
  "Chimecho": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 75,
      "at": 50,
      "df": 80,
      "sa": 95,
      "sd": 90,
      "sp": 65
    },
    "weightkg": 1,
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "チリーン"
  },
  "Clamperl": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 35,
      "at": 64,
      "df": 85,
      "sa": 74,
      "sd": 55,
      "sp": 32
    },
    "weightkg": 52.5,
    "nfe": true,
    "abilities": {
      "0": "Shell Armor"
    },
    "name_jp": "パールル"
  },
  "Claydol": {
    "types": [
      "Ground",
      "Psychic"
    ],
    "bs": {
      "hp": 60,
      "at": 70,
      "df": 105,
      "sa": 70,
      "sd": 120,
      "sp": 75
    },
    "weightkg": 108,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "name_jp": "ネンドール"
  },
  "Combusken": {
    "types": [
      "Fire",
      "Fighting"
    ],
    "bs": {
      "hp": 60,
      "at": 85,
      "df": 60,
      "sa": 85,
      "sd": 60,
      "sp": 55
    },
    "weightkg": 19.5,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "ワカシャモ"
  },
  "Corphish": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 43,
      "at": 80,
      "df": 65,
      "sa": 50,
      "sd": 35,
      "sp": 35
    },
    "weightkg": 11.5,
    "nfe": true,
    "abilities": {
      "0": "Hyper Cutter"
    },
    "name_jp": "ヘイガニ"
  },
  "Cradily": {
    "types": [
      "Rock",
      "Grass"
    ],
    "bs": {
      "hp": 86,
      "at": 81,
      "df": 97,
      "sa": 81,
      "sd": 107,
      "sp": 43
    },
    "weightkg": 60.4,
    "abilities": {
      "0": "Suction Cups"
    },
    "name_jp": "ユレイドル"
  },
  "Crawdaunt": {
    "types": [
      "Water",
      "Dark"
    ],
    "bs": {
      "hp": 63,
      "at": 120,
      "df": 85,
      "sa": 90,
      "sd": 55,
      "sp": 55
    },
    "weightkg": 32.8,
    "abilities": {
      "0": "Hyper Cutter"
    },
    "name_jp": "シザリガー"
  },
  "Delcatty": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 70,
      "at": 65,
      "df": 65,
      "sa": 55,
      "sd": 55,
      "sp": 90
    },
    "weightkg": 32.6,
    "abilities": {
      "0": "Cute Charm"
    },
    "name_jp": "エネコロロ"
  },
  "Deoxys": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 50,
      "at": 150,
      "df": 50,
      "sa": 150,
      "sd": 50,
      "sp": 150
    },
    "weightkg": 60.8,
    "abilities": {
      "0": "Pressure"
    },
    "gender": "N",
    "otherFormes": [
      "Deoxys-Attack",
      "Deoxys-Defense",
      "Deoxys-Speed"
    ],
    "name_jp": "デオキシス(ノーマル)"
  },
  "Deoxys-Attack": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 50,
      "at": 180,
      "df": 20,
      "sa": 180,
      "sd": 20,
      "sp": 150
    },
    "weightkg": 60.8,
    "abilities": {
      "0": "Pressure"
    },
    "gender": "N",
    "baseSpecies": "Deoxys",
    "name_jp": "デオキシス(アタック)"
  },
  "Deoxys-Defense": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 50,
      "at": 70,
      "df": 160,
      "sa": 70,
      "sd": 160,
      "sp": 90
    },
    "weightkg": 60.8,
    "abilities": {
      "0": "Pressure"
    },
    "gender": "N",
    "baseSpecies": "Deoxys",
    "name_jp": "デオキシス(ディフェンス)"
  },
  "Deoxys-Speed": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 50,
      "at": 95,
      "df": 90,
      "sa": 95,
      "sd": 90,
      "sp": 180
    },
    "weightkg": 60.8,
    "abilities": {
      "0": "Pressure"
    },
    "gender": "N",
    "baseSpecies": "Deoxys",
    "name_jp": "デオキシス(スピード)"
  },
  "Dusclops": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 40,
      "at": 70,
      "df": 130,
      "sa": 60,
      "sd": 130,
      "sp": 25
    },
    "weightkg": 30.6,
    "abilities": {
      "0": "Pressure"
    },
    "nfe": true,
    "name_jp": "サマヨール"
  },
  "Duskull": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 20,
      "at": 40,
      "df": 90,
      "sa": 30,
      "sd": 90,
      "sp": 25
    },
    "weightkg": 15,
    "nfe": true,
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "ヨマワル"
  },
  "Dustox": {
    "types": [
      "Bug",
      "Poison"
    ],
    "bs": {
      "hp": 60,
      "at": 50,
      "df": 70,
      "sa": 50,
      "sd": 90,
      "sp": 65
    },
    "weightkg": 31.6,
    "abilities": {
      "0": "Shield Dust"
    },
    "name_jp": "ドクケイル"
  },
  "Electrike": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 40,
      "at": 45,
      "df": 40,
      "sa": 65,
      "sd": 40,
      "sp": 65
    },
    "weightkg": 15.2,
    "nfe": true,
    "abilities": {
      "0": "Static"
    },
    "name_jp": "ラクライ"
  },
  "Exploud": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 104,
      "at": 91,
      "df": 63,
      "sa": 91,
      "sd": 73,
      "sp": 68
    },
    "weightkg": 84,
    "abilities": {
      "0": "Soundproof"
    },
    "name_jp": "バクオング"
  },
  "Feebas": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 20,
      "at": 15,
      "df": 20,
      "sa": 10,
      "sd": 55,
      "sp": 80
    },
    "weightkg": 7.4,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "ヒンバス"
  },
  "Flygon": {
    "types": [
      "Ground",
      "Dragon"
    ],
    "bs": {
      "hp": 80,
      "at": 100,
      "df": 80,
      "sa": 80,
      "sd": 80,
      "sp": 100
    },
    "weightkg": 82,
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "フライゴン"
  },
  "Gardevoir": {
    "types": [
      "Psychic",
      "Fairy"
    ],
    "bs": {
      "hp": 68,
      "at": 65,
      "df": 65,
      "sa": 125,
      "sd": 115,
      "sp": 80
    },
    "weightkg": 48.4,
    "abilities": {
      "0": "Synchronize"
    },
    "otherFormes": [
      "Gardevoir-Mega"
    ],
    "name_jp": "サーナイト"
  },
  "Glalie": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 80,
      "at": 80,
      "df": 80,
      "sa": 80,
      "sd": 80,
      "sp": 80
    },
    "weightkg": 256.5,
    "abilities": {
      "0": "Inner Focus"
    },
    "otherFormes": [
      "Glalie-Mega"
    ],
    "name_jp": "オニゴーリ"
  },
  "Gorebyss": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 55,
      "at": 84,
      "df": 105,
      "sa": 114,
      "sd": 75,
      "sp": 52
    },
    "weightkg": 22.6,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "サクラビス"
  },
  "Groudon": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 100,
      "at": 150,
      "df": 140,
      "sa": 100,
      "sd": 90,
      "sp": 90
    },
    "weightkg": 950,
    "abilities": {
      "0": "Drought"
    },
    "gender": "N",
    "otherFormes": [
      "Groudon-Primal"
    ],
    "name_jp": "グラードン"
  },
  "Grovyle": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 45,
      "sa": 85,
      "sd": 65,
      "sp": 95
    },
    "weightkg": 21.6,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "ジュプトル"
  },
  "Grumpig": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 80,
      "at": 45,
      "df": 65,
      "sa": 90,
      "sd": 110,
      "sp": 80
    },
    "weightkg": 71.5,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "ブーピッグ"
  },
  "Gulpin": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 70,
      "at": 43,
      "df": 53,
      "sa": 43,
      "sd": 53,
      "sp": 40
    },
    "weightkg": 10.3,
    "nfe": true,
    "abilities": {
      "0": "Liquid Ooze"
    },
    "name_jp": "ゴクリン"
  },
  "Hariyama": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 144,
      "at": 120,
      "df": 60,
      "sa": 40,
      "sd": 60,
      "sp": 50
    },
    "weightkg": 253.8,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "ハリテヤマ"
  },
  "Huntail": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 55,
      "at": 104,
      "df": 105,
      "sa": 94,
      "sd": 75,
      "sp": 52
    },
    "weightkg": 27,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "ハンテール"
  },
  "Illumise": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 65,
      "at": 47,
      "df": 75,
      "sa": 73,
      "sd": 85,
      "sp": 85
    },
    "abilities": {
      "0": "Oblivious"
    },
    "weightkg": 17.7,
    "name_jp": "イルミーゼ"
  },
  "Jirachi": {
    "types": [
      "Steel",
      "Psychic"
    ],
    "bs": {
      "hp": 100,
      "at": 100,
      "df": 100,
      "sa": 100,
      "sd": 100,
      "sp": 100
    },
    "weightkg": 1.1,
    "abilities": {
      "0": "Serene Grace"
    },
    "gender": "N",
    "name_jp": "ジラーチ"
  },
  "Kecleon": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 60,
      "at": 90,
      "df": 70,
      "sa": 60,
      "sd": 120,
      "sp": 40
    },
    "weightkg": 22,
    "abilities": {
      "0": "Color Change"
    },
    "name_jp": "カクレオン"
  },
  "Kirlia": {
    "types": [
      "Psychic",
      "Fairy"
    ],
    "bs": {
      "hp": 38,
      "at": 35,
      "df": 35,
      "sa": 65,
      "sd": 55,
      "sp": 50
    },
    "weightkg": 20.2,
    "nfe": true,
    "abilities": {
      "0": "Synchronize"
    },
    "name_jp": "キルリア"
  },
  "Kyogre": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 100,
      "at": 100,
      "df": 90,
      "sa": 150,
      "sd": 140,
      "sp": 90
    },
    "weightkg": 352,
    "abilities": {
      "0": "Drizzle"
    },
    "gender": "N",
    "otherFormes": [
      "Kyogre-Primal"
    ],
    "name_jp": "カイオーガ"
  },
  "Lairon": {
    "types": [
      "Steel",
      "Rock"
    ],
    "bs": {
      "hp": 60,
      "at": 90,
      "df": 140,
      "sa": 50,
      "sd": 50,
      "sp": 40
    },
    "weightkg": 120,
    "nfe": true,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "コドラ"
  },
  "Latias": {
    "types": [
      "Dragon",
      "Psychic"
    ],
    "bs": {
      "hp": 80,
      "at": 80,
      "df": 90,
      "sa": 110,
      "sd": 130,
      "sp": 110
    },
    "weightkg": 40,
    "abilities": {
      "0": "Levitate"
    },
    "otherFormes": [
      "Latias-Mega"
    ],
    "name_jp": "ラティアス"
  },
  "Latios": {
    "types": [
      "Dragon",
      "Psychic"
    ],
    "bs": {
      "hp": 80,
      "at": 90,
      "df": 80,
      "sa": 130,
      "sd": 110,
      "sp": 110
    },
    "weightkg": 60,
    "abilities": {
      "0": "Levitate"
    },
    "otherFormes": [
      "Latios-Mega"
    ],
    "name_jp": "ラティオス"
  },
  "Lileep": {
    "types": [
      "Rock",
      "Grass"
    ],
    "bs": {
      "hp": 66,
      "at": 41,
      "df": 77,
      "sa": 61,
      "sd": 87,
      "sp": 23
    },
    "weightkg": 23.8,
    "nfe": true,
    "abilities": {
      "0": "Suction Cups"
    },
    "name_jp": "リリーラ"
  },
  "Linoone": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 78,
      "at": 70,
      "df": 61,
      "sa": 50,
      "sd": 61,
      "sp": 100
    },
    "weightkg": 32.5,
    "abilities": {
      "0": "Pickup"
    },
    "otherFormes": [
      "Linoone-Galar"
    ],
    "name_jp": "マッスグマ"
  },
  "Lombre": {
    "types": [
      "Water",
      "Grass"
    ],
    "bs": {
      "hp": 60,
      "at": 50,
      "df": 50,
      "sa": 60,
      "sd": 70,
      "sp": 50
    },
    "weightkg": 32.5,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "ハスブレロ"
  },
  "Lotad": {
    "types": [
      "Water",
      "Grass"
    ],
    "bs": {
      "hp": 40,
      "at": 30,
      "df": 30,
      "sa": 40,
      "sd": 50,
      "sp": 30
    },
    "weightkg": 2.6,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "ハスボー"
  },
  "Loudred": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 84,
      "at": 71,
      "df": 43,
      "sa": 71,
      "sd": 43,
      "sp": 48
    },
    "weightkg": 40.5,
    "nfe": true,
    "abilities": {
      "0": "Soundproof"
    },
    "name_jp": "ドゴーム"
  },
  "Ludicolo": {
    "types": [
      "Water",
      "Grass"
    ],
    "bs": {
      "hp": 80,
      "at": 70,
      "df": 70,
      "sa": 90,
      "sd": 100,
      "sp": 70
    },
    "weightkg": 55,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "ルンパッパ"
  },
  "Lunatone": {
    "types": [
      "Rock",
      "Psychic"
    ],
    "bs": {
      "hp": 90,
      "at": 55,
      "df": 65,
      "sa": 95,
      "sd": 85,
      "sp": 70
    },
    "weightkg": 168,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "name_jp": "ルナトーン"
  },
  "Luvdisc": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 43,
      "at": 30,
      "df": 55,
      "sa": 40,
      "sd": 65,
      "sp": 97
    },
    "weightkg": 8.7,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "ラブカス"
  },
  "Makuhita": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 72,
      "at": 60,
      "df": 30,
      "sa": 20,
      "sd": 30,
      "sp": 25
    },
    "weightkg": 86.4,
    "nfe": true,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "マクノシタ"
  },
  "Manectric": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 70,
      "at": 75,
      "df": 60,
      "sa": 105,
      "sd": 60,
      "sp": 105
    },
    "weightkg": 40.2,
    "abilities": {
      "0": "Static"
    },
    "otherFormes": [
      "Manectric-Mega"
    ],
    "name_jp": "ライボルト"
  },
  "Marshtomp": {
    "types": [
      "Water",
      "Ground"
    ],
    "bs": {
      "hp": 70,
      "at": 85,
      "df": 70,
      "sa": 60,
      "sd": 70,
      "sp": 50
    },
    "weightkg": 28,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "ヌマクロー"
  },
  "Masquerain": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 70,
      "at": 60,
      "df": 62,
      "sa": 100,
      "sd": 82,
      "sp": 80
    },
    "weightkg": 3.6,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "アメモース"
  },
  "Mawile": {
    "types": [
      "Steel",
      "Fairy"
    ],
    "bs": {
      "hp": 50,
      "at": 85,
      "df": 85,
      "sa": 55,
      "sd": 55,
      "sp": 50
    },
    "weightkg": 11.5,
    "abilities": {
      "0": "Hyper Cutter"
    },
    "otherFormes": [
      "Mawile-Mega"
    ],
    "name_jp": "クチート"
  },
  "Medicham": {
    "types": [
      "Fighting",
      "Psychic"
    ],
    "bs": {
      "hp": 60,
      "at": 60,
      "df": 75,
      "sa": 60,
      "sd": 75,
      "sp": 80
    },
    "weightkg": 31.5,
    "abilities": {
      "0": "Pure Power"
    },
    "otherFormes": [
      "Medicham-Mega"
    ],
    "name_jp": "チャーレム"
  },
  "Meditite": {
    "types": [
      "Fighting",
      "Psychic"
    ],
    "bs": {
      "hp": 30,
      "at": 40,
      "df": 55,
      "sa": 40,
      "sd": 55,
      "sp": 60
    },
    "weightkg": 11.2,
    "nfe": true,
    "abilities": {
      "0": "Pure Power"
    },
    "name_jp": "アサナン"
  },
  "Metagross": {
    "types": [
      "Steel",
      "Psychic"
    ],
    "bs": {
      "hp": 80,
      "at": 135,
      "df": 130,
      "sa": 95,
      "sd": 90,
      "sp": 70
    },
    "weightkg": 550,
    "gender": "N",
    "abilities": {
      "0": "Clear Body"
    },
    "otherFormes": [
      "Metagross-Mega"
    ],
    "name_jp": "メタグロス"
  },
  "Metang": {
    "types": [
      "Steel",
      "Psychic"
    ],
    "bs": {
      "hp": 60,
      "at": 75,
      "df": 100,
      "sa": 55,
      "sd": 80,
      "sp": 50
    },
    "weightkg": 202.5,
    "nfe": true,
    "gender": "N",
    "abilities": {
      "0": "Clear Body"
    },
    "name_jp": "メタング"
  },
  "Mightyena": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 70,
      "at": 90,
      "df": 70,
      "sa": 60,
      "sd": 60,
      "sp": 70
    },
    "weightkg": 37,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "グラエナ"
  },
  "Milotic": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 95,
      "at": 60,
      "df": 79,
      "sa": 100,
      "sd": 125,
      "sp": 81
    },
    "weightkg": 162,
    "abilities": {
      "0": "Marvel Scale"
    },
    "name_jp": "ミロカロス"
  },
  "Minun": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 60,
      "at": 40,
      "df": 50,
      "sa": 75,
      "sd": 85,
      "sp": 95
    },
    "weightkg": 4.2,
    "abilities": {
      "0": "Minus"
    },
    "name_jp": "マイナン"
  },
  "Mudkip": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 70,
      "df": 50,
      "sa": 50,
      "sd": 50,
      "sp": 40
    },
    "weightkg": 7.6,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "ミズゴロウ"
  },
  "Nincada": {
    "types": [
      "Bug",
      "Ground"
    ],
    "bs": {
      "hp": 31,
      "at": 45,
      "df": 90,
      "sa": 30,
      "sd": 30,
      "sp": 40
    },
    "weightkg": 5.5,
    "nfe": true,
    "abilities": {
      "0": "Compound Eyes"
    },
    "name_jp": "ツチニン"
  },
  "Ninjask": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 61,
      "at": 90,
      "df": 45,
      "sa": 50,
      "sd": 50,
      "sp": 160
    },
    "weightkg": 12,
    "abilities": {
      "0": "Speed Boost"
    },
    "name_jp": "テッカニン"
  },
  "Nosepass": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 30,
      "at": 45,
      "df": 135,
      "sa": 45,
      "sd": 90,
      "sp": 30
    },
    "weightkg": 97,
    "abilities": {
      "0": "Sturdy"
    },
    "nfe": true,
    "name_jp": "ノズパス"
  },
  "Numel": {
    "types": [
      "Fire",
      "Ground"
    ],
    "bs": {
      "hp": 60,
      "at": 60,
      "df": 40,
      "sa": 65,
      "sd": 45,
      "sp": 35
    },
    "weightkg": 24,
    "nfe": true,
    "abilities": {
      "0": "Oblivious"
    },
    "name_jp": "ドンメル"
  },
  "Nuzleaf": {
    "types": [
      "Grass",
      "Dark"
    ],
    "bs": {
      "hp": 70,
      "at": 70,
      "df": 40,
      "sa": 60,
      "sd": 40,
      "sp": 60
    },
    "weightkg": 28,
    "nfe": true,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "コノハナ"
  },
  "Pelipper": {
    "types": [
      "Water",
      "Flying"
    ],
    "bs": {
      "hp": 60,
      "at": 50,
      "df": 100,
      "sa": 95,
      "sd": 70,
      "sp": 65
    },
    "weightkg": 28,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "ペリッパー"
  },
  "Plusle": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 60,
      "at": 50,
      "df": 40,
      "sa": 85,
      "sd": 75,
      "sp": 95
    },
    "weightkg": 4.2,
    "abilities": {
      "0": "Plus"
    },
    "name_jp": "プラスル"
  },
  "Poochyena": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 35,
      "at": 55,
      "df": 35,
      "sa": 30,
      "sd": 30,
      "sp": 35
    },
    "weightkg": 13.6,
    "nfe": true,
    "abilities": {
      "0": "Run Away"
    },
    "name_jp": "ポチエナ"
  },
  "Ralts": {
    "types": [
      "Psychic",
      "Fairy"
    ],
    "bs": {
      "hp": 28,
      "at": 25,
      "df": 25,
      "sa": 45,
      "sd": 35,
      "sp": 40
    },
    "weightkg": 6.6,
    "nfe": true,
    "abilities": {
      "0": "Synchronize"
    },
    "name_jp": "ラルトス"
  },
  "Rayquaza": {
    "types": [
      "Dragon",
      "Flying"
    ],
    "bs": {
      "hp": 105,
      "at": 150,
      "df": 90,
      "sa": 150,
      "sd": 90,
      "sp": 95
    },
    "weightkg": 206.5,
    "abilities": {
      "0": "Air Lock"
    },
    "gender": "N",
    "otherFormes": [
      "Rayquaza-Mega"
    ],
    "name_jp": "レックウザ"
  },
  "Regice": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 80,
      "at": 50,
      "df": 100,
      "sa": 100,
      "sd": 200,
      "sp": 50
    },
    "weightkg": 175,
    "gender": "N",
    "abilities": {
      "0": "Clear Body"
    },
    "name_jp": "レジアイス"
  },
  "Regirock": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 80,
      "at": 100,
      "df": 200,
      "sa": 50,
      "sd": 100,
      "sp": 50
    },
    "weightkg": 230,
    "gender": "N",
    "abilities": {
      "0": "Clear Body"
    },
    "name_jp": "レジロック"
  },
  "Registeel": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 80,
      "at": 75,
      "df": 150,
      "sa": 75,
      "sd": 150,
      "sp": 50
    },
    "weightkg": 205,
    "gender": "N",
    "abilities": {
      "0": "Clear Body"
    },
    "name_jp": "レジスチル"
  },
  "Relicanth": {
    "types": [
      "Water",
      "Rock"
    ],
    "bs": {
      "hp": 100,
      "at": 90,
      "df": 130,
      "sa": 45,
      "sd": 65,
      "sp": 55
    },
    "weightkg": 23.4,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "ジーランス"
  },
  "Roselia": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 50,
      "at": 60,
      "df": 45,
      "sa": 100,
      "sd": 80,
      "sp": 65
    },
    "weightkg": 2,
    "abilities": {
      "0": "Natural Cure"
    },
    "nfe": true,
    "name_jp": "ロゼリア"
  },
  "Sableye": {
    "types": [
      "Dark",
      "Ghost"
    ],
    "bs": {
      "hp": 50,
      "at": 75,
      "df": 75,
      "sa": 65,
      "sd": 65,
      "sp": 50
    },
    "weightkg": 11,
    "abilities": {
      "0": "Keen Eye"
    },
    "otherFormes": [
      "Sableye-Mega"
    ],
    "name_jp": "ヤミラミ"
  },
  "Salamence": {
    "types": [
      "Dragon",
      "Flying"
    ],
    "bs": {
      "hp": 95,
      "at": 135,
      "df": 80,
      "sa": 110,
      "sd": 80,
      "sp": 100
    },
    "weightkg": 102.6,
    "abilities": {
      "0": "Intimidate"
    },
    "otherFormes": [
      "Salamence-Mega"
    ],
    "name_jp": "ボーマンダ"
  },
  "Sceptile": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 70,
      "at": 85,
      "df": 65,
      "sa": 105,
      "sd": 85,
      "sp": 120
    },
    "weightkg": 52.2,
    "abilities": {
      "0": "Overgrow"
    },
    "otherFormes": [
      "Sceptile-Mega"
    ],
    "name_jp": "ジュカイン"
  },
  "Sealeo": {
    "types": [
      "Ice",
      "Water"
    ],
    "bs": {
      "hp": 90,
      "at": 60,
      "df": 70,
      "sa": 75,
      "sd": 70,
      "sp": 45
    },
    "weightkg": 87.6,
    "nfe": true,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "トドグラー"
  },
  "Seedot": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 40,
      "at": 40,
      "df": 50,
      "sa": 30,
      "sd": 30,
      "sp": 30
    },
    "weightkg": 4,
    "nfe": true,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "タネボー"
  },
  "Seviper": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 73,
      "at": 100,
      "df": 60,
      "sa": 100,
      "sd": 60,
      "sp": 65
    },
    "weightkg": 52.5,
    "abilities": {
      "0": "Shed Skin"
    },
    "name_jp": "ハブネーク"
  },
  "Sharpedo": {
    "types": [
      "Water",
      "Dark"
    ],
    "bs": {
      "hp": 70,
      "at": 120,
      "df": 40,
      "sa": 95,
      "sd": 40,
      "sp": 95
    },
    "weightkg": 88.8,
    "abilities": {
      "0": "Rough Skin"
    },
    "otherFormes": [
      "Sharpedo-Mega"
    ],
    "name_jp": "サメハダー"
  },
  "Shedinja": {
    "types": [
      "Bug",
      "Ghost"
    ],
    "bs": {
      "hp": 1,
      "at": 90,
      "df": 45,
      "sa": 30,
      "sd": 30,
      "sp": 40
    },
    "weightkg": 1.2,
    "abilities": {
      "0": "Wonder Guard"
    },
    "gender": "N",
    "name_jp": "ヌケニン"
  },
  "Shelgon": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 65,
      "at": 95,
      "df": 100,
      "sa": 60,
      "sd": 50,
      "sp": 50
    },
    "weightkg": 110.5,
    "nfe": true,
    "abilities": {
      "0": "Rock Head"
    },
    "name_jp": "コモルー"
  },
  "Shiftry": {
    "types": [
      "Grass",
      "Dark"
    ],
    "bs": {
      "hp": 90,
      "at": 100,
      "df": 60,
      "sa": 90,
      "sd": 60,
      "sp": 80
    },
    "weightkg": 59.6,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "ダーテング"
  },
  "Shroomish": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 60,
      "at": 40,
      "df": 60,
      "sa": 40,
      "sd": 60,
      "sp": 35
    },
    "weightkg": 4.5,
    "nfe": true,
    "abilities": {
      "0": "Effect Spore"
    },
    "name_jp": "キノココ"
  },
  "Shuppet": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 44,
      "at": 75,
      "df": 35,
      "sa": 63,
      "sd": 33,
      "sp": 45
    },
    "weightkg": 2.3,
    "nfe": true,
    "abilities": {
      "0": "Insomnia"
    },
    "name_jp": "カゲボウズ"
  },
  "Silcoon": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 50,
      "at": 35,
      "df": 55,
      "sa": 25,
      "sd": 25,
      "sp": 15
    },
    "weightkg": 10,
    "abilities": {
      "0": "Shed Skin"
    },
    "nfe": true,
    "name_jp": "カラサリス"
  },
  "Skitty": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 50,
      "at": 45,
      "df": 45,
      "sa": 35,
      "sd": 35,
      "sp": 50
    },
    "weightkg": 11,
    "nfe": true,
    "abilities": {
      "0": "Cute Charm"
    },
    "name_jp": "エネコ"
  },
  "Slaking": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 150,
      "at": 160,
      "df": 100,
      "sa": 95,
      "sd": 65,
      "sp": 100
    },
    "weightkg": 130.5,
    "abilities": {
      "0": "Truant"
    },
    "name_jp": "ケッキング"
  },
  "Slakoth": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 60,
      "at": 60,
      "df": 60,
      "sa": 35,
      "sd": 35,
      "sp": 30
    },
    "weightkg": 24,
    "abilities": {
      "0": "Truant"
    },
    "nfe": true,
    "name_jp": "ナマケロ"
  },
  "Snorunt": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 50,
      "at": 50,
      "df": 50,
      "sa": 50,
      "sd": 50,
      "sp": 50
    },
    "weightkg": 16.8,
    "nfe": true,
    "abilities": {
      "0": "Inner Focus"
    },
    "name_jp": "ユキワラシ"
  },
  "Solrock": {
    "types": [
      "Rock",
      "Psychic"
    ],
    "bs": {
      "hp": 90,
      "at": 95,
      "df": 85,
      "sa": 55,
      "sd": 65,
      "sp": 70
    },
    "weightkg": 154,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "name_jp": "ソルロック"
  },
  "Spheal": {
    "types": [
      "Ice",
      "Water"
    ],
    "bs": {
      "hp": 70,
      "at": 40,
      "df": 50,
      "sa": 55,
      "sd": 50,
      "sp": 25
    },
    "weightkg": 39.5,
    "nfe": true,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "タマザラシ"
  },
  "Spinda": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 60,
      "at": 60,
      "df": 60,
      "sa": 60,
      "sd": 60,
      "sp": 60
    },
    "weightkg": 5,
    "abilities": {
      "0": "Own Tempo"
    },
    "name_jp": "パッチール"
  },
  "Spoink": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 60,
      "at": 25,
      "df": 35,
      "sa": 70,
      "sd": 80,
      "sp": 60
    },
    "weightkg": 30.6,
    "nfe": true,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "バネブー"
  },
  "Surskit": {
    "types": [
      "Bug",
      "Water"
    ],
    "bs": {
      "hp": 40,
      "at": 30,
      "df": 32,
      "sa": 50,
      "sd": 52,
      "sp": 65
    },
    "weightkg": 1.7,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "アメタマ"
  },
  "Swablu": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 45,
      "at": 40,
      "df": 60,
      "sa": 40,
      "sd": 75,
      "sp": 50
    },
    "weightkg": 1.2,
    "nfe": true,
    "abilities": {
      "0": "Natural Cure"
    },
    "name_jp": "チルット"
  },
  "Swalot": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 100,
      "at": 73,
      "df": 83,
      "sa": 73,
      "sd": 83,
      "sp": 55
    },
    "weightkg": 80,
    "abilities": {
      "0": "Liquid Ooze"
    },
    "name_jp": "マルノーム"
  },
  "Swampert": {
    "types": [
      "Water",
      "Ground"
    ],
    "bs": {
      "hp": 100,
      "at": 110,
      "df": 90,
      "sa": 85,
      "sd": 90,
      "sp": 60
    },
    "weightkg": 81.9,
    "abilities": {
      "0": "Torrent"
    },
    "otherFormes": [
      "Swampert-Mega"
    ],
    "name_jp": "ラグラージ"
  },
  "Swellow": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 60,
      "at": 85,
      "df": 60,
      "sa": 75,
      "sd": 50,
      "sp": 125
    },
    "weightkg": 19.8,
    "abilities": {
      "0": "Guts"
    },
    "name_jp": "オオスバメ"
  },
  "Taillow": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 40,
      "at": 55,
      "df": 30,
      "sa": 30,
      "sd": 30,
      "sp": 85
    },
    "weightkg": 2.3,
    "nfe": true,
    "abilities": {
      "0": "Guts"
    },
    "name_jp": "スバメ"
  },
  "Torchic": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 45,
      "at": 60,
      "df": 40,
      "sa": 70,
      "sd": 50,
      "sp": 45
    },
    "weightkg": 2.5,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "アチャモ"
  },
  "Torkoal": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 70,
      "at": 85,
      "df": 140,
      "sa": 85,
      "sd": 70,
      "sp": 20
    },
    "weightkg": 80.4,
    "abilities": {
      "0": "White Smoke"
    },
    "name_jp": "コータス"
  },
  "Trapinch": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 45,
      "at": 100,
      "df": 45,
      "sa": 45,
      "sd": 45,
      "sp": 10
    },
    "weightkg": 15,
    "nfe": true,
    "abilities": {
      "0": "Hyper Cutter"
    },
    "name_jp": "ナックラー"
  },
  "Treecko": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 40,
      "at": 45,
      "df": 35,
      "sa": 65,
      "sd": 55,
      "sp": 70
    },
    "weightkg": 5,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "キモリ"
  },
  "Tropius": {
    "types": [
      "Grass",
      "Flying"
    ],
    "bs": {
      "hp": 99,
      "at": 68,
      "df": 83,
      "sa": 72,
      "sd": 87,
      "sp": 51
    },
    "weightkg": 100,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "トロピウス"
  },
  "Vibrava": {
    "types": [
      "Ground",
      "Dragon"
    ],
    "bs": {
      "hp": 50,
      "at": 70,
      "df": 50,
      "sa": 50,
      "sd": 50,
      "sp": 70
    },
    "weightkg": 15.3,
    "abilities": {
      "0": "Levitate"
    },
    "nfe": true,
    "name_jp": "ビブラーバ"
  },
  "Vigoroth": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 80,
      "at": 80,
      "df": 80,
      "sa": 55,
      "sd": 55,
      "sp": 90
    },
    "weightkg": 46.5,
    "abilities": {
      "0": "Vital Spirit"
    },
    "nfe": true,
    "name_jp": "ヤルキモノ"
  },
  "Volbeat": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 65,
      "at": 73,
      "df": 75,
      "sa": 47,
      "sd": 85,
      "sp": 85
    },
    "weightkg": 17.7,
    "abilities": {
      "0": "Illuminate"
    },
    "name_jp": "バルビート"
  },
  "Wailmer": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 130,
      "at": 70,
      "df": 35,
      "sa": 70,
      "sd": 35,
      "sp": 60
    },
    "weightkg": 130,
    "nfe": true,
    "abilities": {
      "0": "Water Veil"
    },
    "name_jp": "ホエルコ"
  },
  "Wailord": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 170,
      "at": 90,
      "df": 45,
      "sa": 90,
      "sd": 45,
      "sp": 60
    },
    "weightkg": 398,
    "abilities": {
      "0": "Water Veil"
    },
    "name_jp": "ホエルオー"
  },
  "Walrein": {
    "types": [
      "Ice",
      "Water"
    ],
    "bs": {
      "hp": 110,
      "at": 80,
      "df": 90,
      "sa": 95,
      "sd": 90,
      "sp": 65
    },
    "weightkg": 150.6,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "トドゼルガ"
  },
  "Whiscash": {
    "types": [
      "Water",
      "Ground"
    ],
    "bs": {
      "hp": 110,
      "at": 78,
      "df": 73,
      "sa": 76,
      "sd": 71,
      "sp": 60
    },
    "weightkg": 23.6,
    "abilities": {
      "0": "Oblivious"
    },
    "name_jp": "ナマズン"
  },
  "Whismur": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 64,
      "at": 51,
      "df": 23,
      "sa": 51,
      "sd": 23,
      "sp": 28
    },
    "weightkg": 16.3,
    "nfe": true,
    "abilities": {
      "0": "Soundproof"
    },
    "name_jp": "ゴニョニョ"
  },
  "Wingull": {
    "types": [
      "Water",
      "Flying"
    ],
    "bs": {
      "hp": 40,
      "at": 30,
      "df": 30,
      "sa": 55,
      "sd": 30,
      "sp": 85
    },
    "weightkg": 9.5,
    "nfe": true,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "キャモメ"
  },
  "Wurmple": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 45,
      "at": 45,
      "df": 35,
      "sa": 20,
      "sd": 30,
      "sp": 20
    },
    "weightkg": 3.6,
    "nfe": true,
    "abilities": {
      "0": "Shield Dust"
    },
    "name_jp": "ケムッソ"
  },
  "Wynaut": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 95,
      "at": 23,
      "df": 48,
      "sa": 23,
      "sd": 48,
      "sp": 23
    },
    "weightkg": 14,
    "nfe": true,
    "abilities": {
      "0": "Shadow Tag"
    },
    "name_jp": "ソーナノ"
  },
  "Zangoose": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 73,
      "at": 115,
      "df": 60,
      "sa": 60,
      "sd": 60,
      "sp": 90
    },
    "weightkg": 40.3,
    "abilities": {
      "0": "Immunity"
    },
    "name_jp": "ザングース"
  },
  "Zigzagoon": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 38,
      "at": 30,
      "df": 41,
      "sa": 30,
      "sd": 41,
      "sp": 60
    },
    "weightkg": 17.5,
    "nfe": true,
    "abilities": {
      "0": "Pickup"
    },
    "otherFormes": [
      "Zigzagoon-Galar"
    ],
    "name_jp": "ジグザグマ"
  },
  "Abomasnow": {
    "types": [
      "Grass",
      "Ice"
    ],
    "bs": {
      "hp": 90,
      "at": 92,
      "df": 75,
      "sa": 92,
      "sd": 85,
      "sp": 60
    },
    "weightkg": 135.5,
    "abilities": {
      "0": "Snow Warning"
    },
    "otherFormes": [
      "Abomasnow-Mega"
    ],
    "name_jp": "ユキノオー"
  },
  "Ambipom": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 75,
      "at": 100,
      "df": 66,
      "sa": 60,
      "sd": 66,
      "sp": 115
    },
    "weightkg": 20.3,
    "abilities": {
      "0": "Technician"
    },
    "name_jp": "エテボース"
  },
  "Arceus": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "otherFormes": [
      "Arceus-Bug",
      "Arceus-Dark",
      "Arceus-Dragon",
      "Arceus-Electric",
      "Arceus-Fairy",
      "Arceus-Fighting",
      "Arceus-Fire",
      "Arceus-Flying",
      "Arceus-Ghost",
      "Arceus-Grass",
      "Arceus-Ground",
      "Arceus-Ice",
      "Arceus-Poison",
      "Arceus-Psychic",
      "Arceus-Rock",
      "Arceus-Steel",
      "Arceus-Water"
    ],
    "name_jp": "アルセウス"
  },
  "Arceus-Bug": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス"
  },
  "Arceus-Dark": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(あく)"
  },
  "Arceus-Dragon": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(ドラゴン)"
  },
  "Arceus-Electric": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(でんき)"
  },
  "Arceus-Fighting": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(かくとう)"
  },
  "Arceus-Fire": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(ほのお)"
  },
  "Arceus-Flying": {
    "types": [
      "Flying"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(ひこう)"
  },
  "Arceus-Ghost": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(ゴースト)"
  },
  "Arceus-Grass": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(くさ)"
  },
  "Arceus-Ground": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(じめん)"
  },
  "Arceus-Ice": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(こおり)"
  },
  "Arceus-Poison": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(どく)"
  },
  "Arceus-Psychic": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(エスパー)"
  },
  "Arceus-Rock": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(いわ)"
  },
  "Arceus-Steel": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(はがね)"
  },
  "Arceus-Water": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "gender": "N",
    "baseSpecies": "Arceus",
    "name_jp": "アルセウス(みず)"
  },
  "Azelf": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 75,
      "at": 125,
      "df": 70,
      "sa": 125,
      "sd": 70,
      "sp": 115
    },
    "weightkg": 0.3,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "name_jp": "アグノム"
  },
  "Bastiodon": {
    "types": [
      "Rock",
      "Steel"
    ],
    "bs": {
      "hp": 60,
      "at": 52,
      "df": 168,
      "sa": 47,
      "sd": 138,
      "sp": 30
    },
    "weightkg": 149.5,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "トリデプス"
  },
  "Bibarel": {
    "types": [
      "Normal",
      "Water"
    ],
    "bs": {
      "hp": 79,
      "at": 85,
      "df": 60,
      "sa": 55,
      "sd": 60,
      "sp": 71
    },
    "weightkg": 31.5,
    "abilities": {
      "0": "Simple"
    },
    "name_jp": "ビーダル"
  },
  "Bidoof": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 59,
      "at": 45,
      "df": 40,
      "sa": 35,
      "sd": 40,
      "sp": 31
    },
    "weightkg": 20,
    "nfe": true,
    "abilities": {
      "0": "Simple"
    },
    "name_jp": "ビッパ"
  },
  "Bonsly": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 50,
      "at": 80,
      "df": 95,
      "sa": 10,
      "sd": 45,
      "sp": 10
    },
    "weightkg": 15,
    "nfe": true,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "ウソハチ"
  },
  "Bronzong": {
    "types": [
      "Steel",
      "Psychic"
    ],
    "bs": {
      "hp": 67,
      "at": 89,
      "df": 116,
      "sa": 79,
      "sd": 116,
      "sp": 33
    },
    "weightkg": 187,
    "gender": "N",
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "ドータクン"
  },
  "Bronzor": {
    "types": [
      "Steel",
      "Psychic"
    ],
    "bs": {
      "hp": 57,
      "at": 24,
      "df": 86,
      "sa": 24,
      "sd": 86,
      "sp": 23
    },
    "weightkg": 60.5,
    "nfe": true,
    "gender": "N",
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "ドーミラー"
  },
  "Budew": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 40,
      "at": 30,
      "df": 35,
      "sa": 50,
      "sd": 70,
      "sp": 55
    },
    "weightkg": 1.2,
    "nfe": true,
    "abilities": {
      "0": "Natural Cure"
    },
    "name_jp": "スボミー"
  },
  "Buizel": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 55,
      "at": 65,
      "df": 35,
      "sa": 60,
      "sd": 30,
      "sp": 85
    },
    "weightkg": 29.5,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "ブイゼル"
  },
  "Buneary": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 55,
      "at": 66,
      "df": 44,
      "sa": 44,
      "sd": 56,
      "sp": 85
    },
    "weightkg": 5.5,
    "nfe": true,
    "abilities": {
      "0": "Run Away"
    },
    "name_jp": "ミミロル"
  },
  "Burmy": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 40,
      "at": 29,
      "df": 45,
      "sa": 29,
      "sd": 45,
      "sp": 36
    },
    "weightkg": 3.4,
    "nfe": true,
    "abilities": {
      "0": "Shed Skin"
    },
    "name_jp": "ミノムッチ"
  },
  "Carnivine": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 74,
      "at": 100,
      "df": 72,
      "sa": 90,
      "sd": 72,
      "sp": 46
    },
    "weightkg": 27,
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "マスキッパ"
  },
  "Chatot": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 76,
      "at": 65,
      "df": 45,
      "sa": 92,
      "sd": 42,
      "sp": 91
    },
    "weightkg": 1.9,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "ペラップ"
  },
  "Cherrim": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 70,
      "at": 60,
      "df": 70,
      "sa": 87,
      "sd": 78,
      "sp": 85
    },
    "weightkg": 9.3,
    "abilities": {
      "0": "Flower Gift"
    },
    "otherFormes": [
      "Cherrim-Sunshine"
    ],
    "name_jp": "チェリム"
  },
  "Cherrim-Sunshine": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 70,
      "at": 60,
      "df": 70,
      "sa": 87,
      "sd": 78,
      "sp": 85
    },
    "weightkg": 9.3,
    "abilities": {
      "0": "Flower Gift"
    },
    "baseSpecies": "Cherrim",
    "name_jp": "チェリム"
  },
  "Cherubi": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 45,
      "at": 35,
      "df": 45,
      "sa": 62,
      "sd": 53,
      "sp": 35
    },
    "weightkg": 3.3,
    "abilities": {
      "0": "Chlorophyll"
    },
    "nfe": true,
    "name_jp": "チェリンボ"
  },
  "Chimchar": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 44,
      "at": 58,
      "df": 44,
      "sa": 58,
      "sd": 44,
      "sp": 61
    },
    "weightkg": 6.2,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "ヒコザル"
  },
  "Chingling": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 45,
      "at": 30,
      "df": 50,
      "sa": 65,
      "sd": 50,
      "sp": 45
    },
    "weightkg": 0.6,
    "abilities": {
      "0": "Levitate"
    },
    "nfe": true,
    "name_jp": "リーシャン"
  },
  "Combee": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 30,
      "at": 30,
      "df": 42,
      "sa": 30,
      "sd": 42,
      "sp": 70
    },
    "weightkg": 5.5,
    "nfe": true,
    "abilities": {
      "0": "Honey Gather"
    },
    "name_jp": "ミツハニー"
  },
  "Cranidos": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 67,
      "at": 125,
      "df": 40,
      "sa": 30,
      "sd": 30,
      "sp": 58
    },
    "weightkg": 31.5,
    "nfe": true,
    "abilities": {
      "0": "Mold Breaker"
    },
    "name_jp": "ズガイドス"
  },
  "Cresselia": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 120,
      "at": 70,
      "df": 110,
      "sa": 75,
      "sd": 120,
      "sp": 85
    },
    "weightkg": 85.6,
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "クレセリア"
  },
  "Croagunk": {
    "types": [
      "Poison",
      "Fighting"
    ],
    "bs": {
      "hp": 48,
      "at": 61,
      "df": 40,
      "sa": 61,
      "sd": 40,
      "sp": 50
    },
    "weightkg": 23,
    "nfe": true,
    "abilities": {
      "0": "Anticipation"
    },
    "name_jp": "グレッグル"
  },
  "Darkrai": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 70,
      "at": 90,
      "df": 90,
      "sa": 135,
      "sd": 90,
      "sp": 125
    },
    "weightkg": 50.5,
    "abilities": {
      "0": "Bad Dreams"
    },
    "gender": "N",
    "name_jp": "ダークライ"
  },
  "Dialga": {
    "types": [
      "Steel",
      "Dragon"
    ],
    "bs": {
      "hp": 100,
      "at": 120,
      "df": 120,
      "sa": 150,
      "sd": 100,
      "sp": 90
    },
    "weightkg": 683,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "otherFormes": [
      "Dialga-Origin"
    ],
    "name_jp": "ディアルガ"
  },
  "Drapion": {
    "types": [
      "Poison",
      "Dark"
    ],
    "bs": {
      "hp": 70,
      "at": 90,
      "df": 110,
      "sa": 60,
      "sd": 75,
      "sp": 95
    },
    "weightkg": 61.5,
    "abilities": {
      "0": "Battle Armor"
    },
    "name_jp": "ドラピオン"
  },
  "Drifblim": {
    "types": [
      "Ghost",
      "Flying"
    ],
    "bs": {
      "hp": 150,
      "at": 80,
      "df": 44,
      "sa": 90,
      "sd": 54,
      "sp": 80
    },
    "weightkg": 15,
    "abilities": {
      "0": "Aftermath"
    },
    "name_jp": "フワライド"
  },
  "Drifloon": {
    "types": [
      "Ghost",
      "Flying"
    ],
    "bs": {
      "hp": 90,
      "at": 50,
      "df": 34,
      "sa": 60,
      "sd": 44,
      "sp": 70
    },
    "weightkg": 1.2,
    "nfe": true,
    "abilities": {
      "0": "Aftermath"
    },
    "name_jp": "フワンテ"
  },
  "Dusknoir": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 45,
      "at": 100,
      "df": 135,
      "sa": 65,
      "sd": 135,
      "sp": 45
    },
    "weightkg": 106.6,
    "abilities": {
      "0": "Pressure"
    },
    "name_jp": "ヨノワール"
  },
  "Electivire": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 75,
      "at": 123,
      "df": 67,
      "sa": 95,
      "sd": 85,
      "sp": 95
    },
    "weightkg": 138.6,
    "abilities": {
      "0": "Motor Drive"
    },
    "name_jp": "エレキブル"
  },
  "Empoleon": {
    "types": [
      "Water",
      "Steel"
    ],
    "bs": {
      "hp": 84,
      "at": 86,
      "df": 88,
      "sa": 111,
      "sd": 101,
      "sp": 60
    },
    "weightkg": 84.5,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "エンペルト"
  },
  "Finneon": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 49,
      "at": 49,
      "df": 56,
      "sa": 49,
      "sd": 61,
      "sp": 66
    },
    "weightkg": 7,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "ケイコウオ"
  },
  "Floatzel": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 85,
      "at": 105,
      "df": 55,
      "sa": 85,
      "sd": 50,
      "sp": 115
    },
    "weightkg": 33.5,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "フローゼル"
  },
  "Froslass": {
    "types": [
      "Ice",
      "Ghost"
    ],
    "bs": {
      "hp": 70,
      "at": 80,
      "df": 70,
      "sa": 80,
      "sd": 70,
      "sp": 110
    },
    "weightkg": 26.6,
    "abilities": {
      "0": "Snow Cloak"
    },
    "name_jp": "ユキメノコ"
  },
  "Gabite": {
    "types": [
      "Dragon",
      "Ground"
    ],
    "bs": {
      "hp": 68,
      "at": 90,
      "df": 65,
      "sa": 50,
      "sd": 55,
      "sp": 82
    },
    "weightkg": 56,
    "nfe": true,
    "abilities": {
      "0": "Sand Veil"
    },
    "name_jp": "ガバイト"
  },
  "Gallade": {
    "types": [
      "Psychic",
      "Fighting"
    ],
    "bs": {
      "hp": 68,
      "at": 125,
      "df": 65,
      "sa": 65,
      "sd": 115,
      "sp": 80
    },
    "weightkg": 52,
    "abilities": {
      "0": "Steadfast"
    },
    "otherFormes": [
      "Gallade-Mega"
    ],
    "name_jp": "エルレイド"
  },
  "Garchomp": {
    "types": [
      "Dragon",
      "Ground"
    ],
    "bs": {
      "hp": 108,
      "at": 130,
      "df": 95,
      "sa": 80,
      "sd": 85,
      "sp": 102
    },
    "weightkg": 95,
    "abilities": {
      "0": "Sand Veil"
    },
    "otherFormes": [
      "Garchomp-Mega"
    ],
    "name_jp": "ガブリアス"
  },
  "Gastrodon": {
    "types": [
      "Water",
      "Ground"
    ],
    "bs": {
      "hp": 111,
      "at": 83,
      "df": 68,
      "sa": 92,
      "sd": 82,
      "sp": 39
    },
    "weightkg": 29.9,
    "abilities": {
      "0": "Sticky Hold"
    },
    "name_jp": "トリトドン"
  },
  "Gible": {
    "types": [
      "Dragon",
      "Ground"
    ],
    "bs": {
      "hp": 58,
      "at": 70,
      "df": 45,
      "sa": 40,
      "sd": 45,
      "sp": 42
    },
    "weightkg": 20.5,
    "nfe": true,
    "abilities": {
      "0": "Sand Veil"
    },
    "name_jp": "フカマル"
  },
  "Giratina": {
    "types": [
      "Ghost",
      "Dragon"
    ],
    "bs": {
      "hp": 150,
      "at": 100,
      "df": 120,
      "sa": 100,
      "sd": 120,
      "sp": 90
    },
    "weightkg": 750,
    "gender": "N",
    "otherFormes": [
      "Giratina-Origin"
    ],
    "abilities": {
      "0": "Pressure"
    },
    "name_jp": "ギラティナ"
  },
  "Giratina-Origin": {
    "types": [
      "Ghost",
      "Dragon"
    ],
    "bs": {
      "hp": 150,
      "at": 120,
      "df": 100,
      "sa": 120,
      "sd": 100,
      "sp": 90
    },
    "weightkg": 650,
    "gender": "N",
    "abilities": {
      "0": "Levitate"
    },
    "baseSpecies": "Giratina",
    "name_jp": "ギラティナ(オリジンフォルム)"
  },
  "Glaceon": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 65,
      "at": 60,
      "df": 110,
      "sa": 130,
      "sd": 95,
      "sp": 65
    },
    "weightkg": 25.9,
    "abilities": {
      "0": "Snow Cloak"
    },
    "name_jp": "グレイシア"
  },
  "Glameow": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 49,
      "at": 55,
      "df": 42,
      "sa": 42,
      "sd": 37,
      "sp": 85
    },
    "weightkg": 3.9,
    "nfe": true,
    "abilities": {
      "0": "Limber"
    },
    "name_jp": "ニャルマー"
  },
  "Gliscor": {
    "types": [
      "Ground",
      "Flying"
    ],
    "bs": {
      "hp": 75,
      "at": 95,
      "df": 125,
      "sa": 45,
      "sd": 75,
      "sp": 95
    },
    "weightkg": 42.5,
    "abilities": {
      "0": "Hyper Cutter"
    },
    "name_jp": "グライオン"
  },
  "Grotle": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 75,
      "at": 89,
      "df": 85,
      "sa": 55,
      "sd": 65,
      "sp": 36
    },
    "weightkg": 97,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "ハヤシガメ"
  },
  "Happiny": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 100,
      "at": 5,
      "df": 5,
      "sa": 15,
      "sd": 65,
      "sp": 30
    },
    "weightkg": 24.4,
    "nfe": true,
    "abilities": {
      "0": "Natural Cure"
    },
    "name_jp": "ピンプク"
  },
  "Heatran": {
    "types": [
      "Fire",
      "Steel"
    ],
    "bs": {
      "hp": 91,
      "at": 90,
      "df": 106,
      "sa": 130,
      "sd": 106,
      "sp": 77
    },
    "weightkg": 430,
    "abilities": {
      "0": "Flash Fire"
    },
    "name_jp": "ヒードラン"
  },
  "Hippopotas": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 68,
      "at": 72,
      "df": 78,
      "sa": 38,
      "sd": 42,
      "sp": 32
    },
    "weightkg": 49.5,
    "nfe": true,
    "abilities": {
      "0": "Sand Stream"
    },
    "name_jp": "ヒポポタス"
  },
  "Hippowdon": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 108,
      "at": 112,
      "df": 118,
      "sa": 68,
      "sd": 72,
      "sp": 47
    },
    "weightkg": 300,
    "abilities": {
      "0": "Sand Stream"
    },
    "name_jp": "カバルドン"
  },
  "Honchkrow": {
    "types": [
      "Dark",
      "Flying"
    ],
    "bs": {
      "hp": 100,
      "at": 125,
      "df": 52,
      "sa": 105,
      "sd": 52,
      "sp": 71
    },
    "weightkg": 27.3,
    "abilities": {
      "0": "Insomnia"
    },
    "name_jp": "ドンカラス"
  },
  "Infernape": {
    "types": [
      "Fire",
      "Fighting"
    ],
    "bs": {
      "hp": 76,
      "at": 104,
      "df": 71,
      "sa": 104,
      "sd": 71,
      "sp": 108
    },
    "weightkg": 55,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "ゴウカザル"
  },
  "Kricketot": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 37,
      "at": 25,
      "df": 41,
      "sa": 25,
      "sd": 41,
      "sp": 25
    },
    "weightkg": 2.2,
    "nfe": true,
    "abilities": {
      "0": "Shed Skin"
    },
    "name_jp": "コロボーシ"
  },
  "Kricketune": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 77,
      "at": 85,
      "df": 51,
      "sa": 55,
      "sd": 51,
      "sp": 65
    },
    "weightkg": 25.5,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "コロトック"
  },
  "Leafeon": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 65,
      "at": 110,
      "df": 130,
      "sa": 60,
      "sd": 65,
      "sp": 95
    },
    "weightkg": 25.5,
    "abilities": {
      "0": "Leaf Guard"
    },
    "name_jp": "リーフィア"
  },
  "Lickilicky": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 110,
      "at": 85,
      "df": 95,
      "sa": 80,
      "sd": 95,
      "sp": 50
    },
    "weightkg": 140,
    "abilities": {
      "0": "Own Tempo"
    },
    "name_jp": "ベロベルト"
  },
  "Lopunny": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 65,
      "at": 76,
      "df": 84,
      "sa": 54,
      "sd": 96,
      "sp": 105
    },
    "weightkg": 33.3,
    "abilities": {
      "0": "Cute Charm"
    },
    "otherFormes": [
      "Lopunny-Mega"
    ],
    "name_jp": "ミミロップ"
  },
  "Lucario": {
    "types": [
      "Fighting",
      "Steel"
    ],
    "bs": {
      "hp": 70,
      "at": 110,
      "df": 70,
      "sa": 115,
      "sd": 70,
      "sp": 90
    },
    "weightkg": 54,
    "abilities": {
      "0": "Steadfast"
    },
    "otherFormes": [
      "Lucario-Mega"
    ],
    "name_jp": "ルカリオ"
  },
  "Lumineon": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 69,
      "at": 69,
      "df": 76,
      "sa": 69,
      "sd": 86,
      "sp": 91
    },
    "weightkg": 24,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "ネオラント"
  },
  "Luxio": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 60,
      "at": 85,
      "df": 49,
      "sa": 60,
      "sd": 49,
      "sp": 60
    },
    "weightkg": 30.5,
    "nfe": true,
    "abilities": {
      "0": "Rivalry"
    },
    "name_jp": "ルクシオ"
  },
  "Luxray": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 79,
      "sa": 95,
      "sd": 79,
      "sp": 70
    },
    "weightkg": 42,
    "abilities": {
      "0": "Rivalry"
    },
    "name_jp": "レントラー"
  },
  "Magmortar": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 75,
      "at": 95,
      "df": 67,
      "sa": 125,
      "sd": 95,
      "sp": 83
    },
    "weightkg": 68,
    "abilities": {
      "0": "Flame Body"
    },
    "name_jp": "ブーバーン"
  },
  "Magnezone": {
    "types": [
      "Electric",
      "Steel"
    ],
    "bs": {
      "hp": 70,
      "at": 70,
      "df": 115,
      "sa": 130,
      "sd": 90,
      "sp": 60
    },
    "weightkg": 180,
    "gender": "N",
    "abilities": {
      "0": "Magnet Pull"
    },
    "name_jp": "ジバコイル"
  },
  "Mamoswine": {
    "types": [
      "Ice",
      "Ground"
    ],
    "bs": {
      "hp": 110,
      "at": 130,
      "df": 80,
      "sa": 70,
      "sd": 60,
      "sp": 80
    },
    "weightkg": 291,
    "abilities": {
      "0": "Oblivious"
    },
    "name_jp": "マンムー"
  },
  "Manaphy": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 100,
      "at": 100,
      "df": 100,
      "sa": 100,
      "sd": 100,
      "sp": 100
    },
    "weightkg": 1.4,
    "abilities": {
      "0": "Hydration"
    },
    "gender": "N",
    "name_jp": "マナフィ"
  },
  "Mantyke": {
    "types": [
      "Water",
      "Flying"
    ],
    "bs": {
      "hp": 45,
      "at": 20,
      "df": 50,
      "sa": 60,
      "sd": 120,
      "sp": 50
    },
    "weightkg": 65,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "タマンタ"
  },
  "Mesprit": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 80,
      "at": 105,
      "df": 105,
      "sa": 105,
      "sd": 105,
      "sp": 80
    },
    "weightkg": 0.3,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "name_jp": "エムリット"
  },
  "Mime Jr.": {
    "types": [
      "Psychic",
      "Fairy"
    ],
    "bs": {
      "hp": 20,
      "at": 25,
      "df": 45,
      "sa": 70,
      "sd": 90,
      "sp": 60
    },
    "weightkg": 13,
    "nfe": true,
    "abilities": {
      "0": "Soundproof"
    },
    "name_jp": "マネネ"
  },
  "Mismagius": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 60,
      "at": 60,
      "df": 60,
      "sa": 105,
      "sd": 105,
      "sp": 105
    },
    "weightkg": 4.4,
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "ムウマージ"
  },
  "Monferno": {
    "types": [
      "Fire",
      "Fighting"
    ],
    "bs": {
      "hp": 64,
      "at": 78,
      "df": 52,
      "sa": 78,
      "sd": 52,
      "sp": 81
    },
    "weightkg": 22,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "モウカザル"
  },
  "Mothim": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 70,
      "at": 94,
      "df": 50,
      "sa": 94,
      "sd": 50,
      "sp": 66
    },
    "weightkg": 23.3,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "ガーメイル"
  },
  "Munchlax": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 135,
      "at": 85,
      "df": 40,
      "sa": 40,
      "sd": 85,
      "sp": 5
    },
    "weightkg": 105,
    "nfe": true,
    "abilities": {
      "0": "Pickup"
    },
    "name_jp": "ゴンベ"
  },
  "Pachirisu": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 60,
      "at": 45,
      "df": 70,
      "sa": 45,
      "sd": 90,
      "sp": 95
    },
    "weightkg": 3.9,
    "abilities": {
      "0": "Run Away"
    },
    "name_jp": "パチリス"
  },
  "Palkia": {
    "types": [
      "Water",
      "Dragon"
    ],
    "bs": {
      "hp": 90,
      "at": 120,
      "df": 100,
      "sa": 150,
      "sd": 120,
      "sp": 100
    },
    "weightkg": 336,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "otherFormes": [
      "Palkia-Origin"
    ],
    "name_jp": "パルキア"
  },
  "Phione": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 80,
      "at": 80,
      "df": 80,
      "sa": 80,
      "sd": 80,
      "sp": 80
    },
    "weightkg": 3.1,
    "abilities": {
      "0": "Hydration"
    },
    "gender": "N",
    "name_jp": "フィオネ"
  },
  "Piplup": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 53,
      "at": 51,
      "df": 53,
      "sa": 61,
      "sd": 56,
      "sp": 40
    },
    "weightkg": 5.2,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "ポッチャマ"
  },
  "Porygon-Z": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 85,
      "at": 80,
      "df": 70,
      "sa": 135,
      "sd": 75,
      "sp": 90
    },
    "weightkg": 34,
    "gender": "N",
    "abilities": {
      "0": "Adaptability"
    },
    "name_jp": "ポリゴンＺ"
  },
  "Prinplup": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 64,
      "at": 66,
      "df": 68,
      "sa": 81,
      "sd": 76,
      "sp": 50
    },
    "weightkg": 23,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "ポッタイシ"
  },
  "Probopass": {
    "types": [
      "Rock",
      "Steel"
    ],
    "bs": {
      "hp": 60,
      "at": 55,
      "df": 145,
      "sa": 75,
      "sd": 150,
      "sp": 40
    },
    "weightkg": 340,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "ダイノーズ"
  },
  "Purugly": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 71,
      "at": 82,
      "df": 64,
      "sa": 64,
      "sd": 59,
      "sp": 112
    },
    "weightkg": 43.8,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "ブニャット"
  },
  "Rampardos": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 97,
      "at": 165,
      "df": 60,
      "sa": 65,
      "sd": 50,
      "sp": 58
    },
    "weightkg": 102.5,
    "abilities": {
      "0": "Mold Breaker"
    },
    "name_jp": "ラムパルド"
  },
  "Regigigas": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 110,
      "at": 160,
      "df": 110,
      "sa": 80,
      "sd": 110,
      "sp": 100
    },
    "weightkg": 420,
    "abilities": {
      "0": "Slow Start"
    },
    "gender": "N",
    "name_jp": "レジギガス"
  },
  "Rhyperior": {
    "types": [
      "Ground",
      "Rock"
    ],
    "bs": {
      "hp": 115,
      "at": 140,
      "df": 130,
      "sa": 55,
      "sd": 55,
      "sp": 40
    },
    "weightkg": 282.8,
    "abilities": {
      "0": "Lightning Rod"
    },
    "name_jp": "ドサイドン"
  },
  "Riolu": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 40,
      "at": 70,
      "df": 40,
      "sa": 35,
      "sd": 40,
      "sp": 60
    },
    "weightkg": 20.2,
    "nfe": true,
    "abilities": {
      "0": "Steadfast"
    },
    "name_jp": "リオル"
  },
  "Roserade": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 60,
      "at": 70,
      "df": 65,
      "sa": 125,
      "sd": 105,
      "sp": 90
    },
    "weightkg": 14.5,
    "abilities": {
      "0": "Natural Cure"
    },
    "name_jp": "ロズレイド"
  },
  "Rotom": {
    "types": [
      "Electric",
      "Ghost"
    ],
    "bs": {
      "hp": 50,
      "at": 50,
      "df": 77,
      "sa": 95,
      "sd": 77,
      "sp": 91
    },
    "weightkg": 0.3,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "otherFormes": [
      "Rotom-Fan",
      "Rotom-Frost",
      "Rotom-Heat",
      "Rotom-Mow",
      "Rotom-Wash"
    ],
    "name_jp": "ロトム"
  },
  "Rotom-Mow": {
    "types": [
      "Electric",
      "Grass"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 107,
      "sa": 105,
      "sd": 107,
      "sp": 86
    },
    "weightkg": 0.3,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "baseSpecies": "Rotom",
    "name_jp": "ロトム(カット)"
  },
  "Rotom-Frost": {
    "types": [
      "Electric",
      "Ice"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 107,
      "sa": 105,
      "sd": 107,
      "sp": 86
    },
    "weightkg": 0.3,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "baseSpecies": "Rotom",
    "name_jp": "ロトム(フロスト)"
  },
  "Rotom-Heat": {
    "types": [
      "Electric",
      "Fire"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 107,
      "sa": 105,
      "sd": 107,
      "sp": 86
    },
    "weightkg": 0.3,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "baseSpecies": "Rotom",
    "name_jp": "ロトム(ヒート)"
  },
  "Rotom-Fan": {
    "types": [
      "Electric",
      "Flying"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 107,
      "sa": 105,
      "sd": 107,
      "sp": 86
    },
    "weightkg": 0.3,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "baseSpecies": "Rotom",
    "name_jp": "ロトム(スピン)"
  },
  "Rotom-Wash": {
    "types": [
      "Electric",
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 107,
      "sa": 105,
      "sd": 107,
      "sp": 86
    },
    "weightkg": 0.3,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "baseSpecies": "Rotom",
    "name_jp": "ロトム(ウォッシュ)"
  },
  "Shaymin": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 100,
      "at": 100,
      "df": 100,
      "sa": 100,
      "sd": 100,
      "sp": 100
    },
    "weightkg": 2.1,
    "abilities": {
      "0": "Natural Cure"
    },
    "gender": "N",
    "otherFormes": [
      "Shaymin-Sky"
    ],
    "name_jp": "シェイミ(ランド)"
  },
  "Shaymin-Sky": {
    "types": [
      "Grass",
      "Flying"
    ],
    "bs": {
      "hp": 100,
      "at": 103,
      "df": 75,
      "sa": 120,
      "sd": 75,
      "sp": 127
    },
    "weightkg": 5.2,
    "abilities": {
      "0": "Serene Grace"
    },
    "gender": "N",
    "baseSpecies": "Shaymin",
    "name_jp": "シェイミ(スカイ)"
  },
  "Shellos": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 76,
      "at": 48,
      "df": 48,
      "sa": 57,
      "sd": 62,
      "sp": 34
    },
    "weightkg": 6.3,
    "nfe": true,
    "abilities": {
      "0": "Sticky Hold"
    },
    "name_jp": "カラナクシ"
  },
  "Shieldon": {
    "types": [
      "Rock",
      "Steel"
    ],
    "bs": {
      "hp": 30,
      "at": 42,
      "df": 118,
      "sa": 42,
      "sd": 88,
      "sp": 30
    },
    "weightkg": 57,
    "nfe": true,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "タテトプス"
  },
  "Shinx": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 45,
      "at": 65,
      "df": 34,
      "sa": 40,
      "sd": 34,
      "sp": 45
    },
    "weightkg": 9.5,
    "nfe": true,
    "abilities": {
      "0": "Rivalry"
    },
    "name_jp": "コリンク"
  },
  "Skorupi": {
    "types": [
      "Poison",
      "Bug"
    ],
    "bs": {
      "hp": 40,
      "at": 50,
      "df": 90,
      "sa": 30,
      "sd": 55,
      "sp": 65
    },
    "weightkg": 12,
    "nfe": true,
    "abilities": {
      "0": "Battle Armor"
    },
    "name_jp": "スコルピ"
  },
  "Skuntank": {
    "types": [
      "Poison",
      "Dark"
    ],
    "bs": {
      "hp": 103,
      "at": 93,
      "df": 67,
      "sa": 71,
      "sd": 61,
      "sp": 84
    },
    "weightkg": 38,
    "abilities": {
      "0": "Stench"
    },
    "name_jp": "スカタンク"
  },
  "Snover": {
    "types": [
      "Grass",
      "Ice"
    ],
    "bs": {
      "hp": 60,
      "at": 62,
      "df": 50,
      "sa": 62,
      "sd": 60,
      "sp": 40
    },
    "weightkg": 50.5,
    "nfe": true,
    "abilities": {
      "0": "Snow Warning"
    },
    "name_jp": "ユキカブリ"
  },
  "Spiritomb": {
    "types": [
      "Ghost",
      "Dark"
    ],
    "bs": {
      "hp": 50,
      "at": 92,
      "df": 108,
      "sa": 92,
      "sd": 108,
      "sp": 35
    },
    "weightkg": 108,
    "abilities": {
      "0": "Pressure"
    },
    "name_jp": "ミカルゲ"
  },
  "Staraptor": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 85,
      "at": 120,
      "df": 70,
      "sa": 50,
      "sd": 60,
      "sp": 100
    },
    "weightkg": 24.9,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "ムクホーク"
  },
  "Staravia": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 55,
      "at": 75,
      "df": 50,
      "sa": 40,
      "sd": 40,
      "sp": 80
    },
    "weightkg": 15.5,
    "nfe": true,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "ムクバード"
  },
  "Starly": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 40,
      "at": 55,
      "df": 30,
      "sa": 30,
      "sd": 30,
      "sp": 60
    },
    "weightkg": 2,
    "nfe": true,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "ムックル"
  },
  "Stunky": {
    "types": [
      "Poison",
      "Dark"
    ],
    "bs": {
      "hp": 63,
      "at": 63,
      "df": 47,
      "sa": 41,
      "sd": 41,
      "sp": 74
    },
    "weightkg": 19.2,
    "nfe": true,
    "abilities": {
      "0": "Stench"
    },
    "name_jp": "スカンプー"
  },
  "Tangrowth": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 100,
      "at": 100,
      "df": 125,
      "sa": 110,
      "sd": 50,
      "sp": 50
    },
    "weightkg": 128.6,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "モジャンボ"
  },
  "Togekiss": {
    "types": [
      "Fairy",
      "Flying"
    ],
    "bs": {
      "hp": 85,
      "at": 50,
      "df": 95,
      "sa": 120,
      "sd": 115,
      "sp": 80
    },
    "weightkg": 38,
    "abilities": {
      "0": "Hustle"
    },
    "name_jp": "トゲキッス"
  },
  "Torterra": {
    "types": [
      "Grass",
      "Ground"
    ],
    "bs": {
      "hp": 95,
      "at": 109,
      "df": 105,
      "sa": 75,
      "sd": 85,
      "sp": 56
    },
    "weightkg": 310,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "ドダイトス"
  },
  "Toxicroak": {
    "types": [
      "Poison",
      "Fighting"
    ],
    "bs": {
      "hp": 83,
      "at": 106,
      "df": 65,
      "sa": 86,
      "sd": 65,
      "sp": 85
    },
    "weightkg": 44.4,
    "abilities": {
      "0": "Anticipation"
    },
    "name_jp": "ドクロッグ"
  },
  "Turtwig": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 55,
      "at": 68,
      "df": 64,
      "sa": 45,
      "sd": 55,
      "sp": 31
    },
    "weightkg": 10.2,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "ナエトル"
  },
  "Uxie": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 75,
      "at": 75,
      "df": 130,
      "sa": 75,
      "sd": 130,
      "sp": 95
    },
    "weightkg": 0.3,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "name_jp": "ユクシー"
  },
  "Vespiquen": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 70,
      "at": 80,
      "df": 102,
      "sa": 80,
      "sd": 102,
      "sp": 40
    },
    "weightkg": 38.5,
    "abilities": {
      "0": "Pressure"
    },
    "name_jp": "ビークイン"
  },
  "Weavile": {
    "types": [
      "Dark",
      "Ice"
    ],
    "bs": {
      "hp": 70,
      "at": 120,
      "df": 65,
      "sa": 45,
      "sd": 85,
      "sp": 125
    },
    "weightkg": 34,
    "abilities": {
      "0": "Pressure"
    },
    "name_jp": "マニューラ"
  },
  "Wormadam": {
    "types": [
      "Bug",
      "Grass"
    ],
    "bs": {
      "hp": 60,
      "at": 59,
      "df": 85,
      "sa": 79,
      "sd": 105,
      "sp": 36
    },
    "weightkg": 6.5,
    "abilities": {
      "0": "Anticipation"
    },
    "otherFormes": [
      "Wormadam-Sandy",
      "Wormadam-Trash"
    ],
    "name_jp": "ミノマダム(くさき)"
  },
  "Wormadam-Sandy": {
    "types": [
      "Bug",
      "Ground"
    ],
    "bs": {
      "hp": 60,
      "at": 79,
      "df": 105,
      "sa": 59,
      "sd": 85,
      "sp": 36
    },
    "weightkg": 6.5,
    "abilities": {
      "0": "Anticipation"
    },
    "baseSpecies": "Wormadam",
    "name_jp": "ミノマダム(すなち)"
  },
  "Wormadam-Trash": {
    "types": [
      "Bug",
      "Steel"
    ],
    "bs": {
      "hp": 60,
      "at": 69,
      "df": 95,
      "sa": 69,
      "sd": 95,
      "sp": 36
    },
    "weightkg": 6.5,
    "abilities": {
      "0": "Anticipation"
    },
    "baseSpecies": "Wormadam",
    "name_jp": "ミノマダム(ゴミ)"
  },
  "Yanmega": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 86,
      "at": 76,
      "df": 86,
      "sa": 116,
      "sd": 56,
      "sp": 95
    },
    "weightkg": 51.5,
    "abilities": {
      "0": "Speed Boost"
    },
    "name_jp": "メガヤンマ"
  },
  "Accelgor": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 80,
      "at": 70,
      "df": 40,
      "sa": 100,
      "sd": 60,
      "sp": 145
    },
    "weightkg": 25.3,
    "abilities": {
      "0": "Hydration"
    },
    "name_jp": "アギルダー"
  },
  "Alomomola": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 165,
      "at": 75,
      "df": 80,
      "sa": 40,
      "sd": 45,
      "sp": 65
    },
    "weightkg": 31.6,
    "abilities": {
      "0": "Healer"
    },
    "name_jp": "ママンボウ"
  },
  "Amoonguss": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 114,
      "at": 85,
      "df": 70,
      "sa": 85,
      "sd": 80,
      "sp": 30
    },
    "weightkg": 10.5,
    "abilities": {
      "0": "Effect Spore"
    },
    "name_jp": "モロバレル"
  },
  "Archen": {
    "types": [
      "Rock",
      "Flying"
    ],
    "bs": {
      "hp": 55,
      "at": 112,
      "df": 45,
      "sa": 74,
      "sd": 45,
      "sp": 70
    },
    "weightkg": 9.5,
    "abilities": {
      "0": "Defeatist"
    },
    "nfe": true,
    "name_jp": "アーケン"
  },
  "Archeops": {
    "types": [
      "Rock",
      "Flying"
    ],
    "bs": {
      "hp": 75,
      "at": 140,
      "df": 65,
      "sa": 112,
      "sd": 65,
      "sp": 110
    },
    "weightkg": 32,
    "abilities": {
      "0": "Defeatist"
    },
    "name_jp": "アーケオス"
  },
  "Audino": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 103,
      "at": 60,
      "df": 86,
      "sa": 60,
      "sd": 86,
      "sp": 50
    },
    "weightkg": 31,
    "abilities": {
      "0": "Healer"
    },
    "otherFormes": [
      "Audino-Mega"
    ],
    "name_jp": "タブンネ"
  },
  "Axew": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 46,
      "at": 87,
      "df": 60,
      "sa": 30,
      "sd": 40,
      "sp": 57
    },
    "weightkg": 18,
    "nfe": true,
    "abilities": {
      "0": "Rivalry"
    },
    "name_jp": "キバゴ"
  },
  "Basculin": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 70,
      "at": 92,
      "df": 65,
      "sa": 80,
      "sd": 55,
      "sp": 98
    },
    "weightkg": 18,
    "abilities": {
      "0": "Reckless"
    },
    "otherFormes": [
      "Basculin-Blue-Striped",
      "Basculin-White-Striped"
    ],
    "name_jp": "バスラオ(あかすじ)"
  },
  "Basculin-Blue-Striped": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 70,
      "at": 92,
      "df": 65,
      "sa": 80,
      "sd": 55,
      "sp": 98
    },
    "weightkg": 18,
    "abilities": {
      "0": "Rock Head"
    },
    "baseSpecies": "Basculin",
    "name_jp": "バスラオ(あおすじ)"
  },
  "Beartic": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 95,
      "at": 130,
      "df": 80,
      "sa": 70,
      "sd": 80,
      "sp": 50
    },
    "weightkg": 260,
    "abilities": {
      "0": "Snow Cloak"
    },
    "name_jp": "ツンベアー"
  },
  "Beheeyem": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 75,
      "at": 75,
      "df": 75,
      "sa": 125,
      "sd": 95,
      "sp": 40
    },
    "weightkg": 34.5,
    "abilities": {
      "0": "Telepathy"
    },
    "name_jp": "オーベム"
  },
  "Bisharp": {
    "types": [
      "Dark",
      "Steel"
    ],
    "bs": {
      "hp": 65,
      "at": 125,
      "df": 100,
      "sa": 60,
      "sd": 70,
      "sp": 70
    },
    "weightkg": 70,
    "abilities": {
      "0": "Defiant"
    },
    "nfe": true,
    "name_jp": "キリキザン"
  },
  "Blitzle": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 45,
      "at": 60,
      "df": 32,
      "sa": 50,
      "sd": 32,
      "sp": 76
    },
    "weightkg": 29.8,
    "nfe": true,
    "abilities": {
      "0": "Lightning Rod"
    },
    "name_jp": "シママ"
  },
  "Boldore": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 70,
      "at": 105,
      "df": 105,
      "sa": 50,
      "sd": 40,
      "sp": 20
    },
    "weightkg": 102,
    "nfe": true,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "ガントル"
  },
  "Bouffalant": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 95,
      "at": 110,
      "df": 95,
      "sa": 40,
      "sd": 95,
      "sp": 55
    },
    "weightkg": 94.6,
    "abilities": {
      "0": "Reckless"
    },
    "name_jp": "バッフロン"
  },
  "Braviary": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 100,
      "at": 123,
      "df": 75,
      "sa": 57,
      "sd": 75,
      "sp": 80
    },
    "weightkg": 41,
    "abilities": {
      "0": "Keen Eye"
    },
    "otherFormes": [
      "Braviary-Hisui"
    ],
    "name_jp": "ウォーグル"
  },
  "Carracosta": {
    "types": [
      "Water",
      "Rock"
    ],
    "bs": {
      "hp": 74,
      "at": 108,
      "df": 133,
      "sa": 83,
      "sd": 65,
      "sp": 32
    },
    "weightkg": 81,
    "abilities": {
      "0": "Solid Rock"
    },
    "name_jp": "アバゴーラ"
  },
  "Chandelure": {
    "types": [
      "Ghost",
      "Fire"
    ],
    "bs": {
      "hp": 60,
      "at": 55,
      "df": 90,
      "sa": 145,
      "sd": 90,
      "sp": 80
    },
    "weightkg": 34.3,
    "abilities": {
      "0": "Flash Fire"
    },
    "name_jp": "シャンデラ"
  },
  "Cinccino": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 75,
      "at": 95,
      "df": 60,
      "sa": 65,
      "sd": 60,
      "sp": 115
    },
    "weightkg": 7.5,
    "abilities": {
      "0": "Cute Charm"
    },
    "name_jp": "チラチーノ"
  },
  "Cobalion": {
    "types": [
      "Steel",
      "Fighting"
    ],
    "bs": {
      "hp": 91,
      "at": 90,
      "df": 129,
      "sa": 90,
      "sd": 72,
      "sp": 108
    },
    "weightkg": 250,
    "abilities": {
      "0": "Justified"
    },
    "gender": "N",
    "name_jp": "コバルオン"
  },
  "Cofagrigus": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 58,
      "at": 50,
      "df": 145,
      "sa": 95,
      "sd": 105,
      "sp": 30
    },
    "weightkg": 76.5,
    "abilities": {
      "0": "Mummy"
    },
    "name_jp": "デスカーン"
  },
  "Conkeldurr": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 105,
      "at": 140,
      "df": 95,
      "sa": 55,
      "sd": 65,
      "sp": 45
    },
    "weightkg": 87,
    "abilities": {
      "0": "Guts"
    },
    "name_jp": "ローブシン"
  },
  "Cottonee": {
    "types": [
      "Grass",
      "Fairy"
    ],
    "bs": {
      "hp": 40,
      "at": 27,
      "df": 60,
      "sa": 37,
      "sd": 50,
      "sp": 66
    },
    "weightkg": 0.6,
    "nfe": true,
    "abilities": {
      "0": "Prankster"
    },
    "name_jp": "モンメン"
  },
  "Crustle": {
    "types": [
      "Bug",
      "Rock"
    ],
    "bs": {
      "hp": 70,
      "at": 105,
      "df": 125,
      "sa": 65,
      "sd": 75,
      "sp": 45
    },
    "weightkg": 200,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "イワパレス"
  },
  "Cryogonal": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 80,
      "at": 50,
      "df": 50,
      "sa": 95,
      "sd": 135,
      "sp": 105
    },
    "weightkg": 148,
    "abilities": {
      "0": "Levitate"
    },
    "gender": "N",
    "name_jp": "フリージオ"
  },
  "Cubchoo": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 55,
      "at": 70,
      "df": 40,
      "sa": 60,
      "sd": 40,
      "sp": 40
    },
    "weightkg": 8.5,
    "nfe": true,
    "abilities": {
      "0": "Snow Cloak"
    },
    "name_jp": "クマシュン"
  },
  "Darmanitan": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 105,
      "at": 140,
      "df": 55,
      "sa": 30,
      "sd": 55,
      "sp": 95
    },
    "weightkg": 92.9,
    "abilities": {
      "0": "Sheer Force"
    },
    "otherFormes": [
      "Darmanitan-Galar",
      "Darmanitan-Galar-Zen",
      "Darmanitan-Zen"
    ],
    "name_jp": "ヒヒダルマ"
  },
  "Darmanitan-Zen": {
    "types": [
      "Fire",
      "Psychic"
    ],
    "bs": {
      "hp": 105,
      "at": 30,
      "df": 105,
      "sa": 140,
      "sd": 105,
      "sp": 55
    },
    "weightkg": 92.9,
    "baseSpecies": "Darmanitan",
    "abilities": {
      "0": "Zen Mode"
    },
    "name_jp": "ヒヒダルマ(ダルマ)"
  },
  "Darumaka": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 70,
      "at": 90,
      "df": 45,
      "sa": 15,
      "sd": 45,
      "sp": 50
    },
    "weightkg": 37.5,
    "nfe": true,
    "abilities": {
      "0": "Hustle"
    },
    "otherFormes": [
      "Darumaka-Galar"
    ],
    "name_jp": "ダルマッカ"
  },
  "Deerling": {
    "types": [
      "Normal",
      "Grass"
    ],
    "bs": {
      "hp": 60,
      "at": 60,
      "df": 50,
      "sa": 40,
      "sd": 50,
      "sp": 75
    },
    "weightkg": 19.5,
    "nfe": true,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "シキジカ"
  },
  "Deino": {
    "types": [
      "Dark",
      "Dragon"
    ],
    "bs": {
      "hp": 52,
      "at": 65,
      "df": 50,
      "sa": 45,
      "sd": 50,
      "sp": 38
    },
    "weightkg": 17.3,
    "abilities": {
      "0": "Hustle"
    },
    "nfe": true,
    "name_jp": "モノズ"
  },
  "Dewott": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 75,
      "at": 75,
      "df": 60,
      "sa": 83,
      "sd": 60,
      "sp": 60
    },
    "weightkg": 24.5,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "フタチマル"
  },
  "Drilbur": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 60,
      "at": 85,
      "df": 40,
      "sa": 30,
      "sd": 45,
      "sp": 68
    },
    "weightkg": 8.5,
    "nfe": true,
    "abilities": {
      "0": "Sand Rush"
    },
    "name_jp": "モグリュー"
  },
  "Druddigon": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 77,
      "at": 120,
      "df": 90,
      "sa": 60,
      "sd": 90,
      "sp": 48
    },
    "weightkg": 139,
    "abilities": {
      "0": "Rough Skin"
    },
    "name_jp": "クリムガン"
  },
  "Ducklett": {
    "types": [
      "Water",
      "Flying"
    ],
    "bs": {
      "hp": 62,
      "at": 44,
      "df": 50,
      "sa": 44,
      "sd": 50,
      "sp": 55
    },
    "weightkg": 5.5,
    "nfe": true,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "コアルヒー"
  },
  "Duosion": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 65,
      "at": 40,
      "df": 50,
      "sa": 125,
      "sd": 60,
      "sp": 30
    },
    "weightkg": 8,
    "nfe": true,
    "abilities": {
      "0": "Overcoat"
    },
    "name_jp": "ダブラン"
  },
  "Durant": {
    "types": [
      "Bug",
      "Steel"
    ],
    "bs": {
      "hp": 58,
      "at": 109,
      "df": 112,
      "sa": 48,
      "sd": 48,
      "sp": 109
    },
    "weightkg": 33,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "アイアント"
  },
  "Dwebble": {
    "types": [
      "Bug",
      "Rock"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 85,
      "sa": 35,
      "sd": 35,
      "sp": 55
    },
    "weightkg": 14.5,
    "nfe": true,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "イシズマイ"
  },
  "Eelektrik": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 65,
      "at": 85,
      "df": 70,
      "sa": 75,
      "sd": 70,
      "sp": 40
    },
    "weightkg": 22,
    "abilities": {
      "0": "Levitate"
    },
    "nfe": true,
    "name_jp": "シビビール"
  },
  "Eelektross": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 85,
      "at": 115,
      "df": 80,
      "sa": 105,
      "sd": 80,
      "sp": 50
    },
    "weightkg": 80.5,
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "シビルドン"
  },
  "Elgyem": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 55,
      "at": 55,
      "df": 55,
      "sa": 85,
      "sd": 55,
      "sp": 30
    },
    "weightkg": 9,
    "nfe": true,
    "abilities": {
      "0": "Telepathy"
    },
    "name_jp": "リグレー"
  },
  "Emboar": {
    "types": [
      "Fire",
      "Fighting"
    ],
    "bs": {
      "hp": 110,
      "at": 123,
      "df": 65,
      "sa": 100,
      "sd": 65,
      "sp": 65
    },
    "weightkg": 150,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "エンブオー"
  },
  "Emolga": {
    "types": [
      "Electric",
      "Flying"
    ],
    "bs": {
      "hp": 55,
      "at": 75,
      "df": 60,
      "sa": 75,
      "sd": 60,
      "sp": 103
    },
    "weightkg": 5,
    "abilities": {
      "0": "Static"
    },
    "name_jp": "エモンガ"
  },
  "Escavalier": {
    "types": [
      "Bug",
      "Steel"
    ],
    "bs": {
      "hp": 70,
      "at": 135,
      "df": 105,
      "sa": 60,
      "sd": 105,
      "sp": 20
    },
    "weightkg": 33,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "シュバルゴ"
  },
  "Excadrill": {
    "types": [
      "Ground",
      "Steel"
    ],
    "bs": {
      "hp": 110,
      "at": 135,
      "df": 60,
      "sa": 50,
      "sd": 65,
      "sp": 88
    },
    "weightkg": 40.4,
    "abilities": {
      "0": "Sand Rush"
    },
    "name_jp": "ドリュウズ"
  },
  "Ferroseed": {
    "types": [
      "Grass",
      "Steel"
    ],
    "bs": {
      "hp": 44,
      "at": 50,
      "df": 91,
      "sa": 24,
      "sd": 86,
      "sp": 10
    },
    "weightkg": 18.8,
    "nfe": true,
    "abilities": {
      "0": "Iron Barbs"
    },
    "name_jp": "テッシード"
  },
  "Ferrothorn": {
    "types": [
      "Grass",
      "Steel"
    ],
    "bs": {
      "hp": 74,
      "at": 94,
      "df": 131,
      "sa": 54,
      "sd": 116,
      "sp": 20
    },
    "weightkg": 110,
    "abilities": {
      "0": "Iron Barbs"
    },
    "name_jp": "ナットレイ"
  },
  "Foongus": {
    "types": [
      "Grass",
      "Poison"
    ],
    "bs": {
      "hp": 69,
      "at": 55,
      "df": 45,
      "sa": 55,
      "sd": 55,
      "sp": 15
    },
    "weightkg": 1,
    "nfe": true,
    "abilities": {
      "0": "Effect Spore"
    },
    "name_jp": "タマゲタケ"
  },
  "Fraxure": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 66,
      "at": 117,
      "df": 70,
      "sa": 40,
      "sd": 50,
      "sp": 67
    },
    "weightkg": 36,
    "nfe": true,
    "abilities": {
      "0": "Rivalry"
    },
    "name_jp": "オノンド"
  },
  "Frillish": {
    "types": [
      "Water",
      "Ghost"
    ],
    "bs": {
      "hp": 55,
      "at": 40,
      "df": 50,
      "sa": 65,
      "sd": 85,
      "sp": 40
    },
    "weightkg": 33,
    "nfe": true,
    "abilities": {
      "0": "Water Absorb"
    },
    "name_jp": "プルリル"
  },
  "Galvantula": {
    "types": [
      "Bug",
      "Electric"
    ],
    "bs": {
      "hp": 70,
      "at": 77,
      "df": 60,
      "sa": 97,
      "sd": 60,
      "sp": 108
    },
    "weightkg": 14.3,
    "abilities": {
      "0": "Compound Eyes"
    },
    "name_jp": "デンチュラ"
  },
  "Garbodor": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 80,
      "at": 95,
      "df": 82,
      "sa": 60,
      "sd": 82,
      "sp": 75
    },
    "weightkg": 107.3,
    "abilities": {
      "0": "Stench"
    },
    "otherFormes": [
      "Garbodor-Gmax"
    ],
    "name_jp": "ダストダス"
  },
  "Genesect": {
    "types": [
      "Bug",
      "Steel"
    ],
    "bs": {
      "hp": 71,
      "at": 120,
      "df": 95,
      "sa": 120,
      "sd": 95,
      "sp": 99
    },
    "weightkg": 82.5,
    "abilities": {
      "0": "Download"
    },
    "gender": "N",
    "otherFormes": [
      "Genesect-Burn",
      "Genesect-Chill",
      "Genesect-Douse",
      "Genesect-Shock"
    ],
    "name_jp": "ゲノセクト"
  },
  "Genesect-Burn": {
    "types": [
      "Bug",
      "Steel"
    ],
    "bs": {
      "hp": 71,
      "at": 120,
      "df": 95,
      "sa": 120,
      "sd": 95,
      "sp": 99
    },
    "weightkg": 82.5,
    "abilities": {
      "0": "Download"
    },
    "gender": "N",
    "baseSpecies": "Genesect",
    "name_jp": "ゲノセクト(ブレイズ)"
  },
  "Genesect-Chill": {
    "types": [
      "Bug",
      "Steel"
    ],
    "bs": {
      "hp": 71,
      "at": 120,
      "df": 95,
      "sa": 120,
      "sd": 95,
      "sp": 99
    },
    "weightkg": 82.5,
    "abilities": {
      "0": "Download"
    },
    "gender": "N",
    "baseSpecies": "Genesect",
    "name_jp": "ゲノセクト(フリーズ)"
  },
  "Genesect-Douse": {
    "types": [
      "Bug",
      "Steel"
    ],
    "bs": {
      "hp": 71,
      "at": 120,
      "df": 95,
      "sa": 120,
      "sd": 95,
      "sp": 99
    },
    "weightkg": 82.5,
    "abilities": {
      "0": "Download"
    },
    "gender": "N",
    "baseSpecies": "Genesect",
    "name_jp": "ゲノセクト(アクア)"
  },
  "Genesect-Shock": {
    "types": [
      "Bug",
      "Steel"
    ],
    "bs": {
      "hp": 71,
      "at": 120,
      "df": 95,
      "sa": 120,
      "sd": 95,
      "sp": 99
    },
    "weightkg": 82.5,
    "abilities": {
      "0": "Download"
    },
    "gender": "N",
    "baseSpecies": "Genesect",
    "name_jp": "ゲノセクト(イナズマ)"
  },
  "Gigalith": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 85,
      "at": 135,
      "df": 130,
      "sa": 60,
      "sd": 80,
      "sp": 25
    },
    "weightkg": 260,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "ギガイアス"
  },
  "Golett": {
    "types": [
      "Ground",
      "Ghost"
    ],
    "bs": {
      "hp": 59,
      "at": 74,
      "df": 50,
      "sa": 35,
      "sd": 50,
      "sp": 35
    },
    "weightkg": 92,
    "nfe": true,
    "gender": "N",
    "abilities": {
      "0": "Iron Fist"
    },
    "name_jp": "ゴビット"
  },
  "Golurk": {
    "types": [
      "Ground",
      "Ghost"
    ],
    "bs": {
      "hp": 89,
      "at": 124,
      "df": 80,
      "sa": 55,
      "sd": 80,
      "sp": 55
    },
    "weightkg": 330,
    "gender": "N",
    "abilities": {
      "0": "Iron Fist"
    },
    "name_jp": "ゴルーグ"
  },
  "Gothita": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 45,
      "at": 30,
      "df": 50,
      "sa": 55,
      "sd": 65,
      "sp": 45
    },
    "weightkg": 5.8,
    "nfe": true,
    "abilities": {
      "0": "Frisk"
    },
    "name_jp": "ゴチム"
  },
  "Gothitelle": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 70,
      "at": 55,
      "df": 95,
      "sa": 95,
      "sd": 110,
      "sp": 65
    },
    "weightkg": 44,
    "abilities": {
      "0": "Frisk"
    },
    "name_jp": "ゴチルゼル"
  },
  "Gothorita": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 60,
      "at": 45,
      "df": 70,
      "sa": 75,
      "sd": 85,
      "sp": 55
    },
    "weightkg": 18,
    "nfe": true,
    "abilities": {
      "0": "Frisk"
    },
    "name_jp": "ゴチミル"
  },
  "Gurdurr": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 85,
      "at": 105,
      "df": 85,
      "sa": 40,
      "sd": 50,
      "sp": 40
    },
    "weightkg": 40,
    "nfe": true,
    "abilities": {
      "0": "Guts"
    },
    "name_jp": "ドテッコツ"
  },
  "Haxorus": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 76,
      "at": 147,
      "df": 90,
      "sa": 60,
      "sd": 70,
      "sp": 97
    },
    "weightkg": 105.5,
    "abilities": {
      "0": "Rivalry"
    },
    "name_jp": "オノノクス"
  },
  "Heatmor": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 85,
      "at": 97,
      "df": 66,
      "sa": 105,
      "sd": 66,
      "sp": 65
    },
    "weightkg": 58,
    "abilities": {
      "0": "Gluttony"
    },
    "name_jp": "クイタラン"
  },
  "Herdier": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 65,
      "at": 80,
      "df": 65,
      "sa": 35,
      "sd": 65,
      "sp": 60
    },
    "weightkg": 14.7,
    "nfe": true,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "ハーデリア"
  },
  "Hydreigon": {
    "types": [
      "Dark",
      "Dragon"
    ],
    "bs": {
      "hp": 92,
      "at": 105,
      "df": 90,
      "sa": 125,
      "sd": 90,
      "sp": 98
    },
    "weightkg": 160,
    "abilities": {
      "0": "Levitate"
    },
    "name_jp": "サザンドラ"
  },
  "Jellicent": {
    "types": [
      "Water",
      "Ghost"
    ],
    "bs": {
      "hp": 100,
      "at": 60,
      "df": 70,
      "sa": 85,
      "sd": 105,
      "sp": 60
    },
    "weightkg": 135,
    "abilities": {
      "0": "Water Absorb"
    },
    "name_jp": "ブルンゲル"
  },
  "Joltik": {
    "types": [
      "Bug",
      "Electric"
    ],
    "bs": {
      "hp": 50,
      "at": 47,
      "df": 50,
      "sa": 57,
      "sd": 50,
      "sp": 65
    },
    "weightkg": 0.6,
    "nfe": true,
    "abilities": {
      "0": "Compound Eyes"
    },
    "name_jp": "バチュル"
  },
  "Karrablast": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 50,
      "at": 75,
      "df": 45,
      "sa": 40,
      "sd": 45,
      "sp": 60
    },
    "weightkg": 5.9,
    "nfe": true,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "カブルモ"
  },
  "Keldeo": {
    "types": [
      "Water",
      "Fighting"
    ],
    "bs": {
      "hp": 91,
      "at": 72,
      "df": 90,
      "sa": 129,
      "sd": 90,
      "sp": 108
    },
    "weightkg": 48.5,
    "abilities": {
      "0": "Justified"
    },
    "gender": "N",
    "otherFormes": [
      "Keldeo-Resolute"
    ],
    "name_jp": "ケルディオ"
  },
  "Keldeo-Resolute": {
    "types": [
      "Water",
      "Fighting"
    ],
    "bs": {
      "hp": 91,
      "at": 72,
      "df": 90,
      "sa": 129,
      "sd": 90,
      "sp": 108
    },
    "weightkg": 48.5,
    "abilities": {
      "0": "Justified"
    },
    "gender": "N",
    "baseSpecies": "Keldeo",
    "name_jp": "ケルディオ(かくご)"
  },
  "Klang": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 60,
      "at": 80,
      "df": 95,
      "sa": 70,
      "sd": 85,
      "sp": 50
    },
    "weightkg": 51,
    "nfe": true,
    "gender": "N",
    "abilities": {
      "0": "Plus"
    },
    "name_jp": "ギギアル"
  },
  "Klink": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 40,
      "at": 55,
      "df": 70,
      "sa": 45,
      "sd": 60,
      "sp": 30
    },
    "weightkg": 21,
    "nfe": true,
    "gender": "N",
    "abilities": {
      "0": "Plus"
    },
    "name_jp": "ギアル"
  },
  "Klinklang": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 60,
      "at": 100,
      "df": 115,
      "sa": 70,
      "sd": 85,
      "sp": 90
    },
    "weightkg": 81,
    "gender": "N",
    "abilities": {
      "0": "Plus"
    },
    "name_jp": "ギギギアル"
  },
  "Krokorok": {
    "types": [
      "Ground",
      "Dark"
    ],
    "bs": {
      "hp": 60,
      "at": 82,
      "df": 45,
      "sa": 45,
      "sd": 45,
      "sp": 74
    },
    "weightkg": 33.4,
    "nfe": true,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "ワルビル"
  },
  "Krookodile": {
    "types": [
      "Ground",
      "Dark"
    ],
    "bs": {
      "hp": 95,
      "at": 117,
      "df": 80,
      "sa": 65,
      "sd": 70,
      "sp": 92
    },
    "weightkg": 96.3,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "ワルビアル"
  },
  "Kyurem": {
    "types": [
      "Dragon",
      "Ice"
    ],
    "bs": {
      "hp": 125,
      "at": 130,
      "df": 90,
      "sa": 130,
      "sd": 90,
      "sp": 95
    },
    "weightkg": 325,
    "abilities": {
      "0": "Pressure"
    },
    "gender": "N",
    "otherFormes": [
      "Kyurem-Black",
      "Kyurem-White"
    ],
    "name_jp": "キュレム"
  },
  "Kyurem-Black": {
    "types": [
      "Dragon",
      "Ice"
    ],
    "bs": {
      "hp": 125,
      "at": 170,
      "df": 100,
      "sa": 120,
      "sd": 90,
      "sp": 95
    },
    "weightkg": 325,
    "abilities": {
      "0": "Teravolt"
    },
    "gender": "N",
    "baseSpecies": "Kyurem",
    "name_jp": "キュレム(ブラック)"
  },
  "Kyurem-White": {
    "types": [
      "Dragon",
      "Ice"
    ],
    "bs": {
      "hp": 125,
      "at": 120,
      "df": 90,
      "sa": 170,
      "sd": 100,
      "sp": 95
    },
    "weightkg": 325,
    "abilities": {
      "0": "Turboblaze"
    },
    "gender": "N",
    "baseSpecies": "Kyurem",
    "name_jp": "キュレム(ホワイト)"
  },
  "Lampent": {
    "types": [
      "Ghost",
      "Fire"
    ],
    "bs": {
      "hp": 60,
      "at": 40,
      "df": 60,
      "sa": 95,
      "sd": 60,
      "sp": 55
    },
    "weightkg": 13,
    "nfe": true,
    "abilities": {
      "0": "Flash Fire"
    },
    "name_jp": "ランプラー"
  },
  "Landorus": {
    "types": [
      "Ground",
      "Flying"
    ],
    "bs": {
      "hp": 89,
      "at": 125,
      "df": 90,
      "sa": 115,
      "sd": 80,
      "sp": 101
    },
    "weightkg": 68,
    "abilities": {
      "0": "Sand Force"
    },
    "otherFormes": [
      "Landorus-Therian"
    ],
    "name_jp": "ランドロス(けしん)"
  },
  "Landorus-Therian": {
    "types": [
      "Ground",
      "Flying"
    ],
    "bs": {
      "hp": 89,
      "at": 145,
      "df": 90,
      "sa": 105,
      "sd": 80,
      "sp": 91
    },
    "weightkg": 68,
    "abilities": {
      "0": "Intimidate"
    },
    "baseSpecies": "Landorus",
    "name_jp": "ランドロス(れいじゅう)"
  },
  "Larvesta": {
    "types": [
      "Bug",
      "Fire"
    ],
    "bs": {
      "hp": 55,
      "at": 85,
      "df": 55,
      "sa": 50,
      "sd": 55,
      "sp": 60
    },
    "weightkg": 28.8,
    "nfe": true,
    "abilities": {
      "0": "Flame Body"
    },
    "name_jp": "メラルバ"
  },
  "Leavanny": {
    "types": [
      "Bug",
      "Grass"
    ],
    "bs": {
      "hp": 75,
      "at": 103,
      "df": 80,
      "sa": 70,
      "sd": 80,
      "sp": 92
    },
    "weightkg": 20.5,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "ハハコモリ"
  },
  "Liepard": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 64,
      "at": 88,
      "df": 50,
      "sa": 88,
      "sd": 50,
      "sp": 106
    },
    "weightkg": 37.5,
    "abilities": {
      "0": "Limber"
    },
    "name_jp": "レパルダス"
  },
  "Lilligant": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 70,
      "at": 60,
      "df": 75,
      "sa": 110,
      "sd": 75,
      "sp": 90
    },
    "weightkg": 16.3,
    "abilities": {
      "0": "Chlorophyll"
    },
    "otherFormes": [
      "Lilligant-Hisui"
    ],
    "name_jp": "ドレディア"
  },
  "Lillipup": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 45,
      "at": 60,
      "df": 45,
      "sa": 25,
      "sd": 45,
      "sp": 55
    },
    "weightkg": 4.1,
    "nfe": true,
    "abilities": {
      "0": "Vital Spirit"
    },
    "name_jp": "ヨーテリー"
  },
  "Litwick": {
    "types": [
      "Ghost",
      "Fire"
    ],
    "bs": {
      "hp": 50,
      "at": 30,
      "df": 55,
      "sa": 65,
      "sd": 55,
      "sp": 20
    },
    "weightkg": 3.1,
    "nfe": true,
    "abilities": {
      "0": "Flash Fire"
    },
    "name_jp": "ヒトモシ"
  },
  "Mandibuzz": {
    "types": [
      "Dark",
      "Flying"
    ],
    "bs": {
      "hp": 110,
      "at": 65,
      "df": 105,
      "sa": 55,
      "sd": 95,
      "sp": 80
    },
    "weightkg": 39.5,
    "abilities": {
      "0": "Big Pecks"
    },
    "name_jp": "バルジーナ"
  },
  "Maractus": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 75,
      "at": 86,
      "df": 67,
      "sa": 106,
      "sd": 67,
      "sp": 60
    },
    "weightkg": 28,
    "abilities": {
      "0": "Water Absorb"
    },
    "name_jp": "マラカッチ"
  },
  "Meloetta": {
    "types": [
      "Normal",
      "Psychic"
    ],
    "bs": {
      "hp": 100,
      "at": 77,
      "df": 77,
      "sa": 128,
      "sd": 128,
      "sp": 90
    },
    "weightkg": 6.5,
    "abilities": {
      "0": "Serene Grace"
    },
    "otherFormes": [
      "Meloetta-Pirouette"
    ],
    "gender": "N",
    "name_jp": "メロエッタ(ボイス)"
  },
  "Meloetta-Pirouette": {
    "types": [
      "Normal",
      "Fighting"
    ],
    "bs": {
      "hp": 100,
      "at": 128,
      "df": 90,
      "sa": 77,
      "sd": 77,
      "sp": 128
    },
    "weightkg": 6.5,
    "abilities": {
      "0": "Serene Grace"
    },
    "baseSpecies": "Meloetta",
    "gender": "N",
    "name_jp": "メロエッタ(ステップ)"
  },
  "Mienfoo": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 45,
      "at": 85,
      "df": 50,
      "sa": 55,
      "sd": 50,
      "sp": 65
    },
    "weightkg": 20,
    "nfe": true,
    "abilities": {
      "0": "Inner Focus"
    },
    "name_jp": "コジョフー"
  },
  "Mienshao": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 65,
      "at": 125,
      "df": 60,
      "sa": 95,
      "sd": 60,
      "sp": 105
    },
    "weightkg": 35.5,
    "abilities": {
      "0": "Inner Focus"
    },
    "name_jp": "コジョンド"
  },
  "Minccino": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 55,
      "at": 50,
      "df": 40,
      "sa": 40,
      "sd": 40,
      "sp": 75
    },
    "weightkg": 5.8,
    "nfe": true,
    "abilities": {
      "0": "Cute Charm"
    },
    "name_jp": "チラーミィ"
  },
  "Munna": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 76,
      "at": 25,
      "df": 45,
      "sa": 67,
      "sd": 55,
      "sp": 24
    },
    "weightkg": 23.3,
    "nfe": true,
    "abilities": {
      "0": "Forewarn"
    },
    "name_jp": "ムンナ"
  },
  "Musharna": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 116,
      "at": 55,
      "df": 85,
      "sa": 107,
      "sd": 95,
      "sp": 29
    },
    "weightkg": 60.5,
    "abilities": {
      "0": "Forewarn"
    },
    "name_jp": "ムシャーナ"
  },
  "Oshawott": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 55,
      "at": 55,
      "df": 45,
      "sa": 63,
      "sd": 45,
      "sp": 45
    },
    "weightkg": 5.9,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "ミジュマル"
  },
  "Palpitoad": {
    "types": [
      "Water",
      "Ground"
    ],
    "bs": {
      "hp": 75,
      "at": 65,
      "df": 55,
      "sa": 65,
      "sd": 55,
      "sp": 69
    },
    "weightkg": 17,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "ガマガル"
  },
  "Panpour": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 53,
      "df": 48,
      "sa": 53,
      "sd": 48,
      "sp": 64
    },
    "weightkg": 13.5,
    "nfe": true,
    "abilities": {
      "0": "Gluttony"
    },
    "name_jp": "ヒヤップ"
  },
  "Pansage": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 50,
      "at": 53,
      "df": 48,
      "sa": 53,
      "sd": 48,
      "sp": 64
    },
    "weightkg": 10.5,
    "nfe": true,
    "abilities": {
      "0": "Gluttony"
    },
    "name_jp": "ヤナップ"
  },
  "Pansear": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 50,
      "at": 53,
      "df": 48,
      "sa": 53,
      "sd": 48,
      "sp": 64
    },
    "weightkg": 11,
    "nfe": true,
    "abilities": {
      "0": "Gluttony"
    },
    "name_jp": "バオップ"
  },
  "Patrat": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 45,
      "at": 55,
      "df": 39,
      "sa": 35,
      "sd": 39,
      "sp": 42
    },
    "weightkg": 11.6,
    "nfe": true,
    "abilities": {
      "0": "Run Away"
    },
    "name_jp": "ミネズミ"
  },
  "Pawniard": {
    "types": [
      "Dark",
      "Steel"
    ],
    "bs": {
      "hp": 45,
      "at": 85,
      "df": 70,
      "sa": 40,
      "sd": 40,
      "sp": 60
    },
    "weightkg": 10.2,
    "nfe": true,
    "abilities": {
      "0": "Defiant"
    },
    "name_jp": "コマタナ"
  },
  "Petilil": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 45,
      "at": 35,
      "df": 50,
      "sa": 70,
      "sd": 50,
      "sp": 30
    },
    "weightkg": 6.6,
    "nfe": true,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "チュリネ"
  },
  "Pidove": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 50,
      "at": 55,
      "df": 50,
      "sa": 36,
      "sd": 30,
      "sp": 43
    },
    "weightkg": 2.1,
    "nfe": true,
    "abilities": {
      "0": "Big Pecks"
    },
    "name_jp": "マメパト"
  },
  "Pignite": {
    "types": [
      "Fire",
      "Fighting"
    ],
    "bs": {
      "hp": 90,
      "at": 93,
      "df": 55,
      "sa": 70,
      "sd": 55,
      "sp": 55
    },
    "weightkg": 55.5,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "チャオブー"
  },
  "Purrloin": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 41,
      "at": 50,
      "df": 37,
      "sa": 50,
      "sd": 37,
      "sp": 66
    },
    "weightkg": 10.1,
    "nfe": true,
    "abilities": {
      "0": "Limber"
    },
    "name_jp": "チョロネコ"
  },
  "Reshiram": {
    "types": [
      "Dragon",
      "Fire"
    ],
    "bs": {
      "hp": 100,
      "at": 120,
      "df": 100,
      "sa": 150,
      "sd": 120,
      "sp": 90
    },
    "weightkg": 330,
    "abilities": {
      "0": "Turboblaze"
    },
    "gender": "N",
    "name_jp": "レシラム"
  },
  "Reuniclus": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 110,
      "at": 65,
      "df": 75,
      "sa": 125,
      "sd": 85,
      "sp": 30
    },
    "weightkg": 20.1,
    "abilities": {
      "0": "Overcoat"
    },
    "name_jp": "ランクルス"
  },
  "Roggenrola": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 55,
      "at": 75,
      "df": 85,
      "sa": 25,
      "sd": 25,
      "sp": 15
    },
    "weightkg": 18,
    "nfe": true,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "ダンゴロ"
  },
  "Rufflet": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 70,
      "at": 83,
      "df": 50,
      "sa": 37,
      "sd": 50,
      "sp": 60
    },
    "weightkg": 10.5,
    "nfe": true,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "ワシボン"
  },
  "Samurott": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 95,
      "at": 100,
      "df": 85,
      "sa": 108,
      "sd": 70,
      "sp": 70
    },
    "weightkg": 94.6,
    "abilities": {
      "0": "Torrent"
    },
    "otherFormes": [
      "Samurott-Hisui"
    ],
    "name_jp": "ダイケンキ"
  },
  "Sandile": {
    "types": [
      "Ground",
      "Dark"
    ],
    "bs": {
      "hp": 50,
      "at": 72,
      "df": 35,
      "sa": 35,
      "sd": 35,
      "sp": 65
    },
    "weightkg": 15.2,
    "nfe": true,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "メグロコ"
  },
  "Sawk": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 75,
      "at": 125,
      "df": 75,
      "sa": 30,
      "sd": 75,
      "sp": 85
    },
    "weightkg": 51,
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "ダゲキ"
  },
  "Sawsbuck": {
    "types": [
      "Normal",
      "Grass"
    ],
    "bs": {
      "hp": 80,
      "at": 100,
      "df": 70,
      "sa": 60,
      "sd": 70,
      "sp": 95
    },
    "weightkg": 92.5,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "メブキジカ"
  },
  "Scolipede": {
    "types": [
      "Bug",
      "Poison"
    ],
    "bs": {
      "hp": 60,
      "at": 100,
      "df": 89,
      "sa": 55,
      "sd": 69,
      "sp": 112
    },
    "weightkg": 200.5,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "ペンドラー"
  },
  "Scrafty": {
    "types": [
      "Dark",
      "Fighting"
    ],
    "bs": {
      "hp": 65,
      "at": 90,
      "df": 115,
      "sa": 45,
      "sd": 115,
      "sp": 58
    },
    "weightkg": 30,
    "abilities": {
      "0": "Shed Skin"
    },
    "name_jp": "ズルズキン"
  },
  "Scraggy": {
    "types": [
      "Dark",
      "Fighting"
    ],
    "bs": {
      "hp": 50,
      "at": 75,
      "df": 70,
      "sa": 35,
      "sd": 70,
      "sp": 48
    },
    "weightkg": 11.8,
    "nfe": true,
    "abilities": {
      "0": "Shed Skin"
    },
    "name_jp": "ズルッグ"
  },
  "Seismitoad": {
    "types": [
      "Water",
      "Ground"
    ],
    "bs": {
      "hp": 105,
      "at": 95,
      "df": 75,
      "sa": 85,
      "sd": 75,
      "sp": 74
    },
    "weightkg": 62,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "ガマゲロゲ"
  },
  "Serperior": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 75,
      "at": 75,
      "df": 95,
      "sa": 75,
      "sd": 95,
      "sp": 113
    },
    "weightkg": 63,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "ジャローダ"
  },
  "Servine": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 60,
      "at": 60,
      "df": 75,
      "sa": 60,
      "sd": 75,
      "sp": 83
    },
    "weightkg": 16,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "ジャノビー"
  },
  "Sewaddle": {
    "types": [
      "Bug",
      "Grass"
    ],
    "bs": {
      "hp": 45,
      "at": 53,
      "df": 70,
      "sa": 40,
      "sd": 60,
      "sp": 42
    },
    "weightkg": 2.5,
    "nfe": true,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "クルミル"
  },
  "Shelmet": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 50,
      "at": 40,
      "df": 85,
      "sa": 40,
      "sd": 65,
      "sp": 25
    },
    "weightkg": 7.7,
    "nfe": true,
    "abilities": {
      "0": "Hydration"
    },
    "name_jp": "チョボマキ"
  },
  "Sigilyph": {
    "types": [
      "Psychic",
      "Flying"
    ],
    "bs": {
      "hp": 72,
      "at": 58,
      "df": 80,
      "sa": 103,
      "sd": 80,
      "sp": 97
    },
    "weightkg": 14,
    "abilities": {
      "0": "Wonder Skin"
    },
    "name_jp": "シンボラー"
  },
  "Simipour": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 75,
      "at": 98,
      "df": 63,
      "sa": 98,
      "sd": 63,
      "sp": 101
    },
    "weightkg": 29,
    "abilities": {
      "0": "Gluttony"
    },
    "name_jp": "ヒヤッキー"
  },
  "Simisage": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 75,
      "at": 98,
      "df": 63,
      "sa": 98,
      "sd": 63,
      "sp": 101
    },
    "weightkg": 30.5,
    "abilities": {
      "0": "Gluttony"
    },
    "name_jp": "ヤナッキー"
  },
  "Simisear": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 75,
      "at": 98,
      "df": 63,
      "sa": 98,
      "sd": 63,
      "sp": 101
    },
    "weightkg": 28,
    "abilities": {
      "0": "Gluttony"
    },
    "name_jp": "バオッキー"
  },
  "Snivy": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 45,
      "at": 45,
      "df": 55,
      "sa": 45,
      "sd": 55,
      "sp": 63
    },
    "weightkg": 8.1,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "ツタージャ"
  },
  "Solosis": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 45,
      "at": 30,
      "df": 40,
      "sa": 105,
      "sd": 50,
      "sp": 20
    },
    "weightkg": 1,
    "nfe": true,
    "abilities": {
      "0": "Overcoat"
    },
    "name_jp": "ユニラン"
  },
  "Stoutland": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 85,
      "at": 110,
      "df": 90,
      "sa": 45,
      "sd": 90,
      "sp": 80
    },
    "weightkg": 61,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "ムーランド"
  },
  "Stunfisk": {
    "types": [
      "Ground",
      "Electric"
    ],
    "bs": {
      "hp": 109,
      "at": 66,
      "df": 84,
      "sa": 81,
      "sd": 99,
      "sp": 32
    },
    "weightkg": 11,
    "abilities": {
      "0": "Static"
    },
    "otherFormes": [
      "Stunfisk-Galar"
    ],
    "name_jp": "マッギョ"
  },
  "Swadloon": {
    "types": [
      "Bug",
      "Grass"
    ],
    "bs": {
      "hp": 55,
      "at": 63,
      "df": 90,
      "sa": 50,
      "sd": 80,
      "sp": 42
    },
    "weightkg": 7.3,
    "nfe": true,
    "abilities": {
      "0": "Leaf Guard"
    },
    "name_jp": "クルマユ"
  },
  "Swanna": {
    "types": [
      "Water",
      "Flying"
    ],
    "bs": {
      "hp": 75,
      "at": 87,
      "df": 63,
      "sa": 87,
      "sd": 63,
      "sp": 98
    },
    "weightkg": 24.2,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "スワンナ"
  },
  "Swoobat": {
    "types": [
      "Psychic",
      "Flying"
    ],
    "bs": {
      "hp": 67,
      "at": 57,
      "df": 55,
      "sa": 77,
      "sd": 55,
      "sp": 114
    },
    "weightkg": 10.5,
    "abilities": {
      "0": "Unaware"
    },
    "name_jp": "ココロモリ"
  },
  "Tepig": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 65,
      "at": 63,
      "df": 45,
      "sa": 45,
      "sd": 45,
      "sp": 45
    },
    "weightkg": 9.9,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "ポカブ"
  },
  "Terrakion": {
    "types": [
      "Rock",
      "Fighting"
    ],
    "bs": {
      "hp": 91,
      "at": 129,
      "df": 90,
      "sa": 72,
      "sd": 90,
      "sp": 108
    },
    "weightkg": 260,
    "abilities": {
      "0": "Justified"
    },
    "gender": "N",
    "name_jp": "テラキオン"
  },
  "Throh": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 120,
      "at": 100,
      "df": 85,
      "sa": 30,
      "sd": 85,
      "sp": 45
    },
    "weightkg": 55.5,
    "abilities": {
      "0": "Guts"
    },
    "name_jp": "ナゲキ"
  },
  "Thundurus": {
    "types": [
      "Electric",
      "Flying"
    ],
    "bs": {
      "hp": 79,
      "at": 115,
      "df": 70,
      "sa": 125,
      "sd": 80,
      "sp": 111
    },
    "weightkg": 61,
    "abilities": {
      "0": "Prankster"
    },
    "otherFormes": [
      "Thundurus-Therian"
    ],
    "name_jp": "ボルトロス(けしん)"
  },
  "Thundurus-Therian": {
    "types": [
      "Electric",
      "Flying"
    ],
    "bs": {
      "hp": 79,
      "at": 105,
      "df": 70,
      "sa": 145,
      "sd": 80,
      "sp": 101
    },
    "weightkg": 61,
    "abilities": {
      "0": "Volt Absorb"
    },
    "baseSpecies": "Thundurus",
    "name_jp": "ボルトロス(れいじゅう)"
  },
  "Timburr": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 75,
      "at": 80,
      "df": 55,
      "sa": 25,
      "sd": 35,
      "sp": 35
    },
    "weightkg": 12.5,
    "nfe": true,
    "abilities": {
      "0": "Guts"
    },
    "name_jp": "ドッコラー"
  },
  "Tirtouga": {
    "types": [
      "Water",
      "Rock"
    ],
    "bs": {
      "hp": 54,
      "at": 78,
      "df": 103,
      "sa": 53,
      "sd": 45,
      "sp": 22
    },
    "weightkg": 16.5,
    "nfe": true,
    "abilities": {
      "0": "Solid Rock"
    },
    "name_jp": "プロトーガ"
  },
  "Tornadus": {
    "types": [
      "Flying"
    ],
    "bs": {
      "hp": 79,
      "at": 115,
      "df": 70,
      "sa": 125,
      "sd": 80,
      "sp": 111
    },
    "weightkg": 63,
    "abilities": {
      "0": "Prankster"
    },
    "otherFormes": [
      "Tornadus-Therian"
    ],
    "name_jp": "トルネロス(けしん)"
  },
  "Tornadus-Therian": {
    "types": [
      "Flying"
    ],
    "bs": {
      "hp": 79,
      "at": 100,
      "df": 80,
      "sa": 110,
      "sd": 90,
      "sp": 121
    },
    "weightkg": 63,
    "abilities": {
      "0": "Regenerator"
    },
    "baseSpecies": "Tornadus",
    "name_jp": "トルネロス(れいじゅう)"
  },
  "Tranquill": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 62,
      "at": 77,
      "df": 62,
      "sa": 50,
      "sd": 42,
      "sp": 65
    },
    "weightkg": 15,
    "nfe": true,
    "abilities": {
      "0": "Big Pecks"
    },
    "name_jp": "ハトーボー"
  },
  "Trubbish": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 50,
      "at": 50,
      "df": 62,
      "sa": 40,
      "sd": 62,
      "sp": 65
    },
    "weightkg": 31,
    "nfe": true,
    "abilities": {
      "0": "Stench"
    },
    "name_jp": "ヤブクロン"
  },
  "Tympole": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 50,
      "df": 40,
      "sa": 50,
      "sd": 40,
      "sp": 64
    },
    "weightkg": 4.5,
    "nfe": true,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "オタマロ"
  },
  "Tynamo": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 35,
      "at": 55,
      "df": 40,
      "sa": 45,
      "sd": 40,
      "sp": 60
    },
    "weightkg": 0.3,
    "abilities": {
      "0": "Levitate"
    },
    "nfe": true,
    "name_jp": "シビシラス"
  },
  "Unfezant": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 80,
      "at": 115,
      "df": 80,
      "sa": 65,
      "sd": 55,
      "sp": 93
    },
    "weightkg": 29,
    "abilities": {
      "0": "Big Pecks"
    },
    "name_jp": "ケンホロウ"
  },
  "Vanillish": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 51,
      "at": 65,
      "df": 65,
      "sa": 80,
      "sd": 75,
      "sp": 59
    },
    "weightkg": 41,
    "nfe": true,
    "abilities": {
      "0": "Ice Body"
    },
    "name_jp": "バニリッチ"
  },
  "Vanillite": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 36,
      "at": 50,
      "df": 50,
      "sa": 65,
      "sd": 60,
      "sp": 44
    },
    "weightkg": 5.7,
    "nfe": true,
    "abilities": {
      "0": "Ice Body"
    },
    "name_jp": "バニプッチ"
  },
  "Vanilluxe": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 71,
      "at": 95,
      "df": 85,
      "sa": 110,
      "sd": 95,
      "sp": 79
    },
    "weightkg": 57.5,
    "abilities": {
      "0": "Ice Body"
    },
    "name_jp": "バイバニラ"
  },
  "Venipede": {
    "types": [
      "Bug",
      "Poison"
    ],
    "bs": {
      "hp": 30,
      "at": 45,
      "df": 59,
      "sa": 30,
      "sd": 39,
      "sp": 57
    },
    "weightkg": 5.3,
    "nfe": true,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "フシデ"
  },
  "Victini": {
    "types": [
      "Psychic",
      "Fire"
    ],
    "bs": {
      "hp": 100,
      "at": 100,
      "df": 100,
      "sa": 100,
      "sd": 100,
      "sp": 100
    },
    "weightkg": 4,
    "abilities": {
      "0": "Victory Star"
    },
    "gender": "N",
    "name_jp": "ビクティニ"
  },
  "Virizion": {
    "types": [
      "Grass",
      "Fighting"
    ],
    "bs": {
      "hp": 91,
      "at": 90,
      "df": 72,
      "sa": 90,
      "sd": 129,
      "sp": 108
    },
    "weightkg": 200,
    "abilities": {
      "0": "Justified"
    },
    "gender": "N",
    "name_jp": "ビリジオン"
  },
  "Volcarona": {
    "types": [
      "Bug",
      "Fire"
    ],
    "bs": {
      "hp": 85,
      "at": 60,
      "df": 65,
      "sa": 135,
      "sd": 105,
      "sp": 100
    },
    "weightkg": 46,
    "abilities": {
      "0": "Flame Body"
    },
    "name_jp": "ウルガモス"
  },
  "Vullaby": {
    "types": [
      "Dark",
      "Flying"
    ],
    "bs": {
      "hp": 70,
      "at": 55,
      "df": 75,
      "sa": 45,
      "sd": 65,
      "sp": 60
    },
    "weightkg": 9,
    "nfe": true,
    "abilities": {
      "0": "Big Pecks"
    },
    "name_jp": "バルチャイ"
  },
  "Watchog": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 60,
      "at": 85,
      "df": 69,
      "sa": 60,
      "sd": 69,
      "sp": 77
    },
    "weightkg": 27,
    "abilities": {
      "0": "Illuminate"
    },
    "name_jp": "ミルホッグ"
  },
  "Whimsicott": {
    "types": [
      "Grass",
      "Fairy"
    ],
    "bs": {
      "hp": 60,
      "at": 67,
      "df": 85,
      "sa": 77,
      "sd": 75,
      "sp": 116
    },
    "weightkg": 6.6,
    "abilities": {
      "0": "Prankster"
    },
    "name_jp": "エルフーン"
  },
  "Whirlipede": {
    "types": [
      "Bug",
      "Poison"
    ],
    "bs": {
      "hp": 40,
      "at": 55,
      "df": 99,
      "sa": 40,
      "sd": 79,
      "sp": 47
    },
    "weightkg": 58.5,
    "nfe": true,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "ホイーガ"
  },
  "Woobat": {
    "types": [
      "Psychic",
      "Flying"
    ],
    "bs": {
      "hp": 65,
      "at": 45,
      "df": 43,
      "sa": 55,
      "sd": 43,
      "sp": 72
    },
    "weightkg": 2.1,
    "nfe": true,
    "abilities": {
      "0": "Unaware"
    },
    "name_jp": "コロモリ"
  },
  "Yamask": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 38,
      "at": 30,
      "df": 85,
      "sa": 55,
      "sd": 65,
      "sp": 30
    },
    "weightkg": 1.5,
    "abilities": {
      "0": "Mummy"
    },
    "nfe": true,
    "otherFormes": [
      "Yamask-Galar"
    ],
    "name_jp": "デスマス"
  },
  "Zebstrika": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 75,
      "at": 100,
      "df": 63,
      "sa": 80,
      "sd": 63,
      "sp": 116
    },
    "weightkg": 79.5,
    "abilities": {
      "0": "Lightning Rod"
    },
    "name_jp": "ゼブライカ"
  },
  "Zekrom": {
    "types": [
      "Dragon",
      "Electric"
    ],
    "bs": {
      "hp": 100,
      "at": 150,
      "df": 120,
      "sa": 120,
      "sd": 100,
      "sp": 90
    },
    "weightkg": 345,
    "abilities": {
      "0": "Teravolt"
    },
    "gender": "N",
    "name_jp": "ゼクロム"
  },
  "Zoroark": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 60,
      "at": 105,
      "df": 60,
      "sa": 120,
      "sd": 60,
      "sp": 105
    },
    "weightkg": 81.1,
    "abilities": {
      "0": "Illusion"
    },
    "otherFormes": [
      "Zoroark-Hisui"
    ],
    "name_jp": "ゾロアーク"
  },
  "Zorua": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 40,
      "at": 65,
      "df": 40,
      "sa": 80,
      "sd": 40,
      "sp": 65
    },
    "weightkg": 12.5,
    "abilities": {
      "0": "Illusion"
    },
    "nfe": true,
    "otherFormes": [
      "Zorua-Hisui"
    ],
    "name_jp": "ゾロア"
  },
  "Zweilous": {
    "types": [
      "Dark",
      "Dragon"
    ],
    "bs": {
      "hp": 72,
      "at": 85,
      "df": 70,
      "sa": 65,
      "sd": 70,
      "sp": 58
    },
    "weightkg": 50,
    "abilities": {
      "0": "Hustle"
    },
    "nfe": true,
    "name_jp": "ジヘッド"
  },
  "Aegislash-Blade": {
    "types": [
      "Steel",
      "Ghost"
    ],
    "bs": {
      "hp": 60,
      "at": 140,
      "df": 50,
      "sa": 140,
      "sd": 50,
      "sp": 60
    },
    "weightkg": 53,
    "abilities": {
      "0": "Stance Change"
    },
    "otherFormes": [
      "Aegislash-Shield",
      "Aegislash-Both"
    ],
    "name_jp": "ギルガルド(ブレード)"
  },
  "Aegislash-Shield": {
    "types": [
      "Steel",
      "Ghost"
    ],
    "bs": {
      "hp": 60,
      "at": 50,
      "df": 140,
      "sa": 50,
      "sd": 140,
      "sp": 60
    },
    "weightkg": 53,
    "abilities": {
      "0": "Stance Change"
    },
    "baseSpecies": "Aegislash-Blade",
    "name_jp": "ギルガルド(シールド)"
  },
  "Amaura": {
    "types": [
      "Rock",
      "Ice"
    ],
    "bs": {
      "hp": 77,
      "at": 59,
      "df": 50,
      "sa": 67,
      "sd": 63,
      "sp": 46
    },
    "weightkg": 25.2,
    "nfe": true,
    "abilities": {
      "0": "Refrigerate"
    },
    "name_jp": "アマルス"
  },
  "Arceus-Fairy": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 120,
      "at": 120,
      "df": 120,
      "sa": 120,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 320,
    "abilities": {
      "0": "Multitype"
    },
    "baseSpecies": "Arceus",
    "gender": "N",
    "name_jp": "アルセウス(フェアリー)"
  },
  "Aromatisse": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 101,
      "at": 72,
      "df": 72,
      "sa": 99,
      "sd": 89,
      "sp": 29
    },
    "weightkg": 15.5,
    "abilities": {
      "0": "Healer"
    },
    "name_jp": "フレフワン"
  },
  "Aurorus": {
    "types": [
      "Rock",
      "Ice"
    ],
    "bs": {
      "hp": 123,
      "at": 77,
      "df": 72,
      "sa": 99,
      "sd": 92,
      "sp": 58
    },
    "weightkg": 225,
    "abilities": {
      "0": "Refrigerate"
    },
    "name_jp": "アマルルガ"
  },
  "Avalugg": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 95,
      "at": 117,
      "df": 184,
      "sa": 44,
      "sd": 46,
      "sp": 28
    },
    "weightkg": 505,
    "abilities": {
      "0": "Own Tempo"
    },
    "otherFormes": [
      "Avalugg-Hisui"
    ],
    "name_jp": "クレベース"
  },
  "Barbaracle": {
    "types": [
      "Rock",
      "Water"
    ],
    "bs": {
      "hp": 72,
      "at": 105,
      "df": 115,
      "sa": 54,
      "sd": 86,
      "sp": 68
    },
    "weightkg": 96,
    "abilities": {
      "0": "Tough Claws"
    },
    "name_jp": "ガメノデス"
  },
  "Bergmite": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 55,
      "at": 69,
      "df": 85,
      "sa": 32,
      "sd": 35,
      "sp": 28
    },
    "weightkg": 99.5,
    "nfe": true,
    "abilities": {
      "0": "Own Tempo"
    },
    "name_jp": "カチコール"
  },
  "Binacle": {
    "types": [
      "Rock",
      "Water"
    ],
    "bs": {
      "hp": 42,
      "at": 52,
      "df": 67,
      "sa": 39,
      "sd": 56,
      "sp": 50
    },
    "weightkg": 31,
    "nfe": true,
    "abilities": {
      "0": "Tough Claws"
    },
    "name_jp": "カメテテ"
  },
  "Braixen": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 59,
      "at": 59,
      "df": 58,
      "sa": 90,
      "sd": 70,
      "sp": 73
    },
    "weightkg": 14.5,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "テールナー"
  },
  "Bunnelby": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 38,
      "at": 36,
      "df": 38,
      "sa": 32,
      "sd": 36,
      "sp": 57
    },
    "weightkg": 5,
    "nfe": true,
    "abilities": {
      "0": "Pickup"
    },
    "name_jp": "ホルビー"
  },
  "Carbink": {
    "types": [
      "Rock",
      "Fairy"
    ],
    "bs": {
      "hp": 50,
      "at": 50,
      "df": 150,
      "sa": 50,
      "sd": 150,
      "sp": 50
    },
    "weightkg": 5.7,
    "gender": "N",
    "abilities": {
      "0": "Clear Body"
    },
    "name_jp": "メレシー"
  },
  "Chesnaught": {
    "types": [
      "Grass",
      "Fighting"
    ],
    "bs": {
      "hp": 88,
      "at": 107,
      "df": 122,
      "sa": 74,
      "sd": 75,
      "sp": 64
    },
    "weightkg": 90,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "ブリガロン"
  },
  "Chespin": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 56,
      "at": 61,
      "df": 65,
      "sa": 48,
      "sd": 45,
      "sp": 38
    },
    "weightkg": 9,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "ハリマロン"
  },
  "Clauncher": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 53,
      "df": 62,
      "sa": 58,
      "sd": 63,
      "sp": 44
    },
    "weightkg": 8.3,
    "abilities": {
      "0": "Mega Launcher"
    },
    "nfe": true,
    "name_jp": "ウデッポウ"
  },
  "Clawitzer": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 71,
      "at": 73,
      "df": 88,
      "sa": 120,
      "sd": 89,
      "sp": 59
    },
    "weightkg": 35.3,
    "abilities": {
      "0": "Mega Launcher"
    },
    "name_jp": "ブロスター"
  },
  "Diancie": {
    "types": [
      "Rock",
      "Fairy"
    ],
    "bs": {
      "hp": 50,
      "at": 100,
      "df": 150,
      "sa": 100,
      "sd": 150,
      "sp": 50
    },
    "weightkg": 8.8,
    "abilities": {
      "0": "Clear Body"
    },
    "otherFormes": [
      "Diancie-Mega"
    ],
    "gender": "N",
    "name_jp": "ディアンシー"
  },
  "Dedenne": {
    "types": [
      "Electric",
      "Fairy"
    ],
    "bs": {
      "hp": 67,
      "at": 58,
      "df": 57,
      "sa": 81,
      "sd": 67,
      "sp": 101
    },
    "weightkg": 2.2,
    "abilities": {
      "0": "Cheek Pouch"
    },
    "name_jp": "デデンネ"
  },
  "Delphox": {
    "types": [
      "Fire",
      "Psychic"
    ],
    "bs": {
      "hp": 75,
      "at": 69,
      "df": 72,
      "sa": 114,
      "sd": 100,
      "sp": 104
    },
    "weightkg": 39,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "マフォクシー"
  },
  "Diggersby": {
    "types": [
      "Normal",
      "Ground"
    ],
    "bs": {
      "hp": 85,
      "at": 56,
      "df": 77,
      "sa": 50,
      "sd": 77,
      "sp": 78
    },
    "weightkg": 42.4,
    "abilities": {
      "0": "Pickup"
    },
    "name_jp": "ホルード"
  },
  "Doublade": {
    "types": [
      "Steel",
      "Ghost"
    ],
    "bs": {
      "hp": 59,
      "at": 110,
      "df": 150,
      "sa": 45,
      "sd": 49,
      "sp": 35
    },
    "weightkg": 4.5,
    "abilities": {
      "0": "No Guard"
    },
    "nfe": true,
    "name_jp": "ニダンギル"
  },
  "Dragalge": {
    "types": [
      "Poison",
      "Dragon"
    ],
    "bs": {
      "hp": 65,
      "at": 75,
      "df": 90,
      "sa": 97,
      "sd": 123,
      "sp": 44
    },
    "weightkg": 81.5,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "ドラミドロ"
  },
  "Espurr": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 62,
      "at": 48,
      "df": 54,
      "sa": 63,
      "sd": 60,
      "sp": 68
    },
    "weightkg": 3.5,
    "nfe": true,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "ニャスパー"
  },
  "Fennekin": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 40,
      "at": 45,
      "df": 40,
      "sa": 62,
      "sd": 60,
      "sp": 60
    },
    "weightkg": 9.4,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "フォッコ"
  },
  "Flabébé": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 44,
      "at": 38,
      "df": 39,
      "sa": 61,
      "sd": 79,
      "sp": 42
    },
    "weightkg": 0.1,
    "nfe": true,
    "abilities": {
      "0": "Flower Veil"
    },
    "name_jp": "フラベベ"
  },
  "Fletchinder": {
    "types": [
      "Fire",
      "Flying"
    ],
    "bs": {
      "hp": 62,
      "at": 73,
      "df": 55,
      "sa": 56,
      "sd": 52,
      "sp": 84
    },
    "weightkg": 16,
    "nfe": true,
    "abilities": {
      "0": "Flame Body"
    },
    "name_jp": "ヒノヤコマ"
  },
  "Fletchling": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 45,
      "at": 50,
      "df": 43,
      "sa": 40,
      "sd": 38,
      "sp": 62
    },
    "weightkg": 1.7,
    "nfe": true,
    "abilities": {
      "0": "Big Pecks"
    },
    "name_jp": "ヤヤコマ"
  },
  "Floette": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 54,
      "at": 45,
      "df": 47,
      "sa": 75,
      "sd": 98,
      "sp": 52
    },
    "weightkg": 0.9,
    "nfe": true,
    "otherFormes": [
      "Floette-Eternal"
    ],
    "abilities": {
      "0": "Flower Veil"
    },
    "name_jp": "フラエッテ"
  },
  "Floette-Eternal": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 74,
      "at": 65,
      "df": 67,
      "sa": 125,
      "sd": 128,
      "sp": 92
    },
    "weightkg": 0.9,
    "abilities": {
      "0": "Flower Veil"
    },
    "baseSpecies": "Floette",
    "name_jp": "フラエッテ(えいえん)"
  },
  "Florges": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 78,
      "at": 65,
      "df": 68,
      "sa": 112,
      "sd": 154,
      "sp": 75
    },
    "weightkg": 10,
    "abilities": {
      "0": "Flower Veil"
    },
    "name_jp": "フラージェス"
  },
  "Froakie": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 41,
      "at": 56,
      "df": 40,
      "sa": 62,
      "sd": 44,
      "sp": 71
    },
    "weightkg": 7,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "ケロマツ"
  },
  "Frogadier": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 54,
      "at": 63,
      "df": 52,
      "sa": 83,
      "sd": 56,
      "sp": 97
    },
    "weightkg": 10.9,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "ゲコガシラ"
  },
  "Furfrou": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 75,
      "at": 80,
      "df": 60,
      "sa": 65,
      "sd": 90,
      "sp": 102
    },
    "weightkg": 28,
    "abilities": {
      "0": "Fur Coat"
    },
    "name_jp": "トリミアン"
  },
  "Gogoat": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 123,
      "at": 100,
      "df": 62,
      "sa": 97,
      "sd": 81,
      "sp": 68
    },
    "weightkg": 91,
    "abilities": {
      "0": "Sap Sipper"
    },
    "name_jp": "ゴーゴート"
  },
  "Goodra": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 90,
      "at": 100,
      "df": 70,
      "sa": 110,
      "sd": 150,
      "sp": 80
    },
    "weightkg": 150.5,
    "abilities": {
      "0": "Sap Sipper"
    },
    "otherFormes": [
      "Goodra-Hisui"
    ],
    "name_jp": "ヌメルゴン"
  },
  "Goomy": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 45,
      "at": 50,
      "df": 35,
      "sa": 55,
      "sd": 75,
      "sp": 40
    },
    "weightkg": 2.8,
    "nfe": true,
    "abilities": {
      "0": "Sap Sipper"
    },
    "name_jp": "ヌメラ"
  },
  "Gourgeist": {
    "types": [
      "Ghost",
      "Grass"
    ],
    "bs": {
      "hp": 65,
      "at": 90,
      "df": 122,
      "sa": 58,
      "sd": 75,
      "sp": 84
    },
    "weightkg": 12.5,
    "abilities": {
      "0": "Pickup"
    },
    "otherFormes": [
      "Gourgeist-Large",
      "Gourgeist-Small",
      "Gourgeist-Super"
    ],
    "name_jp": "パンプジン(ふつう)"
  },
  "Gourgeist-Large": {
    "types": [
      "Ghost",
      "Grass"
    ],
    "bs": {
      "hp": 75,
      "at": 95,
      "df": 122,
      "sa": 58,
      "sd": 75,
      "sp": 69
    },
    "weightkg": 14,
    "abilities": {
      "0": "Pickup"
    },
    "baseSpecies": "Gourgeist",
    "name_jp": "パンプジン(おおきい)"
  },
  "Gourgeist-Small": {
    "types": [
      "Ghost",
      "Grass"
    ],
    "bs": {
      "hp": 55,
      "at": 85,
      "df": 122,
      "sa": 58,
      "sd": 75,
      "sp": 99
    },
    "weightkg": 9.5,
    "abilities": {
      "0": "Pickup"
    },
    "baseSpecies": "Gourgeist",
    "name_jp": "パンプジン(ちいさい)"
  },
  "Gourgeist-Super": {
    "types": [
      "Ghost",
      "Grass"
    ],
    "bs": {
      "hp": 85,
      "at": 100,
      "df": 122,
      "sa": 58,
      "sd": 75,
      "sp": 54
    },
    "weightkg": 39,
    "abilities": {
      "0": "Pickup"
    },
    "baseSpecies": "Gourgeist",
    "name_jp": "パンプジン(とくだい)"
  },
  "Greninja": {
    "types": [
      "Water",
      "Dark"
    ],
    "bs": {
      "hp": 72,
      "at": 95,
      "df": 67,
      "sa": 103,
      "sd": 71,
      "sp": 122
    },
    "weightkg": 40,
    "abilities": {
      "0": "Torrent"
    },
    "otherFormes": [
      "Greninja-Ash",
      "Greninja-Bond"
    ],
    "name_jp": "ゲッコウガ"
  },
  "Hawlucha": {
    "types": [
      "Fighting",
      "Flying"
    ],
    "bs": {
      "hp": 78,
      "at": 92,
      "df": 75,
      "sa": 74,
      "sd": 63,
      "sp": 118
    },
    "weightkg": 21.5,
    "abilities": {
      "0": "Limber"
    },
    "name_jp": "ルチャブル"
  },
  "Heliolisk": {
    "types": [
      "Electric",
      "Normal"
    ],
    "bs": {
      "hp": 62,
      "at": 55,
      "df": 52,
      "sa": 109,
      "sd": 94,
      "sp": 109
    },
    "weightkg": 21,
    "abilities": {
      "0": "Dry Skin"
    },
    "name_jp": "エレザード"
  },
  "Helioptile": {
    "types": [
      "Electric",
      "Normal"
    ],
    "bs": {
      "hp": 44,
      "at": 38,
      "df": 33,
      "sa": 61,
      "sd": 43,
      "sp": 70
    },
    "weightkg": 6,
    "nfe": true,
    "abilities": {
      "0": "Dry Skin"
    },
    "name_jp": "エリキテル"
  },
  "Honedge": {
    "types": [
      "Steel",
      "Ghost"
    ],
    "bs": {
      "hp": 45,
      "at": 80,
      "df": 100,
      "sa": 35,
      "sd": 37,
      "sp": 28
    },
    "weightkg": 2,
    "abilities": {
      "0": "No Guard"
    },
    "nfe": true,
    "name_jp": "ヒトツキ"
  },
  "Hoopa": {
    "types": [
      "Psychic",
      "Ghost"
    ],
    "bs": {
      "hp": 80,
      "at": 110,
      "df": 60,
      "sa": 150,
      "sd": 130,
      "sp": 70
    },
    "weightkg": 9,
    "gender": "N",
    "abilities": {
      "0": "Magician"
    },
    "otherFormes": [
      "Hoopa-Unbound"
    ],
    "name_jp": "フーパ(いましめられし)"
  },
  "Hoopa-Unbound": {
    "types": [
      "Psychic",
      "Dark"
    ],
    "bs": {
      "hp": 80,
      "at": 160,
      "df": 60,
      "sa": 170,
      "sd": 130,
      "sp": 80
    },
    "weightkg": 490,
    "gender": "N",
    "abilities": {
      "0": "Magician"
    },
    "baseSpecies": "Hoopa",
    "name_jp": "フーパ(ときはなたれし)"
  },
  "Inkay": {
    "types": [
      "Dark",
      "Psychic"
    ],
    "bs": {
      "hp": 53,
      "at": 54,
      "df": 53,
      "sa": 37,
      "sd": 46,
      "sp": 45
    },
    "weightkg": 3.5,
    "nfe": true,
    "abilities": {
      "0": "Contrary"
    },
    "name_jp": "マーイーカ"
  },
  "Klefki": {
    "types": [
      "Steel",
      "Fairy"
    ],
    "bs": {
      "hp": 57,
      "at": 80,
      "df": 91,
      "sa": 80,
      "sd": 87,
      "sp": 75
    },
    "weightkg": 3,
    "abilities": {
      "0": "Prankster"
    },
    "name_jp": "クレッフィ"
  },
  "Litleo": {
    "types": [
      "Fire",
      "Normal"
    ],
    "bs": {
      "hp": 62,
      "at": 50,
      "df": 58,
      "sa": 73,
      "sd": 54,
      "sp": 72
    },
    "weightkg": 13.5,
    "nfe": true,
    "abilities": {
      "0": "Rivalry"
    },
    "name_jp": "シシコ"
  },
  "Malamar": {
    "types": [
      "Dark",
      "Psychic"
    ],
    "bs": {
      "hp": 86,
      "at": 92,
      "df": 88,
      "sa": 68,
      "sd": 75,
      "sp": 73
    },
    "weightkg": 47,
    "abilities": {
      "0": "Contrary"
    },
    "name_jp": "カラマネロ"
  },
  "Meowstic": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 74,
      "at": 48,
      "df": 76,
      "sa": 83,
      "sd": 81,
      "sp": 104
    },
    "weightkg": 8.5,
    "abilities": {
      "0": "Keen Eye"
    },
    "otherFormes": [
      "Meowstic-F"
    ],
    "name_jp": "ニャオニクス(オス)"
  },
  "Meowstic-F": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 74,
      "at": 48,
      "df": 76,
      "sa": 83,
      "sd": 81,
      "sp": 104
    },
    "weightkg": 8.5,
    "abilities": {
      "0": "Keen Eye"
    },
    "baseSpecies": "Meowstic",
    "name_jp": "ニャオニクス(メス)"
  },
  "Noibat": {
    "types": [
      "Flying",
      "Dragon"
    ],
    "bs": {
      "hp": 40,
      "at": 30,
      "df": 35,
      "sa": 45,
      "sd": 40,
      "sp": 55
    },
    "weightkg": 8,
    "nfe": true,
    "abilities": {
      "0": "Frisk"
    },
    "name_jp": "オンバット"
  },
  "Noivern": {
    "types": [
      "Flying",
      "Dragon"
    ],
    "bs": {
      "hp": 85,
      "at": 70,
      "df": 80,
      "sa": 97,
      "sd": 80,
      "sp": 123
    },
    "weightkg": 85,
    "abilities": {
      "0": "Frisk"
    },
    "name_jp": "オンバーン"
  },
  "Pancham": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 67,
      "at": 82,
      "df": 62,
      "sa": 46,
      "sd": 48,
      "sp": 43
    },
    "weightkg": 8,
    "nfe": true,
    "abilities": {
      "0": "Iron Fist"
    },
    "name_jp": "ヤンチャム"
  },
  "Pangoro": {
    "types": [
      "Fighting",
      "Dark"
    ],
    "bs": {
      "hp": 95,
      "at": 124,
      "df": 78,
      "sa": 69,
      "sd": 71,
      "sp": 58
    },
    "weightkg": 136,
    "abilities": {
      "0": "Iron Fist"
    },
    "name_jp": "ゴロンダ"
  },
  "Phantump": {
    "types": [
      "Ghost",
      "Grass"
    ],
    "bs": {
      "hp": 43,
      "at": 70,
      "df": 48,
      "sa": 50,
      "sd": 60,
      "sp": 38
    },
    "weightkg": 7,
    "nfe": true,
    "abilities": {
      "0": "Natural Cure"
    },
    "name_jp": "ボクレー"
  },
  "Groudon-Primal": {
    "types": [
      "Ground",
      "Fire"
    ],
    "bs": {
      "hp": 100,
      "at": 180,
      "df": 160,
      "sa": 150,
      "sd": 90,
      "sp": 90
    },
    "weightkg": 999.7,
    "abilities": {
      "0": "Desolate Land"
    },
    "baseSpecies": "Groudon",
    "gender": "N",
    "name_jp": "グラードン(ゲンシカイキ)"
  },
  "Kyogre-Primal": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 100,
      "at": 150,
      "df": 90,
      "sa": 180,
      "sd": 160,
      "sp": 90
    },
    "weightkg": 430,
    "abilities": {
      "0": "Primordial Sea"
    },
    "baseSpecies": "Kyogre",
    "gender": "N",
    "name_jp": "カイオーガ(ゲンシカイキ)"
  },
  "Pumpkaboo": {
    "types": [
      "Ghost",
      "Grass"
    ],
    "bs": {
      "hp": 49,
      "at": 66,
      "df": 70,
      "sa": 44,
      "sd": 55,
      "sp": 51
    },
    "weightkg": 5,
    "nfe": true,
    "abilities": {
      "0": "Pickup"
    },
    "otherFormes": [
      "Pumpkaboo-Large",
      "Pumpkaboo-Small",
      "Pumpkaboo-Super"
    ],
    "name_jp": "バケッチャ(ふつう)"
  },
  "Pumpkaboo-Large": {
    "types": [
      "Ghost",
      "Grass"
    ],
    "bs": {
      "hp": 54,
      "at": 66,
      "df": 70,
      "sa": 44,
      "sd": 55,
      "sp": 46
    },
    "weightkg": 7.5,
    "nfe": true,
    "abilities": {
      "0": "Pickup"
    },
    "baseSpecies": "Pumpkaboo",
    "name_jp": "バケッチャ(おおきい)"
  },
  "Pumpkaboo-Small": {
    "types": [
      "Ghost",
      "Grass"
    ],
    "bs": {
      "hp": 44,
      "at": 66,
      "df": 70,
      "sa": 44,
      "sd": 55,
      "sp": 56
    },
    "weightkg": 3.5,
    "nfe": true,
    "abilities": {
      "0": "Pickup"
    },
    "baseSpecies": "Pumpkaboo",
    "name_jp": "バケッチャ(ちいさい)"
  },
  "Pumpkaboo-Super": {
    "types": [
      "Ghost",
      "Grass"
    ],
    "bs": {
      "hp": 59,
      "at": 66,
      "df": 70,
      "sa": 44,
      "sd": 55,
      "sp": 41
    },
    "weightkg": 15,
    "nfe": true,
    "abilities": {
      "0": "Pickup"
    },
    "baseSpecies": "Pumpkaboo",
    "name_jp": "バケッチャ(とくだい)"
  },
  "Pyroar": {
    "types": [
      "Fire",
      "Normal"
    ],
    "bs": {
      "hp": 86,
      "at": 68,
      "df": 72,
      "sa": 109,
      "sd": 66,
      "sp": 106
    },
    "weightkg": 81.5,
    "abilities": {
      "0": "Rivalry"
    },
    "name_jp": "カエンジシ"
  },
  "Quilladin": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 61,
      "at": 78,
      "df": 95,
      "sa": 56,
      "sd": 58,
      "sp": 57
    },
    "weightkg": 29,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "ハリボーグ"
  },
  "Scatterbug": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 38,
      "at": 35,
      "df": 40,
      "sa": 27,
      "sd": 25,
      "sp": 35
    },
    "weightkg": 2.5,
    "nfe": true,
    "abilities": {
      "0": "Shield Dust"
    },
    "name_jp": "コフキムシ"
  },
  "Skiddo": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 66,
      "at": 65,
      "df": 48,
      "sa": 62,
      "sd": 57,
      "sp": 52
    },
    "weightkg": 31,
    "nfe": true,
    "abilities": {
      "0": "Sap Sipper"
    },
    "name_jp": "メェークル"
  },
  "Skrelp": {
    "types": [
      "Poison",
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 60,
      "df": 60,
      "sa": 60,
      "sd": 60,
      "sp": 30
    },
    "weightkg": 7.3,
    "nfe": true,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "クズモー"
  },
  "Sliggoo": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 68,
      "at": 75,
      "df": 53,
      "sa": 83,
      "sd": 113,
      "sp": 60
    },
    "weightkg": 17.5,
    "nfe": true,
    "abilities": {
      "0": "Sap Sipper"
    },
    "otherFormes": [
      "Sliggoo-Hisui"
    ],
    "name_jp": "ヌメイル"
  },
  "Slurpuff": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 82,
      "at": 80,
      "df": 86,
      "sa": 85,
      "sd": 75,
      "sp": 72
    },
    "weightkg": 5,
    "abilities": {
      "0": "Sweet Veil"
    },
    "name_jp": "ペロリーム"
  },
  "Spewpa": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 45,
      "at": 22,
      "df": 60,
      "sa": 27,
      "sd": 30,
      "sp": 29
    },
    "weightkg": 8.4,
    "nfe": true,
    "abilities": {
      "0": "Shed Skin"
    },
    "name_jp": "コフーライ"
  },
  "Spritzee": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 78,
      "at": 52,
      "df": 60,
      "sa": 63,
      "sd": 65,
      "sp": 23
    },
    "weightkg": 0.5,
    "nfe": true,
    "abilities": {
      "0": "Healer"
    },
    "name_jp": "シュシュプ"
  },
  "Swirlix": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 62,
      "at": 48,
      "df": 66,
      "sa": 59,
      "sd": 57,
      "sp": 49
    },
    "weightkg": 3.5,
    "nfe": true,
    "abilities": {
      "0": "Sweet Veil"
    },
    "name_jp": "ペロッパフ"
  },
  "Sylveon": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 95,
      "at": 65,
      "df": 65,
      "sa": 110,
      "sd": 130,
      "sp": 60
    },
    "weightkg": 23.5,
    "abilities": {
      "0": "Cute Charm"
    },
    "name_jp": "ニンフィア"
  },
  "Talonflame": {
    "types": [
      "Fire",
      "Flying"
    ],
    "bs": {
      "hp": 78,
      "at": 81,
      "df": 71,
      "sa": 74,
      "sd": 69,
      "sp": 126
    },
    "weightkg": 24.5,
    "abilities": {
      "0": "Flame Body"
    },
    "name_jp": "ファイアロー"
  },
  "Trevenant": {
    "types": [
      "Ghost",
      "Grass"
    ],
    "bs": {
      "hp": 85,
      "at": 110,
      "df": 76,
      "sa": 65,
      "sd": 82,
      "sp": 56
    },
    "weightkg": 71,
    "abilities": {
      "0": "Natural Cure"
    },
    "name_jp": "オーロット"
  },
  "Tyrantrum": {
    "types": [
      "Rock",
      "Dragon"
    ],
    "bs": {
      "hp": 82,
      "at": 121,
      "df": 119,
      "sa": 69,
      "sd": 59,
      "sp": 71
    },
    "weightkg": 270,
    "abilities": {
      "0": "Strong Jaw"
    },
    "name_jp": "ガチゴラス"
  },
  "Tyrunt": {
    "types": [
      "Rock",
      "Dragon"
    ],
    "bs": {
      "hp": 58,
      "at": 89,
      "df": 77,
      "sa": 45,
      "sd": 45,
      "sp": 48
    },
    "weightkg": 26,
    "nfe": true,
    "abilities": {
      "0": "Strong Jaw"
    },
    "name_jp": "チゴラス"
  },
  "Vivillon": {
    "types": [
      "Bug",
      "Flying"
    ],
    "bs": {
      "hp": 80,
      "at": 52,
      "df": 50,
      "sa": 90,
      "sd": 50,
      "sp": 89
    },
    "weightkg": 17,
    "abilities": {
      "0": "Shield Dust"
    },
    "otherFormes": [
      "Vivillon-Fancy",
      "Vivillon-Pokeball"
    ],
    "name_jp": "ビビヨン"
  },
  "Volcanion": {
    "types": [
      "Fire",
      "Water"
    ],
    "bs": {
      "hp": 80,
      "at": 110,
      "df": 120,
      "sa": 130,
      "sd": 90,
      "sp": 70
    },
    "weightkg": 195,
    "gender": "N",
    "abilities": {
      "0": "Water Absorb"
    },
    "name_jp": "ボルケニオン"
  },
  "Xerneas": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 126,
      "at": 131,
      "df": 95,
      "sa": 131,
      "sd": 98,
      "sp": 99
    },
    "weightkg": 215,
    "abilities": {
      "0": "Fairy Aura"
    },
    "gender": "N",
    "name_jp": "ゼルネアス"
  },
  "Yveltal": {
    "types": [
      "Dark",
      "Flying"
    ],
    "bs": {
      "hp": 126,
      "at": 131,
      "df": 95,
      "sa": 131,
      "sd": 98,
      "sp": 99
    },
    "weightkg": 203,
    "abilities": {
      "0": "Dark Aura"
    },
    "gender": "N",
    "name_jp": "イベルタル"
  },
  "Zygarde": {
    "types": [
      "Dragon",
      "Ground"
    ],
    "bs": {
      "hp": 108,
      "at": 100,
      "df": 121,
      "sa": 81,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 305,
    "abilities": {
      "0": "Aura Break"
    },
    "gender": "N",
    "otherFormes": [
      "Zygarde-10%",
      "Zygarde-Complete"
    ],
    "name_jp": "ジガルデ"
  },
  "Araquanid": {
    "types": [
      "Water",
      "Bug"
    ],
    "bs": {
      "hp": 68,
      "at": 70,
      "df": 92,
      "sa": 50,
      "sd": 132,
      "sp": 42
    },
    "abilities": {
      "0": "Water Bubble"
    },
    "weightkg": 82,
    "otherFormes": [
      "Araquanid-Totem"
    ],
    "name_jp": "オニシズクモ"
  },
  "Bewear": {
    "types": [
      "Normal",
      "Fighting"
    ],
    "bs": {
      "hp": 120,
      "at": 125,
      "df": 80,
      "sa": 55,
      "sd": 60,
      "sp": 60
    },
    "abilities": {
      "0": "Fluffy"
    },
    "weightkg": 135,
    "name_jp": "キテルグマ"
  },
  "Blacephalon": {
    "types": [
      "Fire",
      "Ghost"
    ],
    "bs": {
      "hp": 53,
      "at": 127,
      "df": 53,
      "sa": 151,
      "sd": 79,
      "sp": 107
    },
    "weightkg": 13,
    "abilities": {
      "0": "Beast Boost"
    },
    "gender": "N",
    "name_jp": "ズガドーン"
  },
  "Bounsweet": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 42,
      "at": 30,
      "df": 38,
      "sa": 30,
      "sd": 38,
      "sp": 32
    },
    "weightkg": 3.2,
    "nfe": true,
    "abilities": {
      "0": "Leaf Guard"
    },
    "name_jp": "アマカジ"
  },
  "Brionne": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 60,
      "at": 69,
      "df": 69,
      "sa": 91,
      "sd": 81,
      "sp": 50
    },
    "weightkg": 17.5,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "オシャマリ"
  },
  "Bruxish": {
    "types": [
      "Water",
      "Psychic"
    ],
    "bs": {
      "hp": 68,
      "at": 105,
      "df": 70,
      "sa": 70,
      "sd": 70,
      "sp": 92
    },
    "weightkg": 19,
    "abilities": {
      "0": "Dazzling"
    },
    "name_jp": "ハギギシリ"
  },
  "Buzzwole": {
    "types": [
      "Bug",
      "Fighting"
    ],
    "bs": {
      "hp": 107,
      "at": 139,
      "df": 139,
      "sa": 53,
      "sd": 53,
      "sp": 79
    },
    "weightkg": 333.6,
    "abilities": {
      "0": "Beast Boost"
    },
    "gender": "N",
    "name_jp": "マッシブーン"
  },
  "Celesteela": {
    "types": [
      "Steel",
      "Flying"
    ],
    "bs": {
      "hp": 97,
      "at": 101,
      "df": 103,
      "sa": 107,
      "sd": 101,
      "sp": 61
    },
    "weightkg": 999.9,
    "abilities": {
      "0": "Beast Boost"
    },
    "gender": "N",
    "name_jp": "テッカグヤ"
  },
  "Charjabug": {
    "types": [
      "Bug",
      "Electric"
    ],
    "bs": {
      "hp": 57,
      "at": 82,
      "df": 95,
      "sa": 55,
      "sd": 75,
      "sp": 36
    },
    "weightkg": 10.5,
    "nfe": true,
    "abilities": {
      "0": "Battery"
    },
    "name_jp": "デンヂムシ"
  },
  "Comfey": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 51,
      "at": 52,
      "df": 90,
      "sa": 82,
      "sd": 110,
      "sp": 100
    },
    "weightkg": 0.3,
    "abilities": {
      "0": "Flower Veil"
    },
    "name_jp": "キュワワー"
  },
  "Cosmoem": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 43,
      "at": 29,
      "df": 131,
      "sa": 29,
      "sd": 131,
      "sp": 37
    },
    "weightkg": 999.9,
    "nfe": true,
    "gender": "N",
    "abilities": {
      "0": "Sturdy"
    },
    "name_jp": "コスモウム"
  },
  "Cosmog": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 43,
      "at": 29,
      "df": 31,
      "sa": 29,
      "sd": 31,
      "sp": 37
    },
    "weightkg": 0.1,
    "nfe": true,
    "gender": "N",
    "abilities": {
      "0": "Unaware"
    },
    "name_jp": "コスモッグ"
  },
  "Crabominable": {
    "types": [
      "Fighting",
      "Ice"
    ],
    "bs": {
      "hp": 97,
      "at": 132,
      "df": 77,
      "sa": 62,
      "sd": 67,
      "sp": 43
    },
    "weightkg": 180,
    "abilities": {
      "0": "Hyper Cutter"
    },
    "name_jp": "ケケンカニ"
  },
  "Crabrawler": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 47,
      "at": 82,
      "df": 57,
      "sa": 42,
      "sd": 47,
      "sp": 63
    },
    "weightkg": 7,
    "nfe": true,
    "abilities": {
      "0": "Hyper Cutter"
    },
    "name_jp": "マケンカニ"
  },
  "Cutiefly": {
    "types": [
      "Bug",
      "Fairy"
    ],
    "bs": {
      "hp": 40,
      "at": 45,
      "df": 40,
      "sa": 55,
      "sd": 40,
      "sp": 84
    },
    "weightkg": 0.2,
    "nfe": true,
    "abilities": {
      "0": "Honey Gather"
    },
    "name_jp": "アブリー"
  },
  "Dartrix": {
    "types": [
      "Grass",
      "Flying"
    ],
    "bs": {
      "hp": 78,
      "at": 75,
      "df": 75,
      "sa": 70,
      "sd": 70,
      "sp": 52
    },
    "weightkg": 16,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "フクスロー"
  },
  "Decidueye": {
    "types": [
      "Grass",
      "Ghost"
    ],
    "bs": {
      "hp": 78,
      "at": 107,
      "df": 75,
      "sa": 100,
      "sd": 100,
      "sp": 70
    },
    "weightkg": 36.6,
    "abilities": {
      "0": "Overgrow"
    },
    "otherFormes": [
      "Decidueye-Hisui"
    ],
    "name_jp": "ジュナイパー"
  },
  "Dewpider": {
    "types": [
      "Water",
      "Bug"
    ],
    "bs": {
      "hp": 38,
      "at": 40,
      "df": 52,
      "sa": 40,
      "sd": 72,
      "sp": 27
    },
    "weightkg": 4,
    "nfe": true,
    "abilities": {
      "0": "Water Bubble"
    },
    "name_jp": "シズクモ"
  },
  "Dhelmise": {
    "types": [
      "Ghost",
      "Grass"
    ],
    "bs": {
      "hp": 70,
      "at": 131,
      "df": 100,
      "sa": 86,
      "sd": 90,
      "sp": 40
    },
    "weightkg": 210,
    "gender": "N",
    "abilities": {
      "0": "Steelworker"
    },
    "name_jp": "ダダリン"
  },
  "Drampa": {
    "types": [
      "Normal",
      "Dragon"
    ],
    "bs": {
      "hp": 78,
      "at": 60,
      "df": 85,
      "sa": 135,
      "sd": 91,
      "sp": 36
    },
    "weightkg": 185,
    "abilities": {
      "0": "Berserk"
    },
    "name_jp": "ジジーロン"
  },
  "Diglett-Alola": {
    "types": [
      "Ground",
      "Steel"
    ],
    "bs": {
      "hp": 10,
      "at": 55,
      "df": 30,
      "sa": 35,
      "sd": 45,
      "sp": 90
    },
    "weightkg": 1,
    "baseSpecies": "Diglett",
    "nfe": true,
    "abilities": {
      "0": "Sand Veil"
    },
    "name_jp": "ディグダ(アローラ)"
  },
  "Dugtrio-Alola": {
    "types": [
      "Ground",
      "Steel"
    ],
    "bs": {
      "hp": 35,
      "at": 100,
      "df": 60,
      "sa": 50,
      "sd": 70,
      "sp": 110
    },
    "weightkg": 66.6,
    "baseSpecies": "Dugtrio",
    "abilities": {
      "0": "Sand Veil"
    },
    "name_jp": "ダグトリオ(アローラ)"
  },
  "Exeggutor-Alola": {
    "types": [
      "Grass",
      "Dragon"
    ],
    "bs": {
      "hp": 95,
      "at": 105,
      "df": 85,
      "sa": 125,
      "sd": 75,
      "sp": 45
    },
    "weightkg": 415.6,
    "baseSpecies": "Exeggutor",
    "abilities": {
      "0": "Frisk"
    },
    "name_jp": "ナッシー(アローラ)"
  },
  "Fomantis": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 40,
      "at": 55,
      "df": 35,
      "sa": 50,
      "sd": 35,
      "sp": 35
    },
    "weightkg": 1.5,
    "nfe": true,
    "abilities": {
      "0": "Leaf Guard"
    },
    "name_jp": "カリキリ"
  },
  "Geodude-Alola": {
    "types": [
      "Rock",
      "Electric"
    ],
    "bs": {
      "hp": 40,
      "at": 80,
      "df": 100,
      "sa": 30,
      "sd": 30,
      "sp": 20
    },
    "weightkg": 20.3,
    "baseSpecies": "Geodude",
    "nfe": true,
    "abilities": {
      "0": "Magnet Pull"
    },
    "name_jp": "イシツブテ(アローラ)"
  },
  "Golem-Alola": {
    "types": [
      "Rock",
      "Electric"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 130,
      "sa": 55,
      "sd": 65,
      "sp": 45
    },
    "weightkg": 316,
    "abilities": {
      "0": "Magnet Pull"
    },
    "baseSpecies": "Golem",
    "name_jp": "ゴローニャ(アローラ)"
  },
  "Golisopod": {
    "types": [
      "Bug",
      "Water"
    ],
    "bs": {
      "hp": 75,
      "at": 125,
      "df": 140,
      "sa": 60,
      "sd": 90,
      "sp": 40
    },
    "weightkg": 108,
    "abilities": {
      "0": "Emergency Exit"
    },
    "name_jp": "グソクムシャ"
  },
  "Graveler-Alola": {
    "types": [
      "Rock",
      "Electric"
    ],
    "bs": {
      "hp": 55,
      "at": 95,
      "df": 115,
      "sa": 45,
      "sd": 45,
      "sp": 35
    },
    "weightkg": 110,
    "baseSpecies": "Graveler",
    "nfe": true,
    "abilities": {
      "0": "Magnet Pull"
    },
    "name_jp": "ゴローン(アローラ)"
  },
  "Grimer-Alola": {
    "types": [
      "Poison",
      "Dark"
    ],
    "bs": {
      "hp": 80,
      "at": 80,
      "df": 50,
      "sa": 40,
      "sd": 50,
      "sp": 25
    },
    "weightkg": 42,
    "baseSpecies": "Grimer",
    "nfe": true,
    "abilities": {
      "0": "Poison Touch"
    },
    "name_jp": "ベトベター(アローラ)"
  },
  "Greninja-Ash": {
    "types": [
      "Water",
      "Dark"
    ],
    "bs": {
      "hp": 72,
      "at": 145,
      "df": 67,
      "sa": 153,
      "sd": 71,
      "sp": 132
    },
    "weightkg": 40,
    "abilities": {
      "0": "Battle Bond"
    },
    "baseSpecies": "Greninja",
    "name_jp": "ゲッコウガ(サトシ)"
  },
  "Grubbin": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 47,
      "at": 62,
      "df": 45,
      "sa": 55,
      "sd": 45,
      "sp": 46
    },
    "weightkg": 4.4,
    "nfe": true,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "アゴジムシ"
  },
  "Gumshoos": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 88,
      "at": 110,
      "df": 60,
      "sa": 55,
      "sd": 60,
      "sp": 45
    },
    "weightkg": 14.2,
    "otherFormes": [
      "Gumshoos-Totem"
    ],
    "abilities": {
      "0": "Stakeout"
    },
    "name_jp": "デカグース"
  },
  "Guzzlord": {
    "types": [
      "Dark",
      "Dragon"
    ],
    "bs": {
      "hp": 223,
      "at": 101,
      "df": 53,
      "sa": 97,
      "sd": 53,
      "sp": 43
    },
    "weightkg": 888,
    "abilities": {
      "0": "Beast Boost"
    },
    "gender": "N",
    "name_jp": "アクジキング"
  },
  "Hakamo-o": {
    "types": [
      "Dragon",
      "Fighting"
    ],
    "bs": {
      "hp": 55,
      "at": 75,
      "df": 90,
      "sa": 65,
      "sd": 70,
      "sp": 65
    },
    "weightkg": 47,
    "nfe": true,
    "abilities": {
      "0": "Bulletproof"
    },
    "name_jp": "ジャランゴ"
  },
  "Incineroar": {
    "types": [
      "Fire",
      "Dark"
    ],
    "bs": {
      "hp": 95,
      "at": 115,
      "df": 90,
      "sa": 80,
      "sd": 90,
      "sp": 60
    },
    "weightkg": 83,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "ガオガエン"
  },
  "Jangmo-o": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 45,
      "at": 55,
      "df": 65,
      "sa": 45,
      "sd": 45,
      "sp": 45
    },
    "weightkg": 29.7,
    "nfe": true,
    "abilities": {
      "0": "Bulletproof"
    },
    "name_jp": "ジャラコ"
  },
  "Kartana": {
    "types": [
      "Grass",
      "Steel"
    ],
    "bs": {
      "hp": 59,
      "at": 181,
      "df": 131,
      "sa": 59,
      "sd": 31,
      "sp": 109
    },
    "weightkg": 0.1,
    "abilities": {
      "0": "Beast Boost"
    },
    "gender": "N",
    "name_jp": "カミツルギ"
  },
  "Komala": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 65,
      "at": 115,
      "df": 65,
      "sa": 75,
      "sd": 95,
      "sp": 65
    },
    "weightkg": 19.9,
    "abilities": {
      "0": "Comatose"
    },
    "name_jp": "ネッコアラ"
  },
  "Kommo-o": {
    "types": [
      "Dragon",
      "Fighting"
    ],
    "bs": {
      "hp": 75,
      "at": 110,
      "df": 125,
      "sa": 100,
      "sd": 105,
      "sp": 85
    },
    "weightkg": 78.2,
    "otherFormes": [
      "Kommo-o-Totem"
    ],
    "abilities": {
      "0": "Bulletproof"
    },
    "name_jp": "ジャラランガ"
  },
  "Litten": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 45,
      "at": 65,
      "df": 40,
      "sa": 60,
      "sd": 40,
      "sp": 70
    },
    "weightkg": 4.3,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "ニャビー"
  },
  "Lunala": {
    "types": [
      "Psychic",
      "Ghost"
    ],
    "bs": {
      "hp": 137,
      "at": 113,
      "df": 89,
      "sa": 137,
      "sd": 107,
      "sp": 97
    },
    "weightkg": 120,
    "abilities": {
      "0": "Shadow Shield"
    },
    "gender": "N",
    "name_jp": "ルナアーラ"
  },
  "Lurantis": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 70,
      "at": 105,
      "df": 90,
      "sa": 80,
      "sd": 90,
      "sp": 45
    },
    "weightkg": 18.5,
    "otherFormes": [
      "Lurantis-Totem"
    ],
    "abilities": {
      "0": "Leaf Guard"
    },
    "name_jp": "ラランテス"
  },
  "Lycanroc": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 75,
      "at": 115,
      "df": 65,
      "sa": 55,
      "sd": 65,
      "sp": 112
    },
    "weightkg": 25,
    "otherFormes": [
      "Lycanroc-Dusk",
      "Lycanroc-Midnight"
    ],
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "ルガルガン(まひる)"
  },
  "Lycanroc-Dusk": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 75,
      "at": 117,
      "df": 65,
      "sa": 55,
      "sd": 65,
      "sp": 110
    },
    "weightkg": 25,
    "abilities": {
      "0": "Tough Claws"
    },
    "baseSpecies": "Lycanroc",
    "name_jp": "ルガルガン(たそがれ)"
  },
  "Lycanroc-Midnight": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 85,
      "at": 115,
      "df": 75,
      "sa": 55,
      "sd": 75,
      "sp": 82
    },
    "weightkg": 25,
    "baseSpecies": "Lycanroc",
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "ルガルガン(まよなか)"
  },
  "Magearna": {
    "types": [
      "Steel",
      "Fairy"
    ],
    "bs": {
      "hp": 80,
      "at": 95,
      "df": 115,
      "sa": 130,
      "sd": 115,
      "sp": 65
    },
    "weightkg": 80.5,
    "gender": "N",
    "abilities": {
      "0": "Soul-Heart"
    },
    "otherFormes": [
      "Magearna-Original"
    ],
    "name_jp": "マギアナ"
  },
  "Mareanie": {
    "types": [
      "Poison",
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 53,
      "df": 62,
      "sa": 43,
      "sd": 52,
      "sp": 45
    },
    "weightkg": 8,
    "nfe": true,
    "abilities": {
      "0": "Merciless"
    },
    "name_jp": "ヒドイデ"
  },
  "Marowak-Alola": {
    "types": [
      "Fire",
      "Ghost"
    ],
    "bs": {
      "hp": 60,
      "at": 80,
      "df": 110,
      "sa": 50,
      "sd": 80,
      "sp": 45
    },
    "weightkg": 34,
    "abilities": {
      "0": "Cursed Body"
    },
    "baseSpecies": "Marowak",
    "name_jp": "ガラガラ(アローラ)"
  },
  "Marshadow": {
    "types": [
      "Fighting",
      "Ghost"
    ],
    "bs": {
      "hp": 90,
      "at": 125,
      "df": 80,
      "sa": 90,
      "sd": 90,
      "sp": 125
    },
    "weightkg": 22.2,
    "gender": "N",
    "abilities": {
      "0": "Technician"
    },
    "name_jp": "マーシャドー"
  },
  "Melmetal": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 135,
      "at": 143,
      "df": 143,
      "sa": 80,
      "sd": 65,
      "sp": 34
    },
    "weightkg": 800,
    "gender": "N",
    "abilities": {
      "0": "Iron Fist"
    },
    "otherFormes": [
      "Melmetal-Gmax"
    ],
    "name_jp": "メルメタル"
  },
  "Meltan": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 46,
      "at": 65,
      "df": 65,
      "sa": 55,
      "sd": 35,
      "sp": 34
    },
    "weightkg": 8,
    "gender": "N",
    "abilities": {
      "0": "Magnet Pull"
    },
    "name_jp": "メルタン"
  },
  "Meowth-Alola": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 40,
      "at": 35,
      "df": 35,
      "sa": 50,
      "sd": 40,
      "sp": 90
    },
    "weightkg": 4.2,
    "baseSpecies": "Meowth",
    "nfe": true,
    "abilities": {
      "0": "Pickup"
    },
    "name_jp": "ニャース(アローラ)"
  },
  "Mimikyu": {
    "types": [
      "Ghost",
      "Fairy"
    ],
    "bs": {
      "hp": 55,
      "at": 90,
      "df": 80,
      "sa": 50,
      "sd": 105,
      "sp": 96
    },
    "weightkg": 0.7,
    "otherFormes": [
      "Mimikyu-Busted",
      "Mimikyu-Busted-Totem",
      "Mimikyu-Totem"
    ],
    "abilities": {
      "0": "Disguise"
    },
    "name_jp": "ミミッキュ"
  },
  "Minior": {
    "types": [
      "Rock",
      "Flying"
    ],
    "bs": {
      "hp": 60,
      "at": 100,
      "df": 60,
      "sa": 100,
      "sd": 60,
      "sp": 120
    },
    "weightkg": 0.3,
    "otherFormes": [
      "Minior-Meteor"
    ],
    "gender": "N",
    "abilities": {
      "0": "Shields Down"
    },
    "name_jp": "メテノ(コア)"
  },
  "Minior-Meteor": {
    "types": [
      "Rock",
      "Flying"
    ],
    "bs": {
      "hp": 60,
      "at": 60,
      "df": 100,
      "sa": 60,
      "sd": 100,
      "sp": 60
    },
    "weightkg": 40,
    "gender": "N",
    "baseSpecies": "Minior",
    "abilities": {
      "0": "Shields Down"
    },
    "name_jp": "メテノ(りゅうせい)"
  },
  "Morelull": {
    "types": [
      "Grass",
      "Fairy"
    ],
    "bs": {
      "hp": 40,
      "at": 35,
      "df": 55,
      "sa": 65,
      "sd": 75,
      "sp": 15
    },
    "weightkg": 1.5,
    "nfe": true,
    "abilities": {
      "0": "Illuminate"
    },
    "name_jp": "ネマシュ"
  },
  "Mudbray": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 70,
      "at": 100,
      "df": 70,
      "sa": 45,
      "sd": 55,
      "sp": 45
    },
    "weightkg": 110,
    "nfe": true,
    "abilities": {
      "0": "Own Tempo"
    },
    "name_jp": "ドロバンコ"
  },
  "Mudsdale": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 100,
      "at": 125,
      "df": 100,
      "sa": 55,
      "sd": 85,
      "sp": 35
    },
    "weightkg": 920,
    "abilities": {
      "0": "Own Tempo"
    },
    "name_jp": "バンバドロ"
  },
  "Muk-Alola": {
    "types": [
      "Poison",
      "Dark"
    ],
    "bs": {
      "hp": 105,
      "at": 105,
      "df": 75,
      "sa": 65,
      "sd": 100,
      "sp": 50
    },
    "weightkg": 52,
    "baseSpecies": "Muk",
    "abilities": {
      "0": "Poison Touch"
    },
    "name_jp": "ベトベトン(アローラ)"
  },
  "Naganadel": {
    "types": [
      "Poison",
      "Dragon"
    ],
    "bs": {
      "hp": 73,
      "at": 73,
      "df": 73,
      "sa": 127,
      "sd": 73,
      "sp": 121
    },
    "weightkg": 150,
    "abilities": {
      "0": "Beast Boost"
    },
    "gender": "N",
    "name_jp": "アーゴヨン"
  },
  "Necrozma": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 97,
      "at": 107,
      "df": 101,
      "sa": 127,
      "sd": 89,
      "sp": 79
    },
    "weightkg": 230,
    "abilities": {
      "0": "Prism Armor"
    },
    "otherFormes": [
      "Necrozma-Dawn-Wings",
      "Necrozma-Dusk-Mane",
      "Necrozma-Ultra"
    ],
    "gender": "N",
    "name_jp": "ネクロズマ"
  },
  "Necrozma-Dawn-Wings": {
    "types": [
      "Psychic",
      "Ghost"
    ],
    "bs": {
      "hp": 97,
      "at": 113,
      "df": 109,
      "sa": 157,
      "sd": 127,
      "sp": 77
    },
    "weightkg": 350,
    "abilities": {
      "0": "Prism Armor"
    },
    "baseSpecies": "Necrozma",
    "gender": "N",
    "name_jp": "ネクロズマ(あかつき)"
  },
  "Necrozma-Dusk-Mane": {
    "types": [
      "Psychic",
      "Steel"
    ],
    "bs": {
      "hp": 97,
      "at": 157,
      "df": 127,
      "sa": 113,
      "sd": 109,
      "sp": 77
    },
    "weightkg": 460,
    "abilities": {
      "0": "Prism Armor"
    },
    "baseSpecies": "Necrozma",
    "gender": "N",
    "name_jp": "ネクロズマ(たそがれ)"
  },
  "Necrozma-Ultra": {
    "types": [
      "Psychic",
      "Dragon"
    ],
    "bs": {
      "hp": 97,
      "at": 167,
      "df": 97,
      "sa": 167,
      "sd": 97,
      "sp": 129
    },
    "weightkg": 230,
    "abilities": {
      "0": "Neuroforce"
    },
    "baseSpecies": "Necrozma",
    "gender": "N",
    "name_jp": "ネクロズマ(ウルトラ)"
  },
  "Nihilego": {
    "types": [
      "Rock",
      "Poison"
    ],
    "bs": {
      "hp": 109,
      "at": 53,
      "df": 47,
      "sa": 127,
      "sd": 131,
      "sp": 103
    },
    "weightkg": 55.5,
    "abilities": {
      "0": "Beast Boost"
    },
    "gender": "N",
    "name_jp": "ウツロイド"
  },
  "Ninetales-Alola": {
    "types": [
      "Ice",
      "Fairy"
    ],
    "bs": {
      "hp": 73,
      "at": 67,
      "df": 75,
      "sa": 81,
      "sd": 100,
      "sp": 109
    },
    "weightkg": 19.9,
    "abilities": {
      "0": "Snow Cloak"
    },
    "baseSpecies": "Ninetales",
    "name_jp": "キュウコン(アローラ)"
  },
  "Oranguru": {
    "types": [
      "Normal",
      "Psychic"
    ],
    "bs": {
      "hp": 90,
      "at": 60,
      "df": 80,
      "sa": 90,
      "sd": 110,
      "sp": 60
    },
    "weightkg": 76,
    "abilities": {
      "0": "Inner Focus"
    },
    "name_jp": "ヤレユータン"
  },
  "Oricorio": {
    "types": [
      "Fire",
      "Flying"
    ],
    "bs": {
      "hp": 75,
      "at": 70,
      "df": 70,
      "sa": 98,
      "sd": 70,
      "sp": 93
    },
    "weightkg": 3.4,
    "abilities": {
      "0": "Dancer"
    },
    "otherFormes": [
      "Oricorio-Pa'u",
      "Oricorio-Pom-Pom",
      "Oricorio-Sensu"
    ],
    "name_jp": "オドリドリ(めらめら)"
  },
  "Oricorio-Pa'u": {
    "types": [
      "Psychic",
      "Flying"
    ],
    "bs": {
      "hp": 75,
      "at": 70,
      "df": 70,
      "sa": 98,
      "sd": 70,
      "sp": 93
    },
    "weightkg": 3.4,
    "abilities": {
      "0": "Dancer"
    },
    "baseSpecies": "Oricorio",
    "name_jp": "オドリドリ(ふらふら)"
  },
  "Oricorio-Pom-Pom": {
    "types": [
      "Electric",
      "Flying"
    ],
    "bs": {
      "hp": 75,
      "at": 70,
      "df": 70,
      "sa": 98,
      "sd": 70,
      "sp": 93
    },
    "weightkg": 3.4,
    "abilities": {
      "0": "Dancer"
    },
    "baseSpecies": "Oricorio",
    "name_jp": "オドリドリ(ぱちぱち)"
  },
  "Oricorio-Sensu": {
    "types": [
      "Ghost",
      "Flying"
    ],
    "bs": {
      "hp": 75,
      "at": 70,
      "df": 70,
      "sa": 98,
      "sd": 70,
      "sp": 93
    },
    "weightkg": 3.4,
    "abilities": {
      "0": "Dancer"
    },
    "baseSpecies": "Oricorio",
    "name_jp": "オドリドリ(まいまい)"
  },
  "Palossand": {
    "types": [
      "Ghost",
      "Ground"
    ],
    "bs": {
      "hp": 85,
      "at": 75,
      "df": 110,
      "sa": 100,
      "sd": 75,
      "sp": 35
    },
    "weightkg": 250,
    "abilities": {
      "0": "Water Compaction"
    },
    "name_jp": "シロデスナ"
  },
  "Passimian": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 100,
      "at": 120,
      "df": 90,
      "sa": 40,
      "sd": 60,
      "sp": 80
    },
    "weightkg": 82.8,
    "abilities": {
      "0": "Receiver"
    },
    "name_jp": "ナゲツケサル"
  },
  "Persian-Alola": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 65,
      "at": 60,
      "df": 60,
      "sa": 75,
      "sd": 65,
      "sp": 115
    },
    "weightkg": 33,
    "baseSpecies": "Persian",
    "abilities": {
      "0": "Fur Coat"
    },
    "name_jp": "ペルシアン(アローラ)"
  },
  "Pheromosa": {
    "types": [
      "Bug",
      "Fighting"
    ],
    "bs": {
      "hp": 71,
      "at": 137,
      "df": 37,
      "sa": 137,
      "sd": 37,
      "sp": 151
    },
    "weightkg": 25,
    "abilities": {
      "0": "Beast Boost"
    },
    "gender": "N",
    "name_jp": "フェローチェ"
  },
  "Pikipek": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 35,
      "at": 75,
      "df": 30,
      "sa": 30,
      "sd": 30,
      "sp": 65
    },
    "weightkg": 1.2,
    "nfe": true,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "ツツケラ"
  },
  "Poipole": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 67,
      "at": 73,
      "df": 67,
      "sa": 73,
      "sd": 67,
      "sp": 73
    },
    "weightkg": 1.8,
    "abilities": {
      "0": "Beast Boost"
    },
    "nfe": true,
    "gender": "N",
    "name_jp": "ベベノム"
  },
  "Popplio": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 54,
      "df": 54,
      "sa": 66,
      "sd": 56,
      "sp": 40
    },
    "weightkg": 7.5,
    "nfe": true,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "アシマリ"
  },
  "Primarina": {
    "types": [
      "Water",
      "Fairy"
    ],
    "bs": {
      "hp": 80,
      "at": 74,
      "df": 74,
      "sa": 126,
      "sd": 116,
      "sp": 60
    },
    "weightkg": 44,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "アシレーヌ"
  },
  "Pyukumuku": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 55,
      "at": 60,
      "df": 130,
      "sa": 30,
      "sd": 130,
      "sp": 5
    },
    "weightkg": 1.2,
    "abilities": {
      "0": "Innards Out"
    },
    "name_jp": "ナマコブシ"
  },
  "Raichu-Alola": {
    "types": [
      "Electric",
      "Psychic"
    ],
    "bs": {
      "hp": 60,
      "at": 85,
      "df": 50,
      "sa": 95,
      "sd": 85,
      "sp": 110
    },
    "weightkg": 21,
    "baseSpecies": "Raichu",
    "abilities": {
      "0": "Surge Surfer"
    },
    "name_jp": "ライチュウ(アローラ)"
  },
  "Raticate-Alola": {
    "types": [
      "Dark",
      "Normal"
    ],
    "bs": {
      "hp": 75,
      "at": 71,
      "df": 70,
      "sa": 40,
      "sd": 80,
      "sp": 77
    },
    "weightkg": 25.5,
    "baseSpecies": "Raticate",
    "abilities": {
      "0": "Gluttony"
    },
    "name_jp": "ラッタ(アローラ)"
  },
  "Rattata-Alola": {
    "types": [
      "Dark",
      "Normal"
    ],
    "bs": {
      "hp": 30,
      "at": 56,
      "df": 35,
      "sa": 25,
      "sd": 35,
      "sp": 72
    },
    "weightkg": 3.8,
    "baseSpecies": "Rattata",
    "nfe": true,
    "abilities": {
      "0": "Gluttony"
    },
    "name_jp": "コラッタ(アローラ)"
  },
  "Ribombee": {
    "types": [
      "Bug",
      "Fairy"
    ],
    "bs": {
      "hp": 60,
      "at": 55,
      "df": 60,
      "sa": 95,
      "sd": 70,
      "sp": 124
    },
    "weightkg": 0.5,
    "otherFormes": [
      "Ribombee-Totem"
    ],
    "abilities": {
      "0": "Honey Gather"
    },
    "name_jp": "アブリボン"
  },
  "Rockruff": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 45,
      "at": 65,
      "df": 40,
      "sa": 30,
      "sd": 40,
      "sp": 60
    },
    "weightkg": 9.2,
    "nfe": true,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "イワンコ"
  },
  "Rowlet": {
    "types": [
      "Grass",
      "Flying"
    ],
    "bs": {
      "hp": 68,
      "at": 55,
      "df": 55,
      "sa": 50,
      "sd": 50,
      "sp": 42
    },
    "weightkg": 1.5,
    "nfe": true,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "モクロー"
  },
  "Salandit": {
    "types": [
      "Poison",
      "Fire"
    ],
    "bs": {
      "hp": 48,
      "at": 44,
      "df": 40,
      "sa": 71,
      "sd": 40,
      "sp": 77
    },
    "weightkg": 4.8,
    "nfe": true,
    "abilities": {
      "0": "Corrosion"
    },
    "name_jp": "ヤトウモリ"
  },
  "Salazzle": {
    "types": [
      "Poison",
      "Fire"
    ],
    "bs": {
      "hp": 68,
      "at": 64,
      "df": 60,
      "sa": 111,
      "sd": 60,
      "sp": 117
    },
    "weightkg": 22.2,
    "otherFormes": [
      "Salazzle-Totem"
    ],
    "abilities": {
      "0": "Corrosion"
    },
    "name_jp": "エンニュート"
  },
  "Sandshrew-Alola": {
    "types": [
      "Ice",
      "Steel"
    ],
    "bs": {
      "hp": 50,
      "at": 75,
      "df": 90,
      "sa": 10,
      "sd": 35,
      "sp": 40
    },
    "weightkg": 40,
    "baseSpecies": "Sandshrew",
    "nfe": true,
    "abilities": {
      "0": "Snow Cloak"
    },
    "name_jp": "サンド(アローラ)"
  },
  "Sandslash-Alola": {
    "types": [
      "Ice",
      "Steel"
    ],
    "bs": {
      "hp": 75,
      "at": 100,
      "df": 120,
      "sa": 25,
      "sd": 65,
      "sp": 65
    },
    "weightkg": 55,
    "baseSpecies": "Sandslash",
    "abilities": {
      "0": "Snow Cloak"
    },
    "name_jp": "サンドパン(アローラ)"
  },
  "Sandygast": {
    "types": [
      "Ghost",
      "Ground"
    ],
    "bs": {
      "hp": 55,
      "at": 55,
      "df": 80,
      "sa": 70,
      "sd": 45,
      "sp": 15
    },
    "weightkg": 70,
    "nfe": true,
    "abilities": {
      "0": "Water Compaction"
    },
    "name_jp": "スナバァ"
  },
  "Shiinotic": {
    "types": [
      "Grass",
      "Fairy"
    ],
    "bs": {
      "hp": 60,
      "at": 45,
      "df": 80,
      "sa": 90,
      "sd": 100,
      "sp": 30
    },
    "weightkg": 11.5,
    "abilities": {
      "0": "Illuminate"
    },
    "name_jp": "マシェード"
  },
  "Silvally": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "gender": "N",
    "otherFormes": [
      "Silvally-Bug",
      "Silvally-Dark",
      "Silvally-Dragon",
      "Silvally-Electric",
      "Silvally-Fairy",
      "Silvally-Fighting",
      "Silvally-Fire",
      "Silvally-Flying",
      "Silvally-Ghost",
      "Silvally-Grass",
      "Silvally-Ground",
      "Silvally-Ice",
      "Silvally-Poison",
      "Silvally-Psychic",
      "Silvally-Rock",
      "Silvally-Steel",
      "Silvally-Water"
    ],
    "name_jp": "シルヴァディ"
  },
  "Silvally-Bug": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(むし)"
  },
  "Silvally-Dark": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(あく)"
  },
  "Silvally-Dragon": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(ドラゴン)"
  },
  "Silvally-Electric": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(でんき)"
  },
  "Silvally-Fairy": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(フェアリー)"
  },
  "Silvally-Fighting": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(かくとう)"
  },
  "Silvally-Fire": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(ほのお)"
  },
  "Silvally-Flying": {
    "types": [
      "Flying"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(ひこう)"
  },
  "Silvally-Ghost": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(ゴースト)"
  },
  "Silvally-Grass": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(くさ)"
  },
  "Silvally-Ground": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(じめん)"
  },
  "Silvally-Ice": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(こおり)"
  },
  "Silvally-Poison": {
    "types": [
      "Poison"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(どく)"
  },
  "Silvally-Psychic": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(エスパー)"
  },
  "Silvally-Rock": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(いわ)"
  },
  "Silvally-Steel": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(はがね)"
  },
  "Silvally-Water": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 100.5,
    "abilities": {
      "0": "RKS System"
    },
    "baseSpecies": "Silvally",
    "gender": "N",
    "name_jp": "シルヴァディ(みず)"
  },
  "Solgaleo": {
    "types": [
      "Psychic",
      "Steel"
    ],
    "bs": {
      "hp": 137,
      "at": 137,
      "df": 107,
      "sa": 113,
      "sd": 89,
      "sp": 97
    },
    "weightkg": 230,
    "abilities": {
      "0": "Full Metal Body"
    },
    "gender": "N",
    "name_jp": "ソルガレオ"
  },
  "Stakataka": {
    "types": [
      "Rock",
      "Steel"
    ],
    "bs": {
      "hp": 61,
      "at": 131,
      "df": 211,
      "sa": 53,
      "sd": 101,
      "sp": 13
    },
    "weightkg": 820,
    "abilities": {
      "0": "Beast Boost"
    },
    "gender": "N",
    "name_jp": "ツンデツンデ"
  },
  "Steenee": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 52,
      "at": 40,
      "df": 48,
      "sa": 40,
      "sd": 48,
      "sp": 62
    },
    "weightkg": 8.2,
    "nfe": true,
    "abilities": {
      "0": "Leaf Guard"
    },
    "name_jp": "アママイコ"
  },
  "Stufful": {
    "types": [
      "Normal",
      "Fighting"
    ],
    "bs": {
      "hp": 70,
      "at": 75,
      "df": 50,
      "sa": 45,
      "sd": 50,
      "sp": 50
    },
    "weightkg": 6.8,
    "abilities": {
      "0": "Fluffy"
    },
    "nfe": true,
    "name_jp": "ヌイコグマ"
  },
  "Tapu Bulu": {
    "types": [
      "Grass",
      "Fairy"
    ],
    "bs": {
      "hp": 70,
      "at": 130,
      "df": 115,
      "sa": 85,
      "sd": 95,
      "sp": 75
    },
    "weightkg": 45.5,
    "abilities": {
      "0": "Grassy Surge"
    },
    "gender": "N",
    "name_jp": "カプ・ブルル"
  },
  "Tapu Fini": {
    "types": [
      "Water",
      "Fairy"
    ],
    "bs": {
      "hp": 70,
      "at": 75,
      "df": 115,
      "sa": 95,
      "sd": 130,
      "sp": 85
    },
    "weightkg": 21.2,
    "abilities": {
      "0": "Misty Surge"
    },
    "gender": "N",
    "name_jp": "カプ・レヒレ"
  },
  "Tapu Koko": {
    "types": [
      "Electric",
      "Fairy"
    ],
    "bs": {
      "hp": 70,
      "at": 115,
      "df": 85,
      "sa": 95,
      "sd": 75,
      "sp": 130
    },
    "weightkg": 20.5,
    "abilities": {
      "0": "Electric Surge"
    },
    "gender": "N",
    "name_jp": "カプ・コケコ"
  },
  "Tapu Lele": {
    "types": [
      "Psychic",
      "Fairy"
    ],
    "bs": {
      "hp": 70,
      "at": 85,
      "df": 75,
      "sa": 130,
      "sd": 115,
      "sp": 95
    },
    "weightkg": 18.6,
    "abilities": {
      "0": "Psychic Surge"
    },
    "gender": "N",
    "name_jp": "カプ・テテフ"
  },
  "Togedemaru": {
    "types": [
      "Electric",
      "Steel"
    ],
    "bs": {
      "hp": 65,
      "at": 98,
      "df": 63,
      "sa": 40,
      "sd": 73,
      "sp": 96
    },
    "weightkg": 3.3,
    "abilities": {
      "0": "Iron Barbs"
    },
    "otherFormes": [
      "Togedemaru-Totem"
    ],
    "name_jp": "トゲデマル"
  },
  "Torracat": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 65,
      "at": 85,
      "df": 50,
      "sa": 80,
      "sd": 50,
      "sp": 90
    },
    "weightkg": 25,
    "nfe": true,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "ニャヒート"
  },
  "Toucannon": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 75,
      "sa": 75,
      "sd": 75,
      "sp": 60
    },
    "weightkg": 26,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "ドデカバシ"
  },
  "Toxapex": {
    "types": [
      "Poison",
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 63,
      "df": 152,
      "sa": 53,
      "sd": 142,
      "sp": 35
    },
    "weightkg": 14.5,
    "abilities": {
      "0": "Merciless"
    },
    "name_jp": "ドヒドイデ"
  },
  "Trumbeak": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 55,
      "at": 85,
      "df": 50,
      "sa": 40,
      "sd": 50,
      "sp": 75
    },
    "weightkg": 14.8,
    "nfe": true,
    "abilities": {
      "0": "Keen Eye"
    },
    "name_jp": "ケララッパ"
  },
  "Tsareena": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 72,
      "at": 120,
      "df": 98,
      "sa": 50,
      "sd": 98,
      "sp": 72
    },
    "weightkg": 21.4,
    "abilities": {
      "0": "Leaf Guard"
    },
    "name_jp": "アマージョ"
  },
  "Turtonator": {
    "types": [
      "Fire",
      "Dragon"
    ],
    "bs": {
      "hp": 60,
      "at": 78,
      "df": 135,
      "sa": 91,
      "sd": 85,
      "sp": 36
    },
    "weightkg": 212,
    "abilities": {
      "0": "Shell Armor"
    },
    "name_jp": "バクガメス"
  },
  "Type: Null": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 95,
      "sa": 95,
      "sd": 95,
      "sp": 59
    },
    "weightkg": 120.5,
    "abilities": {
      "0": "Battle Armor"
    },
    "nfe": true,
    "gender": "N",
    "name_jp": "タイプ：ヌル"
  },
  "Vikavolt": {
    "types": [
      "Bug",
      "Electric"
    ],
    "bs": {
      "hp": 77,
      "at": 70,
      "df": 90,
      "sa": 145,
      "sd": 75,
      "sp": 43
    },
    "weightkg": 45,
    "abilities": {
      "0": "Levitate"
    },
    "otherFormes": [
      "Vikavolt-Totem"
    ],
    "name_jp": "クワガノン"
  },
  "Vulpix-Alola": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 38,
      "at": 41,
      "df": 40,
      "sa": 50,
      "sd": 65,
      "sp": 65
    },
    "weightkg": 9.9,
    "baseSpecies": "Vulpix",
    "nfe": true,
    "abilities": {
      "0": "Snow Cloak"
    },
    "name_jp": "ロコン(アローラ)"
  },
  "Wimpod": {
    "types": [
      "Bug",
      "Water"
    ],
    "bs": {
      "hp": 25,
      "at": 35,
      "df": 40,
      "sa": 20,
      "sd": 30,
      "sp": 80
    },
    "weightkg": 12,
    "abilities": {
      "0": "Wimp Out"
    },
    "nfe": true,
    "name_jp": "コソクムシ"
  },
  "Wishiwashi": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 45,
      "at": 20,
      "df": 20,
      "sa": 25,
      "sd": 25,
      "sp": 40
    },
    "weightkg": 0.3,
    "otherFormes": [
      "Wishiwashi-School"
    ],
    "abilities": {
      "0": "Schooling"
    },
    "name_jp": "ヨワシ"
  },
  "Xurkitree": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 83,
      "at": 89,
      "df": 71,
      "sa": 173,
      "sd": 71,
      "sp": 83
    },
    "weightkg": 100,
    "abilities": {
      "0": "Beast Boost"
    },
    "gender": "N",
    "name_jp": "デンジュモク"
  },
  "Yungoos": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 48,
      "at": 70,
      "df": 30,
      "sa": 30,
      "sd": 30,
      "sp": 45
    },
    "weightkg": 6,
    "nfe": true,
    "abilities": {
      "0": "Stakeout"
    },
    "name_jp": "ヤングース"
  },
  "Zeraora": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 88,
      "at": 112,
      "df": 75,
      "sa": 102,
      "sd": 80,
      "sp": 143
    },
    "weightkg": 44.5,
    "abilities": {
      "0": "Volt Absorb"
    },
    "gender": "N",
    "name_jp": "ゼラオラ"
  },
  "Zygarde-10%": {
    "types": [
      "Dragon",
      "Ground"
    ],
    "bs": {
      "hp": 54,
      "at": 100,
      "df": 71,
      "sa": 61,
      "sd": 85,
      "sp": 115
    },
    "weightkg": 33.5,
    "abilities": {
      "0": "Aura Break"
    },
    "baseSpecies": "Zygarde",
    "gender": "N",
    "name_jp": "ジガルデ(10%)"
  },
  "Zygarde-Complete": {
    "types": [
      "Dragon",
      "Ground"
    ],
    "bs": {
      "hp": 216,
      "at": 100,
      "df": 121,
      "sa": 91,
      "sd": 95,
      "sp": 85
    },
    "weightkg": 610,
    "abilities": {
      "0": "Power Construct"
    },
    "baseSpecies": "Zygarde",
    "gender": "N",
    "name_jp": "ジガルデ(パーフェクト)"
  },
  "Alcremie": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 65,
      "at": 60,
      "df": 75,
      "sa": 110,
      "sd": 121,
      "sp": 64
    },
    "weightkg": 0.5,
    "abilities": {
      "0": "Sweet Veil"
    },
    "otherFormes": [
      "Alcremie-Gmax"
    ],
    "name_jp": "マホイップ"
  },
  "Appletun": {
    "types": [
      "Grass",
      "Dragon"
    ],
    "bs": {
      "hp": 110,
      "at": 85,
      "df": 80,
      "sa": 100,
      "sd": 80,
      "sp": 30
    },
    "weightkg": 13,
    "abilities": {
      "0": "Ripen"
    },
    "otherFormes": [
      "Appletun-Gmax"
    ],
    "name_jp": "タルップル"
  },
  "Applin": {
    "types": [
      "Grass",
      "Dragon"
    ],
    "bs": {
      "hp": 40,
      "at": 40,
      "df": 80,
      "sa": 40,
      "sd": 40,
      "sp": 20
    },
    "weightkg": 0.5,
    "abilities": {
      "0": "Ripen"
    },
    "nfe": true,
    "name_jp": "カジッチュ"
  },
  "Arctovish": {
    "types": [
      "Water",
      "Ice"
    ],
    "bs": {
      "hp": 90,
      "at": 90,
      "df": 100,
      "sa": 80,
      "sd": 90,
      "sp": 55
    },
    "weightkg": 175,
    "abilities": {
      "0": "Water Absorb"
    },
    "gender": "N",
    "name_jp": "ウオチルドン"
  },
  "Arctozolt": {
    "types": [
      "Electric",
      "Ice"
    ],
    "bs": {
      "hp": 90,
      "at": 100,
      "df": 90,
      "sa": 90,
      "sd": 80,
      "sp": 55
    },
    "weightkg": 150,
    "abilities": {
      "0": "Volt Absorb"
    },
    "gender": "N",
    "name_jp": "パッチルドン"
  },
  "Arrokuda": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 41,
      "at": 63,
      "df": 40,
      "sa": 40,
      "sd": 30,
      "sp": 66
    },
    "weightkg": 1,
    "abilities": {
      "0": "Swift Swim"
    },
    "nfe": true,
    "name_jp": "サシカマス"
  },
  "Articuno-Galar": {
    "types": [
      "Psychic",
      "Flying"
    ],
    "bs": {
      "hp": 90,
      "at": 85,
      "df": 85,
      "sa": 125,
      "sd": 100,
      "sp": 95
    },
    "weightkg": 50.9,
    "abilities": {
      "0": "Competitive"
    },
    "gender": "N",
    "baseSpecies": "Articuno",
    "name_jp": "フリーザー(ガラル)"
  },
  "Barraskewda": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 61,
      "at": 123,
      "df": 60,
      "sa": 60,
      "sd": 50,
      "sp": 136
    },
    "weightkg": 30,
    "abilities": {
      "0": "Swift Swim"
    },
    "name_jp": "カマスジョー"
  },
  "Blipbug": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 25,
      "at": 20,
      "df": 20,
      "sa": 25,
      "sd": 45,
      "sp": 45
    },
    "weightkg": 8,
    "abilities": {
      "0": "Swarm"
    },
    "nfe": true,
    "name_jp": "サッチムシ"
  },
  "Boltund": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 69,
      "at": 90,
      "df": 60,
      "sa": 90,
      "sd": 60,
      "sp": 121
    },
    "weightkg": 34,
    "abilities": {
      "0": "Strong Jaw"
    },
    "name_jp": "パルスワン"
  },
  "Calyrex": {
    "types": [
      "Psychic",
      "Grass"
    ],
    "bs": {
      "hp": 100,
      "at": 80,
      "df": 80,
      "sa": 80,
      "sd": 80,
      "sp": 80
    },
    "weightkg": 7.7,
    "abilities": {
      "0": "Unnerve"
    },
    "gender": "N",
    "otherFormes": [
      "Calyrex-Ice",
      "Calyrex-Shadow"
    ],
    "name_jp": "バドレックス"
  },
  "Calyrex-Ice": {
    "types": [
      "Psychic",
      "Ice"
    ],
    "bs": {
      "hp": 100,
      "at": 165,
      "df": 150,
      "sa": 85,
      "sd": 130,
      "sp": 50
    },
    "weightkg": 809.1,
    "abilities": {
      "0": "As One (Glastrier)"
    },
    "gender": "N",
    "baseSpecies": "Calyrex",
    "name_jp": "バドレックス(はくば)"
  },
  "Calyrex-Shadow": {
    "types": [
      "Psychic",
      "Ghost"
    ],
    "bs": {
      "hp": 100,
      "at": 85,
      "df": 80,
      "sa": 165,
      "sd": 100,
      "sp": 150
    },
    "weightkg": 53.6,
    "abilities": {
      "0": "As One (Spectrier)"
    },
    "gender": "N",
    "baseSpecies": "Calyrex",
    "name_jp": "バドレックス(こくば)"
  },
  "Carkol": {
    "types": [
      "Rock",
      "Fire"
    ],
    "bs": {
      "hp": 80,
      "at": 60,
      "df": 90,
      "sa": 60,
      "sd": 70,
      "sp": 50
    },
    "weightkg": 78,
    "abilities": {
      "0": "Steam Engine"
    },
    "nfe": true,
    "name_jp": "トロッゴン"
  },
  "Centiskorch": {
    "types": [
      "Fire",
      "Bug"
    ],
    "bs": {
      "hp": 100,
      "at": 115,
      "df": 65,
      "sa": 90,
      "sd": 90,
      "sp": 65
    },
    "weightkg": 120,
    "abilities": {
      "0": "Flash Fire"
    },
    "otherFormes": [
      "Centiskorch-Gmax"
    ],
    "name_jp": "マルヤクデ"
  },
  "Chewtle": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 64,
      "df": 50,
      "sa": 38,
      "sd": 38,
      "sp": 44
    },
    "weightkg": 8.5,
    "abilities": {
      "0": "Strong Jaw"
    },
    "nfe": true,
    "name_jp": "カムカメ"
  },
  "Cinderace": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 80,
      "at": 116,
      "df": 75,
      "sa": 65,
      "sd": 75,
      "sp": 119
    },
    "weightkg": 33,
    "abilities": {
      "0": "Blaze"
    },
    "otherFormes": [
      "Cinderace-Gmax"
    ],
    "name_jp": "エースバーン"
  },
  "Clobbopus": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 50,
      "at": 68,
      "df": 60,
      "sa": 50,
      "sd": 50,
      "sp": 32
    },
    "weightkg": 4,
    "abilities": {
      "0": "Limber"
    },
    "nfe": true,
    "name_jp": "タタッコ"
  },
  "Coalossal": {
    "types": [
      "Rock",
      "Fire"
    ],
    "bs": {
      "hp": 110,
      "at": 80,
      "df": 120,
      "sa": 80,
      "sd": 90,
      "sp": 30
    },
    "weightkg": 310.5,
    "abilities": {
      "0": "Steam Engine"
    },
    "otherFormes": [
      "Coalossal-Gmax"
    ],
    "name_jp": "セキタンザン"
  },
  "Copperajah": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 122,
      "at": 130,
      "df": 69,
      "sa": 80,
      "sd": 69,
      "sp": 30
    },
    "weightkg": 650,
    "abilities": {
      "0": "Sheer Force"
    },
    "otherFormes": [
      "Copperajah-Gmax"
    ],
    "name_jp": "ダイオウドウ"
  },
  "Corsola-Galar": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 60,
      "at": 55,
      "df": 100,
      "sa": 65,
      "sd": 100,
      "sp": 30
    },
    "weightkg": 0.5,
    "abilities": {
      "0": "Weak Armor"
    },
    "nfe": true,
    "baseSpecies": "Corsola",
    "name_jp": "サニーゴ(ガラル)"
  },
  "Corviknight": {
    "types": [
      "Flying",
      "Steel"
    ],
    "bs": {
      "hp": 98,
      "at": 87,
      "df": 105,
      "sa": 53,
      "sd": 85,
      "sp": 67
    },
    "weightkg": 75,
    "abilities": {
      "0": "Pressure"
    },
    "otherFormes": [
      "Corviknight-Gmax"
    ],
    "name_jp": "アーマーガア"
  },
  "Corvisquire": {
    "types": [
      "Flying"
    ],
    "bs": {
      "hp": 68,
      "at": 67,
      "df": 55,
      "sa": 43,
      "sd": 55,
      "sp": 77
    },
    "weightkg": 16,
    "abilities": {
      "0": "Keen Eye"
    },
    "nfe": true,
    "name_jp": "アオガラス"
  },
  "Cramorant": {
    "types": [
      "Flying",
      "Water"
    ],
    "bs": {
      "hp": 70,
      "at": 85,
      "df": 55,
      "sa": 85,
      "sd": 95,
      "sp": 85
    },
    "weightkg": 18,
    "abilities": {
      "0": "Gulp Missile"
    },
    "otherFormes": [
      "Cramorant-Gorging",
      "Cramorant-Gulping"
    ],
    "name_jp": "ウッウ"
  },
  "Cufant": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 72,
      "at": 80,
      "df": 49,
      "sa": 40,
      "sd": 49,
      "sp": 40
    },
    "weightkg": 100,
    "abilities": {
      "0": "Sheer Force"
    },
    "nfe": true,
    "name_jp": "ゾウドウ"
  },
  "Cursola": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 60,
      "at": 95,
      "df": 50,
      "sa": 145,
      "sd": 130,
      "sp": 30
    },
    "weightkg": 0.4,
    "abilities": {
      "0": "Weak Armor"
    },
    "name_jp": "サニゴーン"
  },
  "Darmanitan-Galar": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 105,
      "at": 140,
      "df": 55,
      "sa": 30,
      "sd": 55,
      "sp": 95
    },
    "weightkg": 120,
    "abilities": {
      "0": "Gorilla Tactics"
    },
    "baseSpecies": "Darmanitan",
    "name_jp": "ヒヒダルマ(ガラル)"
  },
  "Darmanitan-Galar-Zen": {
    "types": [
      "Ice",
      "Fire"
    ],
    "bs": {
      "hp": 105,
      "at": 160,
      "df": 55,
      "sa": 30,
      "sd": 55,
      "sp": 135
    },
    "weightkg": 120,
    "abilities": {
      "0": "Zen Mode"
    },
    "baseSpecies": "Darmanitan",
    "name_jp": "ヒヒダルマ(ガラル・ダルマ)"
  },
  "Darumaka-Galar": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 70,
      "at": 90,
      "df": 45,
      "sa": 15,
      "sd": 45,
      "sp": 50
    },
    "weightkg": 40,
    "abilities": {
      "0": "Hustle"
    },
    "nfe": true,
    "baseSpecies": "Darumaka",
    "name_jp": "ダルマッカ(ガラル)"
  },
  "Dottler": {
    "types": [
      "Bug",
      "Psychic"
    ],
    "bs": {
      "hp": 50,
      "at": 35,
      "df": 80,
      "sa": 50,
      "sd": 90,
      "sp": 30
    },
    "weightkg": 19.5,
    "abilities": {
      "0": "Swarm"
    },
    "nfe": true,
    "name_jp": "レドームシ"
  },
  "Dracovish": {
    "types": [
      "Water",
      "Dragon"
    ],
    "bs": {
      "hp": 90,
      "at": 90,
      "df": 100,
      "sa": 70,
      "sd": 80,
      "sp": 75
    },
    "weightkg": 215,
    "abilities": {
      "0": "Water Absorb"
    },
    "gender": "N",
    "name_jp": "ウオノラゴン"
  },
  "Dracozolt": {
    "types": [
      "Electric",
      "Dragon"
    ],
    "bs": {
      "hp": 90,
      "at": 100,
      "df": 90,
      "sa": 80,
      "sd": 70,
      "sp": 75
    },
    "weightkg": 190,
    "abilities": {
      "0": "Volt Absorb"
    },
    "gender": "N",
    "name_jp": "パッチラゴン"
  },
  "Dragapult": {
    "types": [
      "Dragon",
      "Ghost"
    ],
    "bs": {
      "hp": 88,
      "at": 120,
      "df": 75,
      "sa": 100,
      "sd": 75,
      "sp": 142
    },
    "weightkg": 50,
    "abilities": {
      "0": "Clear Body"
    },
    "name_jp": "ドラパルト"
  },
  "Drakloak": {
    "types": [
      "Dragon",
      "Ghost"
    ],
    "bs": {
      "hp": 68,
      "at": 80,
      "df": 50,
      "sa": 60,
      "sd": 50,
      "sp": 102
    },
    "weightkg": 11,
    "abilities": {
      "0": "Clear Body"
    },
    "nfe": true,
    "name_jp": "ドロンチ"
  },
  "Drednaw": {
    "types": [
      "Water",
      "Rock"
    ],
    "bs": {
      "hp": 90,
      "at": 115,
      "df": 90,
      "sa": 48,
      "sd": 68,
      "sp": 74
    },
    "weightkg": 115.5,
    "abilities": {
      "0": "Strong Jaw"
    },
    "otherFormes": [
      "Drednaw-Gmax"
    ],
    "name_jp": "カジリガメ"
  },
  "Dreepy": {
    "types": [
      "Dragon",
      "Ghost"
    ],
    "bs": {
      "hp": 28,
      "at": 60,
      "df": 30,
      "sa": 40,
      "sd": 30,
      "sp": 82
    },
    "weightkg": 2,
    "abilities": {
      "0": "Clear Body"
    },
    "nfe": true,
    "name_jp": "ドラメシヤ"
  },
  "Drizzile": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 65,
      "at": 60,
      "df": 55,
      "sa": 95,
      "sd": 55,
      "sp": 90
    },
    "weightkg": 11.5,
    "abilities": {
      "0": "Torrent"
    },
    "nfe": true,
    "name_jp": "ジメレオン"
  },
  "Dubwool": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 72,
      "at": 80,
      "df": 100,
      "sa": 60,
      "sd": 90,
      "sp": 88
    },
    "weightkg": 43,
    "abilities": {
      "0": "Fluffy"
    },
    "name_jp": "バイウールー"
  },
  "Duraludon": {
    "types": [
      "Steel",
      "Dragon"
    ],
    "bs": {
      "hp": 70,
      "at": 95,
      "df": 115,
      "sa": 120,
      "sd": 50,
      "sp": 85
    },
    "weightkg": 40,
    "abilities": {
      "0": "Light Metal"
    },
    "otherFormes": [
      "Duraludon-Gmax"
    ],
    "nfe": true,
    "name_jp": "ジュラルドン"
  },
  "Eiscue": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 75,
      "at": 80,
      "df": 110,
      "sa": 65,
      "sd": 90,
      "sp": 50
    },
    "weightkg": 89,
    "abilities": {
      "0": "Ice Face"
    },
    "otherFormes": [
      "Eiscue-Noice"
    ],
    "name_jp": "コオリッポ(アイス)"
  },
  "Eiscue-Noice": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 75,
      "at": 80,
      "df": 70,
      "sa": 65,
      "sd": 50,
      "sp": 130
    },
    "weightkg": 89,
    "abilities": {
      "0": "Ice Face"
    },
    "baseSpecies": "Eiscue",
    "name_jp": "コオリッポ(ナイス)"
  },
  "Eldegoss": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 60,
      "at": 50,
      "df": 90,
      "sa": 80,
      "sd": 120,
      "sp": 60
    },
    "weightkg": 2.5,
    "abilities": {
      "0": "Cotton Down"
    },
    "name_jp": "ワタシラガ"
  },
  "Eternatus": {
    "types": [
      "Poison",
      "Dragon"
    ],
    "bs": {
      "hp": 140,
      "at": 85,
      "df": 95,
      "sa": 145,
      "sd": 95,
      "sp": 130
    },
    "weightkg": 950,
    "abilities": {
      "0": "Pressure"
    },
    "gender": "N",
    "otherFormes": [
      "Eternatus-Eternamax"
    ],
    "name_jp": "ムゲンダイナ"
  },
  "Falinks": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 65,
      "at": 100,
      "df": 100,
      "sa": 70,
      "sd": 60,
      "sp": 75
    },
    "weightkg": 62,
    "abilities": {
      "0": "Battle Armor"
    },
    "gender": "N",
    "name_jp": "タイレーツ"
  },
  "Farfetch’d-Galar": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 52,
      "at": 95,
      "df": 55,
      "sa": 58,
      "sd": 62,
      "sp": 55
    },
    "weightkg": 42,
    "abilities": {
      "0": "Steadfast"
    },
    "nfe": true,
    "baseSpecies": "Farfetch’d",
    "name_jp": "カモネギ(ガラル)"
  },
  "Flapple": {
    "types": [
      "Grass",
      "Dragon"
    ],
    "bs": {
      "hp": 70,
      "at": 110,
      "df": 80,
      "sa": 95,
      "sd": 60,
      "sp": 70
    },
    "weightkg": 1,
    "abilities": {
      "0": "Ripen"
    },
    "otherFormes": [
      "Flapple-Gmax"
    ],
    "name_jp": "アップリュー"
  },
  "Frosmoth": {
    "types": [
      "Ice",
      "Bug"
    ],
    "bs": {
      "hp": 70,
      "at": 65,
      "df": 60,
      "sa": 125,
      "sd": 90,
      "sp": 65
    },
    "weightkg": 42,
    "abilities": {
      "0": "Shield Dust"
    },
    "name_jp": "モスノウ"
  },
  "Glastrier": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 100,
      "at": 145,
      "df": 130,
      "sa": 65,
      "sd": 110,
      "sp": 30
    },
    "weightkg": 800,
    "abilities": {
      "0": "Chilling Neigh"
    },
    "gender": "N",
    "name_jp": "ブリザポス"
  },
  "Gossifleur": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 40,
      "at": 40,
      "df": 60,
      "sa": 40,
      "sd": 60,
      "sp": 10
    },
    "weightkg": 2.2,
    "abilities": {
      "0": "Cotton Down"
    },
    "nfe": true,
    "name_jp": "ヒメンカ"
  },
  "Grapploct": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 80,
      "at": 118,
      "df": 90,
      "sa": 70,
      "sd": 80,
      "sp": 42
    },
    "weightkg": 39,
    "abilities": {
      "0": "Limber"
    },
    "name_jp": "オトスパス"
  },
  "Greedent": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 120,
      "at": 95,
      "df": 95,
      "sa": 55,
      "sd": 75,
      "sp": 20
    },
    "weightkg": 6,
    "abilities": {
      "0": "Cheek Pouch"
    },
    "name_jp": "ヨクバリス"
  },
  "Grimmsnarl": {
    "types": [
      "Dark",
      "Fairy"
    ],
    "bs": {
      "hp": 95,
      "at": 120,
      "df": 65,
      "sa": 95,
      "sd": 75,
      "sp": 60
    },
    "weightkg": 61,
    "abilities": {
      "0": "Prankster"
    },
    "otherFormes": [
      "Grimmsnarl-Gmax"
    ],
    "name_jp": "オーロンゲ"
  },
  "Grookey": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 50,
      "sa": 40,
      "sd": 40,
      "sp": 65
    },
    "weightkg": 5,
    "abilities": {
      "0": "Overgrow"
    },
    "nfe": true,
    "name_jp": "サルノリ"
  },
  "Hatenna": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 42,
      "at": 30,
      "df": 45,
      "sa": 56,
      "sd": 53,
      "sp": 39
    },
    "weightkg": 3.4,
    "abilities": {
      "0": "Healer"
    },
    "nfe": true,
    "name_jp": "ミブリム"
  },
  "Hatterene": {
    "types": [
      "Psychic",
      "Fairy"
    ],
    "bs": {
      "hp": 57,
      "at": 90,
      "df": 95,
      "sa": 136,
      "sd": 103,
      "sp": 29
    },
    "weightkg": 5.1,
    "abilities": {
      "0": "Healer"
    },
    "otherFormes": [
      "Hatterene-Gmax"
    ],
    "name_jp": "ブリムオン"
  },
  "Hattrem": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 57,
      "at": 40,
      "df": 65,
      "sa": 86,
      "sd": 73,
      "sp": 49
    },
    "weightkg": 4.8,
    "abilities": {
      "0": "Healer"
    },
    "nfe": true,
    "name_jp": "テブリム"
  },
  "Impidimp": {
    "types": [
      "Dark",
      "Fairy"
    ],
    "bs": {
      "hp": 45,
      "at": 45,
      "df": 30,
      "sa": 55,
      "sd": 40,
      "sp": 50
    },
    "weightkg": 5.5,
    "abilities": {
      "0": "Prankster"
    },
    "nfe": true,
    "name_jp": "ベロバー"
  },
  "Indeedee": {
    "types": [
      "Psychic",
      "Normal"
    ],
    "bs": {
      "hp": 60,
      "at": 65,
      "df": 55,
      "sa": 105,
      "sd": 95,
      "sp": 95
    },
    "weightkg": 28,
    "abilities": {
      "0": "Inner Focus"
    },
    "otherFormes": [
      "Indeedee-F"
    ],
    "name_jp": "イエッサン(オス)"
  },
  "Indeedee-F": {
    "types": [
      "Psychic",
      "Normal"
    ],
    "bs": {
      "hp": 70,
      "at": 55,
      "df": 65,
      "sa": 95,
      "sd": 105,
      "sp": 85
    },
    "weightkg": 28,
    "abilities": {
      "0": "Own Tempo"
    },
    "baseSpecies": "Indeedee",
    "name_jp": "イエッサン(メス)"
  },
  "Inteleon": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 70,
      "at": 85,
      "df": 65,
      "sa": 125,
      "sd": 65,
      "sp": 120
    },
    "weightkg": 45.2,
    "abilities": {
      "0": "Torrent"
    },
    "otherFormes": [
      "Inteleon-Gmax"
    ],
    "name_jp": "インテレオン"
  },
  "Kubfu": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 60,
      "at": 90,
      "df": 60,
      "sa": 53,
      "sd": 50,
      "sp": 72
    },
    "weightkg": 12,
    "nfe": true,
    "abilities": {
      "0": "Inner Focus"
    },
    "name_jp": "ダクマ"
  },
  "Linoone-Galar": {
    "types": [
      "Dark",
      "Normal"
    ],
    "bs": {
      "hp": 78,
      "at": 70,
      "df": 61,
      "sa": 50,
      "sd": 61,
      "sp": 100
    },
    "weightkg": 32.5,
    "abilities": {
      "0": "Pickup"
    },
    "nfe": true,
    "baseSpecies": "Linoone",
    "name_jp": "マッスグマ(ガラル)"
  },
  "Meowth-Galar": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 55,
      "sa": 40,
      "sd": 40,
      "sp": 40
    },
    "weightkg": 7.5,
    "abilities": {
      "0": "Pickup"
    },
    "nfe": true,
    "baseSpecies": "Meowth",
    "name_jp": "ニャース(ガラル)"
  },
  "Milcery": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 45,
      "at": 40,
      "df": 40,
      "sa": 50,
      "sd": 61,
      "sp": 34
    },
    "weightkg": 0.3,
    "abilities": {
      "0": "Sweet Veil"
    },
    "nfe": true,
    "name_jp": "マホミル"
  },
  "Moltres-Galar": {
    "types": [
      "Dark",
      "Flying"
    ],
    "bs": {
      "hp": 90,
      "at": 85,
      "df": 90,
      "sa": 100,
      "sd": 125,
      "sp": 90
    },
    "weightkg": 66,
    "abilities": {
      "0": "Berserk"
    },
    "gender": "N",
    "baseSpecies": "Moltres",
    "name_jp": "ファイヤー(ガラル)"
  },
  "Morgrem": {
    "types": [
      "Dark",
      "Fairy"
    ],
    "bs": {
      "hp": 65,
      "at": 60,
      "df": 45,
      "sa": 75,
      "sd": 55,
      "sp": 70
    },
    "weightkg": 12.5,
    "abilities": {
      "0": "Prankster"
    },
    "nfe": true,
    "name_jp": "ギモー"
  },
  "Morpeko": {
    "types": [
      "Electric",
      "Dark"
    ],
    "bs": {
      "hp": 58,
      "at": 95,
      "df": 58,
      "sa": 70,
      "sd": 58,
      "sp": 97
    },
    "weightkg": 3,
    "abilities": {
      "0": "Hunger Switch"
    },
    "otherFormes": [
      "Morpeko-Hangry"
    ],
    "name_jp": "モルペコ"
  },
  "Mr. Mime-Galar": {
    "types": [
      "Ice",
      "Psychic"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 65,
      "sa": 90,
      "sd": 90,
      "sp": 100
    },
    "weightkg": 56.8,
    "abilities": {
      "0": "Vital Spirit"
    },
    "nfe": true,
    "baseSpecies": "Mr. Mime",
    "name_jp": "バリヤード(ガラル)"
  },
  "Mr. Rime": {
    "types": [
      "Ice",
      "Psychic"
    ],
    "bs": {
      "hp": 80,
      "at": 85,
      "df": 75,
      "sa": 110,
      "sd": 100,
      "sp": 70
    },
    "weightkg": 58.2,
    "abilities": {
      "0": "Tangled Feet"
    },
    "name_jp": "バリコオル"
  },
  "Nickit": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 40,
      "at": 28,
      "df": 28,
      "sa": 47,
      "sd": 52,
      "sp": 50
    },
    "weightkg": 8.9,
    "abilities": {
      "0": "Run Away"
    },
    "nfe": true,
    "name_jp": "クスネ"
  },
  "Obstagoon": {
    "types": [
      "Dark",
      "Normal"
    ],
    "bs": {
      "hp": 93,
      "at": 90,
      "df": 101,
      "sa": 60,
      "sd": 81,
      "sp": 95
    },
    "weightkg": 46,
    "abilities": {
      "0": "Reckless"
    },
    "name_jp": "タチフサグマ"
  },
  "Orbeetle": {
    "types": [
      "Bug",
      "Psychic"
    ],
    "bs": {
      "hp": 60,
      "at": 45,
      "df": 110,
      "sa": 80,
      "sd": 120,
      "sp": 90
    },
    "weightkg": 40.8,
    "abilities": {
      "0": "Swarm"
    },
    "otherFormes": [
      "Orbeetle-Gmax"
    ],
    "name_jp": "イオルブ"
  },
  "Perrserker": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 70,
      "at": 110,
      "df": 100,
      "sa": 50,
      "sd": 60,
      "sp": 50
    },
    "weightkg": 28,
    "abilities": {
      "0": "Battle Armor"
    },
    "name_jp": "ニャイキング"
  },
  "Pincurchin": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 48,
      "at": 101,
      "df": 95,
      "sa": 91,
      "sd": 85,
      "sp": 15
    },
    "weightkg": 1,
    "abilities": {
      "0": "Lightning Rod"
    },
    "name_jp": "バチンウニ"
  },
  "Polteageist": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 60,
      "at": 65,
      "df": 65,
      "sa": 134,
      "sd": 114,
      "sp": 70
    },
    "weightkg": 0.4,
    "abilities": {
      "0": "Weak Armor"
    },
    "otherFormes": [
      "Polteageist-Antique"
    ],
    "gender": "N",
    "name_jp": "ポットデス"
  },
  "Ponyta-Galar": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 50,
      "at": 85,
      "df": 55,
      "sa": 65,
      "sd": 65,
      "sp": 90
    },
    "weightkg": 24,
    "abilities": {
      "0": "Run Away"
    },
    "nfe": true,
    "baseSpecies": "Ponyta",
    "name_jp": "ポニータ(ガラル)"
  },
  "Raboot": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 65,
      "at": 86,
      "df": 60,
      "sa": 55,
      "sd": 60,
      "sp": 94
    },
    "weightkg": 9,
    "abilities": {
      "0": "Blaze"
    },
    "nfe": true,
    "name_jp": "ラビフット"
  },
  "Rapidash-Galar": {
    "types": [
      "Psychic",
      "Fairy"
    ],
    "bs": {
      "hp": 65,
      "at": 100,
      "df": 70,
      "sa": 80,
      "sd": 80,
      "sp": 105
    },
    "weightkg": 80,
    "abilities": {
      "0": "Run Away"
    },
    "baseSpecies": "Rapidash",
    "name_jp": "ギャロップ(ガラル)"
  },
  "Regidrago": {
    "types": [
      "Dragon"
    ],
    "bs": {
      "hp": 200,
      "at": 100,
      "df": 50,
      "sa": 100,
      "sd": 50,
      "sp": 80
    },
    "weightkg": 200,
    "abilities": {
      "0": "Dragon's Maw"
    },
    "gender": "N",
    "name_jp": "レジドラゴ"
  },
  "Regieleki": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 80,
      "at": 100,
      "df": 50,
      "sa": 100,
      "sd": 50,
      "sp": 200
    },
    "weightkg": 145,
    "abilities": {
      "0": "Transistor"
    },
    "gender": "N",
    "name_jp": "レジエレキ"
  },
  "Rillaboom": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 100,
      "at": 125,
      "df": 90,
      "sa": 60,
      "sd": 70,
      "sp": 85
    },
    "weightkg": 90,
    "abilities": {
      "0": "Overgrow"
    },
    "otherFormes": [
      "Rillaboom-Gmax"
    ],
    "name_jp": "ゴリランダー"
  },
  "Rolycoly": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 30,
      "at": 40,
      "df": 50,
      "sa": 40,
      "sd": 50,
      "sp": 30
    },
    "weightkg": 12,
    "abilities": {
      "0": "Steam Engine"
    },
    "nfe": true,
    "name_jp": "タンドン"
  },
  "Rookidee": {
    "types": [
      "Flying"
    ],
    "bs": {
      "hp": 38,
      "at": 47,
      "df": 35,
      "sa": 33,
      "sd": 35,
      "sp": 57
    },
    "weightkg": 1.8,
    "abilities": {
      "0": "Keen Eye"
    },
    "nfe": true,
    "name_jp": "ココガラ"
  },
  "Runerigus": {
    "types": [
      "Ground",
      "Ghost"
    ],
    "bs": {
      "hp": 58,
      "at": 95,
      "df": 145,
      "sa": 50,
      "sd": 105,
      "sp": 30
    },
    "weightkg": 66.6,
    "abilities": {
      "0": "Wandering Spirit"
    },
    "name_jp": "デスバーン"
  },
  "Sandaconda": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 72,
      "at": 107,
      "df": 125,
      "sa": 65,
      "sd": 70,
      "sp": 71
    },
    "weightkg": 65.5,
    "abilities": {
      "0": "Sand Spit"
    },
    "otherFormes": [
      "Sandaconda-Gmax"
    ],
    "name_jp": "サダイジャ"
  },
  "Scorbunny": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 50,
      "at": 71,
      "df": 40,
      "sa": 40,
      "sd": 40,
      "sp": 69
    },
    "weightkg": 4.5,
    "abilities": {
      "0": "Blaze"
    },
    "nfe": true,
    "name_jp": "ヒバニー"
  },
  "Silicobra": {
    "types": [
      "Ground"
    ],
    "bs": {
      "hp": 52,
      "at": 57,
      "df": 75,
      "sa": 35,
      "sd": 50,
      "sp": 46
    },
    "weightkg": 7.6,
    "abilities": {
      "0": "Sand Spit"
    },
    "nfe": true,
    "name_jp": "スナヘビ"
  },
  "Sinistea": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 40,
      "at": 45,
      "df": 45,
      "sa": 74,
      "sd": 54,
      "sp": 50
    },
    "weightkg": 0.2,
    "abilities": {
      "0": "Weak Armor"
    },
    "nfe": true,
    "otherFormes": [
      "Sinistea-Antique"
    ],
    "gender": "N",
    "name_jp": "ヤバチャ"
  },
  "Sirfetch’d": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 62,
      "at": 135,
      "df": 95,
      "sa": 68,
      "sd": 82,
      "sp": 65
    },
    "weightkg": 117,
    "abilities": {
      "0": "Steadfast"
    },
    "name_jp": "ネギガナイト"
  },
  "Sizzlipede": {
    "types": [
      "Fire",
      "Bug"
    ],
    "bs": {
      "hp": 50,
      "at": 65,
      "df": 45,
      "sa": 50,
      "sd": 50,
      "sp": 45
    },
    "weightkg": 1,
    "abilities": {
      "0": "Flash Fire"
    },
    "nfe": true,
    "name_jp": "ヤクデ"
  },
  "Skwovet": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 70,
      "at": 55,
      "df": 55,
      "sa": 35,
      "sd": 35,
      "sp": 25
    },
    "weightkg": 2.5,
    "abilities": {
      "0": "Cheek Pouch"
    },
    "nfe": true,
    "name_jp": "ホシガリス"
  },
  "Slowbro-Galar": {
    "types": [
      "Poison",
      "Psychic"
    ],
    "bs": {
      "hp": 95,
      "at": 100,
      "df": 95,
      "sa": 100,
      "sd": 70,
      "sp": 30
    },
    "weightkg": 70.5,
    "abilities": {
      "0": "Quick Draw"
    },
    "baseSpecies": "Slowbro",
    "name_jp": "ヤドラン(ガラル)"
  },
  "Slowking-Galar": {
    "types": [
      "Poison",
      "Psychic"
    ],
    "bs": {
      "hp": 95,
      "at": 65,
      "df": 80,
      "sa": 110,
      "sd": 110,
      "sp": 30
    },
    "weightkg": 79.5,
    "abilities": {
      "0": "Curious Medicine"
    },
    "baseSpecies": "Slowking",
    "name_jp": "ヤドキング(ガラル)"
  },
  "Slowpoke-Galar": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 90,
      "at": 65,
      "df": 65,
      "sa": 40,
      "sd": 40,
      "sp": 15
    },
    "weightkg": 36,
    "nfe": true,
    "abilities": {
      "0": "Gluttony"
    },
    "baseSpecies": "Slowpoke",
    "name_jp": "ヤドン(ガラル)"
  },
  "Snom": {
    "types": [
      "Ice",
      "Bug"
    ],
    "bs": {
      "hp": 30,
      "at": 25,
      "df": 35,
      "sa": 45,
      "sd": 30,
      "sp": 20
    },
    "weightkg": 3.8,
    "abilities": {
      "0": "Shield Dust"
    },
    "nfe": true,
    "name_jp": "ユキハミ"
  },
  "Sobble": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 50,
      "at": 40,
      "df": 40,
      "sa": 70,
      "sd": 40,
      "sp": 70
    },
    "weightkg": 4,
    "abilities": {
      "0": "Torrent"
    },
    "nfe": true,
    "name_jp": "メッソン"
  },
  "Spectrier": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 100,
      "at": 65,
      "df": 60,
      "sa": 145,
      "sd": 80,
      "sp": 130
    },
    "weightkg": 44.5,
    "abilities": {
      "0": "Grim Neigh"
    },
    "gender": "N",
    "name_jp": "レイスポス"
  },
  "Stonjourner": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 100,
      "at": 125,
      "df": 135,
      "sa": 20,
      "sd": 20,
      "sp": 70
    },
    "weightkg": 520,
    "abilities": {
      "0": "Power Spot"
    },
    "name_jp": "イシヘンジン"
  },
  "Stunfisk-Galar": {
    "types": [
      "Ground",
      "Steel"
    ],
    "bs": {
      "hp": 109,
      "at": 81,
      "df": 99,
      "sa": 66,
      "sd": 84,
      "sp": 32
    },
    "weightkg": 20.5,
    "abilities": {
      "0": "Mimicry"
    },
    "baseSpecies": "Stunfisk",
    "name_jp": "マッギョ(ガラル)"
  },
  "Thievul": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 70,
      "at": 58,
      "df": 58,
      "sa": 87,
      "sd": 92,
      "sp": 90
    },
    "weightkg": 19.9,
    "abilities": {
      "0": "Run Away"
    },
    "name_jp": "フォクスライ"
  },
  "Thwackey": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 70,
      "at": 85,
      "df": 70,
      "sa": 55,
      "sd": 60,
      "sp": 80
    },
    "weightkg": 14,
    "abilities": {
      "0": "Overgrow"
    },
    "nfe": true,
    "name_jp": "バチンキー"
  },
  "Toxel": {
    "types": [
      "Electric",
      "Poison"
    ],
    "bs": {
      "hp": 40,
      "at": 38,
      "df": 35,
      "sa": 54,
      "sd": 35,
      "sp": 40
    },
    "weightkg": 11,
    "abilities": {
      "0": "Rattled"
    },
    "nfe": true,
    "name_jp": "エレズン"
  },
  "Toxtricity": {
    "types": [
      "Electric",
      "Poison"
    ],
    "bs": {
      "hp": 75,
      "at": 98,
      "df": 70,
      "sa": 114,
      "sd": 70,
      "sp": 75
    },
    "weightkg": 40,
    "abilities": {
      "0": "Punk Rock"
    },
    "otherFormes": [
      "Toxtricity-Gmax",
      "Toxtricity-Low-Key",
      "Toxtricity-Low-Key-Gmax"
    ],
    "name_jp": "ストリンダー"
  },
  "Urshifu": {
    "types": [
      "Fighting",
      "Dark"
    ],
    "bs": {
      "hp": 100,
      "at": 130,
      "df": 100,
      "sa": 63,
      "sd": 60,
      "sp": 97
    },
    "weightkg": 105,
    "abilities": {
      "0": "Unseen Fist"
    },
    "otherFormes": [
      "Urshifu-Gmax",
      "Urshifu-Rapid-Strike",
      "Urshifu-Rapid-Strike-Gmax"
    ],
    "name_jp": "ウーラオス(いちげき)"
  },
  "Urshifu-Rapid-Strike": {
    "types": [
      "Fighting",
      "Water"
    ],
    "bs": {
      "hp": 100,
      "at": 130,
      "df": 100,
      "sa": 63,
      "sd": 60,
      "sp": 97
    },
    "weightkg": 105,
    "abilities": {
      "0": "Unseen Fist"
    },
    "baseSpecies": "Urshifu",
    "name_jp": "ウーラオス(れんげき)"
  },
  "Weezing-Galar": {
    "types": [
      "Poison",
      "Fairy"
    ],
    "bs": {
      "hp": 65,
      "at": 90,
      "df": 120,
      "sa": 85,
      "sd": 70,
      "sp": 60
    },
    "weightkg": 16,
    "abilities": {
      "0": "Levitate"
    },
    "baseSpecies": "Weezing",
    "name_jp": "マタドガス(ガラル)"
  },
  "Wooloo": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 42,
      "at": 40,
      "df": 55,
      "sa": 40,
      "sd": 45,
      "sp": 48
    },
    "weightkg": 6,
    "abilities": {
      "0": "Fluffy"
    },
    "nfe": true,
    "name_jp": "ウールー"
  },
  "Yamask-Galar": {
    "types": [
      "Ground",
      "Ghost"
    ],
    "bs": {
      "hp": 38,
      "at": 55,
      "df": 85,
      "sa": 30,
      "sd": 65,
      "sp": 30
    },
    "weightkg": 1.5,
    "abilities": {
      "0": "Wandering Spirit"
    },
    "nfe": true,
    "baseSpecies": "Yamask",
    "name_jp": "デスマス(ガラル)"
  },
  "Yamper": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 59,
      "at": 45,
      "df": 50,
      "sa": 40,
      "sd": 50,
      "sp": 26
    },
    "weightkg": 13.5,
    "abilities": {
      "0": "Ball Fetch"
    },
    "nfe": true,
    "name_jp": "ワンパチ"
  },
  "Zacian": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 92,
      "at": 120,
      "df": 115,
      "sa": 80,
      "sd": 115,
      "sp": 138
    },
    "weightkg": 110,
    "abilities": {
      "0": "Intrepid Sword"
    },
    "gender": "N",
    "otherFormes": [
      "Zacian-Crowned"
    ],
    "name_jp": "ザシアン(れきせん)"
  },
  "Zacian-Crowned": {
    "types": [
      "Fairy",
      "Steel"
    ],
    "bs": {
      "hp": 92,
      "at": 150,
      "df": 115,
      "sa": 80,
      "sd": 115,
      "sp": 148
    },
    "weightkg": 355,
    "abilities": {
      "0": "Intrepid Sword"
    },
    "baseSpecies": "Zacian",
    "gender": "N",
    "name_jp": "ザシアン(おう)"
  },
  "Zamazenta": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 92,
      "at": 120,
      "df": 115,
      "sa": 80,
      "sd": 115,
      "sp": 138
    },
    "weightkg": 210,
    "abilities": {
      "0": "Dauntless Shield"
    },
    "gender": "N",
    "otherFormes": [
      "Zamazenta-Crowned"
    ],
    "name_jp": "ザマゼンタ(れきせん)"
  },
  "Zamazenta-Crowned": {
    "types": [
      "Fighting",
      "Steel"
    ],
    "bs": {
      "hp": 92,
      "at": 120,
      "df": 140,
      "sa": 80,
      "sd": 140,
      "sp": 128
    },
    "weightkg": 785,
    "abilities": {
      "0": "Dauntless Shield"
    },
    "baseSpecies": "Zamazenta",
    "gender": "N",
    "name_jp": "ザマゼンタ(おう)"
  },
  "Zapdos-Galar": {
    "types": [
      "Fighting",
      "Flying"
    ],
    "bs": {
      "hp": 90,
      "at": 125,
      "df": 90,
      "sa": 85,
      "sd": 90,
      "sp": 100
    },
    "weightkg": 58.2,
    "abilities": {
      "0": "Defiant"
    },
    "gender": "N",
    "baseSpecies": "Zapdos",
    "name_jp": "サンダー(ガラル)"
  },
  "Zarude": {
    "types": [
      "Dark",
      "Grass"
    ],
    "bs": {
      "hp": 105,
      "at": 120,
      "df": 105,
      "sa": 70,
      "sd": 95,
      "sp": 105
    },
    "weightkg": 70,
    "abilities": {
      "0": "Leaf Guard"
    },
    "gender": "N",
    "otherFormes": [
      "Zarude-Dada"
    ],
    "name_jp": "ザルード"
  },
  "Zigzagoon-Galar": {
    "types": [
      "Dark",
      "Normal"
    ],
    "bs": {
      "hp": 38,
      "at": 30,
      "df": 41,
      "sa": 30,
      "sd": 41,
      "sp": 60
    },
    "weightkg": 17.5,
    "abilities": {
      "0": "Pickup"
    },
    "nfe": true,
    "baseSpecies": "Zigzagoon",
    "name_jp": "ジグザグマ(ガラル)"
  },
  "Annihilape": {
    "types": [
      "Fighting",
      "Ghost"
    ],
    "bs": {
      "hp": 110,
      "at": 115,
      "df": 80,
      "sa": 50,
      "sd": 90,
      "sp": 90
    },
    "weightkg": 56,
    "abilities": {
      "0": "Vital Spirit"
    },
    "name_jp": "コノヨザル"
  },
  "Arboliva": {
    "types": [
      "Grass",
      "Normal"
    ],
    "bs": {
      "hp": 78,
      "at": 69,
      "df": 90,
      "sa": 125,
      "sd": 109,
      "sp": 39
    },
    "weightkg": 48.2,
    "abilities": {
      "0": "Seed Sower"
    },
    "name_jp": "オリーヴァ"
  },
  "Archaludon": {
    "types": [
      "Steel",
      "Dragon"
    ],
    "bs": {
      "hp": 90,
      "at": 105,
      "df": 130,
      "sa": 125,
      "sd": 65,
      "sp": 85
    },
    "weightkg": 60,
    "abilities": {
      "0": "Stamina"
    },
    "name_jp": "ブリジュラス"
  },
  "Arctibax": {
    "types": [
      "Dragon",
      "Ice"
    ],
    "bs": {
      "hp": 90,
      "at": 95,
      "df": 66,
      "sa": 45,
      "sd": 65,
      "sp": 62
    },
    "weightkg": 30,
    "abilities": {
      "0": "Thermal Exchange"
    },
    "nfe": true,
    "name_jp": "セゴール"
  },
  "Armarouge": {
    "types": [
      "Fire",
      "Psychic"
    ],
    "bs": {
      "hp": 85,
      "at": 60,
      "df": 100,
      "sa": 125,
      "sd": 80,
      "sp": 75
    },
    "weightkg": 85,
    "abilities": {
      "0": "Flash Fire"
    },
    "name_jp": "グレンアルマ"
  },
  "Baxcalibur": {
    "types": [
      "Dragon",
      "Ice"
    ],
    "bs": {
      "hp": 115,
      "at": 145,
      "df": 92,
      "sa": 75,
      "sd": 86,
      "sp": 87
    },
    "weightkg": 210,
    "abilities": {
      "0": "Thermal Exchange"
    },
    "name_jp": "セグレイブ"
  },
  "Bellibolt": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 109,
      "at": 64,
      "df": 91,
      "sa": 103,
      "sd": 83,
      "sp": 45
    },
    "weightkg": 113,
    "abilities": {
      "0": "Electromorphosis"
    },
    "name_jp": "ハラバリー"
  },
  "Bombirdier": {
    "types": [
      "Flying",
      "Dark"
    ],
    "bs": {
      "hp": 70,
      "at": 103,
      "df": 85,
      "sa": 60,
      "sd": 85,
      "sp": 82
    },
    "weightkg": 42.9,
    "abilities": {
      "0": "Big Pecks"
    },
    "name_jp": "オトシドリ"
  },
  "Brambleghast": {
    "types": [
      "Grass",
      "Ghost"
    ],
    "bs": {
      "hp": 55,
      "at": 115,
      "df": 70,
      "sa": 80,
      "sd": 70,
      "sp": 90
    },
    "weightkg": 6,
    "abilities": {
      "0": "Wind Rider"
    },
    "name_jp": "アノホラグサ"
  },
  "Bramblin": {
    "types": [
      "Grass",
      "Ghost"
    ],
    "bs": {
      "hp": 40,
      "at": 65,
      "df": 30,
      "sa": 45,
      "sd": 35,
      "sp": 60
    },
    "weightkg": 0.6,
    "abilities": {
      "0": "Wind Rider"
    },
    "nfe": true,
    "name_jp": "アノクサ"
  },
  "Brute Bonnet": {
    "types": [
      "Grass",
      "Dark"
    ],
    "bs": {
      "hp": 111,
      "at": 127,
      "df": 99,
      "sa": 79,
      "sd": 99,
      "sp": 55
    },
    "weightkg": 21,
    "gender": "N",
    "abilities": {
      "0": "Protosynthesis"
    },
    "name_jp": "アラブルタケ"
  },
  "Capsakid": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 50,
      "at": 62,
      "df": 40,
      "sa": 62,
      "sd": 40,
      "sp": 50
    },
    "weightkg": 3,
    "abilities": {
      "0": "Chlorophyll"
    },
    "nfe": true,
    "name_jp": "カプサイジ"
  },
  "Ceruledge": {
    "types": [
      "Fire",
      "Ghost"
    ],
    "bs": {
      "hp": 75,
      "at": 125,
      "df": 80,
      "sa": 60,
      "sd": 100,
      "sp": 85
    },
    "weightkg": 62,
    "abilities": {
      "0": "Flash Fire"
    },
    "name_jp": "ソウブレイズ"
  },
  "Cetitan": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 170,
      "at": 113,
      "df": 65,
      "sa": 45,
      "sd": 55,
      "sp": 73
    },
    "weightkg": 700,
    "abilities": {
      "0": "Thick Fat"
    },
    "name_jp": "ハルクジラ"
  },
  "Cetoddle": {
    "types": [
      "Ice"
    ],
    "bs": {
      "hp": 108,
      "at": 68,
      "df": 45,
      "sa": 30,
      "sd": 40,
      "sp": 43
    },
    "weightkg": 45,
    "abilities": {
      "0": "Thick Fat"
    },
    "nfe": true,
    "name_jp": "アルクジラ"
  },
  "Charcadet": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 40,
      "at": 50,
      "df": 40,
      "sa": 50,
      "sd": 40,
      "sp": 35
    },
    "weightkg": 10.5,
    "abilities": {
      "0": "Flash Fire"
    },
    "nfe": true,
    "name_jp": "カルボウ"
  },
  "Chi-Yu": {
    "types": [
      "Dark",
      "Fire"
    ],
    "bs": {
      "hp": 55,
      "at": 80,
      "df": 80,
      "sa": 135,
      "sd": 120,
      "sp": 100
    },
    "weightkg": 4.9,
    "gender": "N",
    "abilities": {
      "0": "Beads of Ruin"
    },
    "name_jp": "イーユイ"
  },
  "Chien-Pao": {
    "types": [
      "Dark",
      "Ice"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 80,
      "sa": 90,
      "sd": 65,
      "sp": 135
    },
    "weightkg": 152.2,
    "gender": "N",
    "abilities": {
      "0": "Sword of Ruin"
    },
    "name_jp": "パオジアン"
  },
  "Clodsire": {
    "types": [
      "Poison",
      "Ground"
    ],
    "bs": {
      "hp": 130,
      "at": 75,
      "df": 60,
      "sa": 45,
      "sd": 100,
      "sp": 20
    },
    "weightkg": 223,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "ドオー"
  },
  "Crocalor": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 81,
      "at": 55,
      "df": 78,
      "sa": 90,
      "sd": 58,
      "sp": 49
    },
    "weightkg": 30.7,
    "abilities": {
      "0": "Blaze"
    },
    "nfe": true,
    "name_jp": "アチゲータ"
  },
  "Cyclizar": {
    "types": [
      "Dragon",
      "Normal"
    ],
    "bs": {
      "hp": 70,
      "at": 95,
      "df": 65,
      "sa": 85,
      "sd": 65,
      "sp": 121
    },
    "weightkg": 63,
    "abilities": {
      "0": "Shed Skin"
    },
    "name_jp": "モトトカゲ"
  },
  "Dachsbun": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 57,
      "at": 80,
      "df": 115,
      "sa": 50,
      "sd": 80,
      "sp": 95
    },
    "weightkg": 14.9,
    "abilities": {
      "0": "Well-Baked Body"
    },
    "name_jp": "バウッツェル"
  },
  "Dipplin": {
    "types": [
      "Grass",
      "Dragon"
    ],
    "bs": {
      "hp": 80,
      "at": 80,
      "df": 110,
      "sa": 95,
      "sd": 80,
      "sp": 40
    },
    "weightkg": 4.4,
    "abilities": {
      "0": "Supersweet Syrup"
    },
    "nfe": true,
    "name_jp": "カミッチュ"
  },
  "Dolliv": {
    "types": [
      "Grass",
      "Normal"
    ],
    "bs": {
      "hp": 52,
      "at": 53,
      "df": 60,
      "sa": 78,
      "sd": 78,
      "sp": 33
    },
    "weightkg": 11.9,
    "abilities": {
      "0": "Early Bird"
    },
    "nfe": true,
    "name_jp": "オリーニョ"
  },
  "Dondozo": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 150,
      "at": 100,
      "df": 115,
      "sa": 65,
      "sd": 65,
      "sp": 35
    },
    "weightkg": 220,
    "abilities": {
      "0": "Unaware"
    },
    "name_jp": "ヘイラッシャ"
  },
  "Dudunsparce": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 125,
      "at": 100,
      "df": 80,
      "sa": 85,
      "sd": 75,
      "sp": 55
    },
    "weightkg": 39.2,
    "abilities": {
      "0": "Serene Grace"
    },
    "otherFormes": [
      "Dudunsparce-Three-Segment"
    ],
    "name_jp": "ノココッチ(ふたふし)"
  },
  "Dudunsparce-Three-Segment": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 125,
      "at": 100,
      "df": 80,
      "sa": 85,
      "sd": 75,
      "sp": 55
    },
    "weightkg": 47.4,
    "abilities": {
      "0": "Serene Grace"
    },
    "baseSpecies": "Dudunsparce",
    "name_jp": "ノココッチ(みつふし)"
  },
  "Espathra": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 95,
      "at": 60,
      "df": 60,
      "sa": 101,
      "sd": 60,
      "sp": 105
    },
    "weightkg": 90,
    "abilities": {
      "0": "Opportunist"
    },
    "name_jp": "クエスパトラ"
  },
  "Farigiraf": {
    "types": [
      "Normal",
      "Psychic"
    ],
    "bs": {
      "hp": 120,
      "at": 90,
      "df": 70,
      "sa": 110,
      "sd": 70,
      "sp": 60
    },
    "weightkg": 160,
    "abilities": {
      "0": "Cud Chew"
    },
    "name_jp": "リキキリン"
  },
  "Fezandipiti": {
    "types": [
      "Poison",
      "Fairy"
    ],
    "bs": {
      "hp": 88,
      "at": 91,
      "df": 82,
      "sa": 70,
      "sd": 125,
      "sp": 99
    },
    "weightkg": 30.1,
    "abilities": {
      "0": "Toxic Chain"
    },
    "name_jp": "キチキギス"
  },
  "Fidough": {
    "types": [
      "Fairy"
    ],
    "bs": {
      "hp": 37,
      "at": 55,
      "df": 70,
      "sa": 30,
      "sd": 55,
      "sp": 65
    },
    "weightkg": 10.9,
    "abilities": {
      "0": "Own Tempo"
    },
    "nfe": true,
    "name_jp": "パピモッチ"
  },
  "Finizen": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 70,
      "at": 45,
      "df": 40,
      "sa": 45,
      "sd": 40,
      "sp": 75
    },
    "weightkg": 60.2,
    "abilities": {
      "0": "Water Veil"
    },
    "nfe": true,
    "name_jp": "ナミイルカ"
  },
  "Flamigo": {
    "types": [
      "Flying",
      "Fighting"
    ],
    "bs": {
      "hp": 82,
      "at": 115,
      "df": 74,
      "sa": 75,
      "sd": 64,
      "sp": 90
    },
    "weightkg": 37,
    "abilities": {
      "0": "Scrappy"
    },
    "name_jp": "カラミンゴ"
  },
  "Flittle": {
    "types": [
      "Psychic"
    ],
    "bs": {
      "hp": 30,
      "at": 35,
      "df": 30,
      "sa": 55,
      "sd": 30,
      "sp": 75
    },
    "weightkg": 1.5,
    "abilities": {
      "0": "Anticipation"
    },
    "nfe": true,
    "name_jp": "ヒラヒナ"
  },
  "Floragato": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 61,
      "at": 80,
      "df": 63,
      "sa": 60,
      "sd": 63,
      "sp": 83
    },
    "weightkg": 12.2,
    "abilities": {
      "0": "Overgrow"
    },
    "nfe": true,
    "name_jp": "ニャローテ"
  },
  "Flutter Mane": {
    "types": [
      "Ghost",
      "Fairy"
    ],
    "bs": {
      "hp": 55,
      "at": 55,
      "df": 55,
      "sa": 135,
      "sd": 135,
      "sp": 135
    },
    "weightkg": 4,
    "gender": "N",
    "abilities": {
      "0": "Protosynthesis"
    },
    "name_jp": "ハバタクカミ"
  },
  "Frigibax": {
    "types": [
      "Dragon",
      "Ice"
    ],
    "bs": {
      "hp": 65,
      "at": 75,
      "df": 45,
      "sa": 35,
      "sd": 45,
      "sp": 55
    },
    "weightkg": 17,
    "abilities": {
      "0": "Thermal Exchange"
    },
    "nfe": true,
    "name_jp": "セビエ"
  },
  "Fuecoco": {
    "types": [
      "Fire"
    ],
    "bs": {
      "hp": 67,
      "at": 45,
      "df": 59,
      "sa": 63,
      "sd": 40,
      "sp": 36
    },
    "weightkg": 9.8,
    "abilities": {
      "0": "Blaze"
    },
    "nfe": true,
    "name_jp": "ホゲータ"
  },
  "Garganacl": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 100,
      "at": 100,
      "df": 130,
      "sa": 45,
      "sd": 90,
      "sp": 35
    },
    "weightkg": 240,
    "abilities": {
      "0": "Purifying Salt"
    },
    "name_jp": "キョジオーン"
  },
  "Gholdengo": {
    "types": [
      "Steel",
      "Ghost"
    ],
    "bs": {
      "hp": 87,
      "at": 60,
      "df": 95,
      "sa": 133,
      "sd": 91,
      "sp": 84
    },
    "weightkg": 30,
    "gender": "N",
    "abilities": {
      "0": "Good as Gold"
    },
    "name_jp": "サーフゴー"
  },
  "Gimmighoul": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 45,
      "at": 30,
      "df": 70,
      "sa": 75,
      "sd": 70,
      "sp": 10
    },
    "weightkg": 5,
    "gender": "N",
    "abilities": {
      "0": "Rattled"
    },
    "nfe": true,
    "otherFormes": [
      "Gimmighoul-Roaming"
    ],
    "name_jp": "コレクレー(はこ)"
  },
  "Gimmighoul-Roaming": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 45,
      "at": 30,
      "df": 25,
      "sa": 75,
      "sd": 45,
      "sp": 80
    },
    "weightkg": 0.1,
    "gender": "N",
    "abilities": {
      "0": "Run Away"
    },
    "nfe": true,
    "baseSpecies": "Gimmighoul",
    "name_jp": "コレクレー(とほ)"
  },
  "Glimmet": {
    "types": [
      "Rock",
      "Poison"
    ],
    "bs": {
      "hp": 48,
      "at": 35,
      "df": 42,
      "sa": 105,
      "sd": 60,
      "sp": 60
    },
    "weightkg": 8,
    "abilities": {
      "0": "Toxic Debris"
    },
    "nfe": true,
    "name_jp": "キラーメ"
  },
  "Glimmora": {
    "types": [
      "Rock",
      "Poison"
    ],
    "bs": {
      "hp": 83,
      "at": 55,
      "df": 90,
      "sa": 130,
      "sd": 81,
      "sp": 86
    },
    "weightkg": 45,
    "abilities": {
      "0": "Toxic Debris"
    },
    "name_jp": "キラフロル"
  },
  "Gouging Fire": {
    "types": [
      "Fire",
      "Dragon"
    ],
    "bs": {
      "hp": 105,
      "at": 115,
      "df": 121,
      "sa": 65,
      "sd": 93,
      "sp": 91
    },
    "weightkg": 590,
    "gender": "N",
    "abilities": {
      "0": "Protosynthesis"
    },
    "name_jp": "ウガツホムラ"
  },
  "Grafaiai": {
    "types": [
      "Poison",
      "Normal"
    ],
    "bs": {
      "hp": 63,
      "at": 95,
      "df": 65,
      "sa": 80,
      "sd": 72,
      "sp": 110
    },
    "weightkg": 27.2,
    "abilities": {
      "0": "Unburden"
    },
    "name_jp": "タギングル"
  },
  "Great Tusk": {
    "types": [
      "Ground",
      "Fighting"
    ],
    "bs": {
      "hp": 115,
      "at": 131,
      "df": 131,
      "sa": 53,
      "sd": 53,
      "sp": 87
    },
    "weightkg": 320,
    "gender": "N",
    "abilities": {
      "0": "Protosynthesis"
    },
    "name_jp": "イダイナキバ"
  },
  "Greavard": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 50,
      "at": 61,
      "df": 60,
      "sa": 30,
      "sd": 55,
      "sp": 34
    },
    "weightkg": 35,
    "abilities": {
      "0": "Pickup"
    },
    "nfe": true,
    "name_jp": "ボチ"
  },
  "Houndstone": {
    "types": [
      "Ghost"
    ],
    "bs": {
      "hp": 72,
      "at": 101,
      "df": 100,
      "sa": 50,
      "sd": 97,
      "sp": 68
    },
    "weightkg": 15,
    "abilities": {
      "0": "Sand Rush"
    },
    "name_jp": "ハカドッグ"
  },
  "Hydrapple": {
    "types": [
      "Grass",
      "Dragon"
    ],
    "bs": {
      "hp": 106,
      "at": 80,
      "df": 110,
      "sa": 120,
      "sd": 80,
      "sp": 44
    },
    "weightkg": 93,
    "abilities": {
      "0": "Supersweet Syrup"
    },
    "name_jp": "カミツオロチ"
  },
  "Iron Bundle": {
    "types": [
      "Ice",
      "Water"
    ],
    "bs": {
      "hp": 56,
      "at": 80,
      "df": 114,
      "sa": 124,
      "sd": 60,
      "sp": 136
    },
    "weightkg": 11,
    "gender": "N",
    "abilities": {
      "0": "Quark Drive"
    },
    "name_jp": "テツノツツミ"
  },
  "Iron Boulder": {
    "types": [
      "Rock",
      "Psychic"
    ],
    "bs": {
      "hp": 90,
      "at": 120,
      "df": 80,
      "sa": 68,
      "sd": 108,
      "sp": 124
    },
    "weightkg": 162.5,
    "gender": "N",
    "abilities": {
      "0": "Quark Drive"
    },
    "name_jp": "テツノイワオ"
  },
  "Iron Crown": {
    "types": [
      "Steel",
      "Psychic"
    ],
    "bs": {
      "hp": 90,
      "at": 72,
      "df": 100,
      "sa": 122,
      "sd": 108,
      "sp": 98
    },
    "weightkg": 156,
    "gender": "N",
    "abilities": {
      "0": "Quark Drive"
    },
    "name_jp": "テツノカシラ"
  },
  "Iron Hands": {
    "types": [
      "Fighting",
      "Electric"
    ],
    "bs": {
      "hp": 154,
      "at": 140,
      "df": 108,
      "sa": 50,
      "sd": 68,
      "sp": 50
    },
    "weightkg": 380.7,
    "gender": "N",
    "abilities": {
      "0": "Quark Drive"
    },
    "name_jp": "テツノカイナ"
  },
  "Iron Jugulis": {
    "types": [
      "Dark",
      "Flying"
    ],
    "bs": {
      "hp": 94,
      "at": 80,
      "df": 86,
      "sa": 122,
      "sd": 80,
      "sp": 108
    },
    "weightkg": 111,
    "gender": "N",
    "abilities": {
      "0": "Quark Drive"
    },
    "name_jp": "テツノコウベ"
  },
  "Iron Leaves": {
    "types": [
      "Grass",
      "Psychic"
    ],
    "bs": {
      "hp": 90,
      "at": 130,
      "df": 88,
      "sa": 70,
      "sd": 108,
      "sp": 104
    },
    "weightkg": 125,
    "gender": "N",
    "abilities": {
      "0": "Quark Drive"
    },
    "name_jp": "テツノイサハ"
  },
  "Iron Moth": {
    "types": [
      "Fire",
      "Poison"
    ],
    "bs": {
      "hp": 80,
      "at": 70,
      "df": 60,
      "sa": 140,
      "sd": 110,
      "sp": 110
    },
    "weightkg": 36,
    "gender": "N",
    "abilities": {
      "0": "Quark Drive"
    },
    "name_jp": "テツノドクガ"
  },
  "Iron Thorns": {
    "types": [
      "Rock",
      "Electric"
    ],
    "bs": {
      "hp": 100,
      "at": 134,
      "df": 110,
      "sa": 70,
      "sd": 84,
      "sp": 72
    },
    "weightkg": 303,
    "gender": "N",
    "abilities": {
      "0": "Quark Drive"
    },
    "name_jp": "テツノイバラ"
  },
  "Iron Treads": {
    "types": [
      "Ground",
      "Steel"
    ],
    "bs": {
      "hp": 90,
      "at": 112,
      "df": 120,
      "sa": 72,
      "sd": 70,
      "sp": 106
    },
    "weightkg": 240,
    "gender": "N",
    "abilities": {
      "0": "Quark Drive"
    },
    "name_jp": "テツノワダチ"
  },
  "Iron Valiant": {
    "types": [
      "Fairy",
      "Fighting"
    ],
    "bs": {
      "hp": 74,
      "at": 130,
      "df": 90,
      "sa": 120,
      "sd": 60,
      "sp": 116
    },
    "weightkg": 35,
    "gender": "N",
    "abilities": {
      "0": "Quark Drive"
    },
    "name_jp": "テツノブジン"
  },
  "Kilowattrel": {
    "types": [
      "Electric",
      "Flying"
    ],
    "bs": {
      "hp": 70,
      "at": 70,
      "df": 60,
      "sa": 105,
      "sd": 60,
      "sp": 125
    },
    "weightkg": 38.6,
    "abilities": {
      "0": "Wind Power"
    },
    "name_jp": "タイカイデン"
  },
  "Kingambit": {
    "types": [
      "Dark",
      "Steel"
    ],
    "bs": {
      "hp": 100,
      "at": 135,
      "df": 120,
      "sa": 60,
      "sd": 85,
      "sp": 50
    },
    "weightkg": 120,
    "abilities": {
      "0": "Defiant"
    },
    "name_jp": "ドドゲザン"
  },
  "Klawf": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 70,
      "at": 100,
      "df": 115,
      "sa": 35,
      "sd": 55,
      "sp": 75
    },
    "weightkg": 79,
    "abilities": {
      "0": "Anger Shell"
    },
    "name_jp": "ガケガニ"
  },
  "Koraidon": {
    "types": [
      "Fighting",
      "Dragon"
    ],
    "bs": {
      "hp": 100,
      "at": 135,
      "df": 115,
      "sa": 85,
      "sd": 100,
      "sp": 135
    },
    "weightkg": 303,
    "gender": "N",
    "abilities": {
      "0": "Orichalcum Pulse"
    },
    "name_jp": "コライドン"
  },
  "Lechonk": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 54,
      "at": 45,
      "df": 40,
      "sa": 35,
      "sd": 45,
      "sp": 35
    },
    "weightkg": 10.2,
    "abilities": {
      "0": "Aroma Veil"
    },
    "nfe": true,
    "name_jp": "グルトン"
  },
  "Lokix": {
    "types": [
      "Bug",
      "Dark"
    ],
    "bs": {
      "hp": 71,
      "at": 102,
      "df": 78,
      "sa": 52,
      "sd": 55,
      "sp": 92
    },
    "weightkg": 17.5,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "エクスレッグ"
  },
  "Mabosstiff": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 90,
      "sa": 60,
      "sd": 70,
      "sp": 85
    },
    "weightkg": 61,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "マフィティフ"
  },
  "Maschiff": {
    "types": [
      "Dark"
    ],
    "bs": {
      "hp": 60,
      "at": 78,
      "df": 60,
      "sa": 40,
      "sd": 51,
      "sp": 51
    },
    "weightkg": 16,
    "abilities": {
      "0": "Intimidate"
    },
    "nfe": true,
    "name_jp": "オラチフ"
  },
  "Maushold": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 74,
      "at": 75,
      "df": 70,
      "sa": 65,
      "sd": 75,
      "sp": 111
    },
    "weightkg": 2.3,
    "gender": "N",
    "abilities": {
      "0": "Friend Guard"
    },
    "otherFormes": [
      "Maushold-Four"
    ],
    "name_jp": "イッカネズミ(さんびき)"
  },
  "Maushold-Four": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 74,
      "at": 75,
      "df": 70,
      "sa": 65,
      "sd": 75,
      "sp": 111
    },
    "weightkg": 2.8,
    "gender": "N",
    "abilities": {
      "0": "Friend Guard"
    },
    "baseSpecies": "Maushold",
    "name_jp": "イッカネズミ(よんひき)"
  },
  "Meowscarada": {
    "types": [
      "Grass",
      "Dark"
    ],
    "bs": {
      "hp": 76,
      "at": 110,
      "df": 70,
      "sa": 81,
      "sd": 70,
      "sp": 123
    },
    "weightkg": 31.2,
    "abilities": {
      "0": "Overgrow"
    },
    "name_jp": "マスカーニャ"
  },
  "Miraidon": {
    "types": [
      "Electric",
      "Dragon"
    ],
    "bs": {
      "hp": 100,
      "at": 85,
      "df": 100,
      "sa": 135,
      "sd": 115,
      "sp": 135
    },
    "weightkg": 240,
    "gender": "N",
    "abilities": {
      "0": "Hadron Engine"
    },
    "name_jp": "ミライドン"
  },
  "Munkidori": {
    "types": [
      "Poison",
      "Psychic"
    ],
    "bs": {
      "hp": 88,
      "at": 75,
      "df": 66,
      "sa": 130,
      "sd": 90,
      "sp": 106
    },
    "weightkg": 12.2,
    "abilities": {
      "0": "Toxic Chain"
    },
    "name_jp": "マシマシラ"
  },
  "Nacli": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 55,
      "at": 55,
      "df": 75,
      "sa": 35,
      "sd": 35,
      "sp": 25
    },
    "weightkg": 16,
    "abilities": {
      "0": "Purifying Salt"
    },
    "nfe": true,
    "name_jp": "コジオ"
  },
  "Naclstack": {
    "types": [
      "Rock"
    ],
    "bs": {
      "hp": 60,
      "at": 60,
      "df": 100,
      "sa": 35,
      "sd": 65,
      "sp": 35
    },
    "weightkg": 105,
    "abilities": {
      "0": "Purifying Salt"
    },
    "nfe": true,
    "name_jp": "ジオヅム"
  },
  "Nymble": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 33,
      "at": 46,
      "df": 40,
      "sa": 21,
      "sd": 25,
      "sp": 45
    },
    "weightkg": 1,
    "abilities": {
      "0": "Swarm"
    },
    "nfe": true,
    "name_jp": "マメバッタ"
  },
  "Ogerpon": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 84,
      "sa": 60,
      "sd": 96,
      "sp": 110
    },
    "abilities": {
      "0": "Defiant"
    },
    "weightkg": 39.8,
    "otherFormes": [
      "Ogerpon-Cornerstone",
      "Ogerpon-Cornerstone-Tera",
      "Ogerpon-Hearthflame",
      "Ogerpon-Hearthflame-Tera",
      "Ogerpon-Teal-Tera",
      "Ogerpon-Wellspring",
      "Ogerpon-Wellspring-Tera"
    ],
    "name_jp": "オーガポン(みどり)"
  },
  "Ogerpon-Wellspring": {
    "types": [
      "Grass",
      "Water"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 84,
      "sa": 60,
      "sd": 96,
      "sp": 110
    },
    "abilities": {
      "0": "Water Absorb"
    },
    "weightkg": 39.8,
    "baseSpecies": "Ogerpon",
    "name_jp": "オーガポン(いど)"
  },
  "Ogerpon-Hearthflame": {
    "types": [
      "Grass",
      "Fire"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 84,
      "sa": 60,
      "sd": 96,
      "sp": 110
    },
    "abilities": {
      "0": "Mold Breaker"
    },
    "weightkg": 39.8,
    "baseSpecies": "Ogerpon",
    "name_jp": "オーガポン(かまど)"
  },
  "Ogerpon-Cornerstone": {
    "types": [
      "Grass",
      "Rock"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 84,
      "sa": 60,
      "sd": 96,
      "sp": 110
    },
    "abilities": {
      "0": "Sturdy"
    },
    "weightkg": 39.8,
    "baseSpecies": "Ogerpon",
    "name_jp": "オーガポン(いしずえ)"
  },
  "Ogerpon-Teal-Tera": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 84,
      "sa": 60,
      "sd": 96,
      "sp": 110
    },
    "abilities": {
      "0": "Embody Aspect (Teal)"
    },
    "weightkg": 39.8,
    "baseSpecies": "Ogerpon",
    "name_jp": "オーガポン(みどり・テラス)"
  },
  "Ogerpon-Wellspring-Tera": {
    "types": [
      "Grass",
      "Water"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 84,
      "sa": 60,
      "sd": 96,
      "sp": 110
    },
    "abilities": {
      "0": "Embody Aspect (Wellspring)"
    },
    "weightkg": 39.8,
    "baseSpecies": "Ogerpon",
    "name_jp": "オーガポン(いど・テラス)"
  },
  "Ogerpon-Hearthflame-Tera": {
    "types": [
      "Grass",
      "Fire"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 84,
      "sa": 60,
      "sd": 96,
      "sp": 110
    },
    "abilities": {
      "0": "Embody Aspect (Hearthflame)"
    },
    "weightkg": 39.8,
    "baseSpecies": "Ogerpon",
    "name_jp": "オーガポン(かまど・テラス)"
  },
  "Ogerpon-Cornerstone-Tera": {
    "types": [
      "Grass",
      "Rock"
    ],
    "bs": {
      "hp": 80,
      "at": 120,
      "df": 84,
      "sa": 60,
      "sd": 96,
      "sp": 110
    },
    "abilities": {
      "0": "Embody Aspect (Cornerstone)"
    },
    "weightkg": 39.8,
    "baseSpecies": "Ogerpon",
    "name_jp": "オーガポン(いしずえ・テラス)"
  },
  "Oinkologne": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 110,
      "at": 100,
      "df": 75,
      "sa": 59,
      "sd": 80,
      "sp": 65
    },
    "weightkg": 120,
    "abilities": {
      "0": "Lingering Aroma"
    },
    "otherFormes": [
      "Oinkologne-F"
    ],
    "name_jp": "パフュートン(オス)"
  },
  "Oinkologne-F": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 115,
      "at": 90,
      "df": 70,
      "sa": 59,
      "sd": 90,
      "sp": 65
    },
    "weightkg": 120,
    "abilities": {
      "0": "Aroma Veil"
    },
    "baseSpecies": "Oinkologne",
    "name_jp": "パフュートン(メス)"
  },
  "Okidogi": {
    "types": [
      "Poison",
      "Fighting"
    ],
    "bs": {
      "hp": 88,
      "at": 128,
      "df": 115,
      "sa": 58,
      "sd": 86,
      "sp": 80
    },
    "weightkg": 92,
    "abilities": {
      "0": "Toxic Chain"
    },
    "name_jp": "イイネイヌ"
  },
  "Orthworm": {
    "types": [
      "Steel"
    ],
    "bs": {
      "hp": 70,
      "at": 85,
      "df": 145,
      "sa": 60,
      "sd": 55,
      "sp": 65
    },
    "weightkg": 310,
    "abilities": {
      "0": "Earth Eater"
    },
    "name_jp": "ミミズズ"
  },
  "Palafin": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 100,
      "at": 70,
      "df": 72,
      "sa": 53,
      "sd": 62,
      "sp": 100
    },
    "weightkg": 60.2,
    "abilities": {
      "0": "Zero to Hero"
    },
    "otherFormes": [
      "Palafin-Hero"
    ],
    "name_jp": "イルカマン(ナイーブ)"
  },
  "Palafin-Hero": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 100,
      "at": 160,
      "df": 97,
      "sa": 106,
      "sd": 87,
      "sp": 100
    },
    "weightkg": 97.4,
    "abilities": {
      "0": "Zero to Hero"
    },
    "baseSpecies": "Palafin",
    "name_jp": "イルカマン(マイティ)"
  },
  "Pawmi": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 45,
      "at": 50,
      "df": 20,
      "sa": 40,
      "sd": 25,
      "sp": 60
    },
    "weightkg": 2.5,
    "abilities": {
      "0": "Static"
    },
    "nfe": true,
    "name_jp": "パモ"
  },
  "Pawmo": {
    "types": [
      "Electric",
      "Fighting"
    ],
    "bs": {
      "hp": 60,
      "at": 75,
      "df": 40,
      "sa": 50,
      "sd": 40,
      "sp": 85
    },
    "weightkg": 6.5,
    "abilities": {
      "0": "Volt Absorb"
    },
    "nfe": true,
    "name_jp": "パモット"
  },
  "Pawmot": {
    "types": [
      "Electric",
      "Fighting"
    ],
    "bs": {
      "hp": 70,
      "at": 115,
      "df": 70,
      "sa": 70,
      "sd": 60,
      "sp": 105
    },
    "weightkg": 41,
    "abilities": {
      "0": "Volt Absorb"
    },
    "name_jp": "パーモット"
  },
  "Pecharunt": {
    "types": [
      "Poison",
      "Ghost"
    ],
    "bs": {
      "hp": 88,
      "at": 88,
      "df": 160,
      "sa": 88,
      "sd": 88,
      "sp": 88
    },
    "weightkg": 0.3,
    "gender": "N",
    "abilities": {
      "0": "Poison Puppeteer"
    },
    "name_jp": "モモワロウ"
  },
  "Poltchageist": {
    "types": [
      "Grass",
      "Ghost"
    ],
    "bs": {
      "hp": 40,
      "at": 45,
      "df": 45,
      "sa": 74,
      "sd": 54,
      "sp": 50
    },
    "weightkg": 1.1,
    "abilities": {
      "0": "Hospitality"
    },
    "nfe": true,
    "otherFormes": [
      "Poltchageist-Artisan"
    ],
    "gender": "N",
    "name_jp": "チャデス"
  },
  "Quaquaval": {
    "types": [
      "Water",
      "Fighting"
    ],
    "bs": {
      "hp": 85,
      "at": 120,
      "df": 80,
      "sa": 85,
      "sd": 75,
      "sp": 85
    },
    "weightkg": 61.9,
    "abilities": {
      "0": "Torrent"
    },
    "name_jp": "ウェーニバル"
  },
  "Quaxly": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 55,
      "at": 65,
      "df": 45,
      "sa": 50,
      "sd": 45,
      "sp": 50
    },
    "weightkg": 6.1,
    "abilities": {
      "0": "Torrent"
    },
    "nfe": true,
    "name_jp": "クワッス"
  },
  "Quaxwell": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 70,
      "at": 85,
      "df": 65,
      "sa": 65,
      "sd": 60,
      "sp": 65
    },
    "weightkg": 21.5,
    "abilities": {
      "0": "Torrent"
    },
    "nfe": true,
    "name_jp": "ウェルカモ"
  },
  "Rabsca": {
    "types": [
      "Bug",
      "Psychic"
    ],
    "bs": {
      "hp": 75,
      "at": 50,
      "df": 85,
      "sa": 115,
      "sd": 100,
      "sp": 45
    },
    "weightkg": 3.5,
    "abilities": {
      "0": "Synchronize"
    },
    "name_jp": "ベラカス"
  },
  "Raging Bolt": {
    "types": [
      "Electric",
      "Dragon"
    ],
    "bs": {
      "hp": 125,
      "at": 73,
      "df": 91,
      "sa": 137,
      "sd": 89,
      "sp": 75
    },
    "weightkg": 480,
    "gender": "N",
    "abilities": {
      "0": "Protosynthesis"
    },
    "name_jp": "タケルライコ"
  },
  "Rellor": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 41,
      "at": 50,
      "df": 60,
      "sa": 31,
      "sd": 58,
      "sp": 30
    },
    "weightkg": 1,
    "abilities": {
      "0": "Compound Eyes"
    },
    "nfe": true,
    "name_jp": "シガロコ"
  },
  "Revavroom": {
    "types": [
      "Steel",
      "Poison"
    ],
    "bs": {
      "hp": 80,
      "at": 119,
      "df": 90,
      "sa": 54,
      "sd": 67,
      "sp": 90
    },
    "weightkg": 120,
    "abilities": {
      "0": "Overcoat"
    },
    "name_jp": "ブロロローム"
  },
  "Roaring Moon": {
    "types": [
      "Dragon",
      "Dark"
    ],
    "bs": {
      "hp": 105,
      "at": 139,
      "df": 71,
      "sa": 55,
      "sd": 101,
      "sp": 119
    },
    "weightkg": 380,
    "gender": "N",
    "abilities": {
      "0": "Protosynthesis"
    },
    "name_jp": "トドロクツキ"
  },
  "Sandy Shocks": {
    "types": [
      "Electric",
      "Ground"
    ],
    "bs": {
      "hp": 85,
      "at": 81,
      "df": 97,
      "sa": 121,
      "sd": 85,
      "sp": 101
    },
    "weightkg": 60,
    "gender": "N",
    "abilities": {
      "0": "Protosynthesis"
    },
    "name_jp": "スナノケガワ"
  },
  "Scovillain": {
    "types": [
      "Grass",
      "Fire"
    ],
    "bs": {
      "hp": 65,
      "at": 108,
      "df": 65,
      "sa": 108,
      "sd": 65,
      "sp": 75
    },
    "weightkg": 15,
    "abilities": {
      "0": "Chlorophyll"
    },
    "name_jp": "スコヴィラン"
  },
  "Scream Tail": {
    "types": [
      "Fairy",
      "Psychic"
    ],
    "bs": {
      "hp": 115,
      "at": 65,
      "df": 99,
      "sa": 65,
      "sd": 115,
      "sp": 111
    },
    "weightkg": 8,
    "gender": "N",
    "abilities": {
      "0": "Protosynthesis"
    },
    "name_jp": "サケブシッポ"
  },
  "Shroodle": {
    "types": [
      "Poison",
      "Normal"
    ],
    "bs": {
      "hp": 40,
      "at": 65,
      "df": 35,
      "sa": 40,
      "sd": 35,
      "sp": 75
    },
    "weightkg": 0.7,
    "abilities": {
      "0": "Unburden"
    },
    "nfe": true,
    "name_jp": "シルシュルー"
  },
  "Sinistcha": {
    "types": [
      "Grass",
      "Ghost"
    ],
    "bs": {
      "hp": 71,
      "at": 60,
      "df": 106,
      "sa": 121,
      "sd": 80,
      "sp": 70
    },
    "weightkg": 2.2,
    "abilities": {
      "0": "Hospitality"
    },
    "otherFormes": [
      "Sinistcha-Masterpiece"
    ],
    "gender": "N",
    "name_jp": "ヤバソチャ"
  },
  "Skeledirge": {
    "types": [
      "Fire",
      "Ghost"
    ],
    "bs": {
      "hp": 104,
      "at": 75,
      "df": 100,
      "sa": 110,
      "sd": 75,
      "sp": 66
    },
    "weightkg": 326.5,
    "abilities": {
      "0": "Blaze"
    },
    "name_jp": "ラウドボーン"
  },
  "Slither Wing": {
    "types": [
      "Bug",
      "Fighting"
    ],
    "bs": {
      "hp": 85,
      "at": 135,
      "df": 79,
      "sa": 85,
      "sd": 105,
      "sp": 81
    },
    "weightkg": 92,
    "gender": "N",
    "abilities": {
      "0": "Protosynthesis"
    },
    "name_jp": "チヲハウハネ"
  },
  "Smoliv": {
    "types": [
      "Grass",
      "Normal"
    ],
    "bs": {
      "hp": 41,
      "at": 35,
      "df": 45,
      "sa": 58,
      "sd": 51,
      "sp": 30
    },
    "weightkg": 6.5,
    "abilities": {
      "0": "Early Bird"
    },
    "nfe": true,
    "name_jp": "ミニーブ"
  },
  "Spidops": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 60,
      "at": 79,
      "df": 92,
      "sa": 52,
      "sd": 86,
      "sp": 35
    },
    "weightkg": 16.5,
    "abilities": {
      "0": "Insomnia"
    },
    "name_jp": "ワナイダー"
  },
  "Sprigatito": {
    "types": [
      "Grass"
    ],
    "bs": {
      "hp": 40,
      "at": 61,
      "df": 54,
      "sa": 45,
      "sd": 45,
      "sp": 65
    },
    "weightkg": 4.1,
    "abilities": {
      "0": "Overgrow"
    },
    "nfe": true,
    "name_jp": "ニャオハ"
  },
  "Squawkabilly": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 82,
      "at": 96,
      "df": 51,
      "sa": 45,
      "sd": 51,
      "sp": 92
    },
    "weightkg": 2.4,
    "abilities": {
      "0": "Intimidate"
    },
    "otherFormes": [
      "Squawkabilly-Blue",
      "Squawkabilly-White",
      "Squawkabilly-Yellow"
    ],
    "name_jp": "イキリンコ(グリーン)"
  },
  "Squawkabilly-Blue": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 82,
      "at": 96,
      "df": 51,
      "sa": 45,
      "sd": 51,
      "sp": 92
    },
    "weightkg": 2.4,
    "abilities": {
      "0": "Intimidate"
    },
    "baseSpecies": "Squawkabilly",
    "name_jp": "イキリンコ(イエロー)"
  },
  "Squawkabilly-White": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 82,
      "at": 96,
      "df": 51,
      "sa": 45,
      "sd": 51,
      "sp": 92
    },
    "weightkg": 2.4,
    "abilities": {
      "0": "Intimidate"
    },
    "baseSpecies": "Squawkabilly",
    "name_jp": "イキリンコ(ブルー)"
  },
  "Squawkabilly-Yellow": {
    "types": [
      "Normal",
      "Flying"
    ],
    "bs": {
      "hp": 82,
      "at": 96,
      "df": 51,
      "sa": 45,
      "sd": 51,
      "sp": 92
    },
    "weightkg": 2.4,
    "abilities": {
      "0": "Intimidate"
    },
    "baseSpecies": "Squawkabilly",
    "name_jp": "イキリンコ(ホワイト)"
  },
  "Tadbulb": {
    "types": [
      "Electric"
    ],
    "bs": {
      "hp": 61,
      "at": 31,
      "df": 41,
      "sa": 59,
      "sd": 35,
      "sp": 45
    },
    "weightkg": 0.4,
    "abilities": {
      "0": "Own Tempo"
    },
    "nfe": true,
    "name_jp": "ズピカ"
  },
  "Tandemaus": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 50,
      "at": 50,
      "df": 45,
      "sa": 40,
      "sd": 45,
      "sp": 75
    },
    "weightkg": 1.8,
    "gender": "N",
    "abilities": {
      "0": "Run Away"
    },
    "nfe": true,
    "name_jp": "ワッカネズミ"
  },
  "Tarountula": {
    "types": [
      "Bug"
    ],
    "bs": {
      "hp": 35,
      "at": 41,
      "df": 45,
      "sa": 29,
      "sd": 40,
      "sp": 20
    },
    "weightkg": 4,
    "abilities": {
      "0": "Insomnia"
    },
    "nfe": true,
    "name_jp": "タマンチュラ"
  },
  "Tatsugiri": {
    "types": [
      "Dragon",
      "Water"
    ],
    "bs": {
      "hp": 68,
      "at": 50,
      "df": 60,
      "sa": 120,
      "sd": 95,
      "sp": 82
    },
    "weightkg": 8,
    "abilities": {
      "0": "Commander"
    },
    "name_jp": "シャリタツ"
  },
  "Tauros-Paldea-Aqua": {
    "types": [
      "Fighting",
      "Water"
    ],
    "bs": {
      "hp": 75,
      "at": 110,
      "df": 105,
      "sa": 30,
      "sd": 70,
      "sp": 100
    },
    "weightkg": 110,
    "abilities": {
      "0": "Intimidate"
    },
    "baseSpecies": "Tauros",
    "name_jp": "ケンタロス(パルデア・ウォーター)"
  },
  "Tauros-Paldea-Blaze": {
    "types": [
      "Fighting",
      "Fire"
    ],
    "bs": {
      "hp": 75,
      "at": 110,
      "df": 105,
      "sa": 30,
      "sd": 70,
      "sp": 100
    },
    "weightkg": 85,
    "abilities": {
      "0": "Intimidate"
    },
    "baseSpecies": "Tauros",
    "name_jp": "ケンタロス(パルデア・ブレイズ)"
  },
  "Tauros-Paldea-Combat": {
    "types": [
      "Fighting"
    ],
    "bs": {
      "hp": 75,
      "at": 110,
      "df": 105,
      "sa": 30,
      "sd": 70,
      "sp": 100
    },
    "weightkg": 115,
    "abilities": {
      "0": "Intimidate"
    },
    "baseSpecies": "Tauros",
    "name_jp": "ケンタロス(パルデア・コンバット)"
  },
  "Terapagos": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 90,
      "at": 65,
      "df": 85,
      "sa": 65,
      "sd": 85,
      "sp": 60
    },
    "weightkg": 6.5,
    "abilities": {
      "0": "Tera Shift"
    },
    "otherFormes": [
      "Terapagos-Stellar",
      "Terapagos-Terastal"
    ],
    "name_jp": "テラパゴス"
  },
  "Terapagos-Stellar": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 160,
      "at": 105,
      "df": 110,
      "sa": 130,
      "sd": 110,
      "sp": 85
    },
    "weightkg": 77,
    "abilities": {
      "0": "Teraform Zero"
    },
    "baseSpecies": "Terapagos",
    "name_jp": "テラパゴス(ステラ)"
  },
  "Terapagos-Terastal": {
    "types": [
      "Normal"
    ],
    "bs": {
      "hp": 95,
      "at": 95,
      "df": 110,
      "sa": 105,
      "sd": 110,
      "sp": 85
    },
    "weightkg": 16,
    "abilities": {
      "0": "Tera Shell"
    },
    "baseSpecies": "Terapagos",
    "name_jp": "テラパゴス(テラスタル)"
  },
  "Ting-Lu": {
    "types": [
      "Dark",
      "Ground"
    ],
    "bs": {
      "hp": 155,
      "at": 110,
      "df": 125,
      "sa": 55,
      "sd": 80,
      "sp": 45
    },
    "weightkg": 699.7,
    "gender": "N",
    "abilities": {
      "0": "Vessel of Ruin"
    },
    "name_jp": "ディンルー"
  },
  "Tinkatink": {
    "types": [
      "Fairy",
      "Steel"
    ],
    "bs": {
      "hp": 50,
      "at": 45,
      "df": 45,
      "sa": 35,
      "sd": 64,
      "sp": 58
    },
    "weightkg": 8.9,
    "abilities": {
      "0": "Mold Breaker"
    },
    "nfe": true,
    "name_jp": "カヌチャン"
  },
  "Tinkaton": {
    "types": [
      "Fairy",
      "Steel"
    ],
    "bs": {
      "hp": 85,
      "at": 75,
      "df": 77,
      "sa": 70,
      "sd": 105,
      "sp": 94
    },
    "weightkg": 112.8,
    "abilities": {
      "0": "Mold Breaker"
    },
    "name_jp": "デカヌチャン"
  },
  "Tinkatuff": {
    "types": [
      "Fairy",
      "Steel"
    ],
    "bs": {
      "hp": 65,
      "at": 55,
      "df": 55,
      "sa": 45,
      "sd": 82,
      "sp": 78
    },
    "weightkg": 59.1,
    "abilities": {
      "0": "Mold Breaker"
    },
    "nfe": true,
    "name_jp": "ナカヌチャン"
  },
  "Toedscool": {
    "types": [
      "Ground",
      "Grass"
    ],
    "bs": {
      "hp": 40,
      "at": 40,
      "df": 35,
      "sa": 50,
      "sd": 100,
      "sp": 70
    },
    "weightkg": 33,
    "abilities": {
      "0": "Mycelium Might"
    },
    "nfe": true,
    "name_jp": "ノノクラゲ"
  },
  "Toedscruel": {
    "types": [
      "Ground",
      "Grass"
    ],
    "bs": {
      "hp": 80,
      "at": 70,
      "df": 65,
      "sa": 80,
      "sd": 120,
      "sp": 100
    },
    "weightkg": 58,
    "abilities": {
      "0": "Mycelium Might"
    },
    "name_jp": "リククラゲ"
  },
  "Ursaluna": {
    "otherFormes": [
      "Ursaluna-Bloodmoon"
    ],
    "types": [
      "Ground",
      "Normal"
    ],
    "bs": {
      "hp": 130,
      "at": 140,
      "df": 105,
      "sa": 45,
      "sd": 80,
      "sp": 50
    },
    "weightkg": 290,
    "abilities": {
      "0": "Guts"
    },
    "name_jp": "ガチグマ"
  },
  "Ursaluna-Bloodmoon": {
    "types": [
      "Ground",
      "Normal"
    ],
    "bs": {
      "hp": 113,
      "at": 70,
      "df": 120,
      "sa": 135,
      "sd": 65,
      "sp": 52
    },
    "weightkg": 333,
    "abilities": {
      "0": "Mind's Eye"
    },
    "baseSpecies": "Ursaluna",
    "name_jp": "ガチグマ(アカツキ)"
  },
  "Varoom": {
    "types": [
      "Steel",
      "Poison"
    ],
    "bs": {
      "hp": 45,
      "at": 70,
      "df": 63,
      "sa": 30,
      "sd": 45,
      "sp": 47
    },
    "weightkg": 35,
    "abilities": {
      "0": "Overcoat"
    },
    "nfe": true,
    "name_jp": "ブロロン"
  },
  "Veluza": {
    "types": [
      "Water",
      "Psychic"
    ],
    "bs": {
      "hp": 90,
      "at": 102,
      "df": 73,
      "sa": 78,
      "sd": 65,
      "sp": 70
    },
    "weightkg": 90,
    "abilities": {
      "0": "Mold Breaker"
    },
    "name_jp": "ミガルーサ"
  },
  "Walking Wake": {
    "types": [
      "Water",
      "Dragon"
    ],
    "bs": {
      "hp": 99,
      "at": 83,
      "df": 91,
      "sa": 125,
      "sd": 83,
      "sp": 109
    },
    "weightkg": 280,
    "gender": "N",
    "abilities": {
      "0": "Protosynthesis"
    },
    "name_jp": "ウネルミナモ"
  },
  "Wattrel": {
    "types": [
      "Electric",
      "Flying"
    ],
    "bs": {
      "hp": 40,
      "at": 40,
      "df": 35,
      "sa": 55,
      "sd": 40,
      "sp": 70
    },
    "weightkg": 3.6,
    "abilities": {
      "0": "Wind Power"
    },
    "nfe": true,
    "name_jp": "カイデン"
  },
  "Wiglett": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 10,
      "at": 55,
      "df": 25,
      "sa": 35,
      "sd": 25,
      "sp": 95
    },
    "weightkg": 1.8,
    "abilities": {
      "0": "Gooey"
    },
    "nfe": true,
    "name_jp": "ウミディグダ"
  },
  "Wo-Chien": {
    "types": [
      "Dark",
      "Grass"
    ],
    "bs": {
      "hp": 85,
      "at": 85,
      "df": 100,
      "sa": 95,
      "sd": 135,
      "sp": 70
    },
    "weightkg": 74.2,
    "gender": "N",
    "abilities": {
      "0": "Tablets of Ruin"
    },
    "name_jp": "チオンジェン"
  },
  "Wooper-Paldea": {
    "types": [
      "Poison",
      "Ground"
    ],
    "bs": {
      "hp": 55,
      "at": 45,
      "df": 45,
      "sa": 25,
      "sd": 25,
      "sp": 15
    },
    "weightkg": 11,
    "abilities": {
      "0": "Poison Point"
    },
    "baseSpecies": "Wooper",
    "nfe": true,
    "name_jp": "ウパー(パルデアのすがた)"
  },
  "Wugtrio": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 35,
      "at": 100,
      "df": 50,
      "sa": 50,
      "sd": 70,
      "sp": 120
    },
    "weightkg": 5.4,
    "abilities": {
      "0": "Gooey"
    },
    "name_jp": "ウミトリオ"
  },
  "Arcanine-Hisui": {
    "types": [
      "Fire",
      "Rock"
    ],
    "bs": {
      "hp": 95,
      "at": 115,
      "df": 80,
      "sa": 95,
      "sd": 80,
      "sp": 90
    },
    "weightkg": 168,
    "abilities": {
      "0": "Intimidate"
    },
    "baseSpecies": "Arcanine",
    "name_jp": "ウインディ(ヒスイ)"
  },
  "Avalugg-Hisui": {
    "types": [
      "Ice",
      "Rock"
    ],
    "bs": {
      "hp": 95,
      "at": 127,
      "df": 184,
      "sa": 34,
      "sd": 36,
      "sp": 38
    },
    "weightkg": 262.4,
    "abilities": {
      "0": "Strong Jaw"
    },
    "baseSpecies": "Avalugg",
    "name_jp": "クレベース(ヒスイ)"
  },
  "Basculegion": {
    "types": [
      "Water",
      "Ghost"
    ],
    "bs": {
      "hp": 120,
      "at": 112,
      "df": 65,
      "sa": 80,
      "sd": 75,
      "sp": 78
    },
    "weightkg": 110,
    "abilities": {
      "0": "Swift Swim"
    },
    "otherFormes": [
      "Basculegion-F"
    ],
    "name_jp": "イダイトウ(オス)"
  },
  "Basculegion-F": {
    "types": [
      "Water",
      "Ghost"
    ],
    "bs": {
      "hp": 120,
      "at": 92,
      "df": 65,
      "sa": 100,
      "sd": 75,
      "sp": 78
    },
    "weightkg": 110,
    "abilities": {
      "0": "Swift Swim"
    },
    "baseSpecies": "Basculegion",
    "name_jp": "イダイトウ(メス)"
  },
  "Basculin-White-Striped": {
    "types": [
      "Water"
    ],
    "bs": {
      "hp": 70,
      "at": 92,
      "df": 65,
      "sa": 80,
      "sd": 55,
      "sp": 98
    },
    "weightkg": 18,
    "abilities": {
      "0": "Rattled"
    },
    "baseSpecies": "Basculin",
    "nfe": true,
    "name_jp": "バスラオ(しろすじ)"
  },
  "Braviary-Hisui": {
    "types": [
      "Psychic",
      "Flying"
    ],
    "bs": {
      "hp": 110,
      "at": 83,
      "df": 70,
      "sa": 112,
      "sd": 70,
      "sp": 65
    },
    "weightkg": 43.4,
    "abilities": {
      "0": "Keen Eye"
    },
    "baseSpecies": "Braviary",
    "name_jp": "ウォーグル(ヒスイ)"
  },
  "Decidueye-Hisui": {
    "types": [
      "Grass",
      "Fighting"
    ],
    "bs": {
      "hp": 88,
      "at": 112,
      "df": 80,
      "sa": 95,
      "sd": 95,
      "sp": 60
    },
    "weightkg": 37,
    "abilities": {
      "0": "Overgrow"
    },
    "baseSpecies": "Decidueye",
    "name_jp": "ジュナイパー(ヒスイ)"
  },
  "Dialga-Origin": {
    "types": [
      "Steel",
      "Dragon"
    ],
    "bs": {
      "hp": 100,
      "at": 100,
      "df": 120,
      "sa": 150,
      "sd": 120,
      "sp": 90
    },
    "weightkg": 850,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "baseSpecies": "Dialga",
    "name_jp": "ディアルガ(オリジン)"
  },
  "Electrode-Hisui": {
    "types": [
      "Electric",
      "Grass"
    ],
    "bs": {
      "hp": 60,
      "at": 50,
      "df": 70,
      "sa": 80,
      "sd": 80,
      "sp": 150
    },
    "weightkg": 71,
    "gender": "N",
    "abilities": {
      "0": "Soundproof"
    },
    "baseSpecies": "Electrode",
    "name_jp": "マルマイン(ヒスイ)"
  },
  "Enamorus": {
    "types": [
      "Fairy",
      "Flying"
    ],
    "bs": {
      "hp": 74,
      "at": 115,
      "df": 70,
      "sa": 135,
      "sd": 80,
      "sp": 106
    },
    "weightkg": 48,
    "abilities": {
      "0": "Cute Charm"
    },
    "otherFormes": [
      "Enamorus-Therian"
    ],
    "name_jp": "ラブトロス(けしん)"
  },
  "Enamorus-Therian": {
    "types": [
      "Fairy",
      "Flying"
    ],
    "bs": {
      "hp": 74,
      "at": 115,
      "df": 110,
      "sa": 135,
      "sd": 100,
      "sp": 46
    },
    "weightkg": 48,
    "abilities": {
      "0": "Overcoat"
    },
    "baseSpecies": "Enamorus",
    "name_jp": "ラブトロス(れいじゅう)"
  },
  "Goodra-Hisui": {
    "types": [
      "Steel",
      "Dragon"
    ],
    "bs": {
      "hp": 80,
      "at": 100,
      "df": 100,
      "sa": 110,
      "sd": 150,
      "sp": 60
    },
    "weightkg": 334.1,
    "abilities": {
      "0": "Sap Sipper"
    },
    "baseSpecies": "Goodra",
    "name_jp": "ヌメルゴン(ヒスイ)"
  },
  "Growlithe-Hisui": {
    "types": [
      "Fire",
      "Rock"
    ],
    "bs": {
      "hp": 60,
      "at": 75,
      "df": 45,
      "sa": 65,
      "sd": 50,
      "sp": 55
    },
    "weightkg": 22.7,
    "abilities": {
      "0": "Intimidate"
    },
    "baseSpecies": "Growlithe",
    "nfe": true,
    "name_jp": "ガーディ(ヒスイ)"
  },
  "Kleavor": {
    "types": [
      "Bug",
      "Rock"
    ],
    "bs": {
      "hp": 70,
      "at": 135,
      "df": 95,
      "sa": 45,
      "sd": 70,
      "sp": 85
    },
    "weightkg": 89,
    "abilities": {
      "0": "Swarm"
    },
    "name_jp": "バサギリ"
  },
  "Lilligant-Hisui": {
    "types": [
      "Grass",
      "Fighting"
    ],
    "bs": {
      "hp": 70,
      "at": 105,
      "df": 75,
      "sa": 50,
      "sd": 75,
      "sp": 105
    },
    "weightkg": 19.2,
    "abilities": {
      "0": "Chlorophyll"
    },
    "baseSpecies": "Lilligant",
    "name_jp": "ドレディア(ヒスイ)"
  },
  "Overqwil": {
    "types": [
      "Dark",
      "Poison"
    ],
    "bs": {
      "hp": 85,
      "at": 115,
      "df": 95,
      "sa": 65,
      "sd": 65,
      "sp": 85
    },
    "weightkg": 60.5,
    "abilities": {
      "0": "Poison Point"
    },
    "name_jp": "ハリーマン"
  },
  "Palkia-Origin": {
    "types": [
      "Water",
      "Dragon"
    ],
    "bs": {
      "hp": 90,
      "at": 100,
      "df": 100,
      "sa": 150,
      "sd": 120,
      "sp": 120
    },
    "weightkg": 660,
    "gender": "N",
    "abilities": {
      "0": "Pressure"
    },
    "baseSpecies": "Palkia",
    "name_jp": "パルキア(オリジン)"
  },
  "Qwilfish-Hisui": {
    "types": [
      "Dark",
      "Poison"
    ],
    "bs": {
      "hp": 65,
      "at": 95,
      "df": 85,
      "sa": 55,
      "sd": 55,
      "sp": 85
    },
    "weightkg": 3.9,
    "abilities": {
      "0": "Poison Point"
    },
    "baseSpecies": "Qwilfish",
    "nfe": true,
    "name_jp": "ハリーセン(ヒスイ)"
  },
  "Samurott-Hisui": {
    "types": [
      "Water",
      "Dark"
    ],
    "bs": {
      "hp": 90,
      "at": 108,
      "df": 80,
      "sa": 100,
      "sd": 65,
      "sp": 85
    },
    "weightkg": 58.2,
    "abilities": {
      "0": "Torrent"
    },
    "baseSpecies": "Samurott",
    "name_jp": "ダイケンキ(ヒスイ)"
  },
  "Sliggoo-Hisui": {
    "types": [
      "Steel",
      "Dragon"
    ],
    "bs": {
      "hp": 58,
      "at": 75,
      "df": 83,
      "sa": 83,
      "sd": 113,
      "sp": 40
    },
    "weightkg": 68.5,
    "abilities": {
      "0": "Sap Sipper"
    },
    "baseSpecies": "Sliggoo",
    "nfe": true,
    "name_jp": "ヌメイル(ヒスイ)"
  },
  "Sneasel-Hisui": {
    "types": [
      "Fighting",
      "Poison"
    ],
    "bs": {
      "hp": 55,
      "at": 95,
      "df": 55,
      "sa": 35,
      "sd": 75,
      "sp": 115
    },
    "weightkg": 27,
    "abilities": {
      "0": "Inner Focus"
    },
    "baseSpecies": "Sneasel",
    "nfe": true,
    "name_jp": "ニューラ(ヒスイ)"
  },
  "Sneasler": {
    "types": [
      "Fighting",
      "Poison"
    ],
    "bs": {
      "hp": 80,
      "at": 130,
      "df": 60,
      "sa": 40,
      "sd": 80,
      "sp": 120
    },
    "weightkg": 43,
    "abilities": {
      "0": "Pressure"
    },
    "name_jp": "オオニューラ"
  },
  "Typhlosion-Hisui": {
    "types": [
      "Fire",
      "Ghost"
    ],
    "bs": {
      "hp": 73,
      "at": 84,
      "df": 78,
      "sa": 119,
      "sd": 85,
      "sp": 95
    },
    "weightkg": 69.8,
    "abilities": {
      "0": "Blaze"
    },
    "baseSpecies": "Typhlosion",
    "name_jp": "バクフーン(ヒスイ)"
  },
  "Voltorb-Hisui": {
    "types": [
      "Electric",
      "Grass"
    ],
    "bs": {
      "hp": 40,
      "at": 30,
      "df": 50,
      "sa": 55,
      "sd": 55,
      "sp": 100
    },
    "weightkg": 13,
    "gender": "N",
    "abilities": {
      "0": "Soundproof"
    },
    "baseSpecies": "Voltorb",
    "nfe": true,
    "name_jp": "ビリリダマ(ヒスイ)"
  },
  "Wyrdeer": {
    "types": [
      "Normal",
      "Psychic"
    ],
    "bs": {
      "hp": 103,
      "at": 105,
      "df": 72,
      "sa": 105,
      "sd": 75,
      "sp": 65
    },
    "weightkg": 95.1,
    "abilities": {
      "0": "Intimidate"
    },
    "name_jp": "アヤシシ"
  },
  "Zoroark-Hisui": {
    "types": [
      "Normal",
      "Ghost"
    ],
    "bs": {
      "hp": 55,
      "at": 100,
      "df": 60,
      "sa": 125,
      "sd": 60,
      "sp": 110
    },
    "weightkg": 73,
    "abilities": {
      "0": "Illusion"
    },
    "baseSpecies": "Zoroark",
    "name_jp": "ゾロアーク(ヒスイ)"
  },
  "Zorua-Hisui": {
    "types": [
      "Normal",
      "Ghost"
    ],
    "bs": {
      "hp": 35,
      "at": 60,
      "df": 40,
      "sa": 85,
      "sd": 40,
      "sp": 70
    },
    "weightkg": 12.5,
    "abilities": {
      "0": "Illusion"
    },
    "baseSpecies": "Zorua",
    "nfe": true,
    "name_jp": "ゾロア(ヒスイ)"
  }
}