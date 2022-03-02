import './Search.scss'

const InputGenerator = ({inputFields, onSearch, onShowModalInsert}) => {
    return (
        <div className="wrapper-search">
            <div className="row">
                {inputFields.map(field => (
                    <div key={field.placeholder} className="col-md-4 col-lg-4 col-xl-3 mb-3">
                        <input
                            className="wrapper-search-input"
                            type="text" 
                            placeholder={field.placeholder}
                            onChange={(event) => {field.onChange(field.name, event.target.value);}}
                        />
                    </div>
                ))}
                <div className="col-md-12 col-lg-12 col-xl-3 mb-3 wrapper-btn-search">
                    <button variant="contained" className="mx-2" onClick={() => onSearch('sometext')}>Search</button>
                    <button variant="contained" className="mx-2" onClick={() => onShowModalInsert(true)}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default InputGenerator;