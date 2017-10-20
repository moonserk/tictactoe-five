import React from 'react';
import Square from './Square';
import './App.css';

class Board extends React.Component{
	constructor(props){
		super(props);
		const width = this.props.height;
		this.state = {
			squares: {},
			index_arr: Array(width).fill(null),
            isX: true,
            status: null,
		};
	}

	handleClick(i, j){
		var index = i + '' + j;
		if(!this.state.squares.hasOwnProperty(index)) {
			var arr = this.state.squares;
            arr[index] = this.state.isX ? 'X' : '0';
            this.setState({status: ''})
            this.setState({squares: arr, isX: !this.state.isX});
         //   console.log(arr[index], parseInt(index.split('')[1]) + 1, arr[index]);
         //   console.log(this.state.squares[index]);
            this.calculateWinner(arr[index], index, this.state.squares);
            
		}
	}
    
    
	renderSquare(i, j){
		var index = i + '' + j;
		return <Square value={this.state.squares[index]} onClick={() => {this.handleClick(i, j);}}/>;
    }

    calculateWinner(square, index, squares){
        const i = parseInt(index.split('')[0], 10);
        const j = parseInt(index.split('')[1], 10);

        function nearLeft(inx, jnx){
            return function(i, j){
                if(squares[inx + '' + jnx] === square){
                    return 1 + nearLeft(inx - i, jnx - j)(i, j);
                }
                else{
                    return 0;
                }
            }
        }
        function nearRight(inx, jnx){
            return function(i, j){
                if(squares[inx + '' + jnx] === square){
                    return 1 + nearRight(inx + i, jnx + j)(i, j);
                }
                else{
                    return 0;
                }
            }
        }
        function nearLeftD(inx, jnx){
            return function(i, j){
                if(squares[inx + '' + jnx] === square){
                    return 1 + nearLeftD(inx + i, jnx - j)(i, j);
                    
                }
                else{
                    return 0;
                }
            }
        }
        function nearRightD(inx, jnx){
            return function(i, j){
                if(squares[inx + '' + jnx] === square){
                    return 1 + nearRightD(inx - i, jnx + j)(i, j);
                }
                else{
                    return 0;
                }
            }
        }
       const horizontal = nearLeft(i, j - 1)(0, 1) + 1 + nearRight(i, j + 1)(0, 1);
       const vertical = nearLeft(i - 1, j)(1, 0) + 1 + nearRight(i + 1, j)(1, 0);
       const diagonal = nearLeft(i - 1, j - 1)(1, 1) + 1 + nearRight(i + 1, j + 1)(1, 1);
       const rDiagonal = nearLeftD(i + 1, j - 1)(1, 1) + 1 + nearRightD(i - 1, j + 1)(1, 1);
       console.log(rDiagonal, nearLeftD(i + 1, j - 1)(1, 1), nearRightD(i - 1, j + 1)(1, 1), i - 1, j + 1);
       if(horizontal >= 5 || vertical >= 5 || diagonal >= 5 || rDiagonal >= 5){
           this.setState({status: "Winner is " + square});
           console.log(square + ' Wins');
       }
    }
    
	render(){
        const status = "Next player: " + (this.state.isX ? 'X' : '0');
		return(
            <div>
            <div className='status'>{status}</div>
            <div className='status-winner'>{this.state.status}</div>
			<div className={'App-header-' + this.props.size}>
				{this.state.index_arr.map((value, row_index) => {
					return(<div className='board-row' key={row_index}>{
						this.state.index_arr.map((value, col_index) => {
							return(<div key={row_index + ' ' +col_index}>{this.renderSquare(row_index, col_index)}</div>);
						})
					}</div>
                    );})
                }
            </div>
            </div>
		);
	}
}

export default Board;