const ItemListContainer = ({greeting}) => {
    const greetingStyles = {
        fontSize: "3rem",        
        fontWeight: "700",
        textAling: "center",
        color: "#f4f4f4"    
    }
    return (
        <div style={greetingStyles}>
            {greeting}
        </div>
    )
}

export default ItemListContainer;