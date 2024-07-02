import "./ColorForm.css"

export default function ColorForm (){
    return (
        <form className="color__form">
            <label htmlFor="role">Role</label>
            <input id="role" name="role"></input>
            <label htmlFor="hex">Hex</label>
            <input id="hex" name="hex"></input>
            <label htmlFor="contrastText">Contrast Text</label>
            <input id="contrastText" name="contrastText"></input>
            <button type="submit">ADD COLOR</button>
            
        </form>
    )
}