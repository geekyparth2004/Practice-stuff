#include<bits/stdc++.h>
using namespace std; 
int containduplicates(vector <int>  &v)
{
    map <int,int> mp; 
    
    int count = 0; 
    for(auto x : v)
    {
        mp[x]++;
    }

    for(auto x : mp)
    {
        if(x.second  > 1)
        count++; 

    }

    return count; 
}

int main()
{
    int n; 
    cout<<"Enter size"; 
    cin>>n;

    vector <int> v; 

    for(int i = 0 ; i < n ; i++)
    {
        int val; 
        cin>>val; 
        v.push_back(val);
    }
    

    cout<<containduplicates(v);

    
}