import FoodShelterPointCard from "./FoodShelterPointCard";
import Map from "../Map/Map";

const FoodAndShelterInfo = ({ title, data }) => {
  const { general, reception } = data;

  return (
    <section className="foodshelter-card">
      <div className="bg-gray-200 p-3">
        <ul className="foodshelter-information-info-list list-disc">
          <p className="font-semibold mb-5 uppercase">
            {title}
          </p>
          {general.map((item) => {
            return (
              <li className="mb-2" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <Map markers={reception} />
      <div className="flex flex-wrap w-full items-center justify-center">
        {reception.map((item, index) => {
          return <FoodShelterPointCard data={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default FoodAndShelterInfo;
