import { useTranslation } from "next-i18next";
import { coordsToGoogleMapsUrl } from "../../utils";
import NewTabLink from "../NewTabLink";
import features from "../../configs/features";
import QrCode from "./QrCode";

const LocationCard = ({ data }) => {
  const { t } = useTranslation();
  const { type, address, thumbnail, lat, lon } = data;
  const mapUrl = lat && lon && coordsToGoogleMapsUrl(lat, lon);

  return (
    <section className="location-card-reception">
      {features.locationCardTypes && type && type.length &&
        <div className="location-card-type">
          <p>{type}</p>
        </div>
      }
      {address && address.length &&
        <div className="location-card-address-wrapper">
          <div className="location-card-address">
            <p>{address}</p>
          </div>
        </div>
      }
      {thumbnail && thumbnail.length &&
        <div
          className="location-card-thumbnail mx-auto"
          style={{ width: "150px", height: "150px" }}
        >
          <img src={thumbnail} alt={address || type} style={{ objectFit: "cover" }} />
        </div>
      }
      {mapUrl &&
        <div className="mx-auto">
          <QrCode url={mapUrl} />
        </div>
      }
      {mapUrl && mapUrl.length &&
        <NewTabLink href={mapUrl} className="location-card-google font-semibold">
          {t("Map")}
        </NewTabLink>
      }
    </section>
  );
}
export default LocationCard;
