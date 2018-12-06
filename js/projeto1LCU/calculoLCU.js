function calculoLCU() {
    var uInicial = new Array(1000);
    var fInicial = new Array(1000);

    var uCentrado = new Array(1000);
    var fCentrado = new Array(1000);

    var uLax = new Array(1000);
    var fLax = new Array(1000);

    var uUpwind = new Array(1000);
    var fUpwind = new Array(1000);

    var deltaT = trocaVirgula($("#inputDeltaT").val());
    var deltaX = trocaVirgula($("#inputDeltaX").val());
    var tempo = $("#inputTempo").val();

    var lambda = deltaT/deltaX;

    /*condições iniciais*/
    for (x = 0; x <= 500; x++) {
        uInicial[x] = 1.0;
        fInicial[x] = (uInicial[x] * uInicial[x]) / 2;
    }

    for (x = 501; x <= 1000; x++) {
        uInicial[x] = 0;
        fInicial[x] = (uInicial[x] * uInicial[x]) / 2;
    }
    /*fim condições inicial*/

    uCentrado = uInicial.slice();
    fCentrado = fInicial.slice();

    uLax = uInicial.slice();
    fLax = fInicial.slice();

    uUpwind = uInicial.slice();
    fUpwind = fInicial.slice();


    for (t = 1; t <= tempo; t++) {
        for (x = 1; x <= 999; x++) {
            // 1. CENTRADO
            uCentrado[x] = uCentrado[x] - (lambda / 2) * (fCentrado[x + 1] - fCentrado[x - 1]);
            fCentrado[x] = (uCentrado[x] * uCentrado[x]) / 2;

            //LAX
            uLax[x] = uLax[x] - (lambda / 2) * (fLax[x] - fLax[x - 1]) + ((uLax[x + 1] - (2 * uLax[x]) + uLax[x - 1]) / 2);
            fLax[x] = (uLax[x] * uLax[x]) / 2;

            //UPWIND
            uUpwind[x] = uUpwind[x] - (lambda * (fUpwind[x] - fUpwind[x - 1]));
            fUpwind[x] = (uUpwind[x] * uUpwind[x]) / 2;
        }
    }

    geraGraficoLCU('centrado', uCentrado);
    geraGraficoLCU('lax', uLax);
    geraGraficoLCU('upwind', uUpwind);
}
