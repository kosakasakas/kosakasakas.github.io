var pokemon;
var dex;
var speed;
var ability2poke;
var move2poke;
var regulation = "E";
var regulationText = "レギュレーションE";
var listType = "available";

document.getElementById("main-display-area").style.display ="none";

readCSVData('/pokelist/db/def_pokemon.csv', OnParsePokemonData, OnGaDataFailed);
readCSVData('/pokelist/db/def_dex_paldea.csv', OnParseDexData, OnGaDataFailed);
readCSVData('/pokelist/db/list_speed.csv', OnParseSpeedData, OnGaDataFailed);
readCSVData('/pokelist/db/list_ability2poke.csv', OnParseAbility2PokeData, OnGaDataFailed);
readCSVData('/pokelist/db/list_move2poke.csv', OnParseMove2PokeData, OnGaDataFailed);

//google.script.run.withSuccessHandler(OnParsePokemonData).withFailureHandler(OnGaDataFailed).getPokemonData();
//google.script.run.withSuccessHandler(OnParseDexData).withFailureHandler(OnGaDataFailed).getDexData();
//google.script.run.withSuccessHandler(OnParseSpeedData).withFailureHandler(OnGaDataFailed).getSpeedData();

var pokeDataLoaded = false;
var dexDataLoaded = false;
var speedDataLoaded = false;
var ability2pokeLoaded = false;
var move2pokeLoaded = false;
var searchword = "nothing"
var pokeID2dexID = [];

function Result(data)
{
  alert( "callbacked" );
}
function OnParseAbility2PokeData(data)
{
  ability2poke = data;
  ability2pokeLoaded = true;
  CheckDisplay();
}
function OnParseMove2PokeData(data)
{
  move2poke = data;
  move2pokeLoaded = true;
  CheckDisplay();
}
function OnParsePokemonData(data)
{
  pokemon = data;
  pokeDataLoaded = true;
  CheckDisplay();
}

function OnParseDexData(data)
{
  dex = data;
  dexDataLoaded = true;
  /*
  var dataList = document.getElementById('pokenames');
  for (const d of dex)
  {
    var option = document.createElement('option');
    option.value = d[0];
    dataList.appendChild(option);
  }
  */
  CheckDisplay();
}

function OnParseSpeedData(data)
{
  speed = data;
  speedDataLoaded = true;
  CheckDisplay();
}

function Initialize()
{
  for (const p of pokemon)
  {
    const pokeID = p[0];
    for (const d of dex)
    {
      const dexPokeID = d[2];
      if (pokeID == dexPokeID)
      {
        pokeID2dexID[pokeID] = d[0];
      }
    }
  }
  UpdateTable();
}

function CheckDisplay()
{
    var initialized = pokeDataLoaded && dexDataLoaded && speedDataLoaded && ability2pokeLoaded && move2pokeLoaded;
    if (initialized)
    {
      document.getElementById("main-display-area").style.display ="block";
      document.getElementById("loading-area").style.display ="none";
      Initialize();
    }
}

function OnGaDataFailed()
{
  alert("GAの読み込みに失敗しました.");
}

function InnerSetupSearchList(searchword, listData)
{
  var search = document.getElementById("poke-search");
  search.setAttribute("placeholder", searchword + "名で検索");

  var parent = document.getElementById("main-content-area");

  var table = document.createElement("table");
  table.setAttribute("class", "table table-hover");
  {
    var thead = document.createElement("thead");
    {
      var tr = document.createElement("tr");
      {
        var th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.textContent = searchword;
        tr.appendChild(th);
      }
      {
        var th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.textContent = "ポケモン";
        tr.appendChild(th);
      }
      thead.appendChild(tr);
    }
    table.appendChild(thead);

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id", "poke-list-body");

    for (const data of listData)
    {
      const text = data[1];
      const pokeIDsStr = data[2];
      if (pokeIDsStr == "") continue;
  
      var tr = document.createElement("tr");
      var th = document.createElement("th");
      th.setAttribute("scope", "row");
      th.textContent = text;
      th.setAttribute("id", "row-" + text);
      tr.appendChild(th);
  
      var tdPoke = document.createElement("td");
  
      const pokeIDs = pokeIDsStr.split(',');
      for (const pokeID of pokeIDs)
      {
        const dexID = pokeID2dexID[pokeID];
        if (!CheckAvailable(dexID)) continue;
  
        const poke = GetPokemon(pokeID);
        const icon = getPokeIconElement(poke);
        tdPoke.appendChild(icon);
      }
      tr.appendChild(tdPoke);
      tbody.appendChild(tr);
    }

    table.appendChild(tbody);
  }
  parent.appendChild(table);
}

