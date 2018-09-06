#include <stdio.h>

int main(void){
	int u1,x,t=0,e;
	float lamb,dt;
	float u[1001],f[1001];
	
	dt = 0.2;
	printf("Escolha o metodo: \n 1. Centrado \n 2.Lax \n 3.UpWind \n");   
	scanf("%i", &e);
	if(e==1){
	
		lamb = 0.2 / 1;
		
		for(x=0;x<=500;x++){
			u[x] = 1.0;			
			f[x] = (u[x]*u[x])/2;
		}
		
		for(x=501;x<=1000;x++){
			u[x] = 0;
			f[x] = (u[x]*u[x])/2;
		}
	
		while(t<=10){
			for(x=1;x<=999;x++){
			 // 1. CENTRADO
			 u[x] = u[x] - (lamb/2) *(f[x+1]-f[x-1]);
			 f[x] = u[x];
			}
				t++;
		}
		FILE *file = fopen("centrado.txt", "w");
		fprintf(file,"\n\n\nResultados:\n");
		for(x=0;x<=1000;x++)	{
			fprintf(file, "%i : %f\n", x, u[x]);
		}
		fclose(file);
	} if(e==2){
		
		lamb = 0.2 / 1;
		
		for(x=0;x<=500;x++){
			u[x] = 1;
			f[x] = (u[x]*u[x])/2;
		}
		
	
		for(x=501;x<=1000;x++){
			u[x] = 0;
			f[x] = (u[x]*u[x])/2;
		}
	
		while(t<=600){
			for(x=1;x<=999;x++){
			// 2. LAX	
			 u[x] = u[x] - (lamb/2) * (f[x] - f[x-1]) + ((u[x+1]-(2*u[x])+u[x-1])/2);
		     f[x] = u[x];
     		}
     	t+=2;
		}
		FILE *file = fopen("lax.txt", "w");
		fprintf(file,"\n\n\nResultados:\n");
		for(x=0;x<=1000;x++)	{
			fprintf(file, "%i : %f\n", x, u[x]);
		}
		fclose(file);
	}
	 if(e==3){
	 	
	 	lamb = 0.2 / 1;
		
		for(x=0;x<=500;x++){
			u[x] = 1;
			f[x] = (u[x]*u[x])/2;
		}
		
		for(x=501;x<=1000;x++){
			u[x] = 0;
			f[x] = (u[x]*u[x])/2;
		}
	
	 	
		while(t<=100){
			for(x=1;x<=999;x++){
				 // 3.UP WIND
				 u[x] = u[x] - (lamb*(f[x]-f[x-1]));
			     f[x] = u[x];
	     	}
     	t++;
		}
		FILE *file = fopen("upWind.txt", "w");
		fprintf(file,"\n\n\nResultados:\n");
		for(x=0;x<=1000;x++)	{
			fprintf(file, "%i : %f\n", x, u[x]);
		}
		fclose(file);
	}
	
}

	
	
	

