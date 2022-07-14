#include <stdio.h>
//#define len 64;

int main(){
    int i=0, j=0,pf=0, keep=1;
    char c;
    char[len] word;
    while(keep){
        keep = scanf("%c",&c)==EOF?0:1;
        i++;
        printf("\n> %d %c",i,c);


    }

    return 0;
}