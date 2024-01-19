
export const SelectBtns = ({category, selectedIndex, selectIndex}) => {
  
        return (
            <button
                key={index}
                className={selectedIndex === index ? "selected" : ""}
                onClick={() => selectIndex(index)}>
                    Edit {ex.company}
            </button>
        )

} 
