//vnExpress web structure
var arrNodeTemp = [];

var titleNode = document.getElementsByClassName("featured container clearfix");
for (var i = 0; i < titleNode[0].childElementCount; i++) {
    if (titleNode[0].children[i].nodeName === "ARTICLE") {
        arrNodeTemp.push(titleNode[0].children[i]);
      }
}

var listSubFeatureNode = document.getElementById("list_sub_featured");
for (var i = 0; i < listSubFeatureNode.childElementCount; i++) {
    if (listSubFeatureNode.children[i].nodeName === "LI") {
      arrNodeTemp.push(listSubFeatureNode.children[i]);
    }
}

var gocNhinNode = document.getElementsByClassName("gocnhin");
arrNodeTemp.push(gocNhinNode[0]);

var listRelatedNewsNode = document.getElementsByClassName("related_news");
for (var i = 0; i < listRelatedNewsNode.length; i++) {
    for (var j = 0; j < listRelatedNewsNode[i].childElementCount; j++) {
      if (listRelatedNewsNode[i].children[j].nodeName === "A") {
        arrNodeTemp.push(listRelatedNewsNode[i].children[j]);
      }      
    } 
}

var listNewsNode = document.getElementsByClassName("list_news");
for (var i = 0; i < listNewsNode.length; i++) {
    if (listNewsNode[i].nodeName === "ARTICLE") {
        arrNodeTemp.push(listNewsNode[i]);
      }  
}

var listOwlItem = document.getElementsByClassName("owl-item");
for (var i = 0; i < listOwlItem.length; i++) {
    if (listOwlItem[i].nodeName === "DIV") {
        arrNodeTemp.push(listOwlItem[i]);
      }  
}

var listTitleNode = document.getElementsByClassName("list_title"); 
for (var i = 0; i < listTitleNode.length; i++) {
    for (var j = 0; j < listTitleNode[i].childElementCount; j++) {
      if (listTitleNode[i].children[j].nodeName === "LI") {
        arrNodeTemp.push(listTitleNode[i].children[j]);
      }      
    } 
}

var listEnglishNode = document.getElementById("evne");
for (var i = 0; i < listEnglishNode.childElementCount; i++) {
    if (listEnglishNode.children[i].nodeName === "LI") {
      arrNodeTemp.push(listEnglishNode.children[i]);
    }
}

var listKmNode = document.getElementsByClassName('list_km scrollbar-inner scroll-content scroll-scrolly_visible');
for (var j = 0; j < listKmNode[0].childElementCount; j++) {
    if (listKmNode[0].children[j].nodeName === "LI") {
      arrNodeTemp.push(listKmNode[0].children[j]);
    }      
}

//end vnExpress web structure