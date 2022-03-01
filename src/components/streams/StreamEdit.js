import _ from 'lodash'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

const StreamEdit = (props) => {
  const {id} = props.match.params
	useEffect(() => {
		props.fetchStream(id)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onSubmit = (formValues) => {
		props.editStream(id,formValues)
	}
	if (!props.stream) {
		return <div className="ui loading">Loading...</div>
	}
	return (
		<div className="">
			<h3>Edit your Stream</h3>
			<StreamForm 
        initialValues={_.pick(props.stream, 'title', 'description')}
        onSubmit={onSubmit} 
        />
		</div>
	)
}
const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
