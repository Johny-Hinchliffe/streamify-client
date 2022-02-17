import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import StreamList from './streams/StreamList'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamShow from './streams/StreamShow'
import StreamCreate from './streams/StreamCreate'
import Header from './Header'
//BrowserRouter - Most difficult to deploy but not easier
// HashRouter - # after
// MemoryRouter - no change of URL /

const App = () => {
	return (
		<div className="ui container">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<StreamList />} />
					<Route path="/streams/create" element={<StreamCreate />} />
					<Route path="/streams/edit" element={<StreamEdit />} />
					<Route path="/streams/delete" element={<StreamDelete />} />
					<Route path="/streams/show" element={<StreamShow />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
