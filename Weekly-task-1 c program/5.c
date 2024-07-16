#include<stdio.h>
int main(){
    int a,b,c;

    printf("enter the value=");
    scanf("%d",&a);
    printf("enter the value=");
    scanf("%d",&b);
    printf("enter the value=");
    scanf("%d",&c);
    if(a>b){
        printf("%d",a);
    }
    else if (b>c)
    {
        printf("%d",b);
        
    }
    else{
        printf("%d",c);

    }
}