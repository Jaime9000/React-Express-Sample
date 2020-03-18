import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Team extends Component{


    render(){
        return(
            <div className="App"> 
                <h1>The Team Sheet</h1>
                {/* Link to List.js */}
                <div>
                <iframe width="354" height="526" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://lineupbuilder.com/2014/custom/354x526.php?p=11&amp;a=1&amp;t=&amp;c=dc0000&amp;1=GK___388_174&amp;2=DL___317_64&amp;3=DCL___327_138&amp;4=DCR___327_211&amp;5=DR___317_284&amp;6=MLA___204_64&amp;7=MCL___222_138&amp;8=MCR___222_211&amp;9=MRA___204_284&amp;10=WL___88_104&amp;11=FCR___98_211&amp;c2=ffffff&amp;c3=ffffff&amp;output=embed"></iframe>
                </div>

                <Link to={'./list'}>
                <button variant="raised">
                    My List
                </button>
        
                </Link>
      
            </div>
        )
    }
}