function SetupTable()
{
  // クリーン    
  var parent = document.getElementById("main-content-area");
  while (parent.lastChild)
  {
    parent.removeChild(parent.lastChild);
  }

  if (listType == "available")
  {
    var search = document.getElementById("poke-search");
    search.setAttribute("placeholder", "ポケモン名で検索");

    var table = document.createElement("table");
    table.setAttribute("class", "table table-hover");
    table.setAttribute("id", "speed-table");
    if (regulation == "TEAL")
    {
      table.classList.add("teal");
    }
    else if (regulation == "INDIGO")
    {
      table.classList.add("indigo");
    }
    {
      var thead = document.createElement("thead");
      {
        var tr = document.createElement("tr");
        {
          var th = document.createElement("th");
          th.setAttribute("scope", "col");
          th.textContent = "#";
          tr.appendChild(th);
        }
        {
          var th = document.createElement("th");
          th.setAttribute("scope", "col");
          th.textContent = regulationText+"ポケモン";
          tr.appendChild(th);
        }
        thead.appendChild(tr);
      }

      var tbody = document.createElement("tbody");
      var gens = [1,2,3,4,5,6,7,8,8.5,9];
      for (const gen of gens)
      {
        var idtex = "list-available-" + gen; 
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.setAttribute("scope", "row");
        th.textContent = gen;
        var td = document.createElement("td");
        td.setAttribute("id", idtex);
        td.textContent = "";
        tr.appendChild(th);
        tr.appendChild(td);
        tbody.appendChild(tr);
      }

      table.appendChild(thead);
      table.appendChild(tbody);
    }
    parent.appendChild(table);
  }
  else if (listType == "speed")
  {
    var search = document.getElementById("poke-search");
    search.setAttribute("placeholder", "ポケモン名で検索");
  }
  else if (listType == "ability")
  {
    InnerSetupSearchList("とくせい", ability2poke);
  }
  else if (listType == "move")
  {
    InnerSetupSearchList("わざ", move2poke);
  }
}

function getPokeIconElement(poke)
{
  var link = document.createElement("a");
  link.href = 'https://yakkun.com/sv/zukan/' + poke.tetteiID;
  var img = document.createElement("div");
  img.setAttribute("class", "icon-" + poke.iconName);
  img.setAttribute("style", "display: inline-block;");
  img.setAttribute("id", "pm-" + poke.name);
  link.appendChild(img);
  return link;
}

function CheckAvailable(dexID)
{
  const d = dex[dexID];
  if (!d) return false;
  const regID = (regulation == "E") ? 10
              : (regulation == "D") ? 3
              : (regulation == "C") ? 4
              : (regulation == "B") ? 5
              : (regulation == "A") ? 6
              : (regulation == "INDIGO") ? 8
              : (regulation == "TEAL") ? 9
              : 3;
  return (d[regID] == "X") ? false : true;
}

function GetPokemon(pokeID)
{
  const p = pokemon[pokeID];
  const poke = {
    pokeID: pokeID,
    name: p[11],
    gen: p[4],
    iconName: p[27],
    iconID: p[28],
    tetteiID: p[29]
  }
  return poke;
}

function UpdateAbailablePokemons()
{
  for (const d of dex)
  {
    const dexID = d[0];
    const pokeID = d[2];
    if (!CheckAvailable(dexID)) continue;

    const p = GetPokemon(pokeID);

    const idtex = "list-available-" + p.gen;
    var parent = document.getElementById(idtex);

    var icon = getPokeIconElement(p);

    parent.appendChild(icon);
  }
}

