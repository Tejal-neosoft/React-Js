import React from 'react';
import ListDetails from './ListDetails';

const empData=[
  
    {id:'01',name:'Tejal',age:21,dept:'Software',location:'Mumbai'},
    {id:'02',name:'Mayuri',age:24,dept:'Finance',location:'Pune'},
    {id:'03',name:'Sandy',age:22,dept:'HR',location:'Banglore'},
    {id:'04',name:'Sharda',age:42,dept:'Admin',location:'Pune'},
    {id:'05',name:'Rutuja',age:22,dept:'Software',location:'Indore'},
    {id:'06',name:'Jagruti',age:24,dept:'Software',location:'Mumbai'},
    {id:'07',name:'Trupti',age:40,dept:'Sales',location:'Indore'},
    {id:'08',name:'Payal',age:24,dept:'Sales',location:'Mumbai'},
    {id:'09',name:'Ashvini',age:24,dept:'HR',location:'Nagpur'},
    {id:'10',name:'Mahesh',age:35,dept:'Software',location:'Pune'},
    {id:'11',name:'Shlok',age:30,dept:'Admin',location:'Chennai'},
    {id:'12',name:'Pranav',age:26,dept:'Finance',location:'Pune'},
    {id:'13',name:'Sarvesh',age:23,dept:'HR',location:'Banglore'},
    {id:'14',name:'Abhinay',age:29,dept:'Software',location:'Mumbai'},
    {id:'15',name:'Vidya',age:55,dept:'Sales',location:'Pune'},
    {id:'16',name:'Sangita',age:45,dept:'Admin',location:'Mumbai'},
    {id:'17',name:'Vijay',age:50,dept:'Finance',location:'Banglore'},
    {id:'18',name:'Nilima',age:33,dept:'Admin',location:'Nagpur'},
    {id:'19',name:'Pranid',age:44,dept:'Finance',location:'Chennai'},
    {id:'20',name:'Anvi',age:38,dept:'HR',location:'Pune'},
]
export default function List(props) {
    return (
     <ListDetails e1={empData}/>
   
    )
}

