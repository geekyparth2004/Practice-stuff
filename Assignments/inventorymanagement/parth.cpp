#include<iostream>
using namespace std; 
int main()
{   
    int n; 

    cout<<"Specify what you want to do"; 
    cout<<"Press 1 for Sign up, Press 2 for Login and Press 3 for Company login"; 
    cin>>n; 

    if(n==1)
    {
        cout<<"Welcome to the bank"; 
    }

    else if(n==2)
    {
        cout<<"Welcome again to the bank"; 
    }

    else if(n==3)
    {
        cout<<"Hey team member please check your work update"; 
    }
}