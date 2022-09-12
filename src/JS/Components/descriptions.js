import "../../CSS/descriptions.css"
import "../../CSS/components.css"

function Descriptions() {

    setTimeout(function () {
        let sudoku = document.getElementById('sudoku_desc');
        const onMouseMove = (e) => {
            sudoku.style.left = e.pageX + 20 + 'px';
            sudoku.style.top = e.pageY  + 20 + 'px';
        }
        document.addEventListener('mousemove', onMouseMove);
    }, 100)

    return (
        <>
            <div className = "desc" id = "sudoku_desc">test</div>
        </>
    )

}

export default Descriptions