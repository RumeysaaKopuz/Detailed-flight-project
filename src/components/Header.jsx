import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);

  return (
    <header>
      <div>
        <img src="https://www.freepnglogos.com/uploads/turkish-airlines-logo-emblem-3.png" />
        <h2>TURKISH AIRLINES</h2>
      </div>
      <h4>
        {store.isLoading
          ? "uçuşlar hesaplanıyor..."
          : `${store.flights.lenght} Uçuş Bulundu`}
      </h4>
    </header>
  );
};

export default Header;
 