import React , {useEffect} from 'react';
import LogItems from './LogItems';
import Preloader from '../layout/Preloader';
import {connect} from 'react-redux';
import {getLogs} from '../../actions/logActions';


const Logs = ({log : {loading,logs}, getLogs}) => {
    useEffect(() => {
        getLogs();
       //estlint-disable-next-line
    }, [])
    if(loading || logs === null){    
        return <Preloader />
    }
    else{
        console.log("logserer", logs)

        return (
            <ul className="collection   with-header">
                <li className="collection-header">
                <h4 className="center">
                    System Logs
                </h4>
                </li>
        {(!loading && logs.length == 0) ?(<p className="center">{loading}No records to show.....</p>) : 
                      logs.map((log)=><LogItems log={log} key={log.id}/>)
               } 
            </ul>
        )
    }
}

const mapStateToProps = state =>({  //we can also get the props individually also like logs : state.log.logs , loading :  state.log.loading
    log : state.log
})

export default connect(mapStateToProps,{
    getLogs
})(Logs)
