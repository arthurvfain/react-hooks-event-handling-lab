// Code Keypad Component Here
function Keypad()
{
    function passwordHandler(e)
    {
        console.log(`Entering password...`)
    }
    return (
        <form>
            <input onChange={passwordHandler} type="password"/>
        </form>
    )
}

export default Keypad