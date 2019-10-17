import React, { Component } from 'react';
import style from './index.module.scss';

class Task extends Component {
    render() {
        return (
            <div className={style.container}>
                <h2>Task</h2>
                <h3>Create at least 2 different pages & make use of routing.</h3>
                <ul>
                    <li>Each page should contain one variation of your newly created “select” component</li>
                    <li>The first page’s “select” component should allow user to select only one value.</li>
                    <li>The second page’s “select” component should allow user to select multiple options.</li>
                    <li>Print state of selections somewhere outside the component.</li>
                </ul>
            </div>
        );
    }
}

export default Task;