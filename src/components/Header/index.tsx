const Header = () => {
    return (
        <header>
            <div className=" content-container flex justify-between items-center">
                <img className="w-[200px] h-[60px]" src="./Logo.png" alt="CodeLibrary" />
                <p className=" w-[156px] h-[35px] flex justify-center items-center bg-primary-blue rounded-md font-base text-white font-bold cursor-pointer">
                    Premium
                </p>
            </div>
        </header>
    );
};

export default Header;