import Loader from "./loader";

// single loader
function PrdDetailsLoader({ loading }) {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "700px" }}
    >
      <Loader loading={loading} />
    </div>
  );
}

export default PrdDetailsLoader;
