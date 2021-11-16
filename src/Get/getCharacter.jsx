import { useEffect, useState } from "react";

function GetCharacter () {
    const [searchType, setSearchType] = useState('/')
    const [name, setName] = useState('')
    const [characters, setCharacters] = useState([])


    useEffect(() => {
        fetch(`http://localhost:8080/character${searchType}`)
        .then(response => response.json())
        .then(json => setCharacters(json))
        
    }, [searchType])



    return (
        <div>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <button onClick={()=> setSearchType('/' + name)}>Search by Name </button>
            </div>
            <h1>Characters</h1>
            {characters.map(character => {
                return <li key={character.actorId}>
                            <h2>{character.name}</h2>
                            <h3>{character.charClass}</h3>
                            <h3>{character.race}</h3>
                            <table border="1em" cellPadding="4em">
                                <tr>
                                    <td>Armor: {character.armor}</td>
                                    <td>Health: {character.health}</td>
                                    <td>Speed: {character.speed}</td>
                                    <td>Size: {character.size}</td>
                                    <td>Alignment: {character.alignment}</td>
                                    <td>Race: {character.race}</td>
                                </tr>
                            </table>
                            <br />
                            <table border="1em" cellPadding="4em">
                                <tr>
                                <td>Strength: {character.strength}</td>
                                <td>Dexterity: {character.dexterity}</td>
                                <td>Constitution: {character.constitution}</td>
                                <td>Intelligence: {character.intelligence}</td>
                                <td>Wisdom: {character.wisdom}</td>
                                <td>Charisma: {character.charisma}</td>
                                </tr>
                            </table>
                            <ul>
                                <h3>Saving Throws</h3>
                                {Object.entries(character.savingThrows).map(throws => {
                                    return <li>{throws[0]} : {throws[1]}</li>
                                })}
                            </ul>

                            <ul>
                                <h3>Skills</h3>
                                {Object.entries(character.skills).map(skill => {
                                    return <li>{skill[0]} : {skill[1]}</li>
                                })}
                            </ul>

                            <ul>
                                <h3>Damage Resistances</h3>
                                {character.damageResist.map(resist => {
                                    return <li>{resist}</li>
                                })}
                            </ul>

                            <ul>
                                <h4>Damage Immunities</h4>
                                {character.damageImmune.map(immune => {
                                    return <p>{immune}</p>
                                })}
                            </ul>  

                            <ul>
                                <h3>Conditional Immunities</h3>
                                {character.conditionalImmune.map(condi => {
                                    return <li>{condi}</li>
                                })}
                            </ul>

                            <ul>
                                <h3>Languages</h3>
                                {character.languages.map(lingo => {
                                    return <li>{lingo}</li>
                                })}
                            </ul>

                            <ul>
                                <h3>Senses</h3>
                                {Object.entries(character.senses).map(sense => {
                                        return <li>{sense[0]} : {sense[1]}</li>
                                    })}
                            </ul>

                            <ul>
                                <h3>Special Abilities</h3>
                                    {Object.entries(character.specialAbility).map(ability => {
                                        return <li>{ability[0]} : {ability[1]}</li>
                                    })}
                            </ul>

                            <ul>
                                <h3>Actions</h3>
                                    {Object.entries(character.actions).map(action => {
                                        return <li>{action[0]} : {action[1]}</li>
                                    })}
                            </ul>

                            <ul>
                                <h3>Inventory</h3>
                                    {character.inventory.map(item => {
                                        return  <ul>{item.name}
                                                    <li>{item.rarity}</li>
                                                    <li>{item.cost}</li>
                                                    <li>{item.weight}</li>
                                                    <li>{item.description}</li>
                                                </ul>
                                                

                                    })}
                            </ul>

                            <ul>
                                <h3>Armory</h3>
                                    {character.armory.map(armor => {
                                        return  <ul>{armor.name}
                                                    <li>{armor.rarity}</li>
                                                    <li>{armor.cost}</li>
                                                    <li>{armor.weight}</li>
                                                    <li>{armor.description}</li>
                                                    <li>{armor.armorClass}</li>
                                                    <li>{armor.strength}</li>
                                                    <li>{armor.stealth}</li>
                                                    <li>{armor.category}</li>
                                                    <li>{armor.donTime}</li>
                                                    <li>{armor.doffTime}</li>
                                                </ul>
                                                

                                    })}
                            </ul>

                            <ul>
                                <h3>Arsenal</h3>
                                    {character.arsenal.map(weapon => {
                                        return  <ul>{weapon.name}
                                                    <li>{weapon.rarity}</li>
                                                    <li>{weapon.cost}</li>
                                                    <li>{weapon.weight}</li>
                                                    <li>{weapon.description}</li>
                                                    <li>{weapon.dice}{weapon.dmgType}</li>
                                                    <li>{weapon.properties}</li>
                                                </ul>
                                                

                                    })}
                            </ul>

                            <ul>
                                <h3>Spell Book</h3>
                                    {character.spellBook.map(spell => {
                                        return  <ul>{spell.spellName}
                                                    <li>{spell.level}</li>
                                                    <li>{spell.school}</li>
                                                    <li>{spell.castingTime}</li>
                                                    <li>{spell.castRange}</li>
                                                    <li>{spell.components}</li>
                                                    <li>{spell.duration}</li>
                                                    <li>{spell.spellDescription}</li>
                                                </ul>
                                                

                                    })}
                            </ul>
                            


            </li>
                
            })}
        </div>
    );
}


export default GetCharacter ;