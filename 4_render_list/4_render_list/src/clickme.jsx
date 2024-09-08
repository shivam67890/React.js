// Integrate both the button click handling logic and updating the button text
function Clickme() {
    let count = 0;
    const func = (name) => {

        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }
        else {
            count++;
            console.log(`ooooooooooh ${name} you touched me ${count} times 🫨🫨`)
        }
    };
    const newww = (e) => e.target.textContent = "ouch🤡🤡";
    const handleit = (e) => {
        func("shiv")
        newww(e);
    }
    return (
        <button onClick={handleit}>
            click me
        </button>


    );
}
export default Clickme