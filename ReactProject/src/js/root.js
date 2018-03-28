    import React from 'react';
    import ReactDOM from 'react-dom';


    import 'antd/dist/antd.css';
    import { Button } from 'antd';
    import {Router,Route,hashHistory} from 'react-router';

    import PCIndex from './components/pc_index';



    export default class Root extends React.Component{
        render(){
            return(
                // 替换了index  成为入口
                <div>
                    <PCIndex/>
                </div>
            );
        };
    }


    ReactDOM.render(<Root/>,document.getElementById("mainContainer"));