import React from 'react';
import Select from 'react-select';

class StartPage extends React.Component {
    render() {
        const gameDimensions = [
            {
                label: 'Three x Three',
                value: '3'
            },
            {
                label: 'Four x Four',
                value: '4'
            },
            {
                label: 'Five x Five',
                value: '5'
            },
            {
                label: 'Six x Six',
                value: '6'
            },
        ];
        return (
            <div>
                <div className='opener'>
                    <h1>Number Arranger</h1>
                    <span>
                        Arrange the numbers on the grid in numerical order in as few of steps as possible.
                        <br/>If you get stuck, or wish you restart, just refresh your browser.
                    </span>
                </div>
                <label className={'dimension-label'}>Select Your Gameboard Size</label>
                <Select 
                    className='select-size'
                    options={gameDimensions}
                    onChange={this.props.setGameDimension}
                />
            </div>
        );
    }
}

export default StartPage;