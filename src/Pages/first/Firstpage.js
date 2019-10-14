import React, { Component } from 'react';
import style from './index.module.scss';

class Firstpage extends Component {
    state={
        dropdownExpanded:false,
        inputValue:'',
        words:['bulb','bee','copper','division','bit','bits','person','knot','laborer','thrill','aunt','island','mother','cheese','spring','sleep','tiger','wheel','machine','powder','leg','letters','talk','picture','bite','pocket','mine','level','food','party','umbrella','plot','road','brick','club','basket','butter','books','test','watch','sea','fang','smoke','hate', 'system', 'stem', 'society', 'driving']
      }
      toggleDropdown = () => {
        this.setState({
         dropdownExpanded:!this.state.dropdownExpanded,
        })
      }
      onInputChange=(e)=>{
        this.setState({inputValue:e.target.value})
        this.setState({dropdownExpanded:true})
    }
        onFormSubmit =(e)=>{
            e.preventDefault();
        }


    render() {

    let  words= this.state.words
                    .filter(word=>{
                        return word.indexOf(this.state.inputValue) >= 0;
                    })
                    .map((word, i) => <div  onClick={()=>{ this.setState({inputValue:word})}} key = {i} > {word} </div>)
        return (
            <div  onSubmit ={this.onFormSubmit} className= {this.state.dropdownExpanded ? style.active:style.dropdownExpanded} >
                <input onChange={this.onInputChange}
                    name='inputValue'
                    autoComplete="off" 
                    value={this.state.inputValue}
                    onClick={()=>{this.toggleDropdown()}}  
                    className={style.selected}
                    type='text'
                    placeholder='select..' />
                {
                    words.length ? <div className={style.options}>
                    {words}
                </div> : <div>no results found :(</div>
                }
            </div>
        )
    }
}

export default Firstpage;