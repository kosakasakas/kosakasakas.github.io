var pokemon;
var dex;
var speed;
var regulation = "TEAL";
var regulationText = "キタカミ図鑑";
var listType = "available";

document.getElementById("main-display-area").style.display ="none";

readCSVData('/pokelist/db/def_pokemon.csv', OnParsePokemonData, OnGaDataFailed);
readCSVData('/pokelist/db/def_dex_paldea.csv', OnParseDexData, OnGaDataFailed);
readCSVData('/pokelist/db/speed_list_paldea.csv', OnParseSpeedData, OnGaDataFailed);

//google.script.run.withSuccessHandler(OnParsePokemonData).withFailureHandler(OnGaDataFailed).getPokemonData();
//google.script.run.withSuccessHandler(OnParseDexData).withFailureHandler(OnGaDataFailed).getDexData();
//google.script.run.withSuccessHandler(OnParseSpeedData).withFailureHandler(OnGaDataFailed).getSpeedData();

var pokeDataLoaded = false;
var dexDataLoaded = false;
var speedDataLoaded = false;
var searchword = "nothing"

function Result(data)
{
  alert( "callbacked" );
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
  UpdateTable();
}

function CheckDisplay()
{
    var initialized = pokeDataLoaded && dexDataLoaded && speedDataLoaded;
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
    
  }
}

function getPokeIconElement(pokeName, iconName, tetteiID)
{
  var link = document.createElement("a");
  link.href = 'https://yakkun.com/sv/zukan/'+tetteiID;
  var img = document.createElement("div");
  img.setAttribute("class", "icon-"+iconName);
  img.setAttribute("style", "display: inline-block;");
  img.setAttribute("id", "pm-" + pokeName);
  link.appendChild(img);
  return link;
}

function UpdateAbailablePokemons()
{
  const regID = (regulation == "D") ? 2
              : (regulation == "C") ? 3
              : (regulation == "B") ? 4
              : (regulation == "A") ? 5
              : (regulation == "INDIGO") ? 8
              : (regulation == "TEAL") ? 10
              : 2;
  for (const d of dex)
  {
    const pokeName = d[0];
    const pokeIndex = d[1];
    const pokeAvailable = d[regID];
    if (pokeAvailable == "X") continue;

    const p = pokemon[pokeIndex];
    const iconID = p[27];
    const iconName = p[26];
    const tetteiID = p[28];
    const gen = p[4];

    const idtex = "list-available-" + gen;
    var parent = document.getElementById(idtex);

    var icon = getPokeIconElement(pokeName, iconName, tetteiID);

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
    const regID = (regulation == "D") ? 7
                : (regulation == "C") ? 8
                : (regulation == "B") ? 9
                : (regulation == "A") ? 10
                : (regulation == "INDIGO") ? 13
                : (regulation == "TEAL") ? 15
                : 2;
    for (const s of speed)
    {
      const pokeAvailable = s[regID];
      if (pokeAvailable == "X") continue;

      const pokeIndex = s[1];
      const p = pokemon[pokeIndex];
      const iconID = p[27];
      const iconName = p[26];
      const tetteiID = p[28];
      const gen = p[4];

      const pokeName = s[0];
      const pokeWarming = s[2];
      const pokeBoost = s[3];
      const pokeStat = s[4];
      const pokeRank = parseInt(s[5]);
      const pokeVal = parseInt(s[6]);

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
        
        var icon = getPokeIconElement(pokeName, iconName, tetteiID);
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

        var icon = getPokeIconElement(pokeName, iconName, tetteiID);
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
  HilightPokemon();
}

function OnClickShowSpeedList()
{
  if (listType == "speed") return;
  listType = "speed";
  UpdateTable();
  HilightPokemon();
}

function HilightPokemon()
{
  const word = document.getElementById("poke-search").value;
  if (word == "") return;

  {
    const classID = "pm-" + searchword;
    let targets = document.querySelectorAll(`[id^=`+classID+`]`);
    for (var t of targets)
    {
      t.classList.remove("searched");
    }
  }
  {
    const classID = "pm-" + word;
    let targets = document.querySelectorAll(`[id^=`+classID+`]`);
    for (var t of targets)
    {
      t.classList.add("searched");
    }
    targets[0].scrollIntoView();
  }
  searchword = word;
}

function OnSearchPokemon()
{
  HilightPokemon();
}
