// Write your code here

const DestinationItem = props => {
  // eslint-disable-next-line no-unused-vars
  const {key, listDetails} = props
  return (
    <li>
      <img src={listDetails.imgUrl} alt={listDetails.name} />
      <p>{listDetails.name}</p>
    </li>
  )
}

export default DestinationItem
