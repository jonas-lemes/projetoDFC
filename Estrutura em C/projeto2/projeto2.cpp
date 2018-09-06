#include <stdio.h>

int main(void){
	int x,t;
	float gama,p4,p1,e4,e1,q1,q2,q3,ro4,ro1,rou,lambda,p;
	float e[1000][3],q[1000][3];
	
	gama = 1.4; //gama
	lambda = 0,2; //lambda
	
	p4 =5; //5 , 10 ou 20 -- razão de pressão
	
	ro4 = p4/(gama-1);
	e4 = p4;
	
	p1=1;	
	ro1 = p1/(gama-1);
	e1=p1;	
	//e4 e e1 energia total;
	
	rou =0;
	
	for(x=0; x<=500;x++){
		q[x][0] = ro4; 
		q[x][1] = rou;
		q[x][2] = e4; 
		
		e[x][0] = rou;
		e[x][1] = ((rou*rou)/ro4)+p4;
		e[x][2] = (e4+p4)*(rou/ro4);
	}
	for(x=501; x<=1000;x++){
		q[x][0] = ro1; 
		q[x][1] = rou;
		q[x][2] = e1; 
		
		e[x][0] = rou;
		e[x][1] = ((rou*rou)/ro1)+p1;
		e[x][2] = (e1+p1)*(rou/ro1);
	}
	
	for(t=0;t<=299;t++){	//método principal	
		for(x=1;x<=999;x++){
			q[x][0] = q[x][0] - (lambda *(e[x+1][0] -e[x][0]));
			q[x][1] = q[x][1] - (lambda *(e[x+1][1] -e[x][1]));
			q[x][2] = q[x][2] - (lambda *(e[x+1][2] -e[x][2]));
		}
		
		for(x=1;x<=999;x++){
			e[x][0] = q[x][1];
			
			p = (gama - 1)*(q[x][2] - (q[x][1]*q[x][1])/(2*q[x][0]));
			e[x][1] = ((q[x][1]*q[x][1])/q[x][0]) + p;
			
			e[x][2] = (q[x][2]+p)*(q[x][1]/q[x][0]);
			
		}
		
	}
	
	for(x=1; x<=1000;x++){
		//usando a matriz de q, recalcular o valor de P e plotar no gráfico
		//sendo o eixo X o próprio x
		//e o Y sendo o P
	}
	
	
}

	
	
	

