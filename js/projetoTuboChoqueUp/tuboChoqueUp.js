function calculoTuboChoqueUp() {

    var gama = trocaVirgula($("#inputGamaU").val());
    var deltaT = trocaVirgula($("#inputDeltaTU").val());
    var deltaX = trocaVirgula($("#inputDeltaXU").val());
    
    var lambda = deltaT/deltaX;

   var q0 = new Array(1000);
	var q1 = new Array(1000);
	var q2 = new Array(1000);
	
    var e0 = new Array(1000);
	var e1 = new Array(1000);
	var e2 = new Array(1000);
  
	var pArr = new Array(1000);
	var vel = new Array(1000);
	var ro = new Array(1000);



    var p4 = $("#inputPressaoU").val();
    alert(p4);
    var ro4 = p4 / (gama - 1);
    var e4 = p4;

    var p1 = 1;
    var ro1 = p1 / (gama - 1);
    var e1 = p1;

    var roU = 0;

    for (x = 0; x <= 500; x++) {
   
        q0[x] = ro4;
        q1[x] = roU;
        q2[x] = e4;

   
        e0[x] = roU;
        e1[x] = ((roU * roU) / ro4) + p4;
        e2[x] = (e4 + p4) * (roU / ro4);
    }
	
    for (x = 501; x <= 1000; x++) {
        
        q0[x] = p1 / (gama - 1);;
        q1[x] = roU;
        q2[x] = e1;

        
        e0[x] = roU;
        e1[x] = ((roU * roU) / ro1) + p1;
        e2[x] = (e1 + p1) * (roU / ro1);
    }

	console.log(q0);
	console.log(q1);
	console.log(q2);

    for (t = 0; t <= 299; t++) {
        for (x = 1; x <= 999; x++) {
            q0[x] = q0[x] - (lambda * (e0[x + 1] - e0[x]));
            q1[x] = q1[x] - (lambda * (e1[x + 1] - e1[x]));
            q2[x] = q2[x] - (lambda * (e2[x + 1] - e2[x]));
        }

        for (x = 1; x <= 999; x++) {
            e0[x] = q1[x];

            p = (gama - 1) * (q2[x] - (q1[x] * q1[x]) / (2 * q0[x]));
			
            e1[x] = ((q1[x] * q1[x]) / q0[x]) + p;

            e2[x] = (q2[x] + p) * (q1[x] / q0[x]);
			
        }
    }
	
	for(x=0;x<=1000;x++){
		pArr[x] = (gama - 1) * (q2[x] - (q1[x] * q1[x]) / (2 * q0[x]));
		ro[x] = q0[x];
		vel[x] = q1[x]/q0[x];
	}
	console.log(pArr);

    geraGraficoUp(pArr);
	//geraGraficoUp(pArr,ro,vel);
}
