var pokemon;
var dex;
var speed;
var regulation = "D";
var regulationText = "レギュレーションD";
var listType = "available";

document.getElementById("main-display-area").style.display ="none";

//readCSVData('/pokelist/db/def_pokemon2.csv', Result, Result);
readCSVData('/pokelist/db/def_pokemon2.csv', OnParsePokemonData, OnGaDataFailed);
readCSVData('/pokelist/db/def_dex_paldea.csv', OnParseDexData, OnGaDataFailed);
readCSVData('/pokelist/db/speed_paldea.csv', OnParseSpeedData, OnGaDataFailed);

//google.script.run.withSuccessHandler(OnParsePokemonData).withFailureHandler(OnGaDataFailed).getPokemonData();
//google.script.run.withSuccessHandler(OnParseDexData).withFailureHandler(OnGaDataFailed).getDexData();
//google.script.run.withSuccessHandler(OnParseSpeedData).withFailureHandler(OnGaDataFailed).getSpeedData();

var pokeDataLoaded = false;
var dexDataLoaded = false;
var speedDataLoaded = false;

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
  CheckDisplay();
}

function OnParseSpeedData(data)
{
  speed = data;
  speedDataLoaded = true;
  CheckDisplay();
}

function CheckDisplay()
{
    var initialized = pokeDataLoaded && dexDataLoaded && speedDataLoaded;
    if (initialized)
    {
      document.getElementById("main-display-area").style.display ="block";
      document.getElementById("loading-area").style.display ="none";
      UpdateTable();
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

function UpdateAbailablePokemons()
{
  const regID = (regulation == "D") ? 4
              : (regulation == "C") ? 5
              : (regulation == "B") ? 6
              : (regulation == "A") ? 7
              : (regulation == "EV") ? 8
              : (regulation == "DLC") ? 9
              : (regulation == "INDIGO") ? 10
              : (regulation == "TEAL") ? 11
              : 4;
  for (const d of dex)
  {
    const pokeName = d[0];
    const pokeIndex = d[3];
    const pokeAvailable = d[regID];
    if (pokeAvailable == "X") continue;

    const p = pokemon[pokeIndex];
    const iconID = p[27];
    const gen = p[4];
    const idtex = "list-available-" + gen;
    var parent = document.getElementById(idtex);
    var img = document.createElement("img");
    img.setAttribute("class", "poke-icon");
    img.src = 'https://drive.google.com/uc?export=download&id=' + iconID;
    parent.appendChild(img);
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
      /*
      {
        var th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.textContent = "育て方";
        tr.appendChild(th);
      }
      {
        var th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.textContent = "種族値";
        tr.appendChild(th);
      }
      */
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
                : (regulation == "EV") ? 11
                : (regulation == "DLC") ? 12
                : 4;
    for (const s of speed)
    {
      const pokeAvailable = s[regID];
      if (pokeAvailable == "X") continue;

      const pokeVal = s[0];
      const pokeRaising = s[1];
      const pokeStat = s[2];
      const pokeName = s[3];
      const pokeAbility = s[4];
      const pokeIcon = s[5];  
      const pokeRank = parseInt(s[6]);
      var prefix = pokeRaising + pokeStat + "族";
      prefix += (pokeRank > 0) ? (" (" + ((pokeRank == 1) ? "スカーフ" : pokeAbility) + "+" + pokeRank + ") ") : "";
      if (pokeVal < lastVal)
      {
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.setAttribute("scope", "row");
        th.textContent = pokeVal;

/*
        var tdRasing = document.createElement("td");
        tdRasing.textContent = pokeRaising;

        var tdStat = document.createElement("td");
        tdStat.textContent = pokeStat;
        */

        var tdPoke = document.createElement("td");
        //tdPoke.setAttribute("colspan", 6)
        tdPoke.setAttribute("id", "speed-" + pokeVal);
        tdPoke.textContent = prefix;
        
        var img = document.createElement("img");
        img.setAttribute("class", "poke-icon");
        img.src = 'https://drive.google.com/uc?export=download&id=' + pokeIcon;
        tdPoke.appendChild(img);

        tr.appendChild(th);
        //tr.appendChild(tdRasing);
        //tr.appendChild(tdStat);
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
        var img = document.createElement("img");
        img.setAttribute("class", "poke-icon");
        img.src = 'https://drive.google.com/uc?export=download&id=' + pokeIcon;
        lastTd.appendChild(img);
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
}

function OnClickShowSpeedList()
{
  if (listType == "speed") return;
  listType = "speed";
  UpdateTable();
}
