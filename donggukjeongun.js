function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}

function buildHangeul(data, index){
	let string = "";
	
	switch (data.donggukjeongun[index].choseong) {
		case "giyeok":      string += "\u1100"; break;
		case "kieuk":       string += "\u110F"; break;
		case "ssanggiyeok": string += "\u1101"; break;
		case "ngieung":     string += "\u114C"; break;
		case "digeut":      string += "\u1103"; break;
		case "tieut":       string += "\u1110"; break;
		case "ssangdigeut": string += "\u1104"; break;
		case "nieun":       string += "\u1102"; break;
		case "bieup":       string += "\u1107"; break;
		case "pieup":       string += "\u1111"; break;
		case "ssangbieup":  string += "\u1108"; break;
		case "mieum":       string += "\u1106"; break;
		case "jieut":       string += "\u110C"; break;
		case "chieut":      string += "\u110E"; break;
		case "ssangjieut":  string += "\u110D"; break;
		case "siot":        string += "\u1109"; break;
		case "ssangsiot":   string += "\u110A"; break;
		case "yeorinhieut": string += "\u1159"; break;
		case "hieut":       string += "\u1112"; break;
		case "ssanghieut":  string += "\u1158"; break;
		case "ieung":       string += "\u110B"; break;
		case "rieul":       string += "\u1105"; break;
		case "bansiot":     string += "\u1140"; break;
	}
	switch (data.donggukjeongun[index].jungseong) {
		case "araea":  string += "\u119E"; break;
		case "eu":     string += "\u1173"; break;
		case "ii":     string += "\u1175"; break;
		case "araeai": string += "\u11A1"; break;
		case "ui":     string += "\u1174"; break;
		case "oe":     string += "\u116C"; break;
		case "ae":     string += "\u1162"; break;
		case "wae":    string += "\u116B"; break;
		case "yy":     string += "\u1171"; break;
		case "yui":    string += "\u1194"; break;
		case "ye":     string += "\u1168"; break;
		case "yuye":   string += "\u1192"; break;
		case "oo":     string += "\u1169"; break;
		case "yo":     string += "\u116D"; break;
		case "aa":     string += "\u1161"; break;
		case "ya":     string += "\u1163"; break;
		case "wa":     string += "\u116A"; break;
		case "uu":     string += "\u116E"; break;
		case "yu":     string += "\u1172"; break;
		case "eo":     string += "\u1165"; break;
		case "yeo":    string += "\u1167"; break;
		case "wo":     string += "\u116F"; break;
		case "yuyeo":  string += "\u1191"; break;
	}
	switch (data.donggukjeongun[index].jongseong) {
		case "none":
			string += "\u11BC";
			break;
		case "velar":
			if (data.donggukjeongun[index].tone === "entering")
				string += "\u11A8" + "\u302E";
			else
				string += "\u11F0";
			break;
		case "alveolar":
			if (data.donggukjeongun[index].tone === "entering")
				string += "\u11D9" + "\u302E";
			else
				string += "\u11AB";
			break;
		case "bilabial":
			if (data.donggukjeongun[index].tone === "entering")
				string += "\u11B8" + "\u302E";
			else
				string += "\u11B7";
			break;
		case "sungyeongeummieum":
			string += "\u11E2";
			break;
	}
	switch (data.donggukjeongun[index].tone) {
		case "departing": string += "\u302E"; break;
		case "rising":    string += "\u302F"; break;
		default:                              break;
	}
	return string;
}

function chineseCharacterIntoHangeul(data, value) {
	let output = "";
	let first = false;
	for (let i = 0; i < data.donggukjeongun.length; i++) {
		if (data.donggukjeongun[i].chineseCharacter.includes(value)) {
			if (first === true) {
				output += ", ";
			}
			output += buildHangeul(data, i);
			first = true;
		}
	}
	return output;
}

function printHangeul() {
	const data = fetch("./donggukjeongun.json")
		.then(response => response.json())
		.then(data => {
			const hangeul = chineseCharacterIntoHangeul(data, document.getElementById("text").value);
			if (!document.getElementById("text").value) {
				document.getElementById("letter").innerHTML = "Enter Chinese character.";
			} else if (hangeul === undefined) {
				document.getElementById("letter").innerHTML = "Invalid character.";
			} else {
				document.getElementById("letter").innerHTML = hangeul;
			}
		})
		.catch(error => console.log(error));
}