function UpdateSpeedList()
{
  var parent = document.getElementById("main-content-area");
  
  var table = document.createElement("table");
  table.setAttribute("class", "table table-hover");
  {
    var thead = document.createElement("thead");
    {
      var tr = document.createElement("tr");
      {
        var th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.textContent = "実数値";
        tr.appendChild(th);
      }
      {
        var th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.textContent = "ポケモン";
        tr.appendChild(th);
      }
      thead.appendChild(tr);
    }

    var lastVal = 999;
    var lastTd;
    var lastPrefix;
    var tbody = document.createElement("tbody");
    for (const s of speed)
    {
      const pokeID = s[1];
      const dexID = s[2];
      if (!CheckAvailable(dexID)) continue;

      const poke = GetPokemon(pokeID);

      const pokeWarming = s[3];
      const pokeBoost = s[4];
      const pokeStat = s[5];
      const pokeRank = parseInt(s[6]);
      const pokeVal = parseInt(s[7]);

      var prefix = pokeWarming + pokeStat + "族";
      prefix += (pokeRank > 0) ? "(" +  pokeBoost + "+" + pokeRank + ")" : "";
      prefix += (pokeBoost == "スカーフ" || pokeBoost == "鉄球") ? "(" + pokeBoost + ")" : "";
      if (pokeVal < lastVal)
      {
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.setAttribute("scope", "row");
        th.textContent = pokeVal;

        var tdPoke = document.createElement("td");
        tdPoke.setAttribute("id", "speed-" + pokeVal);
        tdPoke.textContent = prefix;
        
        var icon = getPokeIconElement(poke);
        tdPoke.appendChild(icon);

        tr.appendChild(th);
        tr.appendChild(tdPoke);
        tbody.appendChild(tr);
        lastVal = pokeVal;
        lastTd = tdPoke;
        lastPrefix = prefix;
      }
      else
      {
        if (lastPrefix != prefix)
        {
          var tex = document.createElement("a");
          tex.textContent = "  " + prefix;
          lastTd.appendChild(tex);
          lastPrefix = prefix;
        }

        var icon = getPokeIconElement(poke);
        lastTd.appendChild(icon);
      }
    }

    table.appendChild(thead);
    table.appendChild(tbody);
  }
  parent.appendChild(table);
}

function UpdateTable()
{
  SetupTable();
  if (listType == "available")
  {
    UpdateAbailablePokemons();
  }
  else if (listType == "speed")
  {
    UpdateSpeedList();
  }
}

function OnChangeRegulation(obj)
{
  var idx = obj.selectedIndex;
  var value = obj.options[idx].value;
  var text  = obj.options[idx].text;
  regulation = value;
  regulationText = text;
  UpdateTable();
}

function OnClickShowAvailableList()
{
  if (listType == "available") return;
  listType = "available";
  UpdateTable();
  Hilight();
}

function OnClickShowSpeedList()
{
  if (listType == "speed") return;
  listType = "speed";
  UpdateTable();
  Hilight();
}

function OnClickShowMoveList()
{
  if (listType == "move") return;
  listType = "move";
  UpdateTable();
  Hilight();
}

function OnClickShowAbilityList()
{
  if (listType == "ability") return;
  listType = "ability";
  UpdateTable();
  Hilight();
}

function Hilight()
{
  var searchIDPrefix ="";
  switch (listType)
  {
    case "ability":
    case "move":
      searchIDPrefix = "row-"
      break;

    default:
      searchIDPrefix = "pm-";
      break;
  }

  const word = document.getElementById("poke-search").value;
  if (word == "") return;

  {
    let targets = document.querySelectorAll(`[id^=`+searchword+`]`);
    for (var t of targets)
    {
      t.classList.remove("searched");
    }
  }
  {
    const classID = searchIDPrefix + word;
    let targets = document.querySelectorAll(`[id^=`+classID+`]`);
    for (var t of targets)
    {
      t.classList.add("searched");
    }
    targets[0].scrollIntoView();
  }
  document.getElementById("poke-search").value = "";
  searchword = classID;
}

function OnSearch()
{
  Hilight();
}
