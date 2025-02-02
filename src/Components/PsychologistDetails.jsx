
export default function ViewUser({onePsy}) {
//   const { id } = useParams();
//   const location = useLocation();
//   const psychologist = location.state;

  if (!onePsy) {
    return <h1>No psychologist found!</h1>;
  }

  return (
    <div className="view-user">
      <h1>{onePsy.name.first} {onePsy.name.last}</h1>
      <img src={onePsy.picture.large} alt={onePsy.name.first} />
      <p>Email: {onePsy.email}</p>
      <p>Phone: {onePsy.phone}</p>
      <p>Location: {onePsy.location.city}, {onePsy.location.country}</p>
    </div>
  );
}
