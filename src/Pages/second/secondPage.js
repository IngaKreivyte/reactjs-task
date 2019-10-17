
import React, { Component } from 'react';
import style from './index.module.scss';

class secondPage extends Component {
    state={
        dropdownExpanded:false,
        inputValue:[],
        tagselection:[],
        words:['bulb','bee','tea','copper','division','bit','bits','person','knot','laborer','thrill','aunt','island','mother','cheese','spring','sleep','tiger','wheel','machine','powder','leg','letters','talk','picture','bite','pocket','mine','level','food','party','umbrella','plot','road','brick','club','basket','butter','books','test','watch','sea','fang','smoke','hate', 'system', 'stem', 'society', 'driving']
    }

    toggleDropdown = () => {
        this.setState({
         dropdownExpanded:!this.state.dropdownExpanded,
        })
    }
    onInputChange=(e)=>{
        this.setState({ inputValue:e.target.value})
        this.setState({dropdownExpanded:true})
    }
    onFormSubmit =(e)=>{
        e.preventDefault();
    }
        
    render() {
        var width = 50 ;
        if(this.state.inputValue.length>0)  width = 5 + 3*this.state.inputValue.length +'%';
            let  words= this.state.words
                .filter(word=>{
                    return word.indexOf(this.state.inputValue)>=0;
                })
                .filter(word => !this.state.tagselection.includes(word))
                .map((word, i) => <div  onClick={()=>{ this.setState({ inputValue:[],tagselection:[...this.state.tagselection, word]})}} key = {i}> {word} </div>)    
                    return (
                        <div onClick={this.toggleDropdown} className={style.container}>
                            <h3>The “select” component allows user to select multiple options</h3>
                            <div  onSubmit={this.onFormSubmit} className= {this.state.dropdownExpanded ? [style.dropdown, style.active,  ].join(' '):style.dropdown} >
                                <div className={style.block}>
                                    {this.state.tagselection.length>0 &&  this.state.tagselection.map((word,i)=>
                                        <div className={style.tagselection} key={i} >
                                            <span className={style.delete} 
                                            onClick={()=>{this.setState({tagselection:[...this.state.tagselection.filter(l=>l!==this.state.tagselection[i])] })}}> 
                                            x
                                            </span>
                                            {word}
                                        </div>)
                                    }
                                    <input onChange={this.onInputChange}
                                            name='inputValue'
                                            autoComplete="off" 
                                            style={{width}}
                                            value={this.state.inputValue}
                                            onClick={()=>{this.toggleDropdown()}}  
                                            type='text'
                                            placeholder='select...'
                                    />  
                                </div>
                                <div className={style.rightBlock}>
                                    <div className={style.arrow}/>
                                </div>
                                {words.length  ? <div className={style.options}>
                                    {words}
                                </div> : <div className={style.error}> Unfortunately, no results found </div>
                                }
                            </div>
                        </div>
                    )
            }
    }

export default secondPage;