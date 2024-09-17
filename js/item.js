// ================================================================
function allreplace(text, rep1, rep2){
	while(true){
		dummy = text;
		text = dummy.replace(rep1, rep2);
		if(dummy == text)
		break;
	}
	return text;
}

function newitem(limit,tempurl,itemurl,group){

	items = new Array();
	place = new Array();
	source = new Array();

	http = new JKL.ParseXML.Text( tempurl );
	temp = http.parse();

	http = new JKL.ParseXML.CSV( itemurl );
	data = http.parse();

	if( limit == 0 ){
		row = data.length;
	}else{
		if(limit + 1 < data.length){
			row = limit + 1;
		}else{
			row = data.length;
		}
	}
	for(i = 0; i < data[0].length; i++){
		items[i] = data[0][i];
	}
	for(i = 1; i < row; i++){
		if(data[i][0] == group | group == 0 | group == null){
			var	source = temp;
			for(j=0;j < data[0].length;j++){
				var	place = "%"+items[j]+"%";
				var	source = allreplace(source,place,data[i][j]);
			}
			document.writeln( source );
		}else{
			if(row < data.length){
				row++;
			}else{
			}
		}
	}
}


