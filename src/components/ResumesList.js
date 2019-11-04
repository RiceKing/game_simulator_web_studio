import React from 'react';
import PersonCard from './PersonCard.js'

const getFakeMembers = count => new Promise((resolves, rejects) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`
  const request = new XMLHttpRequest()
  request.open('GET', api)
  request.onload = () => (request.status == 200) ?
    resolves(JSON.parse(request.response).results) :
    rejects(Error(request.statusTest))
  request.onerror = err => rejects(err)
  request.send()
})

class ResumesList extends React.Component {
  constructor() {
    super()
    this.state = {
      members: [],
      loading: false,
      error: null
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    getFakeMembers(this.props.count).then(
      members => {
        this.setState({members, loading: false})
      },
      error => {
        this.setState({error, loading: false})
      }
    )
  }

  render() {
    const { members, loading, error } = this.state
    return (
      <div className="member-list">
        {(loading) ?
          <span>Loading Members</span> :
          (members.length) ?
            members.map((user, i) =>
              <PersonCard key={i} {...user}
              onHire={() => console.log('cap')}
              />
            ) :
            <span>0 members loaded...</span>
        }
        {(error) ? <p>Error Loading Members: error</p> : ""}
      </div>
    )
  }
}


export default ResumesList;
