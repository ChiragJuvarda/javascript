#include<stdio.h>
int main(){
int n,  Fibonacci=0;
printf("Enter the Number :");
scanf("%d",&n);
for (int i = n; i>=1; i--)
{
    Fibonacci= Fibonacci+i;
}
printf(" Fibonacci of %d is : %d ",n , Fibonacci);
    return 0 ;
}