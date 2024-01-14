export const PersonalInfoForm = ({updateProperty}) => {
    return (
        <div>
            <form>
            <h2>Personal Info</h2>
            <label htmlFor="nameInput">Name </label>            
            <input id="nameInput" name="nameInput" placeholder='Name' type="text" onChange={(e) => updateProperty('name', e.target.value)} />
            <label htmlFor="emailInput">Email </label>
            <input id="emailInput" name="emailInput" placeholder='Email' type="email" onChange={(e) => updateProperty('email', e.target.value)} />
            <label htmlFor="phoneInput">Phone </label>
            <input id="phoneInput" name="phoneInput" placeholder='Phone' type="number" onChange={(e) => updateProperty('phone', e.target.value)} />
            <label htmlFor="addressInput">Address </label>
            <input id="addressInput" name="addressInput" placeholder='address' type="text" onChange={(e) => updateProperty('address', e.target.value)} />
            </form>
        </div>
    )
}