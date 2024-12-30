#include<iostream>
#include<string>
#include<vector>
using namespace std;
vector<string> v;

int main(){
    string name, username, p1, p2;
    cout<<"Enter Your Name: ";
    getline(cin,name);
    cout<<endl<<"Create a user name: ";
    getline(cin,username);
    v.push_back(username);
    int n = v.size();
    for(int i=0; i<=n-2; i++){
        if(v[i] == v[n-1]) cout<<"Please enter another username"<<endl;
    }
    cout<<endl<<"Enter password: ";
    getline(cin,p1);
    cout<<endl<<"Re enter the password: ";
    getline(cin,p2);
    if(p1 != p2) cout<<"Please recheck the password: ";
    cout<<endl<<"SUBMIT";   
}
