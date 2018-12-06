function calculoTuboChoqueLax() {
    var gama = trocaVirgula($("#inputGamaL").val());
    var deltaT = trocaVirgula($("#inputDeltaTL").val());
    var deltaX = trocaVirgula($("#inputDeltaXL").val());
    
    var lambda = deltaT/deltaX;
    
	
	//necessidade do numero de interações

    var q = new Array(1000);
    var e = new Array(1000);
	
	var pArr = new Array(1000);
	var vel = new Array(1000);
	var ro = new Array(1000);


    var p4 = $("#inputPressaoL").val();


    var ro4 = p4 / (gama - 1);
    var e4 = p4;

    var p1 = 1;
    var ro1 = p1 / (gama - 1);
    var e1 = p1;

    var roU = 0;
    
    
    
    for (x = 0; x <= 500; x++) {
        q[x] = new Array(3);
        q[x] = ro4;
        q[x][1] = roU;
        q[x][2] = e4;

        e[x] = new Array(3);
        e[x][0] = roU;
        e[x][1] = parseFloat(((roU * roU) / ro4) + p4,10)
        e[x][2] = parseFloat((e4 + p4) * (roU / ro4),10);
    }
    
    
    for (x = 501; x <= 1000; x++) {
        q[x] = new Array(3);
        q[x][0] = ro1;
        q[x][1] = roU;
        q[x][2] = e1;

        e[x] = new Array(3);
        e[x][0] = roU;
        e[x][1] = parseFloat(((roU * roU) / ro1) + p1,10);
        e[x][2] = parseFloat((e1 + p1) * (roU / ro1),10);
    }
    
    console.log(q);

    for (t = 0; t <= 299; t++) {
        for (x = 1; x <= 999; x++) {
            q[x][0] = parseFloat(q[x][0] + ((q[x+1][0] - 2 * q[x][0] + q[x-1][0])/2) - (lambda/2) * (e[x+1][0] - e[x-1][0]),10);
            q[x][1] = parseFloat(q[x][0] + ((q[x+1][1] - 2 * q[x][1] + q[x-1][1])/2) - (lambda/2) * (e[x+1][1] - e[x-1][1]),10);
            q[x][2] = parseFloat(q[x][0] + ((q[x+1][2] - 2 * q[x][2] + q[x-1][2])/2) - (lambda/2) * (e[x+1][2] - e[x-1][2]),10);
        }

        for (x = 1; x <= 999; x++) {
            e[x][0] = q[x][1];

            p = parseFloat((gama - 1) * (q[x][2] - (q[x][1] * q[x][1]) / (2 * q[x][0])),10);
            
            e[x][1] = parseFloat(((q[x][1] * q[x][1]) / q[x][0]) + p,10);

            e[x][2] = parseFloat((q[x][2] + p) * (q[x][1] / q[x][0]),10);
        }
    }
   
/*
	for(x=0;x<=1000;x++){
		pArr[x] = (gama - 1) * (q[x][2] - (q[x][1] * q[x][1]) / (2 * q[x][0]));
		ro[x] = q[x][0];
		vel[x] = q[x][1]/q[x][0];
	}
    

    geraGraficoLax(pArr);*/
}
