function calculo() {
    var gama = 1.4; //gama
    var lambda = 0.2; //lambda

    var q = new Array(1000);
    var e = new Array(1000);


    var p4 = 5; //5 , 10 ou 20 -- raz�o de press�o

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
        e[x][1] = ((roU * roU) / ro4) + p4;
        e[x][2] = (e4 + p4) * (roU / ro4);
    }
    for (x = 501; x <= 1000; x++) {
        q[x] = new Array(3);
        q[x][0] = ro1;
        q[x][1] = roU;
        q[x][2] = e1;

        e[x] = new Array(3);
        e[x][0] = roU;
        e[x][1] = ((roU * roU) / ro1) + p1;
        e[x][2] = (e1 + p1) * (roU / ro1);
    }

    for (t = 0; t <= 299; t++) {
        for (x = 1; x <= 999; x++) {
            q[x][0] = q[x][0] - (lambda * (e[x + 1][0] - e[x][0]));
            q[x][1] = q[x][1] - (lambda * (e[x + 1][1] - e[x][1]));
            q[x][2] = q[x][2] - (lambda * (e[x + 1][2] - e[x][2]));
        }

        for (x = 1; x <= 999; x++) {
            e[x][0] = q[x][1];

            p = (gama - 1) * (q[x][2] - (q[x][1] * q[x][1]) / (2 * q[x][0]));
            e[x][1] = ((q[x][1] * q[x][1]) / q[x][0]) + p;

            e[x][2] = (q[x][2] + p) * (q[x][1] / q[x][0]);
        }
    }

    for (x = 1; x <= 1000; x++) {
        console.log(q[x][0]);
        //usando a matriz de q, recalcular o valor de P e plotar no gr�fico
        //sendo o eixo X o pr�prio x
        //e o Y sendo o P
    }
    
    geraGrafico2();
}
