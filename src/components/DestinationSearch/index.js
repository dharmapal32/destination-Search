// Write your code here

import {Component} from 'react'

const DestinationSearch = props =>{
    const { destinationsList }= props
  state = {
    searchInput: '',
    initialList : destinationsList
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput,initialList} = this.state
    const searchResult = initialList.filter((each) => each.name.includes(searchInput))
    return (
      <div>
        <h1>Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearch}
          value={searchInput}
        />
        <ul>
          {searchResults.map(eachUser => (
            <DestinationItem
              listDetails={eachUser}
              key={eachUser.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch