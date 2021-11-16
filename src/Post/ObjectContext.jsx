function ObjectForm({objectData, setObjectData}) {

    const handleChange = (key, value) => {
        const newObjectData = {...objectData};
        newObjectData[key] = value;
        setObjectData({...newObjectData });
    };
    
    return( 

        <ul>
            {Object.entries(objectData).map(parameter => {
                return <input name={parameter[0]} key={parameter[0]} type="text" placeholder={parameter[0]} value={objectData.key} onChange={(c) => handleChange(parameter[0], c.target.value)}/>
            })}
        </ul>
      );
    }

export default ObjectForm;

