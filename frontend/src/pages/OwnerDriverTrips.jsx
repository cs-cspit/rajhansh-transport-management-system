import OwnerLayout from "../components/OwnerLayout";
import OwnerDriverTrips from "../components/OwnerDriverTrips";

export default function OwnerTripsPage() {
  return (
    <OwnerLayout>
      <div style={{ padding: "2rem" }}>
        <OwnerDriverTrips />
      </div>
    </OwnerLayout>
  );
}