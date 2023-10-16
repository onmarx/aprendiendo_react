export const Square = (props) => {
	const {children, isSelected, updateBoard, index} = props;
	const classSquare = `square ${isSelected ? 'is-selected' : ''}`
	const handleClick = () => {
		updateBoard(index)
	}
	return(
	<div onClick={handleClick} className={classSquare} key={index}>
		{children}
	</div>
	)
}

