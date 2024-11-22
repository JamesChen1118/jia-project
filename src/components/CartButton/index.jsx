const CartButton = ({ type, value, onClick, disabled }) => {
    const getButtonContent = () => {
        switch (type) {
            case 'minus':
                return '-';
            case 'plus':
                return '+';
            case 'delete':
                return '×';
            case 'quantity':
                return (
                    <span className="
                        text-xl font-bold text-[#0736b8] 
                        mx-2.5 px-2.5 py-0.5 
                        border border-[rgba(255,170,13,0.8)] 
                        rounded-[5px]
                        min-w-[30px] 
                    ">
                        {value}
                    </span>
                );
            default:
                return '';
        }
    };

    if (type === 'quantity') {
        return getButtonContent();
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                w-[30px] h-[30px] text-xl font-bold
                rounded-[5px] border-none cursor-pointer 
                transition-all duration-300
                flex items-center justify-center
                ${type === 'delete' 
                    ? 'ml-4 bg-[rgb(255,99,71)] text-white hover:bg-[rgb(255,69,0)] hover:scale-105'
                    : 'bg-[rgb(245,222,180)] text-black hover:bg-[rgba(255,170,13,0.8)] hover:text-white'
                }
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}
            `}
        >
            {getButtonContent()}
        </button>
    );
};

export default CartButton;
