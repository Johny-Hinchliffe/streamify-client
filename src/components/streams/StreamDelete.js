import { useEffect } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'

const StreamDelete = (props) => {
	const { id } = props.match.params

	useEffect(() => {
		props.fetchStream(id)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	const actions = (
		<>
			<button onClick={() => props.deleteStream(id)}className="ui negative button">Delete</button>
			<Link to='/' className="ui button">Cancel</Link>
		</>
	)

	const renderContent = !props.stream ? (
		<div className="">''</div>
	) : (
		`Are you sure you want to delete the stream: ${props.stream.title}?`
	)

	return (
		<Modal
			title="Delete Stream"
			content={renderContent}
			actions={actions}
			onDismiss={() => history.push('/')}
		/>
	)
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)
