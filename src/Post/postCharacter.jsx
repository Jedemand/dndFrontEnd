import { useState } from "react/cjs/react.development";
import DamageTypes from "../DropDownManagers/damageTypes";
import Conditions from "../DropDownManagers/conditions";
import Languages from "../DropDownManagers/languages";
import Senses from "../DropDownManagers/sense";
import Skills from "../DropDownManagers/skills";
import ObjectForm from "./ObjectContext"



function PostCharacter() {
    //define the character object and all parameters 
    const [charData, setCharData] = useState({
        name: "",
        initiative: 0,
        armor: 0,
        health: 0,
        speed: "",
        challenge: 0.0,
        size: "",
        alignment: "",
        race: "",
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        savingThrows: {},
        skills: {},
        damageResist: [],
        damageImmune: [],
        conditionalImmune: [],
        languages: [],
        senses: {},
        specialAbility: {},
        actions: {},
        charClass: "",
        inventory: [],
        armory: [],
        arsenal: [],
        spellBook: []
    })
//#region simple drop down objects
    const[dmgResist, setDmgResist] = useState("Acid")
    const[dmgImmune, setDmgImmune] = useState("Acid")
    const[conImmune, setConImmune] = useState("Blinded")
    const[lingo, setLingo] = useState("Common")
    
//#endregion
//#region drop down and mod objects
    const[senseData, setSenseData] = useState({
        senseName: "Perception",
        senseMod: 0
    })
    const [skillData, setSkillData] = useState({
        skillName: "Athletics",
        skillModifier: 0
    })
    const [savingData, setSavingData] = useState({
        savingName: "Athletics",
        savingModifier: 0
    })
//#endregion
//#region map objects
    
    const [ abilityData, setAbilityData] = useState({
        abilityName: "",
        abilityDescription: ""

    })
    const [actionData, setActionData] = useState({
        actionName: "",
        actionDecription: ""
    })
//#endregion

//#region context objects
    
    const initialSpellData = () => ({
        spellName: "",
        level: 0,
        school: "",
        castingTime: "",
        castRange: "",
        components: "",
        duration: "",
        spellDescription: "",
    });
  
    const [spellData, setSpellData] = useState(initialSpellData());

    const initialWeaponData = () => ({
            name: "",
            rarity: "",
            cost: 0,
            weight: 0.0,
            description: "",
            dice: "",
            dmgType: "",
            properties: []
    });

    const [weaponData, setWeaponData] = useState(initialWeaponData());

    const initialArmorData = () => ({
        name: "",
        rarity: "",
        cost: 0,
        weight: 0.0,
        description: "",
        armorClass: "",
        strength: "",
        stealth: "",
        category: "",
        donTime: "",
        doffTime: ""
    });

    const [armorData, setArmorData] = useState(initialArmorData());

    const initialItemData = () => ({
        name: "",
        rarity: "n",
        cost: 0,
        weight: 0.0,
        description: ""
    });

    const [itemData, setItemData] = useState(initialItemData());

//#endregion
   

//#region add parameters:values into maps and pass into charData object

    

    const abilityAdd = (e) => {
        e.preventDefault()
        console.log(abilityData)
        addIntoAbility()
        
    }

    const addIntoAbility = (e) => {
        charData.specialAbility[abilityData.abilityName] = abilityData.abilityDescription
    }

    const actionAdd = (e) => {
        e.preventDefault()
        console.log(actionData)
        addIntoAction()
        
    }

    const addIntoAction = (e) => {
        charData.actions[actionData.actionName] = actionData.actionDescription
    }
    
//#endregion

//#region add parameters:values into dropdown maps and pass
    const skillAdd = (e) => {
        e.preventDefault()
        charData.skills[skillData.skillName] = skillData.skillModifier
        
    }

    const savingAdd = (e) => {
        e.preventDefault()
        charData.savingThrows[savingData.savingName] = savingData.savingModifier

    }

    const addSense = (e) => {
        e.preventDefault()
        charData.senses[senseData.senseName] = senseData.senseMod
   }
//#endregion

//#region simple drop down lists
    const addDmgResist = (e) => {
        e.preventDefault()
        console.log(dmgResist)
        //for some ungodly reason, dmgResist is an object containing the parameter dmgResist
        charData.damageResist.push(dmgResist.dmgImmune);
    }

    const addDmgImmunity = (e) => {
        e.preventDefault()
        charData.damageImmune.push(dmgImmune.dmgImmune)
    }

    const addLanguage = (e) => {
        e.preventDefault()
        charData.languages.push(lingo.lingo)
    }

    const addCondition = (e) => {
        e.preventDefault()
        charData.conditionalImmune.push(conImmune.conImmune)
    }
//#endregion

//#region create objects and add to charData
    const addSpell = (e) => {
        e.preventDefault()
        charData.spellBook.push(spellData)
        console.log(spellData)
    }

    const addItem = (e) => {
        e.preventDefault()
        charData.inventory.push(itemData)
        console.log(itemData)
    }

    const addArmor = (e) => {
        e.preventDefault()
        charData.armory.push(armorData)
        console.log(armorData)
    }

    const addWeapon = (e) => {
        e.preventDefault()
        charData.arsenal.push(weaponData)
        console.log(weaponData)
    }

    
//#endregion

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(charData)
        fetch(`http://localhost:8080/character/`, {
            method: `post`,
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(charData)
        })
    }
    return ( 
        <div>
            <form>
                <h3>Basic Info</h3>
                <input type="text" placeholder="Name" name="name" value={charData.name} onChange={(c) => setCharData({...charData, name: c.target.value})}/>
                <input type="text" placeholder="AC" name="armor" value={charData.armor} onChange={(c) => setCharData({...charData, armor: c.target.value})}/>
                <input type="text" placeholder="Health" name="health" value={charData.health} onChange={(c) => setCharData({...charData, health: c.target.value})}/>
                <input type="text" placeholder="Speed" name="speed" value={charData.speed} onChange={(c) => setCharData({...charData, speed: c.target.value})}/>
                {/* <input type="text" placeholder="Challenge" name="challenge" value={charData.challenge} onChange={(c) => setCharData({...charData, challenge: c.target.value})}/> */}
                <input type="text" placeholder="Size" name="size" value={charData.size} onChange={(c) => setCharData({...charData, size: c.target.value})}/>
                <input type="text" placeholder="Alignment" name="alignment" value={charData.alignment} onChange={(c) => setCharData({...charData, alignment: c.target.value})}/>
                <input type="text" placeholder="Race" name="race" value={charData.race} onChange={(c) => setCharData({...charData, race: c.target.value})}/>
                <input type="text" placeholder="Class" name="charClass" value={charData.charClass} onChange={(c) => setCharData({...charData, charClass: c.target.value})}/>

                <h3>Stats</h3>
                <input type="text" placeholder="Strength" name="strength" value={charData.strength} onChange={(c) => setCharData({...charData, strength: c.target.value})}/>
                <input type="text" placeholder="Dexterity" name="dexterity" value={charData.dexterity} onChange={(c) => setCharData({...charData, dexterity: c.target.value})}/>
                <input type="text" placeholder="Constitution" name="constitution" value={charData.constitution} onChange={(c) => setCharData({...charData, constitution: c.target.value})}/>
                <input type="text" placeholder="Intelligence" name="intelligence" value={charData.intelligence} onChange={(c) => setCharData({...charData, intelligence: c.target.value})}/>
                <input type="text" placeholder="Wisom" name="wisdom" value={charData.wisdom} onChange={(c) => setCharData({...charData, wisdom: c.target.value})}/>
                <input type="text" placeholder="Charisma" name="charisma" value={charData.charisma} onChange={(c) => setCharData({...charData, charisma: c.target.value})}/>
            </form>
            <div>
                <h3>Skills</h3>
                    <form name="skillName" value={skillData.skillName} onChange={(s) => setSkillData({...skillData, skillName: s.target.value})}>
                        <Skills/>
                    </form>
                    <form  id="skill-form" onSubmit={(skillAdd)}>
                        <input type="text" placeholder="Modifier" name="skillModifier" value={skillData.skillModifier} onChange={(s) => setSkillData({...skillData, skillModifier: s.target.value})}/>
                        <input type="submit"/>
                    </form>
                <h3>Saving Throws</h3>
                    <form  name="savingName" value={savingData.savingName} onChange={(s) => setSavingData({...savingData, savingName: s.target.value})}>
                        <Skills/>
                    </form>
                        <form  id="saving-form" onSubmit={(savingAdd)}>
                        <input type="text" placeholder="Modifier" name="savingModifier" value={savingData.savingModifier} onChange={(s) => setSavingData({...savingData, savingModifier: s.target.value})}/>
                        <input type="submit"/>
                    </form>
                <h3>Senses</h3>
                    <form  name="senseName" value={senseData.senseName} onChange={(e) => setSenseData({...senseData, senseName: e.target.value})}>
                        <Senses/>
                    </form>
                    <form onSubmit={(addSense)}>
                        <input type="text" placeholder="Modifier" name="senseMod" value={senseData.senseMod} onChange={(d) => setSenseData({...senseData, senseMod: d.target.value})}/>
                        <input type="submit" value="Submit"/>
                    </form>
            </div>
            <div>
            <div>
                    <h3>Damage Resistences</h3>
                    <form onSubmit={(addDmgResist)} onChange={(d) => setDmgResist({dmgResist: d.target.value})}>
                        <DamageTypes/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <div>
                    <h3>Damage Immunities</h3>
                    <form onSubmit={(addDmgImmunity)} onChange={(d) => setDmgImmune({dmgImmune: d.target.value})}>
                        <DamageTypes/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <div>
                    <h3>Conditional Immunities</h3>
                    <form onSubmit={(addCondition)} onChange={(d) => setConImmune({conImmune: d.target.value})}>
                        <Conditions/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <div>
                    <h3>Languages</h3>
                    <form onSubmit={(addLanguage)} onChange={(d) => setLingo({lingo: d.target.value})}>
                        <Languages/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
            <div>
                    <h3>Special Abilities</h3>
                    <form  id="ability-form" onSubmit={(abilityAdd)}>
                        <input type="text" placeholder="Ability" name="abilityName" value={abilityData.abilityName} onChange={(s) => setAbilityData({...abilityData, abilityName: s.target.value})}/>
                        <input type="text" placeholder="Description" name="abilityDescription" value={abilityData.abilityDescription} onChange={(s) => setAbilityData({...abilityData, abilityDescription: s.target.value})}/>
                        <input type="submit"/>
                    </form>
                    <h3>Actions</h3>
                    <form  id="action-form" onSubmit={(actionAdd)}>
                        <input type="text" placeholder="Action" name="actionName" value={actionData.actionName} onChange={(s) => setActionData({...actionData, actionName: s.target.value})}/>
                        <input type="text" placeholder="Description" name="actionDescription" value={actionData.actionDescription} onChange={(s) => setActionData({...actionData, actionDescription: s.target.value})}/>
                        <input type="submit"/>
                    </form>
            </div>
            <div>  
                <h3> Spells </h3>
                <form onSubmit={(addSpell)}>
                <ObjectForm objectData={spellData} setObjectData={setSpellData} />
                <input type="submit"/>
                </form>
            </div>
            <div>
                <h3>Items</h3>
                <form onSubmit={(addItem)}>
                    <ObjectForm objectData={itemData} setObjectData={setItemData}/>
                    <input type="submit"/>
                </form>
            </div>
            <div>
                <h3>Armor</h3>
                <form onSubmit={(addArmor)}>
                    <ObjectForm objectData={armorData} setObjectData={setArmorData}/>
                    <input type="submit"/>
                </form>
            </div>
            <div>
                <h3>Weapon</h3>
                <form onSubmit={(addWeapon)}>
                    <ObjectForm objectData={weaponData} setObjectData={setWeaponData}/>
                    <input type="submit"/>
                </form>
            </div>
        
            <button onClick={(onSubmit)}> Submit Character </button>
         </div>
     );
}


export default PostCharacter;