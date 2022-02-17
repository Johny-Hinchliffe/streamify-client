import React from 'react'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '270412453484-q750i0ihv4d1c4k0is6etnk69ahcec0i.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }
    render() {
        return <div className="">GoogleAuth</div>
    }
}

export default GoogleAuth