import { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import flv from 'flv.js'
import { fetchStream } from '../../actions'

const StreamShow = (props) => {
	const videoRef = useRef()

	const { id } = props.match.params
  let player = null
  
  
	useEffect(() => {
    console.log('running')
    props.fetchStream(id)
    buildPlayer()
    return () => {
      console.log(player)
      console.log('destroyed')
      player.destroy()
    }
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

  // useEffect(() => {
  //   // if (props.stream && !player){
  //   //   props.fetchStream(id)
  //   // buildPlayer()
  //   // }
  //   // if(!videoRef.current){
  //   //   return null
  //   // }
  //   buildPlayer()
  
 
  // })



	// useEffect(() => {
	// 	return () => {
  //     console.log(player)
	// 		player.destroy()
	// 	}
	// }, [])

	const buildPlayer = () => {
		if (player || !props.stream) {
			return
		}
		player = flv.createPlayer({
			type: 'flv',
			url: `http://localhost:8000/live/${id}.flv`,
		})
		player.attachMediaElement(videoRef.current)
		player.load()
	}
	if (!props.stream) {
		return <div className="">Loading...</div>
	}

	const { title, description } = props.stream
	return (
		<div>
			<video ref={videoRef} style={{ width: '100%' }} controls />
			<h1>{title}</h1>
			<h5>{description}</h5>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	}
}
export default connect(mapStateToProps, { fetchStream })(StreamShow)
