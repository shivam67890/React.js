import buttonCss from './button.module.css' //module css
function button(){
    return (
        <button className={buttonCss.button}>click here</button>
    );
}
export default button